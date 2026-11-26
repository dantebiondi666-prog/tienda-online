import StorageUtil from "../utils/storage.js";
import Carrito from "../models/Carrito.js";

/**
 * Centraliza la persistencia del carrito y los filtros.
 */
export default class PersistenciaService {
  static cargarCarrito() {
    return StorageUtil.cargarInstancia(
      StorageUtil.CLAVES.CARRITO_ITEMS,
      Carrito
    ) ?? new Carrito();
  }

  static guardarCarrito(carrito) {
    return StorageUtil.guardarInstancia(
      StorageUtil.CLAVES.CARRITO_ITEMS,
      carrito
    );
  }

  static guardarFiltro(filtro) {
    return StorageUtil.guardar(
      StorageUtil.CLAVES.FILTRO_ACTIVO,
      filtro,
      "session"
    );
  }

  static cargarFiltro() {
    return StorageUtil.obtener(
      StorageUtil.CLAVES.FILTRO_ACTIVO,
      "session"
    );
  }

  static eliminarFiltro() {
    return StorageUtil.eliminar(
      StorageUtil.CLAVES.FILTRO_ACTIVO,
      "session"
    );
  }
}