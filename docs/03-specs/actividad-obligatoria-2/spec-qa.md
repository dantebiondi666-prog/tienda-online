# Spec — Documentador / QA Tester

**Rol:** Documentador / QA Tester

**Proyecto:** Tienda Online de Ropa

**Entrega:** Actividad Obligatoria N.º 2

**Autor:** Juan Martin Britos

**Rama:** feature/doc-qa-tester-add-test-cases

---

## 1. Qué se va a hacer

Se realizará el proceso de control de calidad (QA) de la segunda entrega de la Tienda Online de Ropa.

El objetivo será comprobar que los estilos CSS y el diseño responsive desarrollados por los demás integrantes funcionen correctamente antes y después de su integración en la rama develop.

Para ello se ejecutarán cinco test cases automatizados utilizando Playwright MCP desde GitHub Copilot Agent Mode.

Las pruebas abarcarán:

1. Compatibilidad en navegadores desktop.
2. Diseño responsive en dispositivos móviles y tablet.
3. Performance y tiempos de carga.
4. Accesibilidad web.
5. Estructura HTML semántica y validación HTML/CSS.

Los hallazgos relevantes encontrados durante las pruebas serán registrados como issues de tipo bug utilizando GitHub MCP.

---

## 2. Por qué se hace

El proceso de QA permite comprobar que la implementación visual y responsive de la Actividad Obligatoria N.º 2 cumpla con los requerimientos definidos para el proyecto.

Las pruebas permitirán detectar problemas de compatibilidad, adaptación responsive, performance, accesibilidad y estructura antes de generar la release definitiva.

El testing se realizará en dos momentos.

### Momento 1 — Pre-merge

Se probarán las ramas feature del Desarrollador Frontend/CSS y del Especialista en Responsive Design antes de integrarlas en develop.

Los bugs encontrados serán informados a los responsables para que puedan corregirlos antes del merge.

### Momento 2 — Post-merge

Una vez integradas las ramas en develop, se volverán a ejecutar las pruebas para detectar posibles problemas producidos por la integración de los distintos estilos y componentes.

---

## 3. Herramientas

### Playwright MCP

Se utilizará Playwright MCP para controlar un navegador real desde GitHub Copilot Agent Mode y ejecutar los test cases sobre la aplicación levantada localmente mediante Live Preview.

URL prevista:

http://localhost:3000

Playwright permitirá realizar pruebas en diferentes navegadores, resoluciones y dispositivos, además de obtener información sobre accesibilidad y performance.

### GitHub MCP

Se utilizará GitHub MCP para registrar directamente desde Copilot Agent Mode los hallazgos relevantes como issues de tipo bug en el repositorio.

Cada issue deberá describir el problema encontrado, indicar el test case correspondiente y permitir que el integrante responsable pueda identificar y corregir el error.

---

## 4. Plan de testing

### Test Case 1 — Compatibilidad Desktop

Verificar que la página mantenga correctamente su estructura visual en Chrome, Firefox, Safari y Edge utilizando los viewports establecidos en la consigna.

### Test Case 2 — Responsive

Verificar el comportamiento responsive en:

- iPhone 14 Pro — 390x844.
- Samsung Galaxy S23 — 412x915.
- iPad Air — 820x1180.

Se comprobará especialmente que no exista overflow horizontal y que los componentes se adapten al tamaño disponible.

### Test Case 3 — Performance y carga

Evaluar mediante la Performance API del navegador:

- DOMContentLoaded.
- Tiempo de carga completa.
- DOM Interactive.
- Recursos cargados.
- Tamaño y tiempo de descarga de los recursos.

### Test Case 4 — Accesibilidad

Evaluar la página mediante axe-core y comprobar posibles incumplimientos de WCAG 2.1.

Los resultados se clasificarán según impacto:

- Critical.
- Serious.
- Moderate.
- Minor.

### Test Case 5 — HTML semántico y CSS

Comprobar:

- Jerarquía correcta de headings.
- Uso de landmarks semánticos.
- Uso de section, article, nav, main y footer.
- Asociación correcta de labels con los campos de formularios.
- Validación HTML mediante W3C.
- Validación individual de styles.css, components.css y responsive.css mediante W3C.

---

## 5. Criterios de aceptación

