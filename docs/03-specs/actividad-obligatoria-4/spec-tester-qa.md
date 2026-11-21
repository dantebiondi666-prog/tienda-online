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

> Estado: **parcial**. Este cierre documenta el testing de las clases del dominio (`js/models/`). Las partes que dependen del módulo de storage y del controlador de eventos y DOM se completan cuando esas ramas se integren en `develop`.

## 7. Prompts exactos utilizados en Copilot Agent

### 7.1 Generación de `js/test/models.spec.js`

**Archivos adjuntos como contexto:** `js/models/Producto.js`, `js/models/Catalogo.js`, `js/models/ItemCarrito.js`, `js/models/Carrito.js`, `js/script.js` y `docs/03-specs/actividad-obligatoria-4/spec-tester-qa.md`.

**Prompt utilizado:**

```text
Actuá como Tester QA de la Actividad Obligatoria N.º 4. Tu tarea es crear el archivo `js/test/models.spec.js` con una suite completa de Jasmine 5 para las cuatro clases de `js/models/`: `Producto`, `Catalogo`, `ItemCarrito` y `Carrito`.

Condiciones:

- El archivo es un módulo ES6. Importá cada clase con `import Producto from "../models/Producto.js";` (y de la misma forma las demás).
- Usá únicamente los nombres de métodos, parámetros y mensajes de error que existen en los archivos adjuntos. No inventes métodos ni comportamientos.
- Seguí el plan de la sección 3.1 de `spec-tester-qa.md`.
- No uses `prompt()`, `alert()`, DOM ni `window`. Los tests deben poder correr en Node y en el navegador.
- Un `describe` por clase, con `describe` anidados por categoría. Los nombres de los tests, en español y descriptivos.

Para cada clase cubrí:

1. **Constructores:** creación con parámetros válidos, valores por defecto y rechazo de parámetros inválidos.
2. **Métodos de negocio (happy path):** todos los métodos públicos, incluyendo el filtrado del catálogo por categoría, tipo, talle y estilo, la búsqueda, agregar, modificar y eliminar del carrito, el cálculo de subtotales y total y la generación del resumen de compra.
3. **Casos borde:** catálogo y carrito vacíos, mayúsculas y tildes, mismo producto con distinto talle, cantidades límite.
4. **Validaciones y errores:** cantidades cero, negativas, decimales y no numéricas, textos vacíos, talles inexistentes, precios inválidos y elementos que no existen. Verificá el tipo de error con `toThrowError`.
5. **Serialización:** `toJSON()` devuelve un objeto plano, `fromJSON()` reconstruye una instancia equivalente (ida y vuelta con `JSON.stringify` y `JSON.parse`), incluyendo `ItemCarrito` dentro de `Carrito`, y el manejo de datos incompletos.
6. **Encapsulamiento:** las propiedades privadas no se pueden modificar desde afuera y los métodos no alteran los argumentos que reciben.

Los tests tienen que probar comportamiento real del código, no valores triviales. Cada `it` debe tener al menos una aserción significativa.

Modificá únicamente `js/test/models.spec.js`. No toques ningún otro archivo, no hagas commits ni push. Podés ejecutar comandos de verificación, por ejemplo `node --input-type=module -e ...`, para comprobar que los tests que escribas son correctos.
```

**Resultado informado por Copilot:** creó `models.spec.js` con 49 tests Jasmine para las cuatro clases, cubriendo métodos de negocio, validaciones, casos borde, serialización anidada y encapsulamiento; ejecutó `npx jasmine js/test/models.spec.js` con 49 specs y 0 failures, y el único cambio fue el archivo solicitado.

### 7.2 Ampliación de tests de `Carrito` a partir del reporte de cobertura

**Archivos adjuntos como contexto:** `js/models/Carrito.js`, `js/models/Producto.js`, `js/models/ItemCarrito.js` y `js/test/models.spec.js`.

**Prompt utilizado:**

