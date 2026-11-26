let seIntentoIniciar = false;
let estaIniciada = false;

const Animaciones = {
  /**
   * Indica si el usuario pidió reducir el movimiento en su sistema.
   * @returns {boolean} `true` si se debe evitar toda animación.
   */
  prefiereMovimientoReducido() {
    try {
      return (
        globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ===
        true
      );
    } catch {
      return false;
    }
  },

  /**
   * Indica si AOS está disponible y expone los métodos requeridos.
   * @returns {boolean} `true` si AOS puede inicializarse y refrescarse.
   */
  estaDisponible() {
    try {
      const aos = globalThis.AOS;
      return (
        Boolean(aos) &&
        typeof aos.init === "function" &&
        typeof aos.refreshHard === "function"
      );
    } catch {
      return false;
    }
  },

  /**
   * Inicializa AOS una sola vez. No hace nada si AOS no está disponible o si
   * el usuario prefiere movimiento reducido.
   * @returns {boolean} `true` si AOS quedó inicializado; `false` si no fue posible.
   */
  iniciar() {
    if (!this.estaDisponible() || this.prefiereMovimientoReducido()) {
      return false;
    }
    if (seIntentoIniciar) {
      return estaIniciada;
    }

    seIntentoIniciar = true;
    try {
      globalThis.AOS.init({
        duration: 500,
        easing: "ease-out",
        once: true,
        offset: 40,
        startEvent: "load",
      });
      estaIniciada = true;
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Configura un elemento para que AOS lo anime. Solo agrega atributos si AOS
   * está inicializado y el usuario no pidió movimiento reducido, para que el
   * contenido nunca quede oculto.
   * @param {HTMLElement} elemento Elemento que recibirá los atributos de AOS.
   * @param {string} [efecto="fade-up"] Efecto de entrada.
   * @param {number} [retraso=0] Retraso de la animación en milisegundos.
   * @returns {boolean} `true` si el elemento fue configurado.
   */
  animar(elemento, efecto = "fade-up", retraso = 0) {
    if (
      !elemento ||
      !estaIniciada ||
      !this.estaDisponible() ||
      this.prefiereMovimientoReducido()
    ) {
      return false;
    }

    elemento.dataset.aos = efecto;
    elemento.dataset.aosDelay = String(retraso);
    return true;
  },

  /**
   * Actualiza en AOS la colección de elementos que deben animarse.
   * @returns {boolean} `true` si AOS se refrescó correctamente.
   */
  refrescar() {
    if (
      !estaIniciada ||
      !this.estaDisponible() ||
      this.prefiereMovimientoReducido()
    ) {
      return false;
    }

    try {
      globalThis.AOS.refreshHard();
      return true;
    } catch {
      return false;
    }
  },
};

export default Animaciones;