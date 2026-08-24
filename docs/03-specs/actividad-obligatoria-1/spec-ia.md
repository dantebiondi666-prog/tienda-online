# Spec — Especialista en IA y Prompt Engineering

**Rol:** Especialista en IA y Prompt Engineering
**Proyecto:** Tienda Digital (simulador de e-commerce)
**Entrega:** Actividad Obligatoria N°1
**Metodología aplicada:** Spec-Driven Development (SDD)

---

## 1. Contexto

Este documento define el trabajo del rol de IA para la primera entrega del
proyecto. El valor de este rol no está en usar más inteligencia artificial que
el resto del equipo, sino en asegurar que el equipo la use de forma
disciplinada, documentada y trazable contra los requerimientos del proyecto
(`plan.md`).

Para esta entrega se definen **dos etapas**, cada una con su propio Pull
Request: una etapa inicial (antes de que el equipo empiece a desarrollar) y
una etapa final (al cierre de la entrega).

---

## 2. ¿Qué es Spec-Driven Development y por qué lo aplicamos?

Spec-Driven Development es un paradigma de desarrollo que utiliza
especificaciones de requerimientos bien elaboradas como punto de partida
para que agentes de IA generen código ejecutable. A diferencia de simplemente
pedirle a un asistente que "programe algo" (vibe coding), en SDD la fase de
planificación se separa explícitamente de la fase de implementación: primero
se analizan los requerimientos y se documenta qué se va a construir, por qué,
y con qué criterios se considera terminado; recién después se genera el
código.

Para nuestro equipo, aplicar SDD significa que **ningún integrante escribe
código antes de haber redactado su spec**. Esto tiene tres beneficios
concretos para el proyecto de la tienda digital:

- Reduce la improvisación y la dispersión de criterios entre los cuatro
  roles, ya que todos parten de la misma referencia (`plan.md`).
- Facilita el code review, porque el revisor puede comparar lo implementado
  contra lo que la spec declaraba de antemano, en lugar de inferir la
  intención a partir del código.
- Ayuda a que las herramientas de IA generen resultados más precisos: una
  especificación clara y acotada reduce las alucinaciones del modelo y
  mejora la calidad del código generado, en comparación con pedir cosas de
  forma vaga o puramente conversacional.

### ¿Qué debe tener cada `spec-[rol].md`?

Cada spec individual del equipo (DevOps, Frontend, UX, IA) debe responder
tres preguntas, en formato checklist:

1. **Qué se va a hacer** — una descripción concreta de la tarea, sin copiar
   literalmente la consigna de la actividad.
2. **Por qué se hace** — cómo se conecta esa tarea con los requerimientos
   funcionales declarados en `plan.md`.
3. **Criterios de aceptación** — una lista verificable de condiciones que
   permiten decir "esto está terminado" sin ambigüedad.

### Orden de escritura y validación

1. El Coordinador/DevOps genera `plan.md` a partir de la consigna.
2. Cada rol redacta su `spec-[rol].md` **antes** de tocar código, tomando
   `plan.md` como referencia.
3. Cada spec se incluye en su Pull Request correspondiente.
4. El revisor de cada PR valida que lo implementado se corresponda con lo
   declarado en la spec, y que la spec a su vez se corresponda con `plan.md`.

---

## 3. Etapa 1 — PR inicial

### Qué se hará
- Redactar este archivo (`docs/03-specs/entrega-1/spec-ia.md`).
- Documentar la investigación sobre SDD y su aplicación al proyecto en
  `docs/02-prompts/sdd-decisions.md`.
- Diseñar el template genérico `docs/03-specs/spec-[rol].md` que usarán los
  demás roles del equipo para escribir sus propias specs.
- Verificar que todos los integrantes tengan instalada la extensión de
  GitHub Copilot (modo Agente) y la extensión de GitHub Pull Requests en
  VS Code.

