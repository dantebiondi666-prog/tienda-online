# Test Case 5 — HTML semántico y validación W3C

**Actividad:** Actividad Obligatoria N.º 2  
**Rol:** Documentador / QA Tester  
**Tester:** Juan Martin Britos  
**Momento:** Momento 1 — Pre-merge  
**URL evaluada:** `http://127.0.0.1:3000/index.html`  
**Herramientas:** Playwright MCP, Nu HTML Checker y W3C CSS Validator  

---

## Objetivo

Verificar la estructura semántica y accesible del documento HTML y realizar la validación del HTML y de las hojas de estilo mediante los validadores W3C correspondientes.

---

## 1. Estructura semántica y accesibilidad

La página fue inspeccionada mediante Playwright MCP utilizando el snapshot accesible y una inspección de la estructura del DOM.

### Formularios

Se verificó lo siguiente:

- El campo de búsqueda posee label explícito asociado.
- Los 11 checkboxes poseen labels envolventes.
- El campo de nombre posee label explícito asociado.
- El campo de e-mail posee label explícito asociado.
- El textarea de mensaje posee label explícito asociado.
- Los botones `Restablecer filtros` y `Enviar` poseen nombre accesible.

### Imágenes

Las 3 imágenes evaluadas poseen atributo `alt` descriptivo.

No se detectaron imágenes sin texto alternativo.

### Estructura semántica

Se inspeccionaron la jerarquía de encabezados y los elementos semánticos y landmarks presentes en la página, incluyendo:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

No se detectaron problemas estructurales de accesibilidad semántica durante esta revisión.

**Resultado de la revisión semántica:** PASS

> Este análisis es independiente del análisis con axe-core realizado en el Test Case 4.

---

## 2. Validación HTML

Se realizó una validación mediante Nu HTML Checker.

**Errores:** 0

El validador no informó errores de HTML. Se obtuvieron advertencias informativas relacionadas con el uso de barras finales en elementos void.

**Resultado HTML:** PASS

---

## 3. Validación CSS

Se intentó validar individualmente:

- `css/styles.css`
- `css/components.css`
- `css/responsive.css`

Los intentos contra W3C CSS Validator no pudieron completarse correctamente debido a que el servicio externo devolvió `HTTP 500`.

Por este motivo, no se asigna PASS ni FAIL a estos archivos y no se inventan resultados de validación.

| Archivo | Validador | Errores | Warnings | Resultado |
|---|---|---:|---:|---|
| `index.html` | Nu HTML Checker | 0 | Informativos | PASS |
| `css/styles.css` | W3C CSS Validator | N/D | N/D | NO EJECUTADO |
| `css/components.css` | W3C CSS Validator | N/D | N/D | NO EJECUTADO |
| `css/responsive.css` | W3C CSS Validator | N/D | N/D | NO EJECUTADO |

### Limitación encontrada

El W3C CSS Validator respondió `HTTP 500` durante los intentos de validación directa.

También se comprobó la disponibilidad de GitHub Pages como alternativa para validar los recursos mediante URL pública, pero el proyecto no disponía de una página publicada accesible en ese momento.

La imposibilidad de completar la validación CSS corresponde a una limitación del servicio externo y no constituye por sí misma un error en las hojas de estilo.

---

## 4. Evidencia

Captura de la inspección semántica:

`docs/04-testing/capturas/tc-5/momento-1/semantics.png`

---

## Resultado del Momento 1

**Revisión semántica:** PASS  
**Validación HTML:** PASS  
**Validación CSS:** NO EJECUTADO

La estructura semántica y accesible revisada mediante Playwright MCP no presentó problemas estructurales. El HTML fue validado sin errores.

La validación de las tres hojas CSS no pudo completarse debido a respuestas `HTTP 500` del W3C CSS Validator, por lo que esos resultados quedan documentados como NO EJECUTADOS.