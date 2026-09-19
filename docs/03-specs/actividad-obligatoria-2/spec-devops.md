# Especificación técnica - Coordinador / DevOps

## Objetivo

Actualizar el mockup de Figma con un sistema de diseño definitivo (paleta,
tipografías, espaciados y estados de interacción), resolver los Request
Changes pendientes de la Actividad N°1 y coordinar la integración de las
ramas feature del equipo hacia la release de esta entrega.

## 1. ¿Qué se va a hacer?

- Definir y documentar el sistema de diseño (paleta de colores, tipografías,
  espaciados, estados de interacción).
- Actualizar el mockup de Figma de la Actividad N°1 aplicando ese sistema.
- Exportar el mockup actualizado a
  docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png.
- Actualizar plan.md (secciones 10.1 y 12.1, y criterios CA-12/13/14).
- Actualizar README.md con el enlace al mockup y al archivo de Figma.
- Resolver los Request Changes de la Actividad N°1 mediante ramas fix/ y
  realizar el backport correspondiente hacia develop.
- Coordinar la integración de las ramas feature/ del equipo en develop,
  con al menos 4 code reviews asistidos por Copilot Agent Mode.
- Crear la rama release/actividad-obligatoria-2 y habilitar GitHub Pages.

## 2. ¿Por qué?

Para que el Desarrollador Frontend/CSS cuente con una base visual sólida y
coherente antes de generar los estilos con el MCP de Figma, para dejar
saldado el feedback pendiente de la entrega anterior, y para asegurar que
todas las ramas del equipo se integren revisadas antes de la entrega final.

## 3. Sistema de diseño

### 3.1 Paleta de colores

| Rol | Nombre | Hex |
|---|---|---|
| Primario | Verde salvia | #5B6F55 |
| Secundario / fondo de secciones | Beige arena | #E4D8C3 |
| Acento | Dorado apagado | #B08D57 |
| Neutro medio | Gris cálido | #8B8579 |
| Fondo general | Crema | #F7F3EC |
| Texto principal | Carbón | #2E2B26 |

**Justificación:** paleta inspirada en tonos náuticos/art déco apagados,
alineada con la Sección 12 del plan.md (colores claros, paleta reducida,
sin sobrecarga visual), adecuada para una tienda de indumentaria.

### 3.2 Tipografías

- Encabezados (h1–h3): Playfair Display, pesos 600/700.
- Cuerpo, labels, botones (h4–h6, body, small): Work Sans, pesos 400/500.

### 3.3 Espaciados

| Token | Valor | Uso |
|---|---|---|
| --space-xs | 4px | separación mínima (icono + texto) |
| --space-sm | 8px | padding chico, gap entre labels |
| --space-md | 16px | padding de tarjetas, gap en formularios |
| --space-lg | 24px | separación entre bloques de una sección |
| --space-xl | 32px | separación entre secciones |
| --space-2xl | 48px | márgenes generales de página (desktop) |

Border-radius: 6px (inputs/tags chicos), 10px (botones y tarjetas).

### 3.4 Estados de interacción

| Elemento | Default | Hover | Focus | Disabled |
|---|---|---|---|---|
| Botón primario | #5B6F55 | #4A5A45 | anillo #B08D57 2px | #D8D3C8 / #8B8579 |
| Link de navegación | texto #F7F3EC sobre verde | subrayado + #E4D8C3 | anillo #B08D57 | opacidad 50% |
| Input de formulario | borde #E4D8C3 | borde #8B8579 | borde #5B6F55 + sombra #B08D57 | fondo #F1EFE8, borde punteado |

## 4. Criterios de aceptación

### Criterios de aceptación de esta PR (mockup y sistema de diseño)

- [ ] Paleta de colores definida con rol de cada color y justificación.
- [ ] Tipografías definidas para encabezados y cuerpo, con pesos.
- [ ] Escala de espaciados documentada.
- [ ] Estados de interacción definidos para botones, links y formularios.
- [ ] Mockup actualizado en Figma y exportado a la ruta correspondiente.
- [ ] plan.md actualizado (secciones 10.1, 12.1 y CA-12/13/14).
- [ ] README.md actualizado con enlaces al mockup y al archivo de Figma.
- [ ] changelog.md registra esta PR con link y resumen de aporte.
- [ ] Issue creada y vinculada a esta PR.

### Criterios correspondientes a la etapa final del rol

- [x] Cada Request Change de la Actividad N°1 tiene su rama fix/ y su PR
      correspondiente, registrada en changelog.md bajo [Fixed].
- [x] Backport de release/actividad-obligatoria-1 hacia develop realizado.
- [ ] Se realizaron al menos 4 code reviews asistidos con Copilot Agent Mode
      sobre las PRs de los demás integrantes.
- [ ] Se crea la rama release/actividad-obligatoria-2 desde develop y se
      habilita GitHub Pages.
- [ ] La PR de release fue publicada en Slack y sus enlaces subidos al campus.

## 5. Uso de IA en esta tarea

- **Modelo utilizado:** [completar — ej. GitHub Copilot, modo Agente]
- **Qué se le pidió (resumen):** [completar al cierre]
- **Qué se aceptó del resultado y qué se corrigió manualmente:** [completar
  al cierre — ajustes manuales sobre el mockup, decisiones finales]
- **Prompt documentado en:** docs/02-prompts/actividad-obligatoria-2.md
  (o el archivo de prompts que uses para esta entrega)