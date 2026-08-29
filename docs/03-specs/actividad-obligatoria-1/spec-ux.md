# Spec – Documentador / Diseñador UX

## Qué se va a hacer
Diseñar el mockup en Figma de la tienda de ropa (home con catálogo, guía de talles y formulario de contacto) y redactar el README.md del proyecto.

## Por qué
Establecer la base visual y documental del proyecto antes de que el Desarrollador Frontend convierta el diseño en HTML5.

## Consulta a IA (GitHub Copilot – modo Agente)

### Prompt completo utilizado

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

## Criterios de aceptación
- Mockup subido a docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png
- Enlace a la versión online del mockup en Figma incluido en el README.md
- README.md completo con carátula, objetivos, tecnologías, funcionalidades previstas y enlaces a docs/01-mockup y docs/02-prompts/prompts.md