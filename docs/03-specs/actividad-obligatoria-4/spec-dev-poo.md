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




### 3.1 Prompt utilizado en GitHub Copilot

Para implementar las clases de la lógica de negocio se utilizó GitHub Copilot en modo Agent dentro de Visual Studio Code.

Se proporcionaron como contexto los archivos `js/script.js`, `index.html`, `spec-dev-poo.md` y los cuatro diagramas de actividades de la entrega anterior.

A continuación, se presenta el prompt completo utilizado:

```text
Actuá como desarrollador JavaScript especializado en Programación Orientada a Objetos.

Estoy trabajando en la Actividad Obligatoria N.º 4 de Programación Web I, en el proyecto de tienda online.

Mi rol es Desarrollador JavaScript POO (Lógica de Negocio).

CONTEXTO:
Revisá los archivos adjuntos:
- js/script.js
- index.html
- docs/03-specs/actividad-obligatoria-4/spec-dev-poo.md
- Los cuatro diagramas de actividades de la entrega anterior.

OBJETIVO:
Refactorizar la lógica de negocio existente para implementar una arquitectura orientada a objetos con clases JavaScript ES6.

REQUISITOS:

1. Crear la carpeta js/models/ si todavía no existe.

2. Implementar estas cuatro clases, respetando la especificación:

Producto.js
- Propiedades: nombre, categoria, tipo, estilo, talles, precio.
- Constructor con validaciones.
- Método verificarTalleDisponible(talle).
- Métodos toJSON() y fromJSON().

Catalogo.js
- Propiedad: productos.
- Métodos buscarProducto(nombre), filtrarProductos(campo, valor) y obtenerOpcionesFiltro(campo).
- Métodos toJSON() y fromJSON().

ItemCarrito.js
- Propiedades: producto, talle, cantidad, precio.
- Constructor con validaciones.
- Método calcularSubtotal().
- Métodos toJSON() y fromJSON().

Carrito.js
- Propiedad: items.
- Métodos buscarEnCarrito(producto, talle), agregarProducto(producto, talle, cantidad), modificarCantidad(producto, talle, cantidad), eliminarProducto(producto, talle), calcularTotal() y generarResumenCompra().
- Métodos toJSON() y fromJSON().

3. Mantener el comportamiento de las funciones de negocio existentes en js/script.js.

4. Usar módulos ES6 con import y export.

5. Implementar encapsulamiento, validaciones internas y manejo de errores.

6. Documentar constructores y métodos con JSDoc.

7. No utilizar prompt(), alert(), document ni manipulación del DOM dentro de las clases.

8. No implementar localStorage ni sessionStorage dentro de las clases. Esa responsabilidad corresponde al Desarrollador JS Storage.

9. Diseñar las clases para que puedan utilizarse desde el controlador js/script.js y probarse con Jasmine.

10. Implementar toJSON() y fromJSON() para permitir la serialización y recuperación de instancias.

11. Mantener los nombres de las propiedades y los comportamientos del proyecto original siempre que sea posible.

12. No modificar archivos de testing, documentación, package.json ni configuraciones del repositorio.

IMPORTANTE:
Por ahora, modificá únicamente los archivos dentro de js/models/.

No elimines ni refactorices todavía js/script.js porque esa tarea debe coordinarse con el Desarrollador JS Eventos + DOM.

Antes de escribir código, analizá las funciones actuales, identificá cómo se trasladan a las clases y explicá brevemente las decisiones de diseño.

Después generá las cuatro clases y mostrame un resumen de los archivos creados y las decisiones tomadas.
```



### 3.2 Código generado por Copilot

GitHub Copilot en modo Agent generó cuatro clases JavaScript ES6 para representar las entidades principales de la tienda online:

- `Producto.js`
- `Catalogo.js`
- `ItemCarrito.js`
- `Carrito.js`

Las clases se encuentran dentro de la carpeta `js/models/`.

Como evidencia del código generado, se presenta un fragmento real de la clase `Producto`, que implementa atributos privados, un constructor con validaciones y métodos públicos de acceso.

