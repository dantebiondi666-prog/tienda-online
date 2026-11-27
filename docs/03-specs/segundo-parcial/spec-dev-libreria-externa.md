# Spec – Desarrollador JS Librerías Externas (Segundo Parcial)

**Rol:** Desarrollador JS Librerías Externas
**Autor:** Lucas Ivan Fischer (@LucasFUces)
**Issue:** #134
**Rama:** `feature/dev-libreria-externa-aos` → `develop`
**Materia:** Programación Web I – 2.º Cuatrimestre 2026 – Segundo Parcial

---

## 1. ANTES de integrar la librería

### 1.1 Necesidad específica del proyecto y justificación

La tienda renderiza dinámicamente las tarjetas de producto (`renderizarCatalogo`) y las líneas del carrito y del resumen de compra (`renderizarCarrito`). Cada vez que el usuario busca, filtra, agrega, modifica o elimina un producto, esos contenedores se vacían con `replaceChildren()` y se vuelven a llenar. Hoy el contenido aparece de golpe, sin ninguna señal visual de que la lista cambió, lo que dificulta percibir qué se agregó o qué desapareció.

Se necesita una animación de entrada para los elementos que aparecen al mostrarse en pantalla. No se resuelve con código propio porque exigiría implementar un observador de scroll (`IntersectionObserver`), gestionar el desplazamiento y los retrasos escalonados, y mantener los estados de visibilidad inicial y final; una librería especializada lo resuelve de forma probada y configurable.

Verificación de no duplicación: los estilos propios (`css/`) no definen animaciones de entrada (`@keyframes` / `animation`); se comprobó con una búsqueda en los archivos CSS. La librería no reemplaza ninguna funcionalidad existente: los mensajes de feedback, la validación y el carrusel siguen resueltos con código propio y Bootstrap.

### 1.2 Librería seleccionada

- **Nombre:** AOS – Animate On Scroll Library
- **Versión:** 2.3.4
- **Método de integración:** CDN (jsDelivr), el mismo proveedor que ya se usa para Bootstrap
  - CSS: `https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css`
  - JS: `https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js`
- **Documentación oficial:** https://michalsnik.github.io/aos/

### 1.3 Puntos de integración (al menos 2)

1. **Grilla de productos (`#product-grid`):** en `renderizarCatalogo`, cada `<article>` de producto se anima al entrar (efecto `fade-up`, con retraso escalonado). Aplica al cargar la página y al buscar o filtrar.
2. **Carrito y resumen de compra (`#carrito-items` y `#resumen-items`):** en `renderizarCarrito`, cada línea del carrito y del resumen se anima al agregarse o modificarse (efecto `fade-right`).

### 1.4 Decisiones de arquitectura

- **Módulo wrapper** `js/utils/animaciones.js` que encapsula la librería. Es el único archivo que conoce el objeto global `AOS`; `script.js` solo invoca al wrapper. Se mantiene la separación de responsabilidades: `script.js` es el controlador de eventos y DOM.
- **Degradación segura:** AOS oculta los elementos hasta animarlos. Si la librería no se carga (por ejemplo, sin conexión al CDN), el wrapper no agrega ningún atributo de animación y el contenido se ve igual que antes. La tienda nunca queda vacía por un fallo de la librería.
- **Accesibilidad:** el wrapper desactiva las animaciones cuando el usuario tiene activada la preferencia `prefers-reduced-motion: reduce`.
- **Elementos dinámicos:** después de cada renderizado, el wrapper llama a `AOS.refreshHard()` para que la librería detecte los elementos nuevos.
- **Consistencia visual:** se usan animaciones sutiles y breves (duración ≈ 500 ms, una sola vez por elemento) que no alteran colores, tamaños ni la maquetación de Bootstrap. Se evita el desplazamiento horizontal que genere scroll lateral.
- **Testabilidad:** el wrapper expone `iniciar()`, `animar(elemento, efecto, retraso)`, `refrescar()` y `estaDisponible()`, para que el Tester QA pueda cubrir inicialización, configuración, funcionalidad principal y manejo de errores en `library.spec.js`.
- **Documentación:** `docs/06-librerias/libreria-doc.md` con capturas, según la consigna.

### 1.5 Criterios de aceptación

- [x] AOS 2.3.4 se integra por CDN (CSS y JS) en `index.html`.
- [x] El módulo `js/utils/animaciones.js` encapsula la librería y tiene JSDoc.
- [x] La grilla de productos se anima al cargar y al filtrar.
- [x] Las líneas del carrito y del resumen se animan al agregar o modificar.
- [x] Si AOS no está disponible, la tienda se ve y funciona igual (sin elementos ocultos).
- [x] Se respeta `prefers-reduced-motion`.
- [x] No hay `prompt()`, `alert()` ni `console.log` nuevos.
- [x] La suite existente (`npm test`) sigue pasando.
- [x] `docs/06-librerias/libreria-doc.md` completo, con capturas.
- [x] `changelog.md` actualizado con el link a la PR y a la Issue #134.
- [x] Coordinación con el Tester QA para `library.spec.js` y con el Coordinador para la revisión de la PR.

