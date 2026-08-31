# Prompt 1 — Redacción de spec-ia.md

**Modelo:** Claude (Sonnet 5 Medium)

**Método de prompt:** Role prompting + contexto documental (se adjuntó un
artículo externo como base de la investigación)

**Prompt exacto:**
```
Escribí docs/03-specs/entrega-1/spec-ia.md. Este es tu propio spec, y
debe redactarse ANTES del resto de tu trabajo. Tiene que describir las
dos etapas de tu rol (PR inicial y PR final) con criterios de aceptación
para cada una. Formato checklist: qué vas a hacer, por qué, y cómo se
sabe que está terminado.

nuestro proyecto va a ser una tienda digital. haz tu la redaccion de la
spec-ia.md aqui te paso el archivo en el cual basarse la investigacion.
```
*(se adjuntó el artículo "Spec-driven development: Unpacking one of 2025's
key new AI-assisted engineering practices", de Thoughtworks, en PDF)*

**Resultado esperado:**
Un archivo `spec-ia.md` completo, en formato checklist, que describiera
las dos etapas del rol de Especialista en IA (PR inicial y PR final) con
sus respectivos criterios de aceptación, adaptado al proyecto de la
tienda online.

**Resultado obtenido:**
El modelo generó un `spec-ia.md` completo, con una sección de contexto,
una explicación de qué es SDD y por qué se aplica al proyecto, y las dos
etapas del rol separadas con checklist de criterios de aceptación cada
una. Incorporó ideas del artículo adjunto, como la separación entre
planificación e implementación y la reducción de alucinaciones del
modelo mediante specs claras.

**Correcciones manuales realizadas:**
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

**Archivo o parte del proyecto donde se aplicó:**
`docs/03-specs/actividad-obligatoria-1/spec-ia.md`