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

- [x] `spec-html-avanzados.md` existe en
      `docs/03-specs/primer-parcial/`.
- [x] La spec fue commiteada antes de realizar cualquier implementación de los
      componentes HTML avanzados.
- [x] El desarrollo se realiza desde
      `feature/dev-comp-html-avanzados-add-components`.
- [x] Existe una Issue principal asociada a la tarea.

### Componentes HTML avanzados

- [x] Se implementan al menos dos componentes HTML avanzados.
- [x] Existe una sección funcional basada en `<details>` y `<summary>`.
- [x] El contenido de `<details>` y `<summary>` es pertinente a la Tienda
      Online.
- [x] Existe un `<datalist>` correctamente asociado al buscador existente.
- [x] Las opciones del `datalist` corresponden con productos o categorías
      reales del proyecto.
- [x] Los componentes funcionan mediante comportamiento HTML nativo.
- [x] No se agrega JavaScript personalizado para simular funcionalidades fuera
      del alcance de esta tarea.
- [x] La estructura HTML se mantiene semántica y accesible.

### Integración visual y responsive

- [x] Los nuevos componentes mantienen coherencia con el sistema visual de
      `plan.md`.
- [x] Los componentes se integran correctamente con Bootstrap.
- [x] La integración respeta `css/bootstrap-overrides.css` sin requerir
      modificaciones adicionales sobre dicho archivo.
- [x] Se incorporaron los estilos necesarios en `css/components.css` para
      mantener la coherencia visual de la sección de preguntas frecuentes.
- [x] Los estilos existentes no se rompen por la incorporación de los nuevos
      componentes.
- [x] Los componentes funcionan correctamente en mobile.
- [x] Los componentes funcionan correctamente en tablet.
- [x] Los componentes funcionan correctamente en desktop.
- [x] No existe overflow horizontal provocado por los nuevos componentes.

### Testing

- [x] `docs/04-testing/test-case-9.md` documenta las pruebas de
      `<details>/<summary>`.
- [x] `docs/04-testing/test-case-10.md` documenta las pruebas de `<datalist>`.
- [x] Ambos componentes fueron probados con Playwright MCP.
- [x] Se probaron iPhone 14 Pro, Samsung Galaxy S23 e iPad Air.
- [x] Se realizó también una prueba en vista desktop.
- [x] Los test cases contienen la evidencia solicitada por la consigna.
- [x] No se detectaron hallazgos relevantes que requirieran la creación de
      Issues de tipo bug mediante GitHub MCP.
- [x] No fue necesario crear ramas `fix/` debido a que los tests finales no
      detectaron bugs que requirieran corrección.

### Integración y entrega

- [x] La Issue principal queda vinculada a la Pull Request.
- [x] Se crea una Pull Request desde
      `feature/dev-comp-html-avanzados-add-components` hacia `develop`.
- [x] La PR es revisada y aprobada por otro integrante antes del merge.
- [x] `changelog.md` contiene la entrada correspondiente con link a la PR,
      Issues relacionadas y resumen del aporte.
- [x] Las Issues correspondientes se cierran después del merge.

---

## 5. Evidencia al cierre

### Herramientas utilizadas

- **Entorno:** Visual Studio Code.
- **Implementación / asistencia:** ChatGPT.
- **Testing:** Playwright MCP desde GitHub Copilot Agent Mode.
- **Gestión de bugs:** GitHub MCP desde GitHub Copilot Agent Mode.
- **Modelo / herramienta de IA:** ChatGPT y GitHub Copilot.

GitHub MCP fue configurado y verificado antes de comenzar los tests. Durante
los test cases no fue necesario utilizarlo para crear Issues de tipo bug debido
a que no se detectaron errores relevantes en los componentes implementados.

### Contexto utilizado

Para realizar la implementación y verificar su integración se utilizaron como
referencia:

- `docs/03-specs/primer-parcial/spec-html-avanzados.md`;
- `plan.md`;
- `index.html`;
- `css/styles.css`;
- `css/components.css`;
- `css/responsive.css`;
- `css/bootstrap-overrides.css`;
- la integración de Bootstrap realizada previamente por el equipo;
- la consigna correspondiente al Primer Parcial.

La implementación se realizó de forma incremental con asistencia de ChatGPT.
Los prompts formales utilizados para la validación de los componentes fueron
ejecutados desde GitHub Copilot Agent Mode utilizando Playwright MCP.

### Prompt exacto — Test Case 9

