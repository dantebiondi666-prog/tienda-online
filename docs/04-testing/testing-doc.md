# Testing Doc — Primer Parcial

**Proyecto:** Tienda Online  
**Entrega:** Primer Parcial — Programación Web I  
**Alcance:** Test Cases TC6–TC10 y retest final sobre la release desplegada  
**Herramienta de retest final:** Playwright MCP  
**Deployment evaluado:** https://dantebiondi666-prog.github.io/tienda-online/  
**Fecha del retest final:** 2026-10-19  

---

## 1. Objetivo

Este documento centraliza la evidencia de testing correspondiente al Primer Parcial de Programación Web I.

Para esta entrega se documentan los Test Cases TC6 a TC10, correspondientes a la migración responsive a Bootstrap, Carousel, Modal y componentes HTML avanzados.

Los archivos individuales de cada Test Case conservan la evidencia de las ejecuciones realizadas durante el desarrollo de las ramas feature. Como cierre de la entrega, se realizó además un retest final mediante Playwright MCP sobre el deployment público de `release/primer-parcial`.

Los casos correspondientes al Primer Parcial son:

1. TC6 — Migración responsive a Bootstrap.
2. TC7 — Carousel de destacados.
3. TC8 — Modal de detalle de producto.
4. TC9 — Componente HTML avanzado `details/summary`.
5. TC10 — Componente HTML avanzado `datalist`.

La documentación de TC1 a TC5 se conserva en este archivo como antecedente histórico del proceso de QA realizado durante la Actividad Obligatoria N.º 2.

## Índice de Test Cases

- [TC1 — Compatibilidad Desktop](./test-case-1.md)
- [TC2 — Responsive Design](./test-case-2.md)
- [TC3 — Performance y tiempos de carga](./test-case-3.md)
- [TC4 — Accesibilidad](./test-case-4.md)
- [TC5 — HTML semántico y validación W3C](./test-case-5.md)
- [TC6 — Migración responsive a Bootstrap](./test-case-6.md)
- [TC7 — Carousel de destacados (Bootstrap)](./test-case-7.md)
- [TC8 — Modal de detalle de producto (Bootstrap)](./test-case-8.md)
- [TC9 — Componente HTML avanzado details/summary](./test-case-9.md)
- [TC10 — Componente HTML avanzado datalist](./test-case-10.md)

# Testing del Primer Parcial — TC6 a TC10

## TC6 — Migración responsive a Bootstrap

Se evaluó el comportamiento responsive de la interfaz después de la migración a Bootstrap 5.

La ejecución original y sus correcciones se encuentran documentadas en:

- [TC6 — Migración responsive a Bootstrap](./test-case-6.md)

## TC7 — Carousel de destacados

Se verificó el funcionamiento del Carousel Bootstrap, sus controles, indicadores, imágenes y comportamiento responsive.

La ejecución original se encuentra documentada en:

- [TC7 — Carousel de destacados](./test-case-7.md)

## TC8 — Modal de detalle de producto

Se verificó el funcionamiento del Modal Bootstrap, su contenido, controles de cierre y adaptación responsive.

La ejecución original se encuentra documentada en:

- [TC8 — Modal de detalle de producto](./test-case-8.md)

## TC9 — Componente details/summary

Se verificó el funcionamiento, accesibilidad mediante teclado y adaptación responsive del componente HTML avanzado `details/summary`.

La ejecución original se encuentra documentada en:

- [TC9 — details/summary](./test-case-9.md)

## TC10 — Componente datalist

Se verificó la asociación del buscador con el elemento `datalist`, sus opciones y su funcionamiento mediante teclado.

La ejecución original se encuentra documentada en:

- [TC10 — datalist](./test-case-10.md)

---

# 2. Momento 1 — Pre-merge

## TC1 — Compatibilidad Desktop

Se realizaron pruebas de compatibilidad y visualización en los tamaños desktop definidos para la actividad.

