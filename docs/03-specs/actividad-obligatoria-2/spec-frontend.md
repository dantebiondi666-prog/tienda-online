# Spec — Desarrollador Frontend/CSS

**Rol:** Desarrollador Frontend/CSS  
**Proyecto:** Tienda Online  
**Entrega:** Actividad Obligatoria N.º 2  
**Autor:** Dante Biondi  
**Rama:** `feature/dev-frontend-css-add-styles`

---

## 1. Qué se va a hacer

Se implementará el diseño visual de la Tienda Online sobre la estructura HTML5 desarrollada en la Actividad Obligatoria N.º 1, tomando como referencia principal el mockup actualizado en Figma y el sistema de diseño definido en `plan.md`.

La tarea consiste en:

- Crear `css/styles.css`, que contendrá:
  - variables CSS mediante `:root`;
  - reset y estilos globales;
  - tipografías;
  - colores;
  - estilos generales;
  - layout base de la página.
- Crear `css/components.css`, destinado a los componentes reutilizables y sus estados visuales.
- Vincular correctamente las hojas de estilo con `index.html`.
- Aplicar la paleta definida en `plan.md`:
  - verde salvia `#5B6F55`;
  - beige arena `#E4D8C3`;
  - dorado apagado `#B08D57`;
  - gris cálido `#8B8579`;
  - crema `#F7F3EC`;
  - carbón `#2E2B26`.
- Utilizar **Playfair Display** para los encabezados principales y **Work Sans** para textos, labels, botones y demás contenido, respetando las jerarquías establecidas.
- Estilizar los elementos existentes en `index.html`, principalmente:
  - header y marca de la tienda;
  - buscador;
  - navegación principal;
  - filtros;
  - catálogo;
  - tarjetas de productos;
  - guía de talles;
  - formulario de contacto;
  - footer.
- Aplicar estados visuales `hover` y `focus` donde corresponda, tomando los valores definitivos del mockup/Figma.
- Utilizar selectores CSS, herencia y especificidad de manera adecuada.
- Aplicar explícitamente el box model mediante propiedades como `margin`, `padding` y `border`.
- Utilizar correctamente el comportamiento de elementos en línea y en bloque según las necesidades del diseño.
- Mantener los estilos organizados y agregar comentarios cuando sea necesario explicar una decisión técnica.

Los valores exactos de espaciados, tamaños y estados de interacción que todavía no estén definidos en `plan.md` se tomarán del mockup actualizado en Figma y no se inventarán durante la implementación.

La implementación principal de `responsive.css`, las media queries y la adaptación específica a mobile, tablet y desktop corresponde al rol **Especialista en Responsive Design**. Este rol deberá coordinar posteriormente con Frontend para realizar las pruebas de integración.

Tampoco se implementará JavaScript ni lógica funcional para carrito, filtros, búsqueda o selección de talles. Estas funcionalidades continúan fuera del alcance operativo de esta entrega.

---

## 2. Por qué se hace

Esta tarea permite transformar la estructura semántica construida en la Actividad Obligatoria N.º 1 en una interfaz visual coherente con el diseño definido por el equipo para la Actividad N.º 2.

La separación entre HTML y CSS permite mantener el contenido y la presentación organizados de forma independiente, facilitando la mantenibilidad y la evolución posterior del proyecto.

La implementación se relaciona principalmente con los siguientes requerimientos y criterios de `plan.md`:

### Requerimientos funcionales relacionados

- **RF-01:** representar visualmente el catálogo de prendas con nombre, imagen, categoría, talles y precio.
- **RF-03:** presentar de forma clara la navegación entre categorías.
- **RF-04:** mantener enlaces y controles de navegación comprensibles.
- **RF-05:** mostrar visualmente los talles disponibles.
- **RF-13, RF-14 y RF-15:** preparar visualmente los controles destinados a futuros filtros por tipo, talle y estilo.
- **RF-16:** representar de forma clara la opción para restablecer filtros.
- **RF-17:** presentar correctamente el formulario asociado a la tienda.

Estas funcionalidades ya se encuentran representadas en la estructura HTML; en esta tarea se trabajará únicamente su presentación visual, sin incorporar comportamiento mediante JavaScript.

### Requerimientos no funcionales relacionados

- **RNF-02 — Comprensibilidad:** mantener una presentación clara de textos, títulos, enlaces y controles.
- **RNF-03 — Evolución progresiva:** incorporar CSS sin rehacer la estructura HTML5 existente.
- **RNF-04 — Mantenibilidad:** organizar los estilos en archivos separados por responsabilidad.
- **RNF-05 — Trazabilidad:** mantener esta tarea vinculada a su spec, Issue, PR y `changelog.md`.
- **RNF-06 — Colaboración:** trabajar desde una rama `feature` y realizar la integración mediante Pull Request.
- **RNF-08 — Diseño adaptable:** dejar los estilos base preparados para la posterior incorporación del diseño responsive.

