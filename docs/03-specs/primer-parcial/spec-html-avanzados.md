# Spec — Desarrollador de Componentes HTML Avanzados

**Rol:** Desarrollador de Componentes HTML Avanzados  
**Proyecto:** Tienda Online  
**Entrega:** Primer Parcial  
**Autor:** Dante Biondi  
**Rama:** `feature/dev-comp-html-avanzados-add-components`

---

## 1. Qué se va a hacer

Se incorporarán dos componentes HTML avanzados sobre la estructura actual de
`index.html`, manteniendo la identidad visual existente y preparando su
integración con la migración a Bootstrap correspondiente al Primer Parcial.

Los componentes seleccionados son:

1. `<details>` junto con `<summary>`, utilizados para incorporar una sección
   informativa de preguntas frecuentes vinculadas con la experiencia de la
   tienda, como envíos, cambios y consultas habituales.

2. `<datalist>`, asociado al campo de búsqueda que ya se encuentra en el
   `header`, para ofrecer sugerencias relacionadas con productos o categorías
   disponibles en la tienda.

### Integración de `<details>` y `<summary>`

Se agregará una nueva sección informativa dentro de `main`, ubicada de forma
coherente con las secciones ya existentes. Inicialmente se prevé incorporarla
entre la guía de talles y la sección de contacto.

La sección utilizará elementos `<details>` individuales y sus correspondientes
`<summary>` para organizar información que el usuario pueda consultar y
desplegar utilizando el comportamiento nativo del navegador.

El contenido deberá estar relacionado con la Tienda Online y utilizar textos
concretos, por ejemplo información sobre:

- envíos;
- cambios;
- talles;
- consultas frecuentes vinculadas con la compra.

El componente deberá mantener una estructura HTML semántica y funcionar sin
JavaScript personalizado.

### Integración de `<datalist>`

El `index.html` actual ya posee un campo:

`<input type="search">`

dentro del buscador del header.

Se incorporará un `<datalist>` asociado a este campo mediante el atributo
`list`, permitiendo mostrar sugerencias de búsqueda relacionadas con productos
o categorías existentes en la tienda.

Las opciones utilizadas deberán corresponder al contenido real del proyecto y
no incorporar categorías o productos que no formen parte de la página.

El uso del `datalist` complementará el campo de búsqueda actual utilizando
comportamiento HTML nativo. No se implementará todavía una búsqueda funcional
mediante JavaScript.

### Integración visual

Los componentes deberán mantener coherencia con:

- `css/styles.css`;
- `css/components.css`;
- `css/responsive.css`;
- el sistema visual definido en `plan.md`;
- `css/bootstrap-overrides.css`, una vez que este archivo sea incorporado por
  la migración a Bootstrap;
- el mockup actualizado de Bootstrap, una vez que esté disponible.

Se podrán realizar modificaciones mínimas sobre `index.html` y los archivos de
estilos necesarios para integrar visualmente los nuevos componentes.

No se modificará directamente el funcionamiento de otras secciones ni se
incorporará JavaScript personalizado para simular funcionalidades todavía no
implementadas.

Los dos componentes deberán poder utilizarse correctamente en desktop, tablet
y mobile.

---

## 2. Por qué se hace

La incorporación de estos componentes responde al requerimiento del Primer
Parcial de agregar al menos dos componentes HTML avanzados y adaptarlos a la
migración del proyecto hacia Bootstrap.

Además de cumplir con la consigna, los componentes agregan información y
controles útiles para la experiencia de una tienda online sin incorporar lógica
JavaScript que todavía no corresponde implementar.

### Relación con `plan.md`

No existe actualmente en `plan.md` un requerimiento funcional específico que
obligue a implementar un `datalist` o una sección de preguntas frecuentes, por
lo que no se les asignará artificialmente un código RF.

Sin embargo, ambos componentes se relacionan con distintos lineamientos,
requerimientos no funcionales y ampliaciones previstas en el plan.

#### `<details>` y `<summary>`

Su incorporación se relaciona principalmente con:

- **RNF-01 — Semántica y accesibilidad:** se utilizan elementos HTML nativos y
  semánticos para presentar información desplegable.
- **RNF-02 — Comprensibilidad:** la información se organiza en preguntas o
  títulos claros que permiten acceder fácilmente a su contenido.
