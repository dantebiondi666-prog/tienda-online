import StorageUtil from "../utils/storage.js";
import Producto from "../models/Producto.js";
import ItemCarrito from "../models/ItemCarrito.js";
import Carrito from "../models/Carrito.js";
import PersistenciaService from "../services/PersistenciaService.js";
function crearCarrito() {
  const producto = new Producto(
    "Remera",
    "Indumentaria",
    "remera",
    "casual",
    ["S", "M", "L"],
    15000
  );
  return new Carrito([
    new ItemCarrito(producto, "M", 2),
    new ItemCarrito(producto, "S", 1)
  ]);
}

beforeEach(function () {
  localStorage.clear();
  sessionStorage.clear();
  spyOn(console, "error");
});

describe("CLAVES", function () {
  it("expone las seis claves definidas para el proyecto", function () {
    expect(Object.keys(StorageUtil.CLAVES)).toEqual([
      "CARRITO_ITEMS",
      "COMPRAS_ULTIMO_RESUMEN",
      "CATALOGO_PRODUCTOS",
      "FILTRO_ACTIVO",
      "PRODUCTO_ULTIMO_CONSULTADO",
      "CACHE_RESULTADOS"
    ]);
  });

  it("mantiene congelado el objeto de claves", function () {
    expect(Object.isFrozen(StorageUtil.CLAVES)).toBeTrue();
  });

  it("usa el prefijo app: en todas las claves del proyecto", function () {
    expect(
      Object.values(StorageUtil.CLAVES).every((clave) =>
        clave.startsWith("app:")
      )
    ).toBeTrue();
  });
});

describe("guardar / obtener", function () {
  it("guarda y recupera un objeto JSON", function () {
    const valor = { producto: "Remera", cantidad: 2 };

    expect(StorageUtil.guardar("objeto", valor)).toBeTrue();
    expect(StorageUtil.obtener("objeto")).toEqual(valor);
  });

  it("guarda y recupera un array JSON", function () {
    const valor = ["S", "M", "L"];

    StorageUtil.guardar("array", valor);

    expect(StorageUtil.obtener("array")).toEqual(valor);
  });

  it("guarda y recupera una cadena JSON", function () {
    StorageUtil.guardar("cadena", "talle M");

    expect(StorageUtil.obtener("cadena")).toBe("talle M");
  });

  it("guarda y recupera un número JSON", function () {
    StorageUtil.guardar("numero", 15400);

    expect(StorageUtil.obtener("numero")).toBe(15400);
  });

  it("guarda y recupera un booleano JSON", function () {
    StorageUtil.guardar("booleano", false);

    expect(StorageUtil.obtener("booleano")).toBeFalse();
  });

  it("devuelve null cuando la clave no existe", function () {
    expect(StorageUtil.obtener("inexistente")).toBeNull();
  });

  it("mantiene separados los datos de localStorage y sessionStorage", function () {
    StorageUtil.guardar("mismo-nombre", { origen: "local" }, "local");
    StorageUtil.guardar("mismo-nombre", { origen: "session" }, "session");

    expect(StorageUtil.obtener("mismo-nombre", "local")).toEqual({
      origen: "local"
    });
    expect(StorageUtil.obtener("mismo-nombre", "session")).toEqual({
      origen: "session"
    });
  });

  it("devuelve false al guardar con una clave vacía", function () {
    expect(StorageUtil.guardar("  ", "valor")).toBeFalse();
  });

  it("devuelve false al guardar con una clave que no es string", function () {
    expect(StorageUtil.guardar(null, "valor")).toBeFalse();
  });

  it("devuelve null al obtener con una clave inválida", function () {
    expect(StorageUtil.obtener("")).toBeNull();
  });

  it("devuelve false o null cuando el tipo de storage es inválido", function () {
    expect(StorageUtil.guardar("clave", "valor", "otro")).toBeFalse();
    expect(StorageUtil.obtener("clave", "otro")).toBeNull();
  });
});

describe("actualizar", function () {
  it("reemplaza el valor existente en vez de fusionar objetos", function () {
    StorageUtil.guardar("preferencias", {
      tema: "claro",
      idioma: "es"
    });

    expect(
      StorageUtil.actualizar("preferencias", { tema: "oscuro" })
    ).toBeTrue();
    expect(StorageUtil.obtener("preferencias")).toEqual({ tema: "oscuro" });
  });

  it("devuelve false cuando la clave que se quiere actualizar no existe", function () {
    expect(StorageUtil.actualizar("inexistente", { activo: true })).toBeFalse();
  });

  it("devuelve false y registra el error si falla setItem al actualizar", function () {
  localStorage.setItem(
    "preferencias",
    JSON.stringify({ tema: "claro" })
  );

  spyOn(Storage.prototype, "setItem").and.throwError(
    new DOMException("lleno", "QuotaExceededError")
  );

  expect(
    StorageUtil.actualizar("preferencias", { tema: "oscuro" })
  ).toBeFalse();

  expect(console.error).toHaveBeenCalled();

  expect(StorageUtil.obtener("preferencias")).toEqual({
    tema: "claro"
  });
});
});

