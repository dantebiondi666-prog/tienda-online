# Testing Doc — Actividad Obligatoria N.º 2

**Proyecto:** Tienda Online  
**Rol:** Documentador / QA Tester  
**Tester:** Juan Martin Britos  
**Herramientas:** Playwright MCP, GitHub MCP, axe-core, Performance API y validadores W3C  

---

## 1. Objetivo

Este documento centraliza los resultados del proceso de QA realizado durante la Actividad Obligatoria N.º 2.

Las pruebas fueron divididas en dos etapas:

- **Momento 1 — Pre-merge:** evaluación de las ramas feature antes de su integración.
- **Momento 2 — Post-merge:** evaluación del proyecto integrado y posterior verificación de las correcciones realizadas.

Los casos ejecutados fueron:

1. TC1 — Compatibilidad Desktop.
2. TC2 — Responsive Design.
3. TC3 — Performance y tiempos de carga.
4. TC4 — Accesibilidad.
5. TC5 — HTML semántico y validación W3C.

---

# 2. Momento 1 — Pre-merge

## TC1 — Compatibilidad Desktop

Se realizaron pruebas de compatibilidad y visualización en los tamaños desktop definidos para la actividad.

La documentación detallada y sus evidencias se encuentran en:

`docs/04-testing/test-case-1.md`

> El detalle de este caso debe consultarse en su archivo individual.

---

## TC2 — Responsive Design

Se evaluaron:

- iPhone 14 Pro — 390x844.
- Samsung Galaxy S23 — 412x915.
- iPad Air — 820x1180.

Se detectó que la guía de talles quedaba parcialmente cortada en los dos viewports móviles.

**Resultado inicial:** FAIL  
**Bug registrado:** Issue #30

Luego de la corrección correspondiente se realizó un retest que obtuvo:

**RETEST ISSUE #30: PASS**

Documentación:

`docs/04-testing/test-case-2.md`

---

## TC3 — Performance y tiempos de carga

Se utilizaron Playwright MCP y la Performance API.

Métricas obtenidas durante el Momento 1:

| Métrica | Resultado |
|---|---:|
| DOMContentLoaded | 31.5 ms |
| Load Complete | 35.8 ms |
| DOM Interactive | 30.9 ms |

Las tres imágenes principales fueron verificadas y cargaron correctamente.

También se observó un error HTTP 404 correspondiente a `/favicon.ico`, previamente detectado en otros casos.

Documentación:

`docs/04-testing/test-case-3.md`

---

## TC4 — Accesibilidad

Se utilizó axe-core 4.10.2.

Inicialmente se detectó:

- 1 violación `serious`.
- Regla: `color-contrast`.
- 41 elementos afectados.
- Criterio relacionado: WCAG 1.4.3.

**Resultado inicial:** FAIL  
**Bug registrado:** Issue #31

Después de la corrección se realizó un retest:

- Violaciones totales: 0.
- `color-contrast`: no detectada.

**RETEST ISSUE #31: PASS**

Documentación:

`docs/04-testing/test-case-4.md`

---

## TC5 — HTML semántico y validación W3C

La revisión semántica mediante Playwright MCP obtuvo resultado PASS.

El Nu HTML Checker informó:

- 0 errores HTML.
- Avisos informativos.

Las hojas:

- `styles.css`
- `components.css`
- `responsive.css`

no pudieron validarse mediante W3C CSS Validator debido a respuestas HTTP 500 del servicio externo.

**Semántica:** PASS  
**HTML:** PASS  
**CSS:** NO EJECUTADO

Documentación:

`docs/04-testing/test-case-5.md`

---

# 3. Momento 2 — Post-merge

Después de integrar los cambios del equipo se ejecutaron nuevamente los cinco casos de prueba sobre la versión integrada.

## Estado inicial del Momento 2

| Test Case | Resultado inicial |
|---|---|
| TC1 — Compatibilidad Desktop | PASS |
| TC2 — Responsive Design | FAIL |
| TC3 — Performance | PASS |
| TC4 — Accesibilidad | FAIL |
| TC5 — Semántica / W3C | PASS |

Los fallos de TC2 y TC4 fueron informados al equipo y sometidos posteriormente a corrección y retesting.

---

## TC1 — Compatibilidad Desktop

Se verificaron los tamaños:

- 1920x1080.
- 1440x900.
- 1280x800.
- 1280x800.

El motor disponible durante la ejecución fue Chromium/Chrome en Windows.

Firefox, Safari y Edge no fueron ejecutados como motores reales. Los tamaños correspondientes fueron comprobados utilizando Chromium y esta limitación quedó registrada para evitar simular resultados.

