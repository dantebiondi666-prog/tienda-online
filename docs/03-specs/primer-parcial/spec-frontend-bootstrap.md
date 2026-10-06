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

- Integrar Bootstrap mediante CDN jsDelivr.
- Mantener los estilos existentes del proyecto.
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

---

## 4. Archivos involucrados

La implementación podrá requerir modificaciones en:

- `index.html`
- `css/styles.css`
- `css/components.css`
- `css/responsive.css`

También se creará:

- `css/bootstrap-overrides.css`
- `docs/04-testing/test-case-6.md`

Los estilos existentes no serán eliminados. Bootstrap será integrado como complemento de la implementación actual.

---

## 5. Plan de implementación

### Etapa 1 — Preparación

1. Crear la rama `feature/dev-frontend-bootstrap-migration`.
2. Crear y documentar esta especificación antes de comenzar la implementación.
3. Revisar la estructura HTML y CSS existente.
4. Revisar el mockup actualizado disponible en Figma.

### Etapa 2 — Integración de Bootstrap

1. Incorporar Bootstrap mediante CDN jsDelivr.
2. Incorporar los recursos necesarios de Bootstrap.
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

---

## 8. Uso de Figma MCP y asistencia de IA

### Prompt utilizado

> Pendiente de completar durante la implementación.

### Resultado obtenido

Pendiente de completar durante la implementación.

### Ajustes manuales realizados

Pendiente de completar durante la implementación.

---

## 9. Testing

El proceso de testing será documentado en:

`docs/04-testing/test-case-6.md`

Se utilizará Playwright MCP para verificar el comportamiento responsive de la migración a Bootstrap.

Los resultados, evidencias, problemas encontrados y retests serán documentados una vez realizada la implementación.

---

## 10. Resultado final

Pendiente de completar al finalizar la implementación.