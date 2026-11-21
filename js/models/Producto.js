/**
 * Normaliza texto para comparaciones sin distinguir mayúsculas ni tildes.
 * @param {string} texto
 * @returns {string}
 */
function normalizarTexto(texto) {
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Representa un producto disponible en el catálogo.
 */
export default class Producto {
  #nombre;
  #categoria;
  #tipo;
  #estilo;
  #talles;
  #precio;

  /**
   * Crea un producto y valida sus datos.
   * @param {string} nombre
   * @param {string} categoria
   * @param {string} tipo
   * @param {string} estilo
   * @param {string[]} talles
   * @param {number} precio
   */
  constructor(nombre, categoria, tipo, estilo, talles, precio) {
    this.#nombre = Producto.#validarTexto(nombre, "El nombre");
    this.#categoria = Producto.#validarTexto(categoria, "La categoría");
    this.#tipo = Producto.#validarTexto(tipo, "El tipo");
    this.#estilo = Producto.#validarTexto(estilo, "El estilo");

    if (
      !Array.isArray(talles) ||
      talles.length === 0 ||
      talles.some((talle) => typeof talle !== "string" || talle.trim() === "")
    ) {
      throw new Error("Los talles deben ser un array no vacío de cadenas válidas.");
    }

    this.#talles = talles.map((talle) => talle.trim());
    if (
      typeof precio !== "number" ||
      !Number.isFinite(precio) ||
      precio < 0
    ) {
      throw new Error("El precio debe ser un número válido mayor o igual a cero.");
    }
    this.#precio = precio;
  }

  static #validarTexto(valor, etiqueta) {
    if (typeof valor !== "string" || valor.trim() === "") {
      throw new Error(`${etiqueta} debe ser una cadena no vacía.`);
    }

    return valor.trim();
  }

  /** @returns {string} Nombre del producto. */
  get nombre() {
    return this.#nombre;
  }

  /** @returns {string} Categoría del producto. */
  get categoria() {
    return this.#categoria;
  }

  /** @returns {string} Tipo del producto. */
  get tipo() {
    return this.#tipo;
  }

  /** @returns {string} Estilo del producto. */
  get estilo() {
    return this.#estilo;
  }

  /** @returns {string[]} Copia de los talles disponibles. */
  get talles() {
    return [...this.#talles];
  }

  /** @returns {number} Precio unitario. */
  get precio() {
    return this.#precio;
  }

  /**
   * Indica si el talle está disponible, sin distinguir mayúsculas.
   * @param {string} talle
   * @returns {boolean}
   * @throws {Error} Si el talle no es una cadena no vacía.
   */
  verificarTalleDisponible(talle) {
    if (typeof talle !== "string" || talle.trim() === "") {
      throw new Error("El talle debe ser una cadena no vacía.");
    }

    const talleNormalizado = talle.trim().toUpperCase();
    return this.#talles.some(
      (disponible) => disponible.toUpperCase() === talleNormalizado
    );
  }

  /**
   * Devuelve los datos serializables del producto.
   * @returns {{nombre: string, categoria: string, tipo: string, estilo: string, talles: string[], precio: number}}
   */
  toJSON() {
    return {
      nombre: this.#nombre,
      categoria: this.#categoria,
      tipo: this.#tipo,
      estilo: this.#estilo,
      talles: [...this.#talles],
      precio: this.#precio,
    };
  }

  /**
   * Reconstruye un producto desde un objeto serializado.
   * @param {Object} datos
   * @returns {Producto}
   */
  static fromJSON(datos) {
    if (!datos || typeof datos !== "object" || Array.isArray(datos)) {
      throw new Error("Los datos del producto deben ser un objeto válido.");
    }

    return new Producto(
      datos.nombre,
      datos.categoria,
      datos.tipo,
      datos.estilo,
      datos.talles,
      datos.precio
    );
  }
}

export { Producto };
