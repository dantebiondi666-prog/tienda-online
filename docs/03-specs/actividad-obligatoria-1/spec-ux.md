# Spec – Documentador / Diseñador UX

## Qué se va a hacer
Diseñar el mockup en Figma de la tienda de ropa (home con catálogo, guía de talles y formulario de contacto) y redactar el README.md del proyecto.

## Por qué
Establecer la base visual y documental del proyecto antes de que el Desarrollador Frontend convierta el diseño en HTML5.

## Consulta a IA (GitHub Copilot – modo Agente)

### Prompt completo utilizado

Contexto del proyecto (plan.md):
- Nombre provisorio: "Tienda Online".
- Es un e-commerce de ropa. Primera entrega: solo estructura HTML5 semántica, sin CSS ni JS funcional.
- Alcance de esta entrega: catálogo de prendas (nombre, imagen, categoría, talle, precio), navegación por categorías, tabla comparativa de talles/características, un formulario con 3+ campos relacionado a la tienda, y comentarios marcando dónde irá CSS/JS futuro.
- Funcionalidades futuras (NO implementar ahora, solo dejar previstas): selección de talle, carrito de compras, filtros por tipo/talle/estilo, resumen de compra con totales.
- Público objetivo: personas que buscan explorar y comparar prendas rápido antes de una compra simulada.
- Lineamientos de UX/UI del plan: diseño limpio, profesional, colores claros y agradables; paleta reducida y coherente; evitar sobrecarga de información y ruido visual; jerarquía visual clara entre navegación, categorías, productos y acciones; navegación, exploración y filtrado fáciles; experiencia simple e intuitiva.
- Requisitos técnicos obligatorios del HTML: header, main, footer, más al menos 2 etiquetas semánticas entre nav/section/article/aside; al menos 1 lista, 1 tabla (th/td), 1 formulario con 3+ campos, imágenes con alt descriptivo, enlaces con texto claro.

Tomá como referencia los siguientes ejemplos de organización UX/UI para tiendas online de ropa:

EJEMPLO 1

Proyecto:
Tienda online de ropa urbana orientada a usuarios que quieren explorar remeras, buzos y pantalones rápidamente.

Estructura propuesta:

1. Topbar
Etiqueta sugerida: section.
Contenido: promociones, envíos o información breve de la tienda.
Jerarquía: secundaria.

2. Header
Etiqueta sugerida: header.
Contenido: logo, nombre de la tienda y accesos generales.
Jerarquía: alta.

3. Navegación por categorías
Etiqueta sugerida: nav.
Contenido: enlaces a remeras, buzos, pantalones y otras categorías.
Jerarquía: alta porque permite acceder rápidamente a los productos.

4. Breadcrumbs
Etiqueta sugerida: nav.
Contenido: ubicación del usuario dentro del sitio.
Jerarquía: secundaria.

5. Contenido principal
Etiqueta sugerida: main.
Contenido: agrupa la exploración de productos, filtros e información principal.

6. Filtros
Etiqueta sugerida: aside.
Contenido: filtros por tipo de prenda, talle, estilo o precio.
Jerarquía: secundaria respecto del catálogo.

7. Catálogo de productos
Etiqueta sugerida: section.
Contenido: listado general de prendas.
Jerarquía: principal.

8. Producto
Etiqueta sugerida: article.
Contenido: imagen, nombre, categoría, talle disponible, precio y posibles acciones relacionadas con la prenda.

9. Guía de talles
Etiqueta sugerida: section.
Contenido: tabla comparativa de talles y medidas.
Ubicación: después del catálogo para que el usuario pueda consultar medidas luego de explorar las prendas.

10. CTA
Etiqueta sugerida: section.
Contenido: mensaje destacado relacionado con continuar la compra o explorar productos.
Jerarquía: secundaria pero visualmente destacada.

11. Formulario
Etiqueta sugerida: form dentro de una section.
Contenido: campos relacionados con consultas, contacto o interacción con la tienda.
Ubicación: hacia el final para no interrumpir la exploración principal.

12. Footer
Etiqueta sugerida: footer.
Contenido: información adicional, contacto y enlaces secundarios.


