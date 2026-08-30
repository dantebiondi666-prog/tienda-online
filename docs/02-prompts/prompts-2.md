# Prompt 2 — Generación de plan.md (Coordinador / DevOps)

**Modelo:** GitHub Copilot (modo Agente)

**Método de prompt:** Chain-of-thought prompting (se instruyó explícitamente
al agente a analizar la consigna y el estado del repositorio antes de
generar el archivo, y a verificar el resultado después de crearlo, en
lugar de generarlo directamente)

**Prompt exacto:**
```
Sin embargo, el proyecto deberá seguir estos principios generales:

Diseño limpio y profesional.
Interfaz visualmente clara.
Uso predominante de colores claros y agradables.
Paleta de colores reducida y coherente.
Evitar una interfaz sobrecargada.
Evitar exceso de información simultánea.
Evitar ruido visual.
Mantener una jerarquía visual clara.
Facilitar la navegación y la búsqueda de productos.
Priorizar una experiencia simple e intuitiva.

Estos criterios deberán considerarse lineamientos generales y podrán ser
refinados posteriormente por el responsable de UX mediante Figma.

Alcance de la Actividad Obligatoria N.º 1

Para esta primera entrega, respetá estrictamente la consigna adjunta.
La implementación deberá centrarse en HTML5, dejando preparada la base
para futuras entregas.
No debe implementarse todavía la maquetación definitiva con CSS ni la
interactividad con JavaScript.

La primera versión deberá contemplar una estructura HTML5 que permita
representar conceptualmente la futura tienda, incluyendo cuando resulte
pertinente:
título y párrafos;
imágenes;
enlaces;
listas;
tablas;
formularios;
etiquetas semánticas HTML5;
comentarios que indiquen dónde se incorporarán estilos CSS en entregas
futuras;
comentarios que indiquen dónde se incorporarán funcionalidades JavaScript
en entregas futuras.

Las funcionalidades como carrito de compras, filtros dinámicos y
selección interactiva de productos deben figurar como requerimientos
futuros del proyecto, no como funcionalidades que deban estar operativas
en esta primera entrega.

Estructura esperada de plan.md

Generá un documento Markdown claro y profesional que incluya, como
mínimo:
Nombre provisorio del proyecto.
Descripción general.
Propósito del proyecto.
Problema o necesidad que busca resolver.
Alcance general del sistema.
Público objetivo.
Requerimientos funcionales identificados.
Requerimientos no funcionales relevantes.
Funcionalidades previstas para futuras entregas.
Alcance específico de la Actividad Obligatoria N.º 1.
Elementos HTML5 que deberán estar presentes en esta primera entrega.
Lineamientos generales de UX/UI.
Criterios generales de aceptación.
Fuera de alcance de esta primera entrega.
Posibles ampliaciones futuras.

Reglas importantes

No copies literalmente la consigna.
Transformá la consigna y la información proporcionada en requerimientos
específicos para esta tienda online.
No inventes funcionalidades que modifiquen significativamente el alcance
sin indicarlas como propuestas opcionales.
Diferenciá claramente los requisitos de la aplicación completa de los
correspondientes exclusivamente a la Actividad Obligatoria N.º 1.
No escribas código HTML, CSS ni JavaScript.
No desarrolles todavía la solución.
No generes archivos distintos de plan.md.
Utilizá lenguaje técnico claro pero comprensible.
Los requerimientos funcionales deben ser concretos y verificables.
Cuando sea posible, identificá los requerimientos funcionales con
códigos como RF-01, RF-02, etc.
Identificá los requerimientos no funcionales como RNF-01, RNF-02, etc.
Incluí criterios de aceptación suficientemente claros como para que
posteriormente puedan utilizarse durante los code reviews de las Pull
Requests.

Antes de crear el archivo, analizá primero la consigna adjunta y
verificá que el contenido de plan.md sea compatible con ella.
Finalmente, creá o actualizá únicamente el archivo plan.md en la raíz
del repositorio.
```

**Resultado esperado:**
Un único archivo `plan.md` en la raíz del repositorio, con las 14
secciones solicitadas (descripción, propósito, alcance, público objetivo,
RF, RNF, roadmap futuro, alcance de la Actividad 1, elementos HTML5
requeridos, lineamientos de UX/UI, criterios de aceptación, fuera de
alcance y posibles ampliaciones), sin código de implementación y sin
mezclar los requisitos de la app completa con los de esta entrega.

**Resultado obtenido:**
El agente primero contrastó la estructura del repositorio contra la
consigna y confirmó que `plan.md` todavía no existía. Definió como
hipótesis de trabajo que el archivo debía funcionar como contrato de
alcance para los futuros Pull Requests, con una sección explícita que
separara el alcance de la Actividad 1 del roadmap completo. Generó
`plan.md` con las secciones pedidas, incluyendo RF-01 a RF-18, RNF-01 a
RNF-08 y CA-01 a CA-11. Luego ejecutó una verificación del archivo para
confirmar que estuvieran presentes las secciones obligatorias y que no se
hubiera introducido código de implementación; una primera verificación
falló por un problema de manejo de caracteres especiales en la terminal
de Windows, por lo que se repitió con un método más simple (patrones
ASCII y conteos), que no encontró errores.

**Correcciones manuales realizadas:**
No se requirieron correcciones sustanciales sobre el contenido generado.
Se verificó manualmente que el nombre del proyecto usado en `plan.md`
("Tienda Online") fuera consistente con el resto de la documentación del
equipo, ya que otros archivos habían usado inicialmente una variante
distinta del nombre.

**Archivo o parte del proyecto donde se aplicó:**
`plan.md` (raíz del repositorio)