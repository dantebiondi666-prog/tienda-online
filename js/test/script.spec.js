import Carrito from "../models/Carrito.js";
import fs from "node:fs/promises";
import { JSDOM } from "jsdom";


const archivoHtml = new URL("../../index.html", import.meta.url);
const archivoProductos = new URL("../../api/productos.json", import.meta.url);
const nombresGlobales = [
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "Event",
  "CustomEvent",
  "KeyboardEvent",
  "MouseEvent",
  "HTMLElement",
  "HTMLInputElement",
  "HTMLSelectElement",
  "HTMLFormElement",
  "Node",
  "DOMException",
  "alert",
  "prompt",
  "fetch",
];
let contadorImportaciones = 0;
let dom;
let descriptoresAnteriores;
let observadorCarga;

describe("Controlador de eventos con DOM", function () {
beforeEach(async function () {
  const [html, productosJson] = await Promise.all([
    fs.readFile(archivoHtml, "utf8"),
    fs.readFile(archivoProductos, "utf8"),
  ]);
  dom = new JSDOM(html, {
    url: "http://localhost/",
    pretendToBeVisual: true,
  });

  const globalesJSDOM = {
    window: dom.window,
    document: dom.window.document,
    localStorage: dom.window.localStorage,
    sessionStorage: dom.window.sessionStorage,
    Event: dom.window.Event,
    CustomEvent: dom.window.CustomEvent,
    KeyboardEvent: dom.window.KeyboardEvent,
    MouseEvent: dom.window.MouseEvent,
    HTMLElement: dom.window.HTMLElement,
    HTMLInputElement: dom.window.HTMLInputElement,
    HTMLSelectElement: dom.window.HTMLSelectElement,
    HTMLFormElement: dom.window.HTMLFormElement,
    Node: dom.window.Node,
    DOMException: dom.window.DOMException,
    alert: jasmine.createSpy("alert"),
    prompt: jasmine.createSpy("prompt"),
    fetch: jasmine.createSpy("fetch").and.resolveTo({
      ok: true,
      status: 200,
      json: jasmine.createSpy("json").and.resolveTo(JSON.parse(productosJson)),
    }),
  };

  descriptoresAnteriores = new Map(
    nombresGlobales.map((nombre) => [
      nombre,
      Object.getOwnPropertyDescriptor(globalThis, nombre),
    ])
  );
  for (const [nombre, valor] of Object.entries(globalesJSDOM)) {
    Object.defineProperty(globalThis, nombre, {
      configurable: true,
      writable: true,
      value: valor,
    });
  }

  await import(`../script.js?prueba=${++contadorImportaciones}`);

  // Esperar el estado final del catálogo, incluida la conversión de la respuesta a JSON.
  const cargaFinalizada = new Promise((resolve) => {
    const grilla = document.getElementById("product-grid");
    observadorCarga = new window.MutationObserver(() => {
      if (grilla.getAttribute("aria-busy") === "false") {
        observadorCarga.disconnect();
        resolve();
      }
    });
    observadorCarga.observe(grilla, {
      attributes: true,
      attributeFilter: ["aria-busy"],
    });
  });

  document.dispatchEvent(new window.Event("DOMContentLoaded"));
  await cargaFinalizada;

  expect(globalThis.fetch).toHaveBeenCalledOnceWith("api/productos.json");
  expect(document.getElementById("busqueda").disabled).toBeFalse();
});

afterEach(function () {
  expect(globalThis.alert).not.toHaveBeenCalled();
  expect(globalThis.prompt).not.toHaveBeenCalled();

  observadorCarga?.disconnect();
  observadorCarga = undefined;

  if (dom) {
    dom.window.close();
    dom = undefined;
  }
  for (const nombre of nombresGlobales) {
    const descriptor = descriptoresAnteriores.get(nombre);
    if (descriptor) {
      Object.defineProperty(globalThis, nombre, descriptor);
    } else {
      delete globalThis[nombre];
    }
  }
  descriptoresAnteriores = undefined;
});

function disparar(elemento, tipo) {
  elemento.dispatchEvent(new window.Event(tipo, { bubbles: true, cancelable: true }));
}

function abrirProducto(nombre) {
  const boton = [...document.querySelectorAll("#product-grid button")].find(
    (elemento) => elemento.dataset.producto === nombre
  );
  boton.click();

  const evento = new window.Event("show.bs.modal", {
    bubbles: true,
    cancelable: true,
  });
  Object.defineProperty(evento, "relatedTarget", { value: boton });
  document.getElementById("modalProducto").dispatchEvent(evento);
}

function seleccionarTalle(talle) {
  const selector = document.getElementById("modalProductoTalle");
  selector.value = talle;
  disparar(selector, "change");
}

function enviarFormulario(formulario) {
  disparar(formulario, "submit");
}

function agregarProducto(nombre, talle, cantidad = "1") {
  abrirProducto(nombre);
  seleccionarTalle(talle);
  const campoCantidad = document.getElementById("modalProductoCantidad");
  campoCantidad.value = cantidad;
  disparar(campoCantidad, "input");
  enviarFormulario(document.getElementById("modal-producto-form"));
}

function lineaCarrito(nombre, talle) {
  return document.querySelector(
    `#carrito-items li[data-producto="${nombre}"][data-talle="${talle}"]`
  );
}

function moneda(valor) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(valor);
}

describe("Flujo 1 - Consultar y filtrar catálogo", function () {
  it("busca por nombre sin distinguir mayúsculas ni tildes", function () {
    const busqueda = document.getElementById("busqueda");
    busqueda.value = "PANTALON";
    disparar(busqueda, "input");

    expect(document.querySelector("#product-grid h3").textContent).toBe("Pantalón");
  });

  it("envía la búsqueda y muestra el producto coincidente", function () {
    const busqueda = document.getElementById("busqueda");
    busqueda.value = "Campera";
    enviarFormulario(document.getElementById("busqueda-form"));

    expect(document.querySelector("#product-grid h3").textContent).toBe("Campera");
  });

  it("muestra el feedback cuando la búsqueda no encuentra productos", function () {
    const busqueda = document.getElementById("busqueda");
    busqueda.value = "Zapato";
    disparar(busqueda, "input");

    expect(document.getElementById("catalogo-feedback").textContent).toBe(
      'No se encontró un producto llamado "Zapato".'
    );
  });

  it("aplica en conjunto los filtros de categoría, tipo, talle y estilo", function () {
    const filtros = document.getElementById("filtros-form");
    for (const [campo, valor] of [
      ["categoria", "Abrigo"],
      ["tipo", "campera"],
      ["talle", "XL"],
      ["estilo", "urban"],
    ]) {
      const checkbox = filtros.querySelector(
        `input[name="${campo}"][value="${valor}"]`
      );
      checkbox.checked = true;
      disparar(checkbox, "change");
    }

    expect(document.querySelector("#product-grid h3").textContent).toBe("Campera");
  });

  it("restablece los filtros y vuelve a mostrar todo el catálogo", async function () {
    const filtros = document.getElementById("filtros-form");
    const categoria = filtros.querySelector(
      'input[name="categoria"][value="Abrigo"]'
    );
    categoria.checked = true;
    disparar(categoria, "change");
    filtros.reset();
    await new Promise((resolve) => window.setTimeout(resolve, 0));

    expect(document.querySelectorAll("#product-grid article").length).toBe(3);
  });
});

describe("Flujo 2 - Consultar producto y talle", function () {
  it("abre el detalle con categoría, tipo, estilo, precio y talles reales", function () {
    abrirProducto("Pantalón");

    expect([
      document.getElementById("modalProductoCategoria").textContent,
      document.getElementById("modalProductoTipo").textContent,
      document.getElementById("modalProductoEstilo").textContent,
      document.getElementById("modalProductoPrecio").textContent,
      document.getElementById("modalProductoTalles").textContent,
    ]).toEqual([
      "Indumentaria inferior",
      "pantalon",
      "casual",
      moneda(22000),
      "Talles disponibles: 38 / 40 / 42",
    ]);
  });

  it("devuelve el foco al botón de origen y limpia el modal al cerrarse", function () {
  abrirProducto("Remera");

  const modal = document.getElementById("modalProducto");
  const botonOrigen = [...document.querySelectorAll("#product-grid button")].find(
    (boton) => boton.dataset.producto === "Remera"
  );

  const cantidad = document.getElementById("modalProductoCantidad");
  cantidad.value = "3";

  modal.dispatchEvent(
    new window.Event("hidden.bs.modal", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(document.activeElement).toBe(botonOrigen);
  expect(cantidad.value).toBe("1");
});

it("lleva el foco al último elemento al presionar Shift+Tab desde el primero", function () {
  abrirProducto("Remera");

  const modal = document.getElementById("modalProducto");
  const botonCerrarSuperior = modal.querySelector(".btn-close");
  const botonCerrarInferior = modal.querySelector(
    '.modal-footer button[data-bs-dismiss="modal"]'
  );

  botonCerrarSuperior.focus();

  modal.dispatchEvent(
    new window.KeyboardEvent("keydown", {
      key: "Tab",
      shiftKey: true,
      bubbles: true,
      cancelable: true,
    })
  );

  expect(document.activeElement).toBe(botonCerrarInferior);
});

it("devuelve el foco al primer elemento al presionar Tab desde el último", function () {
  abrirProducto("Remera");

  const modal = document.getElementById("modalProducto");
  const botonCerrarSuperior = modal.querySelector(".btn-close");
  const botonCerrarInferior = modal.querySelector(
    '.modal-footer button[data-bs-dismiss="modal"]'
  );

  botonCerrarInferior.focus();

  modal.dispatchEvent(
    new window.KeyboardEvent("keydown", {
      key: "Tab",
      shiftKey: false,
      bubbles: true,
      cancelable: true,
    })
  );

  expect(document.activeElement).toBe(botonCerrarSuperior);
});

it("restablece el formulario del modal al ejecutar reset", async function () {
  abrirProducto("Remera");

  const modal = document.getElementById("modalProducto");
  const formulario = document.getElementById("modal-producto-form");
  const talle = document.getElementById("modalProductoTalle");
  const cantidad = document.getElementById("modalProductoCantidad");
  const botonAgregar = modal.querySelector('[type="submit"]');

  talle.value = "M";
  disparar(talle, "change");

  cantidad.value = "3";
  disparar(cantidad, "input");

  expect(botonAgregar.disabled).toBeFalse();

  formulario.reset();

  await new Promise((resolve) => window.setTimeout(resolve, 0));

  expect(talle.value).toBe("");
  expect(cantidad.value).toBe("1");
  expect(botonAgregar.disabled).toBeTrue();
  expect(document.getElementById("modal-talle-feedback").textContent).toBe("");
});

it("enfoca el botón de cerrar cuando el modal termina de abrirse", function () {
  abrirProducto("Remera");

  const modal = document.getElementById("modalProducto");
  const botonCerrar = modal.querySelector(".btn-close");

  modal.dispatchEvent(
    new window.Event("shown.bs.modal", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(document.activeElement).toBe(botonCerrar);
});

  it("marca un talle vacío como inválido y mantiene deshabilitado agregar", function () {
    abrirProducto("Remera");
    seleccionarTalle("");

    expect([
      document.getElementById("modal-talle-feedback").textContent,
      document.querySelector('#modalProducto [type="submit"]').disabled,
    ]).toEqual(["Seleccioná un talle.", true]);
  });

  it("rechaza un talle disponible en catálogo pero no para el producto", function () {
    abrirProducto("Remera");
    seleccionarTalle("XL");

    expect(document.getElementById("modal-talle-feedback").textContent).toBe(
      "Talle XL no disponible."
    );
  });

  it("rechaza una cantidad cero con el mensaje correspondiente", function () {
    abrirProducto("Remera");
    seleccionarTalle("M");
    const cantidad = document.getElementById("modalProductoCantidad");
    cantidad.value = "0";
    disparar(cantidad, "input");

    expect([
      document.getElementById("modal-cantidad-feedback").textContent,
      document.querySelector('#modalProducto [type="submit"]').disabled,
    ]).toEqual(["Ingresá una cantidad entera mayor que cero.", true]);
  });

  it("rechaza una cantidad negativa", function () {
    abrirProducto("Remera");
    seleccionarTalle("M");
    const cantidad = document.getElementById("modalProductoCantidad");
    cantidad.value = "-2";
    disparar(cantidad, "input");

    expect([
      cantidad.classList.contains("is-invalid"),
      document.getElementById("modal-cantidad-feedback").textContent,
    ]).toEqual([
      true,
      "Ingresá una cantidad entera mayor que cero.",
    ]);
  });

  it("rechaza una cantidad decimal", function () {
    abrirProducto("Remera");
    seleccionarTalle("M");
    const cantidad = document.getElementById("modalProductoCantidad");
    cantidad.value = "1.5";
    disparar(cantidad, "input");

    expect([
      cantidad.classList.contains("is-invalid"),
      document.getElementById("modal-cantidad-feedback").textContent,
    ]).toEqual([
      true,
      "Ingresá una cantidad entera mayor que cero.",
    ]);
  });

  it("rechaza una cantidad vacía", function () {
    abrirProducto("Remera");
    seleccionarTalle("M");
    const cantidad = document.getElementById("modalProductoCantidad");
    cantidad.value = "";
    disparar(cantidad, "input");

    expect([
      cantidad.classList.contains("is-invalid"),
      document.getElementById("modal-cantidad-feedback").textContent,
    ]).toEqual([
      true,
      "Ingresá una cantidad entera mayor que cero.",
    ]);
  });

  it("habilita agregar cuando talle y cantidad son válidos", function () {
    abrirProducto("Remera");
    seleccionarTalle("M");
    const cantidad = document.getElementById("modalProductoCantidad");
    cantidad.value = "2";
    disparar(cantidad, "input");

    expect(document.querySelector('#modalProducto [type="submit"]').disabled).toBeFalse();
  });
});

describe("Flujo 3 - Gestionar carrito", function () {
  it("agrega un producto y actualiza el total del carrito", function () {
    agregarProducto("Remera", "M", "2");

    expect([
      lineaCarrito("Remera", "M").querySelector("[data-cart-quantity]").value,
      document.getElementById("carrito-total").textContent,
      document.getElementById("carrito-feedback").textContent,
    ]).toEqual(["2", moneda(30000), "El carrito se actualizó correctamente."]);
  });

  it("muestra un mensaje de error si falla el agregado al carrito", function () {
  spyOn(Carrito.prototype, "agregarProducto").and.throwError(
    new Error("No se pudo agregar el producto")
  );

  abrirProducto("Remera");
  seleccionarTalle("M");

  const cantidad = document.getElementById("modalProductoCantidad");
  cantidad.value = "1";
  disparar(cantidad, "input");

  enviarFormulario(document.getElementById("modal-producto-form"));

  expect(
    document.getElementById("modal-producto-feedback").textContent
  ).toBe("No se pudo agregar el producto");
});

  it("suma la cantidad al agregar el mismo producto con el mismo talle", function () {
    agregarProducto("Remera", "M", "1");
    agregarProducto("Remera", "M", "2");

    expect(document.querySelectorAll("#carrito-items li").length).toBe(1);
    expect(lineaCarrito("Remera", "M").querySelector("[data-cart-quantity]").value).toBe("3");
  });

  it("crea otra línea al agregar el producto con un talle distinto", function () {
    agregarProducto("Remera", "M");
    agregarProducto("Remera", "L");

    expect(document.querySelectorAll("#carrito-items li").length).toBe(2);
  });

  it("actualiza una cantidad válida desde el formulario del carrito", function () {
    agregarProducto("Remera", "M", "2");
    const linea = lineaCarrito("Remera", "M");
    const cantidad = linea.querySelector("[data-cart-quantity]");
    cantidad.value = "4";
    disparar(cantidad, "input");
    enviarFormulario(linea.querySelector("form"));

    expect([
      lineaCarrito("Remera", "M").querySelector("[data-cart-quantity]").value,
      document.getElementById("carrito-total").textContent,
      document.getElementById("carrito-feedback").textContent,
    ]).toEqual(["4", moneda(60000), "La cantidad se actualizó correctamente."]);
  });

  it("muestra un mensaje de error si falla la modificación de cantidad", function () {
  agregarProducto("Remera", "M", "2");

  spyOn(Carrito.prototype, "modificarCantidad").and.throwError(
    new Error("No se pudo modificar la cantidad")
  );

  const linea = lineaCarrito("Remera", "M");
  const cantidad = linea.querySelector("[data-cart-quantity]");

  cantidad.value = "4";
  disparar(cantidad, "input");
  enviarFormulario(linea.querySelector("form"));

  expect(
    document.getElementById("carrito-feedback").textContent
  ).toBe("No se pudo modificar la cantidad");
});

  it("deshabilita la actualización e ignora una cantidad inválida", function () {
    agregarProducto("Remera", "M", "2");
    const linea = lineaCarrito("Remera", "M");
    const cantidad = linea.querySelector("[data-cart-quantity]");
    cantidad.value = "0";
    disparar(cantidad, "input");
    const boton = linea.querySelector('[type="submit"]');
    enviarFormulario(linea.querySelector("form"));

    expect([
      boton.disabled,
      cantidad.value,
      cantidad.classList.contains("is-invalid"),
      document.getElementById("carrito-total").textContent,
    ]).toEqual([true, "0", true, moneda(30000)]);
  });

  it("elimina una línea al hacer clic en eliminar", function () {
    agregarProducto("Remera", "M");
    lineaCarrito("Remera", "M").querySelector('[data-cart-action="remove"]').click();

    expect([
      document.querySelectorAll("#carrito-items li").length,
      document.getElementById("carrito-feedback").textContent,
    ]).toEqual([0, "El producto se eliminó del carrito."]);
  });

  it("muestra un mensaje de error si falla la eliminación del producto", function () {
  agregarProducto("Remera", "M");

  spyOn(Carrito.prototype, "eliminarProducto").and.throwError(
    new Error("No se pudo eliminar el producto")
  );

  lineaCarrito("Remera", "M")
    .querySelector('[data-cart-action="remove"]')
    .click();

  expect(
    document.getElementById("carrito-feedback").textContent
  ).toBe("No se pudo eliminar el producto");
});

  it("muestra el estado vacío y total cero al quitar el último producto", function () {
    agregarProducto("Remera", "M");
    lineaCarrito("Remera", "M").querySelector('[data-cart-action="remove"]').click();

    expect([
      document.getElementById("carrito-vacio").hidden,
      document.getElementById("carrito-total").textContent,
    ]).toEqual([false, moneda(0)]);
  });
});

describe("Ramas defensivas del controlador", function () {
  it("ignora un submit que no corresponde al formulario del carrito", function () {
    agregarProducto("Remera", "M", "2");
    const linea = lineaCarrito("Remera", "M");
    const formularioAjeno = document.createElement("form");
    linea.append(formularioAjeno);
    const modificarCantidad = spyOn(Carrito.prototype, "modificarCantidad");
    const evento = new window.Event("submit", {
      bubbles: true,
      cancelable: true,
    });

    formularioAjeno.dispatchEvent(evento);

    expect(evento.defaultPrevented).toBeFalse();
    expect(modificarCantidad).not.toHaveBeenCalled();
    expect(linea.querySelector("[data-cart-quantity]").value).toBe("2");
  });

  it("conserva el producto al hacer clic fuera del botón Eliminar", function () {
    agregarProducto("Remera", "M");
    const linea = lineaCarrito("Remera", "M");
    const eliminarProducto = spyOn(Carrito.prototype, "eliminarProducto");

    linea.querySelector("strong").click();

    expect(eliminarProducto).not.toHaveBeenCalled();
    expect(lineaCarrito("Remera", "M")).toBe(linea);
  });

  it("mantiene el foco y deja pasar una tecla distinta de Tab", function () {
    abrirProducto("Remera");
    const modal = document.getElementById("modalProducto");
    const botonCerrar = modal.querySelector(
      '.modal-footer button[data-bs-dismiss="modal"]'
    );
    botonCerrar.focus();
    const evento = new window.KeyboardEvent("keydown", {
      key: "ArrowRight",
      bubbles: true,
      cancelable: true,
    });

    botonCerrar.dispatchEvent(evento);

    expect(evento.defaultPrevented).toBeFalse();
    expect(document.activeElement).toBe(botonCerrar);
  });

  it("propaga sin modificar un valor lanzado que no es Error", function () {
    agregarProducto("Remera", "M");
    const valorLanzado = "Fallo inesperado";
    spyOn(Carrito.prototype, "eliminarProducto").and.callFake(function () {
      throw valorLanzado;
    });

    const errores = [];
    window.addEventListener("error", function (evento) {
      errores.push(evento.error);
      evento.preventDefault();
    }, { once: true });

    lineaCarrito("Remera", "M")
      .querySelector('[data-cart-action="remove"]')
      .click();

    expect(errores).toEqual([valorLanzado]);
  });
});

describe("Cobertura pendiente del modal y del carrito", function () {
  it("cancela la apertura del modal cuando el producto no existe", function () {
    const modal = document.getElementById("modalProducto");
    const formulario = document.getElementById("modal-producto-form");
    const cantidad = document.getElementById("modalProductoCantidad");
    const talle = document.getElementById("modalProductoTalle");
    const feedback = document.getElementById("catalogo-feedback");
    const contenidoAnterior = modal.innerHTML;
    const cantidadAnterior = cantidad.value;
    const talleAnterior = talle.value;
    const reset = spyOn(formulario, "reset").and.callThrough();
    const boton = document.createElement("button");
    boton.dataset.producto = "Producto inexistente";

    const evento = new window.Event("show.bs.modal", {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(evento, "relatedTarget", { value: boton });

    expect(modal.dispatchEvent(evento)).toBeFalse();

    expect(evento.defaultPrevented).toBeTrue();
    expect(feedback.textContent).toBe(
      "No se pudo encontrar el producto seleccionado."
    );
    expect(feedback.classList.contains("text-danger")).toBeTrue();
    expect(reset).not.toHaveBeenCalled();
    expect(modal.innerHTML).toBe(contenidoAnterior);
    expect(cantidad.value).toBe(cantidadAnterior);
    expect(talle.value).toBe(talleAnterior);
    expect(modal.querySelector('[type="submit"]').disabled).toBeTrue();
    expect(modal.classList.contains("show")).toBeFalse();
    expect(modal.getAttribute("aria-hidden")).toBe("true");
  });

  it("limpia la validación al restablecer el modal con cantidad inválida", async function () {
    abrirProducto("Remera");
    seleccionarTalle("M");

    const formulario = document.getElementById("modal-producto-form");
    const cantidad = document.getElementById("modalProductoCantidad");
    const talle = document.getElementById("modalProductoTalle");
    const feedback = document.getElementById("modal-cantidad-feedback");
    const boton = document.querySelector('#modalProducto [type="submit"]');

    talle.querySelector('option[value="M"]').defaultSelected = true;
    cantidad.defaultValue = "0";
    cantidad.value = "0";
    disparar(cantidad, "input");

    expect(cantidad.classList.contains("is-invalid")).toBeTrue();
    expect(cantidad.getAttribute("aria-invalid")).toBe("true");
    expect(feedback.textContent).toBe(
      "Ingresá una cantidad entera mayor que cero."
    );

    formulario.reset();
    await new Promise((resolve) => window.setTimeout(resolve, 0));

    expect(talle.value).toBe("M");
    expect(cantidad.value).toBe("0");
    expect(cantidad.classList.contains("is-invalid")).toBeFalse();
    expect(cantidad.classList.contains("is-valid")).toBeFalse();
    expect(cantidad.hasAttribute("aria-invalid")).toBeFalse();
    expect(feedback.textContent).toBe("");
    expect(feedback.classList.contains("text-danger")).toBeFalse();
    expect(feedback.classList.contains("text-success")).toBeFalse();
    expect(boton.disabled).toBeTrue();
  });

  it("rechaza el submit inválido del modal y conserva el carrito", function () {
    agregarProducto("Remera", "M", "2");

    const formulario = document.getElementById("modal-producto-form");
    const cantidad = document.getElementById("modalProductoCantidad");
    const items = document.getElementById("carrito-items");
    const total = document.getElementById("carrito-total");
    const feedback = document.getElementById("carrito-feedback");
    const contenidoAnterior = items.innerHTML;
    const totalAnterior = total.textContent;
    const feedbackAnterior = feedback.textContent;
    const guardadoAnterior = localStorage.getItem("app:carrito:items");
    const agregar = spyOn(Carrito.prototype, "agregarProducto").and.callThrough();
    const guardar = spyOn(window.Storage.prototype, "setItem").and.callThrough();

    cantidad.value = "0";
    const evento = new window.Event("submit", {
      bubbles: true,
      cancelable: true,
    });
    formulario.dispatchEvent(evento);

    expect(evento.defaultPrevented).toBeTrue();
    expect(agregar).not.toHaveBeenCalled();
    expect(guardar).not.toHaveBeenCalled();
    expect(items.innerHTML).toBe(contenidoAnterior);
    expect(total.textContent).toBe(totalAnterior);
    expect(feedback.textContent).toBe(feedbackAnterior);
    expect(localStorage.getItem("app:carrito:items")).toBe(guardadoAnterior);
    expect(cantidad.classList.contains("is-invalid")).toBeTrue();
    expect(document.getElementById("modal-cantidad-feedback").textContent).toBe(
      "Ingresá una cantidad entera mayor que cero."
    );
    expect(document.querySelector('#modalProducto [type="submit"]').disabled)
      .toBeTrue();
  });

  it("ignora un input del carrito que no es un campo de cantidad", function () {
    agregarProducto("Remera", "M", "2");

    const linea = lineaCarrito("Remera", "M");
    const cantidad = linea.querySelector("[data-cart-quantity]");
    const boton = linea.querySelector('[type="submit"]');
    const inputAjeno = document.createElement("input");
    inputAjeno.type = "number";
    inputAjeno.value = "0";
    linea.querySelector("form").append(inputAjeno);

    const contenidoAnterior = linea.innerHTML;
    const feedback = document.getElementById("carrito-feedback");
    const feedbackAnterior = feedback.outerHTML;
    const totalAnterior = document.getElementById("carrito-total").textContent;
    const guardadoAnterior = localStorage.getItem("app:carrito:items");
    const modificar = spyOn(Carrito.prototype, "modificarCantidad").and.callThrough();
    const guardar = spyOn(window.Storage.prototype, "setItem").and.callThrough();
    const evento = new window.Event("input", {
      bubbles: true,
      cancelable: true,
    });

    inputAjeno.dispatchEvent(evento);

    expect(evento.defaultPrevented).toBeFalse();
    expect(modificar).not.toHaveBeenCalled();
    expect(guardar).not.toHaveBeenCalled();
    expect(lineaCarrito("Remera", "M")).toBe(linea);
    expect(linea.innerHTML).toBe(contenidoAnterior);
    expect(cantidad.value).toBe("2");
    expect(feedback.outerHTML).toBe(feedbackAnterior);
    expect(boton.disabled).toBeFalse();
    expect(document.getElementById("carrito-total").textContent).toBe(totalAnterior);
    expect(localStorage.getItem("app:carrito:items")).toBe(guardadoAnterior);
  });
});


describe("Flujo 4 - Resumen de compra", function () {
  it("muestra ítems, subtotales y total del resumen", function () {
    agregarProducto("Remera", "M", "2");
    agregarProducto("Campera", "L", "1");

    expect([
      [...document.querySelectorAll("#resumen-items li")].map((item) => item.textContent),
      document.getElementById("resumen-total").textContent,
      document.getElementById("resumen-vacio").hidden,
    ]).toEqual([
      [
        `Remera (talle M) × 2: ${moneda(30000)}`,
        `Campera (talle L) × 1: ${moneda(48000)}`,
      ],
      moneda(78000),
      true,
    ]);
  });

  it("muestra el mensaje de resumen vacío", function () {
    expect([
      document.getElementById("resumen-vacio").textContent,
      document.getElementById("resumen-vacio").hidden,
      document.getElementById("resumen-total").textContent,
    ]).toEqual(["Agregá productos para ver el resumen.", false, moneda(0)]);
  });
});

describe("Flujo 5 - Sin prompt ni alert", function () {
  it("no invoca diálogos nativos durante el flujo del controlador", function () {
    expect({
      alert: globalThis.alert.calls.count(),
      prompt: globalThis.prompt.calls.count(),
    }).toEqual({ alert: 0, prompt: 0 });
  });
});
});

describe("Integración de animaciones AOS", function () {
  const nombresGlobales = [
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "Event",
    "CustomEvent",
    "KeyboardEvent",
    "MouseEvent",
    "HTMLElement",
    "HTMLInputElement",
    "HTMLSelectElement",
    "HTMLFormElement",
    "Node",
    "DOMException",
    "alert",
    "prompt",
    "fetch",
    "AOS",
    "matchMedia",
  ];
  let contadorImportaciones = 0;
  let dom;
  let descriptoresAnteriores;
  let observadorCarga;

  function definirGlobal(nombre, valor) {
    Object.defineProperty(globalThis, nombre, {
      configurable: true,
      writable: true,
      value: valor,
    });
  }

  function crearAOS() {
    return {
      init: jasmine.createSpy("AOS.init"),
      refreshHard: jasmine.createSpy("AOS.refreshHard"),
    };
  }

  function crearProductosParaDemora(productos) {
    const resultado = [...productos];
    for (let indice = 1; resultado.length < 8; indice += 1) {
      const original = productos[(indice - 1) % productos.length];
      resultado.push({
        ...original,
        nombre: `Prenda de prueba ${indice}`,
        imagen: {
          ...original.imagen,
          id: `prenda-prueba-${indice}`,
          alt: `Imagen de prueba ${indice}`,
        },
      });
    }
    return resultado;
  }

  async function iniciarAplicacion({
    aos,
    movimientoReducido = false,
    productosExtendidos = false,
    fetchSimulado,
    esperarCarga = true,
    prepararEstadoError = false,
  }) {
    const [html, productosJson] = await Promise.all([
      fs.readFile(archivoHtml, "utf8"),
      fs.readFile(archivoProductos, "utf8"),
    ]);
    const productos = JSON.parse(productosJson);
    const productosRespuesta = productosExtendidos
      ? crearProductosParaDemora(productos)
      : productos;
    const fetchAplicacion =
      fetchSimulado ??
      jasmine.createSpy("fetch").and.resolveTo({
        ok: true,
        status: 200,
        json: jasmine
          .createSpy("json")
          .and.resolveTo(productosRespuesta),
      });
    dom = new JSDOM(html, {
      url: "http://localhost/",
      pretendToBeVisual: true,
    });

    if (prepararEstadoError) {
      const documento = dom.window.document;
      documento
        .getElementById("product-grid")
        .append(documento.createElement("article"));
      const sugerencia = documento.createElement("option");
      sugerencia.value = "Producto anterior";
      documento.getElementById("sugerencias-busqueda").append(sugerencia);
      documento.getElementById("carouselDestacados").hidden = false;
    }

    const globalesJSDOM = {
      window: dom.window,
      document: dom.window.document,
      localStorage: dom.window.localStorage,
      sessionStorage: dom.window.sessionStorage,
      Event: dom.window.Event,
      CustomEvent: dom.window.CustomEvent,
      KeyboardEvent: dom.window.KeyboardEvent,
      MouseEvent: dom.window.MouseEvent,
      HTMLElement: dom.window.HTMLElement,
      HTMLInputElement: dom.window.HTMLInputElement,
      HTMLSelectElement: dom.window.HTMLSelectElement,
      HTMLFormElement: dom.window.HTMLFormElement,
      Node: dom.window.Node,
      DOMException: dom.window.DOMException,
      alert: jasmine.createSpy("alert"),
      prompt: jasmine.createSpy("prompt"),
      fetch: fetchAplicacion,
    };

    descriptoresAnteriores = new Map(
      nombresGlobales.map((nombre) => [
        nombre,
        Object.getOwnPropertyDescriptor(globalThis, nombre),
      ]),
    );
    for (const [nombre, valor] of Object.entries(globalesJSDOM)) {
      definirGlobal(nombre, valor);
    }
    definirGlobal("AOS", aos);
    definirGlobal(
      "matchMedia",
      jasmine
        .createSpy("matchMedia")
        .and.returnValue({ matches: movimientoReducido }),
    );

    await import(`../script.js?integracion-aos=${++contadorImportaciones}`);

    const cargaFinalizada = new Promise((resolve) => {
      const grilla = document.getElementById("product-grid");
      observadorCarga = new window.MutationObserver(() => {
        if (grilla.getAttribute("aria-busy") === "false") {
          observadorCarga.disconnect();
          resolve();
        }
      });
      observadorCarga.observe(grilla, {
        attributes: true,
        attributeFilter: ["aria-busy"],
      });
    });

    document.dispatchEvent(new window.Event("DOMContentLoaded"));
    if (esperarCarga) {
      await cargaFinalizada;
    }
    return { cargaFinalizada, fetch: fetchAplicacion, productos: productosRespuesta };
  }

  function disparar(elemento, tipo) {
    elemento.dispatchEvent(
      new window.Event(tipo, { bubbles: true, cancelable: true }),
    );
  }

  function agregarProducto(nombre, talle) {
    const boton = [...document.querySelectorAll("#product-grid button")].find(
      (elemento) => elemento.dataset.producto === nombre,
    );
    boton.click();

    const modal = document.getElementById("modalProducto");
    const evento = new window.Event("show.bs.modal", {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(evento, "relatedTarget", { value: boton });
    modal.dispatchEvent(evento);

    const selectorTalle = document.getElementById("modalProductoTalle");
    selectorTalle.value = talle;
    disparar(selectorTalle, "change");
    const cantidad = document.getElementById("modalProductoCantidad");
    cantidad.value = "1";
    disparar(cantidad, "input");
    disparar(document.getElementById("modal-producto-form"), "submit");
  }

  function expectSinAtributosAOS() {
    expect(document.querySelectorAll("[data-aos]").length).toBe(0);
    expect(document.querySelectorAll("[data-aos-delay]").length).toBe(0);
  }

  function cerrarAplicacion() {
    observadorCarga?.disconnect();
    observadorCarga = undefined;

    if (dom) {
      dom.window.close();
      dom = undefined;
    }
    if (descriptoresAnteriores) {
      for (const nombre of nombresGlobales) {
        const descriptor = descriptoresAnteriores.get(nombre);
        if (descriptor) {
          Object.defineProperty(globalThis, nombre, descriptor);
        } else {
          delete globalThis[nombre];
        }
      }
      descriptoresAnteriores = undefined;
    }
  }

  function monedaIntegracion(valor) {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(valor);
  }

  function controlesCatalogo() {
    return [
      document.getElementById("busqueda"),
      ...document.querySelectorAll("#filtros-form fieldset, #filtros-form button"),
    ];
  }

  function expectErrorDeCarga() {
    const feedback = document.getElementById("catalogo-feedback");
    expect(document.getElementById("product-grid").children.length).toBe(0);
    expect(
      document.getElementById("sugerencias-busqueda").children.length,
    ).toBe(0);
    expect(document.getElementById("carouselDestacados").hidden).toBeTrue();
    expect(feedback.textContent).toBe(
      "No se pudieron cargar los productos. Recargá la página para volver a intentarlo.",
    );
    expect(feedback.classList.contains("text-danger")).toBeTrue();
    expect(document.getElementById("product-grid").getAttribute("aria-busy")).toBe(
      "false",
    );
    expect(controlesCatalogo().every((control) => control.disabled)).toBeTrue();
  }

  beforeEach(function () {
    descriptoresAnteriores = undefined;
    dom = undefined;
  });

  afterEach(function () {
    cerrarAplicacion();
  });

  it("mantiene los controles bloqueados mientras el catálogo está cargando", async function () {
    let resolverFetch;
    const respuestaPendiente = new Promise((resolve) => {
      resolverFetch = resolve;
    });
    const fetchSimulado = jasmine
      .createSpy("fetch")
      .and.returnValue(respuestaPendiente);
    const { cargaFinalizada, productos } = await iniciarAplicacion({
      fetchSimulado,
      esperarCarga: false,
    });

    expect(fetchSimulado).toHaveBeenCalledOnceWith("api/productos.json");
    expect(document.getElementById("product-grid").getAttribute("aria-busy")).toBe(
      "true",
    );
    expect(document.getElementById("catalogo-feedback").textContent).toBe(
      "Cargando productos...",
    );
    expect(controlesCatalogo().every((control) => control.disabled)).toBeTrue();

    resolverFetch({
      ok: true,
      status: 200,
      json: jasmine.createSpy("json").and.resolveTo(productos),
    });
    await cargaFinalizada;
  });

  it("limpia el catálogo y mantiene el estado de error si fetch falla", async function () {
    const fetchSimulado = jasmine
      .createSpy("fetch")
      .and.callFake(() => Promise.reject(new Error("Fallo de red")));
    await iniciarAplicacion({
      fetchSimulado,
      prepararEstadoError: true,
    });

    expect(fetchSimulado).toHaveBeenCalledOnceWith("api/productos.json");
    expectErrorDeCarga();
  });

  it("limpia el catálogo y mantiene el estado de error ante HTTP 500", async function () {
    const fetchSimulado = jasmine.createSpy("fetch").and.resolveTo({
      ok: false,
      status: 500,
    });
    await iniciarAplicacion({
      fetchSimulado,
      prepararEstadoError: true,
    });

    expect(fetchSimulado).toHaveBeenCalledOnceWith("api/productos.json");
    expectErrorDeCarga();
  });

  it("habilita el catálogo y muestra el carrusel después de una carga exitosa", async function () {
    await iniciarAplicacion({});

    expect(document.getElementById("product-grid").getAttribute("aria-busy")).toBe(
      "false",
    );
    expect(document.getElementById("carouselDestacados").hidden).toBeFalse();
    expect(controlesCatalogo().every((control) => !control.disabled)).toBeTrue();
  });

  it("anima con AOS y conserva el render normal sin movimiento o sin la librería", async function () {
    const aosMovimientoReducido = crearAOS();
    await iniciarAplicacion({
      aos: aosMovimientoReducido,
      movimientoReducido: true,
    });

    expect(aosMovimientoReducido.init).not.toHaveBeenCalled();
    expect(
      [...document.querySelectorAll("#product-grid article h3")].map(
        (titulo) => titulo.textContent,
      ),
    ).toEqual(["Remera", "Pantalón", "Campera"]);
    agregarProducto("Remera", "M");
    expect(document.querySelectorAll("#carrito-items li").length).toBe(1);
    expect(document.querySelectorAll("#resumen-items li").length).toBe(1);
    expectSinAtributosAOS();
    cerrarAplicacion();

    await iniciarAplicacion({ aos: undefined });
    expect(
      [...document.querySelectorAll("#product-grid article h3")].map(
        (titulo) => titulo.textContent,
      ),
    ).toEqual(["Remera", "Pantalón", "Campera"]);
    agregarProducto("Remera", "M");
    expect(document.querySelectorAll("#carrito-items li").length).toBe(1);
    expect(document.querySelectorAll("#resumen-items li").length).toBe(1);
    expect(document.getElementById("carrito-total").textContent).toBe(
      monedaIntegracion(15000),
    );
    expectSinAtributosAOS();
    cerrarAplicacion();

    const aos = crearAOS();
    await iniciarAplicacion({
      aos,
      productosExtendidos: true,
    });

    const tarjetas = [...document.querySelectorAll("#product-grid article")];
    const retrasosCatalogo = tarjetas.map(
      (tarjeta) => tarjeta.getAttribute("data-aos-delay"),
    );
    expect(tarjetas.map((tarjeta) => tarjeta.getAttribute("data-aos"))).toEqual(
      Array(8).fill("fade-up"),
    );
    expect(retrasosCatalogo).toEqual(
      [0, 50, 100, 150, 200, 250, 300, 300].map(String),
    );
    expect(aos.init).toHaveBeenCalledTimes(1);
    expect(aos.refreshHard).toHaveBeenCalled();

    aos.refreshHard.calls.reset();
    const busqueda = document.getElementById("busqueda");
    busqueda.value = "Remera";
    disparar(busqueda, "input");
    expect(aos.refreshHard).toHaveBeenCalledTimes(1);

    busqueda.value = "";
    disparar(busqueda, "input");
    aos.refreshHard.calls.reset();
    for (const [nombre, talle] of [
      ["Remera", "S"],
      ["Remera", "M"],
      ["Remera", "L"],
      ["Pantalón", "38"],
      ["Pantalón", "40"],
      ["Pantalón", "42"],
      ["Campera", "M"],
    ]) {
      agregarProducto(nombre, talle);
    }

    const lineasCarrito = [
      ...document.querySelectorAll("#carrito-items li"),
    ];
    const lineasResumen = [
      ...document.querySelectorAll("#resumen-items li"),
    ];
    const retrasosEsperados = [0, 50, 100, 150, 200, 250, 300].map(String);
    for (const lineas of [lineasCarrito, lineasResumen]) {
      expect(lineas.map((linea) => linea.getAttribute("data-aos"))).toEqual(
        Array(7).fill("fade-right"),
      );
      expect(
        lineas.map((linea) => linea.getAttribute("data-aos-delay")),
      ).toEqual(retrasosEsperados);
    }
    expect(aos.refreshHard).toHaveBeenCalledTimes(7);
    expect(aos.init).toHaveBeenCalledTimes(1);
  });
});
