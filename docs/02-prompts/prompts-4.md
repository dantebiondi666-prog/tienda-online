# Prompt 4 — Propuesta de estructura UX/UI para la Tienda Online

**Modelo:** Microsoft Copilot

**Método de prompt:** Role prompting (se le asignó el rol de "diseñador UX/UI senior especializado en e-commerce")

**Prompt exacto:**

```text
Actuá como un diseñador UX/UI senior especializado en e-commerce.

Contexto del proyecto (plan.md):
- Nombre provisorio: "Tienda Online"
- Es un e-commerce de ropa. Primera entrega: solo estructura HTML5 semántica, sin CSS ni JS funcional.
- Alcance de esta entrega: catálogo de prendas (nombre, imagen, categoría, talle, precio), navegación por categorías, tabla comparativa de talles/características, un formulario con 3+ campos relacionado a la tienda, y comentarios marcando dónde irá CSS/JS futuro.
- Funcionalidades futuras (NO implementar ahora, solo dejar previstas): selección de talle, carrito de compras, filtros por tipo/talle/estilo, resumen de compra con totales.
- Público objetivo: personas que buscan explorar y comparar prendas rápido antes de una compra simulada.
- Lineamientos de UX/UI del plan: diseño limpio, profesional, colores claros y agradables; paleta reducida y coherente; evitar sobrecarga de información y ruido visual; jerarquía visual clara entre navegación, categorías, productos y acciones; navegación, exploración y filtrado fáciles; experiencia simple e intuitiva.
- Requisitos técnicos obligatorios del HTML: header, main, footer, más al menos 2 etiquetas semánticas entre nav/section/article/aside; al menos 1 lista, 1 tabla (th/td), 1 formulario con 3+ campos, imágenes con alt descriptivo, enlaces con texto claro.

Tarea:
Con este contexto, proponeme una estructura de layout para la página principal (index.html) de esta tienda de ropa. Necesito que me digas:
1. Qué secciones debería tener la página, en qué orden de arriba hacia abajo.
2. Qué etiqueta semántica de HTML5 corresponde a cada sección y por qué.
3. Qué contenido debería llevar cada sección (sin escribir el contenido final, solo qué tipo de información).
4. Cómo se refleja la jerarquía visual pedida (qué va más destacado, qué va secundario).
5. Dónde ubicarían la tabla comparativa de talles y el formulario, y por qué esa ubicación tiene sentido en la experiencia de usuario.

No generes código HTML todavía, quiero solamente la propuesta de estructura y layout en forma de lista o esquema.
```

**Resultado esperado:**

Obtener una propuesta de estructura y layout para la página principal de la tienda online, indicando las secciones, el orden, las etiquetas semánticas HTML5 correspondientes, el contenido previsto, la jerarquía visual y la ubicación de la tabla comparativa de talles y del formulario.

El resultado debía servir como guía tanto para la elaboración del mockup en Figma como para la futura maquetación HTML realizada por el Desarrollador Frontend.

**Resultado obtenido:**

Microsoft Copilot devolvió una propuesta de estructura compuesta inicialmente por 12 secciones: topbar, header, navegación por categorías, breadcrumbs, main, aside de filtros, catálogo con artículos por producto, guía de talles, sección CTA, formulario y footer.

La respuesta también indicó las etiquetas semánticas correspondientes, el contenido esperado de cada sección, la jerarquía visual recomendada y la ubicación de la tabla comparativa de talles y del formulario.

La propuesta permitió contar con una estructura inicial sobre la cual tomar decisiones de diseño y organizar posteriormente el mockup y la estructura HTML.

**Correcciones manuales realizadas:**

Se revisó la propuesta de Copilot en función del alcance definido para la primera entrega y se descartaron cuatro secciones por considerarse innecesarias o por agregar complejidad que no aportaba valor en esta etapa:

* Topbar de promociones.
* Breadcrumbs.
* Sección CTA decorativa.
* Formularios repetidos por producto.

Se conservaron las secciones que se consideraron pertinentes para el alcance del proyecto: header, nav, main, aside, sección de catálogo, article para cada producto, sección de guía de talles y footer con un único formulario.

Estas decisiones fueron realizadas manualmente y las secciones conservadas fueron las utilizadas posteriormente en el mockup y documentadas en la especificación del rol UX.

**Archivo(s) o parte del proyecto donde se aplicó:**

* `docs/03-specs/actividad-obligatoria-1/spec-ux.md`
* `docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png`
