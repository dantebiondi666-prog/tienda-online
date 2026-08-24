# Especificación Técnica — Desarrollador Frontend

## Actividad Obligatoria N.º 1

**Proyecto:** Tienda Online de Ropa
**Rol:** Desarrollador Frontend
**Entrega:** Actividad Obligatoria N.º 1
**Tecnología principal:** HTML5

---

## 1. Objetivo

Desarrollar la estructura HTML5 inicial de una tienda online de ropa, estableciendo una base semántica, organizada y escalable para las futuras etapas del proyecto.

La página deberá presentar información relacionada con la tienda, productos disponibles, categorías de indumentaria y mecanismos básicos de interacción con el usuario.

En esta primera entrega se trabajará exclusivamente sobre la estructura HTML. La aplicación de estilos mediante CSS y la incorporación de funcionalidades dinámicas mediante JavaScript quedarán planificadas para etapas posteriores.

---

## 2. Alcance

La implementación correspondiente al rol Frontend incluirá:

* Estructura HTML5 válida.
* Configuración básica del documento HTML.
* Encabezado y navegación principal.
* Presentación de la tienda y su propuesta.
* Secciones relacionadas con categorías de ropa.
* Información de productos.
* Imágenes descriptivas de los productos.
* Enlaces de navegación.
* Lista de categorías o características.
* Tabla con información de productos.
* Formulario relacionado con la tienda.
* Etiquetas HTML semánticas.
* Comentarios que indiquen futuras implementaciones de CSS.
* Comentarios que indiquen futuras funcionalidades JavaScript.

No se implementarán estilos CSS ni lógica JavaScript funcional en esta entrega.

---

## 3. Estructura HTML propuesta

El documento `index.html` contará con una estructura semántica compuesta principalmente por:

* `<header>` para la cabecera de la tienda.
* `<nav>` para la navegación principal.
* `<main>` para el contenido principal.
* `<section>` para organizar las diferentes áreas de contenido.
* `<article>` para representar productos o contenidos independientes.
* `<footer>` para información complementaria de la tienda.

La estructura estará preparada para permitir la incorporación progresiva de estilos y funcionalidades en las siguientes entregas.

---

## 4. Contenido previsto

La página estará orientada a una tienda online de ropa e incluirá contenido relacionado con:

### Inicio

Presentación general de la tienda y una breve descripción de su propuesta.

### Categorías

Se incorporarán categorías de indumentaria, por ejemplo:

* Remeras
* Pantalones
* Buzos
* Camperas
* Accesorios

### Productos

Se mostrarán productos de ejemplo relacionados con las categorías disponibles.

Cada producto podrá contener:

* Nombre.
* Imagen.
* Descripción.
* Categoría.
* Precio.
* Enlace o acción relacionada con el producto.

### Tabla

Se incorporará una tabla HTML para presentar información organizada de productos, incluyendo encabezados mediante `<th>` y datos mediante `<td>`.

### Formulario

Se incorporará un formulario relacionado con la experiencia de compra o consulta de productos.

El formulario contará con al menos tres campos relevantes para el proyecto, por ejemplo:

* Nombre.
* Correo electrónico.
* Categoría o producto de interés.
* Consulta o mensaje.

---

## 5. Accesibilidad y semántica

Se utilizarán etiquetas semánticas HTML5 para mejorar la organización del contenido, facilitar la accesibilidad y favorecer la interpretación de la estructura por parte de los motores de búsqueda.

Las imágenes utilizadas deberán contar con atributos `alt` descriptivos.

Los enlaces deberán utilizar textos claros y descriptivos para que el usuario pueda identificar su propósito.

El documento utilizará el atributo `lang` correspondiente al idioma del contenido.

---

## 6. Futuras implementaciones CSS

La estructura HTML deberá incluir comentarios que indiquen dónde y con qué propósito se incorporarán estilos CSS en futuras entregas.

Se prevé implementar posteriormente:

* Diseño visual de la tienda.
* Distribución de productos mediante tarjetas.
* Jerarquía visual entre secciones.
* Diseño responsive para diferentes tamaños de pantalla.
* Estilos para navegación, botones y formularios.
* Organización visual de categorías y productos.
* Adaptación de la interfaz a dispositivos móviles.

---

## 7. Futuras implementaciones JavaScript

La estructura HTML deberá incluir comentarios que indiquen dónde se incorporarán funcionalidades JavaScript en futuras etapas.

Entre las funcionalidades previstas se encuentran:

* Interacción con productos.
* Filtrado de productos por categoría.
* Búsqueda de productos.
* Interacción con el formulario.
* Simulación de selección de productos.
* Actualización dinámica de información mostrada al usuario.
* Posible simulación de un carrito de compras.

Estas funcionalidades no serán implementadas en la presente entrega, sino que quedarán indicadas como puntos de extensión del proyecto.

---

## 8. Integración con el diseño

La estructura HTML será desarrollada tomando como referencia el mockup proporcionado por el integrante responsable del rol Documentador / Diseñador UX.

Cuando el diseño se encuentre disponible, se utilizará el servidor MCP de Figma junto con GitHub Copilot en modo Agente para obtener una estructura inicial basada en el diseño.

La estructura generada será revisada y adaptada manualmente para cumplir con los requerimientos técnicos de la actividad.

---

## 9. Criterios de aceptación

La tarea se considerará terminada cuando se cumplan los siguientes criterios:

* [ ] El documento utiliza `<!DOCTYPE html>`.
* [ ] El elemento `<html>` posee un atributo `lang`.
* [ ] El `<head>` contiene charset, viewport y title.
* [ ] Existe un título visible relacionado con la tienda.
* [ ] La página contiene párrafos relacionados con una tienda de ropa.
* [ ] Se utilizan imágenes con atributos `alt` descriptivos.
* [ ] Existen enlaces con `href` y textos descriptivos.
* [ ] Se incluye al menos una lista HTML.
* [ ] Se incluye una tabla con encabezados `<th>` y datos `<td>`.
* [ ] Se incluye un formulario con al menos tres campos relevantes.
* [ ] Se utiliza `<header>`.
* [ ] Se utiliza `<main>`.
* [ ] Se utiliza `<footer>`.
* [ ] Se utilizan al menos dos etiquetas semánticas adicionales, como `<nav>`, `<section>` o `<article>`.
* [ ] El contenido está relacionado específicamente con una tienda online de ropa.
* [ ] Se incluyen comentarios que indiquen futuras implementaciones CSS.
* [ ] Se incluyen comentarios que indiquen futuras implementaciones JavaScript.
* [ ] La estructura HTML queda preparada para futuras ampliaciones del proyecto.
* [ ] El proceso de generación de la estructura mediante Figma MCP y GitHub Copilot queda documentado.
* [ ] Los ajustes manuales realizados sobre la estructura generada quedan documentados.

---

## 10. Resultado esperado

Como resultado de esta tarea se espera obtener un `index.html` funcional como estructura base de la tienda online de ropa, correctamente organizado mediante HTML5 semántico y preparado para incorporar diseño visual mediante CSS y funcionalidades interactivas mediante JavaScript en las próximas entregas.

La implementación deberá mantener una estructura clara y escalable para facilitar el trabajo posterior de los integrantes del equipo.
