import StorageUtil from "./utils/storage.js";
import Catalogo from "./models/Catalogo.js";
import Carrito from "./models/Carrito.js";

const datosProductos = [
  {
    nombre: "Remera",
    categoria: "Indumentaria superior",
    tipo: "remera",
    estilo: "casual",
    talles: ["S", "M", "L"],
    precio: 15000,
  },
  {
    nombre: "Pantalón",
    categoria: "Indumentaria inferior",
    tipo: "pantalon",
    estilo: "casual",
    talles: ["38", "40", "42"],
    precio: 22000,
  },
  {
    nombre: "Campera",
    categoria: "Abrigo",
    tipo: "campera",
    estilo: "urban",
    talles: ["M", "L", "XL"],
    precio: 48000,
  },
];

const camposDeFiltro = ["categoria", "tipo", "talle", "estilo"];
const formatoMoneda = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

document.addEventListener("DOMContentLoaded", iniciarAplicacion);

function iniciarAplicacion() {
  const catalogo = new Catalogo(datosProductos);
  const carrito =
  StorageUtil.cargarInstancia(
    StorageUtil.CLAVES.CARRITO_ITEMS,
    Carrito
  ) ?? new Carrito();
  const productGrid = document.getElementById("product-grid");
  const searchForm = document.getElementById("busqueda-form");
  const searchInput = document.getElementById("busqueda");
  const filtersForm = document.getElementById("filtros-form");
  const catalogFeedback = document.getElementById("catalogo-feedback");
  const modal = document.getElementById("modalProducto");
  const modalForm = document.getElementById("modal-producto-form");
  const modalSize = document.getElementById("modalProductoTalle");
  const modalQuantity = document.getElementById("modalProductoCantidad");
  const modalSubmit = modal.querySelector('[type="submit"]');
  const cartItems = document.getElementById("carrito-items");
  const cartFeedback = document.getElementById("carrito-feedback");
  const cartEmpty = document.getElementById("carrito-vacio");
  const cartTotal = document.getElementById("carrito-total");
  const summaryItems = document.getElementById("resumen-items");
  const summaryEmpty = document.getElementById("resumen-vacio");
  const summaryTotal = document.getElementById("resumen-total");
  const imagesByProduct = new Map(
    [...productGrid.querySelectorAll("article")].map((article) => [
      article.querySelector("h3").textContent,
      {
        id: article.id,
        src: article.dataset.productImage,
        alt: article.querySelector("img").alt,
      },
    ])
  );
  const state = {
    productoModal: null,
    botonOrigenModal: null,
  };

  inicializarOpcionesDeFiltros();
  restaurarFiltroActivo();
  actualizarCatalogo();
  renderizarCarrito();

  searchForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    actualizarCatalogo();
  });
  searchInput.addEventListener("input", actualizarCatalogo);

  filtersForm.addEventListener("change", () => {
  guardarFiltroActivo();
  actualizarCatalogo();
});
  filtersForm.addEventListener("reset", () => {
  StorageUtil.eliminar(
    StorageUtil.CLAVES.FILTRO_ACTIVO,
    "session"
  );

  window.setTimeout(actualizarCatalogo, 0);
});

  modal.addEventListener("show.bs.modal", prepararModal);
  modal.addEventListener("shown.bs.modal", () => {
    modal.querySelector(".btn-close").focus();
  });
  modal.addEventListener("hidden.bs.modal", () => {
    if (state.botonOrigenModal?.isConnected) {
      state.botonOrigenModal.focus();
    }
    state.productoModal = null;
    modalForm.reset();
  });
  modal.addEventListener("keydown", mantenerFocoEnModal);

  modalSize.addEventListener("change", () => validarFormularioModal(true));
  modalQuantity.addEventListener("input", () => validarFormularioModal(true));
  modalForm.addEventListener("submit", agregarProductoAlCarrito);
  modalForm.addEventListener("reset", () => {
    window.setTimeout(() => {
      validarFormularioModal(false);
    }, 0);
  });

  cartItems.addEventListener("input", validarCantidadEnCarrito);
  cartItems.addEventListener("submit", modificarCantidadEnCarrito);
  cartItems.addEventListener("click", eliminarProductoDelCarrito);

