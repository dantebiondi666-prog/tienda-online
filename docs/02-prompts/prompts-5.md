# Prompt 5 — Auditoría de calidad de la entrega del rol de IA

**Modelo:** Grok (xAI)

**Método de prompt:** Zero-shot (chat vacío, sin historial previo ni
contexto adicional)

**Prompt exacto:**
```
Estoy trabajando en un proyecto universitario de Programación Web I: una
tienda online de ropa, desarrollada en equipo con 4 roles (Coordinador/
DevOps, Desarrollador Frontend, Documentador/UX, Especialista en IA y
Prompt Engineering). Soy el Especialista en IA.

A continuación te paso el checklist de obligaciones y tareas que tengo
que cumplir en mi rol dentro del proyecto:

---
Rol: Especialista en IA y Prompt Engineering

Este rol tiene dos Pull Requests: uno al inicio del proyecto y otro al
cierre de esta entrega.

PR inicial — Setup de metodología SDD
- docs/03-specs/entrega-1/spec-ia.md debe existir en la ruta correcta,
  estar commiteado antes que cualquier código de la entrega, y describir
  las dos etapas del rol (PR inicial y PR final) con sus criterios de
  aceptación.
- docs/02-prompts/sdd-decisions.md debe documentar la investigación de
  SDD y cómo se aplica al proyecto: qué es, por qué se usa, y cómo se
  implementa en esta entrega.
- Debe incluir el template de spec-[rol].md adoptado por el equipo, con
  la justificación del diseño elegido.
- El PR inicial debe mergearse antes de que el equipo comience a
  desarrollar (orden temporal verificable en el historial de commits).
- Debe verificarse y documentarse que todos los integrantes cuentan con
  GitHub Copilot y la extensión de GitHub Pull Requests instalados.

PR final — Documentación de prompts
- docs/02-prompts/prompts.md debe actuar como índice, con enlaces a
  todos los archivos de prompts.
- Deben existir 5 archivos prompts-x.md.
- Cada prompt debe corresponder a un integrante distinto del equipo y
  haber aportado valor real al proyecto (no ficticio).
- Cada prompt debe usar un modelo de IA diferente y un método de
  prompting diferente.
- Cada prompt debe incluir: el prompt exacto en bloque de código,
  resultado esperado, resultado obtenido, correcciones manuales
  realizadas, y el archivo o sección del proyecto donde se aplicó.
- docs/02-prompts/comparativa-modelos.md debe comparar 2 modelos de IA
  aplicados a la misma tarea del proyecto, con contexto claro y una
  conclusión fundada sobre cuál fue más útil y por qué.

Flujo de trabajo (aplica a ambos PRs)
- Trabajar en una rama feature/ propia.
- Cada PR debe ser revisado y aprobado por el Coordinador antes del
  merge, usando el template de PR correspondiente.
- changelog.md debe tener una entrada por cada PR mergeado (número,
  link, autor y resumen), con entradas separadas para el PR inicial y el
  PR final.
- Cada PR debe tener una Issue vinculada, cerrada tras el merge.
---

Y a continuación te paso el contenido completo de los dos documentos que
ya redacté para este rol:

--- INICIO spec-ia.md ---
[contenido completo de spec-ia.md]
--- FIN spec-ia.md ---

--- INICIO sdd-decisions.md ---
[contenido completo de sdd-decisions.md]
--- FIN sdd-decisions.md ---

Actuá como auditor de calidad de este entregable universitario. Revisá
los dos documentos que te pasé (spec-ia.md y sdd-decisions.md) contra
cada obligación del checklist que te compartí arriba. Decime, en una
sola respuesta:

1. Qué obligaciones están cubiertas por el contenido actual.
2. Qué obligaciones faltan o están incompletas.
3. Qué corregirías concretamente antes de entregar.

No me pidas más información ni hagas preguntas de seguimiento: trabajá
solamente con lo que te di.
```
*(Nota: los bloques `[contenido completo de spec-ia.md]` y `[contenido
completo de sdd-decisions.md]` indican dónde se pegó, en el prompt real
enviado a Grok, el texto íntegro de ambos archivos. Se omiten aquí para
no duplicar su contenido dentro de este documento.)*

**Resultado esperado:**
Una auditoría completa y estructurada, en una sola respuesta, que
identificara:
- qué obligaciones del checklist del rol ya están cubiertas por el
  contenido actual de `spec-ia.md` y `sdd-decisions.md`,
- qué obligaciones faltan o están incompletas,
- y correcciones concretas y accionables antes de entregar.

Se esperaba que la respuesta fuera objetiva, basada únicamente en el
material suministrado (sin asumir historial de Git, PRs o archivos no
presentes), y que sirviera como control de calidad real antes del cierre
de la entrega.

**Resultado obtenido:**
El modelo generó una auditoría detallada y bien estructurada en tres
secciones claras:

1. **Obligaciones cubiertas:** reconoció que `spec-ia.md` describe
   correctamente las dos etapas del rol con criterios de aceptación, y
   que `sdd-decisions.md` documenta qué es SDD, por qué se aplica, cómo
   se implementa, el template con justificación de diseño, y la
   verificación de herramientas (aunque incompleta).
2. **Obligaciones faltantes o incompletas:** señaló el incumplimiento
   del orden temporal (PR inicial mergeado después de que Frontend y UX
   ya estaban en curso), el checklist de herramientas vacío, la ausencia
   total del bloque de PR final (5 prompts, índice,
   `comparativa-modelos.md`), y la falta de evidencia concreta de ramas
   `feature/`, `changelog`, Issues y PRs.
3. **Correcciones concretas:** completar placeholders, unificar rutas,
   documentar mejor el desvío de orden, y preparar el resto de la entrega
   (prompts, comparativa, changelog, Issues).

La respuesta fue útil como segunda opinión independiente, ya que el
modelo no había participado en la redacción original de los documentos
(a diferencia de Claude, usado en el Prompt 1).

**Correcciones manuales realizadas:**
- Se reordenó ligeramente la estructura de la respuesta del modelo para
  que coincidiera exactamente con el formato de tres puntos pedido
  (cubiertos / faltantes / correcciones), eliminando repeticiones
  menores.
- Se agregaron referencias explícitas a las obligaciones del checklist
  para facilitar el chequeo posterior.
- Se ajustaron algunas formulaciones para que fueran más accionables (por
  ejemplo, "completar el checklist de herramientas con nombre y fecha
  por integrante").
- No se modificó el contenido de fondo de la auditoría: se mantuvo el
  diagnóstico sobre el desvío de orden temporal y la ausencia del bloque
  de PR final.

**Archivo o parte del proyecto donde se aplicó:**
La auditoría se usó como control de calidad interno antes del cierre de
la entrega. Sus hallazgos se aplicaron directamente para:
- completar los placeholders restantes en `spec-ia.md` y
  `sdd-decisions.md`,
- documentar mejor la sección de desvío de orden temporal en
  `sdd-decisions.md`,
- y priorizar la creación de los archivos del PR final (`prompts-*.md`,
  `prompts.md` e índice, `comparativa-modelos.md`).

Este prompt cierra el requisito de diversidad de modelos y métodos: es el
segundo aporte del Especialista en IA, usa un modelo distinto a Claude
(Prompt 1), GitHub Copilot (Prompt 2) y GPT-5.6 Luna (Prompt 3), y aplica
zero-shot (método no utilizado en los prompts anteriores del mismo
integrante).