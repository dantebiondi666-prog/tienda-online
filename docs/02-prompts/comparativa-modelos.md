# Comparativa de modelos de IA

## 1. Contexto

En el proyecto de la **Tienda Online**, dos integrantes del equipo
resolvieron la **misma tarea** —redactar la especificación técnica de su
propio rol (`spec-[rol].md`)— utilizando dos modelos de IA distintos. Ambos
partieron de la misma consigna de la actividad, el mismo `plan.md` y el
mismo template acordado por el equipo (`spec-[rol].md`), lo que permite una
comparación directa entre modelos sobre un problema idéntico.

## 2. Tarea comparada

**Tarea:** redactar un documento `spec-[rol].md` que describa qué se va a
hacer, por qué, los criterios de aceptación y el uso de IA en la tarea,
siguiendo la estructura común del template y trazando el contenido contra
los requerimientos (`RF`, `RNF`, `CA`) definidos en `plan.md`.

- **Claude** redactó `spec-ia.md` (rol Especialista en IA y Prompt
  Engineering).
- **ChatGPT** redactó `spec-devops.md` (rol Coordinador / DevOps).

## 3. Modelo 1 — Claude

### Prompt utilizado
```text
Escribí docs/03-specs/actividad-obligatoria-1/spec-ia.md. Este es tu
propio spec, y debe redactarse ANTES del resto de tu trabajo. Tiene que
describir las dos etapas de tu rol (PR inicial y PR final) con criterios
de aceptación para cada una. Formato checklist: qué vas a hacer, por qué,
y cómo se sabe que está terminado.

nuestro proyecto va a ser una tienda digital. haz tu la redaccion de la
spec-ia.md aqui te paso el archivo en el cual basarse la investigacion.
```
*(se adjuntó además un artículo externo de referencia sobre Spec-Driven
Development)*

### Resultado esperado
Un archivo `spec-ia.md` en formato checklist, con las dos etapas del rol
de IA (PR inicial y PR final) y sus criterios de aceptación.

### Resultado obtenido
Claude generó un documento completo, con una sección de contexto, una
explicación de SDD y checklist detallado para cada etapa, incorporando
ideas del artículo externo adjunto para fundamentar la metodología.

### Correcciones manuales
- Se corrigió la ruta del archivo (de `entrega-1` a
  `actividad-obligatoria-1`) para que coincidiera con la estructura real
  del repositorio, tras detectar la inconsistencia en una revisión de PR.
- Se reescribieron los títulos de sección para que coincidieran
  exactamente con los del template `spec-[rol].md` (por ejemplo, "Qué se
  hará" pasó a ser "Qué se va a hacer"), ya que el revisor marcó que no
  seguían la misma estructura.
- Se agregó la sección "Uso de IA en esta tarea" en ambas etapas, que
  faltaba por completo en la primera versión generada.
- Se corrigió el nombre del proyecto ("Tienda Digital" → "Tienda Online")
  para que coincidiera con el nombre real usado en `plan.md` y en el
  repositorio.

### Archivo aplicado
`docs/03-specs/actividad-obligatoria-1/spec-ia.md`

---

## 4. Modelo 2 — ChatGPT

### Prompt utilizado

> **Nota de transparencia:** el integrante que usó ChatGPT para esta tarea
> no conservó el prompt exacto que escribió, solo un resumen de lo que le
> pidió al modelo. Se documenta ese resumen tal como fue registrado en
> `spec-devops.md`, en lugar de reconstruir un prompt textual que no fue
> el realmente utilizado. Se recomienda para las próximas entregas guardar
> el texto exacto de cada prompt en el momento en que se escribe.

```text
Redactar la especificación técnica correspondiente al rol
Coordinador/DevOps, tomando como contexto la consigna de la Actividad
Obligatoria N°1, plan.md y el template spec-[rol].md definido para el
equipo.
```

### Resultado esperado
Un archivo `spec-devops.md` que siguiera el template común, cubriendo las
tareas del rol (configuración de ramas, `plan.md`, plantillas de PR,
administración de Pull Requests, release y publicación) con sus criterios
de aceptación.

### Resultado obtenido
ChatGPT generó una estructura y un conjunto de criterios de aceptación
como base, cubriendo en términos generales las tareas del rol de
Coordinador/DevOps.

### Correcciones manuales
Fueron más extensas que en el caso de Claude. Se ajustaron manualmente:
tareas y criterios de aceptación para que coincidieran con el flujo real
del repositorio, los títulos de sección para alinearlos con el template
(de "¿Qué se va a realizar?" a "Qué se va a hacer", entre otros), y se
agregaron ítems que faltaban por completo respecto al template y a la
consigna original: mínimo de 4 code reviews asistidos con IA, publicación
de la PR release en Slack, rama `feature/` propia con commit relevante,
Issue vinculada y cerrada tras el merge, y entrada en `changelog.md`.

### Archivo aplicado
`docs/03-specs/actividad-obligatoria-1/spec-devops.md`

---

## 5. Conclusión comparativa

En esta tarea puntual —redactar una spec de rol a partir de un template,
una consigna y un `plan.md` comunes— **Claude requirió menos correcciones
manuales que ChatGPT**: el contenido generado ya usaba una estructura más
cercana a la del template acordado, y ya incluía por defecto una sección
de trazabilidad razonada contra `plan.md`. El resultado de ChatGPT, en
cambio, necesitó más ajustes de estructura y completar varios ítems del
template que habían quedado afuera (uso de IA, feature branch, issue,
changelog), lo que sugiere que fue menos exhaustivo replicando un
formato ya definido de antemano cuando ese formato no se le pasó de forma
explícita en el prompt.

### Recomendación

- Para tareas de **redacción de documentación técnica que debe seguir un
  template estricto ya acordado por el equipo**, conviene pasarle al
  modelo el template completo como parte del prompt (no solo mencionarlo
  por nombre), independientemente de qué modelo se use — esto reduce el
  trabajo de corrección posterior, como se vio en el caso de ChatGPT.
- Ambos modelos son útiles para este tipo de tarea; la diferencia
  observada en esta comparación tuvo más que ver con el detalle del
  prompt utilizado (Claude recibió el template y un artículo de contexto;
  ChatGPT recibió una instrucción más resumida) que con una limitación
  inherente de alguno de los dos modelos.