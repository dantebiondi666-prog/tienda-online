# Plan maestro del proyecto: Tienda Online

## 1. Nombre provisorio

**Tienda Online**

El nombre podrá reemplazarse por una identidad definitiva cuando el equipo defina la propuesta visual y de marca.

## 2. Descripción general

El proyecto consiste en una aplicación web de comercio electrónico orientada a la exploración y selección de prendas de vestir. La experiencia comenzará con una representación estructurada del catálogo y evolucionará durante la cursada hacia un flujo de compra simulado.

La primera versión construirá la base semántica en HTML5. Las entregas posteriores incorporarán estilos, comportamiento e interacción de forma progresiva, manteniendo la trazabilidad entre este plan, las especificaciones por rol y los cambios realizados mediante Pull Requests.

## 3. Propósito del proyecto

El propósito es ofrecer una experiencia simple para consultar prendas, comparar sus características y preparar una compra simulada. Desde el punto de vista académico, el proyecto funcionará como una base escalable para aplicar HTML5, CSS, JavaScript, accesibilidad, documentación técnica y trabajo colaborativo con GitHub.

## 4. Problema o necesidad

Una persona que busca ropa necesita poder recorrer una oferta organizada, comprender rápidamente las características de cada prenda y reunir los productos de interés antes de revisar una compra. El proyecto busca resolver esa necesidad mediante una tienda online clara, navegable y preparada para incorporar filtros y un carrito en etapas posteriores.

## 5. Alcance general del sistema

El sistema representará un catálogo de prendas y permitirá avanzar progresivamente desde la consulta de productos hasta un flujo de compra simulado. El alcance general contempla:

- presentación de productos agrupados por categorías;
- consulta de información relevante de cada prenda;
- selección de talles disponibles;
- filtrado de productos según distintos criterios;
- gestión de un carrito de compras simulado;
- revisión de un resumen de compra;
- formularios vinculados con la experiencia de una tienda online;
- una evolución visual y funcional por entregas, sin asumir desde el inicio la implementación completa.

El proyecto no representa una operación comercial real: no incluye cobros reales, gestión logística real ni conexión obligatoria con un sistema externo de inventario.

## 6. Público objetivo

La aplicación estará dirigida a personas interesadas en consultar y seleccionar ropa online, especialmente usuarios que necesitan recorrer categorías, identificar talles y revisar una selección de productos de manera rápida y comprensible.

## 7. Requerimientos funcionales identificados

Estos requerimientos describen el comportamiento esperado del proyecto completo. Su implementación se distribuirá entre las entregas de la materia.

### Catálogo y navegación

- **RF-01:** El sistema deberá mostrar un catálogo de prendas con, como mínimo, nombre, imagen, categoría o tipo de prenda, talle disponible y precio de referencia.
- **RF-02:** El sistema deberá permitir consultar la información relevante de una prenda seleccionada.
- **RF-03:** El sistema deberá permitir navegar entre diferentes categorías de productos.
- **RF-04:** El sistema deberá presentar enlaces y controles de navegación con textos comprensibles para acceder a las principales áreas de la tienda.

### Talles y selección

- **RF-05:** El sistema deberá mostrar los talles disponibles para cada prenda.
- **RF-06:** En una entrega posterior, el sistema deberá permitir seleccionar un talle antes de agregar una prenda al carrito.
- **RF-07:** En una entrega posterior, el sistema deberá indicar cuando una combinación de prenda y talle no esté disponible.

### Carrito y resumen

- **RF-08:** En una entrega posterior, el sistema deberá permitir agregar al carrito una prenda y el talle seleccionado.
- **RF-09:** En una entrega posterior, el sistema deberá mostrar los productos incorporados al carrito y sus cantidades.
- **RF-10:** En una entrega posterior, el sistema deberá permitir eliminar productos del carrito.
- **RF-11:** En una entrega posterior, el sistema deberá permitir modificar las cantidades de los productos del carrito.
- **RF-12:** El sistema deberá mostrar un resumen de compra con los productos seleccionados, cantidades y total calculado cuando se implemente el carrito.

### Filtrado

- **RF-13:** En una entrega posterior, el sistema deberá permitir filtrar productos por tipo de prenda.
- **RF-14:** En una entrega posterior, el sistema deberá permitir filtrar productos por talle.
- **RF-15:** En una entrega posterior, el sistema deberá permitir filtrar productos por temática o estilo.
- **RF-16:** El sistema deberá conservar una forma clara de restablecer o cambiar los filtros aplicados cuando esa funcionalidad sea implementada.

### Formularios

- **RF-17:** El sistema deberá incluir formularios relacionados con la experiencia de la tienda online, con campos identificados y asociados a sus etiquetas.
- **RF-18:** En entregas posteriores, los formularios podrán utilizarse para tareas como datos de contacto, preferencias de búsqueda o preparación de una compra simulada, según el alcance aprobado por el equipo.