### Por qué
Esta etapa debe completarse **antes** de que el resto del equipo comience a
desarrollar, porque el template y los criterios de SDD que se definan acá son
la base que usarán el Coordinador, el Desarrollador Frontend y el
Documentador/UX para redactar sus propias specs. Sin esta base, cada rol
definiría su propio formato y se perdería la trazabilidad contra `plan.md`.

### Criterios de aceptación
- [ ] `docs/03-specs/entrega-1/spec-ia.md` existe y describe las dos etapas
      del rol (inicial y final) con sus criterios de aceptación.
- [ ] `docs/02-prompts/sdd-decisions.md` documenta qué es SDD, por qué se
      aplica al proyecto y cómo se valida cada spec contra `plan.md`.
- [ ] El template `docs/03-specs/spec-[rol].md` está creado y justificado
      (por qué tiene esa estructura y no otra).
- [ ] Está verificado y documentado que todos los integrantes cuentan con
      GitHub Copilot en modo Agente y la extensión de GitHub Pull Requests.
- [ ] Todo lo anterior está commiteado **antes** que cualquier archivo de
      código de la entrega (verificable en el historial de commits).
- [ ] El PR inicial fue revisado y aprobado por el Coordinador antes del
      merge a `develop`, y quedó registrado en `changelog.md` con su link
      correspondiente.
- [ ] Existe una Issue vinculada a la tarea, cerrada tras el merge.

---

## 4. Etapa 2 — PR final

### Qué se hará
- Recopilar el prompt más valioso aportado por cada integrante del equipo
  (el que más ayudó al avance del proyecto de la tienda digital) y
  documentarlo en `docs/02-prompts/prompts-x.md`, con modelo, método de
  prompting, prompt exacto, resultado esperado, resultado obtenido y
  correcciones manuales realizadas.
- Actualizar el índice `docs/02-prompts/prompts.md` con enlaces a todos los
  prompts documentados.
- Redactar `docs/02-prompts/comparativa-modelos.md`, comparando dos modelos
  de IA distintos aplicados a una misma tarea del proyecto.
- Actuar como consultor interno durante todo el proceso de desarrollo,
  orientando a cualquier integrante que no sepa cómo aplicar IA a su tarea.

### Por qué
El objetivo de esta etapa es dejar evidencia real (no ficticia) de cómo la
IA aportó valor concreto al desarrollo de la tienda digital, y generar
conocimiento reutilizable sobre qué modelo y qué técnica de prompting
conviene para cada tipo de tarea (por ejemplo, generación de estructura
HTML vs. redacción de documentación).

### Criterios de aceptación
- [ ] Existen 5 archivos `prompts-x.md`, cada uno de un integrante distinto,
      con un modelo de IA diferente y un método de prompting diferente
      (zero-shot, few-shot, chain-of-thought, role prompting).
- [ ] Cada prompt documentado aportó valor real al proyecto, no es un
      ejemplo inventado.
- [ ] `prompts.md` funciona como índice, con enlaces relativos a cada
      archivo, sin duplicar el contenido de los prompts.
- [ ] `comparativa-modelos.md` compara dos modelos sobre una misma tarea del
      proyecto, con una conclusión fundada sobre cuál fue más útil y por qué.
- [ ] `changelog.md` incluye la entrada correspondiente a este segundo PR,
      con link, autor y resumen del aporte.
- [ ] La Issue asociada a esta etapa está cerrada tras el merge del PR.

---

## 5. Referencia

Este documento fue redactado tomando como base el artículo *"Spec-driven
development: Unpacking one of 2025's key new AI-assisted engineering
practices"* de Thoughtworks (Liu Shangqi, dic. 2025), que describe SDD como
un paradigma que separa la fase de planificación (redacción de la spec) de
la fase de implementación (generación de código asistida por IA), y que
recomienda que las especificaciones sean claras, concisas y estén orientadas
al comportamiento del sistema más que a detalles de implementación.