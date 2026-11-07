
/**
 * Actividad Obligatoria N.º 3 - Correcciones de la auditoría (PR #93)
 * RC4 - Pruebas de integración del filtrado del catálogo.
 * Framework: Jasmine
 */

describe("Integración - Flujo 1 (orquestador)", function () {
  beforeEach(function () {
    spyOn(window, "prompt");
    spyOn(window, "alert");
    spyOn(console, "log");
  });

  it("permite cancelar al ingresar el campo", function () {
    window.prompt.and.returnValue(null);

    ejecutarFlujoFiltrarCatalogo();

    expect(window.alert).not.toHaveBeenCalled();
    expect(window.prompt).toHaveBeenCalledTimes(1);
  });

  it("permite cancelar al ingresar el valor", function () {
    window.prompt.and.returnValues("tipo", null);

    ejecutarFlujoFiltrarCatalogo();

    expect(window.alert).not.toHaveBeenCalled();
    expect(window.prompt).toHaveBeenCalledTimes(2);
  });

  it("avisa si el campo es inválido y permite reintentar", function () {
    window.prompt.and.returnValues(
      "color", "rojo",
      "tipo", "remera"
    );

    ejecutarFlujoFiltrarCatalogo();

    expect(window.alert).toHaveBeenCalledWith(
      "El criterio no es válido. Ingrese un campo y un valor válidos."
    );

    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Productos encontrados:")
    );
  });

  it("rechaza un valor vacío y permite cancelar después", function () {
    window.prompt.and.returnValues("tipo", "   ", null);

    ejecutarFlujoFiltrarCatalogo();

    expect(window.alert).toHaveBeenCalledWith(
      "El criterio no es válido. Ingrese un campo y un valor válidos."
    );

    expect(window.prompt).toHaveBeenCalledTimes(3);
  });

  it("avisa cuando no existen productos coincidentes", function () {
    window.prompt.and.returnValues("tipo", "zapato");

    ejecutarFlujoFiltrarCatalogo();

    expect(window.alert).toHaveBeenCalledWith(
      "No hay productos coincidentes."
    );
  });

  it("muestra las opciones disponibles al pedir el valor", function () {
    window.prompt.and.returnValues("tipo", "remera");

    ejecutarFlujoFiltrarCatalogo();

    expect(window.prompt.calls.argsFor(1)[0]).toContain(
      "(remera, pantalon, campera)"
    );

    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Productos encontrados:")
    );
  });
});

/**
 * RC5 - Integración del flujo de consulta de productos y talles.
 */
describe("Integración - Flujo 2 (orquestador)", function () {
  beforeEach(function () {
    spyOn(window, "prompt");
    spyOn(window, "alert");
    spyOn(console, "log");
  });

  it("permite cancelar al ingresar el nombre", function () {
    window.prompt.and.returnValue(null);

    ejecutarFlujoConsultarProducto();

    expect(window.alert).not.toHaveBeenCalled();
    expect(window.prompt).toHaveBeenCalledTimes(1);
  });

  it("permite cancelar al ingresar el talle", function () {
    window.prompt.and.returnValues("Remera", null);

    ejecutarFlujoConsultarProducto();

    expect(window.alert).not.toHaveBeenCalled();
    expect(window.prompt).toHaveBeenCalledTimes(2);
  });

  it("rechaza un nombre vacío y permite reintentar", function () {
    window.prompt.and.returnValues("   ", "Remera", "M");

    ejecutarFlujoConsultarProducto();

    expect(window.alert).toHaveBeenCalledWith(
      "Debe ingresar el nombre de un producto."
    );
    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Talle M: disponible")
    );
  });

  it("avisa si el producto no existe y permite reintentar", function () {
    window.prompt.and.returnValues("Zapato", "Campera", "L");

    ejecutarFlujoConsultarProducto();

    expect(window.alert).toHaveBeenCalledWith(
      "El producto no fue encontrado. Intente nuevamente."
    );
    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Talle L: disponible")
    );
  });

  it("rechaza un talle vacío y permite reintentar", function () {
    window.prompt.and.returnValues("Remera", " ", "M");

    ejecutarFlujoConsultarProducto();

    expect(window.alert).toHaveBeenCalledWith(
      "Debe ingresar un talle válido."
    );
    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Talle M: disponible")
    );
  });

  it("informa cuando el talle está disponible", function () {
    window.prompt.and.returnValues("Remera", "M");

    ejecutarFlujoConsultarProducto();

    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Talle M: disponible")
    );
  });

  it("informa cuando el talle no está disponible", function () {
    window.prompt.and.returnValues("Remera", "XL");

    ejecutarFlujoConsultarProducto();

    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Talle XL: no disponible")
    );
  });
});

