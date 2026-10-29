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
 
- `catalogo`: array de objetos con las propiedades `nombre`, `categoria`, `tipo`, `estilo`, `talles` (array) y `precio`. Los productos se toman de `index.html`.
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
 
**Convenciones:** camelCase para variables y funciones, PascalCase solo si se define un constructor o clase, comentarios JSDoc en las funciones complejas.
 
### 3. Criterios de aceptación
 
- [ ] 4 flujos completos con validación de entrada
- [ ] Funciones con nombres descriptivos, parámetros y valores de retorno explícitos
- [ ] Lógica separada de la UI: las funciones de negocio no llaman a `prompt()` ni `alert()` directamente
- [ ] Funciones expuestas para testing (no encapsuladas en IIFE)
- [ ] Menú principal con `prompt()` que permite elegir entre los 4 flujos
- [ ] Código coherente con los diagramas de actividades (decisiones, ciclos y reintentos)
- [ ] `js/script.js` referenciado correctamente desde `index.html`
- [ ] Sin manipulación del DOM ni eventos
---
 
## AT CLOSE (se completa al finalizar la tarea)
 
> Esta sección se completará al terminar la implementación. No representa resultados ejecutados todavía.
 
### 1. Herramienta y contexto
 
- **Herramienta:** Pendiente.
- **Modelo utilizado:** Pendiente.
- **Archivos adjuntos como contexto:** Pendiente (`.puml` del Arquitecto y `spec-dev-javascript.md`).
### 2. Prompt exacto utilizado
 
```text
Pendiente de completar al ejecutar el prompt en Copilot Agent.
```
 
### 3. Resultado generado por Copilot
 
Pendiente.
 
### 4. Fragmento generado y ajustes manuales para mejorar la testabilidad
 
Pendiente.
 
### 5. Decisiones finales sobre la estructura del código y cómo facilita el trabajo del Tester
 
Pendiente.
 