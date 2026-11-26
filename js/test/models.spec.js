import Producto from "../models/Producto.js";
import Catalogo from "../models/Catalogo.js";
import ItemCarrito from "../models/ItemCarrito.js";
import Carrito from "../models/Carrito.js";

function crearProducto(
  nombre = "Camisa",
  categoria = "Indumentaria",
  tipo = "camisa",
  estilo = "formal",
  talles = ["S", "M", "L"],
  precio = 18000
) {
  return new Producto(nombre, categoria, tipo, estilo, talles, precio);
}

function esperarError(operacion, mensaje) {
  expect(operacion).toThrowError(Error, mensaje);
}

describe("Producto", function () {
  describe("Constructores", function () {
    it("crea un producto válido y conserva sus propiedades", function () {
      const talles = ["S", "M"];
      const producto = crearProducto(
        "Camisa",
        "Indumentaria",
        "camisa",
        "formal",
        talles,
        18000
      );

      expect(producto.nombre).toBe("Camisa");
      expect(producto.categoria).toBe("Indumentaria");
      expect(producto.tipo).toBe("camisa");
      expect(producto.estilo).toBe("formal");
      expect(producto.talles).toEqual(["S", "M"]);
      expect(producto.precio).toBe(18000);
      expect(talles).toEqual(["S", "M"]);
    });

    it("rechaza los textos obligatorios vacíos o no válidos", function () {
      esperarError(
        () => new Producto("", "Indumentaria", "camisa", "formal", ["M"], 10),
        "El nombre debe ser una cadena no vacía."
      );
      esperarError(
        () => new Producto("Camisa", " ", "camisa", "formal", ["M"], 10),
        "La categoría debe ser una cadena no vacía."
      );
      esperarError(
        () => new Producto("Camisa", "Ropa", null, "formal", ["M"], 10),
        "El tipo debe ser una cadena no vacía."
      );
      esperarError(
        () => new Producto("Camisa", "Ropa", "camisa", "", ["M"], 10),
        "El estilo debe ser una cadena no vacía."
      );
    });

    it("rechaza talles vacíos, inválidos o no representados por un array", function () {
      [
        null,
        [],
        ["M", ""],
        ["M", 42]
      ].forEach(function (talles) {
        esperarError(
          () =>
            new Producto("Camisa", "Ropa", "camisa", "formal", talles, 10),
          "Los talles deben ser un array no vacío de cadenas válidas."
        );
      });
    });

    it("rechaza precios negativos, no numéricos o no finitos", function () {
      [-1, "10", NaN, Infinity].forEach(function (precio) {
        esperarError(
          () =>
            new Producto(
              "Camisa",
              "Ropa",
              "camisa",
              "formal",
              ["M"],
              precio
            ),
          "El precio debe ser un número válido mayor o igual a cero."
        );
      });
    });
  });

  describe("Métodos de negocio", function () {
    it("verifica disponibilidad de talle sin distinguir mayúsculas", function () {
      const producto = crearProducto();

      expect(producto.verificarTalleDisponible("m")).toBeTrue();
      expect(producto.verificarTalleDisponible("XL")).toBeFalse();
    });

    it("acepta el precio límite cero", function () {
      const producto = crearProducto(
        "Remera",
        "Ropa",
        "remera",
        "casual",
        ["S"],
        0
      );

      expect(producto.precio).toBe(0);
    });

    it("rechaza un talle vacío al verificar disponibilidad", function () {
      esperarError(
        () => crearProducto().verificarTalleDisponible(" "),
        "El talle debe ser una cadena no vacía."
      );
    });
  });

  describe("Serialización", function () {
    it("devuelve un objeto plano y reconstruye una instancia equivalente", function () {
      const original = crearProducto("Pantalón", "Ropa", "jean", "urbano", [
        "38",
        "40"
      ], 25000);
      const datos = original.toJSON();
      const reconstruido = Producto.fromJSON(
        JSON.parse(JSON.stringify(original))
      );

      expect(Object.getPrototypeOf(datos)).toBe(Object.prototype);
      expect(datos).toEqual({
        nombre: "Pantalón",
        categoria: "Ropa",
        tipo: "jean",
        estilo: "urbano",
        talles: ["38", "40"],
        precio: 25000
      });
      expect(reconstruido instanceof Producto).toBeTrue();
      expect(reconstruido.toJSON()).toEqual(datos);
    });

    it("rechaza datos de serialización ausentes o incompletos", function () {
      esperarError(
        () => Producto.fromJSON(null),
        "Los datos del producto deben ser un objeto válido."
      );
      esperarError(
        () => Producto.fromJSON({}),
        "El nombre debe ser una cadena no vacía."
      );
    });
  });

  describe("Encapsulamiento", function () {
    it("no permite reemplazar propiedades de solo lectura", function () {
      const producto = crearProducto();

      expect(() => {
        producto.nombre = "Otra camisa";
      }).toThrowError(TypeError);
      expect(() => {
        producto.precio = 1;
      }).toThrowError(TypeError);
      expect(producto.nombre).toBe("Camisa");
      expect(producto.precio).toBe(18000);
    });

    it("protege la colección de talles y el estado ante cambios externos", function () {
      const tallesIniciales = ["S", "M"];
      const producto = crearProducto(
        "Camisa",
        "Ropa",
        "camisa",
        "formal",
        tallesIniciales,
        18000
      );
      const tallesConsultados = producto.talles;
      tallesIniciales.push("L");
      tallesConsultados.pop();

      expect(producto.talles).toEqual(["S", "M"]);
    });
  });
});

