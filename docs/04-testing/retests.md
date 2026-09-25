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