```text
Agregá tests al archivo existente `js/test/models.spec.js` para cubrir tres ramas que el reporte de cobertura (c8) marca como no ejecutadas en `js/models/Carrito.js`:

1. Línea 74, en `agregarProducto`: la rama en la que `producto` NO es una instancia de `Producto` y se convierte con `Producto.fromJSON`. Escribí un test que llame a `agregarProducto` pasando un objeto plano (el resultado de `toJSON()` de un `Producto`) y verifique que el carrito lo acepta y que el ítem resultante usa ese producto.
2. Líneas 86 y 119 (una en `agregarProducto` y la otra en `modificarCantidad`; verificá en el código qué método contiene cada línea): la rama en la que, al reemplazar un ítem existente, hay otros ítems en el carrito que se mantienen sin cambios. Escribí un test por método que parta de un carrito con dos líneas distintas, actualice solo una y verifique que la otra no cambia (mismo producto, talle y cantidad).

Usá únicamente los métodos y parámetros que existen en `Carrito.js`, `Producto.js` e `ItemCarrito.js`. Ubicá cada test dentro del `describe("Carrito")`, en la categoría que corresponda, con nombres en español y aserciones significativas. No modifiques los tests existentes ni ningún otro archivo, no hagas commits. Verificá con `npx jasmine js/test/models.spec.js`.
```

**Resultado informado por Copilot:** agregó los tres tests en la categoría de métodos de negocio de `Carrito` (conversión de un producto plano y conservación de las otras líneas al agregar o modificar); `npx jasmine js/test/models.spec.js` dio 52 specs y 0 failures, y solo se modificó ese archivo.

### 7.3 Ejecución del runner con Playwright MCP

**Prompt utilizado:**

```text
Usá Playwright MCP para abrir en un navegador real `http://localhost:8080/js/test/test-runner.html`, que ejecuta las suites de Jasmine del proyecto.

1. Esperá a que Jasmine termine de ejecutar.
2. Informame la cantidad exacta de specs ejecutados, cuántos pasaron y cuántos fallaron, tal como los muestra el encabezado de Jasmine.
3. Listame los nombres de los grupos (`describe`) de nivel superior que aparecen en el resultado, incluyendo Producto, Catalogo, ItemCarrito y Carrito.
4. Si hay errores en la consola del navegador (distintos de un 404 de favicon.ico), informalos.
5. Tomá una captura de pantalla de la página completa y guardala con el nombre `jasmine-playwright-117-tests-pass.png`.

No modifiques ningún archivo del repositorio ni hagas commits.
```

**Resultado informado por Copilot:** Jasmine 5.1.1 ejecutó 117 specs, 117 pasaron y 0 fallaron. Grupos de nivel superior: Flujo 1, Flujo 2, Flujo 3 y Flujo 4 (unitarios de AO3), Integración - Flujo 1, 2, 3 (orquestador), Flujo 3 (modificar y eliminar) y Flujo 4 (resumen y simulador), `Producto`, `Catalogo`, `ItemCarrito` y `Carrito`. La consola no mostró errores distintos del 404 de `favicon.ico`.

### 7.4 Prompt para storage.spec.js (Storage)

**Contexto:** se adjuntaron a Copilot Agent `js/utils/storage.js`, `docs/06-storage/storage-doc.md`, `js/test/models.spec.js`, `js/test/node-setup.js`, `js/models/Carrito.js` y esta spec de Tester QA.

**Prompt utilizado:**

```text
Actuá como Tester QA. Necesito la suite Jasmine de la capa de Storage: js/test/storage.spec.js.

Contexto:
- Proyecto con ES modules ("type":"module"). El módulo a testear es js/utils/storage.js (export default StorageUtil). Leelo completo ANTES de escribir tests: los tests tienen que afirmar el comportamiento REAL del código, no uno inventado.
- Jasmine 5. Se corre en Node 20 (npm test, sin localStorage nativo) y en el navegador (js/test/test-runner.html). js/test/node-setup.js ya define un Storage en memoria para Node (globalThis.Storage, localStorage, sessionStorage) solo si no existen, así que el spec NO debe crear mocks propios de localStorage: debe funcionar igual con el real y con el simulado.
- Seguí el estilo de js/test/models.spec.js: import ES, un describe por área, nombres de it en español, sin prompt(), alert(), window ni document.

