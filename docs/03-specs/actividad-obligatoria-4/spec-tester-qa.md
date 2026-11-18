# Especificación técnica — Tester QA

**Proyecto:** Remer Us (`tienda-online`)  
**Materia:** Programación Web I  
**Entrega:** Actividad Obligatoria N.º 4  
**Rol:** Coordinador / DevOps + Tester QA (parte de Testing y QA)  
**Responsable:** Lucas Ivan Fischer (`@LucasFUces`)  
**Issue:** #100  
**Rama de trabajo:** `feature/tester-qa-specs`  
**Rama base:** `develop`

---

## Objetivo

Garantizar la calidad de la Actividad Obligatoria N.º 4 mediante testing automatizado con Jasmine sobre la nueva arquitectura: las clases del dominio en `js/models/`, la capa de storage en `js/utils/storage.js` y el controlador de eventos y DOM en `js/script.js`.

La entrega anterior contaba con 65 tests de Jasmine (22 unitarios sobre funciones puras y 43 de integración con mocks de `prompt()` y `alert()`) y una medición de cobertura con `c8` de 92,83 % de líneas y 85,02 % de ramas sobre `js/script.js`. Como la Actividad Obligatoria N.º 4 elimina `prompt()` y `alert()` y traslada la lógica de negocio a clases, esas suites deben refactorizarse y ampliarse.

---

## 1. ¿Qué se va a hacer?

- Refactorizar `js/test/script.spec.js` para reflejar la nueva arquitectura, donde `js/script.js` es solo el controlador de eventos y DOM.
- Reemplazar las pruebas de integración con mocks de `prompt()` y `alert()` de `js/test/integracion.spec.js` por pruebas equivalentes sobre las clases del dominio y sobre el controlador, de modo que no se pierda cobertura de los cuatro flujos.
- Crear `js/test/models.spec.js` con la suite completa de tests de las clases del dominio.
- Crear `js/test/storage.spec.js` con tests de las operaciones CRUD y del manejo de errores.
- Crear un archivo spec para cada módulo JavaScript del proyecto.
- Ejecutar las suites en `js/test/test-runner.html` con Playwright MCP en un navegador real y capturar screenshots de los resultados.
- Actualizar `js/test/testing-doc.md` con la nueva estructura de testing, las instrucciones para ejecutar cada módulo, las métricas de cobertura y las capturas.
- Reportar como Issues detalladas los bugs encontrados, asignándolas al rol correspondiente.

---

## 2. ¿Por qué se hace?

La nueva arquitectura separa responsabilidades, y cada capa necesita su propia suite:

- las **clases del dominio** concentran la lógica de negocio y deben probarse sin depender del DOM;
- el **storage** depende de APIs del navegador (`localStorage` y `sessionStorage`) y de casos de error (almacenamiento lleno, datos corruptos);
- el **controlador** manipula el DOM y solo puede validarse con un navegador real o un DOM simulado.

Además, la consigna exige mantener o mejorar la cobertura y reportar los bugs con pasos para reproducir.

---

# BEFORE — Plan previo a los tests

## 3. Plan de testing

La arquitectura definitiva de clases la define el Desarrollador JS POO en `spec-dev-poo.md`. Este plan se actualiza, dejando constancia en el spec, cuando las ramas de los demás roles estén integradas. Los casos se planifican por categoría.

### 3.1 `js/test/models.spec.js` — clases del dominio

Se testearán todas las clases de `js/models/` (se esperan al menos tres, correspondientes a las entidades de los flujos: producto, catálogo, carrito y resumen de compra).