```text
Usá Playwright MCP para ejecutar el Test Case 9 sobre
http://localhost:3000.

El objetivo es validar la implementación del componente HTML avanzado
<details> + <summary> de la sección "Preguntas frecuentes".

No modifiques ningún archivo del proyecto.
No crees Issues en GitHub todavía.
Si encontrás un bug, informámelo primero y esperá mi confirmación antes de
crear cualquier Issue.

Probá los siguientes viewports:

- Desktop: 1920x1080
- iPad Air: 820x1180
- iPhone 14 Pro: 390x844
- Samsung Galaxy S23: 412x915

En cada viewport verificá:

1. Que la sección "Preguntas frecuentes" se renderice correctamente.
2. Que existan los 3 elementos <details> y sus 3 <summary>.
3. Que cada <summary> sea visible y legible.
4. Que cada <details> pueda abrirse y cerrarse correctamente.
5. Que al abrirlo aparezca su contenido correspondiente.
6. Que el componente pueda operarse mediante teclado:
   - navegación con Tab;
   - apertura/cierre con Enter o Space cuando corresponda.
7. Que no haya elementos cortados, superpuestos o fuera de pantalla.
8. Que no exista overflow horizontal global.
   Verificá comparando document.documentElement.scrollWidth con
   document.documentElement.clientWidth.
9. Que la sección mantenga una presentación coherente con el resto del sitio
   y con la integración actual de Bootstrap.
10. Registrá cualquier error de consola relevante para este componente.

No consideres el 404 de favicon.ico como fallo del Test Case, ya que no afecta
la funcionalidad evaluada.

Al finalizar entregame:

- resultado por viewport: PASS o FAIL;
- detalle breve de cada comprobación;
- cualquier diferencia encontrada entre viewports;
- bugs o hallazgos relevantes;
- resultado general del TC9.

No modifiques código ni documentación.
```

### Resultado obtenido — Test Case 9

El Test Case 9 obtuvo inicialmente resultado **PASS** en los cuatro viewports
evaluados.

Se verificó que:

- existen tres elementos `<details>` con sus correspondientes `<summary>`;
- todos pueden abrirse y cerrarse mediante su comportamiento HTML nativo;
- los componentes pueden utilizarse mediante teclado;
- los textos se muestran correctamente al expandir cada elemento;
- no existen elementos cortados o superpuestos;
- no se detecta overflow horizontal;
- la sección mantiene una presentación coherente con el resto del sitio.

Los resultados fueron documentados en:

`docs/04-testing/test-case-9.md`

con las capturas correspondientes dentro de:

`docs/04-testing/capturas/tc-9/`

### Ajuste visual y retest del Test Case 9

Luego del primer test se incorporaron estilos específicos en
`css/components.css` para mejorar la integración visual de la sección de
preguntas frecuentes.

Se agregaron:

- separación mediante bordes entre los elementos `<details>`;
- espaciado interno;
- color y peso tipográfico para `<summary>`;
- `cursor: pointer`;
- estado visual para `hover` y `focus-visible`;
- separación y color para el contenido desplegado.

Después de esta modificación se realizó un retest con Playwright MCP.

En una primera ejecución del retest se informó un `FAIL` porque se evaluaron
propiedades como `background-color`, `border-radius`, `padding` y `display` del
elemento `<summary>`, aunque esas propiedades no habían sido modificadas por la
implementación.

Se revisó el criterio de prueba y se ejecutó nuevamente validando únicamente
los estilos realmente declarados en `components.css`.

El retest final obtuvo resultado **PASS** en:

- Desktop 1920x1080;
- iPad Air 820x1180;
- iPhone 14 Pro 390x844;
- Samsung Galaxy S23 412x915.

Se confirmó además que el comportamiento nativo de `<summary>` se mantiene,
incluyendo su `display: list-item`.

No se detectó ningún bug en la implementación.

### Prompt exacto — Test Case 10

