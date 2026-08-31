# Spec — Especialista en IA y Prompt Engineering

**Rol:** Especialista en IA y Prompt Engineering
**Proyecto:** Tienda Digital (simulador de e-commerce)
**Entrega:** Actividad Obligatoria N°1
**Autor:** [Nombre del integrante]
**Rama:** feature/ia-setup-sdd

---

## Nota sobre la estructura de este documento

A diferencia de los demás roles, el Especialista en IA tiene **dos Pull
Requests** en esta entrega: uno inicial (antes de que el equipo empiece a
desarrollar) y uno final (al cierre). Por eso, este spec repite la
estructura del template (`docs/03-specs/actividad-obligatoria-1/spec-[rol].md`) **una vez por cada
etapa**, en lugar de una sola vez. Todas las secciones obligatorias del
template están presentes en ambas etapas.

---

## Etapa 1 — PR inicial

### 1. Qué se va a hacer

Investigar la metodología Spec-Driven Development (SDD) y definir cómo se
aplica al proyecto de la Tienda Digital: qué información debe tener cada
`spec-[rol].md`, en qué orden se escriben las specs, y cómo se validan
contra `plan.md`. Documentar esta investigación en
`docs/02-prompts/sdd-decisions.md`. Diseñar el template genérico
`docs/03-specs/actividad-obligatoria-1/spec-[rol].md` que usarán el Coordinador, el Desarrollador
Frontend y el Documentador/UX para redactar sus propias specs. Verificar
que todo el equipo tenga instalada la extensión de GitHub Copilot en modo
Agente y la extensión de GitHub Pull Requests en VS Code.

### 2. Por qué se hace

Esta etapa debe completarse antes de que el resto del equipo comience a
desarrollar, porque el template y los criterios de SDD definidos acá son la
base que usarán los demás roles para redactar sus propias specs contra
`plan.md`. Sin esta base común, cada rol definiría su propio formato y se
perdería la trazabilidad entre specs y `plan.md` que exige la consigna
(RNF-05 Trazabilidad, CA-08).

### 3. Criterios de aceptación

- [ ] `docs/03-specs/actividad-obligatoria-1/spec-ia.md` (este archivo) existe y sigue la
      estructura del template.
- [ ] `docs/02-prompts/sdd-decisions.md` documenta qué es SDD, por qué se
      aplica al proyecto, qué información debe tener cada `spec-[rol].md`,
      en qué orden se escriben y cómo se validan contra `plan.md`.
- [ ] El template `docs/03-specs/actividad-obligatoria-1/spec-[rol].md` está creado, con las
      secciones "Qué se va a hacer", "Por qué se hace", "Criterios de
      aceptación" y "Uso de IA en esta tarea".
- [ ] Está verificado y documentado que todos los integrantes cuentan con
      GitHub Copilot en modo Agente y la extensión de GitHub Pull Requests.
- [ ] Todo lo anterior está commiteado antes que cualquier archivo de
      código de la entrega (verificable en el historial de commits).
- [ ] El PR inicial fue revisado y aprobado por el Coordinador antes del
      merge a `develop`, y quedó registrado en `changelog.md` con su link
      correspondiente.
- [ ] Existe una Issue vinculada a la tarea, cerrada tras el merge.

### 4. Uso de IA en esta tarea

- **Modelo utilizado:** Claude
- **Qué se le pidió (resumen):** Investigar la metodología SDD a partir de
  un artículo de referencia y redactar la documentación de decisiones y el
  template de specs para el proyecto.
- **Qué se aceptó del resultado y qué se corrigió manualmente:** Se aceptó
  la estructura general propuesta por el modelo (contexto del rol,
  definición de SDD, tabla de flujo de trabajo y checklist de criterios de
  aceptación por etapa). Se corrigió manualmente la ruta de los archivos
  (de `entrega-1` a `actividad-obligatoria-1`), los títulos de sección
  para que coincidieran con el template, y se agregó por completo la
  sección "Uso de IA en esta tarea" en ambas etapas, ausente en la
  primera versión generada.
- **Prompt documentado en:** `docs/02-prompts/prompts-1.md`

---

## Etapa 2 — PR final

### 1. Qué se va a hacer

Recopilar el prompt más valioso aportado por cada integrante del equipo (el
que más ayudó al avance del proyecto) y documentarlo en
`docs/02-prompts/prompts-x.md`, con modelo, método de prompting, prompt
exacto, resultado esperado, resultado obtenido y correcciones manuales
realizadas. Actualizar el índice `docs/02-prompts/prompts.md`. Redactar
`docs/02-prompts/comparativa-modelos.md`, comparando dos modelos de IA
distintos aplicados a una misma tarea del proyecto. Actuar como consultor
interno durante todo el desarrollo, orientando a cualquier integrante que
no sepa cómo aplicar IA a su tarea.

### 2. Por qué se hace

El objetivo es dejar evidencia real (no ficticia) de cómo la IA aportó
valor concreto al desarrollo de la Tienda Digital, y generar conocimiento
reutilizable sobre qué modelo y qué técnica de prompting conviene para cada
tipo de tarea (por ejemplo, generación de estructura HTML vs. redacción de
documentación).

### 3. Criterios de aceptación

- [ ] Existen 5 archivos `prompts-x.md`, cada uno de un integrante
      distinto, con un modelo de IA diferente y un método de prompting
      diferente (zero-shot, few-shot, chain-of-thought, role prompting).
- [ ] Cada prompt documentado aportó valor real al proyecto, no es un
      ejemplo inventado.
- [ ] `prompts.md` funciona como índice, con enlaces relativos a cada
      archivo, sin duplicar el contenido de los prompts.
- [ ] `comparativa-modelos.md` compara dos modelos sobre una misma tarea
      del proyecto, con una conclusión fundada sobre cuál fue más útil y
      por qué.
- [ ] `changelog.md` incluye la entrada correspondiente a este segundo PR,
      con link, autor y resumen del aporte.
- [ ] La Issue asociada a esta etapa está cerrada tras el merge del PR.

### 4. Uso de IA en esta tarea

- **Modelo utilizado:** Grok (xAI)
- **Qué se le pidió (resumen):** Auditar spec-ia.md y sdd-decisions.md contra el checklist de obligaciones del rol, identificando qué estaba cubierto, qué faltaba y qué corregir antes de entregar.
- **Qué se aceptó del resultado y qué se corrigió manualmente:** Se aceptó el diagnóstico completo (desvío de orden temporal, checklist de herramientas incompleto, ausencia del bloque de PR final). Se reordenó la respuesta para que coincidiera con el formato de tres puntos pedido y se agregaron referencias explícitas a las obligaciones del checklist.
- **Prompt documentado en:** `docs/02-prompts/prompts-5.md`

---

## Referencia

Este documento fue redactado tomando como base el artículo *"Spec-driven
development: Unpacking one of 2025's key new AI-assisted engineering
practices"* de Thoughtworks (Liu Shangqi, dic. 2025), que describe SDD como
un paradigma que separa la fase de planificación (redacción de la spec) de
la fase de implementación (generación de código asistida por IA), y que
recomienda que las especificaciones sean claras, concisas y estén orientadas
al comportamiento del sistema más que a detalles de implementación.