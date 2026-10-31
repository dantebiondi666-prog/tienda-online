# Especificación técnica — Coordinador / DevOps

**Proyecto:** Remer Us  
**Materia:** Programación Web I  
**Entrega:** Actividad Obligatoria N.º 3  
**Rol:** Coordinador / DevOps  
**Responsable:** Dante Biondi  
**Ramas de trabajo:** `feature/coord-devops-tercera-entrega` / `feature/coord-devops-tercera-entrega-2`
**Rama base:** `develop`

---

## Objetivo

Coordinar el desarrollo e integración de la Actividad Obligatoria N.º 3 sobre la base consolidada del Primer Parcial, manteniendo el branch model, la trazabilidad de Issues y Pull Requests, la documentación del proyecto y el proceso de revisión requerido para la entrega.

El Primer Parcial fue aprobado y mergeado a `master`. Posteriormente se realizó el backport hacia `develop` mediante la PR #83, dejando esta rama como base para comenzar la tercera actividad.

---

## 1. ¿Qué se va a hacer?

Como Coordinador / DevOps se realizarán las siguientes tareas:

- Coordinar el trabajo de las ramas `feature/` correspondientes a la Actividad Obligatoria N.º 3.
- Verificar que cada integrante trabaje sobre una rama propia creada desde `develop`.
- Administrar las Issues del equipo mediante un tablero Kanban en GitHub Projects.
- Realizar como mínimo cuatro instancias de code review asistidas con GitHub Copilot Agent Mode sobre las Pull Requests de los demás integrantes.
- Registrar y documentar los `CHANGES_REQUESTED` que se detecten durante las revisiones.
- Verificar que las correcciones solicitadas sean resueltas antes de aprobar el merge de cada PR.
- Coordinar la integración de las ramas feature hacia `develop`.
- Mantener actualizado `changelog.md` con las contribuciones, Issues y Pull Requests correspondientes.
- Actualizar `plan.md` con el alcance específico de la Actividad Obligatoria N.º 3 y los criterios de aceptación correspondientes.
- Actualizar `README.md` con la información de la tercera entrega y los enlaces a la documentación de diagramas y testing.
- Verificar la navegación entre los índices de diagramas y testing.
- Crear la rama `release/tercera-entrega` desde `develop` una vez integradas las contribuciones del equipo.
- Configurar y mantener GitHub Pages utilizando `release/tercera-entrega`.
- Limpiar las ramas innecesarias antes de la entrega final.
- Publicar la Pull Request final de la release hacia `master`.
- Coordinar la publicación de los enlaces correspondientes en Slack y en el campus virtual.
- Luego de la aprobación y merge de la release a `master`, crear el tag y GitHub Release `v1.1-tercera-entrega`.

---

## 2. ¿Por qué se hace?

La Actividad Obligatoria N.º 3 incorpora lógica de negocio mediante JavaScript, diagramas de actividades y testing automatizado con Jasmine.

Estas tareas dependen entre sí y deben integrarse sobre una base común sin perder trazabilidad.

El rol de Coordinador / DevOps permite:

- asegurar que cada tarea se desarrolle en la rama correspondiente;
- controlar que las implementaciones respeten la consigna y la documentación del proyecto;
- detectar inconsistencias antes de integrar los cambios a `develop`;
- mantener un registro verificable de Issues, PRs, revisiones y versiones;
- evitar que código o documentación incompleta llegue a la rama de release;
- preparar una versión final estable y publicable mediante GitHub Pages.

### Relación con `plan.md`

El `plan.md` actual todavía documenta el alcance hasta el Primer Parcial. Como parte de esta actividad deberá ampliarse posteriormente para incorporar el alcance específico de la Actividad Obligatoria N.º 3.

Hasta que esa actualización se realice, esta tarea se relaciona principalmente con los siguientes requerimientos existentes:

- **RNF-04 — Mantenibilidad:** mantener el código y la documentación organizados y consistentes.
- **RNF-05 — Trazabilidad:** cada tarea debe estar asociada a su especificación, Pull Request y registro en `changelog.md`.
- **RNF-06 — Colaboración:** los cambios deben desarrollarse en ramas propias, integrarse mediante Pull Requests y ser revisados antes del merge.

También se relaciona con:

- **CA-08:** trazabilidad entre Pull Requests, especificaciones y `plan.md`.
- **CA-09:** registro de las contribuciones en `changelog.md`.
- **CA-10:** posibilidad de publicar la versión entregable mediante GitHub Pages.