describe("Catalogo", function () {
  describe("Constructores", function () {
    it("crea un catálogo vacío por defecto", function () {
      const catalogo = new Catalogo();

      expect(catalogo.productos).toEqual([]);
      expect(catalogo.filtrarProductos("tipo", "camisa")).toEqual([]);
    });

    it("crea un catálogo con instancias y objetos serializados", function () {
      const producto = crearProducto();
      const catalogo = new Catalogo([
        producto,
        crearProducto("Pantalón", "Ropa", "jean", "urbano", ["40"], 25000)
          .toJSON()
      ]);

      expect(catalogo.productos.length).toBe(2);
      expect(catalogo.productos[0]).toBe(producto);
      expect(catalogo.productos[1] instanceof Producto).toBeTrue();
    });

    it("rechaza una colección que no sea un array o productos inválidos", function () {
      esperarError(
        () => new Catalogo(null),
        "El catálogo debe ser un array."
      );
      esperarError(
        () => new Catalogo([{}]),
        "El nombre debe ser una cadena no vacía."
      );
    });
  });

  describe("Métodos de negocio", function () {
    let catalogo;

    beforeEach(function () {
      catalogo = new Catalogo([
        crearProducto("Pantalón", "Indumentaria", "jean", "urbano", [
          "38",
          "40"
        ], 25000),
        crearProducto("Camisa", "Indumentaria", "camisa", "formal", [
          "S",
          "M"
        ], 18000),
        crearProducto("Vestido", "Mujer", "vestido", "formal", ["M"], 32000)
      ]);
    });

    it("buscarYFiltrar normaliza mayúsculas y tildes", function () {
      expect(catalogo.buscarProducto("PANTALON").nombre).toBe("Pantalón");
      expect(catalogo.buscarProducto("Producto ausente")).toBeNull();
    });

    it("filtra productos por categoría y normaliza mayúsculas y tildes", function () {
      const resultado = catalogo.filtrarProductos(
        "CATEGORÍA",
        "indumentaria"
      );

      expect(resultado.map((producto) => producto.nombre)).toEqual([
        "Pantalón",
        "Camisa"
      ]);
    });

    it("filtra productos por tipo, talle y estilo", function () {
      expect(
        catalogo.filtrarProductos("tipo", "JEAN").map((producto) => producto.nombre)
      ).toEqual(["Pantalón"]);
      expect(
        catalogo.filtrarProductos("talle", "m").map((producto) => producto.nombre)
      ).toEqual(["Camisa", "Vestido"]);
      expect(
        catalogo.filtrarProductos("estilo", "FORMAL").map((producto) => producto.nombre)
      ).toEqual(["Camisa", "Vestido"]);
    });

    
    // RC16 - Búsqueda y combinación de filtros

    it("devuelve todos los productos sin búsqueda ni filtros", function () {
      expect(catalogo.buscarYFiltrar()).toEqual(catalogo.productos);
    });

    it("busca por nombre sin distinguir mayúsculas ni tildes", function () {
      const resultado = catalogo.buscarYFiltrar("PANTALON");
      expect(resultado.map((producto) => producto.nombre))
        .toEqual(["Pantalón"]);
    });

    it("combina valores del mismo campo mediante OR", function () {
      const resultado = catalogo.buscarYFiltrar("", {
        tipo: ["jean", "camisa"]
      });

      expect(resultado.map((producto) => producto.nombre))
        .toEqual(["Pantalón", "Camisa"]);
    });

    it("combina diferentes campos mediante AND", function () {
      const resultado = catalogo.buscarYFiltrar("", {
        categoria: ["Indumentaria"],
        estilo: ["formal"]
      });

      expect(resultado.map((producto) => producto.nombre))
        .toEqual(["Camisa"]);
    });

    it("combina la búsqueda por nombre con los filtros", function () {
      const resultado = catalogo.buscarYFiltrar("Camisa", {
        talle: ["M"]
      });

      expect(resultado.map((producto) => producto.nombre))
        .toEqual(["Camisa"]);
    });

    it("devuelve un array vacío cuando no existen coincidencias", function () {
      expect(catalogo.buscarYFiltrar("Producto ausente")).toEqual([]);

      expect(catalogo.buscarYFiltrar("Pantalón", {
        estilo: ["formal"]
      })).toEqual([]);
    });

    it("ignora los campos sin valores seleccionados", function () {
      const resultado = catalogo.buscarYFiltrar("", {
        categoria: [],
        estilo: []
      });

      expect(resultado).toEqual(catalogo.productos);
    });

it("obtiene opciones únicas del catálogo y admite campos con distintas mayúsculas", function () {
      expect(catalogo.obtenerOpcionesFiltro("TALLE")).toEqual([
        "38",
        "40",
        "S",
        "M"
      ]);
      expect(catalogo.obtenerOpcionesFiltro("estilo")).toEqual([
        "urbano",
        "formal"
      ]);
    });

    it("devuelve resultados vacíos cuando no hay coincidencias", function () {
      expect(catalogo.filtrarProductos("tipo", "calzado")).toEqual([]);
      expect(new Catalogo().obtenerOpcionesFiltro("categoria")).toEqual([]);
    });

    it("rechaza búsquedas con texto vacío o de tipo inválido", function () {
      esperarError(
        () => catalogo.buscarProducto("  "),
        "El nombre del producto no puede estar vacío."
      );
      esperarError(
        () => catalogo.buscarProducto(10),
        "El nombre del producto no puede estar vacío."
      );
    });

    it("rechaza campos y valores de filtro inválidos", function () {
      esperarError(
        () => catalogo.filtrarProductos("color", "rojo"),
        "El campo de filtro no es válido."
      );
      esperarError(
        () => catalogo.filtrarProductos(null, "rojo"),
        "El campo de filtro no es válido."
      );
      esperarError(
        () => catalogo.filtrarProductos("tipo", ""),
        "El valor de filtro no puede estar vacío."
      );
      esperarError(
        () => catalogo.obtenerOpcionesFiltro("color"),
        "El campo de filtro no es válido."
      );
    });
  });

  describe("Serialización", function () {
    it("serializa productos en un objeto plano y reconstruye el catálogo", function () {
      const catalogo = new Catalogo([
        crearProducto("Camisa"),
        crearProducto("Pantalón", "Ropa", "jean", "urbano", ["40"], 25000)
      ]);
      const datos = catalogo.toJSON();
      const reconstruido = Catalogo.fromJSON(
        JSON.parse(JSON.stringify(catalogo))
      );

      expect(Object.getPrototypeOf(datos)).toBe(Object.prototype);
      expect(datos.productos.every(
        (producto) => Object.getPrototypeOf(producto) === Object.prototype
      )).toBeTrue();
      expect(reconstruido instanceof Catalogo).toBeTrue();
      expect(reconstruido.productos.every(
        (producto) => producto instanceof Producto
      )).toBeTrue();
      expect(reconstruido.toJSON()).toEqual(datos);
    });

    it("acepta la lista serializada y rechaza datos ausentes o incompletos", function () {
      const lista = [crearProducto().toJSON()];

      expect(Catalogo.fromJSON(lista).productos[0] instanceof Producto).toBeTrue();
      esperarError(
        () => Catalogo.fromJSON({}),
        "Los datos del catálogo deben contener un array de productos."
      );
      esperarError(
        () => Catalogo.fromJSON([{ nombre: "Camisa" }]),
        "La categoría debe ser una cadena no vacía."
      );
    });
  });

  describe("Encapsulamiento", function () {
    it("devuelve una copia de la colección sin exponer el array privado", function () {
      const entrada = [crearProducto()];
      const catalogo = new Catalogo(entrada);
      const productosConsultados = catalogo.productos;
      productosConsultados.pop();

      expect(entrada.length).toBe(1);
      expect(catalogo.productos.length).toBe(1);
    });
  });
});

