# Spec — Coordinador / DevOps

**Rol:** Coordinador/DevOps
**Proyecto:** Remer Us (simulador de e-commerce)
**Entrega:** Primer Parcial
**Autor:** Sebastian Viel
**Rama:** feature/coord-devops-update-figma-and-readme

---

## 1. Qué se va a hacer

Voy a actualizar el mockup de Figma para que refleje la migración a Bootstrap,
a dejar saldadas las correcciones de la Actividad N°2 con su backport hacia
`develop`, y a coordinar que las ramas del equipo se integren revisadas hasta
llegar a la release del Primer Parcial.

### 1.1 Correcciones de la Actividad N°2

Los Request Changes se resolvieron con ramas `fix/` contra
`release/actividad-obligatoria-2`, cada una con su PR y su entrada en
`changelog.md` bajo `[Fixed]`.

| Request Change | Descripción | PR del fix |
|---|---|---|
| RC1 | `spec-devops.md` de la Act. N°2 con placeholders en el uso de IA | #[N°] |
| RC6 | Hallazgos de Momento 2 sin issues propios | #[N°] |
| (completar) | (completar con el resto de los Request Changes) | #[N°] |

Backport de `release/actividad-obligatoria-2` hacia `develop`: PR #[N°]
(mergeada).

### 1.2 Cambios del mockup en Figma

- **Grilla:** `container` y 12 columnas, con los breakpoints de Bootstrap 5
  (sm 576, md 768, lg 992, xl 1200, xxl 1400).
- **Navegación:** navbar responsive, colapsada en mobile, con el buscador dentro.
- **Catálogo:** tarjetas en grilla de 1, 2 y 3 columnas según el ancho.
- **Filtros:** columna lateral en desktop; en mobile, offcanvas o accordion.
- **Guía de talles:** tabla responsive, conservando el contenedor accesible por
  teclado (`tabindex` y nombre accesible).
- **Contacto:** formulario sobre la grilla, con controles de formulario de
  Bootstrap.
- **Componentes avanzados de Bootstrap:** [Carousel] y [Modal] (confirmar con el
  Especialista en Componentes Bootstrap).
- **Componentes HTML avanzados:** [iframe de Google Maps con ratio] y
  [details/summary] (confirmar con el Desarrollador de Componentes HTML
  Avanzados).
- **Identidad visual:** se mantienen la paleta (verde salvia, beige arena,
  dorado apagado, gris cálido, crema, carbón) y las tipografías (Playfair
  Display y Work Sans) de la Act. N°2, aplicadas mediante overrides de
  Bootstrap. Los estados hover, focus y disabled se ajustan a los de Bootstrap.
- **Entregables:** exportar a `docs/01-mockup/disenio-bootstrap.png` y
  actualizar `README.md` con la imagen y el enlace al archivo de Figma.

### 1.3 Coordinación y entrega

- Coordinar la integración de las ramas `feature/` en `develop`, con al menos 4
  code reviews asistidos por Copilot Agent Mode.
- Administrar las issues del equipo en un tablero Kanban de GitHub Projects.
- Actualizar `testing-doc.md` con los test cases 6 a 10 y coordinar la
  navegación entre índices.
- Crear `release/primer-parcial` desde `develop`, habilitar GitHub Pages,
  limpiar las ramas innecesarias y publicar la PR de release.
- Gestionar el tag `v1.1-primer-parcial` y su release en GitHub tras el merge a
  `master`.

## 2. Por qué se hace

Esta tarea responde a los siguientes puntos de `plan.md`:

- **RNF-05 (Trazabilidad) y CA-08 / CA-09:** cada tarea queda asociada a su PR y
  al registro en `changelog.md`.
- **RNF-06 (Colaboración):** las ramas `feature/` se integran en `develop`
  mediante PRs revisadas antes del merge.
- **RNF-08 (Diseño adaptable) y CA-13:** la grilla de Bootstrap en el mockup
  es la base para una presentación usable en distintos tamaños de pantalla, sin
  overflow horizontal.
- **CA-11 y CA-12:** el mockup mantiene el sistema de diseño definido en la
  Sección 12.1 de `plan.md` (paleta y tipografías) sobre Bootstrap.
- **RNF-07 (Publicación):** la release del parcial se publica en GitHub Pages.

El alcance del Primer Parcial (Bootstrap y componentes HTML avanzados) todavía
no está detallado en `plan.md`. Para mantener la trazabilidad (Sección 16 de
`plan.md`), se agrega una sección 10.2 con ese alcance.

## 3. Criterios de aceptación

### Criterios de aceptación de esta PR (mockup, README e índices)

- [ ] El mockup refleja la grilla de Bootstrap y sus breakpoints.
- [ ] El mockup incluye los componentes avanzados de Bootstrap seleccionados.
- [ ] El mockup indica dónde van los componentes HTML avanzados.
- [ ] Paleta, tipografías y estados de interacción son coherentes con Bootstrap.
- [ ] Mockup exportado en `docs/01-mockup/disenio-bootstrap.png`.
- [ ] `README.md` actualizado con la imagen y el enlace al archivo de Figma.
- [ ] El enlace de Figma permite al Desarrollador Frontend/Bootstrap usar el MCP.
- [ ] `plan.md` actualizado con el alcance del Primer Parcial (sección 10.2).
- [ ] Documentación incluida donde corresponda (README e índices enlazados).
- [ ] Rama `feature/` propia, con al menos un commit relevante.
- [ ] PR asociado creado hacia `develop`, usando el template de PR
      correspondiente.
- [ ] Entrada agregada en `changelog.md` con link a la PR.
- [ ] Issue vinculada a la tarea, cerrada tras el merge.

### Criterios correspondientes a la etapa final del rol

- [x] Cada Request Change de la Actividad N°2 tiene su rama `fix/`, su PR y su
      entrada en `changelog.md` bajo [Fixed].
- [x] Backport de `release/actividad-obligatoria-2` hacia `develop` realizado.
- [ ] Tablero Kanban en GitHub Projects con las issues del equipo.
- [ ] Todas las PRs tienen al menos una revisión aprobada antes del merge.
- [ ] Se realizaron al menos 4 code reviews asistidos con Copilot Agent Mode,
      evidenciados en este archivo.
- [ ] `testing-doc.md` actualizado con los test cases 6 a 10.
- [ ] Se crea la rama `release/primer-parcial` desde `develop` y se habilita
      GitHub Pages.
- [ ] Ramas limpiadas: solo quedan `master`, `develop` y
      `release/primer-parcial`.
- [ ] PR de release creada con el template, publicada en Slack y enlace subido
      al campus por cada integrante.
- [ ] Tag `v1.1-primer-parcial` y release de GitHub creados tras el merge a
      `master`.

## 4. Uso de IA en esta tarea (si aplica)

- **Modelo utilizado:** [completar al cierre]
- **Qué se le pidió (resumen):** [completar al cierre]
- **Qué se aceptó del resultado y qué se corrigió manualmente:** [completar al
  cierre]
- **Prompt documentado en:** [completar: ruta del archivo de prompts del
  parcial en `docs/02-prompts/`]

## 5. Evidencia de cierre (completar al finalizar la tarea)

### 5.1 Prompts de code review utilizados con Copilot Agent

[pendiente]

### 5.2 Decisiones del mockup

[pendiente: componentes de Bootstrap incluidos y por qué]

### 5.3 Obstáculos y resolución

[pendiente]

---

*Spec redactada antes de iniciar el desarrollo de esta tarea, conforme a la
metodología definida en `docs/02-prompts/sdd-decisions.md`.*