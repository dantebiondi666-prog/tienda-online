# Spec – Documentador / Diseñador UX

## Qué se va a hacer
Diseñar el mockup en Figma de la tienda de ropa (home con catálogo, guía de talles y formulario de contacto) y redactar el README.md del proyecto.

## Por qué
Establecer la base visual y documental del proyecto antes de que el Desarrollador Frontend convierta el diseño en HTML5.

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