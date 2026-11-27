# Spec — Tester QA/JS

**Rol:** Tester QA/JS
**Proyecto:** Tienda Digital (simulador de e-commerce)
**Entrega:** Segundo Parcial
**Autor:** Sebastian Viel (@Zikoloogo)
**Rama:** feature/tester-qa-js-testing-suite

---

## 1. Qué se va a hacer

Voy a validar la calidad del Segundo Parcial en dos frentes:

1. **Testing funcional con Jasmine:** crear `js/test/api.spec.js` (consumo asíncrono con fetch) y `js/test/library.spec.js` (librería externa), y actualizar `js/test/script.spec.js` y `js/test/models.spec.js` si el código cambió.
2. **Auditorías Lighthouse en tres momentos** (baseline, post-fetch y post-librería), documentadas con comparaciones en `test-case-11`, `test-case-12` y `test-case-13`.

Además voy a reportar como issues de GitHub todos los problemas encontrados, asignándolos al rol correspondiente, y a actualizar `testing-doc.md`.

## 2. Por qué se hace

La consigna del Segundo Parcial exige testing de funciones asíncronas y de la integración de la librería externa, con cobertura de casos de éxito y error, y auditorías de rendimiento y accesibilidad en tres momentos con un umbral mínimo de Performance ≥ 95. La tarea también responde a `plan.md`: RNF-04 (mantenibilidad), RNF-05 (trazabilidad) y RNF-06 (colaboración), y a CA-14 (testing documentado con evidencia).

