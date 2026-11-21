# Especificación técnica — Desarrollador JS Eventos + DOM

**Actividad:** Actividad Obligatoria N.º 4  
**Rol:** Desarrollador JS Eventos + DOM  
**Responsable:** Dante Biondi (`@dantebiondi666-prog`)  
**Rama:** `feature/dev-eventos-dom`  
**Issue asociada:** #106  

---

## 1. Objetivo

Transformar la interacción actual del proyecto Remer Us, basada en `prompt()` y `alert()`, en una interfaz web interactiva mediante eventos del usuario y manipulación del DOM.

`js/script.js` funcionará como controlador principal de la aplicación. Su responsabilidad será capturar las acciones realizadas desde la interfaz, obtener y validar las entradas del usuario, invocar los métodos correspondientes de las clases del dominio y actualizar el DOM con los resultados.

La lógica de negocio no será implementada nuevamente en `js/script.js`, sino que se utilizarán las clases disponibles en `js/models/`.

---

# BEFORE

## 2. Estado inicial

La aplicación cuenta actualmente con los cuatro flujos desarrollados en la Actividad Obligatoria N.º 3:

1. Consultar y filtrar el catálogo.
2. Consultar producto y disponibilidad de talle.
3. Gestionar carrito.
4. Generar resumen de compra.

Estos flujos utilizan `prompt()` y `alert()` como mecanismo de entrada y salida.

Para la Actividad Obligatoria N.º 4 deberán funcionar completamente desde la interfaz HTML.

Actualmente `index.html` ya contiene:

- buscador de productos;
- filtros por tipo, talle y estilo;
- catálogo de productos;
- botones para visualizar el detalle de cada producto;
- modal Bootstrap con información del producto.

No existe todavía una interfaz completa para gestionar el carrito, situación documentada previamente en la Issue #94.

También existe un bloque de manipulación del DOM y eventos escrito directamente dentro de `index.html` para controlar el modal Bootstrap. Su reubicación forma parte de la Issue #95.

---

## 3. Clases del dominio a utilizar

El controlador utilizará las clases ya implementadas en `js/models/`.

### Producto

Se utilizará principalmente para consultar información y verificar la disponibilidad de talles mediante:

- `verificarTalleDisponible(talle)`

### Catalogo

Se utilizará para las operaciones relacionadas con búsqueda y filtrado:

- `buscarProducto(nombre)`
- `filtrarProductos(campo, valor)`
- `obtenerOpcionesFiltro(campo)`

### Carrito

Se utilizará para las operaciones del carrito:

- `agregarProducto(producto, talle, cantidad)`
- `modificarCantidad(producto, talle, cantidad)`
- `eliminarProducto(producto, talle)`
- `calcularTotal()`
- `generarResumenCompra()`

### ItemCarrito

Representará cada producto incorporado al carrito y será utilizado indirectamente mediante las operaciones de `Carrito`.

`js/script.js` no deberá duplicar estas operaciones ni implementar nuevamente reglas de negocio.

---

## 4. Patrón de manejo de eventos

Se utilizará `addEventListener()` como criterio homogéneo para registrar los eventos.

La configuración general seguirá el siguiente esquema:

1. Esperar la carga del DOM mediante `DOMContentLoaded`.
2. Inicializar las clases y el estado necesario de la aplicación.
3. Obtener las referencias a los elementos HTML.
4. Registrar los event listeners desde una función de configuración.
5. Utilizar funciones manejadoras con nombres descriptivos.
6. Capturar y validar la entrada del usuario.
7. Invocar los métodos de las clases del dominio.
8. Actualizar el DOM con el resultado.

No se definirán manejadores mediante atributos inline como `onclick`, `onchange` u otros equivalentes en HTML.

Cuando varios elementos dinámicos ejecuten acciones equivalentes se utilizará delegación de eventos si resulta apropiado.

---

## 5. Eventos y controles por flujo

### Flujo 1 — Consultar y filtrar catálogo

**Controles existentes:**

- buscador del header;
- filtros por tipo de prenda;
- filtros por talle;
- filtros por estilo;
- botón para restablecer filtros.

**Eventos previstos:**

- `input` sobre el buscador;
- `change` sobre los filtros;
- `reset` sobre el formulario de filtros.

**Comportamiento esperado:**

- leer los criterios seleccionados;
- consultar el catálogo mediante los métodos de `Catalogo`;
- actualizar los productos visibles;
- mostrar un mensaje cuando no existan coincidencias;
- restaurar el catálogo completo al limpiar los filtros.

La actualización deberá realizarse modificando el DOM, sin utilizar `alert()`.

---

### Flujo 2 — Consultar producto y disponibilidad de talle

**Controles existentes:**

- botones `Ver detalle`;
- modal Bootstrap de producto.

**Controles a incorporar o adaptar:**

- selector de talle dentro del detalle del producto;
- zona de feedback para indicar disponibilidad.

**Eventos previstos:**

- `click` sobre los controles de detalle;
- evento de apertura del modal Bootstrap;
- `change` sobre el selector de talle.

**Comportamiento esperado:**

- identificar el producto seleccionado;
- obtenerlo mediante `Catalogo`;
- mostrar sus datos en el modal;
- consultar la disponibilidad mediante `Producto.verificarTalleDisponible()`;
- informar visualmente si el talle está disponible o no.

El bloque DOM/eventos heredado actualmente dentro de `index.html` se trasladará al controlador o se reemplazará por la nueva implementación, resolviendo la Issue #95.

---

### Flujo 3 — Gestionar carrito

Este flujo requiere crear la base visual que actualmente no existe, según lo documentado en la Issue #94.

**Controles previstos:**

