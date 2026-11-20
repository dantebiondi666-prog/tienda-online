import Producto from "./Producto.js";

const CAMPOS_FILTRO_VALIDOS = ["categoria", "tipo", "talle", "estilo"];

/**
 * Normaliza texto para búsquedas y filtros sin distinguir mayúsculas ni tildes.
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
 * Administra una colección de productos.
 */
export default class Catalogo {
  #productos;

  /**
   * Crea un catálogo validando y normalizando sus productos.
   * @param {(Producto|Object)[]} [productos=[]]
   */
  constructor(productos = []) {
    if (!Array.isArray(productos)) {
      throw new Error("El catálogo debe ser un array.");
    }

    this.#productos = productos.map((producto) => {
      if (producto instanceof Producto) {
        return producto;
      }
      return Producto.fromJSON(producto);
    });
  }

  /** @returns {Producto[]} Copia de los productos del catálogo. */
  get productos() {
    return [...this.#productos];
  }

  /**
   * Busca un producto por nombre, sin distinguir mayúsculas ni tildes.
   * @param {string} nombre
   * @returns {Producto|null}
   * @throws {Error} Si el nombre está vacío o no es una cadena.
   */
  buscarProducto(nombre) {
    if (typeof nombre !== "string" || normalizarTexto(nombre) === "") {
      throw new Error("El nombre del producto no puede estar vacío.");
    }

    const nombreNormalizado = normalizarTexto(nombre);
    return (
      this.#productos.find(
        (producto) => normalizarTexto(producto.nombre) === nombreNormalizado
      ) || null
    );
  }

  /**
   * Filtra productos por categoría, tipo, talle o estilo.
   * @param {string} campo
   * @param {string} valor
   * @returns {Producto[]}
   * @throws {Error} Si el campo o el valor no son válidos.
   */
  filtrarProductos(campo, valor) {
    if (typeof campo !== "string") {
      throw new Error("El campo de filtro no es válido.");
    }
    const campoNormalizado = normalizarTexto(campo);
    if (!CAMPOS_FILTRO_VALIDOS.includes(campoNormalizado)) {
      throw new Error("El campo de filtro no es válido.");
    }
    if (typeof valor !== "string" || normalizarTexto(valor) === "") {
      throw new Error("El valor de filtro no puede estar vacío.");
    }

    const valorNormalizado = normalizarTexto(valor);
    return this.#productos.filter((producto) => {
      const valores =
        campoNormalizado === "talle"
          ? producto.talles
          : [producto[campoNormalizado]];
      return valores.some(
        (opcion) => normalizarTexto(opcion) === valorNormalizado
      );
    });
  }

  /**
   * Obtiene los valores únicos de un campo de filtro en orden de catálogo.
   * @param {string} campo
   * @returns {string[]}
   * @throws {Error} Si el campo no es válido.
   */
  obtenerOpcionesFiltro(campo) {
    if (
      typeof campo !== "string" ||
      !CAMPOS_FILTRO_VALIDOS.includes(normalizarTexto(campo))
    ) {
      throw new Error("El campo de filtro no es válido.");
    }

    const campoNormalizado = normalizarTexto(campo);
    const opciones = [];
    for (const producto of this.#productos) {
      const valores =
        campoNormalizado === "talle"
          ? producto.talles
          : [producto[campoNormalizado]];
      for (const valor of valores) {
        if (!opciones.includes(valor)) {
          opciones.push(valor);
        }
      }

    }
    return opciones;
  }

  /**
   * Devuelve una estructura serializable con los productos.
   * @returns {{productos: Object[]}}
   */
  toJSON() {
    return { productos: this.#productos.map((producto) => producto.toJSON()) };
  }

  /**
   * Reconstruye un catálogo desde una lista o desde el resultado de toJSON().
   * @param {Object|Array} datos
   * @returns {Catalogo}
   */
  static fromJSON(datos) {
    const productos = Array.isArray(datos) ? datos : datos?.productos;
    if (!Array.isArray(productos)) {
      throw new Error("Los datos del catálogo deben contener un array de productos.");
    }

    return new Catalogo(productos);
  }
}

export { Catalogo };
