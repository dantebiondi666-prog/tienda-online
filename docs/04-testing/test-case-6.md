# Test Case 6 — Migración responsive a Bootstrap

**Proyecto:** Tienda Online  
**Actividad:** Primer Parcial — Programación Web I  
**Rol:** Desarrollador Frontend / Bootstrap  
**Alumno:** Juan Martin Britos  
**Herramienta:** Playwright MCP  

---

## 1. Objetivo

Verificar el comportamiento responsive de la interfaz después de la migración a Bootstrap 5, comprobando que la grilla se adapte correctamente a diferentes tamaños de pantalla y que la integración no genere regresiones visuales.

También se verifica que no exista overflow horizontal global, elementos cortados o superpuestos y que la guía de talles continúe siendo utilizable.

---

## 2. Rama evaluada

`feature/dev-frontend-bootstrap-migration`

**URL local:** `http://localhost:3000`

---

## 3. Viewports evaluados

| Dispositivo | Viewport |
|---|---|
| Desktop | 1920x1080 |
| Tablet | 820x1180 |
| iPhone 14 Pro | 390x844 |
| Samsung Galaxy S23 | 412x915 |

---

# 4. Ejecución inicial

Se ejecutó el Test Case 6 mediante Playwright MCP después de integrar Bootstrap y aplicar la nueva estructura de grilla.

## Desktop — 1920x1080

**Resultado: FAIL**

- No se detectó overflow horizontal global.
- Los filtros y el catálogo aparecían apilados en lugar de ocupar columnas contiguas.
- Las tres tarjetas se mostraban en una fila, pero tenían aproximadamente 109 px de ancho dentro de una sección de catálogo de aproximadamente 990 px.
- El contenido de las tarjetas se comprimía y se envolvía excesivamente.
- Se observaba una cantidad importante de espacio vacío dentro del catálogo.
- La guía de talles se mostraba completa.

## Tablet — 820x1180

**Resultado: ADAPTACIÓN PARCIAL**

- No se detectó overflow horizontal global.
- Filtros y catálogo se mostraban apilados.
- Se mostraban dos tarjetas en una fila y la tercera debajo.
- Las tarjetas utilizaban solamente una parte del ancho disponible del catálogo.
- La guía de talles se mostraba completa.

## iPhone 14 Pro — 390x844

**Resultado: PASS**

- No se detectó overflow horizontal global.
- Filtros y catálogo se mostraban apilados.
- Las tres tarjetas se distribuían en una columna.
- No se detectaron elementos cortados o superpuestos.
- La guía de talles permitía desplazamiento horizontal dentro de su contenedor.

## Samsung Galaxy S23 — 412x915

**Resultado: PASS**

- No se detectó overflow horizontal global.
- Las tarjetas se mostraban en una columna.
- No se detectaron elementos cortados o superpuestos.
- La guía de talles permitía desplazamiento horizontal dentro de su contenedor.

### Resultado general de la ejecución inicial

**TC6: FAIL**

La migración presentaba una regresión visual en la distribución de la grilla, principalmente en desktop y tablet.

---

# 5. Issue registrado

El problema detectado durante la ejecución inicial fue registrado en GitHub para mantener la trazabilidad del proceso de testing.

**Issue:** [#59 — [BUG][Frontend Bootstrap][TC6] Regresión de grilla en desktop y tablet](https://github.com/dantebiondi666-prog/tienda-online/issues/59)

El Issue documenta la distribución incorrecta de la grilla y el ancho reducido de las tarjetas detectado mediante Playwright MCP.

---

# 6. Corrección aplicada

Se determinó que estilos propios existentes estaban interfiriendo con la nueva grilla de Bootstrap.

Para mantener los estilos originales sin eliminarlos, la compatibilidad con Bootstrap se centralizó en:

`css/bootstrap-overrides.css`

Se agregaron overrides específicos para:

- permitir que la fila principal utilice correctamente la distribución de Bootstrap;
- evitar que reglas anteriores de CSS Grid interfieran con la nueva grilla;
- permitir que el catálogo utilice correctamente sus filas Bootstrap;
- conservar los estilos propios y la identidad visual existente.

Después de aplicar la corrección se realizó nuevamente el Test Case 6 mediante Playwright MCP.

---

# 7. Retest del Issue #59

## Desktop — 1920x1080

**Resultado: PASS**

- Filtros y catálogo aparecen en columnas contiguas.
- Las tres tarjetas se distribuyen en una fila.
- Cada tarjeta ocupa aproximadamente 327 px.
- Las tarjetas aprovechan correctamente el espacio disponible de la grilla.
- No existe overflow horizontal global.
- No se detectaron elementos cortados o superpuestos.
- La guía de talles cabe dentro de su contenedor.

## Tablet — 820x1180

**Resultado: PASS**

- Filtros y catálogo se apilan correctamente.
- Se muestran dos tarjetas por fila y la tercera debajo.
- Cada tarjeta ocupa aproximadamente la mitad del ancho disponible.
- Ya no se reproduce la compresión detectada durante la ejecución inicial.
- No existe overflow horizontal global.
- La guía de talles cabe dentro de su contenedor.

## iPhone 14 Pro — 390x844

**Resultado: PASS**

- Filtros y catálogo se apilan.
- Las tres tarjetas se muestran en una columna.
- No existen cortes ni superposiciones.
- No existe overflow horizontal global.
- La guía de talles permite desplazamiento horizontal dentro de su contenedor.

## Samsung Galaxy S23 — 412x915

**Resultado: PASS**

- Las tarjetas se muestran una por fila.
- No existe overflow horizontal global.
- No se detectaron elementos cortados o superpuestos.
- La guía de talles permite desplazamiento horizontal dentro de su contenedor.

---

# 8. Resultado final

| Viewport | Resultado inicial | Retest |
|---|---|---|
| Desktop — 1920x1080 | FAIL | PASS |
| Tablet — 820x1180 | Adaptación parcial | PASS |
| iPhone 14 Pro — 390x844 | PASS | PASS |
| Samsung Galaxy S23 — 412x915 | PASS | PASS |

**Resultado final TC6: PASS**

El fallo documentado en el Issue #59 dejó de reproducirse después de aplicar los ajustes de compatibilidad entre los estilos existentes y la grilla de Bootstrap.

La interfaz mantiene un comportamiento responsive en los cuatro viewports evaluados, sin overflow horizontal global ni elementos cortados o superpuestos.

---

## 9. Observaciones

Durante las pruebas se observó una respuesta `404` correspondiente a `/favicon.ico`.

Este comportamiento no afectó las pruebas responsive ni el funcionamiento de Bootstrap y no fue considerado un fallo del Test Case 6.