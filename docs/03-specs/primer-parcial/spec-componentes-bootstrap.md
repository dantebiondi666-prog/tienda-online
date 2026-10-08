# Spec - Especialista en Componentes Bootstrap

**Rol:** Especialista en Componentes Bootstrap
**Responsable:** Lucas Ivan Fischer (@LucasFUces)
**Rama:** feature/esp-componentes-bootstrap-add-components
**Issue del rol:** #61

## 1. Planificación previa (antes de comenzar)

### Componentes Bootstrap a implementar (plan original)
1. **Carousel**: destacados de productos en la home, con las imágenes de `assets/img/`. Se eligió porque muestra productos de forma visual y funciona bien en mobile con swipe.
2. **Modal**: guía de talles. Se eligió porque evita cargar la tabla de talles en la página principal y reutiliza contenido ya existente.

> Ajustes respecto de este plan: ver "Ajustes manuales realizados" en la sección 2. El modal terminó siendo un detalle de producto y el swipe no se verificó.

### Plan de testing con Playwright MCP
- Servidor local: http://localhost:3000
- Dispositivos: iPhone 14 Pro, Samsung Galaxy S23, iPad Air (viewports emulados)
- test-case-7.md: Carousel. test-case-8.md: Modal
- Por cada hallazgo: issue de tipo bug, resuelto con rama fix/ contra develop

### Criterios de aceptación (estado real)
- [x] Carousel funcional (controles e indicadores) sin overflow horizontal
- [ ] Swipe del carrusel: no se verificó (ver sección 2)
- [x] Modal abre y cierra (botón, fondo y Esc) y devuelve el foco al botón
- [ ] Modal accesible por teclado: solo se verificó Esc y el retorno de foco, no la navegación con Tab
- [x] Ambos componentes personalizados en css/bootstrap-overrides.css
- [ ] Coherencia visual con styles.css, components.css y responsive.css: pendiente de revisión visual final
- [x] test-case-7.md y test-case-8.md documentados con prompt, resultados y capturas
- [x] Issue del rol (#61) y una issue por el hallazgo de contenido (#64)
- [ ] Issues vinculados al PR y cerrados post-merge
- [x] changelog.md actualizado con link al PR

## 2. Cierre

### Prompts utilizados

**Issue del rol (Copilot Agent).** Se pidió crear la issue con la tool create_issue del servidor GitHub MCP:

```text
Creá la issue usando exclusivamente la tool create_issue del servidor GitHub MCP, sin usar la terminal ni gh. Datos: repo dantebiondi666-prog/tienda-online, título "[Especialista Bootstrap] Implementar Carousel y Modal avanzados", label "enhancement" si existe, y esta descripción: objetivo (implementar un Carousel de destacados y un Modal de detalle de producto con Bootstrap 5.3.8), criterios de aceptación (carrusel funcional sin overflow horizontal, modal que abre y cierra por botón, fondo y Esc, personalización en css/bootstrap-overrides.css, tests con Playwright MCP en iPhone 14 Pro, Galaxy S23 e iPad Air) y la rama feature/esp-componentes-bootstrap-add-components. Devolveme el número y la URL de la issue.
```

Resultado: el Agent respondió que la tool create_issue no estaba disponible. La issue #61 se creó manualmente en GitHub.

**Test del Carousel (TC7).**

```text
Usando exclusivamente las tools del servidor Playwright MCP, abrí http://localhost:3000 y probá el Carousel Bootstrap (#carouselDestacados) en tres viewports: iPhone 14 Pro (393x852), Samsung Galaxy S23 (360x780) e iPad Air (820x1180). En cada uno: 1) sacá una captura de pantalla completa y guardala en docs/04-testing/capturas/ con nombre carousel-<dispositivo>.png; 2) verificá que haya 3 diapositivas, que el botón siguiente y los indicadores cambien de diapositiva y que el botón anterior vuelva; 3) medí si hay scroll horizontal (document.documentElement.scrollWidth mayor que clientWidth); 4) verificá que las imágenes no se deformen. Al final dame una tabla con dispositivo, prueba, resultado esperado, resultado real y estado, y listá cada problema encontrado con pasos para reproducirlo. No arregles nada todavía.
```

**Test del Modal (TC8).**

```text
Usando Playwright MCP, en http://localhost:3000 probá el Modal Bootstrap (#modalProducto) en los mismos tres viewports: iPhone 14 Pro (393x852), Samsung Galaxy S23 (360x780) e iPad Air (820x1180). En cada uno: 1) hacé clic en "Ver detalle" de cada una de las tres tarjetas y verificá que el título, la imagen, el precio y los talles correspondan a ese producto; 2) sacá una captura con el modal abierto y guardala en docs/04-testing/capturas/ como modal-<dispositivo>.png; 3) verificá que cierre con la X, con clic en el fondo y con la tecla Escape; 4) verificá que el foco vuelva al botón "Ver detalle" al cerrar y que la tabla de talles no genere scroll horizontal. Dame la misma tabla de resultados y listá cada problema con pasos para reproducirlo. No arregles nada todavía.
```

Resultado de ambos: el Agent respondió que no tenía las tools del servidor Playwright MCP en la sesión y no ejecutó nada. El servidor aparecía en ejecución, pero sus herramientas no llegaron al chat, y en reinicios posteriores del Codespace figuró detenido o deshabilitado.

**Ejecución real de las pruebas.** Se usó el script de pruebas (retirado luego del repositorio a pedido del equipo) (Playwright sobre Chromium), escrito con asistencia de Claude en una conversación de chat y revisado manualmente. Se corrió dos veces: sobre la rama del rol y, luego, sobre la rama integrada con develop (que incluye details y datalist del otro rol).

### Resultado obtenido
- Carousel de destacados con 3 productos y Modal de detalle de producto con Bootstrap 5.3.8, estilizados en css/bootstrap-overrides.css con las variables de styles.css.
- 51 pruebas automáticas (18 del Carousel y 33 del Modal) en 3 viewports: todas OK, tanto antes como después de integrar develop.
- Las pruebas usan Chromium con viewports emulados. No se probó en Safari ni en dispositivos reales.

### Ajustes manuales realizados
- El carrusel es de destacados (3 productos), no uno por tarjeta, porque cada producto tiene una sola imagen.
- El modal pasó de "guía de talles" a detalle de producto (título, imagen, precio y talles), abierto desde un botón "Ver detalle" en cada tarjeta.
- Los botones "Ver detalle" se agregaron con sed.
- La paleta se tomó de las variables de styles.css.
- El swipe del carrusel se quitó del alcance: el script no lo simula y no se probó de forma real.
- Se corrigió la mención a iOS Safari de la planificación: los dispositivos se emularon en Chromium.

### Resumen de hallazgos
- Sin bugs en el comportamiento de los componentes.
- Hallazgo de contenido (#64): la guía de talles del modal es la misma tabla (S, M, L) para los tres productos, y no coincide con los talles del Pantalón (38 / 40 / 42). Registrado como issue y sin corregir en este PR.
- Limitación del proceso: Playwright MCP no estuvo disponible en el Codespace, por eso las pruebas se hicieron con script. Quedan pendientes el swipe, Safari real y la navegación con Tab.