No se detectaron problemas funcionales relevantes en los viewports comprobados.

**TC1 MOMENTO 2: PASS**

---

## TC2 — Responsive Design

Durante la primera ejecución del Momento 2 se volvió a detectar un problema en la guía de talles.

Mediciones iniciales:

- 390x844: tabla de 364px dentro de un contenedor de 291px.
- 412x915: tabla de 364px dentro de un contenedor de 313px.

La columna "US" quedaba fuera de la vista inicial.

**TC2 MOMENTO 2: FAIL**

Después de la corrección se ejecutó un nuevo retest.

Se verificó:

- ausencia de overflow horizontal global;
- desplazamiento horizontal contenido dentro del wrapper;
- acceso a la columna "US" mediante scroll interno;
- funcionamiento correcto en los viewports evaluados;
- ausencia de roturas evidentes en el resto de la interfaz.

**RETEST TC2: PASS**

---

## TC3 — Performance

Se ejecutó nuevamente la prueba mediante Performance API.

Métricas obtenidas:

| Métrica | Resultado |
|---|---:|
| DOMContentLoaded | 23 ms |
| Load Complete | 29.4 ms |
| DOM Interactive | 22.7 ms |

Las tres imágenes principales cargaron correctamente y no se detectaron errores funcionales de carga relevantes.

Los valores `transferSize = 0` observados en algunos recursos no fueron considerados por sí solos como errores.

**TC3 MOMENTO 2: PASS**

---

## TC4 — Accesibilidad

Durante la primera ejecución con axe-core 4.10.3 se detectó:

- 1 violación `serious`.
- Regla: `scrollable-region-focusable`.
- 1 elemento afectado.

La región desplazable correspondiente a la guía de talles no era accesible mediante teclado.

La violación anterior `color-contrast` no volvió a aparecer.

**TC4 MOMENTO 2: FAIL**

Después de la corrección se realizó un retest.

Se verificó:

- wrapper accesible mediante teclado;
- foco mediante `Tab`;
- desplazamiento horizontal mediante teclado;
- ausencia de overflow horizontal global;
- `scrollable-region-focusable` no detectada;
- `color-contrast` no detectada.

axe-core 4.10.3 informó:

- 0 violaciones.
- 48 reglas aprobadas.
- 1 regla incompleta.

**RETEST TC4: PASS**

---

## TC5 — HTML semántico y validación W3C

La estructura semántica fue revisada nuevamente.

El Nu HTML Checker informó:

- 0 errores HTML.
- 21 avisos informativos.

La validación CSS no pudo completarse debido a respuestas HTTP 500 del servicio externo W3C CSS Validator.

**Semántica:** PASS  
**HTML:** PASS  
**CSS:** NO EJECUTADO

**TC5 MOMENTO 2: PASS**

---

# 4. Issues y correcciones

Durante el proceso de QA se registraron bugs relacionados con los hallazgos relevantes.

Entre los issues documentados se encuentran:

- **Issue #30:** problema responsive en la guía de talles.
- **Issue #31:** contraste insuficiente detectado mediante axe-core.

Ambos fueron sometidos a retesting después de las correcciones correspondientes y obtuvieron resultado PASS.

Durante el Momento 2 se detectaron nuevos fallos relacionados con la guía de talles y su región desplazable. Estos fueron informados al equipo, corregidos y sometidos nuevamente a pruebas.

Los detalles completos de los retests se encuentran en:

`docs/04-testing/retests.md`

---

# 5. Evidencias

Las capturas se encuentran organizadas por Test Case y momento:

`docs/04-testing/capturas/`

La estructura utilizada separa:

- `tc-1`
- `tc-2`
- `tc-3`
- `tc-4`
- `tc-5`
- `retests`

y dentro de los casos correspondientes se mantienen las evidencias de Momento 1, Momento 2 y retests.

---

# 6. Resultado final

Después de las correcciones y retests realizados, los resultados verificados quedaron de la siguiente manera:

| Test Case | Estado final |
|---|---|
| TC1 — Compatibilidad Desktop | PASS |
| TC2 — Responsive Design | PASS después de retest |
| TC3 — Performance | PASS |
| TC4 — Accesibilidad | PASS después de retest |
| TC5 — Semántica / HTML | PASS |
| Validación CSS W3C | NO EJECUTADO |

Los problemas funcionales y de accesibilidad detectados durante las pruebas fueron informados al equipo y posteriormente verificados mediante nuevos tests.

La validación CSS permanece documentada como **NO EJECUTADO** debido a la respuesta HTTP 500 del servicio externo, sin atribuir ese inconveniente al código del proyecto.