- **RNF-03 — Evolución progresiva:** se amplía la estructura HTML sin requerir
  rehacer las secciones existentes.
- **RNF-04 — Mantenibilidad:** el nuevo contenido se incorpora mediante una
  estructura simple y reconocible.
- **RNF-08 — Diseño adaptable futuro:** el componente deberá mantenerse usable
  en diferentes tamaños de pantalla.

También se relaciona con **CA-11**, que establece mantener claridad,
legibilidad, navegación simple y baja sobrecarga visual.

#### `<datalist>`

El `datalist` complementará el buscador existente utilizando sugerencias
nativas de HTML.

`plan.md` contempla la búsqueda por texto dentro de las posibles ampliaciones
futuras del proyecto, aunque actualmente no existe un RF específico que
establezca su implementación funcional.

En este parcial se utilizará únicamente el comportamiento nativo del
`datalist`, sin implementar todavía la lógica real de búsqueda.

Su incorporación se relaciona principalmente con:

- **RNF-01 — Semántica y accesibilidad:** utilización de controles HTML
  correctamente asociados.
- **RNF-02 — Comprensibilidad:** las sugerencias pueden ayudar al usuario a
  identificar posibles términos de búsqueda.
- **RNF-03 — Evolución progresiva:** prepara el buscador existente para una
  futura funcionalidad más completa sin implementar JavaScript.
- **RNF-04 — Mantenibilidad:** la solución se mantiene dentro de la estructura
  HTML existente.
- **RNF-08 — Diseño adaptable futuro:** el control deberá continuar siendo
  usable en mobile, tablet y desktop.

### Criterios generales relacionados

La implementación deberá conservar además:

- **CA-02:** estructura HTML5 válida y semántica.
- **CA-08:** trazabilidad entre la implementación, la spec y la Pull Request.
- **CA-09:** registro de la contribución correspondiente en `changelog.md`.
- **CA-11:** claridad visual, legibilidad y baja sobrecarga.
- **CA-12:** coherencia con el sistema visual definido por el equipo.
- **CA-13:** adaptación correcta a mobile, tablet y desktop sin overflow
  horizontal.

---

## 3. Plan de testing

Cada componente tendrá su propio test case y será validado mediante Playwright
MCP contra:

`http://localhost:3000`

Los dispositivos mínimos a probar serán:

- iPhone 14 Pro;
- Samsung Galaxy S23;
- iPad Air;
- una vista desktop.

Los resultados se documentarán en:

- `docs/04-testing/test-case-9.md` — `<details>` y `<summary>`;
- `docs/04-testing/test-case-10.md` — `<datalist>`.

### Test Case 9 — `<details>` y `<summary>`

Se verificará:

- que la sección se renderice correctamente;
- que todos los elementos `<summary>` sean visibles y comprensibles;
- que cada elemento pueda abrirse y cerrarse mediante su comportamiento HTML
  nativo;
- que el contenido correspondiente aparezca al expandir cada elemento;
- que pueda utilizarse mediante teclado;
- que mantenga una estructura semántica y accesible;
- que la presentación sea coherente con Bootstrap y los estilos existentes;
- que se adapte correctamente a mobile, tablet y desktop;
- que no produzca overflow horizontal;
- que mantenga coherencia visual con el resto de la Tienda Online.

### Test Case 10 — `<datalist>`

Se verificará:

- que el `<datalist>` se encuentre correctamente asociado al campo de búsqueda;
- que el campo mantenga su funcionamiento como `input type="search"`;
- que las sugerencias definidas puedan ser presentadas por el navegador;
- que las opciones correspondan con contenido real de la tienda;
- que el usuario pueda ingresar texto manualmente aunque existan sugerencias;
- que el campo mantenga su label accesible;
- que la integración no afecte el layout actual del header;
- que el buscador se adapte correctamente a mobile, tablet y desktop;
- que no genere overflow horizontal;
- que mantenga coherencia visual con Bootstrap y con los estilos existentes.

### Registro y resolución de hallazgos

Los hallazgos relevantes encontrados durante las pruebas se registrarán como
Issues de tipo bug mediante GitHub MCP desde Copilot Agent Mode.

Cada bug que requiera una corrección deberá resolverse mediante una rama
`fix/` creada contra `develop`, siguiendo el flujo definido para el Primer
Parcial.

