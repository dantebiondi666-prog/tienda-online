# Spec — Desarrollador JavaScript Local y Session Storage

**Rol:** Desarrollador JavaScript Local y Session Storage
**Proyecto:** Tienda Digital (simulador de e-commerce)
**Entrega:** Actividad Obligatoria N°4
**Autor:** Sebastian Viel (@Zikoloogo)
**Rama:** feature/dev-storage

---

## 1. Qué se va a hacer

Voy a construir la capa de persistencia de la Tienda Digital: el módulo `js/utils/storage.js`, que ofrece funciones CRUD reutilizables sobre `localStorage` y `sessionStorage`, con serialización automática de JSON y manejo de errores con `try-catch`. Además, voy a documentar la estrategia de almacenamiento en `docs/06-storage/storage-doc.md` (qué datos se guardan, estructura de claves, schemas JSON y diferencia entre localStorage y sessionStorage).

El módulo no toca el DOM ni los eventos. Trabaja con las clases del dominio de `js/models/` (`Producto`, `Catalogo`, `ItemCarrito`, `Carrito`) mediante sus métodos `toJSON()` y `fromJSON()`, y queda listo para que Eventos + DOM lo use desde `js/script.js` y para que Tester QA lo pruebe.

## 2. Por qué se hace

La Actividad Obligatoria N°4 exige persistencia de datos con `localStorage` y/o `sessionStorage`, operaciones CRUD y una capa de abstracción en `js/utils/storage.js`.

Requerimientos de `plan.md` con los que se relaciona esta tarea:

- **§15 (Posibles ampliaciones futuras):** menciona la *persistencia del carrito* como ampliación a evaluar. Esta tarea la concreta en la Actividad Obligatoria N.º 4.
- **RF-08 a RF-12:** gestión del carrito y resumen de compra. La capa de storage persiste el estado de esas funcionalidades.
- **RF-13 a RF-16:** filtrado de productos. El filtro activo se conserva en `sessionStorage`.
- **RNF-03 y RNF-04:** evolución progresiva y mantenibilidad. `storage.js` es un módulo independiente, reutilizable y documentado.
- **RNF-05 y RNF-06:** trazabilidad (spec, PR y `changelog.md`) y flujo con ramas `feature` hacia `develop`.
- **CA-08 y CA-09:** el PR referencia este spec y se registra en `changelog.md`.

`plan.md` todavía no incluye un requerimiento de persistencia ni una sección de alcance para la Actividad N.º 4 (la sección 10.3 reservaba la persistencia para entregas posteriores). Se sugiere al Coordinador / DevOps incorporarlos al plan, conforme a la sección 16.