EJEMPLO 2

Proyecto:
Tienda online de indumentaria con catálogo de prendas y selección por categorías y talles.

Estructura propuesta:

1. Header
Etiqueta sugerida: header.
Contenido: identidad visual de la tienda y accesos principales.

2. Navegación
Etiqueta sugerida: nav.
Contenido: categorías como remeras, pantalones, camperas y accesorios.

3. Contenido principal
Etiqueta sugerida: main.
Contenido: área principal de navegación y exploración de productos.

4. Filtros
Etiqueta sugerida: aside.
Contenido: tipo de prenda, talle, estilo y otras características.

5. Catálogo
Etiqueta sugerida: section.
Contenido: conjunto de productos disponibles.

6. Prenda
Etiqueta sugerida: article.
Contenido: imagen, nombre, categoría, talle y precio de cada producto.

7. Guía de talles
Etiqueta sugerida: section.
Contenido: tabla con medidas y comparación entre talles.
Ubicación: luego del catálogo como información complementaria para ayudar a elegir una prenda.

8. Formulario
Etiqueta sugerida: form dentro de una section.
Contenido: consulta, contacto o información relacionada con la compra.

9. Footer
Etiqueta sugerida: footer.
Contenido: información secundaria de la tienda y enlaces adicionales.

En los ejemplos se observa que:

- El catálogo y la navegación tienen la mayor jerarquía visual.
- Los filtros funcionan como contenido complementario.
- Cada prenda puede representarse mediante article.
- La guía de talles se presenta cerca del catálogo porque complementa la decisión de compra.
- Los formularios se ubican en sectores donde no interrumpan la exploración principal.
- La estructura se plantea primero a nivel UX/UI antes de generar el código HTML.

Ahora, siguiendo los patrones de los ejemplos anteriores, proponé la estructura UX/UI para la página principal de "Tienda Online".

Necesito que indiques:

1. Qué secciones debería tener la página, en qué orden de arriba hacia abajo.
2. Qué etiqueta semántica de HTML5 corresponde a cada sección y por qué.
3. Qué contenido debería llevar cada sección, sin escribir todavía el contenido final.
4. Cómo se refleja la jerarquía visual pedida, indicando qué elementos deberían ser principales y cuáles secundarios.
5. Dónde ubicarías la tabla comparativa de talles y el formulario, y por qué esa ubicación tiene sentido en la experiencia de usuario.

Seguí un formato y nivel de detalle similar a los ejemplos proporcionados.

No generes código HTML todavía. Quiero solamente la propuesta de estructura y layout en forma de lista o esquema.

### Contexto pasado
El contenido completo de plan.md se incluyó directamente en el prompt (ver arriba), ya que al momento de la consulta el archivo aún no estaba disponible en la rama local por falta de merge desde develop.

### Sugerencias recibidas
Topbar de promociones, header con marca/búsqueda, nav de categorías, breadcrumbs, aside de filtros y atajos, sección de catálogo con articles por producto, sección de guía de talles con tabla, sección CTA de colección destacada, formulario en footer o en cada producto.

### Qué se usó
Header (marca, búsqueda), nav (categorías), main, aside (filtros), section (catálogo), article (por producto), section (guía de talles con tabla) y footer con un único formulario de contacto de 3+ campos.

### Qué se descartó y por qué
Topbar de promociones y breadcrumbs: no aportan a los requisitos de esta entrega, se evalúan para etapas futuras con navegación real. Sección CTA decorativa: se prioriza cuando haya CSS. Formularios repetidos por producto: uno solo en el footer alcanza el requisito y evita ruido visual.

## Trazabilidad con plan.md