describe("eliminar y listar", function () {
  it("elimina una clave existente y devuelve true", function () {
    StorageUtil.guardar("app:carrito:items", ["item"]);

    expect(StorageUtil.eliminar("app:carrito:items")).toBeTrue();
    expect(StorageUtil.obtener("app:carrito:items")).toBeNull();
  });

  it("devuelve true al eliminar una clave que no existe", function () {
    expect(StorageUtil.eliminar("inexistente")).toBeTrue();
  });

  it("devuelve false y registra el error si falla removeItem al eliminar", function () {
  localStorage.setItem(
    "app:carrito:items",
    JSON.stringify(["item"])
  );

  spyOn(Storage.prototype, "removeItem").and.throwError(
    new Error("No se pudo eliminar")
  );

  expect(
    StorageUtil.eliminar("app:carrito:items")
  ).toBeFalse();

  expect(console.error).toHaveBeenCalled();
});

  it("lista todas las claves cuando no se especifica prefijo", function () {
    StorageUtil.guardar("app:carrito:items", []);
    StorageUtil.guardar("preferencias", {});

    expect(StorageUtil.listar().sort()).toEqual([
      "app:carrito:items",
      "preferencias"
    ]);
  });

  it("lista solo las claves que coinciden con el prefijo solicitado", function () {
    StorageUtil.guardar("app:carrito:items", []);
    StorageUtil.guardar("app:catalogo:productos", []);
    StorageUtil.guardar("preferencias", {});

    expect(StorageUtil.listar("app:carrito")).toEqual([
      "app:carrito:items"
    ]);
  });

  it("no incluye claves de sessionStorage al listar localStorage", function () {
    StorageUtil.guardar("app:local", 1, "local");
    StorageUtil.guardar("app:session", 2, "session");

    expect(StorageUtil.listar("app:")).toEqual(["app:local"]);
  });

  it("no incluye claves de localStorage al listar sessionStorage", function () {
    StorageUtil.guardar("app:local", 1, "local");
    StorageUtil.guardar("app:session", 2, "session");

    expect(StorageUtil.listar("app:", "session")).toEqual(["app:session"]);
  });

  it("devuelve un array vacío y registra el error si el prefijo no es string", function () {
  expect(StorageUtil.listar(123)).toEqual([]);

  expect(console.error).toHaveBeenCalled();
});

it("devuelve un array vacío y registra el error si falla el recorrido de las claves", function () {
  localStorage.setItem("app:prueba", JSON.stringify({ activo: true }));

  spyOn(Storage.prototype, "key").and.throwError(
    new Error("No se pudieron consultar las claves")
  );

  expect(StorageUtil.listar("app:")).toEqual([]);

  expect(console.error).toHaveBeenCalled();
});
});

describe("limpiar", function () {
  it("limpia todas las claves de sessionStorage", function () {
    StorageUtil.guardar("app:temporal", 1, "session");
    StorageUtil.guardar("ajena", 2, "session");
    StorageUtil.guardar("persistente", 3, "local");

    expect(StorageUtil.limpiar("session")).toBeTrue();
    expect(StorageUtil.listar("", "session")).toEqual([]);
    expect(StorageUtil.obtener("persistente", "local")).toBe(3);
  });

  it("limpia todas las claves de localStorage por defecto", function () {
    StorageUtil.guardar("app:carrito:items", []);
    StorageUtil.guardar("preferencias-ajenas", {});
    StorageUtil.guardar("temporal", true, "session");

    expect(StorageUtil.limpiar("local")).toBeTrue();
    expect(StorageUtil.listar()).toEqual([]);
    expect(StorageUtil.obtener("temporal", "session")).toBeTrue();
  });

  it("limpia solo claves app: y conserva las ajenas con soloProyecto true", function () {
    StorageUtil.guardar("app:carrito:items", []);
    StorageUtil.guardar("app:catalogo:productos", []);
    StorageUtil.guardar("preferencias-ajenas", { conservar: true });

    expect(StorageUtil.limpiar("local", true)).toBeTrue();
    expect(StorageUtil.listar()).toEqual(["preferencias-ajenas"]);
    expect(StorageUtil.obtener("preferencias-ajenas")).toEqual({
      conservar: true
    });
  });

  it("devuelve false y registra el error si falla clear al limpiar", function () {
  spyOn(Storage.prototype, "clear").and.throwError(
    new Error("No se pudo limpiar")
  );

  expect(StorageUtil.limpiar("local")).toBeFalse();

  expect(console.error).toHaveBeenCalled();
});
});

