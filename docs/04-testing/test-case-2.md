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