Issue asociada: [#141](https://github.com/dantebiondi666-prog/tienda-online/issues/141)

## 3. Criterios de aceptación

- [x] `js/test/api.spec.js` completo (éxito, error HTTP, error de red, procesamiento con map/filter/reduce, integración con el DOM si aplica).
- [x] `js/test/library.spec.js` completo (inicialización, configuración, funcionalidad principal, errores, interacción con otras partes).
- [x] `script.spec.js` y `models.spec.js` actualizados si el código cambió (`script.spec.js` se amplió con la integración de AOS; `models.spec.js` no cambió porque no se modificaron las clases).
- [ ] Tests ejecutados en `test-runner.html` con capturas de resultados. *No aplica a las suites nuevas: `api.spec.js`, `library.spec.js` y `script.spec.js` son exclusivas de Node (ver `js/test/testing-doc.md`, sección 3). Se ejecutaron con `npm test` y `npm run cobertura`.*
- [x] Test Case 11 (baseline) documentado.
- [x] Test Case 12 (post-fetch) documentado con comparación contra el baseline.
- [x] Test Case 13 (post-librería) documentado con comparación contra post-fetch.
- [x] Issues creadas por cada problema encontrado, con pasos para reproducir y asignadas al rol correspondiente.
- [x] `js/test/testing-doc.md` y `docs/04-testing/testing-doc.md` actualizados con enlaces a los nuevos test cases.
- [x] Rama `feature/tester-qa-js-testing-suite` propia, con al menos un commit relevante.
- [ ] PR creado hacia `develop` con el template correspondiente.
- [ ] Entrada agregada en `changelog.md` con link al PR.
- [ ] Issue vinculada, cerrada tras el merge.

## 4. Uso de IA en esta tarea

- **Herramienta prevista:** GitHub Copilot en modo Agente (Visual Studio Code), para generar la estructura inicial de `api.spec.js` y `library.spec.js`.
- **Justificación:** acelera la escritura de casos repetitivos (éxito, error HTTP, error de red) y permite adjuntar como contexto los módulos reales (`js/api/apiService.js`, `js/utils/*.js`).
- **Contexto a adjuntar:** los módulos de fetch y de la librería, `js/models/*.js`, `js/test/script.spec.js` y este spec.
- **Qué se aceptó y qué se corrigió manualmente:** El plan original preveía Copilot para ambos specs; en la práctica se usaron dos herramientas. Claude generó `library.spec.js` (31 pruebas) y los 32 casos agregados a `api.spec.js`, que se verificaron primero con una copia del código real y luego en el repositorio; manualmente se agregaron los specs a los scripts de `package.json` y se resolvió el conflicto de ese archivo al incorporar `develop`. Copilot Agent generó, en dos pedidos, las pruebas de integración de AOS y las pruebas del estado de carga y de error del catálogo en `script.spec.js`, y se aceptaron tal como las generó (235 pruebas, 0 fallos), con la limitación de que los escenarios de AOS están reunidos en una sola prueba. El detalle de los ajustes está en la sección 7.4.
- **Prompt documentado en:** la sección 7 de este spec.

## 5. Plan de testing funcional (BEFORE)

Esta sección se commitea antes de escribir cualquier test o ejecutar Lighthouse.

### 5.1 `api.spec.js` (fetch)

| Caso | Tipo | Qué se verifica |
|---|---|---|
| Respuesta exitosa | Éxito | Devuelve los datos esperados (estructura y tipo). |
| Error HTTP (404/500) | Error | Lanza un error cuyo mensaje contiene "HTTP error". |
| Error de red | Error | `fetch` rechazado: el error se propaga y el estado de carga se limpia. |
| Estados de carga | Éxito/Error | `showLoading` y `hideLoading` se llaman en ambos caminos. |
| Procesamiento `map` | Éxito | Transforma la colección sin mutar el original. |
| Procesamiento `filter` | Éxito/borde | Filtra correctamente, incluida una colección vacía. |
| Procesamiento `reduce` | Éxito | Calcula el total esperado. |
| Datos inválidos | Borde | Se rechazan o sanean datos incompletos o mal formateados. |
| Integración con el DOM | Éxito | Los datos obtenidos se reflejan en el DOM (si aplica). |

Se simula `fetch` con espías de Jasmine (`spyOn(globalThis, "fetch")`) para que las pruebas no dependan de la red.

### 5.2 `library.spec.js` (librería externa)

| Caso | Tipo | Qué se verifica |
|---|---|---|
| Inicialización | Éxito | La librería se inicializa correctamente (`iniciar()` devuelve `true`). |
| Configuración | Éxito | Se aplica la configuración esperada (por ejemplo, atributos `data-aos` y retraso). |
| Funcionalidad principal | Éxito | `animar(el, efecto, retraso)` devuelve `true` y el elemento queda configurado. |
| Librería no disponible | Error | Si la librería global no existe, el módulo no rompe la aplicación. |
| Fallo de la librería | Error | `refrescar()` devuelve `false` si la librería lanza un error. |
| Restauración de contenido | Error | Tras el fallo, el elemento ya no tiene `data-aos` ni `data-aos-delay`, y `animar(el)` devuelve `false` (método `restaurarContenido()`, RC01 del code review). |
| Interacción con otras partes | Éxito | La animación convive con el catálogo y el carrito sin afectar su comportamiento. |

El módulo guarda indicadores internos, por lo que se importa dinámicamente en cada test para partir de un estado limpio.

### 5.3 Tests existentes

- `script.spec.js`: se actualiza si cambia el controlador (eventos y DOM).
- `models.spec.js`: se actualiza si se modifican las clases POO.
- Se mantiene o mejora la cobertura actual.

## 6. Plan de auditorías Lighthouse

| Test Case | Momento | Rama / estado | Archivo |
|---|---|---|---|
| 11 – Baseline | Al inicio, antes de integrar las features del parcial | `develop` en su estado actual | `test-case-11-lighthouse-baseline.md` |
| 12 – Post-fetch | Después de mergear la feature de fetch/API | `develop` con `feature/dev-async-fetch-api` | `test-case-12-lighthouse-post-fetch.md` |
| 13 – Post-librería | Después de mergear la feature de la librería externa | `develop` con la librería integrada | `test-case-13-lighthouse-post-library.md` |

**Umbrales mínimos:** Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95 y SEO ≥ 95. El baseline registra el punto de partida real, aunque no alcance los umbrales; cada incumplimiento se reporta como issue.

**Metodología:** Lighthouse en Chrome (DevTools), modo Navigation, dispositivo móvil, sobre la misma URL en los tres momentos, con navegador sin extensiones. Cada reporte incluye puntajes, métricas (FCP, LCP, TBT, CLS, Speed Index), problemas de accesibilidad, capturas y la comparación contra el momento anterior.

## 7. AT CLOSE – Evidencia del desarrollo

### 7.1 Prompt exacto utilizado

Se utilizaron dos herramientas de IA. En la sección 4 de esta spec estaba prevista únicamente GitHub Copilot Agent; la escritura de `library.spec.js` y la ampliación de `api.spec.js` se hicieron con Claude (asistente de IA de Anthropic) y se registra como desvío respecto del plan inicial.

**Claude: `library.spec.js` y ampliación de `api.spec.js`.**
Se trabajó en una conversación guiada y no con un único prompt. Archivos adjuntados como contexto: `js/utils/animaciones.js` (rama `feature/dev-libreria-externa-aos`), `js/api/apiService.js`, `js/test/api.spec.js` y la descripción del PR #136. Los mensajes que dieron origen a los tests fueron:

1. Consulta de cómo empezar el rol Tester ("Como empiezo que hago?"), junto con el mensaje del compañero de equipo que pedía el Lighthouse baseline antes de mergear el PR de Fetch ("necesito q hagas eso del lighthouse baseline") y avisaba de un método nuevo por el code review ("por el Code Review de Juan (RC01) agregué un método nuevo en js/utils/animaciones.js: restaurarContenido()").
2. "aca esta el 136", adjuntando la descripción del PR #136 (API del wrapper: `iniciar`, `animar`, `refrescar`, `estaDisponible`, `prefiereMovimientoReducido`).
3. Código de `js/utils/animaciones.js` obtenido con `git show` desde la rama de la librería.
4. Contenido de `js/test/api.spec.js` y `js/api/apiService.js` para detectar los casos que faltaban.

**GitHub Copilot Agent: pruebas de integración de AOS en `script.spec.js`.**
Archivos adjuntados como contexto: `js/script.js`, `js/utils/animaciones.js`, `js/test/script.spec.js`, `js/test/node-setup.js` y `js/test/library.spec.js`.

```text
Contexto: proyecto "Remer Us" (tienda online), Jasmine + JSDOM en Node. La librería AOS se integró mediante el wrapper js/utils/animaciones.js. En js/script.js se usa así: Animaciones.iniciar() al arrancar; en el render del catálogo, Animaciones.animar(article, "fade-up", Math.min(indice * 50, 300)) por cada tarjeta y luego Animaciones.refrescar(); en el render del carrito y del resumen de compra, Animaciones.animar(elemento, "fade-right", Math.min(index * 50, 300)) por cada línea y luego Animaciones.refrescar(). En index.html aos.js se carga por CDN, pero en JSDOM ese script no se ejecuta, así que globalThis.AOS no existe salvo que el test lo simule.

Tarea: agregar pruebas de integración a js/test/script.spec.js, SIN modificar las pruebas existentes ni ningún archivo fuente, que verifiquen:
1. Con AOS simulada (globalThis.AOS con init y refreshHard como espías) y sin movimiento reducido, las tarjetas del catálogo salen con data-aos="fade-up" y data-aos-delay escalonado (0, 50, 100... con tope de 300), y AOS.init se llamó una sola vez.
2. Con la misma configuración, las líneas del carrito y del resumen de compra salen con data-aos="fade-right" y retraso escalonado con tope de 300.
3. Después de renderizar catálogo o carrito, se llama a AOS.refreshHard.
4. Con movimiento reducido (matchMedia con matches true) o sin AOS (CDN caído), ningún elemento recibe data-aos y el catálogo y el carrito se renderizan igual que antes.

Reglas: leé js/script.js, js/utils/animaciones.js y node-setup.js antes de escribir; no inventes nombres de funciones, selectores ni formas de cargar el script. Como animaciones.js guarda indicadores internos (seIntentoIniciar, estaIniciada), cada prueba debe partir de un estado limpio (mirá cómo lo resuelve script.spec.js al cargar el script y cómo lo resuelve library.spec.js con importación dinámica). Simulá globalThis.AOS y matchMedia con espías de Jasmine y restauralos en afterEach. Seguí el estilo y el idioma (español) de las pruebas existentes. Al terminar ejecutá npm test y mostrame el resultado completo.
```

Resultado: Copilot agregó el bloque `describe("Integración de animaciones AOS")` en `js/test/script.spec.js`, sin modificar pruebas existentes ni archivos fuente.

**GitHub Copilot Agent (segundo pedido): estados de carga y de error del catálogo en `script.spec.js`.**
Motivo: tras la integración de AOS, el reporte de cobertura mostró que el bloque `catch` de `cargarCatalogo()` (estado de error ante un fallo de `fetch`) no tenía prueba a nivel del controlador, y la tabla 5.1 pedía los casos "Error de red" y "Estados de carga". Mismos archivos de contexto que el pedido anterior.

```text
Contexto: proyecto "Remer Us", Jasmine + JSDOM en Node. En js/script.js, cargarCatalogo() gestiona los estados de carga, éxito y error del catálogo (ver el bloque try/catch/finally). En js/test/script.spec.js ya existe el bloque "Integración de animaciones AOS" con el helper iniciarAplicacion.

Tarea: agregar pruebas a js/test/script.spec.js, SIN modificar las pruebas existentes ni archivos fuente, que verifiquen, simulando fetch:
1. Estado de carga: mientras la respuesta de fetch está pendiente, la grilla tiene aria-busy="true", el feedback del catálogo dice "Cargando productos..." y los controles del catálogo están deshabilitados.
2. Error de red (fetch rechazado) y error HTTP 500: la grilla queda vacía, las sugerencias del buscador quedan vacías, el carrusel queda oculto, el feedback muestra "No se pudieron cargar los productos. Recargá la página para volver a intentarlo." con el tipo de error, aria-busy vuelve a "false" y los controles del catálogo quedan deshabilitados.
3. Éxito: aria-busy="false", el carrusel visible y los controles habilitados.

Reglas: leé js/script.js y el helper iniciarAplicacion antes de escribir; no inventes selectores ni nombres. Reutilizá o extendé el helper sin romper las pruebas existentes. Restaurá los globales en afterEach. Estilo y español de las pruebas existentes. Al terminar ejecutá npm test y npm run cobertura y mostrame los resultados completos.
```

Resultado: Copilot agregó 4 pruebas (carga pendiente, rechazo de red, HTTP 500 y carga exitosa) y extendió el helper `iniciarAplicacion` con las opciones `fetchSimulado`, `esperarCarga` y `prepararEstadoError`. Las pruebas de error verifican además que se limpien los resultados previos de la grilla y de las sugerencias.

### 7.2 Resumen de resultados

**Pruebas (Node):** `npm test -- --seed=82574` ejecutó **235 pruebas con 0 fallos**.

| Suite | Pruebas | Autor del contenido |
|---|---:|---|
| `js/test/api.spec.js` | 49 | 17 de la PR #137 (Dev Fetch) y 32 agregadas por QA |
| `js/test/library.spec.js` | 31 | QA (Claude) |
| `js/test/script.spec.js`, bloque de integración de AOS y estados del catálogo | 5 (1 de AOS y 4 de carga y error) | QA (GitHub Copilot Agent) |
| Suites de AO4 | 150 | Equipo |

**Cobertura:** `npm run cobertura -- --seed=68382`: 98,91 % de sentencias y líneas, 97,36 % de ramas y 100 % de funciones. `apiService.js` y `animaciones.js` al 100 %; `script.js` pasó de 95,49 % a 97,04 % al cubrirse el estado de carga y de error de `cargarCatalogo()`.

**Lighthouse** (Microsoft Edge, ventana InPrivate, Navigation, Mobile):

| Test Case | Performance | Accessibility | Best Practices | SEO | Capturas |
|---|---:|---:|---:|---:|---|
| TC11 Baseline | 93 | 100 | 96 | 91 | `docs/04-testing/capturas/tc-11/` |
| TC12 Post-fetch | 96 | 100 | 96 | 91 | `docs/04-testing/capturas/tc-12/` |
| TC13 Post-librería | 97 | 100 | 96 | 91 | `docs/04-testing/capturas/tc-13/` |

No se detectaron regresiones entre momentos. SEO (91) es la única categoría por debajo del umbral de 95.

### 7.3 Issues reportadas

| Issue | Asignada a | Estado |
|---|---|---|
| [#139](https://github.com/dantebiondi666-prog/tienda-online/issues/139) Performance: recursos que bloquean el renderizado | Coordinador/DevOps | Abierta; corrección informada en la rama del Coordinador, pendiente de integración |
| [#140](https://github.com/dantebiondi666-prog/tienda-online/issues/140) SEO: falta meta description | Coordinador/DevOps | Abierta; corrección informada en la rama del Coordinador, pendiente de integración |

El TC12 y el TC13 no generaron issues nuevas porque no hubo regresiones. El error de consola de Best Practices corresponde al `favicon.ico` inexistente (404 del servidor local) y se dejó como observación menor, ya que el puntaje (96) cumple el umbral.

### 7.4 Ajustes manuales sobre los tests generados por IA

- `library.spec.js` se verificó primero con una copia del wrapper y luego en el repositorio. La copia local de `animaciones.js` se eliminó antes del merge para no commitear código de otro rol.
- Los specs nuevos se agregaron a los scripts `test` y `cobertura` de `package.json`, y se resolvió a mano el conflicto de `package.json` al incorporar `develop`, conservando `api.spec.js` y `library.spec.js` y la cobertura de `js/api/*.js`.
- En `api.spec.js` se conservaron intactas las 17 pruebas de la PR #137 y los casos de QA se agregaron al final.
- Los casos de `map`, `filter` y `reduce` de la tabla 5.1 no tienen pruebas separadas: en el código real están dentro de `procesarProductos` y quedan cubiertos por sus pruebas.
- Las 4 pruebas del estado de carga y de error del catálogo quedaron dentro del bloque `describe("Integración de animaciones AOS")`, porque Copilot extendió el helper `iniciarAplicacion` de ese bloque en lugar de crear uno nuevo; por eso el nombre del bloque no refleja todo su contenido.
- La prueba de integración de AOS generada por Copilot reúne tres escenarios en una sola prueba (`it`). Es una limitación conocida: `script.js` importa `animaciones.js` una única vez y sus indicadores internos persisten entre importaciones, por lo que el orden de los escenarios (movimiento reducido, sin AOS, con AOS) es significativo.
- La metodología prevista (sección 6) indicaba Chrome; las tres auditorías se ejecutaron en Microsoft Edge (ventana InPrivate), sin extensiones, manteniendo las mismas condiciones en los tres momentos. La sección 6 se conserva sin cambios por ser el plan ANTES.
- La tabla 5.1 nombra `showLoading` y `hideLoading`, pero esas funciones no existen en el código: el estado de carga se implementa con `aria-busy` y el mensaje "Cargando productos..." en `cargarCatalogo()` (`js/script.js`).
- Se corrigió la ubicación de los documentos: el índice de test cases vive en `docs/04-testing/testing-doc.md` y el informe de suites y cobertura en `js/test/testing-doc.md`.
- Los saltos de línea de `docs/04-testing/testing-doc.md` se conservaron en CRLF para que el diff muestre solo los cambios reales.