La documentación detallada y sus evidencias se encuentran en:

- [TC1 — Compatibilidad Desktop](/docs/04-testing/test-case-1.md)

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

## Momento 1

- [Issue #30 — Problema responsive en guía de talles](https://github.com/dantebiondi666-prog/tienda-online/issues/30)
- [Issue #31 — Contraste insuficiente detectado mediante axe-core](https://github.com/dantebiondi666-prog/tienda-online/issues/31)

Ambos issues fueron sometidos a retesting después de las correcciones correspondientes y obtuvieron resultado PASS.

## Momento 2

Durante el Momento 2 se detectaron dos nuevos fallos relacionados con la guía de talles y su accesibilidad:

- [Issue #36 — Guía de talles genera overflow interno en viewports móviles](https://github.com/dantebiondi666-prog/tienda-online/issues/36)
- [Issue #37 — Tabla de talles detectada como región desplazable no accesible por teclado](https://github.com/dantebiondi666-prog/tienda-online/issues/37)

Los dos hallazgos fueron corregidos y posteriormente sometidos a retesting mediante Playwright MCP.

Los resultados finales fueron

- TC2 — Responsive Design: PASS después del retest.
- TC4 — Accesibilidad: PASS después del retest.

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

y dentro de los casos correspondientes se mantienen las evidencias de Momento 1 y Momento 2.

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
---

# 7. Verificación final posterior a la integración

Después de que la corrección de la guía de talles y accesibilidad fuera aprobada e integrada a `develop`, se incorporaron los últimos cambios de `develop` a la rama de QA.

Posteriormente se ejecutó una verificación final mediante Playwright MCP para confirmar que las correcciones de TC2 y TC4 continuaran funcionando correctamente con los cambios integrados.

## TC2 — Verificación final responsive

Se evaluaron nuevamente:

- iPhone 14 Pro — 390x844.
- Samsung Galaxy S23 — 412x915.
- iPad Air — 820x1180.

Los tres dispositivos obtuvieron resultado PASS.

Se confirmó:

- ausencia de overflow horizontal global;
- tabla contenida dentro de su wrapper;
- scroll horizontal interno en dispositivos móviles;
- acceso a todas las columnas, incluida `US`;
- ausencia de elementos principales cortados o superpuestos;
- funcionamiento general de header, navegación, catálogo, imágenes, guía de talles, formulario y footer.

**FINAL TC2 MOMENTO 2: PASS**

---

## TC4 — Verificación final de accesibilidad

Se ejecutó axe-core 4.10.3 sobre la versión con los últimos cambios integrados.

Resultado:

- Critical: 0.
- Serious: 0.
- Moderate: 0.
- Minor: 0.
- Total de violaciones: 0.

La regla `scrollable-region-focusable` ya no aparece como violación.

También se comprobó que el wrapper de la guía de talles:

- es alcanzable mediante `Tab`;
- presenta foco visible;
- permite desplazamiento horizontal mediante teclado;
- permite acceder a la columna `US`;
- no provoca overflow horizontal global.

La regla `color-contrast` no fue reportada como violación, aunque axe-core la dejó como `INCOMPLETE` para 6 elementos cuyo contraste no pudo determinar automáticamente.

**FINAL TC4 MOMENTO 2: PASS**

### Limitación

El resultado de 0 violaciones no implica que axe-core haya confirmado automáticamente el contraste de los 6 elementos clasificados como `INCOMPLETE`.

---

# 8. Estado definitivo del testing

Después de la integración de las correcciones y de la verificación final, el estado documentado es:

| Test Case | Estado definitivo |
|---|---|
| TC1 — Compatibilidad Desktop | PASS con limitación de motores |
| TC2 — Responsive Design | PASS |
| TC3 — Performance | PASS |
| TC4 — Accesibilidad | PASS |
| TC5 — Semántica / HTML | PASS |
| Validación CSS W3C | NO EJECUTADO |

Los fallos encontrados en TC2 y TC4 durante el Momento 2 fueron corregidos y posteriormente verificados después de la integración de los cambios.

La validación CSS mediante W3C CSS Validator permanece como `NO EJECUTADO` debido a la respuesta HTTP 500 del servicio externo.

La compatibilidad específica con motores reales de Firefox, Safari y Edge permanece documentada como una limitación del TC1.


# Retest final — Release desplegada del Primer Parcial

Como cierre del proceso de QA se ejecutó un retest final mediante Playwright MCP sobre el deployment público correspondiente a `release/primer-parcial`.

**URL evaluada:**  
https://dantebiondi666-prog.github.io/tienda-online/

**Fecha:** 2026-10-19  
**Herramienta:** Playwright MCP

Las pruebas se realizaron sobre la versión desplegada y no sobre `localhost` ni sobre las ramas feature originales.

## TC6 — Migración responsive a Bootstrap

Se evaluaron:

- Desktop — 1920x1080.
- iPad Air — 820x1180.
- iPhone 14 Pro — 390x844.
- Samsung Galaxy S23 — 412x915.

Resultados de overflow horizontal:

| Viewport | scrollWidth | clientWidth | Resultado |
|---|---:|---:|---|
| Desktop | 1905 | 1905 | PASS |
| iPad Air | 805 | 805 | PASS |
| iPhone 14 Pro | 375 | 375 | PASS |
| Samsung Galaxy S23 | 397 | 397 | PASS |

Se confirmó:

- correcta distribución responsive de filtros y catálogo;
- tarjetas sin compresión ni superposición;
- ausencia de overflow horizontal global;
- guía de talles utilizable;
- Carousel sin alteraciones sobre el ancho del layout;
- ausencia de errores relevantes de consola.

**RETEST FINAL TC6: PASS**

---

## TC7 — Carousel de destacados

Se verificó el Carousel Bootstrap en desktop y mobile.

Se confirmó:

- funcionamiento de las diapositivas;
- funcionamiento de controles e indicadores;
- imágenes visibles correctamente;
- ausencia de superposiciones relevantes;
- ausencia de overflow horizontal.

**RETEST FINAL TC7: PASS**

---

## TC8 — Modal de detalle de producto

Se verificó el Modal Bootstrap en desktop y mobile.

Se confirmó:

- apertura desde los productos;
- contenido correcto;
- funcionamiento de los controles de cierre;
- adaptación responsive;
- ausencia de bugs relevantes.

**RETEST FINAL TC8: PASS**

---

## TC9 — Componente details/summary

Se verificó el componente `details/summary` en desktop y mobile.

Se confirmó:

- existencia y funcionamiento de los componentes;
- apertura y cierre correctos;
- funcionamiento mediante teclado;
- ausencia de contenido cortado u overflow horizontal.

**RETEST FINAL TC9: PASS**

---

## TC10 — Componente datalist

Se verificó el componente `datalist` en desktop y mobile.

Se confirmó:

- asociación correcta con el campo de búsqueda;
- presencia de las opciones definidas;
- ingreso de valores sugeridos y libres;
- utilización mediante teclado;
- ausencia de contenido cortado u overflow horizontal.

**RETEST FINAL TC10: PASS**

---

## Resultado final del Primer Parcial

| Test Case | Resultado final |
|---|---|
| TC6 — Migración responsive a Bootstrap | PASS |
| TC7 — Carousel de destacados | PASS |
| TC8 — Modal de detalle de producto | PASS |
| TC9 — details/summary | PASS |
| TC10 — datalist | PASS |

Los cinco Test Cases correspondientes al Primer Parcial obtuvieron resultado `PASS` durante el retest final ejecutado mediante Playwright MCP sobre la release desplegada.

No se detectaron bugs relevantes que requirieran nuevas Issues o correcciones adicionales.