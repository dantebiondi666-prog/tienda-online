# Informe de testing — Actividad Obligatoria N.º 4

**Proyecto:** Remer Us — Tienda Online  
**Materia:** Programación Web I

## 1. Alcance de las pruebas

La suite de AO4 verifica el controlador de eventos y DOM, los modelos del dominio, las operaciones de Storage y el servicio de persistencia. En Node, las pruebas del controlador usan JSDOM para cargar el HTML de la aplicación y simular eventos del usuario.

| Suite | Alcance | Pruebas |
|---|---|---:|
| `js/test/script.spec.js` | Eventos y DOM del catálogo, modal, carrito y resumen de compra | 35 |
| `js/test/models.spec.js` | Clases `Producto`, `Catalogo`, `ItemCarrito` y `Carrito` | 63 |
| `js/test/storage.spec.js` | Operaciones de `StorageUtil`, manejo de errores y `PersistenciaService` | 46 |
| **Total en Node** | | **144** |

## 2. Ejecución en Node y cobertura

Desde la raíz del proyecto, en PowerShell:

```powershell
npm.cmd ci
npm.cmd run cobertura -- --seed=67394
```

Jasmine ejecutó **144 pruebas con 0 fallos**. `c8` genera el reporte en la terminal y en `coverage/index.html`. La semilla `67394` reproduce el orden de la ejecución registrada.

| Archivo o conjunto | Sentencias | Ramas | Funciones | Líneas |
|---|---:|---:|---:|---:|
| **Total medido** | **98,04 %** | **96,39 %** | **100 %** | **98,04 %** |
| `js/script.js` | 94,98 % | 88,17 % | 100 % | 94,98 % |
| `js/models/` | 100 % | 100 % | 100 % | 100 % |
| `js/services/PersistenciaService.js` | 100 % | 100 % | 100 % | 100 % |
| `js/utils/storage.js` | 100 % | 98,36 % | 100 % | 100 % |

Los **RC36 y RC37** verifican que un fallo de `console.error` no interrumpa el manejo de errores y que `guardar()` y `actualizar()` rechacen valores que se serializan como `undefined`. En `actualizar()` también se comprueba que el valor previo se conserve.

Los **RC38 al RC41** verifican que el controlador ignore envíos ajenos al formulario de cantidad, clics fuera del botón Eliminar y teclas distintas de Tab en el control del foco. También se prueba que un valor lanzado que no es una instancia de `Error` se vuelva a lanzar sin cambios.

![Jasmine y cobertura en Node — 144 pruebas, 0 fallos](capturas/jasmine-ao4-node.png)

## 3. Ejecución en el navegador

Desde la raíz del proyecto, iniciar el servidor local:

```powershell
npx.cmd --yes http-server . -p 8080 -c-1
```

Abrir `http://127.0.0.1:8080/js/test/test-runner.html?seed=79108`. El runner HTML ejecuta `models.spec.js` y `storage.spec.js`. El resultado fue **109 pruebas con 0 fallos**.

![Jasmine en el navegador — 109 pruebas, 0 fallos](capturas/jasmine-ao4-navegador.png)

## 4. Informe histórico de AO3

El informe de la entrega anterior, incluido su retest, está disponible en el [tag `v1.1-tercera-entrega`](https://github.com/dantebiondi666-prog/tienda-online/blob/v1.1-tercera-entrega/js/test/testing-doc.md).