describe("guardarInstancia / cargarInstancia", function () {
  it("guarda y reconstruye un Carrito con sus items y productos", function () {
    const carrito = crearCarrito();

    expect(StorageUtil.guardarInstancia("app:carrito:items", carrito)).toBeTrue();
    const recuperado = StorageUtil.cargarInstancia(
      "app:carrito:items",
      Carrito
    );

    expect(recuperado instanceof Carrito).toBeTrue();
    expect(recuperado.items.length).toBe(2);
    expect(recuperado.items[0] instanceof ItemCarrito).toBeTrue();
    expect(recuperado.items[0].producto instanceof Producto).toBeTrue();
    expect(recuperado.toJSON()).toEqual(carrito.toJSON());
    expect(recuperado.calcularTotal()).toBe(carrito.calcularTotal());
  });

  it("devuelve null al cargar una clave sin datos", function () {
    expect(StorageUtil.cargarInstancia("sin-datos", Carrito)).toBeNull();
  });

  it("devuelve false si la instancia no implementa toJSON", function () {
    expect(StorageUtil.guardarInstancia("instancia", {})).toBeFalse();
  });

  it("devuelve null si la clase no implementa fromJSON", function () {
    StorageUtil.guardar("datos", {});

    expect(StorageUtil.cargarInstancia("datos", class ClaseSinFromJSON {}))
      .toBeNull();
  });
});

describe("Errores y robustez", function () {
  it("captura el error de cuota, devuelve false y registra el problema", function () {
    spyOn(Storage.prototype, "setItem").and.throwError(
      new DOMException("lleno", "QuotaExceededError")
    );

    expect(StorageUtil.guardar("lleno", "valor")).toBeFalse();
    expect(console.error).toHaveBeenCalled();
    expect(console.error.calls.mostRecent().args[1]).toBe(
      "Almacenamiento lleno: no hay espacio disponible."
    );
  });

  it("devuelve null y registra el error al leer JSON corrupto", function () {
    localStorage.setItem("corrupto", "{ JSON inválido");

    expect(StorageUtil.obtener("corrupto")).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });

  it("devuelve false y registra el error si localStorage no está disponible", function () {
    spyOnProperty(globalThis, "localStorage", "get").and.returnValue(undefined);

    expect(StorageUtil.guardar("clave", "valor")).toBeFalse();
    expect(console.error).toHaveBeenCalled();
  });
});

describe("PersistenciaService", function () {
  it("carga un carrito vacío cuando no hay datos guardados", function () {
    const carrito = PersistenciaService.cargarCarrito();

    expect(carrito instanceof Carrito).toBeTrue();
    expect(carrito.items.length).toBe(0);
  });

  it("guarda correctamente el carrito", function () {
    const carrito = crearCarrito();

    expect(PersistenciaService.guardarCarrito(carrito)).toBeTrue();
  });

  it("recupera el carrito guardado como una instancia de Carrito", function () {
    const carrito = crearCarrito();

    PersistenciaService.guardarCarrito(carrito);

    const recuperado = PersistenciaService.cargarCarrito();

    expect(recuperado instanceof Carrito).toBeTrue();
    expect(recuperado.toJSON()).toEqual(carrito.toJSON());
  });

  it("guarda correctamente el filtro activo", function () {
    const filtro = { campo: "talle", valor: "M" };

    expect(PersistenciaService.guardarFiltro(filtro)).toBeTrue();
  });

  it("recupera el filtro activo guardado", function () {
    const filtro = { campo: "talle", valor: "M" };

    PersistenciaService.guardarFiltro(filtro);

    expect(PersistenciaService.cargarFiltro()).toEqual(filtro);
  });

  it("elimina correctamente el filtro activo", function () {
    PersistenciaService.guardarFiltro({
      campo: "talle",
      valor: "M"
    });

    expect(PersistenciaService.eliminarFiltro()).toBeTrue();
    expect(PersistenciaService.cargarFiltro()).toBeNull();
  });
});