describe("ItemCarrito", function () {
  describe("Constructores", function () {
    it("crea un artículo y usa el precio del producto por defecto", function () {
      const producto = crearProducto("Camisa", "Ropa", "camisa", "formal", [
        "S",
        "M"
      ], 18000);
      const item = new ItemCarrito(producto, "m", 2);

      expect(item.producto).toBe(producto);
      expect(item.talle).toBe("M");
      expect(item.cantidad).toBe(2);
      expect(item.precio).toBe(18000);
      expect(item.calcularSubtotal()).toBe(36000);
    });

    it("acepta un precio explícito y la cantidad límite positiva", function () {
      const item = new ItemCarrito(crearProducto(), "S", 1, 12500);

      expect(item.cantidad).toBe(1);
      expect(item.precio).toBe(12500);
      expect(item.calcularSubtotal()).toBe(12500);
    });

    it("rechaza producto, talle, cantidad y precio inválidos", function () {
      esperarError(
        () => new ItemCarrito(null, "M", 1),
        "Los datos del producto deben ser un objeto válido."
      );
      esperarError(
        () => new ItemCarrito(crearProducto(), " ", 1),
        "El talle debe ser una cadena no vacía."
      );
      esperarError(
        () => new ItemCarrito(crearProducto(), "XL", 1),
        "El talle no está disponible para el producto."
      );

      [0, -1, 1.5, "2", NaN].forEach(function (cantidad) {
        esperarError(
          () => new ItemCarrito(crearProducto(), "M", cantidad),
          "La cantidad debe ser un entero positivo."
        );
      });

      [-1, "100", NaN, Infinity].forEach(function (precio) {
        esperarError(
          () => new ItemCarrito(crearProducto(), "M", 1, precio),
          "El precio debe ser un número válido mayor o igual a cero."
        );
      });
    });
  });

  describe("Métodos de negocio", function () {
        it("acepta cantidades enteras positivas", function () {
      [1, 2, 10, 100].forEach(function (cantidad) {
        expect(ItemCarrito.esCantidadValida(cantidad)).toBeTrue();
      });
    });

    it("rechaza cantidades menores o iguales a cero", function () {
      [0, -1, -10].forEach(function (cantidad) {
        expect(ItemCarrito.esCantidadValida(cantidad)).toBeFalse();
      });
    });

    it("rechaza cantidades decimales", function () {
      [0.5, 1.5, 2.7].forEach(function (cantidad) {
        expect(ItemCarrito.esCantidadValida(cantidad)).toBeFalse();
      });
    });

    it("rechaza cantidades de tipo inválido", function () {
      ["2", "", null, undefined, NaN, Infinity, true].forEach(function (cantidad) {
        expect(ItemCarrito.esCantidadValida(cantidad)).toBeFalse();
      });
    });
    it("calcula el subtotal con el precio unitario y la cantidad", function () {
      const item = new ItemCarrito(crearProducto(), "L", 3, 2400);

      expect(item.calcularSubtotal()).toBe(7200);
    });
  });

  describe("Serialización", function () {
    it("serializa los atributos privados y reconstruye una instancia equivalente", function () {
      const original = new ItemCarrito(crearProducto(), "M", 3, 16000);
      const datos = original.toJSON();
      const reconstruido = ItemCarrito.fromJSON(
        JSON.parse(JSON.stringify(original))
      );

      expect(Object.getPrototypeOf(datos)).toBe(Object.prototype);
      expect(Object.getPrototypeOf(datos.producto)).toBe(Object.prototype);
      expect(reconstruido instanceof ItemCarrito).toBeTrue();
      expect(reconstruido.producto instanceof Producto).toBeTrue();
      expect(reconstruido.toJSON()).toEqual(datos);
    });

    it("rechaza datos ausentes o incompletos", function () {
      esperarError(
        () => ItemCarrito.fromJSON(null),
        "Los datos del artículo deben ser un objeto válido."
      );
      esperarError(
        () => ItemCarrito.fromJSON({}),
        "Los datos del producto deben ser un objeto válido."
      );
    });
  });

  describe("Encapsulamiento", function () {
    it("no permite reemplazar sus propiedades de solo lectura", function () {
      const item = new ItemCarrito(crearProducto(), "M", 2);

      expect(() => {
        item.cantidad = 8;
      }).toThrowError(TypeError);
      expect(() => {
        item.precio = 1;
      }).toThrowError(TypeError);
      expect(item.cantidad).toBe(2);
      expect(item.precio).toBe(18000);
    });

    it("no modifica los datos de producto recibidos al reconstruir el artículo", function () {
      const datosProducto = crearProducto().toJSON();
      const copiaInicial = JSON.stringify(datosProducto);

      new ItemCarrito(datosProducto, "M", 2);

      expect(JSON.stringify(datosProducto)).toBe(copiaInicial);
    });
  });
});

