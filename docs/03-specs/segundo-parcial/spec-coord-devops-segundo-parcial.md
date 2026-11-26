# SPEC - Coordinador / DevOps - Segundo Parcial

## 1. Información general

- **Materia:** Programación Web I.
- **Institución:** UCES.
- **Proyecto:** Tienda Online.
- **Grupo:** N.º 3.
- **Responsable:** Juan Martin Britos.
- **Usuario GitHub:** @juanmartinbritos7-cmd.
- **Rol:** Coordinador / DevOps.
- **Rama:** `feature/coord-devops-segundo-parcial`.
- **Issue asociada:** [#133](https://github.com/dantebiondi666-prog/tienda-online/issues/133).
- **Fecha:** 26/11/2026.
- **Fecha límite de entrega:** 27/11/2026 - 23:55.
- **Fecha límite de correcciones:** 30/11/2026 - 22:00.

# Momento 1 - Planificación

## 2. Objetivo

Coordinar el desarrollo y la integración de las funcionalidades correspondientes al Segundo Parcial, asegurando el cumplimiento de los requerimientos técnicos, la calidad del código, la documentación y el flujo de trabajo colaborativo mediante GitHub.

Como Coordinador/DevOps, seré responsable de revisar las contribuciones del equipo, gestionar las issues, mantener actualizada la documentación y coordinar la resolución de las correcciones solicitadas por el docente.

## 3. Estado inicial del proyecto

La Actividad Obligatoria N.º 4 fue aprobada por el docente y sus correcciones fueron integradas en la rama master.

Se realizaron las siguientes tareas previas:

- Obtención del LGTM y Approve del docente.
- Merge de `release/cuarta-entrega` hacia `master`.
- Creación del tag `v1.2-cuarta-entrega`.
- Publicación de la GitHub Release.
- Backport de las correcciones hacia develop.
- Verificación del commit aprobado dentro del historial de develop.

### Referencias

- [PR #112 - Cuarta Entrega](https://github.com/dantebiondi666-prog/tienda-online/pull/112).
- [Release v1.2-cuarta-entrega](https://github.com/dantebiondi666-prog/tienda-online/releases/tag/v1.2-cuarta-entrega).
- [PR #132 - Backport de la AO4](https://github.com/dantebiondi666-prog/tienda-online/pull/132).
- Commit del merge: `eb4ca02`.

## 4. Plan de coordinación del equipo

Se organizará el trabajo según las responsabilidades de cada rol.

| Rol | Responsabilidad | Rama prevista |
|---|---|---|
| Desarrollador JS Asíncrono | Consumo de datos mediante Fetch y APIs | feature/dev-async-fetch-api |
| Desarrollador JS Librerías Externas | Integración de una librería mediante CDN | feature/dev-libreria-externa-[nombre] |
| Tester QA/JS | Testing automatizado y auditorías Lighthouse | feature/tester-qa-js-testing-suite |
| Coordinador/DevOps | Coordinación, revisión, integración y documentación | feature/coord-devops-segundo-parcial |

Cada integrante deberá crear sus issues, elaborar su SPEC antes de comenzar la implementación, realizar commits descriptivos y presentar sus cambios mediante Pull Requests hacia develop.

## 5. Orden de integración

El orden previsto de integración será:

1. Verificación de develop con las correcciones de la AO4.
2. Elaboración y commit inicial de los SPEC individuales.
3. Auditoría Lighthouse baseline.
4. Integración del módulo de consumo asíncrono mediante Fetch.
5. Auditoría Lighthouse posterior a la integración de Fetch.
6. Integración de la librería externa.
7. Auditoría Lighthouse posterior a la integración de la librería.
8. Integración de las suites de testing y documentación QA.
9. Integración de la documentación del Coordinador/DevOps.
10. Verificación general del proyecto.
11. Creación de la rama release/segundo-parcial.

El orden podrá ajustarse según las dependencias técnicas, manteniendo los tres momentos de auditoría requeridos.

## 6. Gestión de issues y seguimiento

Se utilizará GitHub Projects mediante una vista Kanban para organizar las responsabilidades y controlar el estado de las tareas.

Los estados previstos serán:

- Todo: tareas pendientes.
- In Progress: tareas en desarrollo.
- In Review: tareas pendientes de revisión.
- Done: tareas completadas y verificadas.

Cada issue deberá identificar su responsable, descripción, prioridad, criterios de aceptación y Pull Request asociada cuando corresponda.

## 7. Estrategia de code review

Se realizarán como mínimo cuatro revisiones de Pull Requests asistidas por inteligencia artificial.

Se podrán realizar revisiones adicionales según los problemas encontrados durante la integración.

### Herramientas

- ChatGPT como herramienta de asistencia mediante IA.
- GitHub Pull Requests.
- Visual Studio Code.
- Git y GitHub.
- Jasmine.
- Lighthouse.
- GitHub Projects.

La utilización de inteligencia artificial permitirá identificar posibles errores, inconsistencias de arquitectura, problemas de integración y casos de testing faltantes.

Las observaciones generadas serán verificadas manualmente antes de aprobar o solicitar modificaciones en una Pull Request.

### Criterios de revisión

- Cumplimiento del SPEC correspondiente.
- Separación de responsabilidades.
- Uso correcto de Fetch, promises y async/await.
- Manejo de estados de carga, éxito y error.
- Integración correcta con el DOM.
- Compatibilidad con las clases POO existentes.
- Integración de la librería externa mediante CDN.
- Cobertura de casos de éxito y error.
- Ausencia de errores críticos.
- Documentación y comentarios JSDoc cuando corresponda.
- Actualización del changelog.
- Vinculación de issues y Pull Requests.
- Ausencia de archivos temporales innecesarios.

Los problemas detectados se comunicarán mediante comentarios inline sobre las líneas correspondientes del diff y se utilizará Request Changes cuando sea necesario.

Cada revisión quedará documentada en el Momento 2 de este SPEC, indicando el prompt exacto utilizado, los archivos analizados, las observaciones y el resultado.

La Pull Request del Coordinador deberá ser revisada y aprobada por otro integrante autorizado.

## 8. Plan de testing e integración

Se coordinará con el Tester QA la ejecución de las pruebas automatizadas y las auditorías de rendimiento y accesibilidad.

Se verificarán los resultados correspondientes a:

- Testing de las funcionalidades existentes.
- Testing de las funciones asíncronas.
- Testing de la librería externa.
- Casos de éxito y error.
- Auditoría Lighthouse inicial.
- Auditoría Lighthouse post-fetch.
- Auditoría Lighthouse post-library.

Se establecerá un objetivo mínimo de 95 puntos en Performance, Accessibility, Best Practices y SEO.

Los problemas identificados serán registrados mediante issues y asignados al rol correspondiente.

## 9. Plan de resolución de Request Changes

Una vez presentada la entrega, se revisarán las observaciones realizadas por el docente en la Pull Request de release/segundo-parcial hacia master.

Cada corrección deberá contar con una issue específica, un responsable y una prioridad.

### Clasificación de prioridades

| Prioridad | Descripción |
|---|---|
| Crítica | Errores que impiden el funcionamiento o bloquean la entrega. |
| Alta | Incumplimiento de requerimientos obligatorios o fallos de integración. |
| Media | Problemas de documentación, testing o calidad del código. |
| Baja | Ajustes menores de formato o presentación. |

Las correcciones se realizarán mediante ramas fix/ con Pull Requests hacia release/segundo-parcial.

Cada corrección deberá quedar registrada en la sección Fixed del changelog.

Una vez resueltos los comentarios del docente, se notificará en el hilo de Slack mediante el emoji :white_check_mark:.

El proceso se repetirá hasta obtener el LGTM y Approve final.

En caso de incidencias o reasignaciones dispuestas por el docente, se documentarán el motivo, la fecha, el responsable y las tareas afectadas.

## 10. Estrategia de entrega

Una vez integradas todas las funcionalidades en develop, se procederá a:

1. Verificar el funcionamiento general de la aplicación.
2. Revisar README.md y changelog.md.
3. Verificar la estructura de carpetas.
4. Crear release/segundo-parcial.
5. Configurar y verificar GitHub Pages.
6. Crear la Pull Request hacia master.
7. Publicar el enlace en Slack.
8. Realizar la entrega individual en el campus virtual y recordar al resto del equipo que debe presentar el mismo enlace.
9. Coordinar las correcciones solicitadas por el docente.
10. Obtener el LGTM y Approve.
11. Realizar el merge hacia master y notificar mediante :pr-merged:.
12. Crear el tag v2.0-segundo-parcial sobre el commit del merge.
13. Publicar la GitHub Release con el changelog correspondiente.
14. Realizar el backport final hacia develop y notificar su finalización.

## 11. Criterios de aceptación

### Preparación

- [x] Correcciones de la AO4 aprobadas.
- [x] Merge de la AO4 hacia master.
- [x] Tag y Release de la AO4 publicados.
- [x] Backport de la AO4 realizado.
- [x] Issue del Coordinador creada.
- [x] Rama individual creada.
- [ ] SPEC inicial commiteado.

### Desarrollo y coordinación

- [ ] GitHub Projects configurado.
- [ ] Issues asignadas a los integrantes.
- [ ] Mínimo de cuatro PR revisados con IA.
- [ ] Prompts y resultados de revisión documentados.
- [ ] Comentarios inline registrados y Request Changes cuando corresponda.
- [ ] Pull Requests del equipo revisadas e integradas.
- [ ] README actualizado.
- [ ] Changelog actualizado.
- [ ] Estructura del repositorio verificada.
- [ ] Testing y auditorías Lighthouse verificados.

### Entrega

- [ ] Rama release/segundo-parcial creada.
- [ ] GitHub Pages funcionando desde la release.
- [ ] Pull Request de entrega creada.
- [ ] Entrega publicada en Slack.
- [ ] Enlace presentado en el campus.

### Correcciones y cierre

- [ ] Request Changes analizados.
- [ ] Issues de corrección creadas y asignadas.
- [ ] Correcciones realizadas y documentadas.
- [ ] LGTM y Approve obtenidos dentro del plazo.
- [ ] Merge hacia master realizado.
- [ ] Tag v2.0-segundo-parcial creado.
- [ ] GitHub Release publicada.
- [ ] Backport final realizado.
- [ ] Cierre notificado en Slack.

# Momento 2 - Ejecución y evidencias

## 12. Registro de code reviews asistidos por IA

Esta sección se completará durante el desarrollo con las revisiones efectivamente realizadas.

| Revisión | PR | Rol | Archivos revisados | Resultado |
|---|---|---|---|---|
| Review 1 | [#137](https://github.com/dantebiondi666-prog/tienda-online/pull/137) | Desarrollador JS Asíncrono - Fetch & APIs | apiService.js, productos.json, script.js, index.html, changelog.md, package.json, script.spec.js y SPEC | Request Changes: RC01 y RC02 |
| Review 2 | Pendiente | Pendiente | Pendiente | Pendiente |
| Review 3 | Pendiente | Pendiente | Pendiente | Pendiente |
| Review 4 | Pendiente | Pendiente | Pendiente | Pendiente |

Para cada revisión se registrará:

- Fecha y enlace al PR.
- Herramienta de IA utilizada.
- Prompt exacto en bloque de código.
- Archivos del diff utilizados como contexto.
- Observaciones y validaciones manuales.
- Request Changes y líneas afectadas.
- Resolución y resultado final.
### Code Review N.º 1 - PR #137

#### Información general

- Fecha: 26/11/2026.
- Responsable del desarrollo: Dante Biondi.
- Rol: Desarrollador JS Asíncrono - Fetch & APIs.
- PR: [#137](https://github.com/dantebiondi666-prog/tienda-online/pull/137).
- Issue: [#135](https://github.com/dantebiondi666-prog/tienda-online/issues/135).
- Rama: feature/dev-async-fetch-api.
- Destino previsto: develop.
- Herramienta de IA utilizada: ChatGPT.

#### Contexto proporcionado a la IA

- Consigna y rúbrica del Segundo Parcial.
- Capturas del diff del PR #137.
- api/productos.json.
- js/api/apiService.js.
- js/script.js.
- js/data/productos.js (archivo eliminado).
- index.html.
- changelog.md.
- package.json.
- js/test/script.spec.js.
- docs/03-specs/segundo-parcial/spec-dev-async-fetch.md.
- Resultados de la ejecución local de Jasmine.

#### Prompt exacto utilizado para la validación final

La revisión inicial se realizó de forma iterativa mediante
capturas del diff y resultados de terminal. Posteriormente,
se utilizó el siguiente prompt para consolidar y validar
los hallazgos de la revisión:

```text
Realizá una revisión técnica exhaustiva del PR #137,
correspondiente al Desarrollador JS Asíncrono — Fetch & APIs,
contrastando los cambios con la consigna del segundo parcial.

Utilizá como contexto las capturas del diff, api/productos.json,
js/api/apiService.js, js/script.js, index.html, changelog.md,
package.json, script.spec.js, el SPEC del desarrollador y
los resultados de Jasmine.

Verificá el cumplimiento de los requisitos, las regresiones,
el manejo de errores, la cobertura, la integración con POO
y DOM, y justificá los Request Changes realizados indicando
los archivos y las líneas correspondientes.
```

#### Aspectos técnicos revisados

- Selección y justificación de la fuente JSON.
- Implementación de Fetch y async/await.
- Validación de respuestas HTTP.
- Manejo de respuestas JSON inválidas.
- Estados de carga, éxito y error.
- Aplicación de map(), filter() y reduce().
- Validación y sanitización de productos.
- Integración con las clases POO existentes.
- Integración con el DOM y PersistenciaService.
- Separación de responsabilidades.
- Documentación JSDoc.
- Trazabilidad mediante changelog, PR e issue.
- Compatibilidad con las suites de testing existentes.

#### Validación manual

Para revisar el código sin modificar la rama del
Coordinador, se creó un worktree independiente.

Comandos utilizados:

```powershell
git fetch origin
git worktree add --detach ../tienda-online-review-137 origin/feature/dev-async-fetch-api
cd ../tienda-online-review-137
npm.cmd ci
npm.cmd test
```

#### Resultados de Jasmine

| Métrica | Resultado |
|---|---:|
| Tests ejecutados | 150 |
| Tests aprobados | 113 |
| Tests fallidos | 37 |
| Porcentaje de aprobación | 75,33% |
| Seed | 58552 |
| Tiempo de ejecución | 1,077 segundos |

Se identificaron fallos relacionados con la búsqueda,
los filtros, el modal de productos, el carrito y el
resumen de compra.

La causa probable corresponde a la falta de adaptación
de los tests existentes a la inicialización asíncrona
del catálogo y a la ausencia de un mock de Fetch en
la preparación de la suite inspeccionada.

Los resultados confirman una regresión en la ejecución
de los tests, pero no demuestran por sí solos que todas
las funcionalidades estén rotas en el navegador.

#### Request Changes publicados

| RC | Archivo | Línea del diff | Prioridad | Estado |
|---|---|---:|---|---|
| RC01 | js/script.js | 110 | Alta | Pendiente |
| RC02 | js/api/apiService.js | 58 | Media | Pendiente |

##### RC01 - Regresión de las pruebas existentes

La función iniciarAplicacion() incorpora una carga
asíncrona mediante await cargarCatalogo().

Sin embargo, script.spec.js, en la línea 71, dispara
DOMContentLoaded sin esperar explícitamente que finalice
la carga del catálogo.

Se solicitó adaptar las pruebas existentes, simular las
respuestas de Fetch y sincronizar la inicialización
asíncrona.

Responsables: Desarrollador JS Asíncrono y Tester QA/JS.

Criterio de aceptación: ejecutar la suite existente
sin regresiones y obtener 0 failures.

##### RC02 - Cobertura del servicio API

El comando cobertura de package.json no incluye
el directorio js/api/.

Se solicitó incorporar el nuevo servicio a la
configuración de c8 y agregar las pruebas correspondientes
a Fetch y al procesamiento de los datos.

Responsable principal: Tester QA/JS, en coordinación
con el Desarrollador JS Asíncrono.

Criterio de aceptación: generar un informe de cobertura
que incluya apiService.js y los resultados de sus tests.

#### Resultado de la revisión

- Revisión asistida por IA: realizada.
- Validación manual mediante Jasmine: realizada.
- Comentarios inline publicados: 2.
- Request Changes enviado: sí.
- Aprobación del Coordinador: pendiente.
- Lighthouse baseline: pendiente de verificar.
- Merge hacia develop: pendiente.

#### Conclusión

La implementación presenta una arquitectura coherente
con los requerimientos del Segundo Parcial.

Sin embargo, se decidió solicitar modificaciones debido
a los fallos detectados en la suite de testing y a la
configuración incompleta de cobertura.

Se deberá realizar una nueva validación después de
resolver las observaciones, antes de aprobar e integrar
la Pull Request.

#### Seguimiento de las correcciones

- [x] Revisar el diff mediante IA.
- [x] Ejecutar las pruebas existentes.
- [x] Identificar regresiones.
- [x] Publicar comentarios inline.
- [x] Enviar Request Changes.
- [ ] Verificar resolución de RC01.
- [ ] Verificar resolución de RC02.
- [ ] Ejecutar nuevamente Jasmine.
- [ ] Verificar cobertura actualizada.
- [ ] Confirmar Lighthouse baseline.
- [ ] Aprobar PR.
- [ ] Mergear hacia develop.

---
## 13. Registro de Request Changes del docente

| RC | Descripción | Prioridad | Responsable | Issue | PR | Estado |
|---|---|---|---|---|---|---|
| Pendiente | Pendiente de revisión docente | - | - | - | - | Pendiente |

## 14. Obstáculos y reasignaciones

Se documentarán las dificultades reales encontradas durante la coordinación, las decisiones tomadas, las reasignaciones formales y sus respectivas justificaciones.

## 15. Evidencias finales

- GitHub Projects: pendiente.
- PR del Coordinador: pendiente.
- URL de GitHub Pages: pendiente.
- PR de entrega: pendiente.
- LGTM y Approve del Segundo Parcial: pendiente.
- Release v2.0-segundo-parcial: pendiente.
- PR de backport final: pendiente.

## 16. Conclusión

Pendiente de completar al finalizar el Segundo Parcial, considerando los resultados obtenidos, el cumplimiento de los criterios de aceptación y las correcciones realizadas.