- **RF-01** (catálogo con nombre, imagen, categoría, talle y precio): representado en el mockup mediante los articles de producto — alcance actual de esta entrega.
- **RF-03** (navegación entre categorías): representado mediante el nav de categorías principales — alcance actual.
- **RF-04** (enlaces y controles con textos comprensibles): aplicado en toda la navegación del mockup — alcance actual.
- **RF-05** (talles disponibles por prenda): representado como texto (ej. "S / M / L") dentro de cada article — alcance actual, sin selección interactiva.
- **RF-13, RF-14, RF-15** (filtros por tipo, talle y estilo): representados conceptualmente en el aside de filtros — representación visual únicamente, la funcionalidad de filtrado es una entrega futura.
- **RF-16** (restablecer filtros): representado como una acción visible en el aside — representación futura, sin comportamiento real todavía.
- **RF-17** (formulario con 3+ campos): representado en el footer con campos de nombre, email y mensaje — alcance actual.
- **RNF-02** (comprensibilidad): se buscó reemplazar placeholders genéricos por contenido de ejemplo concreto y claro.
- **RNF-08** (diseño adaptable futuro): la estructura en secciones permite adaptar el layout a distintos tamaños de pantalla cuando se incorpore CSS.
- **CA-11** (decisiones visuales claras, legibles y con baja sobrecarga): se aplicó en la elección de una estructura simple, sin elementos decorativos innecesarios en esta etapa.

## Consulta a IA (GitHub Copilot – modo Agente) — Redacción del README.md

### Prompt completo utilizado

Actuá como documentador técnico de un proyecto académico. Necesito el README.md 
para "Tienda Online", un proyecto de e-commerce de ropa correspondiente a la 
Actividad Obligatoria N°1 de Programación Web I (Tecnicatura Universitaria en 
Programación de Sistemas).

Contexto del proyecto:
- Primera entrega: solo estructura HTML5 semántica (sin CSS/JS funcional todavía)
- Tecnologías: HTML5, CSS y JavaScript (estos dos últimos a incorporar en próximas 
  entregas), Git/GitHub para control de versiones, Figma para el mockup, y 
  GitHub Copilot en modo Agente como asistencia de IA
- Funcionalidades previstas: catálogo de prendas por categoría (nombre, imagen, 
  talle, precio), detalle de cada prenda, selección de talle, filtros por tipo/
  talle/estilo, carrito de compras simulado con totales, y formulario de contacto

Generá un README.md con estas secciones, en este orden:
1. Título y descripción breve del proyecto
2. Objetivos del proyecto
3. Tecnologías utilizadas (lista)
4. Funcionalidades previstas (lista)
5. Maqueta de diseño web: mención de que el mockup se hizo en Figma, con 
   lineamientos de diseño limpio y jerarquía visual clara
6. Documentación: descripción del proyecto, objetivo del entregable actual, 
   link al mockup (docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png) 
   y a la versión en Figma, y link a los prompts de IA usados 
   (docs/02-prompts/prompts.md)
7. Tabla de integrantes con columnas: Nombre y apellido, Usuario de GitHub, 
   Matrícula, Carrera, Materia

Estilo: profesional, en español, formato Markdown estándar para GitHub.

### Contexto pasado
Se incluyó directamente en el prompt el contexto del proyecto (alcance de la entrega, tecnologías, funcionalidades previstas y rutas de los archivos de documentación), ya que Copilot no tenía acceso al resto del repositorio al momento de la consulta.

### Salida recibida
Copilot generó el borrador completo del README.md, con las siete secciones solicitadas, en el orden indicado y con el contenido correspondiente a cada una (título y descripción, objetivos, tecnologías, funcionalidades previstas, maqueta, documentación y tabla de integrantes).

### Qué se usó
La estructura completa propuesta por Copilot se usó como base del README.md final: los siete apartados, sus encabezados y el formato Markdown generado.

### Qué se ajustó manualmente
Se revisó el borrador generado y se corrigieron manualmente: los datos reales de la tabla de integrantes (nombres, usuarios de GitHub, matrículas), los enlaces finales a `docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png`, a la versión de Figma y a `docs/02-prompts/prompts.md`, y pequeños ajustes de redacción para que el texto reflejara con precisión el alcance real de esta entrega.

## Criterios de aceptación
- Mockup subido a docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png
- Enlace a la versión online del mockup en Figma incluido en el README.md
- README.md completo con carátula, objetivos, tecnologías, funcionalidades previstas y enlaces a docs/01-mockup y docs/02-prompts/prompts.md
- README.md generado con GitHub Copilot en modo Agente a partir de un prompt específico, y revisado manualmente por el equipo antes de su publicación