Los requerimientos específicos de JavaScript, diagramas y testing de esta entrega se incorporarán posteriormente a `plan.md`.

---

# BEFORE — Plan previo a la coordinación

## 3. Plan de coordinación

La integración prevista seguirá las dependencias entre los roles.

### 3.1 Arquitecto de Diagramas de Actividades

Rama prevista:

`feature/arq-diagramas-actividades`

Debe definir los cuatro flujos principales del proyecto y representarlos mediante PlantUML.

Los diagramas serán utilizados posteriormente como referencia para la implementación JavaScript.

### 3.2 Desarrollador JavaScript

Rama prevista:

`feature/dev-javascript-logica-negocio`

Debe implementar en `js/script.js` los cuatro flujos definidos previamente en los diagramas.

La implementación deberá mantener separada la lógica de negocio de la interacción mediante `prompt()` y `alert()` para permitir su testing posterior.

### 3.3 Tester JavaScript / QA Engineer

Rama prevista:

`feature/tester-javascript-jasmine`

Debe implementar el testing automatizado con Jasmine sobre las funciones desarrolladas en `js/script.js`.

### 3.4 Coordinador / DevOps

Rama:

`feature/coord-devops-tercera-entrega`

Esta rama se utilizará para las tareas propias de coordinación y documentación general de la entrega.

Las Pull Requests de las ramas feature tendrán como destino `develop`.

---

## 4. Criterios para revisar una Pull Request

Antes de aprobar una PR se verificará:

- que la rama corresponda al rol asignado;
- que la tarea posea una Issue asociada;
- que la spec correspondiente haya sido commiteada antes de comenzar la implementación principal;
- que los cambios estén dentro del alcance de la Actividad Obligatoria N.º 3;
- que los archivos requeridos por la consigna estén presentes;
- que el código y la documentación mantengan coherencia con `plan.md`;
- que el `changelog.md` registre correctamente la contribución;
- que no se agreguen modificaciones ajenas al objetivo de la rama;
- que se respeten las dependencias entre diagramas, implementación JavaScript y testing.

Para las implementaciones JavaScript también se verificará que:

- no se utilice manipulación del DOM ni eventos;
- la lógica de negocio se encuentre separada de `prompt()` y `alert()`;
- las funciones sean testeables;
- se utilicen nombres descriptivos;
- se utilice camelCase para variables y funciones;
- se utilicen parámetros y valores de retorno correctamente;
- los cuatro flujos sean coherentes con los diagramas de actividades.

Cuando una PR presente incumplimientos se realizará una revisión con estado `CHANGES_REQUESTED`.

Una vez resueltos los hallazgos se realizará una nueva revisión antes de aprobar el merge.

---

## 5. Code reviews planificados

Se realizarán como mínimo cuatro instancias de revisión asistidas con GitHub Copilot Agent Mode.

Las revisiones podrán incluir una primera revisión y posteriores revisiones de correcciones sobre una misma Pull Request cuando corresponda.

Cada revisión deberá registrar:

- número y título de la PR;
- rol responsable;
- archivos del diff utilizados como contexto;
- prompt exacto utilizado;
- requisitos evaluados;
- hallazgos detectados;
- líneas del diff afectadas;
- `CHANGES_REQUESTED` realizados;
- decisión final tomada por el revisor humano.

---

## 6. Gestión de Issues y tablero Kanban

Cada integrante deberá crear las Issues correspondientes a las tareas que realizará.

Como Coordinador / DevOps se administrarán esas Issues mediante GitHub Projects utilizando un tablero Kanban.

Como mínimo se utilizarán los siguientes estados:

- **To do:** tarea creada pero todavía no iniciada.
- **In progress:** tarea actualmente en desarrollo.
- **Done:** tarea finalizada e integrada mediante Pull Request.

El tablero deberá permitir visualizar el estado de las tareas correspondientes a:

- Coordinador / DevOps;
- Arquitecto de Diagramas;
- Desarrollador JavaScript;
- Tester JavaScript / QA Engineer.

Las Issues deberán mantenerse relacionadas con las respectivas ramas y Pull Requests para conservar la trazabilidad del trabajo.

---

## 7. Herramientas

### Git y GitHub

Se utilizarán para:

- administración de ramas;
- Issues;
- Pull Requests;
- code reviews;
- integración de cambios;
- changelog;
- tags;
- releases.

### GitHub Projects

Se utilizará para administrar mediante un tablero Kanban las Issues correspondientes a la Actividad Obligatoria N.º 3.

### GitHub Copilot Agent Mode

Se utilizará como asistencia para analizar las Pull Requests de los demás integrantes.

El agente recibirá como contexto, según corresponda:

- diff de la Pull Request;
- consigna de la actividad;
- `plan.md`;
- spec del rol revisado;
- diagramas de actividades;
- `js/script.js`;
- documentación de testing.

Las recomendaciones generadas por Copilot serán utilizadas como apoyo. La decisión de solicitar cambios, aprobar o rechazar una PR será tomada manualmente por el Coordinador / DevOps.

### GitHub Pages

Se utilizará para publicar la versión correspondiente a `release/tercera-entrega`.

---

## 8. Criterios de aceptación

### Estado inicial

- [x] Request Changes del Primer Parcial resueltos.
- [x] Primer Parcial aprobado por el docente.
- [x] `release/primer-parcial` mergeada a `master`.
- [x] Tag y GitHub Release `v1.1-primer-parcial` creados.
- [x] Backport hacia `develop` realizado mediante PR #83.
- [ ] `spec-devops.md` commiteado antes de comenzar cualquier otra tarea de coordinación de AO3.

### Coordinación

- [ ] Issues de la Actividad Obligatoria N.º 3 administradas mediante GitHub Projects.
- [ ] Todas las ramas feature parten de `develop` actualizado.
- [ ] Las Pull Requests de los demás integrantes son revisadas antes del merge.
- [ ] Se realizan al menos cuatro instancias de code review asistidas con Copilot Agent Mode.
- [ ] Los `CHANGES_REQUESTED` quedan documentados.
- [ ] Las correcciones solicitadas son verificadas antes de aprobar las PRs.
- [ ] Todas las features aprobadas se integran en `develop`.

### Documentación

- [ ] `plan.md` actualizado con el alcance de la Actividad Obligatoria N.º 3.
- [ ] `README.md` actualizado con información y enlaces de la tercera entrega.
- [ ] `changelog.md` actualizado con Issues, PRs y contribuciones.
- [ ] Índice de diagramas correctamente enlazado.
- [ ] Documentación de testing correctamente enlazada.

### Release

- [ ] Se crea `release/tercera-entrega` desde `develop`.
- [ ] GitHub Pages se publica desde `release/tercera-entrega`.
- [ ] Antes de la entrega solo permanecen `master`, `develop` y `release/tercera-entrega`.
- [ ] Se crea la PR final desde `release/tercera-entrega` hacia `master`.
- [ ] La PR se publica en Slack con el formato solicitado.
- [ ] Los enlaces correspondientes se entregan en el campus.
- [ ] Luego del LGTM y merge a `master`, se crea `v1.1-tercera-entrega`.
- [ ] Se publica la GitHub Release correspondiente.

---

## 9. Uso de IA en esta tarea

### Herramienta prevista

GitHub Copilot en modo Agente desde Visual Studio Code.

### Uso previsto

Se utilizará principalmente para asistir en los code reviews de las Pull Requests de los demás integrantes.

Para cada revisión se proporcionará al agente el contexto necesario para contrastar los cambios contra:

- la consigna;
- `plan.md`;
- la spec correspondiente;
- los archivos modificados;
- los requisitos específicos del rol.

### Validación humana

Los resultados generados por IA serán revisados manualmente.

Copilot podrá sugerir:

- cumplimiento;
- incumplimientos;
- posibles bugs;
- problemas de documentación;
- recomendaciones;
- `CHANGES_REQUESTED`.

La decisión final será tomada por el Coordinador / DevOps luego de revisar el diff y verificar que el hallazgo sea válido.

---

# AT CLOSE — Evidencia de cierre

> Esta sección se completará al finalizar las tareas de coordinación. No representa resultados ejecutados todavía.

## 10. Prompts exactos utilizados en Code Reviews

### Code Review 1

**PR:** #87 — Arquitecto de Diagramas de Actividades  
**Rol:** Arquitecto de Diagramas de Actividades  
**Archivos y contexto utilizados:**