- [x] spec-qa.md creado antes de comenzar los test cases.
- [x] 5 test cases ejecutados utilizando Playwright MCP.
- [x] Testing realizado contra localhost.
- [x] Momento 1 ejecutado sobre las ramas feature correspondientes.
- [x] Momento 2 ejecutado sobre develop.
- [ ] Compatibilidad desktop comprobada completamente en los cuatro motores requeridos.
- [x] Diseño responsive comprobado en los dispositivos requeridos.
- [x] Performance y tiempos de carga evaluados.
- [x] Accesibilidad evaluada mediante axe-core.
- [x] Estructura HTML semántica verificada.
- [x] HTML validado mediante W3C.
- [ ] Archivos CSS validados mediante W3C.
- [x] Capturas de pantalla almacenadas para los test cases.
- [x] Hallazgos relevantes registrados como issues de tipo bug.
- [x] Issues creados mediante GitHub MCP.
- [x] Responsables notificados sobre los bugs encontrados.
- [x] testing-doc.md actualizado como índice general.
- [x] Resultados del Momento 1 documentados.
- [x] Resultados del Momento 2 documentados.
- [x] changelog.md actualizado con la contribución realizada.
- [x] Pull Request creada hacia develop.
---

## 6. Evidencia de ejecución

El proceso de QA fue ejecutado utilizando Playwright MCP sobre la aplicación levantada localmente mediante Live Preview.

Las pruebas fueron realizadas en dos momentos: pre-merge sobre las ramas feature correspondientes y post-merge sobre la versión integrada en `develop`.

### Prompts utilizados

Los prompts utilizados desde GitHub Copilot Agent Mode siguieron los objetivos definidos previamente en este documento.

#### Test Case 1 — Compatibilidad Desktop

Se solicitó ejecutar pruebas de compatibilidad desktop sobre la aplicación local, utilizando los viewports establecidos para Chrome, Firefox, Safari y Edge, verificando layout, overflow horizontal, elementos cortados o superpuestos y registrando evidencias.

Durante la ejecución se dispuso únicamente del navegador basado en Chromium. Por este motivo, los viewports correspondientes a Firefox, Safari y Edge fueron comprobados en Chromium y no se consideraron pruebas reales de esos motores.

#### Test Case 2 — Responsive Design

Se solicitó evaluar la aplicación en:

- iPhone 14 Pro — 390x844.
- Samsung Galaxy S23 — 412x915.
- iPad Air — 820x1180.

Se verificó overflow horizontal, elementos cortados, superposiciones, adaptación de componentes, imágenes y comportamiento de la guía de talles.

Luego de detectar y corregir problemas se solicitó repetir la prueba para confirmar la solución.

#### Test Case 3 — Performance

Se solicitó utilizar la Performance API para obtener:

- DOMContentLoaded.
- Load Complete.
- DOM Interactive.
- Recursos cargados.
- Tamaños informados por la API.
- Tiempos de descarga disponibles.

También se verificó la carga efectiva de las imágenes utilizadas por la aplicación.

#### Test Case 4 — Accesibilidad

Se solicitó ejecutar axe-core sobre la aplicación y clasificar las violaciones según impacto:

- Critical.
- Serious.
- Moderate.
- Minor.

También se solicitaron las reglas afectadas, elementos involucrados y evidencias.

Después de las correcciones se repitió axe-core para verificar que las violaciones detectadas ya no se reprodujeran.

#### Test Case 5 — HTML semántico y validación

Se solicitó revisar:

- jerarquía de headings;
- landmarks semánticos;
- uso de `section`, `article`, `nav`, `main` y `footer`;
- labels asociados a formularios;
- estructura accesible;
- validación HTML;
- validación individual de las hojas CSS.

La validación HTML pudo completarse mediante Nu HTML Checker.

Los intentos de validación CSS mediante W3C CSS Validator devolvieron HTTP 500, por lo que no se inventaron resultados y la validación CSS quedó registrada como NO EJECUTADO.

---

### Resultado Momento 1

Durante el Momento 1 se evaluaron las ramas feature antes de su integración a `develop`.

Los principales hallazgos fueron:

- Problema responsive en la guía de talles.
- Violación de accesibilidad `color-contrast`.
- Error HTTP 404 correspondiente a `/favicon.ico`.
- Imposibilidad de completar la validación CSS debido a errores HTTP 500 del servicio externo.

Se registraron los bugs relevantes y se notificó a los responsables.

Entre los bugs registrados se encuentran:

- Issue #30 — problema responsive en la guía de talles.
- Issue #31 — contraste insuficiente detectado mediante axe-core.

Después de las correcciones, ambos issues fueron sometidos a retesting.

**Issue #30: PASS después del retest.**  
**Issue #31: PASS después del retest.**

---

