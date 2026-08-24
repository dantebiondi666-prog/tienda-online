# Spec – Documentador / Diseñador UX

## Qué se va a hacer
Diseñar el mockup en Figma de la tienda de ropa (home con catálogo, guía de talles y formulario de contacto) y redactar el README.md del proyecto.

## Por qué
Establecer la base visual y documental del proyecto antes de que el Desarrollador Frontend convierta el diseño en HTML5.

## Consulta a IA (GitHub Copilot – modo Agente)
- Prompt utilizado: se le pidió a Copilot, en modo Agente y usando el contenido de plan.md como contexto, una propuesta de estructura de layout para index.html (secciones, etiquetas semánticas, jerarquía visual y ubicación de la tabla de talles y el formulario).
- Sugerencias recibidas: topbar de promociones, header, nav de categorías, breadcrumbs, aside de filtros, sección de catálogo con articles por producto, sección de guía de talles, sección CTA de colección destacada, formulario en footer o en cada producto.
- Qué se usó: header, nav (categorías), main, aside (filtros), section (catálogo), article (por producto), section (guía de talles con tabla) y footer con un único formulario de contacto/newsletter de 3+ campos.
- Qué se descartó y por qué: topbar de promociones y breadcrumbs (no aportan a los requisitos de esta entrega, se evalúan para etapas futuras con navegación real), sección CTA decorativa (se prioriza cuando haya CSS), formularios repetidos por producto (uno solo en el footer alcanza el requisito y evita ruido).

## Criterios de aceptación
- Mockup subido a docs/01-mockup/diseño-inicial.png
- Enlace a la versión online del mockup en Figma incluido en el README.md
- README.md completo con carátula, objetivos, tecnologías, funcionalidades previstas y enlaces a docs/01-mockup y docs/02-prompts/prompts.md