- **Constructores:** creación con parámetros válidos, valores por defecto y rechazo de parámetros inválidos.
- **Métodos de negocio (happy path):** filtrado del catálogo por campo, búsqueda de productos, verificación de talle disponible, agregar, modificar y eliminar elementos del carrito, cálculo de subtotales y total, generación del resumen de compra.
- **Casos borde:** catálogo y carrito vacíos, cantidades límite, producto repetido con otro talle, coincidencias sin distinguir mayúsculas, producto que no pertenece al catálogo.
- **Validaciones y errores:** cantidades cero, negativas, decimales y no numéricas; textos vacíos; talles inexistentes; precios inválidos; elementos que no están en el carrito.
- **Serialización:** `toJSON()` devuelve un objeto plano con las propiedades esperadas, `fromJSON()` reconstruye una instancia equivalente (ida y vuelta) y maneja datos incompletos.
- **Encapsulamiento:** las propiedades protegidas no se modifican desde afuera y los métodos no alteran sus argumentos.

### 3.2 `js/test/storage.spec.js` — capa de storage

- **Create:** `guardar` con valores primitivos, objetos y arrays, tanto en `local` como en `session`.
- **Read:** `obtener` de una clave existente, de una inexistente (devuelve `null`) y deserialización automática.
- **Update:** `actualizar` de un dato existente y de uno inexistente.
- **Delete:** `eliminar` de una clave existente y de una inexistente.
- **Auxiliares:** `listar` por prefijo y sin prefijo, y `limpiar` sin afectar al otro tipo de storage.
- **Errores:** almacenamiento lleno (se simula que `setItem` lanza una excepción), JSON corrupto o mal formateado, tipo de storage inválido, clave vacía, y que cada operación devuelva un resultado controlado en lugar de interrumpir la aplicación.
- **Integración con POO:** guardar y recuperar una instancia de las clases mediante `toJSON()` y `fromJSON()`.

### 3.3 `js/test/script.spec.js` — controlador de eventos y DOM

