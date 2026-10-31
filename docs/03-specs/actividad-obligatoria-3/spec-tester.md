
# Spec — Tester JavaScript / QA Engineer

**Autor:** Juan Martin Britos  
**Matrícula:** 155984  
**Materia:** Programación Web I  
**Entrega:** Actividad Obligatoria N.º 3  
**Proyecto:** Remer Us — Tienda Online  
**Rol:** Tester JavaScript / QA Engineer  
**Rama:** `feature/tester-javascript-jasmine`
**Issue asociada:** [#88](https://github.com/dantebiondi666-prog/tienda-online/issues/88)
---

## 1. Objetivo

Planificar e implementar pruebas automatizadas sobre la lógica de negocio JavaScript de Remer Us, utilizando Jasmine como framework de testing y Playwright MCP para ejecutar las pruebas en un navegador real.

Se buscará verificar que los cuatro flujos principales funcionen correctamente, contemplando operaciones normales, valores límite y entradas inválidas.

## 2. Plan de testing (BEFORE)

La estrategia consiste en desarrollar cuatro suites de pruebas, una por cada flujo principal implementado en `js/script.js`.

Los nombres definitivos de los flujos y las funciones a probar se confirmarán cuando estén disponibles los diagramas de actividades y el código JavaScript del desarrollador.

| Suite | Funcionalidad | Funciones a probar | Pruebas planificadas |
|---|---|---|---|
| Suite 1 | Consultar y filtrar catálogo | `filtrarProductos()`, `obtenerOpcionesFiltro()` | Filtrado correcto, resultados vacíos y criterios inválidos |
| Suite 2 | Consultar producto y talle | `buscarProducto()`, `verificarTalleDisponible()` | Producto existente, talle disponible/no disponible y entradas inválidas |
| Suite 3 | Gestionar carrito | `agregarAlCarrito()`, `modificarCantidad()`, `eliminarDelCarrito()` | Agregar, modificar, eliminar, cantidades inválidas y conservación del carrito original |
| Suite 4 | Resumen de compra | `calcularSubtotal()`, `calcularTotal()`, `generarResumenCompra()` | Cálculos correctos, carrito vacío y precios/cantidades inválidos |

Cada suite tendrá un mínimo de tres tests. Se incorporarán también pruebas de operaciones con arrays y objetos, según las funciones disponibles.

### 2.1 Tipos de pruebas

- **Happy path:** comprobar que las funciones devuelvan los resultados esperados con entradas válidas.
- **Casos borde:** verificar el comportamiento ante valores cero, negativos, valores grandes y cadenas vacías, cuando corresponda.
- **Validación de errores:** comprobar el tratamiento de datos inválidos, tipos incorrectos, `null` y `undefined`.
- **Arrays y objetos:** verificar operaciones de búsqueda, filtrado, modificación y procesamiento de colecciones, según la implementación.
- **Cálculos:** comprobar resultados numéricos y reglas de negocio aplicables.

### 2.2 Dependencias

Para comenzar la implementación de las pruebas será necesario contar con:

- Los cuatro diagramas de actividades del proyecto.
- El archivo `js/script.js` con las funciones implementadas.
- Funciones de negocio que reciban parámetros y devuelvan resultados.
- Separación entre la lógica de negocio y la interacción mediante `prompt()` y `alert()`.

## 3. Herramientas

### Jasmine

Se utilizará Jasmine mediante CDN para crear y ejecutar pruebas unitarias en el navegador.

Permitirá organizar los tests mediante `describe()` e `it()` y verificar resultados mediante assertions como `expect().toBe()` y `expect().toEqual()`.

### GitHub Copilot Agent Mode

Se utilizará como asistencia para generar las suites de pruebas a partir del archivo `js/script.js`.

Los tests generados serán revisados y ajustados para asegurar que representen correctamente el comportamiento esperado de las funciones.

### Playwright MCP

Se utilizará para abrir `js/test/test-runner.html` en un navegador real, ejecutar las suites de Jasmine y capturar evidencias de los resultados PASS/FAIL.

Estas herramientas permiten automatizar las verificaciones y documentar los resultados de forma reproducible.

## 4. Archivos previstos

| Archivo | Responsabilidad |
|---|---|
| `js/test/test-runner.html` | Cargar Jasmine, el código JavaScript y los tests |
| `js/test/script.spec.js` | Contener las cuatro suites de pruebas |
| `js/test/testing-doc.md` | Documentar ejecución, cobertura, resultados y evidencias |
| `docs/03-specs/actividad-obligatoria-3/spec-tester.md` | Registrar planificación, decisiones y cierre del trabajo |


## 5. Criterios de aceptación

- [x] La especificación fue commiteada antes de crear `script.spec.js`.
- [x] Se implementaron cuatro suites Jasmine, una por flujo principal.
- [x] Cada suite contiene al menos tres tests.
- [x] Se cubren casos normales, casos borde y validaciones de errores.
- [x] Se verifican operaciones con arrays y objetos.
- [x] `test-runner.html` carga correctamente Jasmine y los archivos necesarios.
- [x] Se ejecutaron las suites en navegador mediante Playwright MCP.
- [x] Se capturaron screenshots de los resultados PASS.
- [x] Se documentaron las pruebas y sus resultados en `js/test/testing-doc.md`.
- [x] No se detectaron fallos funcionales en los 16 tests ejecutados.
- [x] No fue necesario modificar `js/script.js`.
- [ ] Se actualizó `changelog.md` con la contribución y el enlace al PR.
- [ ] Se abrió una Pull Request hacia `develop` para revisión.


## 6. Evidencia de cierre (AT CLOSE)

### 6.1 Herramientas y asistencia utilizada

Se utilizó ChatGPT como asistencia para elaborar las cuatro suites de pruebas unitarias, tomando como referencia los flujos funcionales previstos para la Actividad Obligatoria N.º 3.

Posteriormente, se utilizó GitHub Copilot Agent Mode con Playwright MCP para ejecutar Jasmine en un navegador y verificar los resultados.

**Prompt utilizado en Copilot Agent Mode:**

> Utilizá Playwright MCP para abrir http://localhost:3000/js/test/test-runner.html y ejecutar las pruebas de Jasmine de la Actividad Obligatoria N.º 3.
>
> Verificá que se ejecuten las cuatro suites y registrá la cantidad total de tests, tests aprobados y fallidos.
>
> Tomá una captura de pantalla del resultado y guardala en js/test/capturas/jasmine-playwright-pass.png.
>
> Si hay errores, informá cuáles son y sus mensajes exactos.
>
> No modifiques js/script.js, script.spec.js ni otros archivos del proyecto. No hagas commits ni pushes. Solamente ejecutá las pruebas, guardá la captura y devolvé un resumen de los resultados.

### 6.2 Resultados de las pruebas

| Métrica | Resultado |
|---|---|
| Suites ejecutadas | 4 |
| Tests ejecutados | 16 |
| Tests PASS | 16 |
| Tests FAIL | 0 |
| Resultado general | PASS |

**Flujos evaluados:**

1. Consultar y filtrar catálogo.
2. Consultar producto y talle.
3. Gestionar carrito.
4. Resumen de compra.

No se detectaron fallos en los 16 casos de prueba ejecutados.

No se registraron Issues de bugs funcionales derivados de estos tests.

### 6.3 Evidencias de Playwright MCP

Las pruebas se ejecutaron en el navegador mediante Jasmine 5.1.1 y Playwright MCP.

**Ejecución manual:**

![Jasmine - 16 tests PASS](../../../js/test/capturas/jasmine-16-tests-pass.png)

**Ejecución mediante Playwright MCP:**

![Playwright MCP - 16 tests PASS](../../../js/test/capturas/jasmine-playwright-pass.png)

La documentación detallada se encuentra en:

`js/test/testing-doc.md`

### 6.4 Ajustes manuales y coordinación

Se crearon los archivos:

- `js/test/test-runner.html`
- `js/test/script.spec.js`
- `js/test/testing-doc.md`

Se implementaron cuatro suites con cuatro tests cada una.

Las pruebas verifican operaciones de filtrado, búsqueda, validación de talles, manipulación de arrays y objetos, gestión del carrito y cálculos.

No fue necesario modificar `js/script.js` para obtener los resultados PASS.

La coordinación con el Desarrollador JavaScript queda sujeta a la revisión de la Pull Request.

### 6.5 Obstáculos y resoluciones

**Problema 1 — Error HTTP 404**

Durante la primera ejecución, el navegador devolvió un error HTTP 404 al intentar acceder al ejecutor de Jasmine.

Se resolvió reiniciando el servidor local con la ruta absoluta del proyecto:

`npx.cmd serve C:\Users\juanm\tienda-online -l 3000`

**Problema 2 — Navegador de Playwright no instalado**

Playwright MCP informó que no disponía del navegador necesario.

Se autorizó la instalación del navegador de pruebas y posteriormente se ejecutaron correctamente las cuatro suites.

**Problema 3 — Error de recurso en consola**

Playwright informó un error de carga de recurso no identificado.

El mensaje no impidió la ejecución de Jasmine. Se deja documentado como observación pendiente de identificación.

### 6.6 Conclusión

La implementación y ejecución de las pruebas automatizadas de JavaScript finalizó satisfactoriamente.

Se verificaron cuatro flujos funcionales mediante 16 tests Jasmine, todos con resultado PASS.

Se conservaron evidencias de la ejecución manual y automatizada mediante Playwright MCP.

El trabajo queda pendiente de su integración mediante Pull Request hacia `develop`.

---

**Estado:** Implementación y testing completados. Pendiente de revisión e integración mediante Pull Request.
