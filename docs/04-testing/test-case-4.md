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