- **Refactorización:** los 22 tests actuales de funciones puras se migran a los módulos de dominio correspondientes. En este archivo quedan los tests del controlador.
- **Cuando sea posible, manipulación del DOM:** inicialización de la aplicación, listeners de los controles de cada flujo, validación en tiempo real con feedback visual (clases CSS y mensajes), habilitación y deshabilitación de controles, mostrar y ocultar secciones, y presentación de resultados modificando el DOM.
- **Los cuatro flujos desde la interfaz:** filtrar catálogo, consultar producto y talle, gestionar carrito y resumen de compra, incluyendo el carrito que no tenía base visual en AO3 (Issue #94).
- **Sin `prompt()` ni `alert()`:** verificar que el proyecto no contenga llamadas a estos métodos.

### 3.4 Pruebas de integración que reemplazan a `integracion.spec.js`

Las 43 pruebas con mocks de `prompt()` y `alert()` dejan de tener sentido cuando esas llamadas se eliminan. Los escenarios que cubrían (cancelación, reintentos, entradas inválidas y mensajes) se reescriben como pruebas del controlador y de las clases, y el archivo se elimina o se reduce a lo que siga siendo válido. Se documenta qué escenarios se migraron.

### 3.5 Cobertura

Se mantiene la medición con `c8` y Jasmine en Node (`npm run cobertura`) y se amplía a todos los módulos de `js/`. La meta es mantener o mejorar la cobertura de la entrega anterior (92,83 % de líneas y 85,02 % de ramas). Si la estrategia de módulos (ES6 o scripts clásicos) lo requiere, se adapta `js/test/node-setup.js`, y se simulan `localStorage` y `sessionStorage` en Node para los tests de storage. Las líneas sin cubrir se declaran en `testing-doc.md`.

### 3.6 Reporte de bugs

Los bugs encontrados se reportan como Issues con título claro, comportamiento esperado vs obtenido, pasos para reproducir, test case que falla (código del test) y etiquetas apropiadas. Se asignan según el origen:

- lógica de negocio → Desarrollador JS POO;
- DOM y eventos → Desarrollador JS Eventos + DOM;
- storage → Desarrollador JS Storage.

---

## 4. Herramientas

- **Jasmine 5.1.1:** framework de testing ya utilizado en las entregas anteriores, cargado en `test-runner.html`.
- **GitHub Copilot Agent Mode:** se utiliza para generar los tests de `models.spec.js` y `storage.spec.js` y para refactorizar `script.spec.js`, porque puede recibir como contexto las clases de `js/models/`, `js/utils/storage.js` y `js/script.js` y proponer los casos a partir del código real. Sus resultados se revisan y ajustan manualmente.
- **Playwright MCP (`@playwright/mcp`):** se utiliza para abrir `js/test/test-runner.html` en un navegador real, ejecutar las suites y capturar screenshots de los resultados. Es necesario porque el storage y el DOM dependen del entorno del navegador.
- **`c8`:** medición de cobertura de líneas y ramas, ya configurada en `package.json`.

---

## 5. Criterios de aceptación

- [ ] `spec-tester-qa.md` commiteado antes de cualquier archivo spec de testing.
- [ ] `js/test/script.spec.js` refactorizado para la nueva arquitectura.
- [ ] `js/test/models.spec.js` creado con tests de constructores, métodos de negocio, validaciones y serialización.
- [ ] `js/test/storage.spec.js` creado con tests de CRUD y manejo de errores.
- [ ] Un archivo spec por cada módulo JavaScript del proyecto.
- [ ] `js/test/test-runner.html` carga todas las suites y no presenta fallos.
- [ ] Tests ejecutados exitosamente en `test-runner.html` mediante Playwright MCP.
- [ ] Screenshots del test runner con los resultados PASS/FAIL capturados.
- [ ] Cobertura medida con `c8` y mantenida o mejorada respecto de la entrega anterior.
- [ ] `js/test/testing-doc.md` actualizado con la estructura, las instrucciones de ejecución, las métricas y las capturas.
- [ ] Bugs reportados como Issues en GitHub, con pasos para reproducir y el test case que falla, asignados al rol correspondiente.
- [ ] Escenarios de `integracion.spec.js` migrados y documentados.
- [ ] PR `feature/tester-qa-specs` → `develop` con aprobación de otro integrante, registrada en `changelog.md` con su Issue #100.

---

## 6. Uso de IA en esta tarea

### Herramienta prevista

GitHub Copilot en modo Agente desde Visual Studio Code, junto con Playwright MCP.

### Uso previsto

Generar los nuevos archivos `models.spec.js` y `storage.spec.js` y refactorizar `script.spec.js`, adjuntando como contexto `js/models/*.js`, `js/utils/storage.js` y `js/script.js`. Playwright MCP se usa para ejecutar el runner en un navegador real y capturar los resultados.

### Validación humana

Los tests generados se revisan manualmente: se verifica que prueben comportamiento real y no valores triviales, que cubran casos borde y errores, y que sean coherentes con el código y con la documentación.

---

# AT CLOSE — Evidencia de cierre

> Esta sección se completa al finalizar las tareas de testing. No representa resultados ejecutados todavía.

## 7. Prompt exacto utilizado en Copilot Agent

**Archivos adjuntos como contexto:** *(completar)*

**Prompt para generar `models.spec.js` y `storage.spec.js`:** *(completar, en bloque de código)*

**Prompt para refactorizar `script.spec.js`:** *(completar, en bloque de código)*

---

## 8. Screenshots del test runner con Playwright MCP

*(completar con las capturas de cada suite y su ruta en `js/test/capturas/`)*

---

## 9. Resumen de resultados

| Suite | Tests | PASS | FAIL |
|---|---|---|---|
| `script.spec.js` | *(completar)* | *(completar)* | *(completar)* |
| `models.spec.js` | *(completar)* | *(completar)* | *(completar)* |
| `storage.spec.js` | *(completar)* | *(completar)* | *(completar)* |
| **Total** | *(completar)* | *(completar)* | *(completar)* |

**Cobertura:** *(completar: líneas, ramas, funciones y sentencias)*  
**Bugs reportados como Issues:** *(completar)*

---

## 10. Ajustes manuales y coordinación

**Ajustes manuales realizados en los tests:** *(completar)*

**Coordinación con los desarrolladores para mejorar la testabilidad del código:** *(completar)*