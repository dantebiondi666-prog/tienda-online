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
});
