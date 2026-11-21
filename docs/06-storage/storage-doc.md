# Documentación de Storage – Tienda Online

**Actividad Obligatoria N°4 – Programación Web I**
**Módulo:** `js/utils/storage.js`
**Autor:** Sebastian Viel (@Zikoloogo) – Desarrollador JS Local y Session Storage

---

## 1. Introducción

El módulo `js/utils/storage.js` es una capa de abstracción sobre `localStorage` y `sessionStorage`. Ofrece operaciones CRUD reutilizables, serialización y deserialización automática de JSON, y manejo de errores centralizado. No accede al DOM ni a eventos: el controlador (`js/script.js`) y las clases del dominio (`js/models/`) lo utilizan sin conocer los detalles de la Storage API.

Se importa como módulo ES6:

```javascript
import StorageUtil from "./utils/storage.js";
```

---

## 2. Qué datos se almacenan

| Dato | Storage | Clave | Justificación |
|---|---|---|---|
| Carrito de compras | `localStorage` | `app:carrito:items` | Debe recuperarse al cerrar y volver a abrir el navegador. |
| Último resumen de compra | `localStorage` | `app:compras:ultimo-resumen` | Permite consultarlo entre sesiones. |
| Caché del catálogo | `localStorage` | `app:catalogo:productos` | Evita reconstruir el catálogo en cada carga. |
| Filtro activo | `sessionStorage` | `app:filtro:activo` | Es estado de navegación, válido solo para la pestaña actual. |
| Último producto consultado | `sessionStorage` | `app:producto:ultimo-consultado` | Es información temporal de la sesión de uso. |
| Resultados de la última búsqueda | `sessionStorage` | `app:cache:resultados` | Es una caché descartable que se recalcula si hace falta. |

Estas claves están disponibles como constantes en `StorageUtil.CLAVES`, para no escribirlas a mano:

```javascript
StorageUtil.CLAVES.CARRITO_ITEMS;            // "app:carrito:items"
StorageUtil.CLAVES.COMPRAS_ULTIMO_RESUMEN;   // "app:compras:ultimo-resumen"
StorageUtil.CLAVES.CATALOGO_PRODUCTOS;       // "app:catalogo:productos"
StorageUtil.CLAVES.FILTRO_ACTIVO;            // "app:filtro:activo"
StorageUtil.CLAVES.PRODUCTO_ULTIMO_CONSULTADO; // "app:producto:ultimo-consultado"
StorageUtil.CLAVES.CACHE_RESULTADOS;         // "app:cache:resultados"
```

---

## 3. Estructura de claves

Formato: `app:<entidad>:<detalle>`, en minúsculas y separado por dos puntos.

- `app:` es el prefijo del proyecto. Evita colisiones con otros datos del mismo origen (por ejemplo, otros proyectos publicados en GitHub Pages).
- `<entidad>` indica el concepto (`carrito`, `compras`, `catalogo`, `filtro`, `producto`, `cache`).
- `<detalle>` precisa qué se guarda dentro de esa entidad.

El prefijo permite listar y limpiar solo los datos del proyecto con `listar("app:")` y `limpiar(tipo, true)`.

---

## 4. Formato de datos (schemas JSON)

Los valores se guardan como cadenas JSON. Los schemas de las clases coinciden con el resultado de sus métodos `toJSON()`.

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
{
  "productos": [
    {
      "nombre": "Remera",
      "categoria": "Indumentaria superior",
      "tipo": "remera",
      "estilo": "casual",
      "talles": ["S", "M", "L"],
      "precio": 15000
    }
  ]
}
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

---

## 5. localStorage vs sessionStorage en el proyecto

| Característica | `localStorage` | `sessionStorage` |
|---|---|---|
| Duración | Persiste hasta que se borre explícitamente. | Se pierde al cerrar la pestaña. |
| Alcance | Compartido entre todas las pestañas del mismo origen. | Propio de cada pestaña. |
| Parámetro `tipo` | `"local"` (valor por defecto) | `"session"` |
| Uso en el proyecto | Carrito, último resumen, caché del catálogo. | Filtro activo, último producto consultado, resultados de búsqueda. |

Criterio: lo que representa datos o intención del usuario y debe sobrevivir al cierre del navegador va en `localStorage`. El estado de navegación temporal va en `sessionStorage`.

---

## 6. API de `StorageUtil`

