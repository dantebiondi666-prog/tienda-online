
# Informe de Testing JavaScript — Jasmine

## 1. Información general

- **Proyecto:** Remer Us — Tienda Online
- **Materia:** Programación Web I
- **Entrega:** Actividad Obligatoria N.º 3
- **Responsable:** Juan Martin Britos
- **Rol:** Tester JavaScript / QA Engineer
- **Framework:** Jasmine 5.1.1
- **Herramienta de automatización:** Playwright MCP
- **Fecha de ejecución:** 30/10/2026
- **Issue asociada:** #88
- **Rama:** `feature/tester-javascript-jasmine`

## 2. Objetivo

Verificar mediante pruebas automatizadas el correcto funcionamiento de las operaciones JavaScript implementadas para el simulador de tienda online Remer Us.

Se evaluaron cuatro flujos funcionales: consulta y filtrado del catálogo, consulta de productos y talles, gestión del carrito y cálculo del resumen de compra.

## 3. Archivos involucrados

- `js/script.js`: código JavaScript bajo prueba.
- `js/test/test-runner.html`: ejecutor de Jasmine.
- `js/test/script.spec.js`: suites y casos de prueba.
- `js/test/capturas/`: evidencias visuales.
- `js/test/testing-doc.md`: presente informe.

## 4. Suites ejecutadas

| Suite | Funcionalidad | Tests | Resultado |
|---|---|---:|---|
| 1 | Consultar y filtrar catálogo | 4 | PASS |
| 2 | Consultar producto y talle | 4 | PASS |
| 3 | Gestionar carrito | 10 | PASS |
| 4 | Resumen de compra | 4 | PASS |
| **Total** | **4 flujos funcionales** | **22** | **PASS** |

**Resultado final vigente:** 4 suites ejecutadas, 22 tests aprobados
y 0 fallidos, verificados mediante Jasmine 5.1.1 y Playwright MCP.

La ejecución inicial contemplaba 16 tests. Durante las correcciones
de la PR #91 se incorporaron seis pruebas adicionales a la Suite 3.

## 5. Casos de prueba

### Suite 1 — Consultar y filtrar catálogo

1. Filtrar productos correctamente por tipo.
2. Filtrar por talle sin distinguir mayúsculas.
3. Devolver un array vacío cuando no existen coincidencias.
4. Rechazar un campo de filtro inválido.

**Resultado:** 4/4 PASS.

### Suite 2 — Consultar producto y talle

1. Encontrar un producto existente por nombre.
2. Devolver `null` cuando el producto no existe.
3. Confirmar la disponibilidad de un talle.
4. Rechazar una cadena vacía como talle.

**Resultado:** 4/4 PASS.

### Suite 3 — Gestionar carrito

Se ejecutaron diez pruebas automatizadas para verificar
las operaciones del carrito, incluyendo casos normales,
casos borde y entradas inválidas.

1. Agregar un producto a un carrito vacío.
2. Sumar cantidades cuando el producto y talle ya existen.
3. Modificar la cantidad sin alterar el carrito original.
4. Eliminar un producto del carrito.
5. Verificar que se puede agregar un producto aunque no pertenezca al catálogo.
6. Rechazar cantidades cero, negativas, decimales y no numéricas.
7. Rechazar un producto o talle vacío al agregar.
8. Rechazar un carrito que no sea un array.
9. Rechazar la modificación de un producto y talle inexistentes.
10. Rechazar la eliminación de un producto y talle inexistentes.

**Resultado:** 10/10 PASS.

Los seis casos adicionales fueron incorporados mediante
GitHub Copilot Agent, utilizando `js/script.js` como contexto.

Se documentó que `agregarAlCarrito()` permite agregar productos
que no pertenecen al catálogo. Esta prueba registra el
comportamiento actual de la función, sin modificar
el código de negocio.

### Suite 4 — Resumen de compra

1. Calcular correctamente el subtotal.
2. Devolver cero para un carrito vacío.
3. Calcular el total de varios productos.
4. Rechazar cantidades negativas.

**Resultado:** 4/4 PASS.

## 6. Ejecución manual con Jasmine

Se inició el servidor local y se accedió al ejecutor de Jasmine mediante:

`http://localhost:3000/js/test/test-runner.html`

Se ejecutaron las cuatro suites funcionales utilizando Jasmine 5.1.1.

**Resultados finales obtenidos:**

- Suites ejecutadas: 4.
- Tests ejecutados: 22.
- Tests aprobados: 22.
- Tests fallidos: 0.
- Resultado general: PASS.

**Evidencia final:**

![Ejecución manual de Jasmine — 22 tests PASS](capturas/jasmine-22-tests-pass.png)

**Antecedente histórico:**

La primera ejecución comprendía 16 tests, todos aprobados.
Posteriormente se incorporaron seis pruebas adicionales a la
Suite 3 como parte de las correcciones de la PR #91.

