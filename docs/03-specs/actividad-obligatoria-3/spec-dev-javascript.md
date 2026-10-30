# Spec — Desarrollador JavaScript (Actividad Obligatoria N°3)
 
- **Rol:** Desarrollador JavaScript
- **Integrante:** Sebastian Viel (@Zikoloogo)
- **Rama:** `feature/dev-javascript-logica-negocio`
- **Rama base:** `develop`
- **Issue:** [#89](https://github.com/dantebiondi666-prog/tienda-online/issues/89)

---
 
## BEFORE (antes de abrir Copilot o escribir cualquier código)
 
### 1. Descripción de los 4 flujos y del menú principal
 
Los 4 flujos se implementan a partir de los diagramas de actividades del Arquitecto (`docs/05-diagramas/01-diagrama-de-actividades/`), que son el contrato de implementación.
 
| # | Flujo | Entrada (prompt) | Proceso | Salida (alert / console.log) |
|---|-------|------------------|---------|------------------------------|
| 1 | Consultar y filtrar el catálogo | Campo (categoría, tipo, talle o estilo) y valor | Normalizar, validar (con reintento) y recorrer el catálogo acumulando coincidencias | Lista de productos encontrados o aviso de que no hay coincidencias |
| 2 | Consultar producto y disponibilidad de talle | Nombre del producto y talle | Buscar el producto, validar el talle (ambos con reintento) y verificar si está disponible | Información del producto y disponibilidad del talle |
| 3 | Gestionar carrito simulado | Acción (agregar, modificar, eliminar, salir), producto, talle y cantidad | Validar datos, sumar a un elemento existente o agregar uno nuevo, modificar o eliminar; el menú se repite hasta salir | Estado actualizado del carrito y errores |
| 4 | Generar resumen de compra | Opción elegida en el menú principal | Si el carrito no está vacío, recorrerlo calculando subtotales (precio × cantidad) y el total | Resumen de productos con total, o aviso de carrito vacío |
 
**Menú principal con `prompt()`:** una función de interfaz repite el menú hasta que el usuario elige salir.
 
```
=== Remer Us - Simulador ===
1. Consultar y filtrar el catálogo
2. Consultar producto y disponibilidad de talle
3. Gestionar carrito
4. Resumen de compra
0. Salir
```
 
Cada opción llama a la función de interfaz de su flujo. Una opción inválida informa el error con `alert()` y vuelve a mostrar el menú.
 
**Datos del proyecto:**
 
- `catalogo`: array de 3 objetos tomados de `index.html`, con las propiedades `nombre`, `categoria`, `tipo`, `estilo`, `talles` (array de strings) y `precio` (número).
  - Remera: categoría "Indumentaria superior", tipo `remera`, estilo `casual`, talles `["S","M","L"]`, precio 15000.
  - Pantalón: categoría "Indumentaria inferior", tipo `pantalon`, estilo `casual`, talles `["38","40","42"]`, precio 22000.
  - Campera: categoría "Abrigo", tipo `campera`, estilo `urban`, talles `["M","L","XL"]`, precio 48000.
  - El estilo no figura en el HTML (solo existe como filtro), por lo que se asigna en el catálogo del JS.
- `carrito`: array de objetos `{ producto, talle, cantidad, precio }`. Se identifica cada elemento por producto y talle, para evitar duplicados y que modificar y eliminar sean inequívocos.

### 2. Decisiones de arquitectura
 
**Separación entre lógica de negocio e interacción:**
 
- **Lógica de negocio (funciones puras):** reciben parámetros, devuelven valores y no llaman a `prompt()` ni `alert()`. No modifican sus argumentos: las operaciones del carrito devuelven un carrito nuevo.
- **Capa de interacción (funciones de interfaz):** piden datos con `prompt()`, reintentan ante entradas inválidas, llaman a las funciones puras y muestran el resultado con `alert()` o `console.log()`. Aquí vive el estado del carrito de la sesión.

**Funciones planificadas:**
 
| Flujo | Funciones puras (testeables) | Funciones de interfaz |
|-------|------------------------------|-----------------------|
| General | `normalizarTexto(texto)` | `mostrarMenuPrincipal()`, `iniciarSimulador()` |
| 1 | `esCampoFiltroValido(campo)`, `filtrarProductos(catalogo, campo, valor)` | `ejecutarFlujoFiltrarCatalogo()` |
| 2 | `buscarProducto(catalogo, nombre)`, `esTalleValido(talle)`, `verificarTalleDisponible(producto, talle)` | `ejecutarFlujoConsultarProducto()` |
| 3 | `esCantidadValida(cantidad)`, `buscarEnCarrito(carrito, producto, talle)`, `agregarAlCarrito(carrito, producto, talle, cantidad, precio)`, `modificarCantidad(carrito, producto, talle, cantidad)`, `eliminarDelCarrito(carrito, producto, talle)` | `ejecutarFlujoGestionarCarrito()` |
| 4 | `calcularSubtotal(precio, cantidad)`, `calcularTotal(carrito)`, `generarResumenCompra(carrito)` | `ejecutarFlujoResumenCompra()` |
 
**Funciones expuestas globalmente:** todo el código va en `js/script.js`, sin IIFE ni módulos, para que el runner de Jasmine pueda invocar las funciones puras directamente. No se manipula el DOM ni se usan eventos (restricción de la consigna).

**Normalización de texto:** `normalizarTexto` aplica `trim`, pasa a minúsculas y elimina tildes, para que "Pantalón" y "pantalon" coincidan. Los talles se comparan en mayúsculas, y los talles numéricos del pantalón ("38") se manejan como strings.

**Arranque del simulador:** como no se permiten eventos, `iniciarSimulador()` se invoca al final de `js/script.js`, protegido con `if (typeof jasmine === "undefined")`. Así el test runner de Jasmine carga el archivo sin disparar los `prompt()`.

**Convenciones:** camelCase para variables y funciones, PascalCase solo si se define un constructor o clase, comentarios JSDoc en las funciones complejas.
 
### 3. Criterios de aceptación
 
- [x] 4 flujos completos con validación de entrada
- [x] Funciones con nombres descriptivos, parámetros y valores de retorno explícitos
- [x] Lógica separada de la UI: las funciones de negocio no llaman a `prompt()` ni `alert()` directamente
- [x] Funciones expuestas para testing (no encapsuladas en IIFE)
- [x] Menú principal con `prompt()` que permite elegir entre los 4 flujos
- [x] Código coherente con los diagramas de actividades (decisiones, ciclos y reintentos)
- [x] `js/script.js` referenciado correctamente desde `index.html`
- [x] Sin manipulación del DOM ni eventos

---
 
## AT CLOSE (evidencia de cierre)

### 1. Herramienta y contexto

- **Herramienta:** GitHub Copilot en modo Agente (Visual Studio Code).
- **Modelo utilizado:** Auto (selección automática de GitHub Copilot; enrutó la tarea a gpt-6luna).
- **Archivos adjuntos como contexto:**
  - los 4 diagramas `.puml` de `docs/05-diagramas/01-diagrama-de-actividades/` (generados por el Arquitecto);
  - `docs/03-specs/actividad-obligatoria-3/spec-dev-javascript.md`;
  - `index.html` (para tomar el catálogo real).

### 2. Prompt exacto utilizado

```text
Actuá como Desarrollador JavaScript de la Actividad Obligatoria N°3 del proyecto Remer Us. Usando como contexto los 4 diagramas de actividades .puml del Arquitecto (son el contrato de implementación: el código debe reflejar sus decisiones, ciclos y reintentos), el spec-dev-javascript.md (arquitectura y criterios de aceptación) y el index.html (catálogo real), generá el archivo js/script.js en JavaScript puro con los 4 flujos y un menú principal mediante prompt().

Catálogo (array "catalogo" de objetos con nombre, categoria, tipo, estilo, talles y precio):
- Remera: categoría "Indumentaria superior", tipo "remera", estilo "casual", talles ["S","M","L"], precio 15000
- Pantalón: categoría "Indumentaria inferior", tipo "pantalon", estilo "casual", talles ["38","40","42"], precio 22000
- Campera: categoría "Abrigo", tipo "campera", estilo "urban", talles ["M","L","XL"], precio 48000
El carrito es un array de objetos { producto, talle, cantidad, precio }, identificados por producto y talle.

Funciones puras (sin prompt ni alert, reciben parámetros y retornan valores, sin modificar sus argumentos; las operaciones del carrito devuelven un carrito nuevo):
- normalizarTexto(texto): trim, minúsculas y sin tildes
- esCampoFiltroValido(campo), filtrarProductos(catalogo, campo, valor) para los campos categoria, tipo, talle y estilo
- buscarProducto(catalogo, nombre), esTalleValido(talle), verificarTalleDisponible(producto, talle)
- esCantidadValida(cantidad) (entero positivo), buscarEnCarrito(carrito, producto, talle), agregarAlCarrito(carrito, producto, talle, cantidad, precio) (suma la cantidad si ya existe producto y talle), modificarCantidad(carrito, producto, talle, cantidad), eliminarDelCarrito(carrito, producto, talle)
- calcularSubtotal(precio, cantidad), calcularTotal(carrito), generarResumenCompra(carrito)
Las funciones que reciben datos inválidos deben lanzar un Error con mensaje claro (por ejemplo, cantidad no válida).

Funciones de interfaz (únicas que usan prompt, alert y console.log): mostrarMenuPrincipal(), ejecutarFlujoFiltrarCatalogo(), ejecutarFlujoConsultarProducto(), ejecutarFlujoGestionarCarrito(), ejecutarFlujoResumenCompra() e iniciarSimulador(). El estado del carrito de la sesión vive en la capa de interfaz. Respetá los reintentos de los diagramas y, si prompt() devuelve null (el usuario cancela), cortá el flujo para evitar bucles infinitos.

Menú principal: 1 filtrar catálogo, 2 consultar producto y talle, 3 gestionar carrito, 4 resumen de compra, 0 salir; con if/else if o switch y un ciclo que se repite hasta salir. Una opción inválida se informa con alert().

Restricciones:
- Todo en js/script.js, sin IIFE ni módulos, con las funciones declaradas globalmente para poder testearlas con Jasmine.
- Sin manipulación del DOM ni eventos.
- Nombres descriptivos en camelCase, comentarios JSDoc en las funciones complejas.
- Al final del archivo, invocar iniciarSimulador() solo si typeof jasmine === "undefined", para que el test runner no dispare los prompt().
- Agregá en index.html la referencia <script src="js/script.js"></script> antes del cierre de </body>, sin tocar el script inline existente del modal.
- No modifiques ningún otro archivo ni generes tests.
```

### 3. Resultado generado por Copilot

Copilot creó `js/script.js` (alrededor de 530 líneas) con el catálogo, las funciones puras de los 4 flujos, las funciones de interfaz, el menú principal y el guard `typeof jasmine === "undefined"`. También agregó la referencia a `js/script.js` en `index.html`, después del script inline del modal y sin modificarlo.

Copilot verificó la sintaxis con Node.js y ejecutó comprobaciones funcionales de la lógica, de los ciclos del carrito y de la cancelación de `prompt()`. No generó tests.

Verificaciones propias posteriores:

- Búsqueda en `js/script.js` de `document`, `window`, `addEventListener`, `querySelector`, `innerHTML` y `getElementById`: sin coincidencias (no hay DOM ni eventos).
- Todos los `prompt()` y `alert()` están en las funciones de interfaz, ninguno en las funciones puras.
- El cambio en `index.html` es una única línea: la referencia al script.
- Se probó el menú y los flujos en el navegador.

### 4. Fragmento generado y ajustes manuales para mejorar la testabilidad

La lógica de negocio generada por Copilot ya estaba separada de la interfaz. Los ajustes manuales fueron sobre cómo se muestran los resultados al usuario y no sobre la lógica.

**Ajuste 1 — Resultados visibles con `alert()`.** Copilot mostraba los resultados de los flujos solo con `console.log()`, por lo que al probar el simulador desde la página los resultados no se veían y cada flujo volvía al menú sin mostrar nada. Se agregó `alert()` en los flujos 1, 2, 3 y 4, manteniendo el `console.log()`.

Generado por Copilot:

```javascript
  const resultados = filtrarProductos(catalogo, campo, valor);
  if (resultados.length > 0) {
    console.log("Productos encontrados:", resultados);
  } else {
    console.log("No hay productos coincidentes.");
  }
```

Corregido:

```javascript
  const resultados = filtrarProductos(catalogo, campo, valor);
  if (resultados.length > 0) {
    const lista = resultados
      .map((producto) => `- ${producto.nombre} ($${producto.precio})`)
      .join("\n");
    alert(`Productos encontrados:\n${lista}`);
    console.log("Productos encontrados:", resultados);
  } else {
    alert("No hay productos coincidentes.");
    console.log("No hay productos coincidentes.");
  }
```

**Ajuste 2 — Opciones del filtro en el prompt.** El `prompt()` del valor a filtrar no indicaba qué valores existían. Se agregó la función pura `obtenerOpcionesFiltro(catalogo, campo)`, que obtiene las opciones desde el catálogo (así no hay que mantener la lista en dos lugares), y el prompt muestra las opciones entre paréntesis según el campo elegido.

**Ajuste 3 — Función pura `formatearCarrito`.** Para mostrar el carrito con `alert()` se agregó la función pura `formatearCarrito(elementosCarrito)`, que arma el texto y avisa cuando el carrito está vacío. Mantiene el formato fuera de la capa de interfaz y puede testearse de forma independiente.

**Ajuste 4 — Documentación JSDoc y comentarios.** Copilot solo había documentado una función con JSDoc. Se agregó JSDoc a las funciones puras principales (`normalizarTexto`, `filtrarProductos`, `buscarProducto`, `verificarTalleDisponible`, `agregarAlCarrito`, `calcularSubtotal`) y un comentario explicativo a cada función de interfaz (`ejecutarFlujo*` e `iniciarSimulador`), para cumplir con la consigna de legibilidad y buenas prácticas.

### 5. Decisiones finales sobre la estructura del código y cómo facilita el trabajo del Tester

- **Separación lógica/interfaz:** las funciones de negocio no llaman a `prompt()` ni `alert()`; reciben parámetros y devuelven valores. Solo las funciones `ejecutarFlujo*`, `mostrarMenuPrincipal` e `iniciarSimulador` interactúan con el usuario.
- **Funciones puras e inmutables:** las operaciones del carrito (`agregarAlCarrito`, `modificarCantidad`, `eliminarDelCarrito`) devuelven un carrito nuevo y no modifican el original, por lo que cada test parte de datos conocidos sin efectos colaterales.
- **Errores explícitos:** ante datos inválidos las funciones lanzan un `Error` con mensaje claro, lo que permite testear los casos de error con `expect(...).toThrow()`.
- **Funciones globales, sin IIFE:** todo el código está en `js/script.js` con funciones globales, para que `test-runner.html` pueda invocarlas directamente.
- **Guard de Jasmine:** `iniciarSimulador()` solo se ejecuta si `typeof jasmine === "undefined"`, de modo que al cargar el test runner no se disparan los `prompt()`.
- **Normalización de texto:** `normalizarTexto` (trim, minúsculas, sin tildes) hace que las búsquedas sean tolerantes a mayúsculas y tildes, y se puede testear de forma aislada.
- **Casos útiles para el Tester:** valores límite de cantidad (0, negativos, decimales, texto), talles no disponibles, productos inexistentes, carrito vacío, y sumar cantidad al agregar dos veces el mismo producto y talle.