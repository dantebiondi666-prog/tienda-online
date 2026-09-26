# Test Case 2 — Responsive Design

**Actividad:** Actividad Obligatoria N.º 2  
**Rol:** Documentador / QA Tester  
**Tester:** Juan Martin Britos  
**Momento:** Momento 1 — Pre-merge  
**Rama evaluada:** `feature/responsive-design-add-responsive-styles`  
**URL evaluada:** `http://127.0.0.1:3000/index.html`  
**Herramienta:** Playwright MCP  

---

## Objetivo

Verificar el comportamiento responsive de la aplicación en diferentes tamaños de pantalla, comprobando la adaptación de los componentes, ausencia de overflow horizontal, elementos cortados o superpuestos, carga de imágenes y errores de consola.

---

## Dispositivos evaluados

| Dispositivo | Viewport | Resultado |
|---|---|---|
| iPhone 14 Pro | 390x844 | FAIL |
| Samsung Galaxy S23 | 412x915 | FAIL |
| iPad Air | 820x1180 | FAIL |

---

## iPhone 14 Pro — 390x844

**Resultado:** FAIL

La página, header, navegación, catálogo, tarjetas, formulario y footer se visualizaron correctamente.

Las 3 imágenes visibles cargaron correctamente y no se detectó overflow horizontal global ni superposición de elementos.

### Problemas detectados

1. La tabla correspondiente a la guía de talles se extiende fuera del ancho disponible y queda parcialmente cortada hacia la derecha.
2. Se detectó un error HTTP 404 al solicitar `/favicon.ico`.

### Evidencia

`docs/04-testing/capturas/tc-2/momento-1/iphone14pro-390x844.png`

---

## Samsung Galaxy S23 — 412x915

**Resultado:** FAIL

La página, header, navegación, catálogo, tarjetas, formulario, footer e imágenes cargaron correctamente.

No se detectaron superposiciones ni overflow horizontal global.

### Problemas detectados

1. La guía de talles sobresale del ancho disponible y queda cortada hacia la derecha.
2. Se detectó un error HTTP 404 al solicitar `/favicon.ico`.

### Evidencia

`docs/04-testing/capturas/tc-2/momento-1/galaxys23-412x915.png`

---

## iPad Air — 820x1180

**Resultado:** FAIL

La página, header, navegación, catálogo, tarjetas, guía de talles, formulario, footer e imágenes se adaptaron correctamente.

No se detectó overflow horizontal, superposición ni elementos cortados.

### Problema detectado

Se detectó un error HTTP 404 al solicitar `/favicon.ico`.

### Evidencia

`docs/04-testing/capturas/tc-2/momento-1/ipadair-820x1180.png`

---

## Hallazgos — Momento 1

### Hallazgo 1 — Guía de talles cortada en dispositivos móviles

**Tipo:** Responsive Design  
**Dispositivos afectados:** iPhone 14 Pro y Samsung Galaxy S23  
**Estado:** Registrado como bug  
**GitHub Issue:** #30

La guía de talles excede el espacio horizontal disponible en los viewports móviles de 390x844 y 412x915, provocando que parte de la tabla quede cortada hacia la derecha. El hallazgo fue registrado mediante GitHub MCP en el Issue #30 para que el responsable del desarrollo responsive pueda revisarlo y corregirlo antes del merge a `develop`.

El problema no se reprodujo en iPad Air con viewport 820x1180.

### Hallazgo 2 — favicon.ico inexistente

**Tipo:** Recurso faltante  
**Estado:** Hallazgo ya observado durante TC1

La solicitud a `/favicon.ico` devuelve HTTP 404. El mismo comportamiento había sido detectado previamente durante el Test Case 1.

---

## Conclusión del Momento 1

Las tres configuraciones responsive solicitadas fueron ejecutadas mediante Playwright MCP.

El principal problema responsive detectado afecta a la guía de talles en los dos viewports móviles evaluados. En iPad Air el contenido se adapta correctamente.

Además, en las ejecuciones se volvió a observar el error HTTP 404 correspondiente a `/favicon.ico`.
---

# Momento 2 — Post-merge