/**
 * RC6 - Integración del flujo de gestión del carrito.
 */
describe("Integración - Flujo 3 (orquestador)", function () {
  beforeEach(function () {
    carrito = [];
    spyOn(window, "prompt");
    spyOn(window, "alert");
    spyOn(console, "log");
  });

  it("permite cancelar desde el menú del carrito", function () {
    window.prompt.and.returnValue(null);

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).not.toHaveBeenCalled();
    expect(carrito).toEqual([]);
  });

  it("permite salir con la opción 4 y muestra el estado final", function () {
    window.prompt.and.returnValue("4");

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Estado final del carrito:")
    );
  });

  it("avisa si la opción del menú es inválida", function () {
    window.prompt.and.returnValues("9", "4");

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      "La opción no es válida."
    );
  });

  it("agrega un producto válido al carrito", function () {
    window.prompt.and.returnValues(
      "1", "Remera", "M", "2", "4"
    );

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Carrito actualizado:")
    );
    expect(carrito.length).toBe(1);
    expect(carrito[0].producto).toBe("Remera");
    expect(carrito[0].cantidad).toBe(2);
  });

  it("rechaza datos inválidos y permite reintentar", function () {
    window.prompt.and.returnValues(
      "1",
      "Zapato", "M", "1",
      "Remera", "M", "2",
      "4"
    );

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      "Producto, talle o cantidad inválidos. Intente nuevamente."
    );
    expect(carrito.length).toBe(1);
    expect(carrito[0].producto).toBe("Remera");
  });

  it("permite cancelar al ingresar el producto", function () {
    window.prompt.and.returnValues("1", null);

    ejecutarFlujoGestionarCarrito();

    expect(carrito).toEqual([]);
  });

  it("permite cancelar al ingresar el talle", function () {
    window.prompt.and.returnValues("1", "Remera", null);

    ejecutarFlujoGestionarCarrito();

    expect(carrito).toEqual([]);
  });

  it("permite cancelar al ingresar la cantidad", function () {
    window.prompt.and.returnValues("1", "Remera", "M", null);

    ejecutarFlujoGestionarCarrito();

    expect(carrito).toEqual([]);
  });
});

/**
 * RC6 - Integración del carrito: modificación y eliminación.
 */
describe("Integración - Flujo 3 (modificar y eliminar)", function () {
  beforeEach(function () {
    carrito = [
      { producto: "Remera", talle: "M", cantidad: 2, precio: 15000 }
    ];

    spyOn(window, "prompt");
    spyOn(window, "alert");
    spyOn(console, "log");
  });

  it("rechaza un producto vacío al modificar", function () {
    window.prompt.and.returnValues("2", " ", "M", "4");

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      "Debe ingresar un producto y un talle."
    );
  });

  it("rechaza un talle vacío al modificar", function () {
    window.prompt.and.returnValues("2", "Remera", " ", "4");

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      "Debe ingresar un producto y un talle."
    );
  });

  it("avisa cuando el producto no está en el carrito al modificar", function () {
    window.prompt.and.returnValues("2", "Campera", "L", "4");

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      "El producto y talle no están en el carrito."
    );
  });

  it("rechaza una cantidad inválida y permite reintentar", function () {
    window.prompt.and.returnValues(
      "2", "Remera", "M", "0", "3", "4"
    );

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      "La cantidad debe ser un entero positivo."
    );
    expect(carrito[0].cantidad).toBe(3);
  });

  it("permite cancelar al ingresar la nueva cantidad", function () {
    window.prompt.and.returnValues("2", "Remera", "M", null);

    ejecutarFlujoGestionarCarrito();

    expect(carrito[0].cantidad).toBe(2);
  });
  it("cancela al ingresar el talle del elemento a modificar", function () {
    window.prompt.and.returnValues("2", "Remera", null);

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).not.toHaveBeenCalled();
    expect(carrito[0].cantidad).toBe(2);
  });

  it("cancela al ingresar el producto del elemento a modificar", function () {
    window.prompt.and.returnValues("2", null);

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).not.toHaveBeenCalled();
    expect(carrito[0].cantidad).toBe(2);
  });


  it("modifica correctamente la cantidad de un producto", function () {
    window.prompt.and.returnValues("2", "Remera", "M", "5", "4");

    ejecutarFlujoGestionarCarrito();

    expect(carrito[0].cantidad).toBe(5);
    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Carrito actualizado:")
    );
  });

  it("rechaza un producto vacío al eliminar", function () {
    window.prompt.and.returnValues("3", " ", "M", "4");

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      "Debe ingresar un producto y un talle."
    );
  });

  it("rechaza un talle vacío al eliminar", function () {
    window.prompt.and.returnValues("3", "Remera", " ", "4");

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      "Debe ingresar un producto y un talle."
    );
  });

  it("avisa si el producto no existe al eliminar", function () {
    window.prompt.and.returnValues("3", "Campera", "L", "4");

    ejecutarFlujoGestionarCarrito();

    expect(window.alert).toHaveBeenCalledWith(
      "El producto y talle no están en el carrito."
    );
  });

  it("permite cancelar al ingresar el producto a eliminar", function () {
    window.prompt.and.returnValues("3", null);

    ejecutarFlujoGestionarCarrito();

    expect(carrito.length).toBe(1);
  });

  it("permite cancelar al ingresar el talle a eliminar", function () {
    window.prompt.and.returnValues("3", "Remera", null);

    ejecutarFlujoGestionarCarrito();

    expect(carrito.length).toBe(1);
  });

  it("elimina correctamente un producto del carrito", function () {
    window.prompt.and.returnValues("3", "Remera", "M", "4");

    ejecutarFlujoGestionarCarrito();

    expect(carrito).toEqual([]);
    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Carrito actualizado:")
    );
  });
});