### Resultado Momento 2

Después de integrar los cambios del equipo se repitieron los test cases sobre `develop`.

Resultados iniciales:

| Test Case | Resultado |
|---|---|
| TC1 — Compatibilidad Desktop | PASS con limitación de motores |
| TC2 — Responsive Design | FAIL |
| TC3 — Performance | PASS |
| TC4 — Accesibilidad | FAIL |
| TC5 — Semántica / HTML | PASS |
| Validación CSS W3C | NO EJECUTADO |

TC2 presentó nuevamente un problema relacionado con la visualización y desplazamiento de la guía de talles en dispositivos móviles.

TC4 detectó mediante axe-core 4.10.3 una violación `scrollable-region-focusable` de impacto `serious`.

Después de la corrección correspondiente se realizaron nuevos retests:

**RETEST TC2: PASS**  
**RETEST TC4: PASS**

En el retest de accesibilidad axe-core informó 0 violaciones, 48 reglas aprobadas y 1 regla incompleta.

La corrección responsive también fue verificada sin overflow horizontal global y con desplazamiento interno de la tabla.

---

### Bugs registrados

Durante el proceso de QA se registraron bugs a partir de los hallazgos relevantes encontrados durante las pruebas.

Se encuentran documentados:

- **Issue #30:** problema responsive en la guía de talles.
- **Issue #31:** contraste insuficiente detectado mediante axe-core.

Los hallazgos posteriores del Momento 2 fueron informados al equipo para su corrección y posterior retesting.

No se asignan números de issue adicionales en este documento cuando no se dispone de evidencia suficiente para identificarlos con certeza.

---

### Decisiones sobre hallazgos

Los problemas que afectaban el diseño responsive y la accesibilidad fueron considerados relevantes y se comunicaron al equipo para su corrección.

Los Issues #30 y #31 fueron verificados nuevamente después de las modificaciones realizadas por los desarrolladores y obtuvieron resultado PASS.

Los fallos encontrados durante el Momento 2 en TC2 y TC4 también fueron sometidos a retesting después de la corrección correspondiente y obtuvieron resultado PASS.

El error `/favicon.ico` 404 fue documentado como hallazgo recurrente, pero no impidió el funcionamiento principal de la aplicación.

Los valores `transferSize = 0` obtenidos para algunos recursos mediante Performance API no fueron considerados automáticamente como errores, ya que los recursos correspondientes fueron comprobados adicionalmente en el DOM.

La imposibilidad de ejecutar la validación CSS mediante W3C CSS Validator fue registrada como una limitación externa debido a respuestas HTTP 500. No se asignó PASS ni FAIL a las hojas CSS.

La compatibilidad específica con Firefox, Safari y Edge no se considera completamente verificada, ya que durante la ejecución del TC1 solamente estuvo disponible el navegador basado en Chromium.
---

## 7. Verificación final

Después de que la corrección correspondiente a TC2 y TC4 fuera integrada a `develop`, se incorporaron los últimos cambios de `develop` a la rama de QA.

Se ejecutó una verificación final mediante Playwright MCP.

### TC2 — Responsive Design

Los viewports de iPhone 14 Pro, Samsung Galaxy S23 e iPad Air fueron verificados nuevamente.

No se detectó overflow horizontal global y la guía de talles permaneció contenida dentro de su wrapper, permitiendo desplazamiento horizontal interno cuando fue necesario.

**FINAL TC2 MOMENTO 2: PASS**

### TC4 — Accesibilidad

Se ejecutó axe-core 4.10.3.

**Violaciones detectadas: 0**

La regla `scrollable-region-focusable` no volvió a aparecer como violación y se confirmó que el wrapper puede utilizarse mediante teclado.

La regla `color-contrast` no fue reportada como violación, aunque quedó clasificada como `INCOMPLETE` para 6 elementos cuyo contraste axe-core no pudo determinar automáticamente.

**FINAL TC4 MOMENTO 2: PASS**

### Estado final

Las correcciones detectadas durante el Momento 2 fueron verificadas nuevamente después de la integración de los cambios.

TC2 y TC4 obtuvieron resultado definitivo PASS.

Se mantienen documentadas las siguientes limitaciones:

- La compatibilidad específica con motores reales de Firefox, Safari y Edge no pudo comprobarse completamente.
- La validación de las hojas CSS mediante W3C CSS Validator no pudo completarse debido a respuestas HTTP 500 del servicio externo.
- axe-core no pudo determinar automáticamente el contraste de 6 elementos durante la verificación final.