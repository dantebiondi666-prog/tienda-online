# Test Case 9 — Componente HTML avanzado details/summary

**Proyecto:** Tienda Online  
**Actividad:** Primer Parcial — Programación Web I  
**Rol:** Desarrollador de Componentes HTML Avanzados  
**Alumno:** Dante Biondi  
**Herramienta:** Playwright MCP  

---

## 1. Objetivo

Verificar el funcionamiento del componente HTML avanzado `<details>` + `<summary>` implementado en la sección "Preguntas frecuentes".

Se valida su comportamiento nativo, accesibilidad mediante teclado, adaptación responsive e integración visual con Bootstrap y los estilos existentes.

---

## 2. Rama evaluada

`feature/dev-comp-html-avanzados-add-components`

**URL local:** `http://localhost:3000`

---

## 3. Viewports evaluados

| Dispositivo | Viewport |
|---|---|
| Desktop | 1920x1080 |
| iPad Air | 820x1180 |
| iPhone 14 Pro | 390x844 |
| Samsung Galaxy S23 | 412x915 |

---

## 4. Prompt utilizado

```text
Usá Playwright MCP para ejecutar el Test Case 9 sobre
http://localhost:3000.

El objetivo es validar la implementación del componente HTML avanzado
<details> + <summary> de la sección "Preguntas frecuentes".

No modifiques ningún archivo del proyecto.
No crees Issues en GitHub todavía.
Si encontrás un bug, informámelo primero y esperá mi confirmación antes de
crear cualquier Issue.

Probá los siguientes viewports:

- Desktop: 1920x1080
- iPad Air: 820x1180
- iPhone 14 Pro: 390x844
- Samsung Galaxy S23: 412x915

En cada viewport verificá:

1. Que la sección "Preguntas frecuentes" se renderice correctamente.
2. Que existan los 3 elementos <details> y sus 3 <summary>.
3. Que cada <summary> sea visible y legible.
4. Que cada <details> pueda abrirse y cerrarse correctamente.
5. Que al abrirlo aparezca su contenido correspondiente.
6. Que el componente pueda operarse mediante teclado:
   - navegación con Tab;
   - apertura/cierre con Enter o Space cuando corresponda.
7. Que no haya elementos cortados, superpuestos o fuera de pantalla.
8. Que no exista overflow horizontal global.
   Verificá comparando document.documentElement.scrollWidth con
   document.documentElement.clientWidth.
9. Que la sección mantenga una presentación coherente con el resto del sitio
   y con la integración actual de Bootstrap.
10. Registrá cualquier error de consola relevante para este componente.

No consideres el 404 de favicon.ico como fallo del Test Case, ya que no afecta
la funcionalidad evaluada.

Al finalizar entregame:

- resultado por viewport: PASS o FAIL;
- detalle breve de cada comprobación;
- cualquier diferencia encontrada entre viewports;
- bugs o hallazgos relevantes;
- resultado general del TC9.

No modifiques código ni documentación.
```

---

## 5. Resultados

| Viewport | Resultado | Observaciones |
|---|---|---|
| Desktop — 1920x1080 | PASS | Sin overflow; navegación mediante Tab correcta. |
| iPad Air — 820x1180 | PASS | Sin overflow; navegación mediante Tab correcta. |
| iPhone 14 Pro — 390x844 | PASS | Sin overflow; apertura y cierre mediante Enter y Space correctos. |
| Samsung Galaxy S23 — 412x915 | PASS | Sin overflow; apertura y cierre mediante Enter correctos. |

Durante las pruebas se verificó que:

- la sección "Preguntas frecuentes" se renderiza correctamente;
- existen exactamente 3 elementos `<details>` y 3 elementos `<summary>`;
- todos los elementos `<summary>` son visibles y legibles;
- cada `<details>` puede abrirse y cerrarse correctamente;
- el contenido correspondiente aparece al expandir cada componente;
- los elementos `<summary>` pueden alcanzarse mediante navegación con `Tab`;
- las teclas `Enter` y `Space` permiten operar los componentes;
- no existen elementos cortados, superpuestos ni fuera de pantalla;
- no se detectó overflow horizontal global;
- la presentación mantiene coherencia con Bootstrap y los estilos existentes;
- no se detectaron errores de consola relevantes para el componente.

### Overflow horizontal

- Desktop: `1905px / 1905px`
- iPad Air: `805px / 805px`
- iPhone 14 Pro: `375px / 375px`
- Samsung Galaxy S23: `397px / 397px`

En todos los casos, `scrollWidth` y `clientWidth` coincidieron, por lo que no se detectó overflow horizontal global.

---

## 6. Evidencias

- [Desktop](capturas/tc-9/tc9-desktop.png)
- [iPad Air](capturas/tc-9/tc9-ipad-air.png)
- [iPhone 14 Pro](capturas/tc-9/tc9-iphone-14-pro.png)
- [Samsung Galaxy S23](capturas/tc-9/tc9-galaxy-s23.png)

---

## 7. Issues

No se detectaron bugs o hallazgos relevantes durante la ejecución del TC9.

Por este motivo no fue necesario crear Issues mediante GitHub MCP para este test case.

---

## 8. Resultado final

**TC9: PASS**

El componente `<details>` + `<summary>` funciona correctamente en los cuatro viewports evaluados.

La implementación mantiene el comportamiento nativo de HTML, permite interacción mediante teclado, no genera overflow horizontal y se adapta correctamente a desktop, tablet y mobile.

---

## 9. Observaciones

Durante las pruebas se detectó una respuesta `404` correspondiente a `favicon.ico`.

Este comportamiento no está relacionado con el componente evaluado y no afecta el funcionamiento de `<details>` + `<summary>`, por lo que no fue considerado un fallo del Test Case 9.

### 9.1. Retest posterior a ajustes visuales

Luego de incorporar estilos específicos en `css/components.css` para mejorar la coherencia visual de la sección "Preguntas frecuentes", se realizó un nuevo test con Playwright MCP.

Se volvieron a validar los siguientes viewports:

| Viewport | Resultado |
|---|---|
| Desktop — 1920x1080 | PASS |
| iPad Air — 820x1180 | PASS |
| iPhone 14 Pro — 390x844 | PASS |
| Samsung Galaxy S23 — 412x915 | PASS |

Durante el retest se confirmó que:

- los tres elementos `<details>` y `<summary>` continúan funcionando correctamente;
- la apertura y cierre mediante teclado continúa operativa;
- los estilos definidos en `components.css` se aplican correctamente;
- no existen elementos cortados o superpuestos;
- no se genera overflow horizontal;
- la sección mantiene coherencia visual con el resto del sitio.

**Resultado del retest: PASS**

No se detectaron bugs relevantes y no fue necesario crear Issues.