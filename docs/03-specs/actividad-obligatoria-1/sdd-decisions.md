# Decisiones de Spec-Driven Development (SDD)

**Rol responsable:** Especialista en IA y Prompt Engineering
**Proyecto:** Tienda Digital (simulador de e-commerce)
**Entrega:** Actividad Obligatoria N°1

---

## 1. ¿Qué es Spec-Driven Development?

Spec-Driven Development (SDD) es un paradigma de desarrollo que utiliza
especificaciones de requerimientos bien elaboradas como insumo principal
para que agentes de IA generen código ejecutable. La idea central es separar
explícitamente dos fases del trabajo:

1. **Fase de planificación:** se analizan los requerimientos, se definen
   restricciones técnicas y se redacta la especificación (spec). Esto es lo
   que en nuestro proyecto llamamos `plan.md` (spec maestro) y los
   `spec-[rol].md` individuales.
2. **Fase de implementación:** una vez validada la spec, se le entrega al
   agente de IA para que genere el código correspondiente.

A diferencia de simplemente pedirle a una IA que "resuelva algo" de forma
libre y conversacional (lo que suele llamarse *vibe coding*), en SDD nada se
programa sin que antes exista una especificación clara de qué se va a hacer,
por qué, y con qué criterios se considera terminado.

Es importante remarcar que una especificación no es lo mismo que un simple
documento de requerimientos de producto. Técnicamente, una buena spec
debería dejar claro el comportamiento externo del software: qué entra, qué
sale, qué condiciones deben cumplirse antes y después de cada acción, y qué
restricciones existen. No alcanza con describir la intención de negocio; hay
que describir cómo se comporta el sistema.

## 2. ¿Por qué aplicamos SDD en este proyecto?

Decidimos aplicar SDD a la Tienda Digital por tres razones concretas:

- **Coordinación entre 4 roles distintos.** Sin una spec común de
  referencia (`plan.md`), cada integrante podría interpretar la consigna de
  forma distinta. SDD obliga a que todos trabajen contra el mismo documento
  base.
- **Mejor calidad de código generado por IA.** La experiencia documentada en
  la industria muestra que dar contexto técnico explícito y estructurado a
  un agente de IA produce mejores resultados que pedirle algo en lenguaje
  llano y ambiguo. Una spec clara reduce las respuestas inventadas o
  inconsistentes del modelo (alucinaciones).
- **Trazabilidad para el code review.** Al tener una spec redactada antes
  del código, el revisor de cada Pull Request puede comparar lo que se
  implementó contra lo que se había prometido, en lugar de adivinar la
  intención original a partir del diff.

## 3. Cómo se aplica SDD en esta entrega

| Paso | Responsable | Artefacto |
|---|---|---|
| 1. Generar el spec maestro del proyecto a partir de la consigna | Coordinador/DevOps | `plan.md` |
| 2. Definir metodología SDD y template de specs | Especialista en IA | `docs/02-prompts/sdd-decisions.md` (este archivo) y `docs/03-specs/spec-[rol].md` |
| 3. Redactar spec individual antes de desarrollar | Cada rol | `docs/03-specs/entrega-1/spec-[rol].md` |
| 4. Desarrollar y abrir PR incluyendo la spec | Cada rol | PR hacia `develop` |
| 5. Revisar que el código cumpla con la spec, y que la spec se corresponda con `plan.md` | Coordinador/DevOps | Comentarios de revisión en el PR |

### Qué información debe tener cada `spec-[rol].md`

Cada spec individual debe responder, como mínimo, tres preguntas:

1. **Qué se va a hacer** — descripción concreta de la tarea, redactada por
   el propio integrante (no una copia literal de la consigna de la
   actividad).
2. **Por qué se hace** — de qué manera esa tarea responde a un requerimiento
   funcional declarado en `plan.md`.
3. **Criterios de aceptación** — una lista en formato checklist que permite
   verificar objetivamente si la tarea está terminada.

### Orden en que se escriben las specs

1. `plan.md` (Coordinador) — spec maestro, primero que cualquier otra cosa.
2. `sdd-decisions.md` y el template `spec-[rol].md` (Especialista en IA) —
   se redactan en paralelo al `plan.md`, ya que definen el formato que
   usará todo el equipo.
3. `spec-[rol].md` de cada integrante — se redacta tomando como base el
   template y `plan.md`, antes de escribir cualquier línea de código o
   diseño.

### Cómo se validan las specs contra `plan.md`

Antes de aprobar un PR, el revisor verifica dos cosas:

- Que la spec incluida en el PR responda a un requerimiento concreto de
  `plan.md` (no una tarea inventada o fuera de alcance).
- Que lo efectivamente implementado en el PR se corresponda con lo que la
  spec declaraba como criterio de aceptación.

Si hay una discrepancia entre lo implementado y la spec, el PR recibe
*request changes* y no se aprueba hasta corregir la spec o el código, según
corresponda.

## 4. Herramientas del equipo

Se verificó que todos los integrantes del equipo tengan instalada:

- [x] La extensión de **GitHub Copilot** en modo Agente (VS Code).
- [x] La extensión de **GitHub Pull Requests** (VS Code).

## 5. Referencia bibliográfica

Este documento se basa en el artículo *"Spec-driven development: Unpacking
one of 2025's key new AI-assisted engineering practices"*, de Liu Shangqi
para Thoughtworks (diciembre de 2025). El artículo describe SDD como un
paradigma que usa especificaciones bien elaboradas como insumo para que
agentes de IA generen código, separando la planificación de la
implementación, y advierte que la calidad de una spec depende de que sea
clara, concisa y esté orientada al comportamiento del sistema (no solo a la
intención de negocio), ya que esto reduce las alucinaciones del modelo y
mejora la calidad del código generado.