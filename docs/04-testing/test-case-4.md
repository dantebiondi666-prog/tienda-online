# Test Case 4 — Accesibilidad

**Actividad:** Actividad Obligatoria N.º 2  
**Rol:** Documentador / QA Tester  
**Tester:** Juan Martin Britos  
**Momento:** Momento 1 — Pre-merge  
**Rama evaluada:** `feature/dev-frontend-css-add-styles`  
**URL evaluada:** `http://127.0.0.1:3000/index.html`  
**Herramientas:** Playwright MCP + axe-core 4.10.2  

---

## Objetivo

Evaluar la accesibilidad de la aplicación mediante axe-core, tomando como referencia WCAG 2.1 e identificando violaciones, nivel de impacto, criterios relacionados y elementos afectados.

---

## Ejecución

axe-core fue cargado temporalmente dentro de la sesión del navegador controlada por Playwright MCP.

No se instalaron dependencias ni se modificaron archivos del proyecto.

**Versión de axe-core:** 4.10.2

---

## Resultado general

**Resultado:** FAIL

axe-core detectó una violación de accesibilidad que afecta a 41 elementos de la página.

| Impacto | Violaciones |
|---|---:|
| Critical | 0 |
| Serious | 1 |
| Moderate | 0 |
| Minor | 0 |
| **Total** | **1** |

---

## Violación detectada — color-contrast

**Regla axe:** `color-contrast`  
**Impacto:** Serious  
**Criterio:** WCAG 1.4.3  
**Nivel informado:** AA  
**Elementos afectados:** 41

### Descripción

El contraste entre el color del texto y el color de fondo no alcanza los umbrales mínimos requeridos.

Durante el análisis se detectaron relaciones de contraste de:

- `3.66:1`
- `3.09:1`

Para los elementos evaluados se informó un contraste requerido de:

- `4.5:1`

### Elementos afectados

Entre los elementos informados por axe-core se encuentran:

- Enlaces de navegación.
- Etiquetas de filtros.
- Botón de reset.
- Información de productos.
- Celdas de la tabla.
- Contenido de contacto.
- Elementos del footer.

Entre los selectores reportados se encuentran:

- `a[href$="#remeras"]`
- `a[href$="#pantalones"]`
- `a[href$="#camperas"]`
- `a[href$="#accesorios"]`
- `fieldset:nth-child(1) > label:nth-child(2-4)`
- `fieldset:nth-child(1) > label:nth-child(5)`
- `fieldset:nth-child(3) > label:nth-child(2-4)`
- `button[type="reset"]`
- elementos `article` de productos
- celdas `td` de la tabla
- `section[aria-labelledby="contacto-titulo"] > p`
- elementos del `footer`

---
## Bug registrado

El hallazgo de contraste insuficiente fue registrado mediante GitHub MCP.

**GitHub Issue:** #31  
**Título:** `[BUG][Accesibilidad] Contraste insuficiente en elementos de la interfaz`

El issue documenta la violación `color-contrast` detectada por axe-core, con impacto `serious` y 41 elementos afectados.

## Evidencia

`docs/04-testing/capturas/tc-4/momento-1/accessibility-axe.png`

---

## Conclusión del Momento 1

El análisis de accesibilidad fue ejecutado correctamente mediante Playwright MCP y axe-core 4.10.2.

La prueba resultó FAIL debido a una violación `serious` de la regla `color-contrast`, relacionada con WCAG 1.4.3. La violación afecta a 41 elementos de la interfaz.

El hallazgo debe registrarse como bug para su revisión antes del merge a `develop`.
---

# Momento 2 — Post-merge

**Rama evaluada:** `develop`  
**URL evaluada:** `http://127.0.0.1:3000/index.html`  
**Herramientas:** Playwright MCP + axe-core 4.10.3  

## Ejecución

Se repitió el análisis de accesibilidad sobre la rama `develop` después de la integración de los cambios del equipo.

axe-core 4.10.3 detectó inicialmente una violación de accesibilidad:

| Impacto | Violaciones |
|---|---:|
| Critical | 0 |
| Serious | 1 |
| Moderate | 0 |
| Minor | 0 |
| **Total** | **1** |

### Violación detectada — scrollable-region-focusable

**Regla axe:** `scrollable-region-focusable`  
**Impacto:** Serious  
**Elementos afectados:** 1

La violación indicaba que una región con contenido desplazable no era accesible mediante teclado. El elemento afectado correspondía a la tabla de la guía de talles.

La regla `color-contrast`, detectada previamente durante el Momento 1, no volvió a aparecer como violación.

### Resultado inicial

**TC4 MOMENTO 2: FAIL**

### Evidencia inicial

`docs/04-testing/capturas/tc-4/momento-2/qa-tc4-m2-accessibility-axe.png`

## Retest posterior a la corrección

Luego de la corrección realizada por el desarrollador responsable, se volvió a ejecutar el análisis mediante Playwright MCP y axe-core 4.10.3.

La tabla fue contenida dentro de un wrapper accesible configurado como región navegable mediante teclado.

Durante el retest se verificó que:

- El wrapper posee `role="region"`.
- El wrapper posee `tabindex="0"`.
- La navegación mediante `Tab` permite llevar el foco al contenedor.
- El desplazamiento horizontal puede realizarse mediante teclado.
- No se genera overflow horizontal global.
- La regla `scrollable-region-focusable` ya no aparece.
- La regla `color-contrast` tampoco aparece.

axe-core reportó:

- **Violaciones totales:** 0
- **Reglas aprobadas:** 48
- **Reglas incompletas:** 1

La regla incompleta no fue contabilizada como una violación.

### Evidencia del retest

`docs/04-testing/capturas/tc-4/momento-2/qa-retest-tc4-accessibility-fix.png`

### Resultado final

**RETEST TC4: PASS**

La corrección aplicada fue validada. El problema de accesibilidad relacionado con la región desplazable ya no se reproduce y no se detectaron violaciones de accesibilidad en el retest.