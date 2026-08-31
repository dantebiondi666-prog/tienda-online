# Prompt 3 — Redacción de spec-frontend.md (Desarrollador Frontend)

**Modelo:** GPT-5.6 Luna

**Método de prompt:** Role prompting + contexto documental estructurado
(se asigna explícitamente un rol al modelo — "Actuá como asistente para
la documentación técnica..." — y se detalla el formato exacto de salida
esperado, sección por sección)

**Prompt exacto:**
```
Actuá como asistente para la documentación técnica de un proyecto
grupal de Programación Web I.
Necesito generar la especificación técnica correspondiente al rol de
Desarrollador Frontend para la Actividad Obligatoria N.º 1 del proyecto
"Tienda Online de Ropa".
Tomá como contexto principal plan.md, que funciona como especificación
maestra del proyecto, y contrastá mi tarea de Frontend con los
requerimientos funcionales, no funcionales y criterios de aceptación
que correspondan.
Mi rol es Desarrollador Frontend y mi tarea consiste en desarrollar la
estructura HTML5 inicial de la tienda online tomando como referencia el
mockup realizado por el rol de Documentador/Diseñador UX.
La spec debe seguir el formato definido por el equipo:
1. Qué se va a hacer.
2. Por qué se hace.
3. Criterios de aceptación.
4. Uso de IA en esta tarea.

En "Qué se va a hacer", describí concretamente la implementación de
index.html. La estructura debe contemplar:
- Header con nombre/logo de la tienda y buscador.
- Navegación por categorías: Mujer, Hombre, Niños y Ver todo.
- Aside con filtros por tipo de prenda, talle y estilo/temática.
- Catálogo de productos.
- Productos representados mediante article.
- Nombre, imagen, categoría, precio y talles disponibles de cada
  producto.
- Guía de talles mediante una tabla HTML.
- Formulario de contacto.
- Footer.
- Uso de HTML5 semántico mediante header, nav, main, section, article,
  aside y footer.

En "Por qué se hace", relacioná la implementación con los
requerimientos correspondientes de plan.md, especialmente los
relacionados con catálogo de prendas, consulta de información de
productos, navegación por categorías, enlaces comprensibles, talles
disponibles y formularios.
También contemplá los requerimientos no funcionales relacionados con
semántica, accesibilidad, comprensibilidad, evolución progresiva,
mantenibilidad y futura adaptación mediante CSS.

En "Criterios de aceptación", generá un checklist con condiciones
objetivamente verificables. Debe contemplar los requisitos HTML5 de la
actividad, contenido específico de la tienda, imágenes con alt,
enlaces, listas, tabla, formulario, etiquetas semánticas y comentarios
para futuras implementaciones.
En esta primera entrega NO se implementarán estilos CSS ni
funcionalidades JavaScript. La estructura HTML solamente debe dejar
comentarios específicos indicando dónde y para qué se incorporarán CSS
y JavaScript en futuras entregas.
Incluí también dentro de los criterios de aceptación:
- Rama feature propia.
- Al menos un commit relevante.
- Pull Request hacia develop.
- Actualización de changelog.md.
- Issue vinculada a la tarea.

En "Uso de IA", documentá que se utilizará GitHub Copilot en modo
Agente junto con Figma MCP para analizar el mockup y generar la
estructura HTML inicial. La implementación debe contrastarse
posteriormente con plan.md, la spec y los requisitos de la actividad.

Redactá la especificación de forma clara y técnica pero sencilla,
acorde a un trabajo universitario de Programación Web I, sin agregar
funcionalidades que estén fuera del alcance de esta primera entrega.
```

**Resultado esperado:**
Un archivo `spec-frontend.md` siguiendo el formato de 4 secciones
acordado por el equipo, describiendo concretamente la estructura de
`index.html` a construir, su trazabilidad contra `plan.md` y un checklist
de criterios de aceptación verificables, sin invadir el alcance de
CSS/JavaScript de futuras entregas.

**Resultado obtenido:**
El modelo generó `spec-frontend.md` con las cuatro secciones solicitadas:
una descripción concreta de la estructura a implementar (header, nav,
aside de filtros, catálogo con articles, guía de talles, formulario de
contacto y footer), la relación explícita con los requerimientos RF-01,
RF-02, RF-03, RF-04, RF-05 y RF-17 de `plan.md`, un checklist extenso de
criterios de aceptación (incluyendo los ítems de flujo de trabajo como
rama feature, PR, changelog e Issue), y la sección de uso de IA
documentando el uso previsto de GitHub Copilot + Figma MCP para la
implementación futura del HTML.

**Correcciones manuales realizadas:**
El resultado requirió pocos ajustes en comparación con otras specs del
equipo, ya que el prompt incluyó de antemano la estructura exacta de
secciones y el detalle de contenido esperado. Se revisó manualmente que
los códigos de requerimientos (`RF-01`, `RF-03`, etc.) coincidieran con
los definidos en la versión final de `plan.md`, y se confirmó que el
listado de productos del catálogo (Remera, Pantalón, Campera) coincidiera
con el mockup real entregado por UX antes de dar la spec por cerrada.

**Archivo o parte del proyecto donde se aplicó:**
`docs/03-specs/actividad-obligatoria-1/spec-frontend.md`