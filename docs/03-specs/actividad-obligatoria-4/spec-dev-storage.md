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

Requerimientos de `plan.md` que cubre: [COMPLETAR — referenciar los RF/RNF de plan.md relacionados con persistencia del carrito y el estado de la aplicación].

Issue asociada: [#NN](https://github.com/dantebiondi666-prog/tienda-online/issues/NN)

## 3. Criterios de aceptación

- [ ] Funciones CRUD completas en `js/utils/storage.js` (`guardar`, `obtener`, `actualizar`, `eliminar`, `listar`, `limpiar`).
- [ ] Manejo de errores con `try-catch` en todas las operaciones (storage lleno, datos corruptos, storage no disponible).
- [ ] Serialización y deserialización automática de JSON.
- [ ] Funciones auxiliares para guardar y cargar instancias de las clases del dominio.
- [ ] Convención de claves `app:<entidad>:<detalle>` aplicada.
- [ ] Documentación completa en `docs/06-storage/storage-doc.md`.
- [ ] Documentación en el código: JSDoc y ejemplos de uso en comentarios.
- [ ] Sin dependencias del DOM ni de `prompt()`/`alert()`.
- [ ] Interfaz coordinada con POO, Eventos + DOM y Tester QA.
- [ ] Rama `feature/dev-storage` propia, con al menos un commit relevante.
- [ ] PR asociado creado hacia `develop`, usando el template de PR correspondiente.
- [ ] Entrada agregada en `changelog.md` con link a la PR.
- [ ] Issue vinculada a la tarea, cerrada tras el merge.

## 4. Uso de IA en esta tarea

- **Herramienta:** GitHub Copilot en modo Agente (Visual Studio Code).
- **Modelo utilizado:** [COMPLETAR al cerrar]
- **Contexto adjuntado:** las clases de `js/models/` y este spec.
- **Qué se le pidió (resumen):** generar `js/utils/storage.js` con las funciones CRUD, manejo de errores y funciones auxiliares para instancias.
- **Qué se aceptó del resultado y qué se corrigió manualmente:** [COMPLETAR al cerrar]
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

_(Se completa al cerrar la tarea.)_

### 6.1 Prompt exacto utilizado en Copilot Agent

Archivos adjuntados como contexto: [COMPLETAR]

### 6.2 Código generado por Copilot (al menos una función CRUD)

### 6.3 Ajustes manuales realizados para mejorar el manejo de errores

### 6.4 Decisiones finales sobre la estrategia de storage y coordinación con el Desarrollador JS POO

---

*Spec redactada antes de iniciar el desarrollo de esta tarea, conforme a la
metodología definida en `docs/02-prompts/sdd-decisions.md`.*