- selector de talle;
- selector o input de cantidad;
- botón `Agregar al carrito`;
- sección o panel de carrito;
- controles para modificar cantidades;
- controles para eliminar productos.

**Eventos previstos:**

- `change` sobre talle y cantidad;
- `click` para agregar un producto;
- `click` para modificar cantidades;
- `click` para eliminar productos.

Se utilizará delegación de eventos en la lista del carrito cuando los controles sean creados dinámicamente.

**Comportamiento esperado:**

- validar producto, talle y cantidad;
- utilizar `Carrito.agregarProducto()`;
- utilizar `Carrito.modificarCantidad()`;
- utilizar `Carrito.eliminarProducto()`;
- actualizar visualmente el contenido del carrito después de cada operación;
- mostrar feedback de éxito o error sin utilizar `alert()`.

La lógica de incorporación, modificación y eliminación permanecerá dentro de la clase `Carrito`.

---

### Flujo 4 — Generar resumen de compra

**Controles previstos:**

- sección de resumen del carrito;
- control para visualizar o actualizar el resumen.

**Eventos previstos:**

- actualización del resumen después de las modificaciones realizadas sobre el carrito;
- `click` si se incorpora un control específico para mostrar el resumen.

**Comportamiento esperado:**

- obtener la información mediante `Carrito.generarResumenCompra()`;
- mostrar productos, cantidades, subtotales y total;
- mostrar un estado apropiado cuando el carrito esté vacío;
- actualizar el contenido mediante manipulación del DOM.

---

## 6. Validación y feedback visual

Las entradas serán validadas antes de llamar a las operaciones correspondientes de las clases del dominio.

Se utilizarán eventos como `input` y `change` para brindar feedback en tiempo real.

Según el estado de cada control se podrán:

- aplicar o remover clases CSS;
- mostrar mensajes de error;
- mostrar mensajes de éxito;
- deshabilitar acciones cuando los datos no sean válidos;
- volver a habilitarlas cuando la entrada sea correcta.

La validación realizada en la interfaz no reemplazará las validaciones internas de las clases POO.

---

## 7. Funciones reutilizables de DOM

Para evitar repetir lógica de interfaz se prevé utilizar funciones auxiliares para tareas como:

- mostrar mensajes de error;
- mostrar mensajes de éxito;
- limpiar mensajes anteriores;
- renderizar productos;
- renderizar el carrito;
- renderizar el resumen de compra;
- actualizar estados visuales de controles;
- mostrar u ocultar secciones cuando corresponda.

Estas funciones serán exclusivamente responsables de la presentación y manipulación del DOM.

---

## 8. Separación de responsabilidades

La arquitectura seguirá esta división:

### `js/script.js`

Responsable de:

- inicialización;
- eventos;
- captura de datos desde HTML;
- validación de interfaz;
- manipulación del DOM;
- orquestación de las clases del dominio;
- integración con Storage cuando la capa correspondiente esté disponible.

### `js/models/*.js`

Responsables de:

- lógica de negocio;
- reglas y validaciones del dominio;
- catálogo;
- productos;
- carrito;
- cálculos y resumen de compra.

### `js/utils/storage.js`

Responsable de:

- persistencia mediante `localStorage` y `sessionStorage`;
- operaciones CRUD;
- serialización y deserialización.

El controlador consumirá estas capas pero no duplicará sus responsabilidades.

---

## 9. Integración con Storage

La implementación de Eventos + DOM quedará preparada para trabajar con `js/utils/storage.js`.

Una vez disponible la capa de Storage, se coordinará con el Desarrollador JS Storage qué estado se persiste y mediante qué claves.

La interfaz deberá poder actualizar el estado persistido cuando corresponda sin acceder directamente a `localStorage` o `sessionStorage` si existe una función equivalente en la capa de abstracción.

---

## 10. Criterios de aceptación

- [ ] `spec-dev-eventos-dom.md` fue commiteado antes de cualquier modificación a `js/script.js`.
- [ ] `js/script.js` funciona como controlador y no contiene lógica de negocio.
- [ ] Se utilizan las clases disponibles en `js/models/`.
- [ ] Se eliminaron todas las llamadas a `prompt()`.
- [ ] Se eliminaron todas las llamadas a `alert()`.
- [ ] Los cuatro flujos funcionan desde la interfaz HTML.
- [ ] Todos los controles relevantes poseen event listeners.
- [ ] Se utiliza un patrón homogéneo basado en `addEventListener()`.
- [ ] Se aplica delegación de eventos cuando corresponde.
- [ ] Las entradas poseen validación y feedback visual.
- [ ] Los controles pueden habilitarse o deshabilitarse según su estado.
- [ ] Los resultados se muestran mediante manipulación del DOM.
- [ ] Se crean, actualizan o eliminan elementos dinámicamente cuando corresponde.
- [ ] Se implementan estados visuales de error, éxito y validación.
- [ ] Se implementa una interfaz funcional para el carrito, resolviendo la Issue #94.
- [ ] Se resuelve o reubica el bloque DOM/eventos heredado de la Issue #95.
- [ ] La implementación queda preparada para integrarse con `js/utils/storage.js`.
- [ ] Las funciones principales quedan documentadas con comentarios claros.
- [ ] No quedan `console.log()` innecesarios.

---

# AT CLOSE

> Esta sección se completará únicamente después de finalizar la implementación.

## Prompt utilizado con GitHub Copilot Agent

```text
Pendiente.
```

## Archivos utilizados como contexto

Pendiente.

## Fragmento generado por Copilot

Pendiente.

## Ajustes manuales realizados

Pendiente.

## Decisiones finales de arquitectura

Pendiente.