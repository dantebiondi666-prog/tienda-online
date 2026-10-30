const catalogo = [
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

let carrito = [];

const camposFiltroValidos = ["categoria", "tipo", "talle", "estilo"];

function normalizarTexto(texto) {
  if (typeof texto !== "string") {
    throw new Error("El texto debe ser una cadena.");
  }

  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function esCampoFiltroValido(campo) {
  if (typeof campo !== "string") {
    return false;
  }

  return camposFiltroValidos.includes(normalizarTexto(campo));
}

function filtrarProductos(productos, campo, valor) {
  if (!Array.isArray(productos)) {
    throw new Error("El catálogo debe ser un array.");
  }
  if (!esCampoFiltroValido(campo)) {
    throw new Error("El campo de filtro no es válido.");
  }
  if (typeof valor !== "string" || normalizarTexto(valor) === "") {
    throw new Error("El valor de filtro no puede estar vacío.");
  }

  const campoNormalizado = normalizarTexto(campo);
  const valorNormalizado = normalizarTexto(valor);

  return productos.filter((producto) => {
    if (!producto || typeof producto !== "object") {
      throw new Error("Cada producto del catálogo debe ser un objeto válido.");
    }

    if (campoNormalizado === "talle") {
      if (!Array.isArray(producto.talles)) {
        throw new Error("Los talles del producto deben estar definidos en un array.");
      }

      return producto.talles.some(
        (talle) => normalizarTexto(talle) === valorNormalizado
      );
    }

    if (typeof producto[campoNormalizado] !== "string") {
      throw new Error(`El producto no tiene un valor válido para ${campoNormalizado}.`);
    }

    return normalizarTexto(producto[campoNormalizado]) === valorNormalizado;
  });
}

/**
 * Devuelve los valores distintos que tiene el catálogo para un campo de filtro.
 * @param {Array} catalogo - Productos del catálogo.
 * @param {string} campo - "categoria", "tipo", "talle" o "estilo".
 * @returns {Array} Opciones disponibles sin repetir.
 */

function obtenerOpcionesFiltro(catalogo, campo) {
  const opciones = [];

  for (const producto of catalogo) {
    const valores = campo === "talle" ? producto.talles : [producto[campo]];

    for (const valor of valores) {
      if (!opciones.includes(valor)) {
        opciones.push(valor);
      }
    }
  }

  return opciones;
}

function buscarProducto(productos, nombre) {
  if (!Array.isArray(productos)) {
    throw new Error("El catálogo debe ser un array.");
  }
  if (typeof nombre !== "string" || normalizarTexto(nombre) === "") {
    throw new Error("El nombre del producto no puede estar vacío.");
  }

  const nombreNormalizado = normalizarTexto(nombre);
  return (
    productos.find(
      (producto) =>
        producto &&
        typeof producto.nombre === "string" &&
        normalizarTexto(producto.nombre) === nombreNormalizado
    ) || null
  );
}

function esTalleValido(talle) {
  return typeof talle === "string" && talle.trim() !== "";
}

function verificarTalleDisponible(producto, talle) {
  if (!producto || typeof producto !== "object" || !Array.isArray(producto.talles)) {
    throw new Error("El producto debe tener un array de talles disponibles.");
  }
  if (!esTalleValido(talle)) {
    throw new Error("El talle debe ser una cadena no vacía.");
  }

  const talleNormalizado = talle.trim().toUpperCase();
  return producto.talles.some(
    (talleDisponible) =>
      typeof talleDisponible === "string" &&
      talleDisponible.trim().toUpperCase() === talleNormalizado
  );
}

function esCantidadValida(cantidad) {
  return Number.isInteger(cantidad) && cantidad > 0;
}

function buscarEnCarrito(elementosCarrito, producto, talle) {
  if (!Array.isArray(elementosCarrito)) {
    throw new Error("El carrito debe ser un array.");
  }
  if (typeof producto !== "string" || normalizarTexto(producto) === "") {
    throw new Error("El nombre del producto no puede estar vacío.");
  }
  if (!esTalleValido(talle)) {
    throw new Error("El talle debe ser una cadena no vacía.");
  }

  const productoNormalizado = normalizarTexto(producto);
  const talleNormalizado = talle.trim().toUpperCase();
  return (
    elementosCarrito.find(
      (elemento) =>
        elemento &&
        typeof elemento.producto === "string" &&
        typeof elemento.talle === "string" &&
        normalizarTexto(elemento.producto) === productoNormalizado &&
        elemento.talle.trim().toUpperCase() === talleNormalizado
    ) || null
  );
}

function agregarAlCarrito(elementosCarrito, producto, talle, cantidad, precio) {
  if (!Array.isArray(elementosCarrito)) {
    throw new Error("El carrito debe ser un array.");
  }
  if (typeof producto !== "string" || normalizarTexto(producto) === "") {
    throw new Error("El nombre del producto no puede estar vacío.");
  }
  if (!esTalleValido(talle)) {
    throw new Error("El talle debe ser una cadena no vacía.");
  }
  if (!esCantidadValida(cantidad)) {
    throw new Error("La cantidad debe ser un entero positivo.");
  }
  if (typeof precio !== "number" || !Number.isFinite(precio) || precio < 0) {
    throw new Error("El precio debe ser un número válido mayor o igual a cero.");
  }

  const elementoExistente = buscarEnCarrito(elementosCarrito, producto, talle);
  if (elementoExistente) {
    return elementosCarrito.map((elemento) =>
      elemento === elementoExistente
        ? { ...elemento, cantidad: elemento.cantidad + cantidad }
        : { ...elemento }
    );
  }

  return [
    ...elementosCarrito.map((elemento) => ({ ...elemento })),
    { producto, talle: talle.trim().toUpperCase(), cantidad, precio },
  ];
}

function modificarCantidad(elementosCarrito, producto, talle, cantidad) {
  if (!Array.isArray(elementosCarrito)) {
    throw new Error("El carrito debe ser un array.");
  }
  if (!esCantidadValida(cantidad)) {
    throw new Error("La cantidad debe ser un entero positivo.");
  }

  const elementoExistente = buscarEnCarrito(elementosCarrito, producto, talle);
  if (!elementoExistente) {
    throw new Error("El producto y talle no se encuentran en el carrito.");
  }

  return elementosCarrito.map((elemento) =>
    elemento === elementoExistente
      ? { ...elemento, cantidad }
      : { ...elemento }
  );
}

function eliminarDelCarrito(elementosCarrito, producto, talle) {
  if (!Array.isArray(elementosCarrito)) {
    throw new Error("El carrito debe ser un array.");
  }

  const elementoExistente = buscarEnCarrito(elementosCarrito, producto, talle);
  if (!elementoExistente) {
    throw new Error("El producto y talle no se encuentran en el carrito.");
  }

  return elementosCarrito
    .filter((elemento) => elemento !== elementoExistente)
    .map((elemento) => ({ ...elemento }));
}

function calcularSubtotal(precio, cantidad) {
  if (typeof precio !== "number" || !Number.isFinite(precio) || precio < 0) {
    throw new Error("El precio debe ser un número válido mayor o igual a cero.");
  }
  if (!esCantidadValida(cantidad)) {
    throw new Error("La cantidad debe ser un entero positivo.");
  }

  return precio * cantidad;
}

function calcularTotal(elementosCarrito) {
  if (!Array.isArray(elementosCarrito)) {
    throw new Error("El carrito debe ser un array.");
  }

  return elementosCarrito.reduce((total, elemento) => {
    if (!elemento || typeof elemento !== "object") {
      throw new Error("Cada elemento del carrito debe ser un objeto válido.");
    }

    return total + calcularSubtotal(elemento.precio, elemento.cantidad);
  }, 0);
}

/**
 * Construye un resumen independiente del carrito con el subtotal de cada
 * producto-talle y el total de la compra.
 */
function generarResumenCompra(elementosCarrito) {
  if (!Array.isArray(elementosCarrito)) {
    throw new Error("El carrito debe ser un array.");
  }

  const productos = elementosCarrito.map((elemento) => {
    if (
      !elemento ||
      typeof elemento !== "object" ||
      typeof elemento.producto !== "string" ||
      elemento.producto.trim() === "" ||
      !esTalleValido(elemento.talle)
    ) {
      throw new Error("Cada elemento del carrito debe incluir producto y talle válidos.");
    }

    return {
      producto: elemento.producto,
      talle: elemento.talle,
      cantidad: elemento.cantidad,
      subtotal: calcularSubtotal(elemento.precio, elemento.cantidad),
    };
  });

  return {
    productos,
    total: productos.reduce((total, elemento) => total + elemento.subtotal, 0),
  };
}

/**
 * Arma el texto del carrito para mostrarlo al usuario.
 * @param {Array} elementosCarrito - Elementos { producto, talle, cantidad, precio }.
 * @returns {string} Una línea por elemento, o un aviso si el carrito está vacío.
 */

function formatearCarrito(elementosCarrito) {
  if (!Array.isArray(elementosCarrito)) {
    throw new Error("El carrito debe ser un array.");
  }

  if (elementosCarrito.length === 0) {
    return "El carrito está vacío.";
  }

  return elementosCarrito
    .map(
      (elemento) =>
        `- ${elemento.producto} (talle ${elemento.talle}) x${elemento.cantidad}: $${elemento.precio} c/u`
    )
    .join("\n");
}

function mostrarMenuPrincipal() {
  return prompt(
    "=== Remer Us - Simulador ===\n" +
      "1. Consultar y filtrar el catálogo\n" +
      "2. Consultar producto y disponibilidad de talle\n" +
      "3. Gestionar carrito\n" +
      "4. Resumen de compra\n" +
      "0. Salir"
  );
}

function ejecutarFlujoFiltrarCatalogo() {
  let campo;
  let valor;

  while (true) {
    campo = prompt("Ingrese el campo (categoria, tipo, talle o estilo):");
    if (campo === null) {
      return;
    }

    const campoNormalizado = normalizarTexto(campo);
    const opciones = esCampoFiltroValido(campoNormalizado)
      ? obtenerOpcionesFiltro(catalogo, campoNormalizado)
      : [];
    const detalle = opciones.length > 0 ? ` (${opciones.join(", ")})` : "";

    valor = prompt(`Ingrese el valor para filtrar${detalle}:`);
    if (valor === null) {
      return;
    }

    campo = campoNormalizado;
    valor = normalizarTexto(valor);
    if (esCampoFiltroValido(campo) && valor !== "") {
      break;
    }

    alert("El criterio no es válido. Ingrese un campo y un valor válidos.");
  }

  const resultados = filtrarProductos(catalogo, campo, valor);
  if (resultados.length > 0) {
    const lista = resultados
      .map((producto) => `- ${producto.nombre} ($${producto.precio})`)
      .join("\n");
    alert(`Productos encontrados:\n${lista}`);
    console.log("Productos encontrados:", resultados);
  } else {
    alert("No hay productos coincidentes.");
    console.log("No hay productos coincidentes.");
  }
}

function ejecutarFlujoConsultarProducto() {
  let producto;
  let nombre;

  while (!producto) {
    nombre = prompt("Ingrese el nombre del producto:");
    if (nombre === null) {
      return;
    }

    producto = buscarProducto(catalogo, nombre);
    if (!producto) {
      alert("El producto no fue encontrado. Intente nuevamente.");
    }
  }

  let talle;
  while (true) {
    talle = prompt(`Ingrese el talle para ${producto.nombre}:`);
    if (talle === null) {
      return;
    }

    if (esTalleValido(talle)) {
      talle = talle.trim().toUpperCase();
      break;
    }
    alert("Debe ingresar un talle válido.");
  }

  const disponible = verificarTalleDisponible(producto, talle);
  const mensaje =
    `Producto: ${producto.nombre}\n` +
    `Categoría: ${producto.categoria}\n` +
    `Tipo: ${producto.tipo}\n` +
    `Estilo: ${producto.estilo}\n` +
    `Precio: $${producto.precio}\n` +
    `Talle ${talle}: ${
      disponible ? "disponible" : "no disponible"
    }`;
  alert(mensaje);
  console.log(mensaje);
}

function ejecutarFlujoGestionarCarrito() {
  let accion;

  while (true) {
    accion = prompt(
      "Gestión del carrito\n" +
        "1. Agregar\n" +
        "2. Modificar\n" +
        "3. Eliminar\n" +
        "4. Salir"
    );
    if (accion === null) {
      return;
    }

    accion = normalizarTexto(accion);
    if (accion === "salir" || accion === "4" || accion === "0") {
      alert(`Estado final del carrito:\n${formatearCarrito(carrito)}`);
      console.log("Estado final del carrito:", carrito);
      return;
    }

    if (accion === "agregar" || accion === "1") {
      let producto;
      let talle;
      let cantidad;
      let productoCatalogo;

      while (true) {
        producto = prompt("Ingrese el producto a agregar:");
        if (producto === null) {
          return;
        }
        talle = prompt("Ingrese el talle:");
        if (talle === null) {
          return;
        }
        const cantidadIngresada = prompt("Ingrese la cantidad:");
        if (cantidadIngresada === null) {
          return;
        }

        productoCatalogo = buscarProducto(catalogo, producto);
        cantidad = Number(cantidadIngresada);
        if (
          productoCatalogo &&
          esTalleValido(talle) &&
          verificarTalleDisponible(productoCatalogo, talle) &&
          esCantidadValida(cantidad)
        ) {
          break;
        }
        alert("Producto, talle o cantidad inválidos. Intente nuevamente.");
      }

      carrito = agregarAlCarrito(
        carrito,
        productoCatalogo.nombre,
        talle,
        cantidad,
        productoCatalogo.precio
      );
      alert(`Carrito actualizado:\n${formatearCarrito(carrito)}`);
      console.log("Estado actualizado del carrito:", carrito);
      continue;
    }

    if (accion === "modificar" || accion === "2") {
      const producto = prompt("Ingrese el producto del elemento a modificar:");
      if (producto === null) {
        return;
      }
      const talle = prompt("Ingrese el talle del elemento a modificar:");
      if (talle === null) {
        return;
      }

      if (!buscarEnCarrito(carrito, producto, talle)) {
        alert("El producto y talle no están en el carrito.");
        continue;
      }

      let cantidad;
      while (true) {
        const cantidadIngresada = prompt("Ingrese la nueva cantidad:");
        if (cantidadIngresada === null) {
          return;
        }
        cantidad = Number(cantidadIngresada);
        if (esCantidadValida(cantidad)) {
          break;
        }
        alert("La cantidad debe ser un entero positivo.");
      }

      carrito = modificarCantidad(carrito, producto, talle, cantidad);
      alert(`Carrito actualizado:\n${formatearCarrito(carrito)}`);
      console.log("Estado actualizado del carrito:", carrito);
      continue;
    }

    if (accion === "eliminar" || accion === "3") {
      const producto = prompt("Ingrese el producto del elemento a eliminar:");
      if (producto === null) {
        return;
      }
      const talle = prompt("Ingrese el talle del elemento a eliminar:");
      if (talle === null) {
        return;
      }

      if (!buscarEnCarrito(carrito, producto, talle)) {
        alert("El producto y talle no están en el carrito.");
        continue;
      }

      carrito = eliminarDelCarrito(carrito, producto, talle);
      alert(`Carrito actualizado:\n${formatearCarrito(carrito)}`);
      console.log("Estado actualizado del carrito:", carrito);
      continue;
    }

    alert("La opción no es válida.");
  }
}

function ejecutarFlujoResumenCompra() {
  if (carrito.length === 0) {
    alert("No hay productos para resumir.");
    console.log("No hay productos para resumir.");
    return;
  }

  const resumen = generarResumenCompra(carrito);
  const lista = resumen.productos
    .map(
      (item) =>
        `- ${item.producto} (talle ${item.talle}) x${item.cantidad}: $${item.subtotal}`
    )
    .join("\n");

  alert(`Resumen de compra:\n${lista}\nTotal: $${resumen.total}`);
  console.log("Resumen de compra:", resumen.productos);
  console.log("Total de compra: $" + resumen.total);
}

function iniciarSimulador() {
  let opcion;

  while (true) {
    opcion = mostrarMenuPrincipal();
    if (opcion === null) {
      return;
    }

    opcion = opcion.trim();
    if (opcion === "0") {
      return;
    } else if (opcion === "1") {
      ejecutarFlujoFiltrarCatalogo();
    } else if (opcion === "2") {
      ejecutarFlujoConsultarProducto();
    } else if (opcion === "3") {
      ejecutarFlujoGestionarCarrito();
    } else if (opcion === "4") {
      ejecutarFlujoResumenCompra();
    } else {
      alert("La opción no es válida.");
    }
  }
}

if (typeof jasmine === "undefined") {
  iniciarSimulador();
}