Qué cubrir (un describe por grupo):
1. CLAVES: existen las 6 claves, están congeladas (Object.isFrozen), todas empiezan con "app:".
2. guardar / obtener: ida y vuelta de objeto, array, string, número y booleano; obtener de clave inexistente devuelve null; tipo "local" y "session" no se mezclan; clave inválida (vacía, no string) devuelve el valor de error documentado; tipo inválido.
3. actualizar: el comportamiento que documente el código (fusión de objetos o reemplazo); actualizar una clave inexistente.
4. eliminar y listar: eliminar clave existente e inexistente; listar con y sin prefijo; listar no mezcla local con session.
5. limpiar: limpiar("session"); limpiar("local") borra todo; limpiar("local", true) borra solo claves con prefijo "app:" y conserva las ajenas.
6. guardarInstancia / cargarInstancia: ida y vuelta real con un Carrito (usá la clase de js/models/Carrito.js con sus items); cargarInstancia sin datos devuelve null; instancia sin toJSON y clase sin fromJSON devuelven false / null.
7. Errores y robustez: simulá almacenamiento lleno con spyOn(Storage.prototype, "setItem").and.throwError(new DOMException("lleno", "QuotaExceededError")) y verificá que guardar NO lanza y devuelve el valor de error documentado; JSON corrupto escrito a mano con localStorage.setItem y leído con obtener no lanza; storage no disponible (si el código lo contempla). Espiá console.error con spyOn(console, "error") para que el reporte no se llene de ruido y verificá que se llamó.

Reglas:
- beforeEach: localStorage.clear() y sessionStorage.clear(). Los spies de Jasmine se restauran solos.
- Un it = una afirmación principal. Tests independientes entre sí.
- NO modifiques js/utils/storage.js ni ningún archivo fuera de los que te pido. Si un test falla porque el código se comporta distinto a su documentación, NO ajustes el código: dejá el test marcado con xit y un comentario "BUG:" explicando qué pasa, y listalo al final de tu respuesta.

Archivos que podés crear o modificar (solo estos):
- js/test/storage.spec.js (nuevo)
- package.json: agregar js/test/storage.spec.js a los scripts "test" y "cobertura", y --include="js/utils/*.js" a "cobertura" (mantener el escapado de comillas que ya tiene).
- js/test/test-runner.html: agregar <script type="module" src="storage.spec.js"></script> junto a models.spec.js.

