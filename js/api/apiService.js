import Producto from "../models/Producto.js";

/**
 * Normaliza los campos de texto de una imagen.
 * @param {unknown} valor
 * @returns {string}
 */
function limpiarTexto(valor) {
  return typeof valor === "string" ? valor.trim() : "";
}

/**
 * Normaliza un nombre para detectar productos duplicados.
 * @param {string} nombre
 * @returns {string}
 */
function normalizarNombre(nombre) {
  return nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Valida los datos del producto y su información de imagen.
 * @param {unknown} datos
 * @returns {Object|null} Producto normalizado o null si es inválido.
 */
function normalizarProducto(datos) {
  try {
    const producto = Producto.fromJSON(datos);
    const imagen = datos.imagen;
    const id = limpiarTexto(imagen?.id);
    const src = limpiarTexto(imagen?.src);
    const alt = limpiarTexto(imagen?.alt);

    if (
      !/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(id) ||
      !/^assets\/img\/[a-zA-Z0-9_-]+\.(?:jpe?g|png|webp|gif|avif)$/i.test(src) ||
      !alt
    ) {
      return null;
    }

    return { ...producto.toJSON(), imagen: { id, src, alt } };
  } catch {
    return null;
  }
}

/**
 * Servicio de obtención y procesamiento de los datos del catálogo.
 */
const ApiService = {
  /**
   * Obtiene y convierte a JSON la respuesta de una petición HTTP.
   * @param {string} [endpoint="api/productos.json"]
   * @returns {Promise<unknown>}
   * @throws {Error} Si falla la petición o la respuesta no es JSON válido.
   */
  async fetchData(endpoint = "api/productos.json") {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new Error("La respuesta no contiene un JSON válido.", { cause: error });
    }
  },

  /**
   * Normaliza los productos y descarta registros inválidos o duplicados.
   * @param {unknown} datos
   * @returns {Object[]} Productos válidos.
   * @throws {Error} Si no existe una colección con productos válidos.
   */
  procesarProductos(datos) {
    if (!Array.isArray(datos)) {
      throw new Error("Los datos del catálogo deben ser un array.");
    }

    const nombres = new Set();
    const ids = new Set();

    const productos = datos.map(normalizarProducto).filter((producto) => {
      if (!producto) return false;

      const nombre = normalizarNombre(producto.nombre);
      const id = producto.imagen.id;

      if (nombres.has(nombre) || ids.has(id)) return false;

      nombres.add(nombre);
      ids.add(id);
      return true;
    });

    if (productos.length === 0) {
      throw new Error("No se encontraron productos válidos en el catálogo.");
    }

    return productos;
  },

  /**
   * Construye un mapa de imágenes a partir de productos validados.
   * @param {Object[]} productos
   * @returns {Map<string, Object>}
   */
  crearMapaImagenes(productos) {
    return productos.reduce((imagenes, producto) => {
      imagenes.set(producto.nombre, producto.imagen);
      return imagenes;
    }, new Map());
  },
};

export default ApiService;