### Criterios de aceptación relacionados

- **CA-11:** mantener claridad, legibilidad, navegación simple y baja sobrecarga visual.
- **CA-12:** aplicar de forma coherente en todo el sitio el sistema de diseño definido para la Actividad N.º 2.
- **CA-08:** permitir que la PR pueda revisarse contra esta spec y los requerimientos de `plan.md`.
- **CA-09:** registrar el aporte y la PR correspondiente en `changelog.md`.

El criterio **CA-13**, relacionado con la adaptación completa a mobile, tablet y desktop sin overflow horizontal, se verificará principalmente junto al Especialista en Responsive Design.

---

## 3. Flujo de trabajo con IA y Figma MCP

Una vez redactada y commiteada esta especificación, se seguirá el siguiente flujo:

1. Abrir GitHub Copilot en **modo Agente** desde VS Code.
2. Utilizar el servidor **MCP de Figma**.
3. Proporcionar como contexto:
   - esta `spec-frontend.md`;
   - el proyecto actual;
   - `plan.md`;
   - `index.html`;
   - el enlace al archivo Figma actualizado de la Actividad N.º 2.
4. Solicitar a Copilot que analice el mockup y extraiga o proponga los estilos correspondientes a:
   - variables CSS;
   - colores;
   - tipografías;
   - espaciados;
   - layout base;
   - componentes;
   - estados visuales.
5. Revisar el resultado generado y compararlo con el mockup, `plan.md` y esta especificación.
6. No aceptar automáticamente el código generado por IA.
7. Realizar manualmente las correcciones necesarias para mantener fidelidad con el diseño y cumplir los requisitos técnicos de la actividad.
8. Coordinar posteriormente pruebas de integración con el Especialista en Responsive Design y el QA Tester.
9. Al finalizar la tarea, completar la sección **Evidencia a completar al cierre** de esta spec.

---

## 4. Criterios de aceptación

### Spec y flujo de trabajo

- [x] `spec-frontend.md` fue creada en `docs/03-specs/actividad-obligatoria-2/`.
- [x] La spec fue commiteada antes de crear o modificar cualquier archivo CSS correspondiente a esta tarea.
- [x] El desarrollo se realiza desde `feature/dev-frontend-css-add-styles`.
- [x] Se utiliza GitHub Copilot Agent junto con Figma MCP tomando como referencia el mockup actualizado.
- [x] El resultado generado mediante IA es revisado y ajustado manualmente.

### Archivos CSS

- [x] Existe `css/styles.css`.
- [x] Existe `css/components.css`.
- [x] Ambos archivos están correctamente vinculados desde `index.html`.
- [x] `css/styles.css` contiene variables CSS definidas mediante `:root`.
- [x] `css/styles.css` contiene reset y estilos globales.
- [x] `css/styles.css` contiene tipografías, colores y layout base.
- [x] `css/components.css` contiene los estilos correspondientes a componentes reutilizables.

### Sistema visual

- [x] Los colores utilizados corresponden al sistema de diseño definido en `plan.md` y el mockup.
- [x] Los encabezados utilizan Playfair Display según la jerarquía definida.
- [x] Los textos generales, labels y botones utilizan Work Sans.
- [x] El diseño mantiene una paleta reducida y coherente.
- [x] La página mantiene claridad visual y evita sobrecarga de información.
- [x] Los espaciados y tamaños implementados son coherentes con el mockup actualizado.

### Componentes

- [x] El header y la marca poseen estilos coherentes con el mockup.
- [x] El buscador está estilizado.
- [x] La navegación principal está estilizada.
- [x] La sección de filtros está estilizada.
- [x] El catálogo posee un layout base coherente con el mockup.
- [x] Las tarjetas de productos están estilizadas.
- [x] La guía de talles está estilizada.
- [x] El formulario de contacto está estilizado.
- [x] El footer mantiene coherencia con el resto del sistema visual.
- [x] Los controles correspondientes incluyen estados `hover` y `focus` cuando corresponde.

### Requisitos técnicos de CSS

- [x] Se utilizan selectores CSS adecuados para los distintos elementos.
- [x] Se aprovecha la herencia donde resulte apropiado.
- [x] La especificidad se mantiene controlada y no genera conflictos innecesarios.
- [x] Se aplica el box model mediante `margin`, `padding` y `border`.
- [x] Se utilizan correctamente elementos y comportamientos inline y block cuando corresponde.
- [x] El código CSS está organizado y contiene comentarios donde una decisión técnica requiere explicación.
- [x] No se incorpora JavaScript nuevo.
- [x] No se implementan en esta rama las media queries ni el responsive completo correspondientes al rol Especialista en Responsive Design.

