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
| Review 2 | [#136](https://github.com/dantebiondi666-prog/tienda-online/pull/136) | Desarrollador JS Librerías Externas | animaciones.js, script.js, index.html, changelog.md, libreria-doc.md, SPEC y capturas | Request Changes: RC01 y RC02 |
| Review 3 | [#137](https://github.com/dantebiondi666-prog/tienda-online/pull/137) | Revalidación del Desarrollador JS Asíncrono | script.spec.js, api.spec.js, package.json, diff de commits y resultados de cobertura | RC01 y RC02 resueltos - LGTM y Approve |
| Review 4 | [#136](https://github.com/dantebiondi666-prog/tienda-online/pull/136) | Revalidación del Desarrollador JS Librerías Externas | animaciones.js, diff de commits, Jasmine, Node.js, JSDOM y git merge-tree | RC01 aceptado - RC02 pendiente - Approve pendiente |
| Review 5 | [#136](https://github.com/dantebiondi666-prog/tienda-online/pull/136) | Revalidación definitiva de AOS | Diff de integración, Jasmine, cobertura y git merge-base | RC02 resuelto - LGTM - Approve - Merge |

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

### Code Review N.º 2 - PR #136

#### Información general

- Fecha: 26/11/2026.
- Responsable del desarrollo: Lucas Ivan Fischer.
- Rol: Desarrollador JS Librerías Externas.
- PR: [#136](https://github.com/dantebiondi666-prog/tienda-online/pull/136).
- Issue: [#134](https://github.com/dantebiondi666-prog/tienda-online/issues/134).
- Rama: feature/dev-libreria-externa-aos.
- Destino: develop.
- Herramienta de IA utilizada: ChatGPT.

#### Contexto proporcionado a la IA

- Consigna y rúbrica del Segundo Parcial.
- Capturas del diff del PR #136.
- js/utils/animaciones.js.
- js/script.js.
- index.html.
- changelog.md.
- docs/06-librerias/libreria-doc.md.
- docs/03-specs/segundo-parcial/spec-dev-libreria-externa.md.
- docs/06-librerias/screenshots/aos-catalogo.png.
- docs/06-librerias/screenshots/aos-carrito.png.
- docs/06-librerias/screenshots/aos-sin-libreria.png.
- Resultados de Jasmine.
- Resultados de la prueba aislada con Node.js y JSDOM.
- Resultados de la simulación de integración con Git.

#### Prompt exacto utilizado para la validación final

La revisión inicial se realizó de forma iterativa mediante
capturas del código y resultados de terminal.

Posteriormente, se utilizó el siguiente prompt para
consolidar y validar los hallazgos:

```text
Realizá una revisión técnica exhaustiva del PR #136, correspondiente al Desarrollador JS Librerías Externas, contrastando los cambios con la consigna y la rúbrica del segundo parcial.

Utilizá como contexto las capturas del diff, el SPEC del desarrollador, js/utils/animaciones.js, js/script.js, index.html, changelog.md, libreria-doc.md, las capturas de implementación, los resultados de Jasmine, la prueba aislada con Node.js y JSDOM y la simulación de integración mediante git merge-tree.

Verificá la integración de AOS mediante CDN, la configuración del wrapper, la accesibilidad, el movimiento reducido, la degradación segura, los puntos de integración con el DOM y la compatibilidad con Fetch.

Justificá los dos Request Changes realizados, indicando los archivos, líneas, evidencias, prioridades y criterios de aceptación.
```

#### Aspectos técnicos revisados

- Selección y justificación de la librería AOS.
- Integración de AOS 2.3.4 mediante CDN.
- Configuración e inicialización de la librería.
- Encapsulamiento mediante un módulo wrapper.
- Separación de responsabilidades.
- Integración dinámica con el DOM.
- Animaciones en el catálogo, carrito y resumen.
- Consistencia visual con el diseño existente.
- Preferencia de movimiento reducido.
- Manejo de errores y degradación segura.
- Documentación técnica y capturas.
- Compatibilidad con las pruebas existentes.
- Compatibilidad de integración con Fetch.
- Trazabilidad mediante PR, issue y changelog.

#### Evaluación según la rúbrica

| Criterio | Puntaje máximo | Resultado de revisión |
|---|---:|---|
| Selección y justificación | 0,5 | Correcto |
| Integración técnica | 0,8 | Implementada, requiere corrección del wrapper |
| Implementación | 0,5 | Integración en catálogo, carrito y resumen |
| Documentación | 0,5 | Completa |
| Participación técnica | 0,2 | Pendiente de resolución y merge |

La evaluación corresponde a una revisión técnica
preliminar y no representa una calificación definitiva.

#### Puntos de integración identificados

| Componente | Efecto | Línea de script.js |
|---|---|---:|
| Catálogo de productos | fade-up | 284 |
| Carrito | fade-right | 459 |
| Resumen de compra | fade-right | 497 |

La librería se encuentra encapsulada en el módulo
js/utils/animaciones.js.

El controlador utiliza el wrapper sin depender
directamente del objeto global AOS.

#### Validación manual mediante Jasmine

Para revisar la implementación sin modificar la rama
del Coordinador, se creó un worktree independiente.

Comandos utilizados:

```powershell
git fetch origin
git worktree add --detach ../tienda-online-review-136 origin/feature/dev-libreria-externa-aos
cd ../tienda-online-review-136
npm.cmd ci
npm.cmd test
```

#### Resultados de Jasmine

| Métrica | Resultado |
|---|---:|
| Tests ejecutados | 150 |
| Tests aprobados | 150 |
| Tests fallidos | 0 |
| Porcentaje de aprobación | 100% |
| Seed | 05932 |
| Tiempo de ejecución | 1,31 segundos |

No se detectaron regresiones en la suite existente.

Sin embargo, esta ejecución todavía no incluye las
pruebas específicas de library.spec.js, correspondientes
al Tester QA/JS.

#### Validación del manejo de errores de AOS

Se realizó una prueba aislada mediante Node.js y JSDOM
para comprobar el comportamiento del wrapper cuando
AOS.refreshHard() genera una excepción.

Código utilizado:

```javascript
import Animaciones from "./js/utils/animaciones.js";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<article>Producto de prueba</article>");
const elemento = dom.window.document.querySelector("article");

globalThis.AOS = {
  init() {},
  refreshHard() {
    throw new Error("Fallo simulado de AOS");
  }
};

console.log("Inicializacion:", Animaciones.iniciar());
console.log("Animacion:", Animaciones.animar(elemento));
console.log("Refresco:", Animaciones.refrescar());
console.log("Conserva data-aos:", elemento.hasAttribute("data-aos"));
console.log("Conserva data-aos-delay:", elemento.hasAttribute("data-aos-delay"));

dom.window.close();
```

El código se ejecutó mediante Node.js, sin modificar
los archivos del repositorio.

Resultados obtenidos:

```text
Inicializacion: true
Animacion: true
Refresco: false
Conserva data-aos: true
Conserva data-aos-delay: true
```

La prueba confirma que el wrapper conserva los
atributos de animación después de una excepción.

Esto puede generar problemas de visibilidad cuando
el CSS de AOS permanece cargado.

La prueba con JSDOM confirma la permanencia de los
atributos, pero no demuestra directamente la
invisibilidad visual en un navegador real.

#### Validación de integración con Fetch

Se realizó una simulación de integración entre las
ramas de los desarrolladores de Fetch y AOS.

Comandos utilizados:

```powershell
git fetch origin
git merge-tree --write-tree origin/feature/dev-async-fetch-api HEAD
$LASTEXITCODE
```

Resultados:

```text
Auto-merging changelog.md
CONFLICT (content): Merge conflict in changelog.md
Auto-merging index.html
Auto-merging js/script.js
CONFLICT (content): Merge conflict in js/script.js
```

Código de salida: 1.

| Archivo | Resultado |
|---|---|
| changelog.md | Conflicto confirmado |
| js/script.js | Conflicto confirmado |
| index.html | Combinación automática |

La simulación permitió identificar conflictos entre
las dos ramas sin modificar sus archivos de trabajo
ni realizar un merge hacia develop.

La compatibilidad funcional conjunta deberá verificarse
después de resolver los conflictos.

#### Request Changes publicados

| RC | Archivo | Línea del diff | Prioridad | Estado |
|---|---|---:|---|---|
| RC01 | js/utils/animaciones.js | 107 | Alta | Pendiente |
| RC02 | js/script.js | 17 | Alta | Pendiente |

##### RC01 - Degradación segura incompleta ante errores de AOS

El método refrescar() captura las excepciones generadas
por AOS.refreshHard(), pero no elimina los atributos
de animación configurados previamente.

La prueba aislada confirmó que data-aos y
data-aos-delay permanecen después de un fallo.

Se solicitó implementar un mecanismo de recuperación
que garantice la visibilidad de los elementos y permita
continuar utilizando la aplicación sin animaciones.

Responsable principal: Desarrollador JS Librerías Externas.

Responsable de validación: Tester QA/JS.

Criterios de aceptación:

- El contenido permanece visible ante errores de refreshHard().
- La aplicación continúa funcionando sin animaciones.
- Se incorpora una prueba automatizada para este escenario.
- Se verifica la recuperación visual en el navegador.
- La suite existente mantiene 0 failures.

##### RC02 - Coordinación de la integración entre Fetch y AOS

La simulación realizada mediante git merge-tree
identificó conflictos en js/script.js y changelog.md.

Se solicitó actualizar la rama de AOS desde develop
después de integrar el PR #137 y realizar la auditoría
Lighthouse post-fetch.

La resolución deberá conservar las funcionalidades
implementadas por ambos desarrolladores.

Responsables: Desarrollador JS Librerías Externas,
Desarrollador JS Asíncrono y Coordinador/DevOps.

Criterios de aceptación:

- Ausencia de conflictos con develop actualizado.
- Conservación de la inicialización asíncrona.
- Animaciones aplicadas a productos cargados mediante Fetch.
- Conservación del funcionamiento del carrito y resumen.
- Conservación de ambos aportes en changelog.md.
- Ejecución de Jasmine con 0 failures.

#### Coordinación entre roles

Se estableció el siguiente orden de integración:

1. Verificar Lighthouse baseline.
2. Resolver las observaciones del PR #137.
3. Aprobar e integrar Fetch hacia develop.
4. Realizar Lighthouse post-fetch.
5. Actualizar la rama de AOS desde develop.
6. Resolver los conflictos de integración.
7. Validar las correcciones del PR #136.
8. Aprobar e integrar AOS hacia develop.
9. Realizar Lighthouse post-library.

El desarrollador de AOS puede avanzar con RC01 mientras
se resuelven las observaciones correspondientes a Fetch.

#### Observaciones sobre el SPEC del desarrollador

El SPEC contiene la planificación inicial, el prompt
utilizado en Copilot Agent, los fragmentos del código
final y los ajustes manuales realizados.

La sección 2.4, correspondiente a la coordinación con
otros roles e issues respondidas, permanece pendiente.

Deberá completarse al finalizar las correcciones.

No se verificó todavía que el commit inicial del SPEC
sea anterior a los commits de implementación.

#### Resultado de la revisión

- Revisión asistida por IA: realizada.
- Validación mediante Jasmine: realizada.
- Prueba aislada mediante Node.js y JSDOM: realizada.
- Simulación de integración mediante Git: realizada.
- Tests aprobados: 150 de 150.
- Conflictos identificados: 2 archivos.
- Comentarios inline publicados: 2.
- Request Changes enviado: sí.
- Aprobación del Coordinador: pendiente.
- Merge hacia develop: pendiente.

#### Conclusión

La implementación de AOS cumple estructuralmente
con los principales requisitos del Segundo Parcial.

La selección de la librería está justificada, su
integración mediante CDN está documentada y el wrapper
mantiene la separación de responsabilidades.

Sin embargo, se identificó una recuperación incompleta
ante errores de actualización de AOS y conflictos de
integración con la funcionalidad Fetch.

Por estos motivos, se decidió solicitar modificaciones
antes de aprobar la Pull Request.

Se realizará una nueva validación una vez resueltas
las observaciones.

#### Seguimiento de las correcciones

- [x] Revisar el diff mediante IA.
- [x] Revisar el SPEC del desarrollador.
- [x] Verificar la documentación de la librería.
- [x] Ejecutar las pruebas existentes.
- [x] Simular errores de actualización de AOS.
- [x] Simular la integración con Fetch.
- [x] Identificar conflictos entre ramas.
- [x] Publicar comentarios inline.
- [x] Enviar Request Changes.
- [ ] Verificar resolución de RC01.
- [ ] Verificar integración del PR #137.
- [ ] Verificar Lighthouse post-fetch.
- [ ] Verificar resolución de RC02.
- [ ] Ejecutar nuevamente Jasmine.
- [ ] Verificar las pruebas específicas de AOS.
- [ ] Aprobar PR.
- [ ] Mergear hacia develop.
- [ ] Verificar Lighthouse post-library.

---
### Code Review N.º 3 - Revalidación del PR #137

#### Información general

- Fecha: 26/11/2026.
- Responsable del desarrollo: Dante Biondi.
- Rol: Desarrollador JS Asíncrono - Fetch & APIs.
- PR: [#137](https://github.com/dantebiondi666-prog/tienda-online/pull/137).
- Issue: [#135](https://github.com/dantebiondi666-prog/tienda-online/issues/135).
- Rama: feature/dev-async-fetch-api.
- Destino: develop.
- Herramienta de IA utilizada: ChatGPT.
- Commit inicial revisado: 1a7b7c9.
- Commit final revisado: 4aa3e4a.
- Resultado: LGTM y Approve.

#### Objetivo de la revalidación

Verificar la resolución de las observaciones RC01 y RC02
publicadas durante la primera Code Review del Coordinador.

Comprobar que las correcciones no generen nuevas
regresiones y que las pruebas existentes se conserven.

#### Contexto proporcionado a la IA

- Consigna y rúbrica del Segundo Parcial.
- Resultados de la primera Code Review.
- Diff entre los commits 1a7b7c9 y 4aa3e4a.
- js/test/script.spec.js.
- js/test/api.spec.js.
- package.json.
- Historial de commits.
- Resultados actualizados de Jasmine.
- Informe de cobertura generado mediante c8.
- Captura del Approve publicado en GitHub.

#### Prompt exacto utilizado para la validación final

La revalidación inicial se realizó de forma iterativa
mediante resultados de terminal y revisión del diff.

Después de publicar el Approve, se utilizó el siguiente
prompt para consolidar y documentar los hallazgos:

```text
Realizá una revalidación técnica del PR #137, correspondiente al Desarrollador JS Asíncrono — Fetch & APIs, después de las correcciones RC01 y RC02 solicitadas por el Coordinador/DevOps.

Utilizá como contexto el diff entre los commits 1a7b7c9 y 4aa3e4a, las modificaciones de script.spec.js y package.json, la nueva suite api.spec.js, los resultados de Jasmine y el informe actualizado de cobertura.

Verificá la resolución de las observaciones, la conservación de las pruebas existentes, la simulación de Fetch, la sincronización asíncrona mediante MutationObserver y los nuevos casos de testing.

Justificá técnicamente el LGTM y Approve otorgados, detallando las evidencias, los resultados anteriores y posteriores a las correcciones, y las validaciones pendientes antes del merge.
```

#### Commits de resolución identificados

| Commit | Descripción |
|---|---|
| 9f94946 | test(async): resolver RC01 y RC02 de la PR #137 |
| 4aa3e4a | docs(async): retirar mensaje de coordinacion de la spec |

#### Archivos modificados

| Archivo | Modificación |
|---|---|
| js/test/api.spec.js | Nueva suite de pruebas del servicio API |
| js/test/script.spec.js | Adaptación de los tests a Fetch |
| package.json | Actualización de testing y cobertura |
| changelog.md | Actualización de documentación |
| spec-dev-async-fetch.md | Actualización de evidencias |

El diff registra cinco archivos modificados,
342 inserciones y nueve eliminaciones.

La inspección detallada se concentró en los archivos
de testing y package.json. Los cambios específicos
de documentación quedan pendientes de revisión detallada.

#### Validación manual

Se reutilizó el worktree independiente creado durante
la primera revisión del PR #137.

Comandos utilizados:

```powershell
git fetch origin
cd C:\Users\juanm\tienda-online-review-137
git switch --detach origin/feature/dev-async-fetch-api
git log -5 --oneline
npm.cmd test
npm.cmd run cobertura
```

Para inspeccionar las modificaciones realizadas:

```powershell
git --no-pager reflog -4 --oneline
git --no-pager diff --stat 'HEAD@{1}' HEAD
git --no-pager diff 1a7b7c9 HEAD -- js/test/script.spec.js package.json
git --no-pager show HEAD:js/test/api.spec.js
```

#### Revalidación de RC01 - Regresión del testing

Durante la primera revisión se detectaron 37 fallos
debido a la incompatibilidad de las pruebas existentes
con la inicialización asíncrona del catálogo.

El desarrollador modificó la preparación de los tests
para incorporar respuestas simuladas de Fetch.

Se utiliza Promise.all() para cargar el HTML y el JSON
de productos:

```javascript
const [html, productosJson] = await Promise.all([
  fs.readFile(archivoHtml, "utf8"),
  fs.readFile(archivoProductos, "utf8"),
]);
```

Se incorpora un mock de Fetch mediante Jasmine:

```javascript
fetch: jasmine.createSpy("fetch").and.resolveTo({
  ok: true,
  status: 200,
  json: jasmine.createSpy("json")
    .and.resolveTo(JSON.parse(productosJson)),
}),
```

También se incorpora MutationObserver para esperar
la finalización de la carga del catálogo mediante
el atributo aria-busy.

```javascript
const cargaFinalizada = new Promise((resolve) => {
  const grilla = document.getElementById("product-grid");

  observadorCarga = new window.MutationObserver(() => {
    if (grilla.getAttribute("aria-busy") === "false") {
      observadorCarga.disconnect();
      resolve();
    }
  });

  observadorCarga.observe(grilla, {
    attributes: true,
    attributeFilter: ["aria-busy"],
  });
});
```

Posteriormente se dispara DOMContentLoaded y se espera
la finalización de la carga:

```javascript
document.dispatchEvent(new window.Event("DOMContentLoaded"));
await cargaFinalizada;
```

Aspectos verificados:

- Simulación de Fetch sin depender de un servidor HTTP.
- Sincronización de la inicialización asíncrona.
- Verificación del endpoint solicitado.
- Comprobación de que el buscador queda habilitado.
- Restauración de variables globales entre pruebas.
- Limpieza del MutationObserver.
- Conservación de los casos de prueba existentes.

Resultado: 167 specs y 0 failures.

Estado de RC01: RESUELTO.

#### Revalidación de RC02 - Cobertura del servicio API

Se verificó que package.json incorpora el directorio
js/api/ a la configuración de cobertura:

```text
--include="js/api/*.js"
```

También se agregó js/test/api.spec.js a los comandos
de testing y cobertura.

La nueva suite incorpora 17 casos de prueba.

| Categoría | Cantidad |
|---|---:|
| Fetch y manejo de errores | 6 |
| Procesamiento de productos | 9 |
| Construcción del mapa de imágenes | 2 |
| Total | 17 |

Casos contemplados:

1. Consulta exitosa al endpoint predeterminado.
2. Consulta a un endpoint personalizado.
3. Error HTTP 404.
4. Error HTTP 500.
5. Error de conexión.
6. Respuesta JSON inválida.
7. Normalización de textos y talles.
8. Conservación de datos originales sin mutaciones.
9. Respuesta que no es un array.
10. Catálogo vacío.
11. Colección sin productos válidos.
12. Registros inválidos según las reglas del dominio.
13. Imágenes, identificadores y rutas inválidas.
14. Nombres de productos duplicados.
15. Identificadores de imagen duplicados.
16. Construcción del mapa de imágenes.
17. Construcción de un mapa vacío.

La ejecución de cobertura confirma que apiService.js
alcanza el 100% de sentencias, ramas, funciones y líneas.

Estado de RC02: RESUELTO.

#### Comparación de resultados

| Indicador | Primera revisión | Revalidación |
|---|---:|---:|
| Tests ejecutados | 150 | 167 |
| Tests aprobados | 113 | 167 |
| Tests fallidos | 37 | 0 |
| Porcentaje de aprobación | 75,33% | 100% |
| Cobertura de apiService.js | No incluida | 100% |
| Request Changes resueltos | 0 de 2 | 2 de 2 |

#### Evidencias de ejecución

| Comando | Resultado | Seed | Tiempo |
|---|---|---|---|
| npm.cmd test | 167 specs, 0 failures | 93819 | 1,096 segundos |
| npm.cmd run cobertura | 167 specs, 0 failures | 03147 | 1,561 segundos |

Las dos ejecuciones finalizaron correctamente utilizando
diferentes semillas de aleatorización.

#### Informe actualizado de cobertura

| Archivo | Sentencias | Ramas | Funciones | Líneas |
|---|---:|---:|---:|---:|
| script.js | 95,45% | 88,67% | 100% | 95,45% |
| apiService.js | 100% | 100% | 100% | 100% |
| Carrito.js | 100% | 100% | 100% | 100% |
| Catalogo.js | 100% | 100% | 100% | 100% |
| ItemCarrito.js | 100% | 100% | 100% | 100% |
| Producto.js | 100% | 100% | 100% | 100% |
| PersistenciaService.js | 100% | 100% | 100% | 100% |
| storage.js | 100% | 100% | 100% | 100% |
| General | 98,21% | 96,82% | 100% | 98,21% |

#### Observaciones adicionales para QA

El controlador script.js todavía presenta las siguientes
líneas sin cobertura:

- 152-162.
- 178-180.
- 194-204.
- 235-236.
- 324-325.
- 369-371.

Se recomienda ampliar las pruebas de integración con
el DOM, especialmente los estados de error del catálogo
y la conservación del carrito ante errores de Fetch.

También se recomienda verificar el comportamiento de
MutationObserver si la carga termina antes de que
comience la observación.

Estas observaciones no invalidan la resolución de
RC01 y RC02, pero deberán considerarse durante
el testing avanzado.

El 100% de cobertura de apiService.js no garantiza
por sí solo la ausencia de todos los errores posibles.

#### Estado de los Request Changes

| RC | Archivo original | Línea original | Prioridad | Estado |
|---|---|---:|---|---|
| RC01 | js/script.js | 110 | Alta | Resuelto |
| RC02 | js/api/apiService.js | 58 | Media | Resuelto |

#### Justificación del LGTM y Approve

La aprobación técnica se fundamenta en:

- Resolución de las dos observaciones solicitadas.
- Conservación de las pruebas existentes.
- Adaptación de los tests a la carga asíncrona.
- Incorporación de 17 nuevos casos de prueba.
- Eliminación de los 37 fallos detectados inicialmente.
- Cobertura del 100% para apiService.js.
- Cobertura general de líneas del 98,21%.
- Coincidencia entre el commit probado localmente
  y el último commit mostrado en GitHub.
- Ausencia de conflictos con la rama de destino
  según la evidencia de GitHub.

Se publicó una revisión con Approve y LGTM en el PR #137.

La aprobación técnica no implica realizar el merge
inmediatamente.

#### Coordinación de la integración

Antes del merge se deberá confirmar que el Tester QA
haya realizado la auditoría Lighthouse baseline
sobre la versión anterior a Fetch y AOS.

Orden previsto:

1. Confirmar Lighthouse baseline.
2. Verificar los checks de GitHub, si están configurados.
3. Integrar el PR #137 hacia develop.
4. Realizar Lighthouse post-fetch.
5. Actualizar la rama del PR #136 de AOS.
6. Resolver los conflictos de integración identificados.
7. Revalidar las correcciones de AOS.
8. Integrar la librería hacia develop.
9. Realizar Lighthouse post-library.

#### Resultado de la revalidación

- Revisión asistida por IA: realizada.
- Inspección del diff actualizado: realizada.
- Validación mediante Jasmine: realizada.
- Informe de cobertura: verificado.
- Request Changes resueltos: 2 de 2.
- LGTM del Coordinador: publicado.
- Approve del Coordinador: publicado.
- Conflictos con la rama de destino: ninguno informado.
- Lighthouse baseline: pendiente de confirmar.
- Merge hacia develop: pendiente.

#### Conclusión

La revalidación demuestra una mejora concreta en
la calidad del proyecto mediante el proceso de
Code Review asistido por IA.

Se corrigieron las regresiones de testing y se
incorporó el servicio API a la cobertura automatizada.

Los resultados justifican la aprobación técnica
del PR #137.

El merge continúa sujeto a la confirmación del
Lighthouse baseline y al orden de integración
establecido por el Coordinador.

La revisión se realizó sobre el diff, las capturas
y los resultados de terminal proporcionados a ChatGPT.

No se realizaron nuevas ejecuciones desde ChatGPT
ni se verificó directamente el funcionamiento en
un navegador real durante esta revalidación.

#### Seguimiento

- [x] Revisar los commits de resolución.
- [x] Inspeccionar las modificaciones de testing.
- [x] Verificar la resolución de RC01.
- [x] Verificar la resolución de RC02.
- [x] Ejecutar Jasmine.
- [x] Verificar la cobertura actualizada.
- [x] Confirmar el commit final revisado.
- [x] Publicar LGTM.
- [x] Publicar Approve.
- [ ] Verificar los checks de GitHub, si corresponde.
- [ ] Confirmar Lighthouse baseline.
- [ ] Resolver los hilos de comentarios corregidos.
- [ ] Realizar merge hacia develop.
- [ ] Coordinar Lighthouse post-fetch.

#### Aclaración sobre el registro de revisiones

Esta revisión corresponde a una revalidación del PR #137
y se registra como una tercera instancia de Code Review.

No se contabiliza como un tercer PR distinto.

Se mantiene un registro separado de las revisiones
realizadas y de los PR distintos revisados para
cumplir con el mínimo establecido en la rúbrica.

---
### Code Review N.º 4 - Revalidación del PR #136

#### Información general

- Responsable del desarrollo: Lucas Ivan Fischer.
- Usuario de GitHub: @LucasFUces.
- Rol: Desarrollador JS Librerías Externas.
- PR: [#136](https://github.com/dantebiondi666-prog/tienda-online/pull/136).
- Issue: [#134](https://github.com/dantebiondi666-prog/tienda-online/issues/134).
- Rama: feature/dev-libreria-externa-aos.
- Destino: develop.
- Herramienta de IA utilizada: ChatGPT.
- Commit inicial revisado: 6dba04b.
- Commit final revisado: c9ebd75.
- Resultado: aceptación técnica parcial.
- LGTM y Approve: pendientes.

#### Objetivo de la revalidación

Verificar las correcciones correspondientes a RC01 y RC02
solicitadas durante la segunda Code Review.

Comprobar la recuperación del contenido ante fallos de AOS,
la conservación de las pruebas existentes y el estado
de los conflictos de integración con Fetch.

#### Contexto proporcionado a la IA

- Consigna y rúbrica del Segundo Parcial.
- Resultados de la segunda Code Review.
- Diff entre los commits 6dba04b y c9ebd75.
- js/utils/animaciones.js.
- Historial de commits.
- Método restaurarContenido().
- Resultados de Jasmine.
- Prueba aislada mediante Node.js y JSDOM.
- Nueva simulación mediante git merge-tree.
- Estado de los Request Changes publicados en GitHub.

#### Prompt exacto utilizado para la validación final

La revalidación inicial se realizó de forma iterativa
mediante resultados de terminal y revisión del diff.

Posteriormente se utilizó el siguiente prompt para
consolidar y documentar los resultados:

```text
Realizá una revalidación técnica del PR #136, correspondiente al Desarrollador JS Librerías Externas, después de las correcciones solicitadas por el Coordinador/DevOps.

Utilizá como contexto el diff entre los commits 6dba04b y c9ebd75, las modificaciones de js/utils/animaciones.js, la incorporación del método restaurarContenido(), los resultados de Jasmine, la prueba aislada mediante Node.js y JSDOM y la nueva simulación de integración mediante git merge-tree.

Verificá la recuperación ante excepciones de AOS, la eliminación de atributos y clases de animación, la desactivación del wrapper y la ausencia de regresiones en las pruebas existentes.

Compará los resultados anteriores y posteriores a la corrección.

Justificá la aceptación técnica de RC01 y la decisión de mantener abierto RC02 debido a los conflictos de integración con Fetch.

Detallá las evidencias, las limitaciones de las pruebas realizadas y los requisitos pendientes para otorgar el LGTM y Approve definitivo del PR #136.
```

#### Commits de resolución identificados

| Commit | Descripción |
|---|---|
| 31c3196 | Restaurar visibilidad del contenido ante fallos de AOS (RC01) |
| c9ebd75 | Documentar restaurarContenido y ajuste RC01 en SPEC y documentación |

#### Archivos modificados

| Archivo | Modificación |
|---|---|
| js/utils/animaciones.js | Recuperación ante excepciones de AOS |
| docs/06-librerias/libreria-doc.md | Actualización de la documentación |
| spec-dev-libreria-externa.md | Registro de la corrección de RC01 |

El resumen de cambios registra tres archivos modificados,
65 inserciones y siete eliminaciones.

La inspección detallada se concentró en animaciones.js.
Los cambios de documentación no se inspeccionaron
íntegramente durante esta revalidación.

#### Validación manual

Se reutilizó el worktree independiente creado durante
la segunda revisión del PR #136.

Comandos utilizados:

```powershell
git fetch origin
cd C:\Users\juanm\tienda-online-review-136
git switch --detach origin/feature/dev-libreria-externa-aos
git --no-pager log -5 --oneline
git --no-pager reflog -4 --oneline
git --no-pager diff --stat 'HEAD@{1}' HEAD
git --no-pager diff 6dba04b HEAD -- js/utils/animaciones.js
git --no-pager show HEAD:js/utils/animaciones.js
npm.cmd test
```

#### Revalidación de RC01 - Recuperación ante fallos de AOS

Durante la segunda Code Review se detectó que el wrapper
capturaba las excepciones de AOS, pero conservaba los
atributos de animación aplicados a los elementos del DOM.

Esto podía ocasionar que determinados elementos
permanecieran ocultos debido a los estilos CSS de AOS.

El desarrollador incorporó el siguiente método:

```javascript
restaurarContenido() {
  estaIniciada = false;
  try {
    const elementos =
      globalThis.document?.querySelectorAll("[data-aos]") ?? [];

    for (const elemento of elementos) {
      elemento.removeAttribute("data-aos");
      elemento.removeAttribute("data-aos-delay");
      elemento.classList.remove("aos-init", "aos-animate");
    }
    return true;
  } catch {
    return false;
  }
},
```

La implementación permite:

- Desactivar el estado de inicialización del wrapper.
- Identificar los elementos configurados para utilizar AOS.
- Eliminar los atributos data-aos y data-aos-delay.
- Eliminar las clases aos-init y aos-animate.
- Capturar posibles excepciones durante la recuperación.
- Intentar conservar la disponibilidad del contenido.

También se modificaron los bloques catch de los
métodos iniciar() y refrescar():

```javascript
} catch {
  this.restaurarContenido();
  return false;
}
```

De esta manera, ante excepciones durante la inicialización
o el refresco de AOS, el wrapper intenta restaurar
el contenido y desactivar las animaciones.

La recuperación durante iniciar() se verificó mediante
inspección del código.

La recuperación durante refrescar() se comprobó
mediante una prueba aislada.

#### Prueba aislada mediante Node.js y JSDOM

Se reprodujo el escenario de fallo identificado
durante la segunda Code Review.

Código utilizado:

```javascript
import Animaciones from "./js/utils/animaciones.js";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<article>Producto de prueba</article>");

globalThis.window = dom.window;
globalThis.document = dom.window.document;

const elemento = document.querySelector("article");

globalThis.AOS = {
  init() {},
  refreshHard() {
    throw new Error("Fallo simulado de AOS");
  }
};

console.log("Inicializacion:", Animaciones.iniciar());
console.log("Animacion:", Animaciones.animar(elemento));
console.log("Refresco:", Animaciones.refrescar());

console.log(
  "Conserva data-aos:",
  elemento.hasAttribute("data-aos")
);

console.log(
  "Conserva data-aos-delay:",
  elemento.hasAttribute("data-aos-delay")
);

dom.window.close();
```

Resultado obtenido:

```text
Inicializacion: true
Animacion: true
Refresco: false
Conserva data-aos: false
Conserva data-aos-delay: false
```

#### Comparación antes y después de la corrección

| Indicador | Primera revisión | Revalidación |
|---|---|---|
| Inicialización | true | true |
| Animación | true | true |
| Refresco ante excepción | false | false |
| Conserva data-aos | true | false |
| Conserva data-aos-delay | true | false |

La prueba demuestra que los atributos de animación
se eliminan correctamente ante la excepción simulada.

En la segunda ejecución se incorporaron window y document
al entorno global para permitir que el nuevo método
consultara los elementos del DOM.

La eliminación de las clases aos-init y aos-animate
se verificó mediante inspección del código, pero no
mediante una comprobación específica en esta prueba.

JSDOM no reproduce completamente el renderizado visual
de un navegador real.

Estado de RC01: ACEPTADO TÉCNICAMENTE para el escenario
reproducido, con validación visual complementaria pendiente.

#### Validación mediante Jasmine

Se ejecutó nuevamente la suite automatizada.

```powershell
npm.cmd test
```

Resultado:

```text
150 specs, 0 failures
Randomized with seed 30697
```

Tiempo de ejecución: 1,1 segundos.

#### Comparación de resultados de testing

| Indicador | Primera revisión | Revalidación |
|---|---:|---:|
| Tests ejecutados | 150 | 150 |
| Tests aprobados | 150 | 150 |
| Tests fallidos | 0 | 0 |
| Porcentaje de aprobación | 100% | 100% |
| Seed | 05932 | 30697 |
| Tiempo de ejecución | 1,31 s | 1,1 s |

No se detectaron regresiones en las pruebas existentes.

La diferencia en los tiempos de ejecución no permite
concluir que exista una mejora de rendimiento del sitio.

Todavía no se dispone de una suite específica
library.spec.js en la versión revisada.

#### Accesibilidad y degradación segura

| Requisito | Resultado |
|---|---|
| Integración mediante CDN | Implementada previamente |
| Encapsulamiento en wrapper | Correcto |
| Preferencia de movimiento reducido | Se conserva |
| Captura de excepciones | Correcta |
| Recuperación durante iniciar() | Implementada |
| Recuperación durante refrescar() | Verificada |
| Eliminación de atributos | Verificada |
| Eliminación de clases | Verificada mediante inspección |
| Desactivación del wrapper | Implementada |
| Visibilidad efectiva en navegador | Pendiente |
| Testing específico de AOS | Pendiente |

La corrección mejora la degradación segura de la
aplicación al intentar conservar el contenido principal
cuando falla una funcionalidad visual secundaria.

#### Revalidación de RC02 - Integración con Fetch

Durante la segunda Code Review se identificaron
conflictos potenciales de integración entre las ramas
de Fetch y AOS.

Los archivos afectados en aquella simulación fueron:

- js/script.js.
- changelog.md.

Se repitió la simulación con las ramas actualizadas:

```powershell
git fetch origin
git merge-tree --write-tree origin/feature/dev-async-fetch-api HEAD
echo $LASTEXITCODE
```

Código de salida informado:

```text
1
```

El código de salida 1 indica que continúan existiendo
conflictos de integración.

| Indicador | Primera revisión | Revalidación |
|---|---|---|
| Simulación ejecutada | Sí | Sí |
| Código de salida | 1 | 1 |
| Conflictos detectados | Sí | Sí |
| Integración definitiva | Pendiente | Pendiente |

No se dispone de la salida completa de la segunda
simulación, por lo que no se puede asegurar que los
conflictos actuales correspondan exactamente a los
mismos archivos de la primera revisión.

Estado de RC02: PENDIENTE.

#### Criterios de aceptación de RC02

Para considerar resuelta esta observación será necesario:

1. Confirmar Lighthouse baseline.
2. Integrar el PR #137 hacia develop.
3. Realizar Lighthouse post-fetch.
4. Actualizar la rama de AOS desde develop.
5. Resolver los conflictos de integración.
6. Conservar la carga asíncrona mediante Fetch.
7. Conservar las animaciones de AOS.
8. Mantener el tratamiento de errores de Fetch.
9. Conservar el método restaurarContenido().
10. Preservar las funcionalidades de DOM, POO y storage.
11. Conservar las contribuciones de ambos desarrolladores
    en el changelog.
12. Ejecutar nuevamente Jasmine.
13. Verificar la ausencia de conflictos con develop.
14. Comprobar el funcionamiento conjunto de ambas
    funcionalidades en un navegador.

#### Estado de los Request Changes

| RC | Archivo original | Línea original | Prioridad | Estado |
|---|---|---:|---|---|
| RC01 | js/utils/animaciones.js | 107 | Alta | Aceptado técnicamente |
| RC02 | js/script.js | 17 | Alta | Pendiente |

Se publicó una devolución técnica en el PR #136
informando la aceptación parcial de las correcciones.

También se respondió al comentario inline de RC02
indicando que continúan existiendo conflictos de integración.

El LGTM y Approve definitivos permanecen pendientes.

#### Limitaciones de la revalidación

- No se realizó una nueva prueba visual en navegador real.
- No se simuló una excepción específica durante AOS.init().
- No se comprobó experimentalmente la eliminación
  de las clases aos-init y aos-animate.
- No se verificaron llamadas posteriores a animar()
  y refrescar() después de desactivar el wrapper.
- No se dispone todavía de testing específico de AOS.
- No se dispone de la salida completa de la segunda
  simulación de integración.
- Las auditorías Lighthouse continúan pendientes
  de confirmación.

Estas limitaciones deberán considerarse durante
las próximas etapas de testing e integración.

#### Observaciones adicionales para QA

Se recomienda incorporar pruebas específicas para:

- Inicialización exitosa de AOS.
- Ausencia de la librería externa.
- Preferencia de movimiento reducido.
- Excepciones durante AOS.init().
- Excepciones durante AOS.refreshHard().
- Eliminación de atributos y clases de animación.
- Comportamiento del wrapper después de una excepción.
- Restauración efectiva de la visibilidad del contenido.
- Funcionamiento conjunto de Fetch y AOS.

#### Resultado de la revalidación

- Revisión asistida por IA: realizada.
- Inspección del diff actualizado: realizada.
- Validación mediante Jasmine: realizada.
- Prueba aislada mediante Node.js y JSDOM: satisfactoria.
- Simulación mediante git merge-tree: conflictos detectados.
- Request Changes aceptados: 1 de 2.
- RC01: aceptado técnicamente.
- RC02: pendiente.
- LGTM definitivo: pendiente.
- Approve: pendiente.
- Merge hacia develop: pendiente.

#### Conclusión

La cuarta Code Review permitió verificar la corrección
de RC01 mediante inspección del código y una prueba
aislada que reproduce el escenario de fallo original.

La incorporación del método restaurarContenido()
mejora la tolerancia a fallos del wrapper de AOS.

Las 150 pruebas existentes continúan ejecutándose
sin fallos.

Sin embargo, la simulación mediante git merge-tree
indica que todavía existen conflictos entre las
ramas de Fetch y AOS.

Por este motivo, se considera justificada la aceptación
técnica de RC01 y la decisión de mantener abierto RC02.

La aprobación definitiva del PR #136 queda condicionada
a la resolución y validación de la integración.

La revisión se realizó utilizando el diff, las capturas
y los resultados de terminal proporcionados a ChatGPT.

No se realizaron nuevas ejecuciones desde ChatGPT.

#### Seguimiento

- [x] Revisar los nuevos commits.
- [x] Inspeccionar restaurarContenido().
- [x] Ejecutar Jasmine.
- [x] Repetir la prueba aislada mediante Node.js y JSDOM.
- [x] Verificar la eliminación de atributos de AOS.
- [x] Aceptar técnicamente RC01.
- [x] Repetir la simulación de integración.
- [x] Publicar devolución técnica en el PR.
- [x] Mantener abierto RC02.
- [ ] Confirmar Lighthouse baseline.
- [ ] Integrar el PR #137 hacia develop.
- [ ] Confirmar Lighthouse post-fetch.
- [ ] Actualizar la rama de AOS desde develop.
- [ ] Resolver los conflictos de integración.
- [ ] Verificar Fetch y AOS conjuntamente.
- [ ] Comprobar la recuperación visual en navegador.
- [ ] Ejecutar nuevamente Jasmine.
- [ ] Validar definitivamente RC02.
- [ ] Publicar LGTM y Approve.
- [ ] Integrar el PR #136 hacia develop.
- [ ] Confirmar Lighthouse post-library.

#### Aclaración sobre el registro de revisiones

Esta revisión corresponde a una revalidación del PR #136
y se registra como la cuarta instancia de Code Review
asistida por inteligencia artificial.

No representa un cuarto PR distinto.

Hasta el momento se revisaron dos PR diferentes
mediante cuatro instancias de revisión técnica.

Se mantiene un registro separado para cumplir con
el mínimo de PR distintos establecido en la rúbrica.

---
### Code Review N.º 5 - Revalidación definitiva del PR #136

#### Información general

- Fecha: 27/11/2026.
- Responsable: Lucas Ivan Fischer (@LucasFUces).
- Rol: Desarrollador JS Librerías Externas.
- PR: [#136](https://github.com/dantebiondi666-prog/tienda-online/pull/136).
- Issue: [#134](https://github.com/dantebiondi666-prog/tienda-online/issues/134).
- Rama: feature/dev-libreria-externa-aos.
- Destino: develop.
- Herramienta de IA: ChatGPT.
- Commit de resolución: bcb1e8b.
- Commit final revisado: 850c820.
- Resultado: LGTM y Approve.
- Commit de integración: 3d41731.

#### Objetivo

Verificar la resolución definitiva de RC02,
correspondiente a los conflictos de integración
entre Fetch y la librería externa AOS.

#### Contexto proporcionado a la IA

- Resultados de las Code Reviews N.º 2 y N.º 4.
- Historial de commits actualizado.
- Diff de js/script.js y changelog.md.
- Resultados de Jasmine.
- Informe de cobertura mediante c8.
- Resultado de git merge-base.
- Test Case 12 de Lighthouse post-fetch.
- Captura de la integración del PR #136.

#### Solicitudes realizadas a la IA

La revisión se realizó de forma iterativa mediante
ChatGPT, proporcionando los resultados de terminal,
el diff actualizado y las evidencias de testing.

Se solicitó verificar la conservación de Fetch,
la incorporación correcta de AOS, la resolución
de conflictos y la ausencia de regresiones.

No se utilizó un único prompt formal independiente
durante esta instancia de revisión.

#### Commits revisados

| Commit | Descripción |
|---|---|
| bcb1e8b | Actualizar rama AOS desde develop y resolver conflictos RC02 |
| 850c820 | Completar sección de coordinación y checklist del SPEC |

#### Validación manual

Se reutilizó el worktree independiente del PR #136.

```powershell
cd C:\Users\juanm\tienda-online-review-136
git switch --detach origin/feature/dev-libreria-externa-aos
git --no-pager log -1 --oneline
git merge-base --is-ancestor origin/develop HEAD
echo $LASTEXITCODE
git --no-pager diff origin/develop HEAD -- js/script.js changelog.md
npm.cmd test
npm.cmd run cobertura
```

El comando git merge-base finalizó con código de
salida 0, confirmando que develop se encuentra
incorporado en la rama de AOS.

#### Resolución de RC02

Se inspeccionaron las modificaciones de js/script.js
y changelog.md.

Aspectos verificados:

- Conservación de la importación de ApiService.
- Conservación de la inicialización asíncrona.
- Incorporación del módulo Animaciones.
- Inicialización del wrapper de AOS.
- Animaciones fade-up en el catálogo.
- Animaciones fade-right en el carrito.
- Animaciones fade-right en el resumen de compra.
- Actualización de AOS después de renderizar elementos.
- Conservación de la contribución de Dante en changelog.md.
- Incorporación de la contribución de Lucas en changelog.md.

El diff no muestra eliminaciones de la lógica
asíncrona incorporada por el PR #137.

Estado de RC02: RESUELTO Y VERIFICADO.

#### Resultados de Jasmine

| Comando | Resultado | Seed | Tiempo |
|---|---|---|---|
| npm.cmd test | 167 specs, 0 failures | 69736 | 1,012 s |
| npm.cmd run cobertura | 167 specs, 0 failures | 54751 | 1,563 s |

Las 167 pruebas existentes se ejecutaron correctamente.

No se detectaron regresiones en la suite automatizada
después de incorporar AOS a la versión con Fetch.

#### Comparación de cobertura

| Indicador | Fetch | Fetch + AOS |
|---|---:|---:|
| Sentencias | 98,21% | 95,41% |
| Ramas | 96,82% | 94,16% |
| Funciones | 100% | 97,91% |
| Líneas | 98,21% | 95,41% |
| Tests ejecutados | 167 | 167 |
| Tests fallidos | 0 | 0 |

#### Cobertura por archivo

| Archivo | Sentencias | Ramas | Funciones | Líneas |
|---|---:|---:|---:|---:|
| script.js | 95,49% | 88,67% | 100% | 95,49% |
| apiService.js | 100% | 100% | 100% | 100% |
| Carrito.js | 100% | 100% | 100% | 100% |
| Catalogo.js | 100% | 100% | 100% | 100% |
| ItemCarrito.js | 100% | 100% | 100% | 100% |
| Producto.js | 100% | 100% | 100% | 100% |
| PersistenciaService.js | 100% | 100% | 100% | 100% |
| storage.js | 100% | 100% | 100% | 100% |
| animaciones.js | 59,28% | 31,25% | 66,66% | 59,28% |
| General | 95,41% | 94,16% | 97,91% | 95,41% |

La disminución de la cobertura coincide con la
incorporación del nuevo módulo animaciones.js,
que todavía no cuenta con su suite específica
en la rama evaluada.

El Tester QA deberá incorporar library.spec.js
y verificar nuevamente la cobertura.

#### Estado definitivo de los Request Changes

| RC | Descripción | Estado |
|---|---|---|
| RC01 | Recuperación ante fallos de AOS | Aceptado técnicamente |
| RC02 | Integración con Fetch | Resuelto y verificado |

#### Justificación del LGTM y Approve

La aprobación técnica se fundamenta en:

- Resolución de las dos observaciones originales.
- Incorporación de develop en la rama de AOS.
- Conservación de la carga asíncrona del catálogo.
- Integración del wrapper de animaciones.
- Conservación de las contribuciones en el changelog.
- Ejecución de 167 pruebas sin fallos.
- Lighthouse post-fetch documentado sin regresiones.

Se publicó el LGTM y Approve en el PR #136.

Posteriormente se realizó el merge hacia develop,
obteniendo el commit de integración 3d41731.

#### Limitaciones y seguimiento

No se verificó directamente el renderizado visual
en un navegador real durante esta revisión.

Queda pendiente la incorporación del testing específico
de AOS, la actualización del informe de cobertura y
la auditoría Lighthouse post-library.

Estas validaciones serán coordinadas con el Tester QA.

#### Conclusión

La revalidación confirma que la resolución de los
conflictos conserva las funcionalidades de Fetch
y AOS sin regresiones detectadas en Jasmine.

Se considera justificada la aprobación técnica
y la integración del PR #136 hacia develop.

---
### Registro de coordinación e integración del Segundo Parcial

#### Lighthouse baseline - Test Case 11

- Fecha: 26/11/2026.
- Responsable: Sebastian Viel (@Zikoloogo).
- Rama auditada: develop.
- Commit de referencia: 95706d5.
- Commit del SPEC inicial de QA: d8aff21.
- Commit de documentación del baseline: 56c5177.
- Navegador: Microsoft Edge, ventana InPrivate.
- Configuración: Navigation, Mobile.

El informe no identifica expresamente el hash auditado.
95706d5 corresponde a la referencia de develop observada
antes de integrar las funcionalidades del Segundo Parcial.

#### Integración de Fetch - PR #137

- Responsable: Dante Biondi.
- Commit aprobado: 4aa3e4a.
- Request Changes resueltos: 2 de 2.
- Testing: 167 specs, 0 failures.
- Cobertura general de líneas: 98,21%.
- Commit de integración: d1fd091.
- Estado: integrado en develop.

Se autorizó el merge después de verificar que el
Lighthouse baseline se encontraba documentado.

#### Lighthouse post-fetch - Test Case 12

- Fecha: 27/11/2026.
- Responsable: Sebastian Viel.
- Rama: feature/tester-qa-js-testing-suite.
- Commit de documentación: e1c135c.
- Configuración: Navigation, Mobile, Edge InPrivate.
- Resultado: sin regresiones respecto del baseline.

La rama auditada incluye Fetch y todavía no incorpora AOS.

El informe no indica expresamente el hash exacto auditado.

#### Integración de AOS - PR #136

- Responsable: Lucas Ivan Fischer.
- Commit aprobado: 850c820.
- Request Changes técnicamente aceptados: 2 de 2.
- Testing: 167 specs, 0 failures.
- Cobertura general de líneas: 95,41%.
- Commit de integración: 3d41731.
- Estado: integrado en develop.

Se autorizó el merge después de comprobar la resolución
de RC02 y la documentación de Lighthouse post-fetch.

#### Comparación de auditorías Lighthouse

| Categoría | Baseline TC11 | Post-fetch TC12 | Post-library TC13 | Umbral |
|---|---:|---:|---|---:|
| Performance | 93 | 96 | Pendiente | 95 |
| Accessibility | 100 | 100 | Pendiente | 95 |
| Best Practices | 96 | 96 | Pendiente | 95 |
| SEO | 91 | 91 | Pendiente | 95 |

La mejora observada en Performance no puede atribuirse
exclusivamente a Fetch debido a la variabilidad
entre ejecuciones de Lighthouse.

#### Issues de calidad identificadas

| Issue | Descripción | Estado |
|---|---|---|
| #139 | Recursos que bloquean el renderizado | En progreso |
| #140 | Ausencia de meta description | En progreso |
| #141 | Testing avanzado y auditorías Lighthouse | En progreso |

Las issues #139 y #140 fueron destinadas al
Coordinador/DevOps según el informe de QA.

Se deberán coordinar las correcciones y verificar
posteriormente sus resultados mediante Lighthouse.

#### Seguimiento del Kanban

Se identificaron las issues correspondientes
a los cuatro roles del Segundo Parcial.

- #133: Coordinador/DevOps.
- #134: Desarrollador JS Librerías Externas.
- #135: Desarrollador JS Asíncrono.
- #141: Tester QA/JS.
- #139: Correcciones de Performance.
- #140: Correcciones de SEO.

Se detectaron dificultades para modificar directamente
los estados del tablero GitHub Projects.

Queda pendiente confirmar los permisos de escritura
y actualizar las tarjetas correspondientes a las
funcionalidades ya integradas.

#### Actualización de la rama del Coordinador

- Fecha: 27/11/2026.
- Rama: feature/coord-devops-segundo-parcial.
- Commits propios antes de la integración: 7.
- Commits pendientes desde develop: 17.
- Conflicto identificado: changelog.md.
- Resolución: conservación de las contribuciones
  del Coordinador y ambos desarrolladores.
- Commit de integración: 6b53159.
- Push: exitoso.
- Estado final: 8 commits por delante y 0 por detrás
  de origin/develop al momento de la verificación.

Se incorporaron correctamente las funcionalidades
de Fetch y AOS sin perder la documentación previa
del Coordinador/DevOps.

Durante la verificación mediante git diff --cached --check
se detectaron advertencias de espacios finales en el
SPEC del desarrollador JS Asíncrono.

Estas advertencias no impidieron el commit ni el push.
No se modificó la documentación del desarrollador.

#### Correcciones de Lighthouse - PR #143

- Issues relacionadas: #139 y #140.
- Rama: fix/lighthouse-performance-seo.
- PR original: #142, cerrado sin merge.
- PR definitivo: #143.
- Reviewer: Dante Biondi.
- Resultado: aprobado.
- Destino: feature/coord-devops-segundo-parcial.
- Commit de integración: b26800d.

Por acuerdo con el equipo, las correcciones fueron
integradas primero en la rama del Coordinador/DevOps.

| Categoría | Resultado local | Umbral |
|---|---:|---:|
| Performance | 97 | 95 |
| Accessibility | 100 | 95 |
| Best Practices | 100 | 95 |
| SEO | 100 | 95 |

Testing: 167 specs, 0 failures.
Cobertura general de líneas: 95,41%.

Evidencia:
[Auditoría Lighthouse post-correcciones](../../04-testing/lighthouse-post-correcciones.md).

La integración definitiva hacia develop se realizará
mediante el PR #138.

Queda pendiente la validación final del Tester QA.

#### Estado de integración

- [x] Lighthouse baseline.
- [x] Revisión y aprobación de Fetch.
- [x] Merge del PR #137.
- [x] Lighthouse post-fetch.
- [x] Resolución de conflictos entre Fetch y AOS.
- [x] Revisión y aprobación de AOS.
- [x] Merge del PR #136.
- [x] Actualización de la rama del Coordinador.
- [x] Resolución del conflicto en changelog.md.
- [ ] Lighthouse post-library.
- [ ] Revisión e integración del testing avanzado.
- [ ] Corrección de Performance y SEO.
- [ ] Validación final del proyecto.
- [ ] Integración del PR del Coordinador.
- [ ] Preparación de la rama release.
- [ ] Configuración de GitHub Pages.
- [ ] Entrega en Slack y campus.

#### Registro de Code Reviews

Hasta el momento se realizaron cinco instancias
de Code Review asistidas por inteligencia artificial
sobre dos PR distintos.

Las revalidaciones se registran como instancias
adicionales de revisión y no como PR independientes.

Queda pendiente alcanzar el mínimo de cuatro PR
distintos revisados establecido en la rúbrica.

---
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