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

## Prompt utilizado con GitHub Copilot Agent

Para realizar la implementación inicial se utilizó GitHub Copilot en modo Agent con el siguiente prompt:

```text
Estoy trabajando en la Actividad Obligatoria N.º 4 de Programación Web I.

Mi rol es Desarrollador JS Eventos + DOM.

Usá como contrato principal:
- docs/03-specs/actividad-obligatoria-4/spec-dev-eventos-dom.md
- las clases existentes de js/models/
- el index.html actual
- el js/script.js heredado de la Actividad Obligatoria N.º 3

Necesito transformar la aplicación actual basada en prompt() y alert() en una interfaz web interactiva completa.

Objetivos:

1. Refactorizar js/script.js para que funcione únicamente como controlador:
   - manejo de eventos;
   - manipulación del DOM;
   - validaciones de interfaz;
   - orquestación de llamadas a las clases del dominio.

2. No duplicar lógica de negocio que ya existe en:
   - Producto
   - Catalogo
   - ItemCarrito
   - Carrito

3. Eliminar completamente todos los prompt() y alert().

4. Implementar los cuatro flujos desde la interfaz HTML:

   Flujo 1: consultar y filtrar catálogo.
   - Usar el buscador y los filtros existentes.
   - Utilizar Catalogo.buscarProducto(), filtrarProductos() y obtenerOpcionesFiltro() cuando corresponda.
   - Actualizar el catálogo mediante DOM.
   - Mostrar feedback si no existen coincidencias.

   Flujo 2: consultar producto y disponibilidad de talle.
   - Reutilizar el modal Bootstrap existente.
   - Incorporar selección de talle.
   - Consultar disponibilidad mediante Producto.verificarTalleDisponible().
   - Mostrar el resultado visualmente dentro del modal.

   Flujo 3: gestionar carrito.
   - Crear en index.html una base visual funcional para el carrito, ya que actualmente no existe.
   - Permitir seleccionar talle y cantidad.
   - Agregar productos.
   - Modificar cantidades.
   - Eliminar productos.
   - Utilizar exclusivamente los métodos públicos de Carrito.
   - Renderizar el carrito dinámicamente.
   - Utilizar delegación de eventos cuando sea apropiado.
   - Esto debe resolver la continuidad documentada en la Issue #94.

   Flujo 4: generar resumen de compra.
   - Mostrar productos, cantidades, subtotales y total en la interfaz.
   - Utilizar Carrito.generarResumenCompra() y/o calcularTotal().
   - Mostrar correctamente el estado de carrito vacío.

5. Resolver la Issue #95:
   - El bloque <script> inline que actualmente maneja el modal en index.html no debe permanecer inline.
   - Integrar ese comportamiento dentro de js/script.js, manteniendo cuando corresponda el manejo de foco y accesibilidad existente.

6. Usar addEventListener() como patrón homogéneo.
   Considerar eventos click, input, change, submit, reset y eventos Bootstrap cuando correspondan.

7. Implementar validación en tiempo real con feedback visual:
   - mensajes de error;
   - mensajes de éxito;
   - clases de Bootstrap o CSS existentes;
   - habilitar/deshabilitar controles cuando corresponda.

8. No usar manejadores inline como onclick, onchange, etc.

9. Mantener js/script.js sin lógica de negocio.
   Si una operación corresponde al dominio, llamar al método de la clase correspondiente.

10. Mantener el diseño actual de Remer Us y utilizar Bootstrap para los nuevos controles, evitando cambios visuales innecesarios.

11. No implementar todavía acceso directo a localStorage o sessionStorage.
    La integración con js/utils/storage.js se realizará cuando la rama del Desarrollador Storage esté disponible. Dejar la estructura preparada para integrarla posteriormente sin duplicar la capa de storage.

12. Mantener código claro, nombres descriptivos y comentarios solo cuando aporten información útil.

Antes de aplicar los cambios:
- analizá index.html, js/script.js y las clases del dominio;
- indicame brevemente qué archivos vas a modificar y por qué;
- verificá que los métodos que vas a utilizar realmente existan en las clases.

Después realizá los cambios necesarios en index.html y js/script.js.

No modifiques los archivos de js/models/.
No modifiques archivos del Tester QA.
No implementes lógica correspondiente al rol Storage.
```

Luego de revisar manualmente la primera implementación se utilizó un segundo prompt de ajuste:

```text
Revisé la implementación y necesito realizar tres ajustes antes de cerrar los cambios.

No modifiques js/models/, archivos de testing ni Storage.

1. Completar el Flujo 1:
Actualmente los filtros dinámicos solo contemplan tipo, talle y estilo.
El flujo definido en plan.md contempla categoría, tipo, talle y estilo.

Agregar también el filtro por categoría:
- incorporar el fieldset correspondiente en index.html;
- incluir "categoria" en camposDeFiltro;
- generar sus opciones mediante Catalogo.obtenerOpcionesFiltro("categoria");
- mantener el mismo patrón de eventos y filtrado que los demás campos.

2. Corregir el Flujo 2 de disponibilidad de talle:
Actualmente el select del modal se llena únicamente con producto.talles, por lo que el usuario solo puede seleccionar talles disponibles y nunca puede ejecutarse realmente el caso "talle no disponible".

Cambiarlo para que el selector muestre todos los talles existentes en el catálogo utilizando Catalogo.obtenerOpcionesFiltro("talle").

Luego:
- utilizar Producto.verificarTalleDisponible(talle) para determinar si el talle seleccionado está disponible para ese producto;
- mostrar feedback visual de disponible/no disponible;
- mantener deshabilitado "Agregar al carrito" cuando el talle no esté disponible;
- habilitarlo únicamente cuando talle y cantidad sean válidos.

No dupliques la lógica de disponibilidad dentro de script.js.

3. Al restablecer el formulario de filtros, no borrar también el campo de búsqueda. El reset debe afectar solamente a los filtros.

Conservá el resto de la implementación actual sin cambios innecesarios.

Antes de terminar verificá nuevamente:
- que js/script.js no contenga prompt() ni alert();
- que no hayas incorporado lógica de negocio que ya pertenezca a las clases;
- que los cuatro flujos sigan funcionando desde la interfaz.
```