function guardarFiltroActivo() {
  const filtroSeleccionado = filtersForm.querySelector(
    'input[type="checkbox"]:checked'
  );

  if (!filtroSeleccionado) {
    StorageUtil.eliminar(
      StorageUtil.CLAVES.FILTRO_ACTIVO,
      "session"
    );
    return;
  }

  StorageUtil.guardar(
    StorageUtil.CLAVES.FILTRO_ACTIVO,
    {
      campo: filtroSeleccionado.name,
      valor: filtroSeleccionado.value,
    },
    "session"
  );
}

function restaurarFiltroActivo() {
  const filtro = StorageUtil.obtener(
    StorageUtil.CLAVES.FILTRO_ACTIVO,
    "session"
  );

  if (!filtro?.campo || !filtro?.valor) {
    return;
  }

  const control = [...filtersForm.querySelectorAll('input[type="checkbox"]')]
    .find(
      (input) =>
        input.name === filtro.campo &&
        input.value === filtro.valor
    );

  if (control) {
    control.checked = true;
  }
}

  function inicializarOpcionesDeFiltros() {
    for (const campo of camposDeFiltro) {
      const fieldset = filtersForm.querySelector(
        `fieldset[data-filter-field="${campo}"]`
      );
      const legend = fieldset.querySelector("legend");

      for (const opcion of catalogo.obtenerOpcionesFiltro(campo)) {
        const wrapper = document.createElement("div");
        const label = document.createElement("label");
        const input = document.createElement("input");

        wrapper.className = "form-check";
        label.className = "form-check-label";
        input.className = "form-check-input";
        input.type = "checkbox";
        input.name = campo;
        input.value = opcion;

        label.append(input, document.createTextNode(` ${opcion}`));
        wrapper.append(label);
        fieldset.insertBefore(wrapper, legend.nextSibling);
      }
    }
  }

  function actualizarCatalogo() {
    let productos = catalogo.productos;
    const termino = searchInput.value.trim();

    if (termino) {
      const productoEncontrado = catalogo.buscarProducto(termino);
      productos = productoEncontrado ? [productoEncontrado] : [];
    }

    for (const campo of camposDeFiltro) {
      const valoresSeleccionados = [
        ...filtersForm.querySelectorAll(
          `input[name="${campo}"]:checked`
        ),
      ].map((input) => input.value);

      if (valoresSeleccionados.length === 0) {
        continue;
      }

      const coincidenciasDelCampo = new Set();
      for (const valor of valoresSeleccionados) {
        for (const producto of catalogo.filtrarProductos(campo, valor)) {
          coincidenciasDelCampo.add(producto);
        }
      }
      productos = productos.filter((producto) =>
        coincidenciasDelCampo.has(producto)
      );
    }

    renderizarCatalogo(productos);
    if (productos.length === 0) {
      mostrarMensaje(
        catalogFeedback,
        termino
          ? `No se encontró un producto llamado "${termino}".`
          : "No hay productos que coincidan con los filtros.",
        "error"
      );
      return;
    }

    mostrarMensaje(
      catalogFeedback,
      `${productos.length} producto${productos.length === 1 ? "" : "s"} disponible${productos.length === 1 ? "" : "s"}.`,
      "success"
    );
  }

  function renderizarCatalogo(productos) {
    productGrid.replaceChildren();

    for (const producto of productos) {
      const imagen = imagesByProduct.get(producto.nombre);
      if (!imagen) {
        throw new Error(`No hay una imagen configurada para ${producto.nombre}.`);
      }

      const article = document.createElement("article");
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      const title = document.createElement("h3");
      const category = document.createElement("p");
      const price = document.createElement("p");
      const sizes = document.createElement("p");
      const detailsButton = document.createElement("button");

      article.className = "col-12 col-md-6 col-xl-4";
      article.id = imagen.id;
      title.id = `${article.id}-titulo`;
      article.setAttribute("aria-labelledby", title.id);
      image.src = imagen.src;
      image.alt = imagen.alt;
      image.width = 300;
      image.height = 300;
      title.textContent = producto.nombre;
      category.append(
        document.createTextNode("Categoría: "),
        crearElementoConTexto("span", producto.categoria)
      );
      price.append(
        document.createTextNode("Precio: "),
        crearElementoConTexto("strong", formatoMoneda.format(producto.precio))
      );
      sizes.textContent = `Talles disponibles: ${producto.talles.join(" / ")}`;
      detailsButton.type = "button";
      detailsButton.className = "btn btn-outline-dark btn-sm";
      detailsButton.dataset.producto = producto.nombre;
      detailsButton.dataset.bsToggle = "modal";
      detailsButton.dataset.bsTarget = "#modalProducto";
      detailsButton.textContent = "Ver detalle";

      figure.append(image);
      article.append(figure, title, category, price, sizes, detailsButton);
      productGrid.append(article);
    }
  }

  function prepararModal(evento) {
    const boton = evento.relatedTarget;
    const nombre = boton?.dataset.producto;
    const producto = nombre ? catalogo.buscarProducto(nombre) : null;

    if (!producto) {
      evento.preventDefault();
      mostrarMensaje(
        catalogFeedback,
        "No se pudo encontrar el producto seleccionado.",
        "error"
      );
      return;
    }

    state.productoModal = producto;
    state.botonOrigenModal = boton;
    const imagen = imagesByProduct.get(producto.nombre);

    modal.querySelector("#modalProductoTitulo").textContent = producto.nombre;
    modal.querySelector("#modalProductoImg").src = imagen.src;
    modal.querySelector("#modalProductoImg").alt = imagen.alt;
    modal.querySelector("#modalProductoCategoria").textContent =
      producto.categoria;
    modal.querySelector("#modalProductoTipo").textContent = producto.tipo;
    modal.querySelector("#modalProductoEstilo").textContent = producto.estilo;
    modal.querySelector("#modalProductoPrecio").textContent =
      formatoMoneda.format(producto.precio);
    modal.querySelector("#modalProductoTalles").textContent =
      `Talles disponibles: ${producto.talles.join(" / ")}`;

    modalSize.replaceChildren(
      crearElementoConTexto("option", "Seleccioná un talle")
    );
    modalSize.options[0].value = "";
    for (const talle of catalogo.obtenerOpcionesFiltro("talle")) {
      const option = crearElementoConTexto("option", talle);
      option.value = talle;
      modalSize.append(option);
    }

    modalForm.reset();
    limpiarValidacion(modalSize);
    limpiarValidacion(modalQuantity);
    mostrarMensaje(
      document.getElementById("modal-talle-feedback"),
      "",
      "neutral"
    );
    mostrarMensaje(
      document.getElementById("modal-producto-feedback"),
      "",
      "neutral"
    );
    modalSubmit.disabled = true;
  }

  function validarFormularioModal(mostrarErrores) {
    const producto = state.productoModal;
    const talle = modalSize.value;
    const talleDisponible =
      Boolean(producto && talle) &&
      producto.verificarTalleDisponible(talle);
    const cantidad = Number(modalQuantity.value);
    const cantidadValida =
      modalQuantity.value.trim() !== "" &&
      Number.isInteger(cantidad) &&
      cantidad > 0;
    const talleFeedback = document.getElementById("modal-talle-feedback");
    const cantidadFeedback = document.getElementById(
      "modal-cantidad-feedback"
    );

    if (talleDisponible) {
      marcarValido(modalSize);
      mostrarMensaje(talleFeedback, `Talle ${talle} disponible.`, "success");
    } else if (mostrarErrores && talle) {
      marcarInvalido(modalSize);
      mostrarMensaje(talleFeedback, `Talle ${talle} no disponible.`, "error");
    } else if (mostrarErrores && !talle) {
      marcarInvalido(modalSize);
      mostrarMensaje(talleFeedback, "Seleccioná un talle.", "error");
    } else {
      limpiarValidacion(modalSize);
      mostrarMensaje(talleFeedback, "", "neutral");
    }

    if (cantidadValida) {
      marcarValido(modalQuantity);
      mostrarMensaje(cantidadFeedback, "", "neutral");
    } else if (mostrarErrores) {
      marcarInvalido(modalQuantity);
      mostrarMensaje(
        cantidadFeedback,
        "Ingresá una cantidad entera mayor que cero.",
        "error"
      );
    } else {
      limpiarValidacion(modalQuantity);
      mostrarMensaje(cantidadFeedback, "", "neutral");
    }

    modalSubmit.disabled = !(talleDisponible && cantidadValida);
    return talleDisponible && cantidadValida;
  }

  function agregarProductoAlCarrito(evento) {
    evento.preventDefault();
    if (!validarFormularioModal(true)) {
      return;
    }

    try {
      carrito.agregarProducto(
        state.productoModal,
        modalSize.value,
        Number(modalQuantity.value)
      );
      StorageUtil.guardarInstancia(
  StorageUtil.CLAVES.CARRITO_ITEMS,
  carrito
);
      renderizarCarrito();
      mostrarMensaje(
        document.getElementById("modal-producto-feedback"),
        `${state.productoModal.nombre} se agregó al carrito.`,
        "success"
      );
      mostrarMensaje(
        cartFeedback,
        "El carrito se actualizó correctamente.",
        "success"
      );
    } catch (error) {
      mostrarMensaje(
        document.getElementById("modal-producto-feedback"),
        obtenerMensajeError(error),
        "error"
      );
    }
  }

  function renderizarCarrito() {
    const items = carrito.items;
    const resumen = carrito.generarResumenCompra();

    cartItems.replaceChildren();
    summaryItems.replaceChildren();
    cartEmpty.hidden = items.length > 0;
    summaryEmpty.hidden = resumen.productos.length > 0;
    cartTotal.textContent = formatoMoneda.format(carrito.calcularTotal());
    summaryTotal.textContent = formatoMoneda.format(resumen.total);

    items.forEach((item, index) => {
      const producto = item.producto.nombre;
      const subtotal = resumen.productos[index].subtotal;
      const listItem = document.createElement("li");
      const header = document.createElement("div");
      const details = document.createElement("div");
      const itemName = crearElementoConTexto("strong", producto);
      const size = crearElementoConTexto("span", `Talle ${item.talle}`);
      const price = crearElementoConTexto(
        "span",
        formatoMoneda.format(subtotal)
      );
      const form = document.createElement("form");
      const quantityLabel = document.createElement("label");
      const quantity = document.createElement("input");
      const feedback = document.createElement("div");
      const updateButton = document.createElement("button");
      const removeButton = document.createElement("button");

      listItem.className = "list-group-item";
      listItem.dataset.producto = producto;
      listItem.dataset.talle = item.talle;
      header.className = "d-flex flex-wrap justify-content-between gap-2";
      details.className = "d-flex flex-wrap gap-3";
      form.className = "d-flex flex-wrap align-items-end gap-2 mt-2";
      form.dataset.cartForm = "";
      quantityLabel.className = "visually-hidden";
      quantityLabel.textContent = `Cantidad de ${producto}, talle ${item.talle}`;
      quantity.id = `cantidad-carrito-${index}`;
      quantityLabel.htmlFor = quantity.id;
      quantity.className = "form-control form-control-sm";
      quantity.type = "number";
      quantity.name = "cantidad";
      quantity.min = "1";
      quantity.step = "1";
      quantity.required = true;
      quantity.value = String(item.cantidad);
      quantity.dataset.cartQuantity = "";
      quantity.style.maxWidth = "6rem";
      feedback.className = "invalid-feedback";
      feedback.textContent = "Ingresá una cantidad entera mayor que cero.";
      updateButton.className = "btn btn-outline-dark btn-sm";
      updateButton.type = "submit";
      updateButton.textContent = "Actualizar cantidad";
      removeButton.className = "btn btn-outline-danger btn-sm";
      removeButton.type = "button";
      removeButton.dataset.cartAction = "remove";
      removeButton.textContent = "Eliminar";

      header.append(itemName, price);
      details.append(size, crearElementoConTexto("span", `Cantidad: ${item.cantidad}`));
      form.append(quantityLabel, quantity, feedback, updateButton, removeButton);
      listItem.append(header, details, form);
      cartItems.append(listItem);

      const summaryItem = document.createElement("li");
      summaryItem.className = "list-group-item";
      summaryItem.textContent =
        `${producto} (talle ${item.talle}) × ${item.cantidad}: ${formatoMoneda.format(subtotal)}`;
      summaryItems.append(summaryItem);
    });
  }

  function validarCantidadEnCarrito(evento) {
    const quantity = evento.target.closest("[data-cart-quantity]");
    if (!quantity) {
      return;
    }

    const form = quantity.closest("[data-cart-form]");
    const cantidadValida =
      quantity.value.trim() !== "" &&
      Number.isInteger(Number(quantity.value)) &&
      Number(quantity.value) > 0;
    const updateButton = form.querySelector('[type="submit"]');

    if (cantidadValida) {
      marcarValido(quantity);
    } else {
      marcarInvalido(quantity);
    }
    updateButton.disabled = !cantidadValida;
  }

  function modificarCantidadEnCarrito(evento) {
    const form = evento.target.closest("[data-cart-form]");
    if (!form) {
      return;
    }

    evento.preventDefault();
    const quantity = form.querySelector("[data-cart-quantity]");
    const cantidad = Number(quantity.value);
    if (
      quantity.value.trim() === "" ||
      !Number.isInteger(cantidad) ||
      cantidad <= 0
    ) {
      marcarInvalido(quantity);
      return;
    }

    const item = form.closest("li");
    try {
      carrito.modificarCantidad(item.dataset.producto, item.dataset.talle, cantidad);
      StorageUtil.guardarInstancia(
  StorageUtil.CLAVES.CARRITO_ITEMS,
  carrito
);
      renderizarCarrito();
      mostrarMensaje(cartFeedback, "La cantidad se actualizó correctamente.", "success");
    } catch (error) {
      mostrarMensaje(cartFeedback, obtenerMensajeError(error), "error");
    }
  }

  function eliminarProductoDelCarrito(evento) {
    const button = evento.target.closest('[data-cart-action="remove"]');
    if (!button) {
      return;
    }

    const item = button.closest("li");
    try {
      carrito.eliminarProducto(item.dataset.producto, item.dataset.talle);
      StorageUtil.guardarInstancia(
  StorageUtil.CLAVES.CARRITO_ITEMS,
  carrito
);
      renderizarCarrito();
      mostrarMensaje(cartFeedback, "El producto se eliminó del carrito.", "success");
    } catch (error) {
      mostrarMensaje(cartFeedback, obtenerMensajeError(error), "error");
    }
  }

  function mantenerFocoEnModal(evento) {
    if (evento.key !== "Tab") {
      return;
    }

    const elementosEnfocables = [
      ...modal.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ),
    ];
    const primero = elementosEnfocables[0];
    const ultimo = elementosEnfocables[elementosEnfocables.length - 1];

    if (evento.shiftKey && document.activeElement === primero) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && document.activeElement === ultimo) {
      evento.preventDefault();
      primero.focus();
    }
  }
}

function crearElementoConTexto(etiqueta, texto) {
  const elemento = document.createElement(etiqueta);
  elemento.textContent = texto;
  return elemento;
}

function mostrarMensaje(elemento, mensaje, tipo) {
  elemento.textContent = mensaje;
  elemento.classList.remove("text-success", "text-danger");

  if (tipo === "success") {
    elemento.classList.add("text-success");
  } else if (tipo === "error") {
    elemento.classList.add("text-danger");
  }
}

function marcarValido(control) {
  control.classList.remove("is-invalid");
  control.classList.add("is-valid");
  control.setAttribute("aria-invalid", "false");
}

function marcarInvalido(control) {
  control.classList.remove("is-valid");
  control.classList.add("is-invalid");
  control.setAttribute("aria-invalid", "true");
}

function limpiarValidacion(control) {
  control.classList.remove("is-valid", "is-invalid");
  control.removeAttribute("aria-invalid");
}

function obtenerMensajeError(error) {
  if (!(error instanceof Error)) {
    throw error;
  }
  return error.message;
}