---

## 2. AL CERRAR la tarea (evidencia)

### 2.1 Prompt exacto utilizado en Copilot Agent

```text
Actuá como Desarrollador JS Librerías Externas. Implementá lo definido en docs/03-specs/segundo-parcial/spec-dev-libreria-externa.md: integrar AOS 2.3.4 por CDN, con un módulo wrapper, en 2 puntos de la aplicación.
Leé index.html, js/script.js y js/utils/storage.js completos antes de escribir. Respetá el estilo del proyecto (módulos ES6, JSDoc en español, comillas dobles, sin punto y coma omitido). No inventes ids ni funciones.

1. index.html

* En el <head>, agregá DESPUÉS de los <link> de css/ existentes: <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
* Antes de <script type="module" src="js/script.js"></script>, agregá: <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
* No toques nada más del archivo.

2. js/utils/animaciones.js (archivo nuevo)

* Módulo ES6 con `export default Animaciones`, un objeto con JSDoc en cada método. Es el ÚNICO lugar que conoce el global AOS (usá globalThis.AOS).
* estaDisponible(): devuelve true solo si globalThis.AOS existe y tiene los métodos init y refreshHard.
* iniciar(): si estaDisponible(), llama una sola vez (guardá un flag interno) a AOS.init con { duration: 500, easing: "ease-out", once: true, offset: 40, disable: () => preferencia de movimiento reducido (globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true) } dentro de try/catch. Devuelve true si se inicializó, false en caso contrario. Nunca lanza.
* animar(elemento, efecto = "fade-up", retraso = 0): si no está disponible o el elemento es falsy, devuelve false sin tocar nada. Si está disponible, setea elemento.dataset.aos = efecto y elemento.dataset.aosDelay = String(retraso), y devuelve true.
* refrescar(): si estaDisponible(), llama a AOS.refreshHard() dentro de try/catch; devuelve true/false.
* IMPORTANTE: si AOS no está disponible, ningún método debe agregar atributos data-aos (AOS deja los elementos invisibles; sin la librería el contenido tiene que verse igual que ahora).

3. js/script.js (cambios mínimos)

* import Animaciones from "./utils/animaciones.js"; junto a los demás imports.
* En iniciarAplicacion(): llamá a Animaciones.iniciar() lo antes razonable, antes del primer renderizado del catálogo.
* En renderizarCatalogo(productos): a cada <article> creado aplicale Animaciones.animar(article, "fade-up", Math.min(indice * 50, 300)) y, al terminar el bucle, llamá a Animaciones.refrescar(). Usá el índice del bucle (convertí el for...of a uno con índice solo si hace falta, sin cambiar el comportamiento).
* En renderizarCarrito(): a cada <li> del carrito y a cada <li> del resumen de compra aplicales Animaciones.animar(li, "fade-right", Math.min(indice * 50, 300)) y, al final de la función, llamá a Animaciones.refrescar().
* No cambies lógica de negocio, validaciones, Storage, eventos ni mensajes. No agregues console.log, prompt() ni alert().

Archivos que podés crear o modificar (solo estos): index.html, js/script.js, js/utils/animaciones.js.
No hagas commits ni push. No crees tests (los hace el Tester QA).
Al terminar: corré `npm test` y mostrame la cantidad de specs y fallos, y listá exactamente qué líneas cambiaste en cada archivo.
```

### 2.2 Fragmento del código de integración final y ajustes manuales

Archivo final `js/utils/animaciones.js` (único módulo que conoce el objeto global `AOS`):

```js
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
   * Desactiva las animaciones y devuelve la visibilidad al contenido. Quita los
   * atributos y clases de AOS de todos los elementos configurados, porque el CSS
   * de AOS oculta los elementos con `data-aos` hasta que la librería los anima.
   * Después de llamarlo, `animar()` y `refrescar()` no hacen nada.
   * @returns {boolean} `true` si el contenido quedó restaurado; `false` si no fue posible.
   */
  restaurarContenido() {
    estaIniciada = false;
    try {
      const elementos =
        globalThis.document?.querySelectorAll("[data-aos]") ?? [];
      for (const elemento of elementos) {
        elemento.removeAttribute("data-aos");
        elemento.removeAttribute("data-aos-delay");
        elemento.classList.remove("aos-init", "aos-animate");
      }
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Inicializa AOS una sola vez. No hace nada si AOS no está disponible o si
   * el usuario prefiere movimiento reducido. Si la inicialización falla,
   * restaura la visibilidad del contenido.
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
      this.restaurarContenido();
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
   * Actualiza en AOS la colección de elementos que deben animarse. Si AOS falla
   * al refrescar, restaura la visibilidad del contenido y desactiva las
   * animaciones para que la aplicación siga funcionando sin ellas.
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
      this.restaurarContenido();
      return false;
    }
  },
};

export default Animaciones;
```

Uso en `js/script.js`:

