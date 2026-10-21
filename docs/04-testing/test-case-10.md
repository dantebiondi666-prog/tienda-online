# Test Case 10 — Componente HTML avanzado datalist

**Proyecto:** Tienda Online  
**Actividad:** Primer Parcial — Programación Web I  
**Rol:** Desarrollador de Componentes HTML Avanzados  
**Alumno:** Dante Biondi  
**Herramienta:** Playwright MCP  

---

## 1. Objetivo

Verificar el funcionamiento del componente HTML avanzado `<datalist>` incorporado al buscador principal de la tienda.

Se valida la asociación entre el campo de búsqueda y el listado de sugerencias, el contenido de las opciones, la posibilidad de ingresar valores sugeridos y libres, la accesibilidad básica mediante teclado y su correcta adaptación responsive.

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
Usá Playwright MCP para ejecutar el Test Case 10 sobre
http://localhost:3000.

El objetivo es validar la implementación del componente HTML avanzado
<datalist> asociado al buscador principal de la tienda.

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

1. Que exista el input de búsqueda con id="busqueda".
2. Que el input mantenga type="search".
3. Que el input tenga el atributo:
   list="sugerencias-busqueda".
4. Que exista un <datalist> con id="sugerencias-busqueda".
5. Que el datalist contenga exactamente estas opciones:
   - Remera
   - Pantalón
   - Campera
   - Mujer
   - Hombre
   - Niños
6. Que sea posible escribir normalmente dentro del buscador.
7. Que el campo permita escribir también valores que no estén incluidos
   en las sugerencias del datalist.
8. Que la asociación entre el input y el datalist sea correcta.
9. Que el label del buscador siga asociado correctamente al input y sea
   accesible.
10. Que la incorporación del datalist no altere el diseño del header.
11. Que no haya elementos cortados, superpuestos o fuera de pantalla.
12. Que no exista overflow horizontal global.
    Verificá comparando document.documentElement.scrollWidth con
    document.documentElement.clientWidth.
13. Que el buscador continúe siendo usable mediante teclado.
14. Registrá cualquier error de consola relevante para este componente.

Tené en cuenta que la interfaz visual de sugerencias de <datalist> es
controlada de forma nativa por el navegador. No consideres un fallo que
el desplegable tenga una apariencia o posición diferente según el navegador,
siempre que la asociación input-datalist y las opciones funcionen correctamente.

No consideres el 404 de favicon.ico como fallo del Test Case, ya que no está
relacionado con el componente evaluado.

Al finalizar entregame:

- resultado por viewport: PASS o FAIL;
- cantidad y valores de las opciones encontradas;
- confirmación de la asociación entre el input y el datalist;
- resultado de escritura de un valor incluido en las sugerencias;
- resultado de escritura de un valor libre que no esté en las sugerencias;
- resultado de accesibilidad básica mediante teclado;
- valores de scrollWidth y clientWidth por viewport;
- cualquier diferencia encontrada entre viewports;
- bugs o hallazgos relevantes;
- resultado general del TC10.

No modifiques código ni documentación.
```

---

## 5. Resultados

| Viewport | Resultado | ScrollWidth / ClientWidth |
|---|---|---|
| Desktop — 1920x1080 | PASS | 1905 / 1905 |
| iPad Air — 820x1180 | PASS | 805 / 805 |
| iPhone 14 Pro — 390x844 | PASS | 375 / 375 |
| Samsung Galaxy S23 — 412x915 | PASS | 397 / 397 |

Durante las pruebas se verificó que:

- el input `#busqueda` está presente;
- el campo mantiene `type="search"`;
- el input posee el atributo `list="sugerencias-busqueda"`;
- existe el elemento `<datalist>` con `id="sugerencias-busqueda"`;
- la asociación entre el input y el datalist es correcta;
- el buscador mantiene correctamente asociado su `<label>` mediante `for="busqueda"`;
- el campo puede utilizarse mediante teclado;
- es posible ingresar valores incluidos dentro del datalist;
- es posible ingresar valores libres que no formen parte de las sugerencias;
- el header mantiene una correcta adaptación en todos los viewports evaluados;
- no existen elementos cortados, superpuestos ni fuera de pantalla;
- no se detectó overflow horizontal global;
- no se detectaron errores de consola relevantes para el componente.

### Opciones del datalist

Se verificó la existencia de las seis opciones definidas:

- `Remera`
- `Pantalón`
- `Campera`
- `Mujer`
- `Hombre`
- `Niños`

Todas las opciones fueron encontradas correctamente.

### Escritura en el buscador

Se comprobó que el campo acepta correctamente un valor incluido entre las sugerencias del `<datalist>`.

También se comprobó que el usuario puede ingresar libremente valores que no formen parte del listado, manteniendo el comportamiento esperado de un elemento `<datalist>`.

### Overflow horizontal

- Desktop: `1905px / 1905px`
- iPad Air: `805px / 805px`
- iPhone 14 Pro: `375px / 375px`
- Samsung Galaxy S23: `397px / 397px`

En todos los viewports, `scrollWidth` y `clientWidth` coincidieron, por lo que no se detectó overflow horizontal global.

---

## 6. Evidencias

Las capturas muestran la integración del buscador en los distintos dispositivos evaluados.

El menú visual de sugerencias del `<datalist>` no se utiliza como única evidencia de funcionamiento debido a que su representación gráfica es controlada de forma nativa por el navegador. La asociación entre los elementos y sus opciones fue verificada mediante Playwright MCP.

- [Desktop](capturas/tc-10/tc10-desktop.png)
- [iPad Air](capturas/tc-10/tc10-ipad-air.png)
- [iPhone 14 Pro](capturas/tc-10/tc10-iphone-14-pro.png)
- [Samsung Galaxy S23](capturas/tc-10/tc10-galaxy-s23.png)

---

## 7. Issues

No se detectaron bugs o hallazgos relevantes durante la ejecución del TC10.

Por este motivo no fue necesario crear Issues mediante GitHub MCP para este test case.

---

## 8. Resultado final

**TC10: PASS**

El componente `<datalist>` funciona correctamente asociado al buscador principal de la tienda.

Las seis opciones definidas fueron detectadas correctamente, el campo permite ingresar tanto valores sugeridos como valores libres y mantiene su accesibilidad mediante teclado.

La implementación tampoco genera problemas de adaptación responsive ni overflow horizontal en los dispositivos evaluados.

---

## 9. Observaciones

La visualización del menú de sugerencias de `<datalist>` depende del comportamiento nativo del navegador, por lo que su apariencia o posición puede variar entre dispositivos.

Esto no afecta el funcionamiento del componente, cuya asociación con el campo de búsqueda y opciones fue validada mediante Playwright MCP.

Durante las pruebas también se registró una respuesta `404` correspondiente a `favicon.ico`.

Este error no está relacionado con el componente `<datalist>` y no afecta su funcionamiento, por lo que no fue considerado un fallo del Test Case 10.