- diff de `feature/arq-diagramas-actividades` contra `origin/develop`;
- consigna de la Actividad Obligatoria N.º 3;
- `plan.md` actualizado;
- `index.html`;
- `.github/PULL_REQUEST_TEMPLATE/feature-template.md`;
- `docs/03-specs/actividad-obligatoria-3/spec-arq-diagramas.md`;
- cuatro diagramas `.puml`;
- `docs/05-diagramas/01-diagrama-de-actividades/diagramas-doc.md`;
- `changelog.md`.

**Prompt utilizado:**

```text
Actuá como revisor técnico de la PR #87:

- Rama: `feature/arq-diagramas-actividades`
- Destino: `develop`
- Rol: Arquitecto de Diagramas de Actividades
- Issue: #86

Realizá un Code Review completo de la PR, pero **no modifiques archivos, no hagas commits, no corrijas código y no publiques ninguna review en GitHub**. Solo devolveme el informe.

Primero reconstruí el cambio real usando el diff contra `origin/develop` y el historial de commits.

Revisá especialmente:

1. **Git / trazabilidad**
   - La feature debe partir del `develop` actualizado.
   - `spec-arq-diagramas.md` debe haberse commiteado antes que cualquier `.puml`.
   - No debe haber cambios ajenos al rol.
   - `changelog.md` debe registrar correctamente PR #87 e Issue #86.

2. **PR**
   - Contrastá la descripción de la PR con `.github/PULL_REQUEST_TEMPLATE/feature-template.md`.
   - Verificá que estén completos los datos, rama, Issue, spec, requisitos de `plan.md`, descripción, archivos y checklist.
   - Si la PR no respeta la template, consideralo un hallazgo de trazabilidad/documentación.

3. **Spec**
   Revisá:
   `docs/03-specs/actividad-obligatoria-3/spec-arq-diagramas.md`

   Debe contener:
   - BEFORE con los 4 flujos, actores, decisiones, ciclos, decisión sobre swimlanes y checklist.
   - AT CLOSE con prompt exacto de Copilot, contexto usado (`plan.md`, `index.html`, mockup), fragmentos generados, ajustes manuales y decisiones finales.

4. **Diagramas**
   Contrastá los cuatro `.puml` contra:
   - `plan.md`, especialmente sección 10.3 y CA-18 a CA-23;
   - `index.html`;
   - la spec del Arquitecto;
   - el dominio real de Remer Us.

   Para cada flujo verificá:
   - `start` y `stop`;
   - actividades;
   - decisiones `if/else`;
   - ciclos `while` o `repeat`;
   - swimlanes Usuario/Sistema cuando corresponda;
   - patrón entrada → proceso → salida;
   - validaciones coherentes;
   - lógica suficientemente precisa para que luego sea contrato de implementación de `js/script.js`;
   - ausencia de DOM/eventos;
   - coherencia entre los cuatro flujos, especialmente carrito y resumen de compra.

5. **Archivos y estructura**
   Deben existir en:
   `docs/05-diagramas/01-diagrama-de-actividades/`

   Verificá:
   - 4 `.puml`;
   - sus 4 `.png`;
   - `diagramas-doc.md`;
   - nombres y rutas correctos;
   - índice, descripción, enlaces, imágenes embebidas e instrucciones de edición;
   - coherencia entre `.puml`, `.png` y documentación.

6. **Consigna/rúbrica**
   Evaluá si la PR cumple completamente los requisitos del rol Arquitecto de Diagramas de la AO3 y si deja una base clara para el Desarrollador JavaScript.

### Formato de respuesta

Sé concreto. No hagas un resumen enorme.

Entregá:

**1. Veredicto general:** CUMPLE / CUMPLE PARCIALMENTE / NO CUMPLE.

**2. Checklist breve por área:**
- Git e historial
- Template de PR
- Spec
- Flujo 1
- Flujo 2
- Flujo 3
- Flujo 4
- Estructura/documentación
- Changelog

Marcá cada uno como ✅ / ⚠️ / ❌.

**3. Hallazgos que requieren cambios**
Solo problemas reales. Para cada uno indicá:
- severidad: BLOQUEANTE o RECOMENDACIÓN;
- archivo;
- línea o fragmento;
- qué requisito incumple;
- qué debería corregirse.

**4. Decisión sugerida**
Elegí únicamente:
- `APPROVE`
o
- `REQUEST_CHANGES`

No inventes requisitos que no estén en la consigna, `plan.md`, la spec o la template.

*adjunto actividad obligatoria 3 para usar tambien como contexto.
```

