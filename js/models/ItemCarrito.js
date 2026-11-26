import Producto from "./Producto.js";

/**
 * Representa una línea de producto y talle dentro de un carrito.
 */
export default class ItemCarrito {
  #producto;
  #talle;
  #cantidad;
  #precio;

  /**
   * Determina si una cantidad es un número entero positivo.
   * @param {number} cantidad
   * @returns {boolean}
   */
  static esCantidadValida(cantidad) {
    return Number.isInteger(cantidad) && cantidad > 0;
  }


  /**
   * Crea una línea validando producto, talle, cantidad y precio.
   * @param {Producto|Object} producto
   * @param {string} talle
   * @param {number} cantidad
   * @param {number} [precio=producto.precio]
   */
  constructor(producto, talle, cantidad, precio = producto?.precio) {
    this.#producto =
      producto instanceof Producto ? producto : Producto.fromJSON(producto);

    if (typeof talle !== "string" || talle.trim() === "") {
      throw new Error("El talle debe ser una cadena no vacía.");
    }
    const talleNormalizado = talle.trim().toUpperCase();
    if (!this.#producto.verificarTalleDisponible(talleNormalizado)) {
      throw new Error("El talle no está disponible para el producto.");
    }
    this.#talle = talleNormalizado;

    if (!ItemCarrito.esCantidadValida(cantidad)) {
      throw new Error("La cantidad debe ser un entero positivo.");
    }
    this.#cantidad = cantidad;

    if (
      typeof precio !== "number" ||
      !Number.isFinite(precio) ||
      precio < 0
    ) {
      throw new Error("El precio debe ser un número válido mayor o igual a cero.");
    }
    this.#precio = precio;
  }

  /** @returns {Producto} Producto asociado a esta línea. */
  get producto() {
    return this.#producto;
  }

  /** @returns {string} Talle seleccionado. */
  get talle() {
    return this.#talle;
  }

  /** @returns {number} Cantidad de unidades. */
  get cantidad() {
    return this.#cantidad;
  }

  /** @returns {number} Precio unitario registrado. */
  get precio() {
    return this.#precio;
  }

  /**
   * Calcula el subtotal de la línea.
   * @returns {number}
   */
  calcularSubtotal() {
    return this.#precio * this.#cantidad;
  }

  /**
   * Devuelve los datos serializables de la línea.
   * @returns {{producto: Object, talle: string, cantidad: number, precio: number}}
   */
  toJSON() {
    return {
      producto: this.#producto.toJSON(),
      talle: this.#talle,
      cantidad: this.#cantidad,
      precio: this.#precio,
    };
  }

  /**
   * Reconstruye una línea desde un objeto serializado.
   * @param {Object} datos
   * @returns {ItemCarrito}
   */
  static fromJSON(datos) {
    if (!datos || typeof datos !== "object" || Array.isArray(datos)) {
      throw new Error("Los datos del artículo deben ser un objeto válido.");
    }

    return new ItemCarrito(
      datos.producto,
      datos.talle,
      datos.cantidad,
      datos.precio
    );
  }
}

export { ItemCarrito };
