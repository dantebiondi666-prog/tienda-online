# Test Case 3 — Performance y tiempos de carga

**Actividad:** Actividad Obligatoria N.º 2  
**Rol:** Documentador / QA Tester  
**Tester:** Juan Martin Britos  
**Momento:** Momento 1 — Pre-merge  
**Rama evaluada:** `feature/dev-frontend-css-add-styles`  
**URL evaluada:** `http://127.0.0.1:3000/index.html`  
**Herramienta:** Playwright MCP — Performance API  

---

## Objetivo

Evaluar los tiempos de carga de la aplicación mediante la Performance API del navegador y analizar los recursos utilizados durante la carga de la página.

---

## Métricas obtenidas

| Métrica | Resultado |
|---|---:|
| DOMContentLoaded | 31.5 ms |
| Load Complete | 35.8 ms |
| DOM Interactive | 30.9 ms |

Las métricas fueron obtenidas durante la ejecución automatizada mediante Playwright MCP.

---

## Recursos analizados

Durante la prueba se analizaron los recursos registrados por la Performance API.

Entre los recursos detectados se encontraron:

| Recurso | Tipo | transferSize | encodedBodySize |
|---|---|---:|---:|
| Live Preview injected script | script | 9574 B | 9274 B |
| styles.css | link | 3236 B | 2936 B |
| components.css | link | 7440 B | 7140 B |
| Imagen Remera | img | 0 B | 2518 B |
| Imagen Pantalón | img | 0 B | 27438 B |
| Imagen Campera | img | 0 B | 0 B |
| Google Fonts CSS | css | 0 B | 634 B |
| Playfair Display | css | 0 B | 38404 B |
| Work Sans | css | 0 B | 50316 B |

Los valores `0 B` informados en algunos recursos corresponden a los datos devueltos por la Performance API durante esta ejecución y no se interpretan por sí solos como un fallo de carga.

Las tres imágenes fueron verificadas adicionalmente en el DOM mediante `complete`, dimensiones naturales y estado visual, y aparecieron cargadas correctamente.

---

## Tiempos de descarga

La Performance API fue utilizada para consultar la duración de los recursos durante la ejecución.

En particular, la entrada correspondiente a la imagen de la campera informó `0 B` y `0 ms`. Este resultado no se clasificó automáticamente como un error de carga, ya que la imagen se encontraba cargada correctamente en el DOM.

No se inventaron ni estimaron valores que no fueran proporcionados por la API.

---

## Errores detectados

### favicon.ico

Durante la prueba se detectó nuevamente el siguiente error:

`GET /favicon.ico — 404`

Este hallazgo ya había sido observado durante los Test Case 1 y 2, por lo que no se considera un nuevo problema independiente.

---

## Evidencia

Captura correspondiente a la ejecución:

`docs/04-testing/capturas/tc-3/momento-1/performance.png`

---

## Conclusión del Momento 1

Se obtuvieron correctamente las métricas obligatorias de `DOMContentLoaded`, `Load Complete` y `DOM Interactive`, además de información de los recursos cargados mediante la Performance API.

La ejecución permitió comprobar también que las tres imágenes utilizadas por la aplicación estaban cargadas correctamente.

Se volvió a detectar el error HTTP 404 correspondiente a `/favicon.ico`, previamente identificado en otros casos de prueba.