describe("Carrito", function () {
  describe("Constructores", function () {
    it("crea un carrito vacío por defecto", function () {
      const carrito = new Carrito();

      expect(carrito.items).toEqual([]);
      expect(carrito.calcularTotal()).toBe(0);
      expect(carrito.generarResumenCompra()).toEqual({
        productos: [],
        total: 0
      });
    });

    it("crea un carrito con artículos e interpreta objetos serializados", function () {
      const producto = crearProducto();
      const item = new ItemCarrito(producto, "M", 2);
      const carrito = new Carrito([
        item,
        new ItemCarrito(producto, "S", 1).toJSON()
      ]);

      expect(carrito.items.length).toBe(2);
      expect(carrito.items[0]).toBe(item);
      expect(carrito.items[1] instanceof ItemCarrito).toBeTrue();
    });

    it("rechaza una lista inválida o artículos incompletos", function () {
      esperarError(
        () => new Carrito(null),
        "Los artículos del carrito deben ser un array."
      );
      esperarError(
        () => new Carrito([{}]),
        "Los datos del producto deben ser un objeto válido."
      );
    });
  });

  describe("Métodos de negocio", function () {
    let producto;
    let carrito;

    beforeEach(function () {
      producto = crearProducto("Pantalón", "Ropa", "jean", "urbano", [
        "38",
        "40"
      ], 25000);
      carrito = new Carrito();
    });

    it("busca una línea por nombre de producto y talle", function () {
      const agregado = carrito.agregarProducto(producto, "38", 2);

      expect(carrito.buscarEnCarrito("PANTALON", "38")).toBe(agregado);
      expect(carrito.buscarEnCarrito("Pantalón", "40")).toBeNull();
    });

    it("agrega productos a un carrito vacío y suma cantidades para el mismo talle", function () {
      const inicial = carrito.agregarProducto(producto, "38", 2);
      const actualizado = carrito.agregarProducto(producto, "38", 3);

      expect(inicial.cantidad).toBe(2);
      expect(actualizado.cantidad).toBe(5);
      expect(carrito.items.length).toBe(1);
      expect(carrito.calcularTotal()).toBe(125000);
    });

    it("agrega un producto recibido como objeto plano y reconstruye su instancia", function () {
      const datosProducto = producto.toJSON();
      const item = carrito.agregarProducto(datosProducto, "38", 2);

      expect(item.producto instanceof Producto).toBeTrue();
      expect(item.producto).not.toBe(datosProducto);
      expect(item.producto.toJSON()).toEqual(datosProducto);
      expect(carrito.buscarEnCarrito(producto, "38")).toBe(item);
    });

    it("al sumar cantidad conserva sin cambios las demás líneas del carrito", function () {
      const primeraLinea = carrito.agregarProducto(producto, "38", 2);
      const segundaLinea = carrito.agregarProducto(producto, "40", 1);

      const actualizada = carrito.agregarProducto(producto, "38", 3);
      const lineaConservada = carrito.buscarEnCarrito(producto, "40");

      expect(actualizada.cantidad).toBe(5);
      expect(lineaConservada).toBe(segundaLinea);
      expect(lineaConservada.producto).toBe(producto);
      expect(lineaConservada.talle).toBe("40");
      expect(lineaConservada.cantidad).toBe(1);
      expect(carrito.buscarEnCarrito(producto, "38")).not.toBe(primeraLinea);
    });

    it("mantiene líneas separadas para el mismo producto con talles distintos", function () {
      carrito.agregarProducto(producto, "38", 2);
      carrito.agregarProducto(producto, "40", 1);

      expect(carrito.items.length).toBe(2);
      expect(carrito.buscarEnCarrito(producto, "38").cantidad).toBe(2);
      expect(carrito.buscarEnCarrito(producto, "40").cantidad).toBe(1);
      expect(carrito.calcularTotal()).toBe(75000);
    });

    it("modifica la cantidad y recalcula el total del carrito", function () {
      carrito.agregarProducto(producto, "38", 2);
      const modificado = carrito.modificarCantidad("Pantalón", "38", 4);

      expect(modificado.cantidad).toBe(4);
      expect(modificado.calcularSubtotal()).toBe(100000);
      expect(carrito.calcularTotal()).toBe(100000);
    });

    it("al modificar una cantidad conserva sin cambios las demás líneas del carrito", function () {
      carrito.agregarProducto(producto, "38", 2);
      const segundaLinea = carrito.agregarProducto(producto, "40", 1);

      const actualizada = carrito.modificarCantidad(producto, "38", 4);
      const lineaConservada = carrito.buscarEnCarrito(producto, "40");

      expect(actualizada.cantidad).toBe(4);
      expect(lineaConservada).toBe(segundaLinea);
      expect(lineaConservada.producto).toBe(producto);
      expect(lineaConservada.talle).toBe("40");
      expect(lineaConservada.cantidad).toBe(1);
    });

    it("elimina una línea existente sin eliminar otra de distinto talle", function () {
      carrito.agregarProducto(producto, "38", 2);
      carrito.agregarProducto(producto, "40", 1);
      const eliminado = carrito.eliminarProducto("Pantalon", "38");

      expect(eliminado.talle).toBe("38");
      expect(carrito.items.length).toBe(1);
      expect(carrito.items[0].talle).toBe("40");
      expect(carrito.calcularTotal()).toBe(25000);
    });

    it("genera un resumen con subtotal por línea y total de compra", function () {
      carrito.agregarProducto(producto, "38", 2);
      carrito.agregarProducto(crearProducto("Camisa", "Ropa", "camisa", "formal", [
        "M"
      ], 18000), "M", 3);

      expect(carrito.generarResumenCompra()).toEqual({
        productos: [
          {
            producto: "Pantalón",
            talle: "38",
            cantidad: 2,
            subtotal: 50000
          },
          {
            producto: "Camisa",
            talle: "M",
            cantidad: 3,
            subtotal: 54000
          }
        ],
        total: 104000
      });
    });

    it("rechaza entradas de cantidad y talles inválidos al agregar", function () {
      [0, -1, 1.5, "2", NaN].forEach(function (cantidad) {
        esperarError(
          () => carrito.agregarProducto(producto, "38", cantidad),
          "La cantidad debe ser un entero positivo."
        );
      });
      esperarError(
        () => carrito.agregarProducto(producto, " ", 1),
        "El talle debe ser una cadena no vacía."
      );
      esperarError(
        () => carrito.agregarProducto(producto, "42", 1),
        "El talle no está disponible para el producto."
      );
    });

    it("rechaza modificar con cantidad inválida o artículo inexistente", function () {
      carrito.agregarProducto(producto, "38", 1);
      [0, -1, 1.2, "3"].forEach(function (cantidad) {
        esperarError(
          () => carrito.modificarCantidad(producto, "38", cantidad),
          "La cantidad debe ser un entero positivo."
        );
      });
      esperarError(
        () => carrito.modificarCantidad(producto, "40", 2),
        "El producto y talle no se encuentran en el carrito."
      );
    });

    it("rechaza buscar y eliminar combinaciones inexistentes o inválidas", function () {
      esperarError(
        () => carrito.buscarEnCarrito(" ", "38"),
        "El nombre del producto no puede estar vacío."
      );
      esperarError(
        () => carrito.buscarEnCarrito(producto, ""),
        "El talle debe ser una cadena no vacía."
      );
      esperarError(
        () => carrito.eliminarProducto(producto, "38"),
        "El producto y talle no se encuentran en el carrito."
      );
    });

    it("admite una cantidad entera positiva grande sin truncarla", function () {
      const cantidad = 100000;
      const item = carrito.agregarProducto(producto, "38", cantidad);

      expect(item.cantidad).toBe(cantidad);
      expect(carrito.calcularTotal()).toBe(2500000000);
    });
  });

  describe("Serialización", function () {
    it("reconstruye un carrito equivalente con artículos y productos instanciados", function () {
      const carrito = new Carrito([
        new ItemCarrito(crearProducto(), "M", 2),
        new ItemCarrito(
          crearProducto("Pantalón", "Ropa", "jean", "urbano", ["40"], 25000),
          "40",
          1,
          23000
        )
      ]);
      const datos = carrito.toJSON();
      const reconstruido = Carrito.fromJSON(
        JSON.parse(JSON.stringify(carrito))
      );

      expect(Object.getPrototypeOf(datos)).toBe(Object.prototype);
      expect(datos.items.every(
        (item) =>
          Object.getPrototypeOf(item) === Object.prototype &&
          Object.getPrototypeOf(item.producto) === Object.prototype
      )).toBeTrue();
      expect(reconstruido instanceof Carrito).toBeTrue();
      expect(reconstruido.items.every(
        (item) =>
          item instanceof ItemCarrito && item.producto instanceof Producto
      )).toBeTrue();
      expect(reconstruido.toJSON()).toEqual(datos);
      expect(reconstruido.calcularTotal()).toBe(59000);
    });

    it("acepta una lista serializada y rechaza datos ausentes o incompletos", function () {
      const lista = [
        new ItemCarrito(crearProducto(), "M", 1).toJSON()
      ];

      expect(Carrito.fromJSON(lista).items[0] instanceof ItemCarrito).toBeTrue();
      esperarError(
        () => Carrito.fromJSON(null),
        "Los datos del carrito deben contener un array de artículos."
      );
      esperarError(
        () => Carrito.fromJSON({ items: [{}] }),
        "Los datos del producto deben ser un objeto válido."
      );
    });
  });

  describe("Encapsulamiento", function () {
    it("devuelve una copia del array y no modifica los artículos recibidos", function () {
      const item = new ItemCarrito(crearProducto(), "M", 2);
      const entrada = [item];
      const carrito = new Carrito(entrada);
      const itemsConsultados = carrito.items;
      itemsConsultados.pop();

      expect(entrada.length).toBe(1);
      expect(carrito.items.length).toBe(1);
      expect(carrito.items[0]).toBe(item);
    });

    it("no altera los objetos serializados recibidos al reconstruir el carrito", function () {
      const datos = {
        items: [new ItemCarrito(crearProducto(), "M", 2).toJSON()]
      };
      const copiaInicial = JSON.stringify(datos);

      Carrito.fromJSON(datos);

      expect(JSON.stringify(datos)).toBe(copiaInicial);
    });
  });
});
