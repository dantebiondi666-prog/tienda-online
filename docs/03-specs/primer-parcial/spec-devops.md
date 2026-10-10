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

Los Request Changes de la Actividad N°2 se resolvieron con ramas `fix/` contra
`release/actividad-obligatoria-2` y quedaron registrados en el changelog. Las
PRs verificadas para los dos hallazgos que originaron esta tarea son:

| Request Change | Descripción | PR del fix |
|---|---|---|
| RC1 | Completar la evidencia de uso de IA en `spec-devops.md` de la Act. N°2 | [#41](https://github.com/dantebiondi666-prog/tienda-online/pull/41) |
| RC6 | Dar trazabilidad propia a los hallazgos de Momento 2 en los test cases | [#45](https://github.com/dantebiondi666-prog/tienda-online/pull/45) |

Otras correcciones documentales relacionadas quedaron registradas en el
changelog, entre ellas RC5 en [#46](https://github.com/dantebiondi666-prog/tienda-online/pull/46)
y RC21–RC22 en [#50](https://github.com/dantebiondi666-prog/tienda-online/pull/50)
y [#51](https://github.com/dantebiondi666-prog/tienda-online/pull/51).

Backport de `release/actividad-obligatoria-2` hacia `develop`: [PR #53](https://github.com/dantebiondi666-prog/tienda-online/pull/53)
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
- **Componentes avanzados de Bootstrap:** Carousel para destacar productos y
  Modal para mostrar el detalle de cada producto.
- **Componentes HTML avanzados:** `details`/`summary` en preguntas frecuentes
  y `datalist` asociado al buscador principal.
- **Identidad visual:** se mantienen la paleta (verde salvia, beige arena,
  dorado apagado, gris cálido, crema, carbón) y las tipografías (Playfair
  Display y Work Sans) de la Act. N°2, aplicadas mediante overrides de
  Bootstrap. Los estados hover, focus y disabled se ajustan a los de Bootstrap.
- **Entregables:** exportar a `docs/01-mockup/primer-parcial/disenio-bootstrap.png` y
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
- [ ] Mockup exportado en `docs/01-mockup/primer-parcial/disenio-bootstrap.png`.
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
- [x] Tablero Kanban en GitHub Projects con las issues del equipo.
- [x] Todas las PRs tienen al menos una revisión aprobada antes del merge.
- [x] Se documentan cuatro code reviews asistidos con Copilot Agent Mode; las
      PRs revisadas y sus resultados están enlazados en la Sección 5.1.
- [x] `testing-doc.md` actualizado con los test cases 6 a 10.
- [x] Se crea la rama `release/primer-parcial` desde `develop` y se habilita
      GitHub Pages.
- [x] Ramas limpiadas: solo quedan `master`, `develop` y
      `release/primer-parcial`.
- [x] PR de release creada con el template, publicada en Slack y enlace subido
      al campus por cada integrante.
- [ ] Tag `v1.1-primer-parcial` y release de GitHub creados tras el merge a
      `master`.

## 4. Uso de IA en esta tarea

- **Herramienta y modelo:** GitHub Copilot Agent Mode en Visual Studio Code.
  No se registró el identificador específico del modelo utilizado.
- **Qué se le pidió:** asistir con las revisiones de PR contra los requisitos,
  las especificaciones del rol y la documentación del proyecto; además,
  colaborar con las correcciones y la documentación del trabajo.
- **Qué se aceptó y qué se corrigió manualmente:** las sugerencias se
  contrastaron con el alcance del plan, el contenido real de las PRs y los
  resultados de las pruebas. Las decisiones finales de revisión y los cambios
  aplicados quedaron bajo revisión humana; no se asumieron como correctas
  sugerencias sin verificar.
- **Prompt y resultados:** el prompt reutilizable de code review y las
  respuestas completas están documentados en el [Anexo A y los Anexos B–E de
  la spec de DevOps de la Actividad N°2](../actividad-obligatoria-2/spec-devops.md).
  La conversación de Copilot Agent en VS Code fue el entorno de trabajo; no se
  creó un archivo de prompt independiente para esta tarea.

## 5. Evidencia de cierre

### 5.1 Revisiones asistidas con Copilot Agent

**Prompt utilizado una sola vez como plantilla:** se aplicó el prompt de code
review del [Anexo A de la spec de DevOps de la Actividad N°2](../actividad-obligatoria-2/spec-devops.md),
reemplazando los datos de rol, número de PR y rama para cada revisión. El texto
completo de la plantilla queda documentado allí una sola vez; a continuación
se transcriben las respuestas de las PRs del Primer Parcial.

#### PR #63 — Desarrollador de Componentes HTML Avanzados

<details>
<summary>Respuesta de la revisión</summary>

RESUMEN GENERAL DE LA PR

La PR introduce la entrega del rol “Desarrollador de Componentes HTML Avanzados” para el Primer Parcial: agrega la sección de preguntas frecuentes con elementos details/summary y el datalist asociado al buscador del header, manteniendo la estructura HTML semántica y sin lógica JavaScript personalizada. Los cambios se concentran principalmente en `index.html` y `css/components.css`, con documentación y validación agregadas en `docs/03-specs/primer-parcial/spec-html-avanzados.md`, `docs/04-testing/test-case-9.md`, `docs/04-testing/test-case-10.md` y `changelog.md`.

La revisión del diff y del historial de commits muestra una secuencia lógica: una rama de feature con dos commits funcionales relevantes, luego documentación/completado de la spec, sin commits ajenos ni mezclados fuera de contexto. El alcance es consistente con el rol y la consigna del parcial.

REQUISITOS

- details/summary + FAQ: CUMPLE
Evidencia: la nueva sección “Preguntas frecuentes” se incorpora en la estructura principal de `index.html` con tres bloques details y sus respectivos summary; el contenido es específico del comercio y no requiere JavaScript.
- datalist asociado al buscador: CUMPLE
Evidencia: el campo input type="search" del header incluye el atributo list="sugerencias-busqueda" y el datalist correspondiente define opciones coherentes con categorías reales del sitio.
- semántica y accesibilidad: CUMPLE
Evidencia: uso nativo de HTML, label asociado al input de búsqueda, estructura semántica del main/section/heading y comportamiento accesible por teclado sin lógica extra.
- integración visual y responsive: CUMPLE
Evidencia: los estilos específicos para details/summary y el buscador se agregan en `css/components.css` y la adaptación responsive se mantiene con la estrategia existente en `css/responsive.css`.
- documentación y trazabilidad: CUMPLE
Evidencia: la PR documenta la especificación y los test cases de QA en los archivos correspondientes y actualiza `changelog.md`.
- no implementación de funcionalidad no solicitada: CUMPLE
Evidencia: no se agrega JavaScript de búsqueda ni lógica funcional más allá del comportamiento nativo HTML.
No se encontraron hallazgos reales, verificables y relevantes que justifiquen bloqueo previo a merge.

BLOQUEANTES

Ninguno.

RECOMENDACIONES

Ninguna.

DESICION FINAL SUGERIDA POR IA:

approve

</details>

#### PR #62 — Especialista en Componentes Bootstrap

<details>
<summary>Respuesta de la revisión</summary>

RESUMEN GENERAL DE LA PR

La PR introduce el Carousel de destacados y el Modal de detalle de producto con Bootstrap 5, integrados sobre la base ya migrada a Bootstrap. Los cambios principales afectan `index.html` y `css/bootstrap-overrides.css`, con documentación y cierre del rol en `docs/03-specs/primer-parcial/spec-componentes-bootstrap.md`, `docs/04-testing/test-case-7.md`, `docs/04-testing/test-case-8.md` y `changelog.md`. El historial de commits es coherente y no mezcla cambios ajenos al rol. El principal riesgo técnico está en el contenido del modal: la guía de talles no refleja correctamente los talles reales de cada producto.

REQUISITOS

- Carousel de destacados: CUMPLE
- Modal de detalle de producto: CUMPLE PARCIALMENTE
- Personalización Bootstrap conservando identidad visual: CUMPLE
- Responsive y comportamiento nativo Bootstrap: CUMPLE
- Documentación y trazabilidad del rol: CUMPLE
- Accesibilidad y contenido del modal alineado con los productos reales: NO CUMPLE

BLOQUEANTES

- El modal muestra una tabla de talles fija (“S, M, L, XL”) para todos los productos aunque cada tarjeta tiene talles distintos; el caso del Pantalón expone “38 / 40 / 42” en la tarjeta, pero el modal no refleja esa información. Esto se observa en el bloque del modal dentro de `index.html`, donde la tabla es estática y no se deriva del producto seleccionado. El problema es real y funcional: el usuario puede abrir el modal de un pantalón y ver una guía de talles incorrecta para ese artículo.

RECOMENDACIONES

- Hacer que la tabla de talles del modal dependa del producto seleccionado, en lugar de usar una guía estática general.
- Validar el foco y la navegación por teclado en el flujo del modal, dado que la especificación del rol exige claridad en la accesibilidad.

DESICION FINAL SUGERIDA POR IA:

request changes

</details>

#### PR #60 — Desarrollador Frontend / Bootstrap

<details>
<summary>Respuesta de la revisión</summary>

## RESUMEN GENERAL DE LA PR

La PR introduce Bootstrap 5 mediante CDN, la integración del bundle JavaScript y la migración de la estructura principal a la grilla responsive. Los archivos afectados son index.html, bootstrap-overrides.css, spec-frontend-bootstrap.md, test-case-6.md y changelog.md. El historial es coherente y ordenado.

Los requisitos de Bootstrap y responsive se cumplen parcialmente, pero la PR no cumple el alcance obligatorio de componentes avanzados ni documenta los Test Cases 7–10.

REQUISITOS

- Bootstrap mediante CDN: CUMPLE

- Grilla responsive: CUMPLE

- Mantener estilos existentes: CUMPLE

- Archivo de overrides: CUMPLE

- Componentes avanzados de Bootstrap: NO CUMPLE

- Dos componentes HTML avanzados: NO CUMPLE

- Test Cases 6–10: CUMPLE PARCIALMENTE

- Documentación y trazabilidad: CUMPLE PARCIALMENTE

BLOQUEANTES

- *HALLAZGO #1*

  - *archivo:* index.html:246

  - *Tipo de problema:* diseño

  - *Severidad:* alta

  - *Explicacion tecnica:* La PR únicamente incorpora el bundle de Bootstrap. No existe ningún componente avanzado de Bootstrap ni componentes HTML avanzados, aunque el plan exige al menos dos de cada uno en plan.md:159-160 y los criterios CA-16 y CA-17 en plan.md:248-249.

  - *Sugerencia de mejora:* Incorporar al menos dos componentes avanzados de Bootstrap y dos componentes HTML avanzados, y documentar su ejecución mediante los Test Cases 7–10.

  - *Decision del revisor humano:* vacía

  - *Justificacion del revisor humano:* vacía

RECOMENDACIONES

- Completar la documentación de verificación con evidencias de los componentes avanzados.

- Corroborar visualmente que la migración conserve la identidad definida en el mockup.

DESICION FINAL SUGERIDA POR IA:

*request changes*

</details>

#### PR #56 — Coordinador / DevOps

<details>
<summary>Resultado de revisión</summary>

RESUMEN GENERAL DE LA PR

La PR actualiza el README con el alcance de las entregas, tecnologías y documentación; incorpora el mockup Bootstrap; añade a `plan.md` la sección 10.2, los criterios CA-15 a CA-17 y actualiza la identidad del sitio; y agrega la especificación de DevOps del Primer Parcial. Los cuatro commits siguen una secuencia razonable: primero se agrega la spec, luego el mockup y los cambios en README/plan, y finalmente se registra la contribución en el changelog.

La actualización del plan y la documentación de la migración a Bootstrap son pertinentes al rol. Sin embargo, el diff presentado conserva un enlace placeholder en el changelog y el mockup no evidencia la ubicación de los componentes HTML avanzados, aunque ambos puntos forman parte de la trazabilidad y de los criterios de aceptación escritos en la propia spec.

REQUISITOS

- Documentación del alcance del Primer Parcial en `plan.md`: CUMPLE. Se agrega la sección 10.2 y los criterios CA-15 a CA-17.
- Actualización del README con objetivos, tecnologías y enlaces a las entregas: CUMPLE. El enlace del mockup apunta al archivo agregado; la ruta mostrada como etiqueta es abreviada y no coincide literalmente con su ubicación.
- Mockup de Bootstrap con grilla, navegación, catálogo, filtros y Modal: CUMPLE PARCIALMENTE. El mockup muestra la grilla desktop/mobile, navbar, catálogo y Modal; no señala dónde se incorporan los componentes HTML avanzados, requisito explícito de aceptación de esta PR.
- Identidad visual y coherencia con la Actividad N°2: CUMPLE PARCIALMENTE. Se conserva una paleta visual coherente, pero la imagen del mockup por sí sola no permite verificar todos los estados de interacción descritos en la spec.
- Trazabilidad en `changelog.md`: NO CUMPLE en el diff revisado. La entrada identifica PR #56, pero el destino del enlace es `pull/NN` en vez de `pull/56`.
- Rama, issue y destino de integración: CUMPLE. La PR se trabaja desde `feature/coord-devops-update-figma-and-readme`, referencia la issue #54 y tiene como destino `develop`.
- Coherencia de los componentes HTML proyectados: CUMPLE PARCIALMENTE. La spec menciona iframe de Google Maps y `details`/`summary`, mientras que la implementación documentada posteriormente para el parcial utiliza `details`/`summary` y `datalist`; conviene mantener alineados el diseño aprobado y el alcance implementado.

BLOQUEANTES

HALLAZGO #1

archivo: `changelog.md`

linea:
12

Tipo de problema:
otro

Severidad:
media

Explicacion tecnica:
El enlace de la contribución apunta a `/pull/NN`, una ruta inexistente, por lo que no permite verificar la PR y rompe la trazabilidad exigida por RNF-05, CA-08 y CA-09.

Sugerencia de mejora:
Reemplazar `pull/NN` por `pull/56`.

Ejemplo de codigo corregido (si aplica):

```text
PR: [#56](https://github.com/dantebiondi666-prog/tienda-online/pull/56)
```

Decision del revisor humano:

Justificacion del revisor humano:

================

HALLAZGO #2

archivo: `docs/01-mockup/primer-parcial/disenio-bootstrap.png`

linea:
No aplica (requisito visual del artefacto).

Tipo de problema:
diseño

Severidad:
media

Explicacion tecnica:
La imagen presenta la grilla, la navegación, el catálogo y una referencia al Modal, pero no muestra ni señala la ubicación de los componentes HTML avanzados. La propia spec de la PR incluye como criterio que el mockup indique dónde van esos componentes, por lo que ese criterio no puede verificarse en el artefacto entregado.

Sugerencia de mejora:
Añadir al mockup una indicación visual de dónde se ubican los componentes HTML avanzados seleccionados y hacer coincidir esa selección con la spec del rol correspondiente.

Ejemplo de codigo corregido (si aplica):

Decision del revisor humano:

Justificacion del revisor humano:

================

RECOMENDACIONES

- Corregir en `plan.md` la ruta del mockup (`docs/01-mockup/disenio-bootstrap.png`) para que coincida con su ubicación efectiva (`docs/01-mockup/primer-parcial/disenio-bootstrap.png`); el mismo destino debería mantenerse en las referencias documentales relacionadas.
- Una vez agregado el callout del mockup, alinear en la spec los componentes HTML previstos con los finalmente implementados.
- Completar el checklist de aceptación de la PR con el estado real y evidencia de cada punto.

DESICION FINAL SUGERIDA POR IA:

request changes

</details>

#### Observaciones menores

- En el diff de `plan.md`, la ruta del mockup aparece como
  `docs/01-mockup/disenio-bootstrap.png` (líneas 162 y 224), pero el archivo
  está en `docs/01-mockup/primer-parcial/disenio-bootstrap.png`.
- La spec propone iframe de Google Maps y `details`/`summary`, mientras que la
  implementación documentada posteriormente para el parcial utiliza
  `details`/`summary` y `datalist`. Conviene mantener alineados el diseño
  aprobado y el alcance implementado.
- El checklist de aceptación de la spec permanece sin marcar en el diff; debe
  reflejarse el estado real de cada criterio y su evidencia.

**Nota sobre el alcance de esta revisión:** el resultado de la PR #56 es una
revisión retrospectiva del diff publicado. El enlace placeholder del changelog
se corrigió posteriormente en este documento y en `changelog.md`; las demás
observaciones se registran como resultado de revisión y no implican que se
hayan modificado los artefactos del mockup o el plan como parte de esta edición.

### 5.2 Decisiones del mockup

- Se usaron la grilla de 12 columnas y los breakpoints de Bootstrap para
  trasladar a distintos tamaños de pantalla el layout de catálogo, navegación
  y filtros.
- Se seleccionaron Carousel para destacar productos y Modal para consultar el
  detalle sin abandonar el catálogo; ambos están implementados y cubiertos por
  los TC7 y TC8.
- Para los componentes HTML avanzados se concretaron `<details>`/`<summary>`
  en preguntas frecuentes y `<datalist>` en el buscador. Esta selección se
  refleja en la implementación y en los TC9 y TC10.
- Se mantuvieron la paleta y las tipografías del sistema visual existente,
  aplicándolas a los componentes de Bootstrap.

### 5.3 Obstáculos y resolución

Las revisiones asistidas de las PRs del Primer Parcial detectaron los siguientes
obstáculos:

- **PR #60 — alcance incompleto en la etapa de migración:** al revisar la PR de
  Bootstrap se observó que todavía no incorporaba los componentes avanzados de
  Bootstrap ni los componentes HTML avanzados requeridos, y que solo estaba
  documentado el TC6. Se registró como un incumplimiento de esa PR en ese
  momento. El alcance se completó mediante las PRs de los roles correspondientes:
  [#62](https://github.com/dantebiondi666-prog/tienda-online/pull/62) agregó el
  Carousel y el Modal, y
  [#63](https://github.com/dantebiondi666-prog/tienda-online/pull/63) agregó
  `details`/`summary` y `datalist`; los TC7–TC10 documentan esas pruebas.

- **PR #62 — información incorrecta en el Modal:** la revisión encontró que la
  guía de talles estática mostraba talles que no correspondían a algunos
  productos, en particular al pantalón. El hallazgo se registró en el Issue
  [#64](https://github.com/dantebiondi666-prog/tienda-online/issues/64). La
  corrección eliminó la guía genérica incorrecta y mantuvo los talles propios
  del producto; además, se mejoró la navegación por teclado, el cierre con
  Escape y la devolución del foco al botón que abre el Modal. La corrección y su
  registro quedaron incluidos en la misma PR #62, bajo `[Fixed]` en el
  changelog.

- **PR #56 — trazabilidad y alineación documental:** la revisión detectó el
  enlace placeholder `pull/NN` en el changelog; ya fue reemplazado por el enlace
  real a [PR #56](https://github.com/dantebiondi666-prog/tienda-online/pull/56).
  También señaló diferencias entre algunas rutas del mockup documentadas en
  `plan.md` y su ubicación real, y que el mockup/spec inicial no señalaba los
  componentes HTML avanzados finalmente elegidos. La implementación posterior
  quedó registrada como `details`/`summary` y `datalist` en la PR #63 y los TC9
  y TC10. **Queda por alinear en `plan.md` la ruta del mockup** y revisar si se
  requiere actualizar el artefacto visual para que señale esos componentes;
  esta revisión no realizó esos cambios.

- **PR #63 — componentes HTML avanzados:** la revisión no encontró
  incumplimientos bloqueantes ni recomendaciones; los componentes, su
  documentación y las pruebas de TC9 y TC10 cumplieron el alcance revisado.

Por separado, durante las pruebas responsive de la migración se detectó una
regresión visual, registrada en el Issue
[#59](https://github.com/dantebiondi666-prog/tienda-online/issues/59). Se
corrigió y el retest de TC6 quedó documentado con resultado PASS en el changelog.
Los Request Changes de la Actividad N°2 y el backport hacia `develop` se
resolvieron mediante las PRs enlazadas en la Sección 1.1.

---

*Spec redactada antes de iniciar el desarrollo de esta tarea, conforme a la
metodología definida en `docs/02-prompts/sdd-decisions.md`.*