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

- [ ] `spec-frontend.md` fue creada en `docs/03-specs/actividad-obligatoria-2/`.
- [ ] La spec fue commiteada antes de crear o modificar cualquier archivo CSS correspondiente a esta tarea.
- [ ] El desarrollo se realiza desde `feature/dev-frontend-css-add-styles`.
- [ ] Se utiliza GitHub Copilot Agent junto con Figma MCP tomando como referencia el mockup actualizado.
- [ ] El resultado generado mediante IA es revisado y ajustado manualmente.

### Archivos CSS

- [ ] Existe `css/styles.css`.
- [ ] Existe `css/components.css`.
- [ ] Ambos archivos están correctamente vinculados desde `index.html`.
- [ ] `css/styles.css` contiene variables CSS definidas mediante `:root`.
- [ ] `css/styles.css` contiene reset y estilos globales.
- [ ] `css/styles.css` contiene tipografías, colores y layout base.
- [ ] `css/components.css` contiene los estilos correspondientes a componentes reutilizables.

### Sistema visual

- [ ] Los colores utilizados corresponden al sistema de diseño definido en `plan.md` y el mockup.
- [ ] Los encabezados utilizan Playfair Display según la jerarquía definida.
- [ ] Los textos generales, labels y botones utilizan Work Sans.
- [ ] El diseño mantiene una paleta reducida y coherente.
- [ ] La página mantiene claridad visual y evita sobrecarga de información.
- [ ] Los espaciados y tamaños implementados son coherentes con el mockup actualizado.

### Componentes

- [ ] El header y la marca poseen estilos coherentes con el mockup.
- [ ] El buscador está estilizado.
- [ ] La navegación principal está estilizada.
- [ ] La sección de filtros está estilizada.
- [ ] El catálogo posee un layout base coherente con el mockup.
- [ ] Las tarjetas de productos están estilizadas.
- [ ] La guía de talles está estilizada.
- [ ] El formulario de contacto está estilizado.
- [ ] El footer mantiene coherencia con el resto del sistema visual.
- [ ] Los controles correspondientes incluyen estados `hover` y `focus` cuando corresponde.

### Requisitos técnicos de CSS

- [ ] Se utilizan selectores CSS adecuados para los distintos elementos.
- [ ] Se aprovecha la herencia donde resulte apropiado.
- [ ] La especificidad se mantiene controlada y no genera conflictos innecesarios.
- [ ] Se aplica el box model mediante `margin`, `padding` y `border`.
- [ ] Se utilizan correctamente elementos y comportamientos inline y block cuando corresponde.
- [ ] El código CSS está organizado y contiene comentarios donde una decisión técnica requiere explicación.
- [ ] No se incorpora JavaScript nuevo.
- [ ] No se implementan en esta rama las media queries ni el responsive completo correspondientes al rol Especialista en Responsive Design.

### Integración y entrega

- [ ] Se realizan pruebas de integración junto al Especialista en Responsive Design.
- [ ] Los bugs correspondientes a Frontend reportados por QA son resueltos antes del merge a `develop`.
- [ ] Los Issues de bugs corregidos quedan vinculados a la PR correspondiente.
- [ ] Existe una Issue vinculada a la tarea principal.
- [ ] Se crea una Pull Request desde `feature/dev-frontend-css-add-styles` hacia `develop`.
- [ ] La PR utiliza el template definido por el equipo.
- [ ] `changelog.md` contiene la entrada correspondiente con link a la PR y resumen del aporte.
- [ ] La Issue principal se cierra después del merge.

---

## 5. Evidencia a completar al cierre

> Esta sección se completará una vez finalizada la implementación. No corresponde completarla antes de ejecutar el flujo con Figma MCP y GitHub Copilot Agent.

### Herramientas utilizadas

- **Modelo / herramienta:** [Pendiente]
- **Servidor MCP:** Figma MCP
- **Entorno:** Visual Studio Code + GitHub Copilot Agent

### Contexto proporcionado al agente

- `docs/03-specs/actividad-obligatoria-2/spec-frontend.md`
- `plan.md`
- `index.html`
- proyecto actual
- enlace al Figma actualizado de la Actividad Obligatoria N.º 2

### Prompt exacto utilizado

```text
[Pendiente de completar luego de ejecutar la tarea con Copilot Agent + Figma MCP]
```

### Resultado obtenido

[Pendiente de completar]

### Partes aceptadas del resultado

[Pendiente de completar]

### Ajustes manuales realizados

[Pendiente de completar]

### Motivo de los ajustes manuales

[Pendiente de completar]

### Pruebas de integración realizadas

[Pendiente de completar]

---

*Spec redactada antes de iniciar el desarrollo CSS de la Actividad Obligatoria N.º 2, conforme a la metodología Spec-Driven Development utilizada por el equipo.*