```javascript
export default class Producto {
  #nombre;
  #categoria;
  #tipo;
  #estilo;
  #talles;
  #precio;

  constructor(nombre, categoria, tipo, estilo, talles, precio) {
    this.#nombre = Producto.#validarTexto(nombre, "El nombre");
    this.#categoria = Producto.#validarTexto(categoria, "La categoría");
    this.#tipo = Producto.#validarTexto(tipo, "El tipo");
    this.#estilo = Producto.#validarTexto(estilo, "El estilo");

    if (
      !Array.isArray(talles) ||
      talles.length === 0 ||
      talles.some((talle) => typeof talle !== "string" || talle.trim() === "")
    ) {
      throw new Error("Los talles deben ser un array no vacío de cadenas válidas.");
    }

    this.#talles = talles.map((talle) => talle.trim());

    if (
      typeof precio !== "number" ||
      !Number.isFinite(precio) ||
      precio < 0
    ) {
      throw new Error("El precio debe ser un número válido mayor o igual a cero.");
    }

    this.#precio = precio;
  }

  static #validarTexto(valor, etiqueta) {
    if (typeof valor !== "string" || valor.trim() === "") {
      throw new Error(`${etiqueta} debe ser una cadena no vacía.`);
    }

    return valor.trim();
  }

  /** @returns {string} Nombre del producto. */
  get nombre() {
    return this.#nombre;
  }

  /** @returns {string[]} Copia de los talles disponibles. */
  get talles() {
    return [...this.#talles];
  }
}
```

**Explicación del código:**

La clase `Producto` representa una entidad del dominio de la tienda online.

Se implementó encapsulamiento mediante atributos privados identificados con el símbolo `#`, evitando que otras partes del programa modifiquen directamente sus valores.

El constructor verifica que los datos recibidos sean válidos. Los campos de texto no pueden estar vacíos, los talles deben formar un arreglo con valores correctos y el precio debe ser un número finito mayor o igual a cero.

Los getters permiten consultar las propiedades de manera controlada. En particular, el getter `talles` devuelve una copia del arreglo para proteger el estado interno del objeto.

El código también utiliza JSDoc para documentar los métodos y facilitar su comprensión y mantenimiento.

Este fragmento es una selección representativa de la clase original. La implementación completa se encuentra en `js/models/Producto.js`.



### 3.3 Ajustes manuales y verificaciones

Durante el desarrollo se utilizó GitHub Copilot en modo Agent para generar las cuatro clases de la lógica de negocio.

Se revisó la estructura general de los archivos generados y se comprobó que las clases estuvieran separadas en módulos independientes dentro de `js/models/`.

Se verificó la presencia de atributos privados, constructores, validaciones internas y métodos de acceso en la clase `Producto`.

También se realizó una verificación inicial de las clases mediante Node.js, que finalizó correctamente.

No se realizaron modificaciones manuales al código JavaScript generado durante esta etapa. Por lo tanto, no se registran ajustes manuales de implementación.

El diagrama UML se generó a partir de las clases existentes y se comprobó su visualización mediante PlantUML. Posteriormente, se exportó a formato PNG.

Queda pendiente la ejecución de las pruebas automatizadas de integración con los demás módulos de la aplicación.

### 3.4 Decisiones finales de arquitectura

Se decidió organizar la lógica de negocio mediante cuatro clases independientes:

- `Producto`: representa los productos disponibles y valida sus propiedades.
- `Catalogo`: administra la búsqueda y el filtrado de productos.
- `ItemCarrito`: representa cada elemento seleccionado y permite calcular su subtotal.
- `Carrito`: administra los elementos seleccionados y las operaciones de compra.

Las clases utilizan módulos JavaScript ES6 mediante `import` y `export`, facilitando su reutilización.

Se aplicó encapsulamiento mediante atributos privados y métodos públicos para controlar el acceso a los datos.

La lógica de negocio permanece separada de la interfaz HTML. Las clases no deben depender de `prompt()`, `alert()` ni de la manipulación directa del DOM.

El desarrollador de Eventos + DOM podrá utilizar los métodos públicos de las clases desde el controlador principal `js/script.js`.

El desarrollador de Storage podrá utilizar los métodos `toJSON()` y `fromJSON()` para almacenar y recuperar instancias de las clases.

El Tester QA podrá crear pruebas automatizadas para verificar constructores, validaciones, métodos de negocio y serialización.

Finalmente, la arquitectura fue representada mediante un diagrama UML desarrollado en PlantUML, disponible en formatos `.puml` y `.png`.
