import ItemCarrito from "./ItemCarrito.js";
import Producto from "./Producto.js";

/**
 * Normaliza el nombre de un producto para comparaciones.
 * @param {string} texto
 * @returns {string}
 */
function normalizarNombre(texto) {
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Administra las líneas de una compra.
 */
export default class Carrito {
  #items;

  /**
   * Crea un carrito a partir de líneas existentes o datos serializados.
   * @param {(ItemCarrito|Object)[]} [items=[]]
   */
  constructor(items = []) {
    if (!Array.isArray(items)) {
      throw new Error("Los artículos del carrito deben ser un array.");
    }

    this.#items = items.map((item) =>
      item instanceof ItemCarrito ? item : ItemCarrito.fromJSON(item)
    );
  }

  /** @returns {ItemCarrito[]} Copia de las líneas del carrito. */
  get items() {
    return [...this.#items];
  }

  /**
   * Busca una línea por nombre de producto y talle.
   * @param {Producto|string} producto
   * @param {string} talle
   * @returns {ItemCarrito|null}
   */
  buscarEnCarrito(producto, talle) {
    const nombre = this.#obtenerNombreProducto(producto);
    if (typeof talle !== "string" || talle.trim() === "") {
      throw new Error("El talle debe ser una cadena no vacía.");
    }

    const nombreNormalizado = normalizarNombre(nombre);
    const talleNormalizado = talle.trim().toUpperCase();
    return (
      this.#items.find(
        (item) =>
          normalizarNombre(item.producto.nombre) === nombreNormalizado &&
          item.talle === talleNormalizado
      ) || null
    );
  }

  /**
   * Agrega una línea o suma unidades a la línea existente.
   * @param {Producto|Object} producto
   * @param {string} talle
   * @param {number} cantidad
   * @returns {ItemCarrito} Línea agregada o actualizada.
   */
  agregarProducto(producto, talle, cantidad) {
    const productoValidado =
      producto instanceof Producto ? producto : Producto.fromJSON(producto);
    const itemNuevo = new ItemCarrito(productoValidado, talle, cantidad);
    const existente = this.buscarEnCarrito(productoValidado, talle);

    if (existente) {
      const itemActualizado = new ItemCarrito(
        existente.producto,
        existente.talle,
        existente.cantidad + cantidad,
        existente.precio
      );
      this.#items = this.#items.map((item) =>
        item === existente ? itemActualizado : item
      );
      return itemActualizado;
    }

    this.#items = [...this.#items, itemNuevo];
    return itemNuevo;
  }

  /**
   * Reemplaza la cantidad de una línea existente.
   * @param {Producto|string} producto
   * @param {string} talle
   * @param {number} cantidad
   * @returns {ItemCarrito} Línea actualizada.
   * @throws {Error} Si no existe la línea o la cantidad no es válida.
   */
  modificarCantidad(producto, talle, cantidad) {
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      throw new Error("La cantidad debe ser un entero positivo.");
    }
    const existente = this.buscarEnCarrito(producto, talle);
    if (!existente) {
      throw new Error("El producto y talle no se encuentran en el carrito.");
    }

    const itemActualizado = new ItemCarrito(
      existente.producto,
      existente.talle,
      cantidad,
      existente.precio
    );
    this.#items = this.#items.map((item) =>
      item === existente ? itemActualizado : item
    );
    return itemActualizado;
  }

  /**
   * Elimina una línea del carrito.
   * @param {Producto|string} producto
   * @param {string} talle
   * @returns {ItemCarrito} Línea eliminada.
   * @throws {Error} Si la línea no existe.
   */
  eliminarProducto(producto, talle) {
    const existente = this.buscarEnCarrito(producto, talle);
    if (!existente) {
      throw new Error("El producto y talle no se encuentran en el carrito.");
    }

    this.#items = this.#items.filter((item) => item !== existente);
    return existente;
  }

  /**
   * Calcula el total de todas las líneas.
   * @returns {number}
   */
  calcularTotal() {
    return this.#items.reduce(
      (total, item) => total + item.calcularSubtotal(),
      0
    );
  }

  /**
   * Genera un resumen con el formato usado por la lógica de negocio original.
   * @returns {{productos: {producto: string, talle: string, cantidad: number, subtotal: number}[], total: number}}
   */
  generarResumenCompra() {
    const productos = this.#items.map((item) => ({
      producto: item.producto.nombre,
      talle: item.talle,
      cantidad: item.cantidad,
      subtotal: item.calcularSubtotal(),
    }));

    return {
      productos,
      total: productos.reduce((total, item) => total + item.subtotal, 0),
    };
  }

  /**
   * Devuelve una estructura serializable con las líneas.
   * @returns {{items: Object[]}}
   */
  toJSON() {
    return { items: this.#items.map((item) => item.toJSON()) };
  }

  /**
   * Reconstruye un carrito desde una lista o desde el resultado de toJSON().
   * @param {Object|Array} datos
   * @returns {Carrito}
   */
  static fromJSON(datos) {
    const items = Array.isArray(datos) ? datos : datos?.items;
    if (!Array.isArray(items)) {
      throw new Error("Los datos del carrito deben contener un array de artículos.");
    }

    return new Carrito(items);
  }

  #obtenerNombreProducto(producto) {
    const nombre = producto instanceof Producto ? producto.nombre : producto;
    if (typeof nombre !== "string" || normalizarNombre(nombre) === "") {
      throw new Error("El nombre del producto no puede estar vacío.");
    }
    return nombre;
  }
}

export { Carrito };
