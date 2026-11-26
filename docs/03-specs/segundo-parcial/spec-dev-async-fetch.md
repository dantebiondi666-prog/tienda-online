# Especificación técnica — Desarrollador JS Asíncrono - Fetch & APIs

**Actividad:** Segundo Parcial  
**Rol:** Desarrollador JS Asíncrono - Fetch & APIs  
**Responsable:** Dante Biondi (`@dantebiondi666-prog`)  
**Rama:** `feature/dev-async-fetch-api`  
**Issue asociada:** #135  

---

## 1. Objetivo

Implementar la carga asíncrona del catálogo de productos de Remer Us mediante Fetch y JSON, integrando los datos obtenidos con las clases del dominio, la manipulación del DOM y el sistema de persistencia desarrollado en la Actividad Obligatoria N.º 4.

Se mantendrán las funcionalidades existentes de búsqueda, filtrado, consulta de productos, gestión del carrito y resumen de compra.

---

# BEFORE

## 2. Estado inicial

Actualmente, los datos del catálogo se encuentran definidos en `js/data/productos.js` y son importados directamente desde `js/script.js`.

El controlador utiliza estos datos para construir una instancia de `Catalogo` y generar dinámicamente las opciones de filtrado, las tarjetas de productos y el carrusel.

La obtención de los datos se realiza de forma síncrona, sin peticiones HTTP ni estados de carga asociados.

El carrito y los filtros utilizan `PersistenciaService` para gestionar su almacenamiento mediante localStorage y sessionStorage.

## 3. Selección y justificación de la fuente de datos

Se utilizará un archivo JSON estático ubicado en `api/productos.json`, que será consumido de forma asíncrona mediante Fetch.

Se selecciona esta alternativa debido a que el proyecto ya cuenta con un catálogo de productos definido, con sus correspondientes nombres, categorías, tipos, estilos, talles, precios e imágenes.

Utilizar una API externa supondría adaptar datos de terceros a la estructura actual del proyecto, pudiendo generar modificaciones innecesarias sobre las funcionalidades ya implementadas.

La utilización de un JSON local permitirá:

- Mantener los productos y características del catálogo existente.
- Controlar la estructura y disponibilidad de los datos.
- Evitar dependencias de servicios externos y credenciales de acceso.
- Mantener la compatibilidad con GitHub Pages.
- Implementar peticiones asíncronas mediante Fetch y promesas.

El archivo JSON reemplazará a `js/data/productos.js` como fuente de datos del catálogo, evitando mantener dos fuentes de información duplicadas.

## 4. Estructura de los datos

El archivo JSON contendrá un array de objetos. Cada objeto representará un producto y mantendrá la estructura utilizada actualmente por el proyecto.

| Campo | Tipo | Descripción |
|---|---|---|
| nombre | string | Nombre del producto. |
| categoria | string | Categoría a la que pertenece. |
| tipo | string | Tipo de prenda. |
| estilo | string | Estilo de la prenda. |
| talles | array de strings | Talles disponibles. |
| precio | number | Precio unitario. |
| imagen.id | string | Identificador utilizado en el DOM. |
| imagen.src | string | Ruta de la imagen. |
| imagen.alt | string | Descripción alternativa de la imagen. |

Se conservarán los datos de los tres productos existentes: Remera, Pantalón y Campera.

## 5. Arquitectura propuesta

Se creará el módulo `js/api/apiService.js`, encargado de gestionar la obtención asíncrona y el procesamiento inicial de los datos.

### apiService.js

Responsable de:

- Realizar la petición HTTP mediante `fetch()`.
- Utilizar promesas mediante async/await.
- Verificar el estado de la respuesta mediante `response.ok`.
- Convertir la respuesta a JSON.
- Validar y sanitizar los datos recibidos.
- Procesar la colección de productos.
- Comunicar los errores al controlador.

Las funciones del módulo deberán contar con documentación JSDoc y podrán ser utilizadas de forma independiente por las suites de testing.

### script.js

Continuará funcionando como controlador principal de eventos y DOM.

Será responsable de:

- Solicitar los datos al servicio de API durante la inicialización.
- Gestionar los estados visuales de carga, éxito y error.
- Construir el catálogo con los datos obtenidos.
- Inicializar las opciones de filtrado.
- Renderizar el catálogo y el carrusel.
- Mantener el funcionamiento de los eventos existentes.

La lógica de las peticiones HTTP no se implementará directamente en el controlador.

### Clases del dominio

Se reutilizarán las clases existentes, principalmente `Catalogo` y `Producto`, para representar los datos obtenidos desde el archivo JSON.

No se duplicarán las validaciones ni las reglas de negocio implementadas en las clases del dominio.

### Persistencia

Se conservará el funcionamiento de `PersistenciaService` para recuperar y almacenar el carrito y los filtros.

La carga asíncrona del catálogo no deberá eliminar ni sobrescribir los datos previamente almacenados por el usuario.

No se incorporará almacenamiento adicional del catálogo salvo que exista una necesidad técnica que lo justifique.

## 6. Flujo de inicialización asíncrona

La inicialización de la aplicación seguirá el siguiente esquema:

1. Esperar la carga del DOM mediante DOMContentLoaded.
2. Mostrar el estado de carga del catálogo.
3. Solicitar los datos mediante el servicio de API.
4. Verificar la respuesta HTTP y convertirla a JSON.
5. Validar, sanitizar y procesar los datos obtenidos.
6. Construir una instancia de Catalogo.
7. Inicializar las opciones de filtrado y recuperar el filtro persistido.
8. Renderizar el catálogo y el carrusel.
9. Mostrar el resultado de la carga.
10. Mantener la gestión de eventos y la persistencia del carrito.

El carrito persistido deberá poder recuperarse independientemente de que la petición del catálogo sea exitosa.

## 7. Estados de carga

Se contemplarán tres estados principales durante la obtención de los productos.

| Estado | Comportamiento esperado |
|---|---|
| Loading | Mostrar un indicador o mensaje de carga mientras se realiza la petición. Evitar interacciones que requieran un catálogo todavía no disponible. |
| Success | Ocultar el indicador de carga, renderizar los productos obtenidos y habilitar las interacciones correspondientes. |
| Error | Ocultar el indicador de carga y mostrar un mensaje comprensible para el usuario, sin interrumpir las funcionalidades independientes del catálogo. |

Los mensajes deberán mantener la consistencia visual de la interfaz existente y contemplar su accesibilidad.

No se utilizarán `prompt()` ni `alert()` como mecanismos de interacción.

## 8. Procesamiento de datos

Se utilizarán funciones de orden superior para procesar las colecciones obtenidas.

### map()

Se utilizará para transformar y normalizar los objetos recibidos desde el JSON, adaptándolos a la estructura utilizada por la aplicación.

### filter()

Se utilizará para seleccionar los registros que cumplan las condiciones de validación establecidas, evitando incorporar productos con datos inválidos al catálogo.

### reduce()

Se utilizará para construir el mapa de imágenes asociado a los productos, permitiendo consultar la información visual correspondiente a cada uno de ellos.

Estas funciones se aplicarán sobre necesidades concretas del procesamiento de datos, evitando duplicar las operaciones ya implementadas en las clases del dominio.

## 9. Validación y sanitización de datos

Se verificará que la respuesta contenga un array de productos y que cada registro cumpla las condiciones necesarias para ser utilizado por la aplicación.

Se contemplarán las siguientes validaciones:

- Existencia de los campos requeridos.
- Tipos de datos correspondientes a cada campo.
- Campos de texto no vacíos.
- Precios numéricos, finitos y mayores o iguales a cero.
- Talles disponibles representados mediante un array válido.
- Información de imagen completa y rutas compatibles con los recursos del proyecto.
- Identificadores y nombres de productos que no generen conflictos durante la renderización.

Los campos de texto serán normalizados mediante la eliminación de espacios innecesarios.

Los datos serán incorporados al DOM mediante los métodos utilizados actualmente, como `textContent` y `createElement()`, evitando insertar directamente contenido HTML obtenido de la fuente de datos.

Los registros inválidos serán descartados. Si no existen productos válidos o la estructura general de la respuesta es incorrecta, se informará el error correspondiente.

