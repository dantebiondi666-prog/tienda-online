/**
 * Módulo de utilidades para Storage (localStorage y sessionStorage).
 * Ejemplo: StorageUtil.guardar(StorageUtil.CLAVES.CARRITO_ITEMS, carrito.toJSON());
 */

const CLAVES = Object.freeze({
  CARRITO_ITEMS: "app:carrito:items",
  COMPRAS_ULTIMO_RESUMEN: "app:compras:ultimo-resumen",
  CATALOGO_PRODUCTOS: "app:catalogo:productos",
  FILTRO_ACTIVO: "app:filtro:activo",
  PRODUCTO_ULTIMO_CONSULTADO: "app:producto:ultimo-consultado",
  CACHE_RESULTADOS: "app:cache:resultados",
});

const PREFIJO_PROYECTO = "app:";

/**
 * Indica si un error corresponde a almacenamiento lleno.
 * @param {Error} error
 * @returns {boolean}
 */
function esErrorDeCuota(error) {
  return (
    error instanceof DOMException &&
    (error.name === "QuotaExceededError" ||
      error.name === "NS_ERROR_DOM_QUOTA_REACHED")
  );
}

/**
 * Registra un error sin permitir que un fallo del mecanismo de logging se propague.
 * @param {string} operacion
 * @param {Error} error
 * @returns {void}
 */
function registrarError(operacion, error) {
  try {
    const detalle = esErrorDeCuota(error)
      ? "Almacenamiento lleno: no hay espacio disponible."
      : error;
    console.error(`StorageUtil.${operacion}:`, detalle);
  } catch {
    // El registro no debe impedir que la operación devuelva su valor de error.
  }
}

/**
 * Obtiene el almacenamiento solicitado.
 * @param {"local"|"session"} tipo
 * @returns {Storage}
 * @throws {Error} Si el tipo es inválido o el storage no está disponible.
 */
function obtenerStorage(tipo) {
  if (tipo !== "local" && tipo !== "session") {
    throw new Error(`Tipo de storage inválido: ${tipo}`);
  }

  const storage =
    tipo === "local" ? globalThis.localStorage : globalThis.sessionStorage;
  if (
    !storage ||
    typeof storage.getItem !== "function" ||
    typeof storage.setItem !== "function" ||
    typeof storage.removeItem !== "function"
  ) {
    throw new Error(`El storage "${tipo}" no está disponible.`);
  }

  return storage;
}

/**
 * Valida que una clave sea una cadena no vacía.
 * @param {string} clave
 * @returns {void}
 * @throws {Error} Si la clave no es válida.
 */
function validarClave(clave) {
  if (typeof clave !== "string" || clave.trim() === "") {
    throw new Error("La clave debe ser una cadena no vacía.");
  }
}

