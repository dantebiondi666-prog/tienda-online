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

- [ ] AOS 2.3.4 se integra por CDN (CSS y JS) en `index.html`.
- [ ] El módulo `js/utils/animaciones.js` encapsula la librería y tiene JSDoc.
- [ ] La grilla de productos se anima al cargar y al filtrar.
- [ ] Las líneas del carrito y del resumen se animan al agregar o modificar.
- [ ] Si AOS no está disponible, la tienda se ve y funciona igual (sin elementos ocultos).
- [ ] Se respeta `prefers-reduced-motion`.
- [ ] No hay `prompt()`, `alert()` ni `console.log` nuevos.
- [ ] La suite existente (`npm test`) sigue pasando.
- [ ] `docs/06-librerias/libreria-doc.md` completo, con capturas.
- [ ] `changelog.md` actualizado con el link a la PR y a la Issue #134.
- [ ] Coordinación con el Tester QA para `library.spec.js` y con el Coordinador para la revisión de la PR.

---

## 2. AL CERRAR la tarea (evidencia)

### 2.1 Prompt exacto utilizado en Copilot Agent

[PENDIENTE]

### 2.2 Fragmento del código de integración final y ajustes manuales

[PENDIENTE]

### 2.3 Resumen de los 2 puntos de integración y mejora en la experiencia de usuario

[PENDIENTE]

### 2.4 Coordinación con otros roles e issues respondidas

[PENDIENTE]