```text
Usá Playwright MCP para ejecutar el Test Case 10 sobre
http://localhost:3000.

El objetivo es validar la implementación del componente HTML avanzado
<datalist> asociado al buscador principal de la tienda.

No modifiques ningún archivo del proyecto.
No crees Issues en GitHub todavía.
Si encontrás un bug, informámelo primero y esperá mi confirmación antes de
crear cualquier Issue.

Probá los siguientes viewports:

- Desktop: 1920x1080
- iPad Air: 820x1180
- iPhone 14 Pro: 390x844
- Samsung Galaxy S23: 412x915

En cada viewport verificá:

1. Que exista el input de búsqueda con id="busqueda".
2. Que el input mantenga type="search".
3. Que el input tenga el atributo:
   list="sugerencias-busqueda".
4. Que exista un <datalist> con id="sugerencias-busqueda".
5. Que el datalist contenga exactamente estas opciones:
   - Remera
   - Pantalón
   - Campera
   - Mujer
   - Hombre
   - Niños
6. Que sea posible escribir normalmente dentro del buscador.
7. Que el campo permita escribir también valores que no estén incluidos
   en las sugerencias del datalist.
8. Que la asociación entre el input y el datalist sea correcta.
9. Que el label del buscador siga asociado correctamente al input y sea
   accesible.
10. Que la incorporación del datalist no altere el diseño del header.
11. Que no haya elementos cortados, superpuestos o fuera de pantalla.
12. Que no exista overflow horizontal global.
    Verificá comparando document.documentElement.scrollWidth con
    document.documentElement.clientWidth.
13. Que el buscador continúe siendo usable mediante teclado.
14. Registrá cualquier error de consola relevante para este componente.

Tené en cuenta que la interfaz visual de sugerencias de <datalist> es
controlada de forma nativa por el navegador. No consideres un fallo que
el desplegable tenga una apariencia o posición diferente según el navegador,
siempre que la asociación input-datalist y las opciones funcionen correctamente.

No consideres el 404 de favicon.ico como fallo del Test Case, ya que no está
relacionado con el componente evaluado.

Al finalizar entregame:

- resultado por viewport: PASS o FAIL;
- cantidad y valores de las opciones encontradas;
- confirmación de la asociación entre el input y el datalist;
- resultado de escritura de un valor incluido en las sugerencias;
- resultado de escritura de un valor libre que no esté en las sugerencias;
- resultado de accesibilidad básica mediante teclado;
- valores de scrollWidth y clientWidth por viewport;
- cualquier diferencia encontrada entre viewports;
- bugs o hallazgos relevantes;
- resultado general del TC10.

No modifiques código ni documentación.
```

### Resultado obtenido — Test Case 10

El Test Case 10 obtuvo resultado **PASS** en los cuatro viewports evaluados.

Se verificó que:

- existe el input `#busqueda` y mantiene `type="search"`;
- el atributo `list="sugerencias-busqueda"` se encuentra correctamente
  configurado;
- existe el `<datalist id="sugerencias-busqueda">`;
- se encuentran las seis opciones esperadas: `Remera`, `Pantalón`, `Campera`,
  `Mujer`, `Hombre` y `Niños`;
- el usuario puede ingresar tanto valores sugeridos como texto libre;
- el `<label>` permanece correctamente asociado al buscador;
- el campo puede utilizarse mediante teclado;
- la incorporación del componente no altera el layout del header;
- no existe overflow horizontal en ninguno de los viewports evaluados.

Los resultados fueron documentados en:

`docs/04-testing/test-case-10.md`

con sus capturas dentro de:

`docs/04-testing/capturas/tc-10/`

### Ajustes manuales realizados

La estructura de los componentes se incorporó directamente en `index.html`,
manteniendo el comportamiento nativo de HTML y sin agregar JavaScript
personalizado.

El `<datalist>` se vinculó al campo de búsqueda existente mediante el atributo
`list`, evitando reemplazar o duplicar el buscador que ya formaba parte del
header.

La sección de preguntas frecuentes se ubicó entre la guía de talles y la
sección de contacto, manteniendo el orden general de contenido previsto en la
planificación.

Luego del primer test de `<details>` y `<summary>`, se agregaron estilos
específicos en `css/components.css` para mejorar su integración con el sistema
visual existente.

No fue necesario realizar modificaciones específicas en
`css/bootstrap-overrides.css`, ya que los componentes HTML nativos se integraron
correctamente con la estructura Bootstrap existente.

### Hallazgos con Playwright MCP

Los resultados finales fueron:

- **Test Case 9 — `<details>/<summary>`:** PASS.
- **Retest Test Case 9 posterior al ajuste CSS:** PASS.
- **Test Case 10 — `<datalist>`:** PASS.

No se detectaron bugs funcionales o responsive que requirieran la creación de
Issues mediante GitHub MCP.

Durante las pruebas se observó una respuesta `404` correspondiente a
`favicon.ico`. Este recurso faltante no está relacionado con los componentes
HTML avanzados implementados y no afecta su funcionamiento, por lo que no fue
registrado como bug de esta tarea.

Tampoco fue necesario crear ramas `fix/`, ya que no quedaron hallazgos
relevantes pendientes de corrección.

### Resultado final

Los dos componentes HTML avanzados planificados fueron implementados y
validados correctamente:

1. `<details>` + `<summary>` para la sección de preguntas frecuentes.
2. `<datalist>` asociado al buscador principal.

Ambos mantienen comportamiento HTML nativo, se integran con Bootstrap y con
los estilos existentes y funcionan correctamente en desktop, tablet y mobile
sin generar overflow horizontal.

Los Test Cases 9 y 10 quedaron documentados junto con sus respectivas
evidencias.