## 10. Manejo de errores

Las operaciones asíncronas utilizarán bloques try/catch para gestionar posibles errores.

Se contemplarán los siguientes escenarios:

- Error de red.
- Respuesta HTTP no exitosa.
- JSON inválido.
- Estructura de datos incorrecta.
- Ausencia de productos válidos.

Ante un error, se mostrará un mensaje amigable en la interfaz y se finalizará el estado de carga.

Al utilizar un archivo JSON local, no se considera necesario implementar reintentos automáticos. El usuario podrá volver a intentar la carga mediante una recarga de la página.

Los errores no deberán generar excepciones asíncronas sin gestionar ni afectar los datos persistidos del carrito.

## 11. Coordinación con otros roles

### Tester QA/JS

Se coordinarán los casos de prueba correspondientes a:

- Obtención exitosa de los datos.
- Errores HTTP.
- Errores de red.
- Respuestas JSON inválidas.
- Validación y procesamiento de productos.
- Funcionamiento de map(), filter() y reduce().
- Integración de los datos con el DOM.
- Estados de carga, éxito y error.
- Conservación de las funcionalidades existentes.

Se informará al Tester QA/JS sobre los cambios en la inicialización de la aplicación para que pueda adaptar las pruebas existentes de `script.spec.js`.

La feature no se integrará a develop hasta que se haya realizado la auditoría Lighthouse inicial.

### Desarrollador JS Librerías Externas

Se coordinará la integración de AOS sobre los elementos del catálogo generados dinámicamente.

La incorporación y configuración de la librería externa no forman parte de las responsabilidades de este rol.

## 12. Archivos involucrados

### Archivos nuevos

- `api/productos.json`
- `js/api/apiService.js`

### Archivos existentes

- `js/script.js`
- `index.html`
- `js/data/productos.js` (será reemplazado por la fuente JSON).
- `changelog.md`

Se realizarán únicamente las modificaciones necesarias para implementar la carga asíncrona y conservar las funcionalidades existentes.

## 13. Criterios de aceptación

- [ ] Se selecciona y justifica la fuente de datos.
- [ ] Se crea el archivo `api/productos.json` con los datos del catálogo existente.
- [ ] Los datos del catálogo se obtienen de forma asíncrona mediante Fetch.
- [ ] Se utilizan promesas mediante async/await.
- [ ] Se verifica el estado HTTP de la respuesta.
- [ ] Se implementa el manejo de errores mediante try/catch.
- [ ] Se muestran los estados de carga, éxito y error en la interfaz.
- [ ] Se aplican las funciones de orden superior map(), filter() y reduce().
- [ ] Se validan y sanitizan los datos obtenidos.
- [ ] Se mantiene la separación de responsabilidades mediante un módulo de API.
- [ ] Se documentan las funciones correspondientes mediante JSDoc.
- [ ] Los datos obtenidos se integran con las clases POO existentes.
- [ ] El catálogo y el carrusel se renderizan dinámicamente.
- [ ] Se mantienen las funcionalidades de búsqueda, filtrado y consulta de productos.
- [ ] Se mantiene el funcionamiento del carrito y del resumen de compra.
- [ ] Se conserva la persistencia del carrito y los filtros.
- [ ] Se coordinan los casos de prueba con el Tester QA/JS.
- [ ] Se responden y resuelven las issues correspondientes al rol, si se reportan.
- [ ] Se documenta el uso de IA y los ajustes manuales realizados.
- [ ] Se crea la Pull Request hacia develop y se registra en changelog.md.

## 14. Uso previsto de IA

Se utilizará inteligencia artificial como herramienta de asistencia para analizar la arquitectura existente, implementar el módulo de consumo asíncrono, revisar el manejo de errores y verificar la integración con las funcionalidades desarrolladas anteriormente.

Las propuestas generadas serán revisadas y verificadas antes de incorporarlas al proyecto, tomando como referencia esta especificación técnica y los requerimientos del Segundo Parcial.

Los prompts utilizados, las respuestas obtenidas, los ajustes manuales y los resultados de la implementación se documentarán en la sección AFTER.

---

# AFTER

Pendiente de completar una vez finalizada la implementación.