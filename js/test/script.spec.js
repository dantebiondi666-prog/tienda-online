
/**
 * Actividad Obligatoria N.º 3 — Programación Web I
 * Proyecto: Remer Us
 * Rol: Tester JavaScript / QA Engineer
 * Responsable: Juan Martin Britos
 *
 * Pruebas unitarias con Jasmine.
 * Issue asociada: #88
 */

// SUITE 1 — Consultar y filtrar catálogo
describe("Flujo 1 - Consultar y filtrar catálogo", function () {
  const productos = [
    {
      nombre: "Remera",
      categoria: "Indumentaria superior",
      tipo: "remera",
      estilo: "casual",
      talles: ["S", "M", "L"],
      precio: 15000
    },
    {
      nombre: "Campera",
      categoria: "Abrigo",
      tipo: "campera",
      estilo: "urban",
      talles: ["M", "L", "XL"],
      precio: 48000
    }
  ];

  it("filtra productos correctamente por tipo", function () {
    const resultado = filtrarProductos(productos, "tipo", "remera");
    expect(resultado.length).toBe(1);
    expect(resultado[0].nombre).toBe("Remera");
  });

  it("filtra por talle sin distinguir mayúsculas", function () {
    const resultado = filtrarProductos(productos, "talle", "xl");
    expect(resultado.length).toBe(1);
    expect(resultado[0].nombre).toBe("Campera");
  });

  it("devuelve un array vacío si no hay coincidencias", function () {
    const resultado = filtrarProductos(productos, "tipo", "pantalon");
    expect(resultado).toEqual([]);
  });

  it("rechaza un campo de filtro inválido", function () {
    expect(function () {
      filtrarProductos(productos, "color", "rojo");
    }).toThrowError("El campo de filtro no es válido.");
  });
});

// SUITE 2 — Consultar producto y disponibilidad de talle
describe("Flujo 2 - Consultar producto y talle", function () {
  const productos = [
    {
      nombre: "Remera",
      categoria: "Indumentaria superior",
      tipo: "remera",
      estilo: "casual",
      talles: ["S", "M", "L"],
      precio: 15000
    }
  ];

  it("encuentra un producto existente por nombre", function () {
    const resultado = buscarProducto(productos, "remera");
    expect(resultado.nombre).toBe("Remera");
  });

  it("devuelve null cuando el producto no existe", function () {
    const resultado = buscarProducto(productos, "Campera");
    expect(resultado).toBeNull();
  });

  it("confirma un talle disponible", function () {
    const resultado = verificarTalleDisponible(productos[0], "m");
    expect(resultado).toBeTrue();
  });

  it("rechaza un talle vacío", function () {
    expect(function () {
      verificarTalleDisponible(productos[0], "");
    }).toThrowError("El talle debe ser una cadena no vacía.");
  });
});

// SUITE 3 — Gestionar carrito
describe("Flujo 3 - Gestionar carrito", function () {
  it("agrega un producto a un carrito vacío", function () {
    const resultado = agregarAlCarrito([], "Remera", "M", 2, 15000);

    expect(resultado.length).toBe(1);
    expect(resultado[0].cantidad).toBe(2);
    expect(resultado[0].precio).toBe(15000);
  });

  it("suma cantidades si el producto y talle ya existen", function () {
    const carritoInicial = [
      { producto: "Remera", talle: "M", cantidad: 1, precio: 15000 }
    ];

    const resultado = agregarAlCarrito(
      carritoInicial, "Remera", "M", 2, 15000
    );

    expect(resultado.length).toBe(1);
    expect(resultado[0].cantidad).toBe(3);
    expect(carritoInicial[0].cantidad).toBe(1);
  });

  it("modifica la cantidad sin alterar el carrito original", function () {
    const carritoInicial = [
      { producto: "Remera", talle: "M", cantidad: 1, precio: 15000 }
    ];

    const resultado = modificarCantidad(
      carritoInicial, "Remera", "M", 4
    );

    expect(resultado[0].cantidad).toBe(4);
    expect(carritoInicial[0].cantidad).toBe(1);
  });

  it("elimina un producto del carrito", function () {
    const carritoInicial = [
      { producto: "Remera", talle: "M", cantidad: 1, precio: 15000 }
    ];

    const resultado = eliminarDelCarrito(
      carritoInicial, "Remera", "M"
    );

    expect(resultado).toEqual([]);
    expect(carritoInicial.length).toBe(1);
  });

  it("agrega un producto aunque no pertenezca al catálogo", function () {
    const resultado = agregarAlCarrito([], "Producto inexistente", "M", 1, 1000);

    expect(resultado).toEqual([
      { producto: "Producto inexistente", talle: "M", cantidad: 1, precio: 1000 }
    ]);
  });

  it("rechaza cantidades cero, negativas, decimales y no numéricas", function () {
    [0, -1, 1.5, "2", NaN].forEach(function (cantidad) {
      expect(function () {
        agregarAlCarrito([], "Remera", "M", cantidad, 15000);
      }).toThrowError("La cantidad debe ser un entero positivo.");
    });
  });

  it("rechaza un producto o talle vacío al agregar", function () {
    expect(function () {
      agregarAlCarrito([], "   ", "M", 1, 15000);
    }).toThrowError("El nombre del producto no puede estar vacío.");

    expect(function () {
      agregarAlCarrito([], "Remera", "  ", 1, 15000);
    }).toThrowError("El talle debe ser una cadena no vacía.");
  });

  it("rechaza un carrito que no sea un array", function () {
    expect(function () {
      agregarAlCarrito(null, "Remera", "M", 1, 15000);
    }).toThrowError("El carrito debe ser un array.");
  });

  it("rechaza modificar un producto y talle inexistentes", function () {
    expect(function () {
      modificarCantidad(
        [{ producto: "Remera", talle: "M", cantidad: 1, precio: 15000 }],
        "Campera",
        "L",
        2
      );
    }).toThrowError("El producto y talle no se encuentran en el carrito.");
  });

  it("rechaza eliminar un producto y talle inexistentes", function () {
    expect(function () {
      eliminarDelCarrito(
        [{ producto: "Remera", talle: "M", cantidad: 1, precio: 15000 }],
        "Pantalón",
        "42"
      );
    }).toThrowError("El producto y talle no se encuentran en el carrito.");
  });
});

// SUITE 4 — Resumen de compra
describe("Flujo 4 - Resumen de compra", function () {
  it("calcula correctamente un subtotal", function () {
    expect(calcularSubtotal(15000, 2)).toBe(30000);
  });

  it("devuelve total cero para un carrito vacío", function () {
    expect(calcularTotal([])).toBe(0);
  });

  it("calcula el total de varios productos", function () {
    const carrito = [
      { producto: "Remera", talle: "M", cantidad: 2, precio: 15000 },
      { producto: "Campera", talle: "L", cantidad: 1, precio: 48000 }
    ];

    expect(calcularTotal(carrito)).toBe(78000);
  });

  it("rechaza cantidades negativas al calcular subtotales", function () {
    expect(function () {
      calcularSubtotal(15000, -1);
    }).toThrowError("La cantidad debe ser un entero positivo.");
  });
});