/**
 * RC7 - Integración del resumen de compra y menú principal.
 */
describe("Integración - Flujo 4 (resumen y simulador)", function () {
  beforeEach(function () {
    carrito = [];
    spyOn(window, "prompt");
    spyOn(window, "alert");
    spyOn(console, "log");
  });

  it("avisa cuando el carrito está vacío", function () {
    ejecutarFlujoResumenCompra();

    expect(window.alert).toHaveBeenCalledWith(
      "No hay productos para resumir."
    );
  });

  it("muestra el resumen y total correcto de dos productos", function () {
    carrito = [
      { producto: "Remera", talle: "M", cantidad: 2, precio: 15000 },
      { producto: "Campera", talle: "L", cantidad: 1, precio: 48000 }
    ];

    ejecutarFlujoResumenCompra();

    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Resumen de compra:")
    );
    expect(window.alert).toHaveBeenCalledWith(
      jasmine.stringContaining("Total: $78000")
    );
  });

  it("permite consultar el resumen desde el menú y salir", function () {
    window.prompt.and.returnValues("4", "0");

    iniciarSimulador();

    expect(window.alert).toHaveBeenCalledWith(
      "No hay productos para resumir."
    );
    expect(window.prompt).toHaveBeenCalledTimes(2);
  });

  it("permite cancelar el menú principal", function () {
    window.prompt.and.returnValue(null);

    iniciarSimulador();

    expect(window.alert).not.toHaveBeenCalled();
  });

  it("avisa cuando la opción del menú principal es inválida", function () {
    window.prompt.and.returnValues("9", "0");

    iniciarSimulador();

    expect(window.alert).toHaveBeenCalledWith(
      "La opción no es válida."
    );
  });

  it("ejecuta el flujo de catálogo al seleccionar la opción 1", function () {
    spyOn(window, "ejecutarFlujoFiltrarCatalogo");
    window.prompt.and.returnValues("1", "0");

    iniciarSimulador();

    expect(window.ejecutarFlujoFiltrarCatalogo).toHaveBeenCalled();
  });

  it("ejecuta el flujo de producto al seleccionar la opción 2", function () {
    spyOn(window, "ejecutarFlujoConsultarProducto");
    window.prompt.and.returnValues("2", "0");

    iniciarSimulador();

    expect(window.ejecutarFlujoConsultarProducto).toHaveBeenCalled();
  });

  it("ejecuta el flujo de carrito al seleccionar la opción 3", function () {
    spyOn(window, "ejecutarFlujoGestionarCarrito");
    window.prompt.and.returnValues("3", "0");

    iniciarSimulador();

    expect(window.ejecutarFlujoGestionarCarrito).toHaveBeenCalled();
  });
});
