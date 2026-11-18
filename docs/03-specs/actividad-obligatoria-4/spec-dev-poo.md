# Especificación Técnica – Desarrollador JavaScript POO

## Actividad Obligatoria N.º 4 – Programación Web I

**Proyecto:** Tienda Online  
**Rol:** Desarrollador JavaScript POO (Lógica de Negocio)  
**Carrera:** Tecnicatura Universitaria en Programación de Sistemas

---

## 1. BEFORE – Planificación previa al desarrollo

### 1.1 Objetivo

Refactorizar la lógica de negocio existente en `js/script.js` para implementar una arquitectura orientada a objetos, manteniendo las funcionalidades de la tienda online y separando la lógica de negocio de la manipulación del DOM.

Se busca mejorar la organización del código, facilitar su mantenimiento y permitir la integración con los módulos de eventos, almacenamiento y testing.

### 1.2 Identificación de entidades del dominio

Se propone implementar cuatro clases principales.

**Clase Producto**

Representa los productos disponibles en la tienda.

Propiedades:
- nombre
- categoria
- tipo
- estilo
- talles
- precio

Métodos:
- `constructor()`
- `verificarTalleDisponible(talle)`
- `toJSON()`
- `fromJSON(json)`

**Clase Catalogo**

Administra los productos disponibles.

Propiedades:
- productos

Métodos:
- `constructor(productos)`
- `buscarProducto(nombre)`
- `filtrarProductos(campo, valor)`
- `obtenerOpcionesFiltro(campo)`
- `toJSON()`
- `fromJSON(json)`

**Clase ItemCarrito**

Representa un producto seleccionado para la compra.

Propiedades:
- producto
- talle
- cantidad
- precio

Métodos:
- `constructor(producto, talle, cantidad, precio)`
- `calcularSubtotal()`
- `toJSON()`
- `fromJSON(json)`

**Clase Carrito**

Administra los productos seleccionados por el usuario.

Propiedades:
- items

Métodos:
- `constructor(items)`
- `buscarEnCarrito(producto, talle)`
- `agregarProducto(producto, talle, cantidad)`
- `modificarCantidad(producto, talle, cantidad)`
- `eliminarProducto(producto, talle)`
- `calcularTotal()`
- `generarResumenCompra()`
- `toJSON()`
- `fromJSON(json)`

### 1.3 Relaciones entre clases

- `Catalogo` contiene una colección de objetos `Producto`.
- `Carrito` contiene una colección de objetos `ItemCarrito`.
- `ItemCarrito` mantiene una referencia a un `Producto`.

Se utilizarán relaciones de agregación, composición o asociación según corresponda al diseño final.

### 1.4 Decisiones de arquitectura

La lógica de negocio se organizará dentro de `js/models/`, utilizando clases JavaScript ES6.

El archivo `js/script.js` funcionará como controlador principal y quedará a cargo del manejo de eventos y de la manipulación del DOM.

Las clases del dominio no utilizarán `prompt()`, `alert()` ni modificarán directamente elementos HTML.

Se implementarán validaciones internas para evitar datos incorrectos, como cantidades negativas, precios inválidos o talles no disponibles.

Cada clase contará con métodos `toJSON()` y `fromJSON()` para facilitar la integración con `localStorage` y `sessionStorage`.

Se utilizará JSDoc para documentar constructores, métodos y parámetros relevantes.

### 1.5 Criterios de aceptación

- [ ] Implementar al menos tres clases en `js/models/`.
- [ ] Definir constructores, propiedades y métodos de negocio.
- [ ] Implementar encapsulamiento y validaciones internas.
- [ ] Separar la lógica de negocio del DOM y los eventos.
- [ ] Eliminar las dependencias de `prompt()` y `alert()` de las clases.
- [ ] Implementar `toJSON()` y `fromJSON()`.
- [ ] Documentar las clases y métodos mediante JSDoc.
- [ ] Crear el diagrama de clases UML en PlantUML.
- [ ] Exportar el diagrama en formatos `.puml` y `.png`.
- [ ] Documentar las clases y sus relaciones.
- [ ] Coordinar las interfaces públicas con los desarrolladores de DOM y Storage.
- [ ] Verificar que los cuatro flujos de negocio continúen funcionando.
- [ ] Responder a las observaciones del Tester QA.

---

## 2. Herramientas de desarrollo

- Visual Studio Code.
- JavaScript ES6.
- Git y GitHub.
- GitHub Copilot en modo Agente.
- PlantUML.
- Jasmine para las pruebas automatizadas.

Se utilizará GitHub Copilot en modo Agente como herramienta de asistencia para generar la estructura inicial de las clases, utilizando como contexto los diagramas de actividades, `index.html` y esta especificación.

El código generado será revisado manualmente para comprobar su funcionamiento, encapsulamiento, validaciones y compatibilidad con el proyecto.

---

## 3. AT CLOSE – Evidencia del desarrollo

*Esta sección se completará una vez implementadas las clases.*

### 3.1 Prompt utilizado en GitHub Copilot

Pendiente de registrar el prompt exacto utilizado.

### 3.2 Código generado por Copilot

Pendiente de incorporar un fragmento representativo de una clase generada.

### 3.3 Ajustes manuales

Pendiente de documentar las modificaciones realizadas y sus justificaciones.

### 3.4 Decisiones finales de arquitectura

Pendiente de describir la arquitectura implementada y su integración con Eventos + DOM, Storage y Tester QA.