
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

| Suite | Funcionalidad | Pruebas planificadas |
|---|---|---|
| Suite 1 | Flujo principal 1 — pendiente de confirmar | Happy path, valores límite, datos inválidos |
| Suite 2 | Flujo principal 2 — pendiente de confirmar | Happy path, valores límite, datos inválidos |
| Suite 3 | Flujo principal 3 — pendiente de confirmar | Happy path, valores límite, datos inválidos |
| Suite 4 | Flujo principal 4 — pendiente de confirmar | Happy path, valores límite, datos inválidos |

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

- [ ] La especificación fue commiteada antes de crear `script.spec.js`.
- [ ] Se implementaron cuatro suites Jasmine, una por flujo principal.
- [ ] Cada suite contiene al menos tres tests.
- [ ] Se cubren casos normales, casos borde y validaciones de errores.
- [ ] Se verifican operaciones con arrays y objetos cuando corresponda.
- [ ] `test-runner.html` carga correctamente Jasmine y los archivos necesarios.
- [ ] Se ejecutaron las suites en navegador mediante Playwright MCP.
- [ ] Se capturaron screenshots de los resultados PASS/FAIL.
- [ ] Se documentaron las pruebas y sus resultados en `testing-doc.md`.
- [ ] Los bugs encontrados se registraron como Issues en GitHub, incluyendo pasos para reproducir y el test que falla.
- [ ] Se coordinó con el Desarrollador JavaScript cualquier ajuste necesario para mejorar la testabilidad.
- [ ] Se actualizó `changelog.md` con la contribución y el enlace al PR.
- [ ] Se abrió una Pull Request hacia `develop` para revisión.

## 6. Evidencia de cierre (AT CLOSE)

*Esta sección se completará después de implementar y ejecutar las pruebas.*

### 6.1 Prompt exacto utilizado en Copilot Agent

Pendiente. Se registrará el prompt utilizado para generar `script.spec.js`, incluyendo `js/script.js` como contexto.

### 6.2 Resultados de las pruebas

- Suites ejecutadas: pendiente.
- Tests ejecutados: pendiente.
- Tests PASS: pendiente.
- Tests FAIL: pendiente.
- Bugs reportados: pendiente.

### 6.3 Evidencias de Playwright MCP

Pendiente de incorporar las capturas del test runner con los resultados reales.

### 6.4 Ajustes manuales y coordinación

Pendiente de documentar los ajustes realizados a los tests generados y las decisiones tomadas junto al Desarrollador JavaScript.

### 6.5 Obstáculos y resoluciones

Pendiente de completar al finalizar la implementación.

---

**Estado:** Planificación inicial completada. Implementación de pruebas pendiente.