Issue asociada: [#108](https://github.com/dantebiondi666-prog/tienda-online/issues/108)

## 3. Criterios de aceptación

- [x] Funciones CRUD completas en `js/utils/storage.js` (`guardar`, `obtener`, `actualizar`, `eliminar`, `listar`, `limpiar`).
- [x] Manejo de errores con `try-catch` en todas las operaciones (storage lleno, datos corruptos, storage no disponible).
- [x] Serialización y deserialización automática de JSON.
- [x] Funciones auxiliares para guardar y cargar instancias de las clases del dominio.
- [x] Convención de claves `app:<entidad>:<detalle>` aplicada.
- [x] Documentación completa en `docs/06-storage/storage-doc.md`.
- [x] Documentación en el código: JSDoc y ejemplos de uso en comentarios.
- [x] Sin dependencias del DOM ni de `prompt()`/`alert()`.
- [ ] Interfaz coordinada con POO, Eventos + DOM y Tester QA.
- [x] Rama `feature/dev-storage` propia, con al menos un commit relevante.
- [x] PR asociado creado hacia `develop`, usando el template de PR correspondiente.
- [x] Entrada agregada en `changelog.md` con link a la PR.
- [ ] Issue vinculada a la tarea, cerrada tras el merge.

## 4. Uso de IA en esta tarea

- **Herramienta:** GitHub Copilot en modo Agente (Visual Studio Code).
- **Modelo utilizado:** GPT-6 Luna (seleccionado en el chat de Copilot Agent).
- **Contexto adjuntado:** `js/models/Producto.js`, `Catalogo.js`, `ItemCarrito.js`, `Carrito.js` y `spec-dev-storage.md`.
- **Qué se le pidió (resumen):** generar `js/utils/storage.js` con las funciones CRUD, manejo de errores y funciones auxiliares para instancias.
- **Qué se aceptó del resultado y qué se corrigió manualmente:** se aceptó la estructura completa de `storage.js` (API, validaciones, serialización, funciones de instancias). Se corrigió manualmente el registro del error de almacenamiento lleno, el prefijo del proyecto como constante, el comportamiento de `limpiar()` y la documentación del módulo (ver 6.3).
- **Prompt documentado en:** la sección 6 de este spec (el prompt exacto, en bloque de código).

## 5. Diseño previo (BEFORE)

Esta sección se commitea antes de abrir Copilot o escribir código.

### 5.1 Estrategia de almacenamiento

| Dato | Almacenamiento | Justificación |
|---|---|---|
| Carrito de compras | `localStorage` | El usuario espera recuperar su carrito al cerrar y volver a abrir el navegador. |
| Último resumen de compra | `localStorage` | Permite consultarlo entre sesiones. |
| Caché del catálogo | `localStorage` | Evita reconstruir el catálogo en cada carga. Cambia poco. |
| Filtro activo (campo y valor) | `sessionStorage` | Es un estado de navegación válido solo para la pestaña actual. |
| Último producto consultado | `sessionStorage` | Es información temporal de la sesión de uso. |
| Resultados de la última búsqueda | `sessionStorage` | Es una caché descartable que se recalcula si hace falta. |

Criterio general: lo que representa **intención o datos del usuario** y debe sobrevivir al cierre del navegador va en `localStorage`. Lo que es **estado de navegación temporal** va en `sessionStorage`.

### 5.2 Convención de nombres de claves

Formato: `app:<entidad>:<detalle>`, todo en minúsculas y separado por dos puntos. El prefijo `app:` identifica las claves del proyecto y evita colisiones con otros datos del mismo origen (por ejemplo, otros proyectos en GitHub Pages).

| Clave | Tipo | Contenido |
|---|---|---|
| `app:carrito:items` | local | Carrito serializado |
| `app:compras:ultimo-resumen` | local | Resumen de la última compra |
| `app:catalogo:productos` | local | Catálogo serializado |
| `app:filtro:activo` | session | Filtro aplicado |
| `app:producto:ultimo-consultado` | session | Producto consultado |
| `app:cache:resultados` | session | Resultados de la última búsqueda |

### 5.3 Schemas JSON

Los valores se guardan como cadenas JSON. Los schemas coinciden con lo que devuelve `toJSON()` en las clases del dominio.

**`app:carrito:items`** (`Carrito.toJSON()`)

```json
{
  "items": [
    {
      "producto": {
        "nombre": "Remera",
        "categoria": "Indumentaria superior",
        "tipo": "remera",
        "estilo": "casual",
        "talles": ["S", "M", "L"],
        "precio": 15000
      },
      "talle": "M",
      "cantidad": 2,
      "precio": 15000
    }
  ]
}
```

**`app:catalogo:productos`** (`Catalogo.toJSON()`)

```json
{ "productos": [ { "nombre": "Remera", "categoria": "Indumentaria superior", "tipo": "remera", "estilo": "casual", "talles": ["S", "M", "L"], "precio": 15000 } ] }
```

**`app:compras:ultimo-resumen`** (`Carrito.generarResumenCompra()`)

```json
{
  "productos": [
    { "producto": "Remera", "talle": "M", "cantidad": 2, "subtotal": 30000 }
  ],
  "total": 30000
}
```

**`app:filtro:activo`**

```json
{ "campo": "categoria", "valor": "Abrigo" }
```

**`app:producto:ultimo-consultado`**

```json
{ "nombre": "Remera" }
```

**`app:cache:resultados`**

```json
{ "campo": "estilo", "valor": "casual", "nombres": ["Remera", "Pantalón"] }
```

### 5.4 Diseño de la API (`js/utils/storage.js`)

Se exporta un objeto `StorageUtil` como módulo ES6 (`export default StorageUtil`). El parámetro `tipo` acepta `'local'` (por defecto) o `'session'`.

| Función | Retorno | Comportamiento |
|---|---|---|
| `guardar(clave, valor, tipo)` | `boolean` | Serializa con `JSON.stringify` y guarda. Devuelve `false` si falla. |
| `obtener(clave, tipo)` | `any \| null` | Recupera y deserializa. Devuelve `null` si no existe o si los datos están corruptos. |
| `actualizar(clave, valor, tipo)` | `boolean` | Actualiza una clave existente. Devuelve `false` si la clave no existe. |
| `eliminar(clave, tipo)` | `boolean` | Elimina la clave. |
| `listar(prefijo, tipo)` | `string[]` | Lista las claves que comienzan con el prefijo. |
| `limpiar(tipo)` | `boolean` | Elimina las claves del proyecto (prefijo `app:`). |

Funciones auxiliares para instancias de clases (sin importar los modelos, para mantener la capa desacoplada):

| Función | Comportamiento |
|---|---|
| `guardarInstancia(clave, instancia, tipo)` | Guarda una instancia usando su `toJSON()`. |
| `cargarInstancia(clave, Clase, tipo)` | Recupera los datos y reconstruye la instancia con `Clase.fromJSON()`. Devuelve `null` si no hay datos o son inválidos. |

### 5.5 Manejo de errores

- Todas las operaciones están envueltas en `try-catch`.
- Se contemplan: almacenamiento lleno (`QuotaExceededError`), JSON corrupto al deserializar, almacenamiento no disponible (modo privado o bloqueado), `tipo` inválido, clave vacía o no válida.
- La capa **no lanza excepciones** al controlador: devuelve `false` o `null` y registra el error con `console.error`.
- Si `fromJSON()` lanza un error al reconstruir una instancia, se captura y se devuelve `null`.

### 5.6 Decisiones de arquitectura y coordinación

- **`limpiar()` borra solo las claves con prefijo `app:`** y no todo el storage, para no eliminar datos ajenos al proyecto en el mismo origen.
- La capa no importa las clases del dominio. El llamador pasa la clase a `cargarInstancia()`.
- Sin acceso al DOM ni a eventos. Esa integración corresponde al Desarrollador JS Eventos + DOM.
- Los modelos usan `export default` y campos privados. El Desarrollador JS Eventos + DOM debe cargar los scripts como módulos (`type="module"` en `index.html`) para poder importar `StorageUtil` y las clases.
- Coordinación con el Desarrollador JS POO: se usa el formato de `toJSON()`/`fromJSON()` ya implementado.
- Coordinación con el Desarrollador JS Eventos + DOM: se comparten los nombres de claves y la firma de las funciones definidos en este documento.

## 6. AT CLOSE – Evidencia del desarrollo

### 6.1 Prompt exacto utilizado en Copilot Agent

Se utilizó GitHub Copilot en modo Agent dentro de Visual Studio Code, con el modelo GPT-6 Luna.

Archivos adjuntados como contexto:

- `js/models/Producto.js`
- `js/models/Catalogo.js`
- `js/models/ItemCarrito.js`
- `js/models/Carrito.js`
- `docs/03-specs/actividad-obligatoria-4/spec-dev-storage.md`

Prompt completo:

```text
Actuá como desarrollador JavaScript especializado en persistencia de datos en el navegador.

Estoy trabajando en la Actividad Obligatoria N.º 4 de Programación Web I, en el proyecto de tienda online.

Mi rol es Desarrollador JS Local y Session Storage.

CONTEXTO:
Revisá los archivos adjuntos:
- js/models/Producto.js
- js/models/Catalogo.js
- js/models/ItemCarrito.js
- js/models/Carrito.js
- docs/03-specs/actividad-obligatoria-4/spec-dev-storage.md

OBJETIVO:
Crear el archivo js/utils/storage.js con una capa de abstracción para localStorage y sessionStorage, siguiendo la estrategia, la convención de claves, los schemas y la API definidos en el spec.

REQUISITOS:

1. Crear la carpeta js/utils/ si todavía no existe.

2. Exportar un objeto StorageUtil como módulo ES6 (export default StorageUtil). El parámetro tipo acepta 'local' (valor por defecto) o 'session'.

3. Implementar estas funciones:
- guardar(clave, valor, tipo): serializa con JSON.stringify y guarda. Devuelve true si se guardó, false si falló.
- obtener(clave, tipo): recupera y deserializa con JSON.parse. Devuelve null si la clave no existe o si los datos están corruptos.
- actualizar(clave, valor, tipo): actualiza una clave existente. Devuelve false si la clave no existe.
- eliminar(clave, tipo): elimina la clave. Devuelve true si la operación fue correcta.
- listar(prefijo, tipo): devuelve un array con las claves que comienzan con el prefijo (por defecto, todas).
- limpiar(tipo): elimina únicamente las claves del proyecto que comienzan con el prefijo "app:". No debe borrar otras claves del storage.
- guardarInstancia(clave, instancia, tipo): guarda una instancia usando su método toJSON().
- cargarInstancia(clave, Clase, tipo): recupera los datos y reconstruye la instancia con Clase.fromJSON(). Devuelve null si no hay datos o si fromJSON() falla.

4. Manejo de errores:
- Usar try-catch en TODAS las operaciones.
- Contemplar storage lleno (QuotaExceededError), JSON corrupto, storage no disponible (modo privado o bloqueado), tipo inválido y clave vacía o no válida.
- Las funciones no deben lanzar excepciones hacia afuera: devuelven false o null y registran el problema con console.error.

5. Convención de claves: app:<entidad>:<detalle>, por ejemplo app:carrito:items. Definir las claves del proyecto como constantes dentro del módulo (CLAVES) según la tabla del spec, para que otros módulos no escriban los nombres a mano.

6. storage.js no debe importar las clases de js/models/. La clase se recibe como parámetro en cargarInstancia().

7. No utilizar document, prompt(), alert(), eventos ni manipulación del DOM.

8. Documentar cada función con JSDoc (@param, @returns) e incluir al menos un ejemplo de uso en los comentarios.

9. Usar nomenclatura camelCase y código legible, de forma que pueda probarse con Jasmine.

10. No modificar ningún otro archivo del repositorio (ni js/models/, ni js/script.js, ni index.html, ni tests, ni documentación).

IMPORTANTE:
Modificá únicamente js/utils/storage.js.

Antes de escribir código, explicá brevemente tu diseño: cómo resolvés la validación del tipo, la serialización y el manejo de errores.

Después generá el archivo y mostrame un resumen de las decisiones tomadas.
```

### 6.2 Código generado por Copilot

Copilot generó `js/utils/storage.js` como único archivo, con el objeto `StorageUtil` y las funciones `guardar`, `obtener`, `actualizar`, `eliminar`, `listar`, `limpiar`, `guardarInstancia` y `cargarInstancia`, además de las constantes `CLAVES` y funciones auxiliares internas (`obtenerStorage`, `validarClave`, `registrarError`).

Fragmento de la función CRUD `guardar`, tal como fue generada:

```javascript
guardar(clave, valor, tipo = "local") {
  try {
    validarClave(clave);
    const storage = obtenerStorage(tipo);
    const valorSerializado = JSON.stringify(valor);
    if (valorSerializado === undefined) {
      throw new Error("El valor no se puede serializar como JSON.");
    }

    storage.setItem(clave, valorSerializado);
    return true;
  } catch (error) {
    registrarError("guardar", error);
    return false;
  }
},
```

La función valida la clave y el tipo de storage antes de operar, serializa el valor a JSON, rechaza los valores que no se pueden serializar y captura cualquier error sin propagarlo: devuelve `false` y registra el problema con `console.error`.

### 6.3 Ajustes manuales realizados para mejorar el manejo de errores

1. **Mensaje específico para almacenamiento lleno.** El código generado registraba cualquier error con el mismo formato, por lo que un `QuotaExceededError` se confundía con un error genérico. Se agregó la función `esErrorDeCuota(error)` y se modificó `registrarError()` para que, cuando el almacenamiento está lleno, registre el mensaje "Almacenamiento lleno: no hay espacio disponible." (también contempla el nombre `NS_ERROR_DOM_QUOTA_REACHED` de Firefox).
2. **Prefijo del proyecto como constante.** `limpiar()` comparaba contra el texto `"app:"` escrito a mano. Se definió `PREFIJO_PROYECTO` para evitar errores de tipeo y centralizar el valor.
3. **`limpiar()` alineado con la consigna.** En el diseño previo (5.4 y 5.6) y en el prompt, `limpiar()` borraba solo las claves `app:`. La consigna indica que `limpiar(tipo)` limpia todo el storage, por lo que se modificó: por defecto ejecuta `storage.clear()` y se agregó el parámetro opcional `soloProyecto` (`limpiar(tipo, soloProyecto = false)`), que con `true` conserva el comportamiento selectivo y protege las claves de otros proyectos del mismo origen.
4. **Documentación del módulo.** Se agregó un comentario de cabecera con un ejemplo de uso y se completaron los `@example` de las funciones que no lo tenían, como exige la consigna.

Verificaciones realizadas:

- Copilot ejecutó pruebas aisladas de CRUD, instancias, datos corruptos, tipo inválido y limpieza selectiva. No pudo ejecutar Jasmine porque el ejecutable no está instalado; esas pruebas corresponden al Tester QA.
- Se hizo una prueba manual en el navegador con un servidor local (`python -m http.server`) y una página temporal que importaba `StorageUtil`, `Carrito` y `Producto`: 18 verificaciones, todas correctas. Cubrieron CRUD en `localStorage` y `sessionStorage`, aislamiento entre ambos, tipo inválido, clave vacía, JSON corrupto, `guardarInstancia`/`cargarInstancia` con un `Carrito` (el total se conservó en 30000) y que `limpiar()` respeta las claves ajenas al proyecto. La página temporal se eliminó y no forma parte del PR.

### 6.4 Decisiones finales sobre la estrategia de storage y coordinación con el Desarrollador JS POO

- **Estrategia:** `localStorage` para los datos que deben sobrevivir al cierre del navegador (carrito, último resumen de compra, caché del catálogo) y `sessionStorage` para el estado de navegación temporal (filtro activo, último producto consultado, resultados de búsqueda). Se mantuvo lo definido en la sección 5.1.
- **Serialización con POO:** `storage.js` no importa las clases del dominio. Usa los métodos `toJSON()` y `fromJSON()` que implementó el Desarrollador JS POO en `Producto`, `Catalogo`, `ItemCarrito` y `Carrito`. `guardarInstancia()` llama a `toJSON()` de la instancia y `cargarInstancia()` recibe la clase como parámetro y llama a `Clase.fromJSON()`. Los schemas guardados coinciden con lo que devuelven esos métodos.
- **Errores:** la capa no lanza excepciones; devuelve `false`, `null` o `[]` y registra con `console.error`, para que el controlador decida cómo informar al usuario.
- **`limpiar()`:** por defecto limpia todo el storage indicado, como pide la consigna. El parámetro opcional `soloProyecto = true` elimina únicamente las claves con prefijo `app:`, para no borrar datos ajenos al proyecto en el mismo origen (por ejemplo, otros proyectos en GitHub Pages). Esto ajusta lo previsto en 5.4 y 5.6.
- **Coordinación con Eventos + DOM:** los modelos usan `export default` y campos privados, por lo que `index.html` debe cargar `js/script.js` con `type="module"` para importar `StorageUtil` y las clases. Los nombres de claves quedan disponibles en `StorageUtil.CLAVES`.
- **Coordinación con Tester QA:** las funciones devuelven valores de fallo en lugar de lanzar, por lo que `storage.spec.js` puede verificarlas por su retorno.

---

*Spec redactada antes de iniciar el desarrollo de esta tarea, conforme a la
metodología definida en `docs/02-prompts/sdd-decisions.md`.*