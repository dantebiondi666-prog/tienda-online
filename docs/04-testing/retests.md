# Retests de Issues — QA

**Proyecto:** Tienda Online  
**Actividad:** Actividad Obligatoria N.º 2  
**Tester:** Juan Martin Britos  
**Rol:** Documentador / QA Tester  

---

## Issue #30 — Problema responsive en guía de talles

### Problema original

Durante las pruebas responsive del Momento 1 se detectó que la guía de talles excedía el ancho disponible en dispositivos móviles y quedaba parcialmente cortada hacia la derecha.

### Corrección evaluada

Se realizó el retest sobre la versión corregida de la rama:

`feature/responsive-design-add-responsive-styles`

### Viewports evaluados

| Dispositivo | Viewport | Ancho tabla | Límite derecho | Overflow global | Resultado |
|---|---|---:|---:|---|---|
| iPhone 14 Pro | 390x844 | 375px | 375px | No | PASS |
| Samsung Galaxy S23 | 412x915 | 397px | 397px | No | PASS |

En ambos viewports:

- La tabla queda completamente dentro del ancho disponible.
- `scrollWidth` y `clientWidth` coinciden.
- No existe overflow horizontal global.
- No se detectan solapamientos.
- La tabla no queda cortada a la derecha.

### Evidencias

- `docs/04-testing/capturas/retests/issue-30-iphone14pro-390x844.png`
- `docs/04-testing/capturas/retests/issue-30-galaxys23-412x915.png`

### Resultado

**RETEST ISSUE #30: PASS**

La corrección fue verificada mediante Playwright MCP y el problema original no volvió a reproducirse.

---

## Issue #31 — Contraste insuficiente

### Problema original

Durante el análisis de accesibilidad del Momento 1, axe-core detectó una violación `color-contrast` de impacto `serious`, con 41 elementos afectados.

### Corrección evaluada

Se realizó el retest sobre la versión corregida de la rama:

`feature/dev-frontend-css-add-styles`

### Resultado de axe-core

- Versión: `4.10.2`
- Violaciones totales: `0`
- Regla `color-contrast`: no aparece
- Elementos afectados: `0`
- Ratios pendientes: ninguno

### Evidencia

`docs/04-testing/capturas/retests/issue-31-contrast.png`

### Resultado

**RETEST ISSUE #31: PASS**

La corrección fue verificada mediante Playwright MCP y axe-core. La violación de contraste detectada originalmente ya no se reproduce.

---

## Conclusión

Los Issues #30 y #31 fueron sometidos a retesting después de las correcciones realizadas por los desarrolladores responsables.

Ambas correcciones obtuvieron resultado **PASS**, por lo que los problemas originales no pudieron reproducirse nuevamente durante las pruebas de verificación.
---

# Retests finales — Momento 2

Después de ejecutar los cinco casos de prueba sobre la rama `develop`, se detectaron dos problemas que requirieron una nueva corrección y verificación.

Los fallos correspondieron a:

- TC2 — Responsive Design: comportamiento de la guía de talles en dispositivos móviles.
- TC4 — Accesibilidad: región desplazable de la guía de talles no accesible mediante teclado.

Luego de las correcciones realizadas por el desarrollador responsable, ambos casos fueron ejecutados nuevamente mediante Playwright MCP.

## Retest TC2 — Responsive Design

Se verificó nuevamente la guía de talles en los viewports móviles utilizados durante las pruebas.

### Resultado

- iPhone 14 Pro (390x844): PASS
- Samsung Galaxy S23 (412x915): PASS
- Sin overflow horizontal global.
- La tabla permanece contenida dentro de su wrapper.
- El desplazamiento horizontal se realiza dentro del contenedor.
- La columna "US" puede visualizarse mediante el scroll interno.
- No se observaron roturas evidentes en el resto de la interfaz.

### Evidencia

`docs/04-testing/capturas/tc-2/momento-2/qa-retest-tc2-responsive-fix.png`

**RETEST TC2: PASS**

---

## Retest TC4 — Accesibilidad

Se volvió a ejecutar axe-core 4.10.3 después de modificar la estructura de la guía de talles para que la región desplazable pudiera utilizarse mediante teclado.

### Resultado

- Violaciones totales: 0
- Reglas aprobadas: 48
- Reglas incompletas: 1
- `scrollable-region-focusable`: no detectada como violación.
- `color-contrast`: no detectada como violación.
- El wrapper es accesible mediante `Tab`.
- El desplazamiento interno puede realizarse mediante teclado.
- No se genera overflow horizontal global.

### Evidencia

`docs/04-testing/capturas/tc-4/momento-2/qa-retest-tc4-accessibility-fix.png`

**RETEST TC4: PASS**

---

## Conclusión de los retests finales

Los dos fallos detectados durante el Momento 2 fueron sometidos a una nueva verificación después de las correcciones correspondientes.

Los resultados finales fueron:

| Caso | Resultado inicial Momento 2 | Retest final |
|---|---|---|
| TC2 — Responsive Design | FAIL | PASS |
| TC4 — Accesibilidad | FAIL | PASS |

Las correcciones fueron verificadas mediante Playwright MCP. En los retests finales no se reprodujeron los problemas que habían provocado los resultados FAIL.