![Ejecución inicial de Jasmine — 16 tests PASS](capturas/jasmine-16-tests-pass.png)

## 7. Ejecución automatizada con Playwright MCP

Se utilizó GitHub Copilot Agent junto con Playwright MCP
para abrir el ejecutor de Jasmine y verificar los resultados
de las pruebas automatizadas.

Luego de incorporar seis pruebas adicionales a la Suite 3,
se realizó una nueva ejecución para validar los resultados finales.

**Resultados confirmados mediante Playwright MCP:**

- Suites ejecutadas: 4.
- Tests ejecutados: 22.
- Tests aprobados: 22.
- Tests fallidos: 0.
- Resultado general: PASS.

**Evidencia final:**

![Ejecución con Playwright MCP — 22 tests PASS](capturas/jasmine-playwright-22-tests-pass.png)

**Antecedente histórico:**

La ejecución inicial mediante Playwright MCP verificó
16 tests aprobados. Posteriormente se amplió la cobertura
hasta alcanzar los 22 tests definitivos.

![Ejecución inicial con Playwright MCP — 16 tests PASS](capturas/jasmine-playwright-pass.png)

## 8. Incidencias y observaciones

Durante la ejecución automatizada mediante Playwright MCP
se registró una respuesta HTTP 404 correspondiente al
recurso `/favicon.ico`.

Se identificó que este mensaje estaba relacionado con la
ausencia del ícono del sitio y no con las funciones JavaScript
evaluadas mediante Jasmine.

La incidencia no afectó la ejecución de las pruebas ni
los resultados obtenidos.

**Resultados finales:**

- Suites ejecutadas: 4.
- Tests ejecutados: 22.
- Tests aprobados: 22.
- Tests fallidos: 0.
- Errores funcionales detectados: ninguno en los casos evaluados.

No quedaron incidencias pendientes relacionadas con
la ejecución de Jasmine.


## 9. Alcance, cobertura formal y limitaciones


### 9.1 Alcance de las pruebas

En la Actividad Obligatoria N.º 3 se implementaron
inicialmente 22 pruebas unitarias para verificar la
lógica de negocio de los cuatro flujos funcionales.

Durante la auditoría de la AO3, realizada en la
Pull Request #93, se incorporaron 42 pruebas de
integración de los orquestadores mediante mocks
de `prompt()` y `alert()` utilizando Jasmine.

Las pruebas de integración incluyen:

- RC4: 6 pruebas del filtrado del catálogo.
- RC5: 7 pruebas de consulta de productos y talles.
- RC6: 21 pruebas de gestión del carrito.
- RC7: 8 pruebas del resumen de compra y menú principal.

**Resultado conjunto:** 64 tests ejecutados,
64 PASS y 0 FAIL.



### 9.2 Medición formal de cobertura — RC8

Se utilizó la herramienta `c8` para medir la cobertura
formal del archivo `js/script.js`, ejecutando las
pruebas unitarias y de integración mediante Jasmine.

Las dependencias y el comando de cobertura están
configurados en `package.json`.

Para instalar las dependencias:

```bash
npm install
```

Para ejecutar las pruebas y generar el reporte:

```bash
npm run cobertura
```

En Windows PowerShell, si la política de ejecución
bloquea `npm.ps1`, pueden utilizarse los comandos
`npm.cmd install` y `npm.cmd run cobertura`.

El script `cobertura` de `package.json` ejecuta
`c8` junto con Jasmine, utilizando:

- `js/test/node-setup.js`: configuración del entorno de pruebas.
- `js/test/script.spec.js`: 22 pruebas unitarias.
- `js/test/integracion.spec.js`: 42 pruebas de integración.

Se genera un reporte de cobertura en la terminal
y un reporte HTML.

**Resultados finales de cobertura de `js/script.js`:**

| Métrica | Cobertura |
|---|---:|
| Sentencias | 92,53% |
| Ramas | 84,32% |
| Funciones | 100,00% |
| Líneas | 92,53% |

Se ejecutaron **64 tests, con 64 PASS y 0 FAIL**.

### Código que permanece sin cubrir

Las líneas restantes sin cobertura corresponden
principalmente a validaciones defensivas de las
funciones puras, que lanzan excepciones mediante
`throw new Error` ante determinados argumentos
incorrectos.

Estas validaciones no siempre se alcanzan desde
los orquestadores interactivos porque los flujos
validan previamente los datos ingresados mediante
`prompt()`.

También permanecen sin cubrir las líneas 669-670,
correspondientes al arranque automático del
simulador, condicionado por:

`if (typeof jasmine === "undefined")`

Durante las pruebas, Jasmine está disponible,
por lo que ese arranque automático no se ejecuta.

Las líneas 562-563, correspondientes a la
cancelación al ingresar el talle durante la
modificación del carrito, quedaron cubiertas
mediante el nuevo test de integración de RC6.