**Output relevante generado por IA:**

Copilot determinó que la PR cumplía correctamente con Git e historial, la spec del rol, los cuatro diagramas de actividades, la estructura de archivos, la documentación y el changelog.

Detectó como único incumplimiento bloqueante que la descripción de la PR contenía únicamente `Closes #86` y no respetaba la estructura definida en `.github/PULL_REQUEST_TEMPLATE/feature-template.md`.

El veredicto generado fue `CUMPLE PARCIALMENTE` y la decisión sugerida fue `REQUEST_CHANGES`.

**Ajustes o decisiones manuales:**

El hallazgo fue revisado manualmente por el Coordinador / DevOps y se confirmó que era válido.

Se verificó que los archivos correspondientes al rol de Arquitecto de Diagramas no requerían modificaciones y se solicitó únicamente completar la descripción de la Pull Request utilizando la template de feature.

Luego de la corrección realizada por el responsable, se efectuó una verificación manual de la PR #87. Se confirmó que la descripción incorporó correctamente:

- datos del estudiante y rol;
- rama de trabajo;
- Issue #86;
- spec correspondiente;
- requerimientos de `plan.md`;
- descripción del trabajo realizado;
- archivos modificados y agregados;
- checklist de la feature.

No se detectaron nuevos incumplimientos.

**CHANGES_REQUESTED:**

Sí.

Se solicitó completar la descripción de la PR #87 utilizando `.github/PULL_REQUEST_TEMPLATE/feature-template.md`, manteniendo `Closes #86` para conservar la trazabilidad con la Issue.

**Resultado final:**

`APPROVED`.

La corrección solicitada fue verificada manualmente por el Coordinador / DevOps. La PR #87 fue aprobada posteriormente y mergeada a `develop`.

---

### Code Review 2

**PR:** #90 — `[AO3][Desarrollador JavaScript] Lógica de negocio en js/script.js`  
**Rol:** Desarrollador JavaScript  
**Issue:** #89  
**Rama:** `feature/dev-javascript-logica-negocio` → `develop`  

**Archivos y contexto utilizados:**

- diff de `feature/dev-javascript-logica-negocio` contra `origin/develop`;
- consigna de la Actividad Obligatoria N.º 3;
- `plan.md`, especialmente sección 10.3 y CA-18 a CA-23;
- `.github/PULL_REQUEST_TEMPLATE/feature-template.md`;
- `docs/03-specs/actividad-obligatoria-3/spec-dev-javascript.md`;
- `js/script.js`;
- `index.html`;
- los cuatro diagramas `.puml` del Arquitecto de Diagramas;
- `changelog.md`.

**Prompt utilizado:**