**Rama evaluada:** `develop`  
**URL evaluada:** `http://127.0.0.1:3000/index.html`  
**Herramienta:** Playwright MCP  

## Ejecución

Se repitió el Test Case 2 sobre la rama `develop` una vez integrados los cambios del equipo.

Se evaluaron nuevamente los siguientes viewports:

| Dispositivo | Viewport | Resultado inicial |
|---|---|---|
| iPhone 14 Pro | 390x844 | FAIL |
| Samsung Galaxy S23 | 412x915 | FAIL |
| iPad Air | 820x1180 | PASS |

En los viewports móviles de iPhone 14 Pro y Samsung Galaxy S23 se detectó nuevamente un problema en la guía de talles.

La tabla permitía desplazamiento horizontal mediante `overflow-x: auto`, pero la columna "US" no quedaba completamente visible en la posición inicial.

Mediciones obtenidas:

- iPhone 14 Pro: `scrollWidth=364px` frente a `clientWidth=291px`.
- Samsung Galaxy S23: `scrollWidth=364px` frente a `clientWidth=313px`.

No se detectó overflow horizontal global en el documento ni otros recortes relevantes en las áreas principales de la página.

### Resultado inicial

**TC2 MOMENTO 2: FAIL**

### Evidencias iniciales

- `docs/04-testing/capturas/tc-2/momento-2/qa-tc2-m2-iphone14pro-390x844.png`
- `docs/04-testing/capturas/tc-2/momento-2/qa-tc2-m2-galaxys23-412x915.png`
- `docs/04-testing/capturas/tc-2/momento-2/qa-tc2-m2-ipadair-820x1180.png`

## Retest posterior a la corrección

Luego de la corrección realizada por el desarrollador responsable, se volvió a ejecutar el caso mediante Playwright MCP.

En iPhone 14 Pro, el wrapper de la tabla midió `291/364px`, y en Samsung Galaxy S23 `313/364px`. La tabla quedó contenida dentro de un wrapper con desplazamiento horizontal controlado, sin provocar overflow horizontal global.

También se verificó que:

- La página no presenta overflow horizontal global.
- La tabla puede recorrerse horizontalmente dentro de su contenedor.
- La columna "US" puede visualizarse mediante el desplazamiento interno.
- Los productos y sus imágenes cargan correctamente.
- No se observaron roturas evidentes en el resto de la interfaz.

### Evidencia del retest

`docs/04-testing/capturas/tc-2/momento-2/qa-retest-tc2-responsive-fix.png`

### Resultado final

**RETEST TC2: PASS**

La corrección aplicada fue validada y el comportamiento responsive de la guía de talles se considera resuelto.
---

## Verificación final — Momento 2

Después de que la corrección de la guía de talles y accesibilidad fuera integrada a `develop`, se actualizaron los cambios en la rama de QA y se ejecutó una verificación final mediante Playwright MCP.

### Resultados

| Dispositivo | Viewport | Wrapper (client/scroll) | Tabla (client/scroll) | Documento (client/scroll) | Resultado |
|---|---|---|---|---|---|
| iPhone 14 Pro | 390x844 | 291/364 px | 364/364 px | 375/375 px | PASS |
| Samsung Galaxy S23 | 412x915 | 313/364 px | 364/364 px | 397/397 px | PASS |
| iPad Air | 820x1180 | 689/689 px | 689/689 px | 805/805 px | PASS |

Se comprobó que:

- No existe overflow horizontal global.
- Los bloques principales permanecen dentro del viewport.
- La tabla permanece dentro de su wrapper.
- En dispositivos móviles el desplazamiento horizontal queda contenido dentro del wrapper.
- Todas las columnas, incluida `US`, son accesibles mediante scroll interno.
- No se detectaron elementos principales cortados o superpuestos.
- Header, navegación, catálogo, guía de talles, formulario y footer permanecen presentes.
- Las tres imágenes del catálogo cargaron correctamente.

### Resultado definitivo

**FINAL TC2 MOMENTO 2: PASS**

La corrección permanece funcionando correctamente después de la integración de los últimos cambios de `develop`.