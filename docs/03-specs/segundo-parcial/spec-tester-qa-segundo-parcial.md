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

Issue asociada: [#NN](https://github.com/dantebiondi666-prog/tienda-online/issues/NN)

## 3. Criterios de aceptación

- [ ] `js/test/api.spec.js` completo (éxito, error HTTP, error de red, procesamiento con map/filter/reduce, integración con el DOM si aplica).
- [ ] `js/test/library.spec.js` completo (inicialización, configuración, funcionalidad principal, errores, interacción con otras partes).
- [ ] `script.spec.js` y `models.spec.js` actualizados si el código cambió.
- [ ] Tests ejecutados en `test-runner.html` con capturas de resultados.
- [ ] Test Case 11 (baseline) documentado.
- [ ] Test Case 12 (post-fetch) documentado con comparación contra el baseline.
- [ ] Test Case 13 (post-librería) documentado con comparación contra post-fetch.
- [ ] Issues creadas por cada problema encontrado, con pasos para reproducir y asignadas al rol correspondiente.
- [ ] `js/test/testing-doc.md` y `docs/.../testing-doc.md` actualizados con enlaces a los nuevos test cases.
- [ ] Rama `feature/tester-qa-js-testing-suite` propia, con al menos un commit relevante.
- [ ] PR creado hacia `develop` con el template correspondiente.
- [ ] Entrada agregada en `changelog.md` con link al PR.
- [ ] Issue vinculada, cerrada tras el merge.

## 4. Uso de IA en esta tarea

- **Herramienta prevista:** GitHub Copilot en modo Agente (Visual Studio Code), para generar la estructura inicial de `api.spec.js` y `library.spec.js`.
- **Justificación:** acelera la escritura de casos repetitivos (éxito, error HTTP, error de red) y permite adjuntar como contexto los módulos reales (`js/api/apiService.js`, `js/utils/*.js`).
- **Contexto a adjuntar:** los módulos de fetch y de la librería, `js/models/*.js`, `js/test/script.spec.js` y este spec.
- **Qué se aceptó y qué se corrigió manualmente:** [COMPLETAR al cerrar]
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

_(Se completa al cerrar la tarea.)_

### 7.1 Prompt exacto utilizado en Copilot Agent

Archivos adjuntados como contexto: [COMPLETAR]

### 7.2 Resumen de resultados

- Tests que pasaron / fallaron: [COMPLETAR]
- Capturas de Lighthouse (baseline, post-fetch, post-librería): [COMPLETAR]

### 7.3 Issues reportadas

| Issue | Asignada a | Estado |
|---|---|---|
| [COMPLETAR] | | |

### 7.4 Ajustes manuales sobre los tests generados por IA

[COMPLETAR]

---

*Spec redactada antes de iniciar el desarrollo de esta tarea, conforme a la
metodología definida en `docs/02-prompts/sdd-decisions.md`.*