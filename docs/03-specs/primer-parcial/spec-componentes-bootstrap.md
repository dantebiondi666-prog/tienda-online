# Spec - Especialista en Componentes Bootstrap

**Rol:** Especialista en Componentes Bootstrap
**Responsable:** Lucas Ivan Fischer (@LucasFUces)
**Rama:** feature/esp-componentes-bootstrap-add-components

## 1. Planificación previa (antes de comenzar)

### Componentes Bootstrap a implementar
1. **Carousel**: destacados de productos en la home, con las imágenes de `assets/img/`. Se elige porque muestra productos de forma visual y funciona bien en mobile con swipe.
2. **Modal**: guía de talles. Se elige porque evita cargar la tabla de talles en la página principal y reutiliza contenido ya existente.

### Plan de testing con Playwright MCP
- Servidor local: http://localhost:3000
- Dispositivos: iPhone 14 Pro (iOS Safari), Samsung Galaxy S23 (Chrome Android), iPad Air (iOS Safari)
- test-case-7.md: Carousel. test-case-8.md: Modal
- Por cada hallazgo: issue de tipo bug con GitHub MCP, resuelto con rama fix/ contra develop

### Criterios de aceptación
- [ ] Carousel funcional (controles, indicadores y swipe) sin overflow horizontal
- [ ] Modal abre, cierra (botón, fondo y Esc) y es accesible por teclado
- [ ] Ambos componentes personalizados en css/bootstrap-overrides.css
- [ ] Coherencia visual con styles.css, components.css y responsive.css
- [ ] test-case-7.md y test-case-8.md documentados con prompt, resultados, capturas e issues
- [ ] Issues vinculados al PR y cerrados post-merge
- [ ] changelog.md actualizado con link al PR

## 2. Cierre (completar al terminar)

### Prompts utilizados (Copilot Agent / Playwright MCP)
_Pendiente_

### Resultado obtenido
_Pendiente_

### Ajustes manuales realizados
_Pendiente_

### Resumen de hallazgos con Playwright MCP
_Pendiente_