## 8. Requerimientos no funcionales relevantes

- **RNF-01 - Semántica y accesibilidad:** La estructura deberá utilizar HTML5 semántico, textos descriptivos, atributos `alt` en imágenes y controles de formulario correctamente identificados.
- **RNF-02 - Comprensibilidad:** Los textos, títulos, enlaces y mensajes deberán ser claros para una persona que no conozca la implementación interna.
- **RNF-03 - Evolución progresiva:** Las decisiones de cada entrega deberán permitir incorporar CSS y JavaScript sin tener que rehacer la estructura HTML5 base.
- **RNF-04 - Mantenibilidad:** El código y la documentación deberán mantener una organización consistente y comentarios puntuales para las futuras áreas de desarrollo.
- **RNF-05 - Trazabilidad:** Cada tarea deberá contar con una especificación técnica alineada con este plan y quedar asociada a su Pull Request y registro en `changelog.md`.
- **RNF-06 - Colaboración:** Los cambios deberán realizarse en ramas `feature`, integrarse mediante Pull Requests hacia `develop` y someterse a revisión antes del merge, según el flujo definido para la actividad.
- **RNF-07 - Publicación:** La versión entregable de la Actividad Obligatoria N.º 1 deberá poder publicarse mediante GitHub Pages cuando el Coordinador configure la rama de release.
- **RNF-08 - Diseño adaptable futuro:** La estructura deberá permitir una presentación usable en distintos tamaños de pantalla cuando se incorpore la maquetación CSS.

## 9. Funcionalidades previstas para futuras entregas

Las siguientes funcionalidades forman parte del roadmap y no son criterios de funcionamiento para la Actividad Obligatoria N.º 1:

1. Incorporar una interfaz visual definitiva mediante CSS.
2. Mostrar el catálogo con tarjetas o vistas equivalentes para las prendas.
3. Presentar el detalle ampliado de cada producto.
4. Implementar la selección interactiva de talles.
5. Implementar el carrito de compras simulado.
6. Agregar, eliminar y modificar cantidades de productos en el carrito.
7. Calcular y mostrar el resumen de compra.
8. Implementar filtros dinámicos por tipo de prenda, talle y temática o estilo.
9. Mejorar la navegación entre categorías.
10. Incorporar validaciones y comportamiento a los formularios.
11. Agregar otras funcionalidades coherentes con una tienda online cuando el equipo las proponga, documente y apruebe.

## 10. Alcance específico de la Actividad Obligatoria N.º 1

Esta entrega tiene como objetivo construir la estructura inicial del proyecto. El entregable debe centrarse en HTML5 y dejar preparada la base para las próximas etapas.

### Incluido en esta entrega

- un documento `plan.md` que define el alcance y los requerimientos del proyecto;
- una página principal `index.html` válida y estructurada con HTML5;
- contenido real relacionado con una tienda online de ropa;
- elementos semánticos que organicen la información y mejoren la accesibilidad;
- representaciones conceptuales del catálogo, categorías, productos y futura experiencia de compra;
- comentarios específicos que identifiquen dónde se aplicarán estilos CSS en entregas futuras;
- comentarios específicos que identifiquen dónde se integrarán funcionalidades JavaScript en entregas futuras;
- documentación técnica y de proceso asociada a los roles, las especificaciones y los Pull Requests;
- una base publicable mediante GitHub Pages al finalizar la preparación de la release.

### No incluido como comportamiento operativo

Durante esta entrega, el usuario no deberá poder ejecutar un carrito, aplicar filtros dinámicos, seleccionar productos de forma interactiva ni enviar un flujo de compra real. Esas capacidades deberán quedar documentadas como evolución futura y no simularse mediante JavaScript.

## 11. Elementos HTML5 requeridos en la primera entrega

`index.html` deberá contener, de manera pertinente al tema de la tienda:

- declaración `DOCTYPE`, atributo `lang`, `head` con codificación de caracteres, viewport y título;
- un título visible y párrafos descriptivos sobre la tienda y su propuesta;
- imágenes de prendas o de la propuesta de catálogo, todas con atributos `alt` descriptivos;
- enlaces con `href` y texto que explique su destino;
- al menos una lista para categorías, beneficios, pasos o información del catálogo;
- al menos una tabla con encabezados `th` y celdas `td` para presentar datos comparables, como talles o características;
- al menos un formulario con tres o más campos relevantes para la experiencia de la tienda;
- las etiquetas semánticas `header`, `main` y `footer`;
- al menos dos etiquetas semánticas adicionales entre `nav`, `section`, `article` y `aside`, según corresponda a la estructura elegida;
- comentarios HTML claros sobre la estructura y comentarios específicos que marquen las futuras integraciones de CSS y JavaScript.

