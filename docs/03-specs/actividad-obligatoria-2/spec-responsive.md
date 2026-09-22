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
| Tablet | `min-width: 768px` | Coincide con el ancho estándar de tablets (iPad ≈ 768–820px). Permite pasar de 1 a 2 columnas en el catálogo sin que las tarjetas queden demasiado angostas. |
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

- [ ] Breakpoints definidos y documentados (mobile, tablet, desktop)
- [ ] Layout mobile-first implementado (estilos base = mobile, media queries con `min-width` para ampliar)
- [ ] Todas las secciones del mockup (header, nav, filtros, catálogo, guía de talles, contacto, footer) se adaptan correctamente en los tres breakpoints
- [ ] No hay overflow horizontal en ningún breakpoint ni dispositivo
- [ ] Pruebas de integración realizadas con el Desarrollador Frontend en GitHub Pages y localhost

---

## 2. AL CERRAR la tarea (completar como evidencia)

> ⏳ Pendiente de completar una vez que `css/styles.css` y `css/components.css` estén disponibles en `develop` y se haya podido correr Copilot Agent Mode con Playwright/Figma como contexto.

**Prompt exacto utilizado en Copilot Agent** (incluyendo qué archivos se adjuntaron como contexto):
```
[completar]
```

**Resultado obtenido:** qué generó Copilot y qué tan fiel fue al mockup.
```
[completar]
```

**Ajustes manuales realizados:** qué tuvo que corregirse y por qué.
```
[completar]
```

**Decisiones finales de breakpoints con justificación** (si difieren de lo planificado arriba):
```
[completar]
```
