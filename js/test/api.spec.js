import ApiService from "../api/apiService.js";

/**
 * Crea datos independientes para cada prueba del servicio.
 * @param {Object} [cambios={}]
 * @returns {Object}
 */
function crearRegistro(cambios = {}) {
  return {
    nombre: "Remera",
    categoria: "Indumentaria superior",
    tipo: "remera",
    estilo: "casual",
    talles: ["S", "M", "L"],
    precio: 15000,
    imagen: {
      id: "remeras",
      src: "assets/img/remera-blanca.jpg",
      alt: "Remera de algodón blanca",
    },
    ...cambios,
  };
}

describe("ApiService", function () {
  describe("fetchData", function () {
    let descriptorFetch;
    let fetchSimulado;

    beforeEach(function () {
      descriptorFetch = Object.getOwnPropertyDescriptor(globalThis, "fetch");
      fetchSimulado = jasmine.createSpy("fetch");
      Object.defineProperty(globalThis, "fetch", {
        configurable: true,
        writable: true,
        value: fetchSimulado,
      });
    });

    afterEach(function () {
      if (descriptorFetch) {
        Object.defineProperty(globalThis, "fetch", descriptorFetch);
      } else {
        delete globalThis.fetch;
      }
    });

    it("consulta el endpoint predeterminado y devuelve el JSON recibido", async function () {
      const datos = [crearRegistro()];
      const json = jasmine.createSpy("json").and.resolveTo(datos);
      fetchSimulado.and.resolveTo({ ok: true, status: 200, json });

      await expectAsync(ApiService.fetchData()).toBeResolvedTo(datos);

      expect(fetchSimulado).toHaveBeenCalledOnceWith("api/productos.json");
      expect(json).toHaveBeenCalledTimes(1);
    });

    it("permite consultar un endpoint indicado por el consumidor", async function () {
      const datos = { productos: [crearRegistro()] };
      fetchSimulado.and.resolveTo({
        ok: true,
        status: 200,
        json: async () => datos,
      });

      await expectAsync(ApiService.fetchData("api/otro-catalogo.json"))
        .toBeResolvedTo(datos);

      expect(fetchSimulado).toHaveBeenCalledOnceWith("api/otro-catalogo.json");
    });

    for (const status of [404, 500]) {
      it(`rechaza HTTP ${status} sin intentar convertir el cuerpo a JSON`, async function () {
        const json = jasmine.createSpy("json");
        fetchSimulado.and.resolveTo({ ok: false, status, json });

        await expectAsync(ApiService.fetchData())
          .toBeRejectedWithError(Error, `HTTP error! status: ${status}`);

        expect(json).not.toHaveBeenCalled();
      });
    }

    it("propaga el rechazo de Fetch cuando falla la conexión", async function () {
      const errorRed = new TypeError("No se pudo conectar");
      fetchSimulado.and.rejectWith(errorRed);

      await expectAsync(ApiService.fetchData()).toBeRejectedWith(errorRed);
    });

    it("informa un JSON inválido y conserva el error original como causa", async function () {
      const errorJson = new SyntaxError("JSON incompleto");
      fetchSimulado.and.resolveTo({
        ok: true,
        status: 200,
        json: jasmine.createSpy("json").and.rejectWith(errorJson),
      });

      await expectAsync(ApiService.fetchData()).toBeRejectedWith(
        jasmine.objectContaining({
          message: "La respuesta no contiene un JSON válido.",
          cause: errorJson,
        })
      );
    });
  });

  describe("procesarProductos", function () {
    it("normaliza los textos y talles y conserva los datos válidos", function () {
      const datos = crearRegistro({
        nombre: "  Remera  ",
        categoria: " Indumentaria superior ",
        tipo: " remera ",
        estilo: " casual ",
        talles: [" S ", " M ", " L "],
        imagen: {
          id: " remeras ",
          src: " assets/img/remera-blanca.jpg ",
          alt: " Remera de algodón blanca ",
        },
      });

      expect(ApiService.procesarProductos([datos])).toEqual([crearRegistro()]);
    });

    it("crea registros independientes sin modificar la entrada ni sus objetos anidados", function () {
      const datos = [crearRegistro()];
      const antes = JSON.parse(JSON.stringify(datos));

      const productos = ApiService.procesarProductos(datos);
      productos[0].nombre = "Otro nombre";
      productos[0].talles.push("XL");
      productos[0].imagen.alt = "Otra descripción";

      expect(datos).toEqual(antes);
    });

    it("rechaza una respuesta que no es un array", function () {
      for (const datos of [null, undefined, {}, "[]", 42]) {
        expect(() => ApiService.procesarProductos(datos))
          .withContext(`Respuesta: ${String(datos)}`)
          .toThrowError("Los datos del catálogo deben ser un array.");
      }
    });

    it("rechaza un catálogo vacío", function () {
      expect(() => ApiService.procesarProductos([]))
        .toThrowError("No se encontraron productos válidos en el catálogo.");
    });

    it("rechaza una colección sin ningún producto válido", function () {
      expect(() => ApiService.procesarProductos([null, {}, crearRegistro({ precio: -1 })]))
        .toThrowError("No se encontraron productos válidos en el catálogo.");
    });

    it("descarta registros que incumplen las validaciones del dominio y conserva los válidos", function () {
      const valido = crearRegistro({
        nombre: "Campera",
        imagen: {
          id: "camperas",
          src: "assets/img/campera-beige.jpg",
          alt: "Campera beige",
        },
      });
      const invalidos = [
        null,
        [],
        "Remera",
        crearRegistro({ nombre: " " }),
        crearRegistro({ categoria: 42 }),
        crearRegistro({ tipo: null }),
        crearRegistro({ estilo: "" }),
        crearRegistro({ talles: [] }),
        crearRegistro({ talles: ["M", 42] }),
        crearRegistro({ precio: -1 }),
        crearRegistro({ precio: "15000" }),
        crearRegistro({ precio: Infinity }),
      ];

      for (const invalido of invalidos) {
        expect(ApiService.procesarProductos([invalido, valido]))
          .withContext(`Registro inválido: ${JSON.stringify(invalido)}`)
          .toEqual([valido]);
      }
    });

    it("descarta imágenes ausentes, textos inválidos e identificadores o rutas no permitidos", function () {
      const imagen = crearRegistro().imagen;
      const valido = crearRegistro({
        nombre: "Campera",
        imagen: { id: "camperas", src: "assets/img/campera-beige.jpg", alt: "Campera beige" },
      });
      const imagenesInvalidas = [
        undefined,
        null,
        {},
        { ...imagen, id: 42 },
        { ...imagen, id: "1remera" },
        { ...imagen, id: "remera blanca" },
        { ...imagen, src: 42 },
        { ...imagen, src: "javascript:alert(1)" },
        { ...imagen, src: "assets/img/../privado.jpg" },
        { ...imagen, src: "assets/img/remera.svg" },
        { ...imagen, alt: 42 },
        { ...imagen, alt: " " },
      ];

      for (const imagenInvalida of imagenesInvalidas) {
        expect(ApiService.procesarProductos([
          crearRegistro({ imagen: imagenInvalida }),
          valido,
        ]))
          .withContext(`Imagen inválida: ${JSON.stringify(imagenInvalida)}`)
          .toEqual([valido]);
      }
    });

    it("conserva el primer producto al repetir el nombre con mayúsculas o tildes diferentes", function () {
      const primero = crearRegistro({ nombre: "Pantalón" });
      const repetido = crearRegistro({
        nombre: "  PANTALON  ",
        imagen: { ...crearRegistro().imagen, id: "pantalones-duplicados" },
      });

      expect(ApiService.procesarProductos([primero, repetido])).toEqual([primero]);
    });

    it("descarta un identificador de imagen repetido aunque el nombre sea diferente", function () {
      const primero = crearRegistro();
      const repetido = crearRegistro({ nombre: "Otra remera" });

      expect(ApiService.procesarProductos([primero, repetido])).toEqual([primero]);
    });
  });

  describe("crearMapaImagenes", function () {
    it("asocia la imagen de cada producto con su nombre", function () {
      const productos = [
        crearRegistro(),
        crearRegistro({
          nombre: "Campera",
          imagen: { id: "camperas", src: "assets/img/campera-beige.jpg", alt: "Campera beige" },
        }),
      ];

      const imagenes = ApiService.crearMapaImagenes(productos);

      expect(imagenes instanceof Map).toBeTrue();
      expect(imagenes.size).toBe(2);
      expect(imagenes.get("Remera")).toEqual(productos[0].imagen);
      expect(imagenes.get("Campera")).toEqual(productos[1].imagen);
    });

    it("devuelve un Map vacío cuando no recibe productos", function () {
      const imagenes = ApiService.crearMapaImagenes([]);

      expect(imagenes instanceof Map).toBeTrue();
      expect(imagenes.size).toBe(0);
    });
  });

  // ---------------------------------------------------------------------------
  // Casos agregados por QA (Tester QA/JS, issue #141)
  // ---------------------------------------------------------------------------

  describe("fetchData: otros errores HTTP (QA)", function () {
    let descriptorFetch;

    beforeEach(function () {
      descriptorFetch = Object.getOwnPropertyDescriptor(globalThis, "fetch");
    });

    afterEach(function () {
      if (descriptorFetch) {
        Object.defineProperty(globalThis, "fetch", descriptorFetch);
      } else {
        delete globalThis.fetch;
      }
    });

    for (const status of [400, 403, 503]) {
      it(`rechaza HTTP ${status} con el código en el mensaje`, async function () {
        const json = jasmine.createSpy("json");
        Object.defineProperty(globalThis, "fetch", {
          configurable: true,
          writable: true,
          value: jasmine.createSpy("fetch").and.resolveTo({ ok: false, status, json }),
        });

        await expectAsync(ApiService.fetchData())
          .toBeRejectedWithError(Error, `HTTP error! status: ${status}`);
        expect(json).not.toHaveBeenCalled();
      });
    }
  });

  describe("procesarProductos: casos borde de imagen (QA)", function () {
    const imagenBase = crearRegistro().imagen;

    for (const extension of ["jpg", "jpeg", "png", "webp", "gif", "avif", "JPG"]) {
      it(`acepta una imagen .${extension}`, function () {
        const registro = crearRegistro({
          imagen: { ...imagenBase, src: `assets/img/foto.${extension}` },
        });

        expect(ApiService.procesarProductos([registro])[0].imagen.src)
          .toBe(`assets/img/foto.${extension}`);
      });
    }

    for (const src of [
      "assets/img/foto.svg",
      "assets/img/foto.bmp",
      "assets/img/foto",
      "assets/img/sub/foto.jpg",
      "assets/img/foto.jpg?v=2",
      "https://sitio.com/assets/img/foto.jpg",
      "/assets/img/foto.jpg",
      "img/foto.jpg",
    ]) {
      it(`descarta la ruta no permitida "${src}"`, function () {
        const valido = crearRegistro({
          nombre: "Campera",
          imagen: { id: "camperas", src: "assets/img/campera-beige.jpg", alt: "Campera" },
        });
        const invalido = crearRegistro({ imagen: { ...imagenBase, src } });

        expect(ApiService.procesarProductos([invalido, valido])).toEqual([valido]);
      });
    }

    for (const id of ["a", "remera_blanca", "remera-blanca", "R2D2"]) {
      it(`acepta el identificador de imagen "${id}"`, function () {
        const registro = crearRegistro({ imagen: { ...imagenBase, id } });

        expect(ApiService.procesarProductos([registro])[0].imagen.id).toBe(id);
      });
    }

    for (const id of ["-remera", "_remera", "remera.blanca", ""]) {
      it(`descarta el identificador de imagen "${id}"`, function () {
        const valido = crearRegistro({
          nombre: "Campera",
          imagen: { id: "camperas", src: "assets/img/campera-beige.jpg", alt: "Campera" },
        });
        const invalido = crearRegistro({ imagen: { ...imagenBase, id } });

        expect(ApiService.procesarProductos([invalido, valido])).toEqual([valido]);
      });
    }
  });

  describe("procesarProductos: precio (QA)", function () {
    it("descarta un precio NaN", function () {
      const valido = crearRegistro({
        nombre: "Campera",
        imagen: { id: "camperas", src: "assets/img/campera-beige.jpg", alt: "Campera" },
      });

      expect(ApiService.procesarProductos([crearRegistro({ precio: NaN }), valido]))
        .toEqual([valido]);
    });

    it("conserva un precio decimal sin redondearlo", function () {
      const resultado = ApiService.procesarProductos([crearRegistro({ precio: 15999.99 })]);

      expect(resultado[0].precio).toBe(15999.99);
    });
  });

  describe("crearMapaImagenes: nombres repetidos (QA)", function () {
    it("conserva la imagen del último producto con el mismo nombre", function () {
      const primera = { id: "a", src: "assets/img/a.jpg", alt: "A" };
      const segunda = { id: "b", src: "assets/img/b.jpg", alt: "B" };

      const imagenes = ApiService.crearMapaImagenes([
        crearRegistro({ imagen: primera }),
        crearRegistro({ imagen: segunda }),
      ]);

      expect(imagenes.size).toBe(1);
      expect(imagenes.get("Remera")).toEqual(segunda);
    });
  });

  describe("Contrato con api/productos.json real (QA)", function () {
    const esNode = typeof process !== "undefined" && Boolean(process.versions?.node);
    let datos;
    let existeArchivo;

    beforeAll(async function () {
      if (!esNode) return;
      const fs = await import("node:fs");
      const urlJson = new URL("../../api/productos.json", import.meta.url);
      datos = JSON.parse(fs.readFileSync(urlJson, "utf8"));
      existeArchivo = (rutaRelativa) =>
        fs.existsSync(new URL(`../../${rutaRelativa}`, import.meta.url));
    });

    it("el JSON entregado es un array con productos", function () {
      if (!esNode) pending("Solo se ejecuta en Node (usa el sistema de archivos).");

      expect(Array.isArray(datos)).toBeTrue();
      expect(datos.length).toBeGreaterThan(0);
    });

    it("procesarProductos no descarta ningún producto del JSON real", function () {
      if (!esNode) pending("Solo se ejecuta en Node (usa el sistema de archivos).");

      expect(ApiService.procesarProductos(datos).length).toBe(datos.length);
    });

    it("cada imagen del JSON real apunta a un archivo existente", function () {
      if (!esNode) pending("Solo se ejecuta en Node (usa el sistema de archivos).");

      for (const producto of ApiService.procesarProductos(datos)) {
        expect(existeArchivo(producto.imagen.src))
          .withContext(`Falta el archivo: ${producto.imagen.src}`)
          .toBeTrue();
      }
    });
  });
});