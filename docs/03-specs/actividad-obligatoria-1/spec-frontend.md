# Spec — Desarrollador Frontend

**Rol:** Desarrollador Frontend

**Proyecto:** Tienda Online de Ropa (simulador de e-commerce)

**Entrega:** Actividad Obligatoria N.º 1

**Autor:** Juan Martin Britos

**Rama:** `feature/frontend-add-html-structure`

---

## 1. Qué se va a hacer

Desarrollar la estructura HTML5 inicial de la Tienda Online de Ropa tomando como referencia el mockup realizado en Figma por el rol de Documentador/Diseñador UX.

La implementación se realizará en `index.html` y representará la estructura principal definida en el diseño:

- Encabezado con nombre de la tienda y buscador.
- Navegación por categorías: Mujer, Hombre, Niños y Ver todo.
- Sección lateral de filtros por tipo de prenda, talle y estilo/temática.
- Catálogo inicial de productos.
- Información de cada producto: imagen, nombre, categoría, precio y talles disponibles.
- Guía de talles mediante una tabla HTML.
- Formulario de contacto.
- Pie de página.

Para organizar correctamente el contenido se utilizarán etiquetas semánticas HTML5 como `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, `<article>` y `<footer>`.

En esta entrega no se implementarán estilos CSS ni funcionalidades JavaScript. Se incluirán comentarios dentro del HTML indicando dónde y con qué propósito se incorporarán estas tecnologías en futuras entregas.

---

## 2. Por qué se hace

Esta tarea construye la base Frontend necesaria para representar en HTML la Tienda Online definida en `plan.md`.

La implementación se relaciona principalmente con los siguientes requerimientos del proyecto:

- **RF-01 — Catálogo de prendas:** se representará un catálogo inicial con diferentes productos.
- **RF-02 — Consulta de información de una prenda:** cada producto mostrará nombre, imagen, categoría, precio y talles disponibles.
- **RF-03 — Navegación por categorías:** se incluirán enlaces para Mujer, Hombre, Niños y Ver todo.
- **RF-04 — Enlaces y navegación comprensible:** los enlaces tendrán textos claros relacionados con su función.
- **RF-05 — Talles disponibles:** los productos indicarán sus talles y se incorporará una guía de talles.
- **RF-17 — Formularios:** se incorporará un formulario de contacto relacionado con la tienda.

También se tendrán en cuenta los requerimientos no funcionales de `plan.md` relacionados con:

- Semántica y accesibilidad del HTML.
- Comprensibilidad de la interfaz.
- Evolución progresiva del proyecto.
- Mantenibilidad de la estructura.
- Preparación para la futura adaptación visual mediante CSS.

Esta primera implementación funcionará como base para incorporar posteriormente estilos CSS, diseño responsive y funcionalidades dinámicas con JavaScript.

---

## 3. Criterios de aceptación

- [ ] El archivo `index.html` utiliza `<!DOCTYPE html>`.
- [ ] El elemento `<html>` incluye el atributo `lang="es"`.
- [ ] El `<head>` incluye `charset`, `viewport` y `<title>`.
- [ ] Existe un título visible relacionado con la tienda.
- [ ] El contenido de la página está relacionado específicamente con una tienda online de ropa.
- [ ] Se incluyen párrafos relacionados con los productos y/o la tienda.
- [ ] Se incluyen imágenes de productos con atributos `alt` descriptivos.
- [ ] Se incluyen enlaces con `href` y textos descriptivos.
- [ ] Se utiliza al menos una lista HTML.
- [ ] Se incluye una guía de talles mediante una tabla con `<th>` y `<td>`.
- [ ] Se incluye un formulario de contacto con al menos tres campos relevantes.
- [ ] Los campos del formulario cuentan con sus correspondientes `<label>`.
- [ ] Se utilizan las etiquetas semánticas `<header>`, `<main>` y `<footer>`.
- [ ] Se utilizan etiquetas semánticas adicionales como `<nav>`, `<section>`, `<article>` y `<aside>`.
- [ ] El catálogo incluye como mínimo los productos representados en el mockup: Remera, Pantalón y Campera.
- [ ] Cada producto muestra nombre, imagen, categoría, precio y talles disponibles.
- [ ] La estructura implementada toma como referencia el mockup obtenido mediante Figma MCP.
- [ ] Se incluyen comentarios específicos indicando dónde se aplicará CSS en futuras entregas.
- [ ] Se incluyen comentarios específicos indicando dónde se incorporará JavaScript en futuras entregas.
- [ ] No se implementan estilos CSS funcionales en esta entrega.
- [ ] No se implementa JavaScript funcional en esta entrega.
- [ ] La estructura queda preparada para incorporar posteriormente filtros, búsqueda, selección de talles y carrito simulado.
- [ ] Documentación en el código incluida donde corresponda mediante comentarios de futuras implementaciones CSS/JS.
- [ ] Rama `feature/` propia, con al menos un commit relevante.
- [ ] PR asociado creado hacia `develop`, usando el template de PR correspondiente.
- [ ] Entrada agregada en `changelog.md` con link a la PR.
- [ ] Issue vinculada a la tarea, cerrada tras el merge.

---

## 4. Uso de IA en esta tarea

Para desarrollar la estructura inicial del Frontend se utilizó GitHub Copilot en modo Agente junto con el servidor MCP de Figma.

Antes de generar la estructura HTML se utilizó Figma MCP para acceder al mockup realizado por el rol de Documentador/Diseñador UX. El agente identificó la estructura principal del diseño: encabezado, navegación, filtros, catálogo de productos, guía de talles, formulario de contacto y footer.

La implementación también se contrastó con `plan.md` y con los criterios definidos en esta especificación para mantener la trazabilidad entre los requerimientos del proyecto, el diseño y el código generado.

- **Modelo utilizado:** GitHub Copilot en modo Agente + Figma MCP.
- **Qué se le pidió (resumen):** analizar el mockup mediante Figma MCP, utilizar `plan.md` como especificación maestra, contrastar los requerimientos con la spec de Frontend y generar la estructura inicial de `index.html` cumpliendo la rúbrica de la Actividad Obligatoria N.º 1.
- **Qué se aceptó del resultado y qué se corrigió manualmente:** se tomó como base la estructura HTML5 generada a partir del mockup. La implementación será revisada manualmente para comprobar semántica, accesibilidad, contenido específico de la tienda, correspondencia con el diseño y cumplimiento de los criterios de aceptación.
- **Prompt documentado en:** `docs/02-prompts/prompts.md`

---

*Spec redactada antes de iniciar el desarrollo de esta tarea, conforme a la metodología definida en `docs/02-prompts/sdd-decisions.md`.*