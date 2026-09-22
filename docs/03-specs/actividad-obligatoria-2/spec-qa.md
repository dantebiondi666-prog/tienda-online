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

- [ ] spec-qa.md creado antes de comenzar los test cases.
- [ ] 5 test cases ejecutados utilizando Playwright MCP.
- [ ] Testing realizado contra localhost.
- [ ] Momento 1 ejecutado sobre las ramas feature correspondientes.
- [ ] Momento 2 ejecutado sobre develop.
- [ ] Compatibilidad desktop comprobada.
- [ ] Diseño responsive comprobado en los dispositivos requeridos.
- [ ] Performance y tiempos de carga evaluados.
- [ ] Accesibilidad evaluada mediante axe-core.
- [ ] Estructura HTML semántica verificada.
- [ ] HTML validado mediante W3C.
- [ ] Archivos CSS validados mediante W3C.
- [ ] Capturas de pantalla almacenadas para los test cases.
- [ ] Hallazgos relevantes registrados como issues de tipo bug.
- [ ] Issues creados mediante GitHub MCP.
- [ ] Responsables notificados sobre los bugs encontrados.
- [ ] testing-doc.md actualizado como índice general.
- [ ] Resultados del Momento 1 documentados.
- [ ] Resultados del Momento 2 documentados.
- [ ] changelog.md actualizado con la contribución realizada.
- [ ] Pull Request creada hacia develop.

---

## 6. Evidencia de ejecución

Esta sección se completará al finalizar los test cases.

### Prompts utilizados

Pendiente de ejecución.

### Resultado Momento 1

Pendiente de ejecución.

### Resultado Momento 2

Pendiente de ejecución.

### Bugs registrados

Pendiente de ejecución.

### Decisiones sobre hallazgos

Pendiente de ejecución.