```text
Actuá como revisor técnico de la PR #90:

- Rama: `feature/dev-javascript-logica-negocio`
- Destino: `develop`
- Rol: Desarrollador JavaScript
- Issue: #89

No modifiques archivos, no hagas commits ni publiques reviews. Solo devolveme el informe. Podés ejecutar comandos de lectura o verificación si son necesarios.

Reconstruí el cambio real usando el diff contra `origin/develop` y el historial de commits.

Revisá:

1. **Git y trazabilidad**
   - La feature debe partir del `develop` actualizado.
   - `spec-dev-javascript.md` debe estar commiteado antes de `js/script.js`.
   - Solo debe haber cambios correspondientes al rol.
   - `changelog.md` debe registrar correctamente PR #90 e Issue #89.

2. **PR**
   - Compará la descripción con `.github/PULL_REQUEST_TEMPLATE/feature-template.md`.
   - Verificá datos del estudiante, rol, rama, Issue, spec, requisitos de `plan.md`, descripción, archivos modificados y checklist.
   - Una template incompleta debe considerarse hallazgo.

3. **Spec**
   Revisá `docs/03-specs/actividad-obligatoria-3/spec-dev-javascript.md`.

   Debe incluir:
   - BEFORE con los 4 flujos, menú principal, decisiones de arquitectura para testabilidad y checklist;
   - separación lógica de negocio / interacción;
   - funciones puras y expuestas para testing;
   - AT CLOSE con prompt exacto de Copilot, `.puml` usados como contexto, fragmento generado, ajustes manuales y decisiones finales.

4. **Implementación JavaScript**
   Contrastá `js/script.js` principalmente contra:
   - `plan.md`, sección 10.3 y CA-18 a CA-23;
   - los 4 `.puml` del Arquitecto;
   - `spec-dev-javascript.md`;
   - requisitos de AO3.

   Verificá que:
   - existan los 4 flujos: filtrar catálogo, consultar producto/talle, gestionar carrito y resumen;
   - exista menú principal funcional mediante `prompt()`;
   - se respeten decisiones, ciclos y reintentos de los diagramas;
   - las entradas estén validadas;
   - las operaciones y cálculos sean correctos;
   - se usen condicionales, ciclos, arrays y objetos;
   - las salidas sean coherentes mediante `alert()` y/o `console.log()`;
   - las funciones tengan nombres claros, parámetros y retornos apropiados;
   - la lógica de negocio esté separada de `prompt()` / `alert()`;
   - las funciones puras no modifiquen innecesariamente sus argumentos y sean testeables;
   - las funciones necesarias estén accesibles para Jasmine;
   - no haya manipulación del DOM ni eventos dentro de `js/script.js`;
   - se use camelCase, indentación correcta y JSDoc donde corresponda.

   No marques como incumplimiento el JavaScript del modal Bootstrap que ya existía previamente en `index.html`; revisá únicamente si esta PR introdujo DOM o eventos nuevos fuera del alcance permitido.

5. **Integración HTML**
   - `js/script.js` debe estar correctamente referenciado desde `index.html`.
   - La PR no debe alterar innecesariamente el HTML existente.
   - Confirmá que la carga del script y el guard para Jasmine no impidan el testing posterior.

6. **Preparación para Tester**
   Evaluá si el código queda realmente preparado para que el siguiente rol pueda crear suites Jasmine de:
   - happy path;
   - casos borde;
   - entradas inválidas;
   - arrays y objetos.

### Formato de respuesta

**1. Veredicto:** CUMPLE / CUMPLE PARCIALMENTE / NO CUMPLE.

**2. Checklist:**
- Git/historial
- Template PR
- Spec
- Menú principal
- Flujo 1
- Flujo 2
- Flujo 3
- Flujo 4
- Testabilidad
- Integración HTML
- Changelog

Usá ✅ / ⚠️ / ❌.

**3. Hallazgos que requieren cambios**
Solo problemas reales. Para cada uno indicá:
- severidad: BLOQUEANTE o RECOMENDACIÓN;
- archivo y línea o fragmento;
- requisito incumplido;
- corrección necesaria.

**4. Decisión sugerida**
Solo:
- `APPROVE`
o
- `REQUEST_CHANGES`

No inventes requisitos ajenos a la consigna, `plan.md`, los `.puml`, la spec o la template.
```

**Output relevante generado por IA:**

Copilot determinó que la implementación cubría correctamente los cuatro flujos principales, que la rama partía de `develop` actualizado, que `spec-dev-javascript.md` había sido commiteada antes de `js/script.js` y que la lógica de negocio se encontraba separada de la interacción mediante `prompt()` y `alert()`.

También verificó positivamente:

- menú principal funcional;
- Flujo 1 de filtrado;
- Flujo 4 de resumen de compra;
- uso de arrays y objetos;
- funciones globales y testeables;
- ausencia de DOM y eventos nuevos en `js/script.js`;
- referencia correcta de `js/script.js` desde `index.html`;
- guard de Jasmine;
- registro de PR #90 e Issue #89 en `changelog.md`.

El veredicto generado fue `CUMPLE PARCIALMENTE`.

Copilot detectó dos incumplimientos bloqueantes:

1. Algunas entradas vacías en los flujos 2 y 3 llegaban directamente a funciones puras como `buscarProducto()` y `buscarEnCarrito()`. Estas funciones lanzaban correctamente un `Error`, pero la capa de interacción no manejaba previamente esos casos, por lo que el simulador podía interrumpirse en lugar de informar el problema y continuar según los diagramas.

   Los puntos identificados originalmente fueron las llamadas ubicadas aproximadamente en las líneas 437, 514, 549 y 583 de `js/script.js`.

2. La descripción de la PR #90 no respetaba completamente `.github/PULL_REQUEST_TEMPLATE/feature-template.md` y la sección de archivos solamente mencionaba `spec-dev-javascript.md`, aunque el diff incluía también `js/script.js`, `index.html` y `changelog.md`.

