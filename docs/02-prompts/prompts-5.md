# Prompt 5 — Organización de la documentación de prompts (docs/02-prompts/)

**Modelo:** Claude (Sonnet)

**Método de prompt:** Zero-shot (instrucción directa, sin ejemplos previos
del formato de salida)

**Prompt exacto:**
```
buscame 2 prompts que yo haya hecho que sean relevantes (este inclusive)
para hacer prompt 1 y 5.
Y que me hagas como ejemplo prompts-1.md
```

**Resultado esperado:**
Identificar, dentro del historial de la conversación, dos prompts propios
que hubieran aportado valor real al proyecto (uno de ellos el mismo mensaje
enviado), y generar un archivo `prompts-1.md` de ejemplo que documentara el
primero de ellos con el formato exigido por la consigna (modelo, método,
prompt exacto, resultado esperado, resultado obtenido, correcciones
manuales, archivo de aplicación).

**Resultado obtenido:**
El modelo identificó dos prompts reales de la conversación: el usado para
redactar `spec-ia.md` (asignado como Prompt 1) y este mismo mensaje
(asignado como Prompt 5). Generó `prompts-1.md` documentando el primero.
Inicialmente había propuesto un archivo combinado con capturas de pantalla
incluidas, hasta que se aclaró que la consigna del equipo no exige
capturas y que cada prompt debe ir en un archivo independiente.

**Correcciones manuales realizadas:**
- Se eliminaron los campos de captura de pantalla que el modelo había
  incluido por defecto, ya que no son un requisito para esta entrega.
- Se dividió el contenido en dos archivos independientes (`prompts-1.md`
  y `prompts-5.md`) en lugar de un único archivo con ambos prompts, para
  cumplir con la consigna de "un prompt por archivo".
- Se actualizó posteriormente el campo "Correcciones manuales realizadas"
  de `prompts-1.md` para incluir la corrección de la referencia cruzada
  en `spec-ia.md` (de `prompts-x.md` a `prompts-1.md`).

**Archivo o parte del proyecto donde se aplicó:**
`docs/02-prompts/prompts-1.md` y `docs/02-prompts/prompts.md` (índice)