# Spec — Responsive Design (Actividad Obligatoria N°2)

**Rol:** Especialista en Responsive Design
**Responsable:** Lucas Ivan Fischer (@LucasFUces)
**Rama:** `feature/responsive-design-add-responsive-styles`

---

## 1. ANTES de abrir Copilot o escribir CSS

### Breakpoints a implementar y por qué

| Breakpoint | Rango | Justificación |
|---|---|---|
| Mobile (base) | hasta 767px | Estilos base sin media query (mobile-first). Cubre celulares en portrait/landscape. Es el uso mayoritario para consultar un catálogo de ropa desde el celular. |
| Tablet | `min-width: 600px` | Cubre desde smartphones grandes en landscape hasta el iPad Air en portrait (≈820px). Permite pasar de 1 a 2 columnas en el catálogo sin que las tarjetas queden demasiado angostas. |
| Desktop | `min-width: 1024px` | A partir de este ancho entra cómodo el layout de dos columnas (filtros + catálogo de 3 columnas) que muestra el mockup de Figma. |

### Enfoque de layout por sección

- **Header** (logo + buscador + nav): **Flexbox**. Mobile: `flex-direction: column`, elementos apilados y centrados. Desktop: `flex-direction: row`, `justify-content: space-between`.
- **Nav principal** (Mujer/Hombre/Niños/Ver todo): **Flexbox** con `flex-wrap: wrap` en mobile para que los links no generen overflow horizontal.
- **Contenedor de filtros + catálogo** (el `<div>` que envuelve `<aside>` y la `<section>` del catálogo): **CSS Grid**. Mobile: 1 columna, con **los filtros (`<aside>`) arriba del catálogo** (se reordena con `order` o directamente dejando el aside primero en el DOM/flujo). Tablet: se mantiene 1 columna de layout general pero el catálogo interno pasa a 2 columnas. Desktop: `grid-template-columns: 260px 1fr` (filtros a la izquierda, catálogo a la derecha), tal como en el mockup.
- **Catálogo de productos** (`<article>` dentro de la `<section>`): **CSS Grid**. Mobile: 1 columna. Tablet: **2 columnas fijas** (`grid-template-columns: repeat(2, 1fr)`). Desktop: 3 columnas fijas, como en el mockup.
- **Guía de talles** (`<table>`): envolver en un contenedor con `overflow-x: auto` en mobile para evitar overflow horizontal del documento si la tabla no entra.
- **Formulario de contacto**: **Flexbox** en columna en todos los breakpoints; en desktop se limita el ancho máximo (`max-width`) y se centra, para que no se estire de punta a punta de la pantalla.
- **Footer**: Flexbox columna en mobile, fila en desktop.

### Criterios de aceptación (checklist)

- [x] Breakpoints definidos y documentados (mobile, tablet, desktop)
- [x] Layout mobile-first implementado (estilos base = mobile, media queries con `min-width` para ampliar)
- [x] Todas las secciones del mockup (header, nav, filtros, catálogo, guía de talles, contacto, footer) se adaptan correctamente en los tres breakpoints
- [x] No hay overflow horizontal en ningún breakpoint ni dispositivo
- [ ] Pruebas de integración realizadas con el Desarrollador Frontend en GitHub Pages y localhost
---

## 2. AL CERRAR la tarea (completar como evidencia)

**Herramienta utilizada:** GitHub Copilot Agent Mode en VS Code, con contexto de `spec-responsive.md`, `css/styles.css`, `css/components.css` y el mockup actualizado.

**Prompt utilizado:** Actuá como especialista en diseño responsive. Con el spec adjunto (spec-responsive.md) como plan de trabajo, generá o revisá css/responsive.css para que:

- Sea mobile-first: los estilos base (sin media query) definen el layout mobile, y dos bloques @media (min-width: 600px) y @media (min-width: 1024px) reintroducen los layouts de tablet y desktop.
- Respete la tecnología de layout que ya usan styles.css y components.css (Grid o Flexbox según corresponda) en lugar de reemplazarla.
- Adapte: header (logo + buscador + nav), navegación principal, categorías destacadas, el bloque de filtros + catálogo de productos, la guía de talles, el formulario de contacto y el footer.
- Garantice que no haya overflow horizontal en ningún breakpoint.
- Use las variables CSS ya definidas en styles.css (espaciados, colores) en vez de valores sueltos.

Ya tengo una versión propia de responsive.css escrita a mano; quiero que la revises contra el mockup adjunto y me señales inconsistencias o mejoras, no que la reescribas desde cero.


**Resultado obtenido:** Copilot Agent confirmó que la estructura mobile-first con los dos breakpoints (600px y 1024px) era correcta y que se respetaba el uso de Grid/Flexbox de `styles.css`/`components.css`. Señaló como punto débil que `overflow-x: hidden` era una solución que ocultaba el problema en vez de resolverlo, y recomendó reforzar con `min-width: 0` en los contenedores de Grid y `overflow-wrap: anywhere` en las tarjetas del catálogo. También sugirió ajustes estéticos de alineación (header, footer, formulario) que no se aplicaron por no estar contrastados contra el mockup real.

**Ajustes manuales realizados:**
- Se agregó en `index.html` el `<link>` de `css/responsive.css` (imprescindible para que cargue), después de `styles.css` y `components.css`.
- Se aplicó `min-width: 0` en `main > div`, `main > div > section` y `article`, y `overflow-wrap: anywhere` en `article`, siguiendo la recomendación de Copilot Agent, para eliminar la causa real de overflow en vez de depender solo de `overflow-x: hidden`.
- Se movió la regla de la tabla de talles (`display: block; overflow-x: auto; white-space: nowrap;`) a un bloque `@media (max-width: 599px)`, porque estaba aplicándose también en desktop y rompía el formato normal de tabla en pantallas grandes.
- Se descartaron los ajustes estéticos sugeridos por Copilot (centrado de header, ancho del formulario, alineación del footer) porque la IA no tenía evidencia de haber comparado contra el mockup real; se dejan pendientes de revisión visual manual.

**Pruebas realizadas:** se creó una rama temporal (`prueba-integracion`) a partir de la rama de Frontend (`feature/dev-frontend-css-add-styles`, que todavía no está mergeada a `develop`) para incorporar `responsive.css` sin alterar la rama de trabajo. Con Live Server, se verificó en DevTools (modo responsive) que `document.documentElement.scrollWidth > document.documentElement.clientWidth` devuelve `false` en los 6 anchos de referencia: 390px, 412px, 820px, 1280px, 1440px y 1920px. No se detectó overflow horizontal en ningún caso.

**Decisiones finales de breakpoints:** 600px (tablet) y 1024px (desktop), sin cambios respecto al plan inicial de la Sección 1.

**Pendiente:** repetir la prueba de integración una vez que el PR de Frontend (#28) esté mergeado a `develop`, esta vez trabajando directamente sobre `develop` en lugar de una rama temporal.