const StorageUtil = {
  CLAVES,

  /**
   * Serializa y guarda un valor en el storage indicado.
   * @param {string} clave Clave donde guardar el valor.
   * @param {*} valor Valor serializable como JSON.
   * @param {"local"|"session"} [tipo="local"] Storage de destino.
   * @returns {boolean} `true` si se guardó; `false` si falló.
   * @example StorageUtil.guardar(StorageUtil.CLAVES.CARRITO_ITEMS, { items: [] });
   */
  guardar(clave, valor, tipo = "local") {
    try {
      validarClave(clave);
      const storage = obtenerStorage(tipo);
      const valorSerializado = JSON.stringify(valor);
      if (valorSerializado === undefined) {
        throw new Error("El valor no se puede serializar como JSON.");
      }

      storage.setItem(clave, valorSerializado);
      return true;
    } catch (error) {
      registrarError("guardar", error);
      return false;
    }
  },

  /**
   * Recupera y deserializa un valor del storage indicado.
   * @param {string} clave Clave a recuperar.
   * @param {"local"|"session"} [tipo="local"] Storage de origen.
   * @returns {*|null} Valor recuperado o `null` si no existe o no es válido.
   * @example const carrito = StorageUtil.obtener(StorageUtil.CLAVES.CARRITO_ITEMS);
   */
  obtener(clave, tipo = "local") {
    try {
      validarClave(clave);
      const valorSerializado = obtenerStorage(tipo).getItem(clave);
      return valorSerializado === null ? null : JSON.parse(valorSerializado);
    } catch (error) {
      registrarError("obtener", error);
      return null;
    }
  },

  /**
   * Reemplaza el valor de una clave existente.
   * @param {string} clave Clave a actualizar.
   * @param {*} valor Nuevo valor serializable como JSON.
   * @param {"local"|"session"} [tipo="local"] Storage de destino.
   * @returns {boolean} `true` si se actualizó; `false` si no existe o falló.
   * @example StorageUtil.actualizar(StorageUtil.CLAVES.FILTRO_ACTIVO, { campo: "tipo", valor: "remera" }, "session");
   */
  actualizar(clave, valor, tipo = "local") {
    try {
      validarClave(clave);
      const storage = obtenerStorage(tipo);
      if (storage.getItem(clave) === null) {
        return false;
      }

      const valorSerializado = JSON.stringify(valor);
      if (valorSerializado === undefined) {
        throw new Error("El valor no se puede serializar como JSON.");
      }

      storage.setItem(clave, valorSerializado);
      return true;
    } catch (error) {
      registrarError("actualizar", error);
      return false;
    }
  },

  /**
   * Elimina una clave del storage indicado.
   * @param {string} clave Clave a eliminar.
   * @param {"local"|"session"} [tipo="local"] Storage de origen.
   * @returns {boolean} `true` si la operación fue correcta; `false` si falló.
   * @example StorageUtil.eliminar(StorageUtil.CLAVES.CARRITO_ITEMS);
   */
  eliminar(clave, tipo = "local") {
    try {
      validarClave(clave);
      obtenerStorage(tipo).removeItem(clave);
      return true;
    } catch (error) {
      registrarError("eliminar", error);
      return false;
    }
  },

  /**
   * Lista las claves que comienzan con el prefijo indicado.
   * @param {string} [prefijo=""] Prefijo de búsqueda; vacío incluye todas las claves.
   * @param {"local"|"session"} [tipo="local"] Storage que se consultará.
   * @returns {string[]} Claves encontradas, o un array vacío si falla.
   * @example const claves = StorageUtil.listar("app:carrito");
   */
  listar(prefijo = "", tipo = "local") {
    try {
      if (typeof prefijo !== "string") {
        throw new Error("El prefijo debe ser una cadena.");
      }

      const storage = obtenerStorage(tipo);
      const claves = [];
      for (let indice = 0; indice < storage.length; indice += 1) {
        const clave = storage.key(indice);
        if (clave !== null && clave.startsWith(prefijo)) {
          claves.push(clave);
        }
      }
      return claves;
    } catch (error) {
      registrarError("listar", error);
      return [];
    }
  },

  /**
   * Elimina únicamente las claves del proyecto que comienzan con `app:`.
   * No borra otras claves que existan en el mismo origen.
   * @param {"local"|"session"} [tipo="local"] Storage que se limpiará.
   * @returns {boolean} `true` si se eliminaron las claves; `false` si falló.
   * @example StorageUtil.limpiar("session");
   */
  limpiar(tipo = "local") {
    try {
      const storage = obtenerStorage(tipo);
      const clavesDelProyecto = [];
      for (let indice = 0; indice < storage.length; indice += 1) {
        const clave = storage.key(indice);
        if (clave !== null && clave.startsWith(PREFIJO_PROYECTO)) {
          clavesDelProyecto.push(clave);
        }
      }

      clavesDelProyecto.forEach((clave) => storage.removeItem(clave));
      return true;
    } catch (error) {
      registrarError("limpiar", error);
      return false;
    }
  },

  /**
   * Guarda una instancia mediante su método `toJSON()`.
   * @param {string} clave Clave donde guardar la instancia.
   * @param {Object} instancia Instancia que implementa `toJSON()`.
   * @param {"local"|"session"} [tipo="local"] Storage de destino.
   * @returns {boolean} `true` si se guardó; `false` si falló.
   * @example StorageUtil.guardarInstancia(StorageUtil.CLAVES.CARRITO_ITEMS, carrito);
   */
  guardarInstancia(clave, instancia, tipo = "local") {
    try {
      validarClave(clave);
      if (!instancia || typeof instancia.toJSON !== "function") {
        throw new Error("La instancia debe implementar el método toJSON().");
      }

      return StorageUtil.guardar(clave, instancia.toJSON(), tipo);
    } catch (error) {
      registrarError("guardarInstancia", error);
      return false;
    }
  },

  /**
   * Recupera datos y reconstruye una instancia mediante `Clase.fromJSON()`.
   * @param {string} clave Clave de los datos serializados.
   * @param {Function} Clase Clase con un método estático `fromJSON()`.
   * @param {"local"|"session"} [tipo="local"] Storage de origen.
   * @returns {*|null} Instancia reconstruida o `null` si faltan datos o falla.
   * @example const carrito = StorageUtil.cargarInstancia(StorageUtil.CLAVES.CARRITO_ITEMS, Carrito);
   */
  cargarInstancia(clave, Clase, tipo = "local") {
    try {
      validarClave(clave);
      if (!Clase || typeof Clase.fromJSON !== "function") {
        throw new Error("La clase debe implementar el método estático fromJSON().");
      }

      const datos = StorageUtil.obtener(clave, tipo);
      return datos === null ? null : Clase.fromJSON(datos);
    } catch (error) {
      registrarError("cargarInstancia", error);
      return null;
    }
  },
};

export default StorageUtil;