Los porcentajes corresponden a la cobertura
formal de `js/script.js` obtenida con `c8`.
No representan una medición porcentual
independiente de interacciones reales
en el navegador.


### 9.3 Cobertura interactiva real

La cobertura interactiva se evaluó mediante pruebas
de integración que simulan las respuestas del usuario
utilizando `spyOn(window, "prompt")` y
`spyOn(window, "alert")`.

Se verificaron los cuatro orquestadores:

- `ejecutarFlujoFiltrarCatalogo()`.
- `ejecutarFlujoConsultarProducto()`.
- `ejecutarFlujoGestionarCarrito()`.
- `ejecutarFlujoResumenCompra()`.

También se verificó la navegación mediante
`iniciarSimulador()`.

Las pruebas cubren rutas de ejecución con entradas
válidas, inválidas, cancelaciones, reintentos y
mensajes mostrados al usuario.

La cobertura interactiva real comprende los
comportamientos simulados mediante Jasmine y sus mocks.
No se realizó una medición porcentual independiente
de cobertura interactiva en un navegador real.

Por lo tanto, el 92,23% de cobertura de líneas y
el 83,78% de cobertura de ramas representan la
cobertura formal del código JavaScript instrumentado,
no un porcentaje específico de interacciones reales
del usuario.

### 9.4 Limitaciones

El resultado PASS no implica que estén cubiertas todas
las combinaciones posibles de entradas o condiciones
de ejecución.

Las pruebas de integración utilizan mocks de
`prompt()` y `alert()`, por lo que no sustituyen
una prueba manual completa de la experiencia del usuario.

No fue necesario modificar `js/script.js` para
ejecutar las pruebas automatizadas.


## 10. Conclusión

Las pruebas automatizadas de JavaScript finalizaron
satisfactoriamente, incluyendo las pruebas unitarias
originales de la Actividad Obligatoria N.º 3 y las
pruebas de integración incorporadas durante su
auditoría en la Pull Request #93 (RC4 a RC8).

Se ejecutaron un total de 64 tests mediante Jasmine:

- 22 pruebas unitarias de lógica de negocio.
- 42 pruebas de integración de los orquestadores.
- 64 tests aprobados.
- 0 tests fallidos.

Las pruebas de integración verificaron cancelaciones,
reintentos, entradas inválidas, operaciones sobre el
carrito y mensajes mostrados mediante `alert()`.

La cobertura formal de `js/script.js`, medida mediante
c8, alcanzó los siguientes resultados:

- Cobertura de líneas: 92,53%.
- Cobertura de ramas: 84,32%.
- Cobertura de funciones: 100,00%.
- Cobertura de sentencias: 92,53%.

La interacción fue evaluada mediante mocks de
`prompt()` y `alert()`. Estos resultados no representan
una medición independiente de interacciones reales
en el navegador.

No fue necesario modificar el código de negocio
de `js/script.js`.

**Resultado final de la auditoría de AO3:
PASS — 64/64 tests aprobados, 0 fallidos.**


## Retest — Corrección RC2 de PR #91

Durante la revisión de la Pull Request #91, se solicitó ampliar la Suite 3 (Gestionar carrito) para incluir casos borde y entradas inválidas.

Se utilizó GitHub Copilot Agent con `js/script.js` como contexto para revisar y ampliar `js/test/script.spec.js`, incorporando seis pruebas adicionales sin modificar el código de negocio.

Los nuevos casos verifican cantidades inválidas (cero, negativas, decimales y no numéricas), productos o talles vacíos, carritos inválidos y operaciones sobre elementos inexistentes. También se documentó el comportamiento de `agregarAlCarrito()` respecto de productos que no pertenecen al catálogo.

### Resultados del retest

- Framework: Jasmine 5.1.1.
- Suites ejecutadas: 4.
- Tests ejecutados: 22.
- Tests aprobados: 22.
- Tests fallidos: 0.
- Resultado: PASS.
- Ejecución: navegador Chrome mediante servidor local y Playwright MCP.
- Evidencia manual: `js/test/capturas/jasmine-22-tests-pass.png`.
- Evidencia automatizada: `js/test/capturas/jasmine-playwright-22-tests-pass.png`.



El error HTTP 404 correspondiente a `favicon.ico` no afectó los resultados de Jasmine.

### Validación automatizada mediante Playwright MCP

Se ejecutó nuevamente Jasmine mediante GitHub Copilot Agent y Playwright MCP.

- Suites ejecutadas: 4.
- Tests ejecutados: 22.
- Tests aprobados: 22.
- Tests fallidos: 0.
- Errores de ejecución Jasmine: ninguno.
- Resultado: PASS.

La captura de la ejecución se guardó en
`js/test/capturas/jasmine-playwright-22-tests-pass.png`.

Durante la ejecución se registró una respuesta HTTP 404 para
`/favicon.ico`, sin impacto en los resultados de Jasmine.