```js
import Animaciones from "./utils/animaciones.js";

// Al inicio de iniciarAplicacion()
Animaciones.iniciar();

// En renderizarCatalogo, por cada producto
Animaciones.animar(article, "fade-up", Math.min(indice * 50, 300));
// ... después del bucle
Animaciones.refrescar();

// En renderizarCarrito, por cada línea del carrito y del resumen
Animaciones.animar(listItem, "fade-right", Math.min(index * 50, 300));
Animaciones.animar(summaryItem, "fade-right", Math.min(index * 50, 300));
// ... al final
Animaciones.refrescar();
```

**Ajustes manuales sobre lo generado por Copilot:**

1. **`startEvent: "load"`.** La primera versión llamaba a `AOS.init()` con el evento por defecto (`DOMContentLoaded`). Como la llamada ya ocurría dentro de un manejador de ese evento, AOS nunca se inicializaba: los elementos tenían `data-aos` pero nunca recibían las clases `aos-init` y `aos-animate`, y quedaban invisibles. Se corrigió con `startEvent: "load"`.
2. **Reescritura del wrapper para `prefers-reduced-motion` y degradación segura.** Con el movimiento reducido activado en el sistema, AOS no se iniciaba pero el código igual escribía `data-aos`, y los elementos quedaban ocultos. Se agregaron `prefiereMovimientoReducido()` y los indicadores internos `seIntentoIniciar` y `estaIniciada`; ahora `animar()` y `refrescar()` no hacen nada si AOS no está iniciado. Se comprobó en tres escenarios: animaciones activas, movimiento reducido y CDN bloqueado.
3. **Recuperación ante fallos de AOS (Code Review N.º 2, RC01).** Si `AOS.refreshHard()` lanzaba una excepción, `refrescar()` devolvía `false` pero los elementos conservaban `data-aos` y el CSS de AOS los dejaba invisibles. Se agregó `restaurarContenido()`, que quita `data-aos`, `data-aos-delay` y las clases `aos-init` y `aos-animate`, y desactiva el wrapper; se invoca desde el `catch` de `refrescar()` y de `iniciar()`. Se comprobó simulando una excepción en `refreshHard()` con JSDOM: el contenido queda visible y la aplicación sigue funcionando sin animaciones.

### 2.3 Resumen de los 2 puntos de integración y mejora en la experiencia de usuario

**Punto de integración 1 – Grilla de productos (`renderizarCatalogo`).** Cada `<article>` recibe el efecto `fade-up` con retraso escalonado (`Math.min(indice * 50, 300)` ms). Se aplica al cargar la página y cada vez que se busca o filtra, y al final se llama a `Animaciones.refrescar()`.

**Punto de integración 2 – Carrito y resumen de compra (`renderizarCarrito`).** Cada línea del carrito y del resumen recibe `fade-right` con el mismo retraso escalonado, y se llama a `Animaciones.refrescar()` al terminar de renderizar.

**Mejora en la experiencia de usuario.** Antes el contenido dinámico aparecía de golpe al agregar, quitar, buscar o filtrar. Ahora entra con un fundido suave de 500 ms, que marca visualmente el cambio y deja ver qué se agregó. Se respeta `prefers-reduced-motion` y, si el CDN falla, la tienda se ve y funciona igual que antes (verificado bloqueando `aos.css` y `aos.js` en DevTools).

### 2.4 Coordinación con otros roles e issues respondidas

**Coordinador/DevOps (@juanmartinbritos7-cmd).** Revisó el PR #136 en el Code Review N.º 2 con dos observaciones. RC01 (degradación segura ante errores de actualización de AOS) se resolvió en `31c3196` agregando `restaurarContenido()`, y el Coordinador lo aceptó técnicamente tras repetir la prueba con Node, JSDOM y Jasmine. RC02 (conflictos con la funcionalidad Fetch) se resolvió en `bcb1e8b`; queda a la espera de su revalidación definitiva y del Approve.

**Desarrollador JS Asíncrono (@dantebiondi666-prog).** Una vez mergeado su PR #137 en `develop` (`d1fd091`), se actualizó la rama desde `develop` y se resolvieron los conflictos de `js/script.js` y `changelog.md` conservando ambas contribuciones: la carga asíncrona del catálogo con `ApiService` y las animaciones de AOS (`Animaciones.iniciar()` al inicio de `iniciarAplicacion()` y `animar`/`refrescar` en catálogo y carrito). Se verificó con `npm test` (167 specs, 0 failures) y en el navegador, con el catálogo cargado por Fetch.

**Tester QA/JS (Sebas).** Se le solicitó la prueba automatizada del escenario del RC01 para `library.spec.js` (un `refreshHard()` que lanza una excepción deja los elementos sin `data-aos` ni `data-aos-delay`, y `animar()` devuelve `false`), con la API del wrapper y la advertencia de importar el módulo de forma dinámica por sus indicadores internos. La auditoría Lighthouse post-fetch está a su cargo.

**Issues y revisiones.** Issue de la tarea: #134. Se respondieron en el PR #136 los hilos RC01 y RC02 del Code Review N.º 2, indicando los commits de resolución.
