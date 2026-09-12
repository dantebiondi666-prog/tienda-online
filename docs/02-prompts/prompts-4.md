# Prompt 4 — Propuesta de estructura UX/UI para la Tienda Online

**Modelo:** Microsoft Copilot

**Método de prompt:** Few Shot (se le asignó el rol de "diseñador UX/UI senior especializado en e-commerce")

**Prompt exacto:**

```text
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
```

**Resultado esperado:**

Obtener una propuesta de estructura y layout para la página principal de la tienda online, indicando las secciones, el orden, las etiquetas semánticas HTML5 correspondientes, el contenido previsto, la jerarquía visual y la ubicación de la tabla comparativa de talles y del formulario.

El resultado debía servir como guía tanto para la elaboración del mockup en Figma como para la futura maquetación HTML realizada por el Desarrollador Frontend.

**Resultado obtenido:**

Microsoft Copilot devolvió una propuesta de estructura compuesta inicialmente por distintos componentes y areas estructurales: topbar, header, navegación por categorías, breadcrumbs, main, aside de filtros, catálogo con artículos por producto, guía de talles, sección CTA, formulario y footer.

La respuesta también indicó las etiquetas semánticas correspondientes, el contenido esperado de cada sección, la jerarquía visual recomendada y la ubicación de la tabla comparativa de talles y del formulario.

La propuesta permitió contar con una estructura inicial sobre la cual tomar decisiones de diseño y organizar posteriormente el mockup y la estructura HTML.

**Correcciones manuales realizadas:**

Se revisó la propuesta de Copilot en función del alcance definido para la primera entrega y se descartaron tres secciones y una alternativa de implementación por considerarse innecesarias o por agregar complejidad que no aportaba valor en esta etapa:

* Topbar de promociones.
* Breadcrumbs.
* Sección CTA decorativa.
* Formularios repetidos por producto.

Se conservaron las secciones que se consideraron pertinentes para el alcance del proyecto: header, nav, main, aside, sección de catálogo, article para cada producto, sección de guía de talles y footer con un único formulario.

Estas decisiones fueron realizadas manualmente y las secciones conservadas fueron las utilizadas posteriormente en el mockup y documentadas en la especificación del rol UX.

**Nota de corrección (revisión de esta entrega):** este prompt fue reclasificado de "Role prompting" a **"Few Shot"**, ya que el prompt incluye dos ejemplos completos resueltos (EJEMPLO 1 y EJEMPLO 2) antes de solicitar la tarea, lo cual constituye la técnica de Few Shot y no únicamente asignación de rol. Con este ajuste, los 5 prompts documentados en el proyecto usan técnicas distintas entre sí (Role prompting + contexto documental, Chain-of-thought, Role prompting + contexto documental estructurado, Few Shot, Zero-shot).

**Archivo(s) o parte del proyecto donde se aplicó:**

* `docs/03-specs/actividad-obligatoria-1/spec-ux.md`
* `docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png`