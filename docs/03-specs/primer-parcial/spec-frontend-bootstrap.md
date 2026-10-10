# Especificación Frontend Bootstrap — Primer Parcial

## 1. Información general

**Proyecto:** Tienda Online  
**Actividad:** Primer Parcial — Programación Web I  
**Rol:** Desarrollador Frontend / Bootstrap  
**Alumno:** Juan Martin Britos  

---

## 2. Objetivo

Migrar la interfaz existente de la tienda online a Bootstrap, manteniendo la identidad visual definida previamente por el equipo y respetando el mockup actualizado en Figma.

La implementación debe aprovechar los componentes, utilidades y sistema de grillas de Bootstrap sin reemplazar completamente los estilos propios existentes.

---

## 3. Alcance

Las tareas correspondientes al rol Frontend / Bootstrap incluyen:

- Integrar Bootstrap 5 mediante CDN jsDelivr.
- Incorporar Bootstrap Bundle JS al final del `body` para permitir el funcionamiento de los componentes JavaScript de Bootstrap.
- Mantener `css/styles.css`, `css/components.css` y `css/responsive.css` sin eliminarlos ni reemplazarlos.
- Crear `css/bootstrap-overrides.css` para personalizaciones específicas.
- Migrar la estructura necesaria de `index.html` al sistema de grillas de Bootstrap.
- Utilizar componentes y utilidades Bootstrap cuando corresponda.
- Mantener la identidad visual definida en el mockup de Figma.
- Utilizar Figma MCP junto con Copilot Agent Mode como apoyo para la implementación.
- Revisar manualmente el código generado o sugerido por herramientas de IA.
- Verificar el comportamiento responsive de la implementación.
- Documentar y ejecutar el Test Case 6.
- Registrar mediante Issues los problemas detectados durante las pruebas.
- Documentar las correcciones realizadas.
- Mantener compatibilidad con los componentes Bootstrap avanzados desarrollados por el equipo.
- Dar seguimiento a la implementación mediante GitHub Issue #58.
  
---

## 4. Archivos involucrados

La implementación requerirá principalmente modificaciones en:

- `index.html`

También se creará:

- `css/bootstrap-overrides.css`
- `docs/04-testing/test-case-6.md`

Los archivos existentes:

- `css/styles.css`
- `css/components.css`
- `css/responsive.css`

se mantendrán como parte de la implementación previa. Las personalizaciones específicas necesarias para Bootstrap se centralizarán en `css/bootstrap-overrides.css`.
---

## 5. Plan de implementación

### Etapa 1 — Preparación

1. Crear la rama `feature/dev-frontend-bootstrap-migration`.
2. Crear y documentar esta especificación antes de comenzar la implementación.
3. Revisar la estructura HTML y CSS existente.
4. Revisar el mockup actualizado disponible en Figma.

### Etapa 2 — Integración de Bootstrap

1. Incorporar Bootstrap mediante CDN jsDelivr.
2. Incorporar Bootstrap Bundle JS al final del `body`.
3. Crear `bootstrap-overrides.css`.
4. Verificar que la integración inicial no genere regresiones visuales.

### Etapa 3 — Migración de la interfaz

1. Migrar las secciones necesarias al sistema de grillas de Bootstrap.
2. Aplicar clases responsive cuando corresponda.
3. Utilizar componentes y utilidades Bootstrap adecuados.
4. Mantener los estilos propios necesarios para conservar la identidad visual.
5. Comparar la implementación con el mockup de Figma.

### Etapa 4 — Revisión y ajustes

1. Revisar manualmente el resultado generado con asistencia de IA.
2. Corregir inconsistencias respecto del mockup.
3. Verificar estructura, espaciados, tipografía y comportamiento responsive.
4. Evitar estilos inline innecesarios.

### Etapa 5 — Testing

1. Crear `docs/04-testing/test-case-6.md`.
2. Ejecutar las pruebas responsive mediante Playwright MCP.
3. Registrar viewports, resultados y evidencias.
4. Crear un Issue en GitHub ante los problemas detectados.
5. Corregir los problemas encontrados y realizar el retest correspondiente.

---

## 6. Herramientas

Durante la implementación se utilizarán:

- Visual Studio Code
- Git y GitHub
- Bootstrap
- jsDelivr CDN
- Figma
- Figma MCP
- GitHub Copilot Agent Mode
- Playwright MCP
- GitHub MCP

---

## 7. Criterios de aceptación

La tarea se considerará completada cuando:

- [ ] Bootstrap se encuentre integrado mediante CDN.
- [ ] La interfaz utilice el sistema de grillas de Bootstrap.
- [ ] Se mantenga la identidad visual de la tienda.
- [ ] Exista `css/bootstrap-overrides.css`.
- [ ] No se eliminen innecesariamente los estilos existentes.
- [ ] La implementación sea responsive.
- [ ] Se haya utilizado el mockup actualizado de Figma como referencia.
- [ ] Se documente el uso de Figma MCP y el prompt utilizado.
- [ ] Se haya revisado manualmente el resultado generado con asistencia de IA.
- [ ] Exista y se ejecute `test-case-6.md`.
- [ ] Los problemas detectados durante QA sean registrados y corregidos.
- [ ] Se actualice `changelog.md`.
- [ ] La implementación sea integrada mediante Pull Request hacia `develop`.
- [ ] Bootstrap Bundle JS se encuentre integrado al final del `body`.
- [ ] `css/styles.css`, `css/components.css` y `css/responsive.css` se mantengan sin ser reemplazados.
- [ ] La integración sea compatible con los componentes Bootstrap avanzados desarrollados por el equipo.
- [ ] La implementación se encuentre vinculada a la GitHub Issue #58.