Todas las funciones aceptan `tipo` (`"local"` por defecto o `"session"`). `limpiar` recibe además un segundo parámetro opcional, `soloProyecto`.

| Función | Retorno | Descripción |
|---|---|---|
| `guardar(clave, valor, tipo)` | `boolean` | Serializa con `JSON.stringify` y guarda. |
| `obtener(clave, tipo)` | `any \| null` | Recupera y deserializa. Devuelve `null` si no existe o los datos están corruptos. |
| `actualizar(clave, valor, tipo)` | `boolean` | Reemplaza una clave existente. Devuelve `false` si la clave no existe. |
| `eliminar(clave, tipo)` | `boolean` | Elimina la clave. |
| `listar(prefijo, tipo)` | `string[]` | Lista las claves que comienzan con el prefijo. |
| `limpiar(tipo, soloProyecto)` | `boolean` | Limpia el storage indicado. Por defecto elimina todos los datos; con `soloProyecto = true` elimina solo las claves con prefijo `app:` y conserva las ajenas al proyecto. |
| `guardarInstancia(clave, instancia, tipo)` | `boolean` | Guarda una instancia usando su `toJSON()`. |
| `cargarInstancia(clave, Clase, tipo)` | `any \| null` | Recupera los datos y reconstruye la instancia con `Clase.fromJSON()`. |

---

## 7. Manejo de errores

- Todas las operaciones usan `try-catch`.
- Las funciones **no lanzan excepciones** al código que las llama: devuelven `false`, `null` o `[]` según corresponda y registran el problema con `console.error`.
- Casos contemplados:
  - Tipo de storage inválido.
  - Clave vacía o no válida.
  - Valor que no se puede serializar.
  - JSON corrupto al deserializar.
  - Storage no disponible (modo privado o bloqueado por el navegador).
  - Almacenamiento lleno (`QuotaExceededError`), con un mensaje específico en el log.
  - `fromJSON()` que falla al reconstruir una instancia.

---

## 8. Ejemplos de uso

**Guardar y recuperar un carrito (persistente)**

```javascript
import StorageUtil from "./utils/storage.js";
import Carrito from "./models/Carrito.js";

const K = StorageUtil.CLAVES;

// Guardar la instancia usando su toJSON()
StorageUtil.guardarInstancia(K.CARRITO_ITEMS, carrito);

// Al volver a abrir la página: reconstruir el carrito
const carritoGuardado = StorageUtil.cargarInstancia(K.CARRITO_ITEMS, Carrito);
const carritoActual = carritoGuardado ?? new Carrito();
```

**Guardar el filtro activo (temporal)**

```javascript
StorageUtil.guardar(K.FILTRO_ACTIVO, { campo: "tipo", valor: "remera" }, "session");

const filtro = StorageUtil.obtener(K.FILTRO_ACTIVO, "session");
if (filtro) {
  // aplicar el filtro recuperado
}
```

**Actualizar y eliminar**

```javascript
StorageUtil.actualizar(K.FILTRO_ACTIVO, { campo: "estilo", valor: "urban" }, "session");
StorageUtil.eliminar(K.FILTRO_ACTIVO, "session");
```

**Listar y limpiar**

```javascript
StorageUtil.listar("app:carrito");   // ["app:carrito:items"]
StorageUtil.limpiar("session");        // limpia todo sessionStorage
StorageUtil.limpiar("local", true);    // borra solo las claves "app:" de localStorage
```

**Comprobar el resultado de una operación**

```javascript
const guardado = StorageUtil.guardar(K.CARRITO_ITEMS, carrito.toJSON());
if (!guardado) {
  // mostrar un mensaje en la interfaz (responsabilidad de js/script.js)
}
```

---

## 9. Integración con otros roles

- **Desarrollador JS POO:** las clases `Producto`, `Catalogo`, `ItemCarrito` y `Carrito` implementan `toJSON()` y `fromJSON()`, que son los métodos que usa la capa de storage.
- **Desarrollador JS Eventos + DOM:** `js/script.js` debe cargarse como módulo (`<script type="module">`) para importar `StorageUtil` y las clases del dominio, y llamar a las funciones de este módulo desde sus manejadores de eventos.
- **Tester QA:** `js/test/storage.spec.js` prueba este módulo. Las funciones devuelven valores de fallo en lugar de lanzar excepciones, por lo que se verifican por su retorno.