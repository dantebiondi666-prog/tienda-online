/**
 * library.spec.js: pruebas del wrapper de la librería externa AOS
 * (js/utils/animaciones.js).
 *
 * El módulo guarda indicadores internos (seIntentoIniciar, estaIniciada), por lo
 * que cada prueba lo importa dinámicamente con un parámetro distinto y obtiene
 * una instancia nueva. AOS, matchMedia y document se simulan sobre globalThis y
 * se restauran después de cada prueba.
 */

describe("Animaciones (wrapper de AOS)", () => {
  let contador = 0;
  let originales;

  /** Importa una instancia nueva del módulo. */
  async function cargar() {
    contador += 1;
    const modulo = await import(`../utils/animaciones.js?instancia=${contador}`);
    return modulo.default;
  }

  /** Define una propiedad global y recuerda su valor original. */
  function definirGlobal(nombre, valor) {
    if (!originales.has(nombre)) {
      originales.set(
        nombre,
        Object.getOwnPropertyDescriptor(globalThis, nombre),
      );
    }
    Object.defineProperty(globalThis, nombre, {
      value: valor,
      configurable: true,
      writable: true,
    });
  }

  /** Define una propiedad global cuya lectura lanza un error. */
  function definirGlobalQueFalla(nombre) {
    if (!originales.has(nombre)) {
      originales.set(
        nombre,
        Object.getOwnPropertyDescriptor(globalThis, nombre),
      );
    }
    Object.defineProperty(globalThis, nombre, {
      get() {
        throw new Error("acceso no permitido");
      },
      configurable: true,
    });
  }

  function crearAOS() {
    return {
      init: jasmine.createSpy("AOS.init"),
      refreshHard: jasmine.createSpy("AOS.refreshHard"),
    };
  }

  function simularMovimientoReducido(activo) {
    definirGlobal(
      "matchMedia",
      jasmine
        .createSpy("matchMedia")
        .and.callFake(() => ({ matches: activo })),
    );
  }

  function crearElemento() {
    return {
      dataset: {},
      removeAttribute: jasmine.createSpy("removeAttribute"),
      classList: { remove: jasmine.createSpy("classList.remove") },
    };
  }

  function simularDocumento(elementos) {
    definirGlobal("document", {
      querySelectorAll: jasmine
        .createSpy("querySelectorAll")
        .and.returnValue(elementos),
    });
  }

  beforeEach(() => {
    originales = new Map();
    // Estado base: sin movimiento reducido y sin AOS.
    simularMovimientoReducido(false);
    definirGlobal("AOS", undefined);
  });

  afterEach(() => {
    for (const [nombre, descriptor] of originales) {
      if (descriptor) {
        Object.defineProperty(globalThis, nombre, descriptor);
      } else {
        delete globalThis[nombre];
      }
    }
  });

  describe("prefiereMovimientoReducido()", () => {
    it("devuelve true cuando el sistema pide movimiento reducido", async () => {
      simularMovimientoReducido(true);
      const Animaciones = await cargar();
      expect(Animaciones.prefiereMovimientoReducido()).toBeTrue();
      expect(globalThis.matchMedia).toHaveBeenCalledWith(
        "(prefers-reduced-motion: reduce)",
      );
    });

    it("devuelve false cuando el sistema no lo pide", async () => {
      const Animaciones = await cargar();
      expect(Animaciones.prefiereMovimientoReducido()).toBeFalse();
    });

    it("devuelve false si matchMedia no existe", async () => {
      definirGlobal("matchMedia", undefined);
      const Animaciones = await cargar();
      expect(Animaciones.prefiereMovimientoReducido()).toBeFalse();
    });

    it("devuelve false si matchMedia lanza un error", async () => {
      definirGlobal("matchMedia", () => {
        throw new Error("fallo");
      });
      const Animaciones = await cargar();
      expect(Animaciones.prefiereMovimientoReducido()).toBeFalse();
    });
  });

  describe("estaDisponible()", () => {
    it("devuelve false si AOS no está cargado (CDN bloqueado)", async () => {
      const Animaciones = await cargar();
      expect(Animaciones.estaDisponible()).toBeFalse();
    });

    it("devuelve false si AOS no tiene init", async () => {
      definirGlobal("AOS", { refreshHard() {} });
      const Animaciones = await cargar();
      expect(Animaciones.estaDisponible()).toBeFalse();
    });

    it("devuelve false si AOS no tiene refreshHard", async () => {
      definirGlobal("AOS", { init() {} });
      const Animaciones = await cargar();
      expect(Animaciones.estaDisponible()).toBeFalse();
    });

    it("devuelve true si AOS tiene init y refreshHard", async () => {
      definirGlobal("AOS", crearAOS());
      const Animaciones = await cargar();
      expect(Animaciones.estaDisponible()).toBeTrue();
    });

    it("devuelve false si acceder a AOS lanza un error", async () => {
      definirGlobalQueFalla("AOS");
      const Animaciones = await cargar();
      expect(Animaciones.estaDisponible()).toBeFalse();
    });
  });

  describe("iniciar()", () => {
    it("devuelve false y no falla si AOS no está disponible", async () => {
      const Animaciones = await cargar();
      expect(Animaciones.iniciar()).toBeFalse();
    });

    it("devuelve false sin llamar a init si hay movimiento reducido", async () => {
      const aos = crearAOS();
      definirGlobal("AOS", aos);
      simularMovimientoReducido(true);
      const Animaciones = await cargar();

      expect(Animaciones.iniciar()).toBeFalse();
      expect(aos.init).not.toHaveBeenCalled();
    });

    it("inicializa AOS con la configuración esperada", async () => {
      const aos = crearAOS();
      definirGlobal("AOS", aos);
      const Animaciones = await cargar();

      expect(Animaciones.iniciar()).toBeTrue();
      expect(aos.init).toHaveBeenCalledTimes(1);
      expect(aos.init).toHaveBeenCalledWith(
        jasmine.objectContaining({
          once: true,
          startEvent: "load",
          duration: 500,
        }),
      );
    });

    it("inicializa AOS una sola vez aunque se llame varias veces", async () => {
      const aos = crearAOS();
      definirGlobal("AOS", aos);
      const Animaciones = await cargar();

      expect(Animaciones.iniciar()).toBeTrue();
      expect(Animaciones.iniciar()).toBeTrue();
      expect(aos.init).toHaveBeenCalledTimes(1);
    });

    it("permite iniciar más tarde si AOS aún no estaba disponible", async () => {
      const Animaciones = await cargar();
      expect(Animaciones.iniciar()).toBeFalse();

      const aos = crearAOS();
      definirGlobal("AOS", aos);
      expect(Animaciones.iniciar()).toBeTrue();
      expect(aos.init).toHaveBeenCalledTimes(1);
    });

    it("devuelve false y restaura el contenido si init lanza un error", async () => {
      const aos = crearAOS();
      aos.init.and.throwError("fallo de init");
      definirGlobal("AOS", aos);
      const elemento = crearElemento();
      simularDocumento([elemento]);
      const Animaciones = await cargar();

      expect(Animaciones.iniciar()).toBeFalse();
      expect(elemento.removeAttribute).toHaveBeenCalledWith("data-aos");
    });

    it("no reintenta init después de un fallo", async () => {
      const aos = crearAOS();
      aos.init.and.throwError("fallo de init");
      definirGlobal("AOS", aos);
      simularDocumento([]);
      const Animaciones = await cargar();

      Animaciones.iniciar();
      expect(Animaciones.iniciar()).toBeFalse();
      expect(aos.init).toHaveBeenCalledTimes(1);
    });
  });

  describe("animar()", () => {
    it("devuelve false si todavía no se inició AOS", async () => {
      definirGlobal("AOS", crearAOS());
      const Animaciones = await cargar();
      const elemento = crearElemento();

      expect(Animaciones.animar(elemento)).toBeFalse();
      expect(elemento.dataset.aos).toBeUndefined();
    });

    it("devuelve false si no recibe elemento", async () => {
      definirGlobal("AOS", crearAOS());
      const Animaciones = await cargar();
      Animaciones.iniciar();

      expect(Animaciones.animar(null)).toBeFalse();
      expect(Animaciones.animar(undefined)).toBeFalse();
    });

    it("usa fade-up y retraso 0 por defecto", async () => {
      definirGlobal("AOS", crearAOS());
      const Animaciones = await cargar();
      Animaciones.iniciar();
      const elemento = crearElemento();

      expect(Animaciones.animar(elemento)).toBeTrue();
      expect(elemento.dataset.aos).toBe("fade-up");
      expect(elemento.dataset.aosDelay).toBe("0");
    });

    it("aplica el efecto y el retraso indicados", async () => {
      definirGlobal("AOS", crearAOS());
      const Animaciones = await cargar();
      Animaciones.iniciar();
      const elemento = crearElemento();

      expect(Animaciones.animar(elemento, "fade-right", 150)).toBeTrue();
      expect(elemento.dataset.aos).toBe("fade-right");
      expect(elemento.dataset.aosDelay).toBe("150");
    });

    it("no agrega atributos si luego se pide movimiento reducido", async () => {
      definirGlobal("AOS", crearAOS());
      const Animaciones = await cargar();
      Animaciones.iniciar();
      simularMovimientoReducido(true);
      const elemento = crearElemento();

      expect(Animaciones.animar(elemento)).toBeFalse();
      expect(elemento.dataset.aos).toBeUndefined();
    });

    it("no agrega atributos si AOS desaparece después de iniciar", async () => {
      definirGlobal("AOS", crearAOS());
      const Animaciones = await cargar();
      Animaciones.iniciar();
      definirGlobal("AOS", undefined);
      const elemento = crearElemento();

      expect(Animaciones.animar(elemento)).toBeFalse();
      expect(elemento.dataset.aos).toBeUndefined();
    });
  });

  describe("refrescar()", () => {
    it("devuelve false si todavía no se inició AOS", async () => {
      const aos = crearAOS();
      definirGlobal("AOS", aos);
      const Animaciones = await cargar();

      expect(Animaciones.refrescar()).toBeFalse();
      expect(aos.refreshHard).not.toHaveBeenCalled();
    });

    it("llama a refreshHard cuando AOS está iniciado", async () => {
      const aos = crearAOS();
      definirGlobal("AOS", aos);
      const Animaciones = await cargar();
      Animaciones.iniciar();

      expect(Animaciones.refrescar()).toBeTrue();
      expect(aos.refreshHard).toHaveBeenCalledTimes(1);
    });

    it("devuelve false sin refrescar si hay movimiento reducido", async () => {
      const aos = crearAOS();
      definirGlobal("AOS", aos);
      const Animaciones = await cargar();
      Animaciones.iniciar();
      simularMovimientoReducido(true);

      expect(Animaciones.refrescar()).toBeFalse();
      expect(aos.refreshHard).not.toHaveBeenCalled();
    });

    it("restaura el contenido y desactiva las animaciones si refreshHard falla", async () => {
      const aos = crearAOS();
      aos.refreshHard.and.throwError("fallo al refrescar");
      definirGlobal("AOS", aos);
      const elemento = crearElemento();
      simularDocumento([elemento]);
      const Animaciones = await cargar();
      Animaciones.iniciar();

      expect(Animaciones.refrescar()).toBeFalse();
      expect(elemento.removeAttribute).toHaveBeenCalledWith("data-aos");
      expect(Animaciones.animar(crearElemento())).toBeFalse();
    });
  });

  describe("restaurarContenido() (RC de code review)", () => {
    it("quita atributos y clases de AOS de todos los elementos animados", async () => {
      const a = crearElemento();
      const b = crearElemento();
      simularDocumento([a, b]);
      const Animaciones = await cargar();

      expect(Animaciones.restaurarContenido()).toBeTrue();
      for (const elemento of [a, b]) {
        expect(elemento.removeAttribute).toHaveBeenCalledWith("data-aos");
        expect(elemento.removeAttribute).toHaveBeenCalledWith(
          "data-aos-delay",
        );
        expect(elemento.classList.remove).toHaveBeenCalledWith(
          "aos-init",
          "aos-animate",
        );
      }
      expect(globalThis.document.querySelectorAll).toHaveBeenCalledWith(
        "[data-aos]",
      );
    });

    it("devuelve true si no hay elementos para restaurar", async () => {
      simularDocumento([]);
      const Animaciones = await cargar();
      expect(Animaciones.restaurarContenido()).toBeTrue();
    });

    it("devuelve true si no existe document", async () => {
      definirGlobal("document", undefined);
      const Animaciones = await cargar();
      expect(Animaciones.restaurarContenido()).toBeTrue();
    });

    it("devuelve false si querySelectorAll lanza un error", async () => {
      definirGlobal("document", {
        querySelectorAll() {
          throw new Error("fallo");
        },
      });
      const Animaciones = await cargar();
      expect(Animaciones.restaurarContenido()).toBeFalse();
    });

    it("desactiva animar() y refrescar() después de restaurar", async () => {
      const aos = crearAOS();
      definirGlobal("AOS", aos);
      simularDocumento([]);
      const Animaciones = await cargar();
      Animaciones.iniciar();

      Animaciones.restaurarContenido();

      expect(Animaciones.animar(crearElemento())).toBeFalse();
      expect(Animaciones.refrescar()).toBeFalse();
      expect(aos.refreshHard).not.toHaveBeenCalled();
    });
  });
});