Al terminar: corré npm test y npm run cobertura, y mostrame cantidad de specs, fallos y el % de cobertura de js/utils/storage.js.
```

**Decisión sobre el entorno Node:** Copilot consultó cómo resolver la ausencia de `Storage` en Node. Se autorizó modificar `node-setup.js` para añadir Storage en memoria, con límites: solo se crea si `globalThis.localStorage` no existe, se exponen instancias separadas para `localStorage` y `sessionStorage`, y no se modifica ninguna otra parte del archivo.

**Respuesta final de Copilot:** “Implementé la suite de Storage y la integré en `npm test`, `npm run cobertura` y el runner del navegador. Con tu autorización, ajusté `node-setup.js` para proveer Storage en memoria solo cuando no existe `localStorage`, con instancias separadas para local y session.

Verificación final:
- `npm test`: 149 specs, 0 fallos.
- `npm run cobertura`: 149 specs, 0 fallos.
- `storage.js`: 92,98 % de líneas y sentencias, 84,21 % de ramas y 100 % de funciones.
- Runner del navegador: 149 specs, 0 fallos. Único error de consola: 404 de `favicon.ico`.
- `git diff --check`: sin errores.

Archivos modificados: `storage.spec.js`, `node-setup.js`, `test-runner.html` y `package.json`. No modifiqué `storage.js` ni hice commits.”

---

## 8. Screenshots del test runner

| Captura | Ejecución |
|---|---|
| `js/test/capturas/jasmine-117-tests-pass.png` | Manual en el navegador (servidor local), 117 tests PASS |
| `js/test/capturas/jasmine-playwright-117-tests-pass.png` | Playwright MCP, 117 tests PASS |
| `js/test/capturas/jasmine-149-tests-pass.png` | Runner del navegador, 149 specs, 0 failures |

*(Las capturas finales con todas las suites de AO4, incluyendo `storage.spec.js`, se agregan al integrar los demás módulos.)*

---

## 9. Resumen de resultados

| Suite | Tests | PASS | FAIL |
|---|---|---|---|
| `script.spec.js` (AO3) | 22 | 22 | 0 |
| `integracion.spec.js` (AO3) | 43 | 43 | 0 |
| `models.spec.js` | 52 | 52 | 0 |
| `storage.spec.js` | 32 | 32 | 0 |
| **Total** | **149** | **149** | **0** |

`npm test`: 149 specs, 0 failures. `npm run cobertura`: 149 specs, 0 failures.

**Cobertura total:** 95,2 % de líneas y 90,84 % de ramas.

**Cobertura de `js/utils/storage.js`:** 92,98 % de líneas, 84,21 % de ramas y 100 % de funciones. Quedaron sin cubrir las líneas 200-202 y 234-236, correspondientes a ramas de error difíciles de simular.

**Cobertura de `js/models/`:** 98,84 % de líneas y 100 % de ramas.

**Cobertura de `js/script.js`:** 92,83 % de líneas y 85,02 % de ramas.
**Bugs reportados como Issues:** 1 (#103).

---

## 10. Ajustes manuales y coordinación

### Ajustes manuales realizados

1. **Verificación independiente del resultado de Copilot.** Los 49 tests iniciales se ejecutaron manualmente y se midió la cobertura con `c8`: las clases cubrían 98,84 % de las líneas y 98,07 % de las ramas. El reporte (`coverage/lcov.info`) mostró tres ramas sin cubrir en `Carrito.js` (líneas 74, 86 y 119) y las líneas 6 a 12 de `Producto.js` sin ejecutar.
2. **Ampliación dirigida.** Con el reporte se redactó un segundo prompt para cubrir las tres ramas de `Carrito.js` (7.2). Luego de agregar los tres tests, `Carrito.js` pasó a 100 % de cobertura de ramas.
3. **Código sin uso detectado.** Las líneas 6 a 12 de `Producto.js` son la función `normalizarTexto`, que está definida pero no se usa ni se exporta. No se corrige con tests y se reportó como Issue #103.
4. **Verificación de restricciones.** Se comprobó con una búsqueda en el archivo que `models.spec.js` no utiliza `window`, `prompt()`, `alert()` ni `document`.
5. **Configuración para módulos ES6.** Para importar las clases se declaró `"type": "module"` en `package.json`, se convirtió `js/test/node-setup.js` a módulo ES6 y se actualizaron los scripts `npm test` y `npm run cobertura` para incluir `models.spec.js` y medir `js/models/`. Se verificó que los 65 tests de AO3 siguieran pasando.
6. **Runner del navegador.** `js/test/test-runner.html` carga `models.spec.js` con `<script type="module">`. Como los módulos ES6 no se pueden cargar con `file://`, el runner se ejecuta desde un servidor local (`http-server`).
7. **Suite de Storage.** Se revisó el diff de `node-setup.js` y se confirmó que solo agrega el bloque del Storage en memoria, sin borrar la carga de `script.js`. Se verificó que `storage.spec.js` no contiene `xit`, `BUG`, `prompt()`, `alert()`, `window` ni `document`.
8. **Verificación de resultados.** Se ejecutaron `npm test` y `npm run cobertura` de forma independiente: ambos finalizaron con 149 specs y 0 fallos. No se detectaron bugs nuevos en `storage.js`.

### Coordinación con los desarrolladores

- **Desarrollador JS POO:** se revisó la PR #102 y se verificó que las clases quedaran preparadas para el testing (métodos deterministas, validaciones y serialización). Se reportó la Issue #103. La estrategia de módulos ES6 se acordó con el equipo para que el runner y la cobertura pudieran adaptarse.
- **Desarrollador JS Storage y Desarrollador JS Eventos + DOM:** *(pendiente, se completa al integrar sus módulos)*.