Las correcciones deberán quedar documentadas en `[Fixed]` dentro de
`changelog.md` y vinculadas con sus Issues y Pull Requests correspondientes.

---

## 4. Criterios de aceptación

### Planificación

- [ ] `spec-html-avanzados.md` existe en
      `docs/03-specs/primer-parcial/`.
- [ ] La spec fue commiteada antes de realizar cualquier implementación de los
      componentes HTML avanzados.
- [ ] El desarrollo se realiza desde
      `feature/dev-comp-html-avanzados-add-components`.
- [ ] Existe una Issue principal asociada a la tarea.

### Componentes HTML avanzados

- [ ] Se implementan al menos dos componentes HTML avanzados.
- [ ] Existe una sección funcional basada en `<details>` y `<summary>`.
- [ ] El contenido de `<details>` y `<summary>` es pertinente a la Tienda
      Online.
- [ ] Existe un `<datalist>` correctamente asociado al buscador existente.
- [ ] Las opciones del `datalist` corresponden con productos o categorías
      reales del proyecto.
- [ ] Los componentes funcionan mediante comportamiento HTML nativo.
- [ ] No se agrega JavaScript personalizado para simular funcionalidades fuera
      del alcance de esta tarea.
- [ ] La estructura HTML se mantiene semántica y accesible.

### Integración visual y responsive

- [ ] Los nuevos componentes mantienen coherencia con el sistema visual de
      `plan.md`.
- [ ] Los componentes se integran correctamente con Bootstrap una vez
      incorporada la migración.
- [ ] Las customizaciones necesarias respetan
      `css/bootstrap-overrides.css` cuando dicho archivo se encuentre
      disponible.
- [ ] Los estilos existentes no se rompen por la incorporación de los nuevos
      componentes.
- [ ] Los componentes funcionan correctamente en mobile.
- [ ] Los componentes funcionan correctamente en tablet.
- [ ] Los componentes funcionan correctamente en desktop.
- [ ] No existe overflow horizontal provocado por los nuevos componentes.

### Testing

- [ ] `docs/04-testing/test-case-9.md` documenta las pruebas de
      `<details>/<summary>`.
- [ ] `docs/04-testing/test-case-10.md` documenta las pruebas de `<datalist>`.
- [ ] Ambos componentes fueron probados con Playwright MCP.
- [ ] Se probaron iPhone 14 Pro, Samsung Galaxy S23 e iPad Air.
- [ ] Se realizó también una prueba en vista desktop.
- [ ] Los test cases contienen la evidencia solicitada por la consigna.
- [ ] Los hallazgos relevantes fueron registrados mediante GitHub MCP.
- [ ] Los bugs encontrados fueron corregidos mediante ramas `fix/` contra
      `develop`.

### Integración y entrega

- [ ] La Issue principal queda vinculada a la Pull Request.
- [ ] Se crea una Pull Request desde
      `feature/dev-comp-html-avanzados-add-components` hacia `develop`.
- [ ] La PR es revisada y aprobada por otro integrante antes del merge.
- [ ] `changelog.md` contiene la entrada correspondiente con link a la PR,
      Issues relacionadas y resumen del aporte.
- [ ] Las Issues correspondientes se cierran después del merge.

---

## 5. Evidencia a completar al cierre

> Esta sección se completará después de realizar la implementación y las
> pruebas. No deben registrarse resultados, hallazgos o correcciones que
> todavía no hayan ocurrido.

### Herramientas utilizadas

- **Entorno:** Visual Studio Code.
- **Implementación / asistencia:** [Completar al cierre]
- **Testing:** Playwright MCP.
- **Gestión de bugs:** GitHub MCP.
- **Modelo / herramienta de IA:** [Completar al cierre]

### Contexto proporcionado

- `docs/03-specs/primer-parcial/spec-html-avanzados.md`
- `plan.md`
- `index.html`
- `css/styles.css`
- `css/components.css`
- `css/responsive.css`
- `css/bootstrap-overrides.css`, una vez disponible
- mockup actualizado de Bootstrap, una vez disponible
- consigna del Primer Parcial

### Prompt exacto utilizado

```text
[Completar al momento de realizar la implementación y conservar exactamente
el prompt utilizado.]