### Integración y entrega

- [x] Se realizan pruebas de integración junto al Especialista en Responsive Design.
- [x] Los bugs correspondientes a Frontend reportados por QA son resueltos antes del merge a `develop`.
- [x] Los Issues de bugs corregidos quedan vinculados a la PR correspondiente.
- [x] Existe una Issue vinculada a la tarea principal.
- [x] Se crea una Pull Request desde `feature/dev-frontend-css-add-styles` hacia `develop`.
- [x] La PR utiliza el template definido por el equipo.
- [x] `changelog.md` contiene la entrada correspondiente con link a la PR y resumen del aporte.
- [x] La Issue principal se cierra después del merge.

---

## 5. Evidencia a completar al cierre

> Esta sección se completará una vez finalizada la implementación. No corresponde completarla antes de ejecutar el flujo con Figma MCP y GitHub Copilot Agent.

### Herramientas utilizadas

- **Modelo / herramienta:** GitHub Copilot en modo Agente.
- **Servidor MCP:** Figma MCP.
- **Entorno:** Visual Studio Code + GitHub Copilot Agent.

### Contexto proporcionado al agente

- `docs/03-specs/actividad-obligatoria-2/spec-frontend.md`
- `plan.md`
- `index.html`
- proyecto actual
- enlace al Figma actualizado de la Actividad Obligatoria N.º 2

### Prompt exacto utilizado

```text
Actuá como Desarrollador Frontend/CSS del proyecto Tienda Online para la
Actividad Obligatoria N.º 2 de Programación Web I.

Usá como contexto obligatorio:
- `docs/03-specs/actividad-obligatoria-2/spec-frontend.md`
- `plan.md`
- `index.html`
- el archivo Figma actualizado accesible mediante Figma MCP:
  https://www.figma.com/board/boi5W7q2aUFtEtuo8al7dY/E-commerce-dise%C3%B1o-inicial?node-id=11-29&t=T4j3hsvIoAFLkWTN-1

Antes de escribir código, analizá el Figma mediante MCP y contrastalo con
`plan.md` y `spec-frontend.md`.

Si no podés acceder correctamente al Figma mediante MCP, detené la tarea y
avisame. No inventes el diseño ni simules haber usado Figma MCP.

Luego implementá únicamente el alcance correspondiente al rol Frontend/CSS:

1. Crear `css/styles.css` con:
   - variables CSS en `:root`;
   - reset y estilos globales;
   - tipografías y colores;
   - layout base;
   - estilos generales coherentes con el sistema visual de `plan.md` y Figma.

2. Crear `css/components.css` con los estilos de:
   - header y marca;
   - buscador;
   - navegación;
   - filtros;
   - catálogo;
   - cards de productos;
   - guía de talles;
   - formulario de contacto;
   - footer;
   - estados `hover` y `focus` donde corresponda.

3. Vincular ambos archivos CSS en `index.html` si todavía no están vinculados,
cargando primero `styles.css` y después `components.css`.

Requisitos técnicos:
- respetar la paleta y tipografías definidas en `plan.md`;
- mantener fidelidad con el diseño de Figma;
- utilizar correctamente selectores, herencia y especificidad;
- aplicar box model mediante margin, padding y border;
- mantener el código organizado y mantenible;
- agregar comentarios solo donde expliquen decisiones técnicas relevantes.

IMPORTANTE:
- No crear ni modificar `responsive.css`.
- No agregar media queries.
- No implementar todavía el responsive mobile/tablet/desktop.
- No agregar JavaScript.
- No implementar funcionalidad real de filtros, búsqueda, carrito o talles.
- No modificar contenido HTML salvo cambios mínimos necesarios para vincular
  los CSS o aplicar clases/estructura estrictamente necesarias para el estilado.
- No hacer commit ni push.

Si Figma MCP no permite obtener algún valor exacto de espaciado, tamaño o estado,
no lo presentes como dato extraído de Figma. Si necesitás inferir un valor para
completar el CSS, usá una opción razonable y al final listala como
"decisión inferida para revisión manual".

Al finalizar:
1. indicá qué archivos creaste o modificaste;
2. resumí las decisiones de estilo principales;
3. indicá cualquier diferencia entre Figma, `plan.md` e `index.html`;
4. listá las decisiones inferidas que debamos revisar manualmente.

No modifiques todavía `spec-frontend.md`; la evidencia del resultado y los
ajustes manuales se completará después de que revisemos la implementación.
```

### Resultado obtenido

GitHub Copilot Agent utilizó como contexto `spec-frontend.md`, `plan.md`,
`index.html` y el mockup actualizado mediante Figma MCP.

Como resultado:

- creó `css/styles.css`;
- creó `css/components.css`;
- vinculó ambas hojas de estilo desde `index.html`;
- definió variables CSS para colores, tipografías, espaciados, radios y sombras;
- incorporó reset y estilos globales;
- aplicó las tipografías Playfair Display y Work Sans;
- generó el layout base de la página;
- estilizó header, buscador, navegación, filtros, catálogo, tarjetas de
  productos, guía de talles, formulario de contacto y footer;
- incorporó estados `hover` y `focus-visible`;
- utilizó selectores, herencia, especificidad, box model y distintos valores
  de `display` según las necesidades de los componentes.

No se generó `responsive.css`, no se agregaron media queries ni se incorporó
JavaScript, respetando el alcance definido para el rol Frontend/CSS.

### Partes aceptadas del resultado

Se mantuvo la mayor parte de la estructura propuesta por Copilot, especialmente:

- la organización separada entre `styles.css` y `components.css`;
- las variables CSS definidas mediante `:root`;
- el reset y los estilos globales;
- la paleta y tipografías definidas en `plan.md`;
- el layout general basado en Flexbox y Grid;
- los estilos del área de filtros y del catálogo;
- la estructura visual de las tarjetas de productos;
- los estilos de la guía de talles y del formulario de contacto;
- los estados `hover` y `focus-visible`;
- el uso de selectores específicos sin modificar innecesariamente el HTML;
- la ausencia de media queries, JavaScript y comportamiento interactivo,
  manteniendo esos aspectos fuera del alcance de este rol.

### Ajustes manuales realizados

Luego de comparar el resultado generado con el mockup y revisar visualmente la
página en el navegador, se realizaron los siguientes ajustes manuales:

- se reemplazó el color hexadecimal aislado utilizado en el borde de la
  navegación por la variable `var(--color-sage)`, para mantener consistencia
  con el sistema de diseño;
- se modificó el fondo del área de imagen de las tarjetas de productos de
  `var(--color-gold)` a `var(--color-sand)`;
- se redujo la altura del `textarea` del formulario de contacto para acercarlo
  a las proporciones del mockup;
- se agregó el contenedor `.header-top` en `index.html` para separar visualmente
  la marca y el buscador de la navegación principal;
- se alineó el buscador hacia el extremo derecho del header;
- se separó visualmente la barra de navegación del bloque superior del header,
  manteniendo ambos con el mismo ancho;
- se redujo el espacio vertical de la sección "Categorías destacadas";
- se reorganizaron las categorías en una disposición horizontal;
- se agregaron estados visuales para los enlaces de categorías manteniendo
  coherencia con el resto del sitio.
- a partir del testing de accesibilidad realizado por QA con Playwright MCP y
  axe-core 4.10.2, se corrigieron problemas de contraste de color detectados
  en textos sobre fondos claros;
- los textos que utilizaban `--color-warm-gray` fueron reemplazados por
  `--color-charcoal` en los componentes afectados;
- los textos de acento que utilizaban `--color-gold` se ajustaron a
  `--color-sage` cuando correspondía, manteniendo el dorado para detalles
  visuales y decorativos;
- se ajustó también el color heredado por el footer para mejorar su contraste.

### Motivo de los ajustes manuales

Los ajustes se realizaron para mejorar la fidelidad con el mockup actualizado,
mantener consistencia con las variables y colores definidos en `plan.md` y
mejorar la jerarquía visual de algunos sectores.

También se buscó reducir espacios innecesarios, aprovechar mejor el ancho
disponible y mantener el CSS organizado y mantenible.

Las modificaciones sobre `index.html` fueron mínimas y se limitaron a agregar
una estructura necesaria para aplicar correctamente los estilos del header,
sin modificar el contenido ni incorporar nuevas funcionalidades.
Además, se realizaron correcciones de accesibilidad a partir de un issue
reportado por QA. El análisis con axe-core detectó incumplimientos del criterio
WCAG 1.4.3 (nivel AA) por contraste insuficiente en distintos textos de la
interfaz. Se modificaron únicamente los usos problemáticos de los colores,
manteniendo la paleta definida por el equipo.

---

### Pruebas de integración realizadas

Se realizó una primera verificación manual local de la implementación Frontend
y posteriormente QA ejecutó el Momento 1 de testing sobre la rama
`feature/dev-frontend-css-add-styles` mediante Playwright MCP.

Durante las pruebas de accesibilidad con axe-core 4.10.2 se detectó una
violación de la regla `color-contrast`, con impacto `serious`, asociada al
criterio WCAG 1.4.3 nivel AA. El hallazgo afectaba textos de navegación,
filtros, productos, tabla, contacto y footer.

A partir del issue generado por QA se ajustaron los colores de texto en
`styles.css` y `components.css` para aumentar el contraste manteniendo el
sistema visual definido en `plan.md`.




