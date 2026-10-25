# Especificación técnica — Coordinador / DevOps

**Proyecto:** Remer Us  
**Materia:** Programación Web I  
**Entrega:** Actividad Obligatoria N.º 3  
**Rol:** Coordinador / DevOps  
**Responsable:** Dante Biondi  
**Rama:** `feature/coord-devops-tercera-entrega`  
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

### Code Review 2

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
| 1 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| 2 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| 3 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| 4 | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |

---

## 12. Obstáculos encontrados y resolución

Pendiente de completar al cierre de la tarea.