---

## 8. Uso de Figma MCP y asistencia de IA

### Prompt utilizado

Durante la implementación se utilizó asistencia de IA mediante GitHub Copilot Agent Mode para revisar la integración de Bootstrap y ejecutar las verificaciones responsive con Playwright MCP.

Para el proceso de testing se solicitó ejecutar el Test Case 6 sobre `http://localhost:3000` en los siguientes viewports:

- Desktop: 1920x1080
- Tablet: 820x1180
- iPhone 14 Pro: 390x844
- Samsung Galaxy S23: 412x915

Se solicitó comprobar:

- que no exista overflow horizontal global;
- que los elementos no se corten ni se superpongan;
- que la grilla de Bootstrap se adapte correctamente;
- que la guía de talles continúe siendo utilizable;
- que no se modifiquen automáticamente los archivos ante un problema detectado.

### Resultado obtenido

La implementación incorporó Bootstrap 5.3.8 mediante CDN jsDelivr y Bootstrap Bundle JS al final del `body`.

La estructura principal fue adaptada al sistema de grillas de Bootstrap mediante clases como:

- `container`
- `row`
- `col-12`
- `col-md-6`
- `col-lg-3`
- `col-lg-9`
- `col-xl-4`

Durante la primera ejecución de Playwright MCP se detectó una regresión visual en desktop y tablet. Los estilos propios existentes interferían con la nueva grilla Bootstrap y provocaban una distribución incorrecta del catálogo.

El hallazgo fue registrado en GitHub mediante el Issue #59.

Después de aplicar la corrección se realizó un retest mediante Playwright MCP y los cuatro viewports obtuvieron resultado PASS.

### Ajustes manuales realizados

El código sugerido con asistencia de IA fue revisado manualmente antes de incorporarlo.

Se mantuvieron los archivos de estilos existentes:

- `css/styles.css`
- `css/components.css`
- `css/responsive.css`

Las reglas necesarias para resolver incompatibilidades con Bootstrap se centralizaron en:

`css/bootstrap-overrides.css`

Se ajustó la convivencia entre las reglas CSS existentes y la grilla de Bootstrap sin eliminar los estilos previos del proyecto.

Figma MCP estuvo disponible durante el proceso, aunque requirió autenticación durante esta etapa. La implementación se contrastó visualmente con el mockup actualizado disponible en el repositorio:

`docs/01-mockup/primer-parcial/disenio-bootstrap.png`

---

## 9. Testing

El proceso de testing se encuentra documentado en:

`docs/04-testing/test-case-6.md`

El Test Case 6 fue ejecutado mediante Playwright MCP sobre la rama:

`feature/dev-frontend-bootstrap-migration`

### Ejecución inicial

| Viewport | Resultado |
|---|---|
| Desktop — 1920x1080 | FAIL |
| Tablet — 820x1180 | Adaptación parcial |
| iPhone 14 Pro — 390x844 | PASS |
| Samsung Galaxy S23 — 412x915 | PASS |

La ejecución inicial permitió detectar una regresión de la grilla Bootstrap en desktop y tablet.

El problema fue registrado en:

**GitHub Issue #59 — `[BUG][Frontend Bootstrap][TC6] Regresión de grilla en desktop y tablet`**

### Corrección

Se ajustó `css/bootstrap-overrides.css` para evitar que las reglas CSS anteriores interfirieran con la distribución realizada mediante Bootstrap.

### Retest

Después de la corrección se volvió a ejecutar el Test Case 6 mediante Playwright MCP.

| Viewport | Retest |
|---|---|
| Desktop — 1920x1080 | PASS |
| Tablet — 820x1180 | PASS |
| iPhone 14 Pro — 390x844 | PASS |
| Samsung Galaxy S23 — 412x915 | PASS |

No se detectó overflow horizontal global ni elementos cortados o superpuestos.

La guía de talles continuó siendo utilizable y mantuvo el desplazamiento horizontal interno cuando fue necesario en dispositivos móviles.

**Resultado final TC6: PASS**

---

## 10. Resultado final

Se completó la migración de la estructura principal de la interfaz al sistema de grillas de Bootstrap 5.

La implementación final incluye:

- Bootstrap 5.3.8 mediante CDN jsDelivr.
- Bootstrap Bundle JS.
- Uso del sistema de grillas responsive de Bootstrap.
- Conservación de los estilos propios existentes.
- Archivo `css/bootstrap-overrides.css` para compatibilidad y personalizaciones.
- Adaptación responsive del área de filtros y catálogo.
- Distribución responsive de las tarjetas de productos.
- Test Case 6 documentado y ejecutado mediante Playwright MCP.
- Registro del fallo detectado mediante GitHub Issue #59.
- Corrección y retest exitoso en los cuatro viewports evaluados.

La implementación mantiene la identidad visual existente y permite que Bootstrap conviva con los estilos desarrollados previamente por el equipo.

La tarea se encuentra vinculada a la GitHub Issue #58 y queda preparada para su integración mediante Pull Request hacia `develop`.