La validez de la estructura y la pertinencia del contenido deberán revisarse antes de abrir el Pull Request del frontend.

## 12. Lineamientos generales de UX/UI

Estos lineamientos orientan el trabajo de UX y podrán refinarse mediante el mockup de Figma sin alterar el alcance funcional aprobado:

- mantener un diseño limpio, profesional y visualmente claro;
- utilizar predominantemente colores claros y agradables;
- definir una paleta reducida y coherente;
- evitar la sobrecarga de información y el ruido visual;
- establecer una jerarquía visual clara entre navegación, categorías, productos y acciones;
- facilitar la navegación, exploración y filtrado de prendas;
- priorizar una experiencia simple e intuitiva;
- reservar decisiones gráficas detalladas, como tipografías, medidas exactas y componentes visuales definitivos, para la especificación UX y el mockup.

## 13. Criterios generales de aceptación

El proyecto podrá considerarse alineado con este plan cuando se verifique que:

- **CA-01:** La estructura de archivos y la documentación del proyecto permiten identificar el alcance de la tienda y el objetivo de cada entrega.
- **CA-02:** `index.html` contiene una estructura HTML5 válida, semántica y relacionada con una tienda online de ropa.
- **CA-03:** La primera entrega incluye título, párrafos, imágenes con `alt`, enlaces descriptivos, listas, tablas con `th` y `td` y un formulario con al menos tres campos relevantes.
- **CA-04:** La primera entrega contiene `header`, `main`, `footer` y al menos dos elementos semánticos adicionales pertinentes.
- **CA-05:** El contenido de la primera entrega es concreto y no utiliza texto genérico, `Lorem Ipsum` ni placeholders como contenido final.
- **CA-06:** Los comentarios del HTML identifican con claridad los puntos donde se incorporarán CSS y JavaScript posteriormente, sin implementar esas capas en esta actividad.
- **CA-07:** Los requerimientos futuros, como carrito, filtros y selección interactiva, están diferenciados de las funcionalidades operativas de la Actividad Obligatoria N.º 1.
- **CA-08:** Cada Pull Request de desarrollo referencia la especificación de su rol y puede revisarse contra los requerimientos de este plan.
- **CA-09:** La documentación del proyecto registra los aportes y enlaces a Pull Requests en `changelog.md`.
- **CA-10:** La versión de entrega puede publicarse en GitHub Pages desde la rama de release correspondiente.
- **CA-11:** Las decisiones visuales futuras respetan los lineamientos de claridad, legibilidad, navegación simple y baja sobrecarga visual.

## 14. Fuera de alcance de la primera entrega

- maquetación definitiva y estilos visuales completos con CSS;
- lógica de interacción o persistencia con JavaScript;
- carrito operativo;
- filtros dinámicos;
- selección interactiva de productos o talles;
- cálculo automático de totales;
- autenticación y cuentas de usuario;
- pagos, checkout real o conexión con una pasarela;
- backend, base de datos o API obligatoria;
- gestión real de stock, envíos, devoluciones o pedidos;
- incorporación de funcionalidades nuevas que no estén justificadas y documentadas como ampliaciones opcionales.

## 15. Posibles ampliaciones futuras

Una vez cumplidos los requerimientos del roadmap, el equipo podrá evaluar, documentar y priorizar ampliaciones como persistencia del carrito, favoritos, búsqueda por texto, ordenamiento de resultados, historial de compras simuladas o integración con una fuente de datos de productos. Ninguna ampliación se considerará comprometida hasta que tenga una especificación y criterios de aceptación propios.

## 16. Trazabilidad y evolución del plan

Este archivo es la referencia común para el análisis y los code reviews del proyecto. Toda modificación relevante del alcance deberá:

1. describir qué requisito modifica o agrega;
2. justificar por qué es necesaria para la tienda;
3. indicar si afecta la Actividad Obligatoria N.º 1 o una entrega futura;
4. actualizar las especificaciones de los roles involucrados;
5. quedar registrada mediante una Pull Request y una entrada en `changelog.md`.

Las especificaciones técnicas individuales deberán trazarse contra los códigos `RF`, `RNF` y `CA` definidos aquí.

---

## Uso de IA en la elaboración del plan

- **Modelo utilizado:** GitHub Copilot — modo Agente.
- **Uso realizado:** Se utilizó IA para generar la estructura inicial de `plan.md` tomando como contexto la consigna de la Actividad Obligatoria N°1 y la idea definida por el equipo para la Tienda Online.
- **Revisión manual:** El resultado generado fue revisado y ajustado manualmente para definir el alcance, los requerimientos funcionales y no funcionales, los criterios de aceptación y las funcionalidades futuras del proyecto.
- **Prompt completo:** `docs/02-prompts/prompts-2.md`