La decisión sugerida por Copilot fue `REQUEST_CHANGES`.

**Ajustes o decisiones manuales:**

Los hallazgos fueron revisados manualmente por el Coordinador / DevOps y se confirmó que ambos eran válidos.

Para el primer hallazgo se verificó directamente que las funciones puras debían conservar sus validaciones y sus `throw`, ya que son útiles para los futuros tests de Jasmine. Por este motivo se solicitó que la corrección se realizara en la capa de interacción, validando las entradas antes de llamar a las funciones puras.

Para el segundo hallazgo se solicitó completar la descripción utilizando la template de feature y mantener `Closes #89` para conservar la trazabilidad con la Issue.

Luego de la primera respuesta del desarrollador se realizó una verificación manual y se detectó que el thread del RC1 había sido marcado como resuelto, pero todavía no existía un commit con la corrección funcional en la rama. Se solicitó entonces subir efectivamente el cambio antes de aprobar la PR.

Posteriormente se incorporó la validación mediante `esTextoNoVacio()` y controles previos en los flujos 2 y 3. Se verificó que:

- una entrada vacía en el Flujo 2 ya no llega directamente a `buscarProducto()`;
- al agregar al carrito no se llama a `buscarProducto()` con un producto vacío;
- modificar y eliminar validan producto y talle antes de llamar a `buscarEnCarrito()`;
- los `throw` de las funciones puras se mantuvieron para facilitar el testing con Jasmine.

Durante la verificación final también se detectaron dos detalles menores:

- problemas de indentación y cierre de llaves en el bloque corregido del Flujo 2;
- la descripción de la PR indicaba cinco ajustes manuales documentados, mientras que `spec-dev-javascript.md` todavía enumeraba solamente cuatro.

Se solicitó ordenar el bloque y documentar un **Ajuste 5 — Validación de entradas vacías en la capa de interacción**.

La versión final fue revisada manualmente y se confirmó que:

- la indentación y las llaves quedaron corregidas;
- `spec-dev-javascript.md` documenta los cinco ajustes;
- la descripción de la PR utiliza la feature template completa;
- los cuatro archivos del diff están correctamente enumerados;
- los dos Request Changes originales quedaron resueltos;
- no se detectaron nuevos incumplimientos bloqueantes.

**CHANGES_REQUESTED:**

Sí.

Se solicitaron dos cambios bloqueantes:

1. corregir el manejo de entradas vacías en los flujos 2 y 3 sin eliminar las validaciones de las funciones puras;
2. completar la descripción de la PR utilizando `.github/PULL_REQUEST_TEMPLATE/feature-template.md`.

**Resultado final:**

`APPROVED`.

Luego de verificar manualmente todas las correcciones, la PR #90 fue aprobada por el Coordinador / DevOps y mergeada a `develop`.

**Merge commit:** `f1bd335d114ed8b05387df95260c815c8319caac`.

---

### Code Review 3

**PR:** Pendiente.  
**Rol:** Pendiente.  
**Archivos utilizados como contexto:** Pendiente.

**Prompt utilizado:**

```text
Pendiente de completar al ejecutar el code review.
```

**Output relevante generado por IA:** Pendiente.

**Ajustes o decisiones manuales:** Pendiente.

**CHANGES_REQUESTED:** Pendiente.

---

### Code Review 4

**PR:** Pendiente.  
**Rol:** Pendiente.  
**Archivos utilizados como contexto:** Pendiente.

**Prompt utilizado:**

```text
Pendiente de completar al ejecutar el code review.
```

**Output relevante generado por IA:** Pendiente.

**Ajustes o decisiones manuales:** Pendiente.

**CHANGES_REQUESTED:** Pendiente.

---

## 11. Resumen final de Code Reviews

| Review | PR | Rol | Resultado inicial | CHANGES_REQUESTED | Resultado final |
|---|---|---|---|---|---|
| 1 | #87 | Arquitecto de Diagramas | CUMPLE PARCIALMENTE | Template de PR incompleta | APPROVED luego de corregir la descripción |
| 2 | #90 | Desarrollador JavaScript | CUMPLE PARCIALMENTE | Entradas vacías sin manejo en UI + template de PR incompleta | APPROVED luego de corregir código, documentación y descripción |
| 3 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| 4 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |

---

## 12. Obstáculos encontrados y resolución

Pendiente de completar al cierre de la tarea.