---

## Archivos utilizados como contexto

Los archivos utilizados como contexto para GitHub Copilot Agent fueron:

- `docs/03-specs/actividad-obligatoria-4/spec-dev-eventos-dom.md`
- `js/models/Producto.js`
- `js/models/Catalogo.js`
- `js/models/ItemCarrito.js`
- `js/models/Carrito.js`
- `index.html`
- `js/script.js`

También se tuvo en cuenta `plan.md` durante la revisión posterior para verificar que el Flujo 1 mantuviera los criterios de búsqueda y filtrado definidos previamente.

---

## Fragmento generado por Copilot

Uno de los fragmentos generados corresponde a la configuración de listeners del buscador, filtros y modal:

```js
searchForm.addEventListener("submit", (evento) => {
  evento.preventDefault();
  actualizarCatalogo();
});

searchInput.addEventListener("input", actualizarCatalogo);

filtersForm.addEventListener("change", actualizarCatalogo);

filtersForm.addEventListener("reset", () => {
  window.setTimeout(actualizarCatalogo, 0);
});

modal.addEventListener("show.bs.modal", prepararModal);

modal.addEventListener("shown.bs.modal", () => {
  modal.querySelector(".btn-close").focus();
});

modal.addEventListener("hidden.bs.modal", () => {
  if (state.botonOrigenModal?.isConnected) {
    state.botonOrigenModal.focus();
  }

  state.productoModal = null;
  modalForm.reset();
});
```

Este patrón se mantuvo para el resto de la aplicación, utilizando `addEventListener()` y funciones manejadoras para separar la configuración de eventos de las acciones realizadas sobre el DOM.

---

## Ajustes manuales realizados

Después de la primera respuesta de Copilot se revisó manualmente la implementación y se identificaron algunos ajustes necesarios.

### Filtro por categoría

La primera versión generada contemplaba filtros por tipo, talle y estilo, pero no incluía categoría.

Se solicitó incorporar `categoria` al conjunto de filtros y generar sus opciones utilizando:

```js
catalogo.obtenerOpcionesFiltro("categoria")
```

De esta forma se mantuvo el Flujo 1 definido previamente con los criterios categoría, tipo, talle y estilo.

### Verificación de talles no disponibles

Inicialmente el selector del modal mostraba únicamente los talles disponibles del producto seleccionado.

Esto impedía comprobar desde la interfaz el caso de un talle no disponible.

Se modificó el comportamiento para cargar en el selector todos los talles existentes en el catálogo mediante:

```js
catalogo.obtenerOpcionesFiltro("talle")
```

Luego se utiliza:

```js
producto.verificarTalleDisponible(talle)
```

para informar mediante feedback visual si el talle elegido se encuentra disponible para el producto.

Cuando el talle no está disponible, el botón para agregar al carrito permanece deshabilitado.

### Restablecimiento de filtros

En la primera implementación, el evento `reset` del formulario de filtros también eliminaba el contenido del buscador.

Se ajustó para que el botón `Restablecer filtros` afecte solamente los filtros y mantenga independiente el campo de búsqueda.

### Verificación funcional

La implementación final fue probada manualmente desde la interfaz utilizando un servidor local.

Se verificaron los siguientes comportamientos:

- búsqueda de productos;
- filtrado por categoría, tipo, talle y estilo;
- combinación de filtros;
- restablecimiento de filtros;
- visualización del detalle de producto;
- indicación de talle disponible y no disponible;
- habilitación y deshabilitación del botón de agregar al carrito;
- incorporación de productos al carrito;
- modificación de cantidades;
- eliminación de productos;
- actualización del total;
- actualización automática del resumen de compra;
- validación visual de cantidades inválidas;
- estado de carrito vacío.

También se verificó que la consola del navegador no presentara errores durante las pruebas realizadas.

---

## Decisiones finales de arquitectura

`js/script.js` quedó definido como controlador principal de la aplicación.

Sus responsabilidades son:

- inicializar la interfaz;
- registrar los event listeners;
- capturar las entradas del usuario;
- realizar validaciones relacionadas con la interfaz;
- invocar los métodos públicos de las clases del dominio;
- actualizar dinámicamente el DOM;
- controlar estados visuales y mensajes de feedback.

La lógica de negocio se mantiene dentro de las clases correspondientes de `js/models/`.

Las operaciones del catálogo utilizan `Catalogo`, mientras que la disponibilidad de talles utiliza `Producto` y las operaciones de agregar, modificar, eliminar y generar el resumen utilizan `Carrito`.

La lista del carrito utiliza delegación de eventos para gestionar los controles creados dinámicamente.

El bloque JavaScript que anteriormente se encontraba escrito directamente dentro de `index.html` fue trasladado a `js/script.js`, manteniendo el manejo del modal y la recuperación del foco.

`index.html` quedó responsable de la estructura de la interfaz y de proporcionar los controles necesarios para los cuatro flujos.

La integración con Storage no se implementó directamente en este rol. El controlador quedó preparado para integrarse posteriormente con la capa `js/utils/storage.js` desarrollada por el integrante responsable de persistencia, evitando duplicar responsabilidades entre roles.