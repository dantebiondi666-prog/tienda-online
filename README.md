# Remer Us

Proyecto de e-commerce de ropa (repositorio `tienda-online`), desarrollado como parte de las actividades de Programación Web I.

## Objetivos del proyecto

Ofrecer una experiencia simple para consultar prendas, comparar sus características y preparar una compra simulada. El proyecto sirve como base escalable para aplicar HTML5, CSS, JavaScript, accesibilidad, documentación técnica y trabajo colaborativo con GitHub a lo largo de la cursada.

## Tecnologías utilizadas

- HTML5
- CSS (sistema de diseño y estilos propios desde la Actividad Obligatoria N°2)
- Bootstrap 5 (grilla de 12 columnas y componentes, vía CDN jsDelivr)
- JavaScript (lógica de negocio y simulación mediante prompt/alert en la Actividad Obligatoria N.º 3; en la N.º 4, interfaz interactiva con DOM y eventos, clases ES6 y almacenamiento en el navegador)
- Programación Orientada a Objetos con clases ES6 y atributos privados (`js/models/`, Actividad Obligatoria N.º 4)
- Web Storage API (`localStorage` y `sessionStorage`) mediante una capa de abstracción propia (`js/utils/storage.js`, Actividad Obligatoria N.º 4)
- Git y GitHub (control de versiones y flujo colaborativo)
- GitHub Projects (tablero Kanban del equipo)
- Figma / FigJam (diseño de mockups)
- GitHub Copilot (asistencia de IA en modo Agente)
- Jasmine (testing automatizado de la lógica JavaScript)
- c8 (medición de cobertura de los tests)
- Playwright MCP (ejecución de las suites de Jasmine en un navegador real)
- PlantUML (diagramas de actividades y diagrama de clases)
- Fetch API y programación asíncrona mediante Promises y async/await (Segundo Parcial).
- JSON como fuente de datos para la carga dinámica del catálogo (Segundo Parcial).
- AOS (Animate On Scroll) 2.3.4 mediante CDN jsDelivr, encapsulada en un módulo wrapper (Segundo Parcial).
- Lighthouse (auditorías de rendimiento, accesibilidad, buenas prácticas y SEO).
- ChatGPT (asistencia de IA para revisiones de código y coordinación técnica).

Fetch y AOS ya se integraron en `develop`. Las correcciones de Lighthouse se incorporaron a la rama del Coordinador/DevOps; el testing avanzado y la validación final del Segundo Parcial siguen pendientes de integración.

## Funcionalidades previstas

- Catálogo de prendas agrupadas por categoría, con nombre, imagen, talle y precio
- Consulta del detalle de cada prenda
- Selección de talle disponible
- Filtrado de productos por tipo de prenda, talle y estilo
- Carrito de compras simulado, con resumen y cálculo de totales
- Formulario de contacto
- Interfaz interactiva sin `prompt()` ni `alert()`: los cuatro flujos se utilizan desde la página (Actividad Obligatoria N.º 4)
- Persistencia de datos en el navegador mediante `localStorage` y `sessionStorage` (Actividad Obligatoria N.º 4)

## Maqueta de diseño web

El mockup de la página principal fue diseñado en Figma, siguiendo lineamientos de diseño limpio, paleta clara y reducida, y jerarquía visual clara entre navegación, catálogo y acciones. En el Primer Parcial se actualizó para reflejar la migración a Bootstrap: grilla de 12 columnas, navbar, carrusel en las imágenes de las prendas, modal de detalle y barra lateral colapsable de filtros.

## Arquitectura histórica del código (Actividad Obligatoria N.º 4)

```text
js/
├── script.js                # Controlador principal: eventos y DOM
├── data/
│   └── productos.js         # Datos del catálogo de productos
├── models/
│   ├── Producto.js          # Representación de productos
│   ├── Catalogo.js          # Búsqueda y filtrado
│   ├── ItemCarrito.js       # Ítems y validación de cantidades
│   └── Carrito.js           # Gestión del carrito de compras
├── services/
│   └── PersistenciaService.js # Gestión de la persistencia
├── utils/
│   └── storage.js           # Abstracción de Web Storage
└── test/                    # Suites de Jasmine y documentación
```

## Documentación

- Descripción del proyecto: e-commerce de ropa que evoluciona por entregas: estructura semántica en HTML5 (Actividad Obligatoria N°1), estilos CSS, diseño responsive y QA automatizado (Actividad Obligatoria N°2), migración a Bootstrap con componentes avanzados (Primer Parcial), lógica de negocio con JavaScript, diagramas de actividades y testing con Jasmine (Actividad Obligatoria N.º 3) y aplicación interactiva con DOM y eventos, programación orientada a objetos, almacenamiento persistente y testing por módulo (Actividad Obligatoria N.º 4).
- Objetivo de la Actividad Obligatoria N°1: construir la estructura base del sitio (index.html) y su documentación asociada (README, mockup, specs).
- Objetivo de la Actividad Obligatoria N°2: incorporar estilos visuales mediante CSS, diseño responsive y un proceso de QA asistido por herramientas de automatización.
- Objetivo de la Actividad Obligatoria N.º 3: incorporar la lógica de negocio fundamental mediante JavaScript, modelando cuatro flujos principales con diagramas de actividades y validándolos mediante testing automatizado con Jasmine.
- Objetivo de la Actividad Obligatoria N.º 4: transformar el simulador basado en `prompt()` y `alert()` en una aplicación web interactiva, aplicando manipulación del DOM y eventos, programación orientada a objetos con clases en `js/models/`, almacenamiento persistente con una capa de abstracción en `js/utils/storage.js` y testing automatizado por módulo con Jasmine.
- Mockup Actividad N°1: [docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png](docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png) — [versión online en Figma](https://www.figma.com/board/boi5W7q2aUFtEtuo8al7dY/E-commerce-dise%C3%B1o-inicial?node-id=11-29&t=T4j3hsvIoAFLkWTN-1)
- Mockup Actividad N°2 (con sistema de diseño aplicado): [docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png](docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png) — [versión online en Figma](https://www.figma.com/board/boi5W7q2aUFtEtuo8al7dY/E-commerce-dise%C3%B1o-inicial?node-id=11-29&t=T4j3hsvIoAFLkWTN-1)
- Mockup Primer Parcial (Bootstrap): [docs/01-mockup/primer-parcial/disenio-bootstrap.png](docs/01-mockup/primer-parcial/disenio-bootstrap.png) — [versión online en FigJam](https://www.figma.com/board/boi5W7q2aUFtEtuo8al7dY/E-commerce-dise%C3%B1o-inicial?node-id=0-1)
- Mockup Actividad Obligatoria N.º 4 (resumen de compra y estados vacío, éxito y error): [Ver diseño](docs/01-mockup/actividad-obligatoria-4/resumen-compra-estados.png).
- Mockup Actividad Obligatoria N.º 4 (carrusel de productos destacados): [Ver diseño](docs/01-mockup/actividad-obligatoria-4/carrusel-destacados.png).
- Mockup Actividad Obligatoria N.º 4 (carrito y sus controles): [Ver diseño](docs/01-mockup/actividad-obligatoria-4/carrito-controles.png).
- Índice de testing HTML/CSS y entregas anteriores: [docs/04-testing/testing-doc.md](docs/04-testing/testing-doc.md)
- Controlador de la Actividad Obligatoria N.º 4: [js/script.js](js/script.js)
- Clases del dominio: [js/models/](js/models/)
- Capa de almacenamiento: [js/utils/storage.js](js/utils/storage.js) — documentación en [docs/06-storage/storage-doc.md](docs/06-storage/storage-doc.md)
- Diagramas de actividades de la Actividad Obligatoria N.º 3: [docs/05-diagramas/01-diagrama-de-actividades/diagramas-doc.md](docs/05-diagramas/01-diagrama-de-actividades/diagramas-doc.md)
- Diagrama de clases de la Actividad Obligatoria N.º 4: [docs/05-diagramas/02-diagrama-de-clases/diagrama-clases-doc.md](docs/05-diagramas/02-diagrama-de-clases/diagrama-clases-doc.md)
- Testing JavaScript con Jasmine (Actividades N.º 3 y N.º 4, la sección 11 corresponde a la cuarta entrega): [js/test/testing-doc.md](js/test/testing-doc.md)
- Specs: [Actividad N°1](docs/03-specs/actividad-obligatoria-1/) · [Actividad N°2](docs/03-specs/actividad-obligatoria-2/) · [Primer Parcial](docs/03-specs/primer-parcial/) · [Actividad N°3](docs/03-specs/actividad-obligatoria-3/) · [Actividad N°4](docs/03-specs/actividad-obligatoria-4/)
- Prompts de IA utilizados: [docs/02-prompts/prompts.md](docs/02-prompts/prompts.md)
- Redacción del README: generado con GitHub Copilot (modo Agente) a partir de un prompt específico y revisado manualmente por el equipo — ver la consulta documentada en: [docs/03-specs/actividad-obligatoria-1/spec-ux.md](docs/03-specs/actividad-obligatoria-1/spec-ux.md)
- Sitio publicado (GitHub Pages, rama `release/cuarta-entrega`): https://dantebiondi666-prog.github.io/tienda-online/

## Segundo Parcial

### Objetivos

Evolucionar la aplicación desarrollada en la Actividad Obligatoria N.º 4 mediante programación asíncrona, consumo de datos utilizando Fetch, integración de una librería externa y ampliación del testing automatizado.

### Funcionalidades implementadas

- Carga asíncrona del catálogo mediante Fetch API, Promises y `async/await`.
- Consumo de productos desde `api/productos.json`.
- Procesamiento de datos mediante `map()`, `filter()` y `reduce()`.
- Estados de carga, éxito y error; validación y normalización de productos.
- Integración de AOS 2.3.4 mediante CDN, encapsulada en `js/utils/animaciones.js`.
- Animaciones en el catálogo, carrito y resumen de compra.
- Respeto de la preferencia de movimiento reducido y degradación segura ante excepciones de AOS.
- Optimización de Google Fonts mediante `preconnect` y carga del CSS de fuentes desde HTML.
- Incorporación de `defer` a Bootstrap JS, `meta description` y favicon (correcciones integradas en la rama del Coordinador).
- Testing automatizado con Jasmine, auditorías Lighthouse y revisiones de código asistidas por IA.

### Arquitectura del Segundo Parcial

Estructura de los archivos principales en la rama del Coordinador/DevOps, después de incorporar Fetch, AOS y las correcciones de Lighthouse:

```text
api/
└── productos.json
js/
├── script.js
├── api/
│   └── apiService.js
├── models/
│   ├── Producto.js
│   ├── Catalogo.js
│   ├── ItemCarrito.js
│   └── Carrito.js
├── services/
│   └── PersistenciaService.js
├── utils/
│   ├── storage.js
│   └── animaciones.js
└── test/
    ├── script.spec.js
    ├── models.spec.js
    ├── storage.spec.js
    ├── api.spec.js
    └── test-runner.html
```

El archivo `js/test/library.spec.js` y las ampliaciones de `api.spec.js` se encuentran en la rama del Tester QA y se validaron mediante una integración simulada. Su incorporación definitiva sigue pendiente.

### Testing y cobertura

| Indicador | Fetch + AOS y correcciones Lighthouse | Integración simulada de QA con develop |
|---|---:|---:|
| Pruebas ejecutadas | 167 | 230 |
| Fallos | 0 | 0 |
| Sentencias | 95,41% | 98,35% |
| Ramas | 94,16% | 97,10% |
| Funciones | 97,91% | 100% |
| Líneas | 95,41% | 98,35% |

En la integración simulada se obtuvo una cobertura del 100% en `apiService.js` y `animaciones.js`. Esta validación se realizó en un worktree independiente, combinando `develop` (`3d41731`) con la rama del Tester (`3b165d3`), sin modificar las ramas del equipo. No representa todavía una validación de la versión final que incluirá también las correcciones de Lighthouse.

### Auditorías Lighthouse

| Categoría | Baseline (TC11) | Post-fetch (TC12) | Post-library (TC13) | Correcciones locales | Umbral |
|---|---:|---:|---:|---:|---:|
| Performance | 93 | 96 | 97 | 97 | 95 |
| Accessibility | 100 | 100 | 100 | 100 | 95 |
| Best Practices | 96 | 96 | 96 | 100 | 95 |
| SEO | 91 | 91 | 91 | 100 | 95 |

Las tres auditorías Lighthouse del Segundo Parcial
se encuentran documentadas.

La integración de Fetch y AOS no introdujo regresiones
detectadas en las puntuaciones de Lighthouse.

Las correcciones del PR #143 alcanzaron el umbral
mínimo de 95 puntos en las cuatro categorías
durante la auditoría local del Coordinador.

Queda pendiente la validación final sobre la versión
completamente integrada del proyecto.

Las cuatro categorías alcanzaron el mínimo requerido en la auditoría local de las correcciones. Esta se realizó con Google Chrome y `http-server`, mientras que TC11 y TC12 se realizaron con Microsoft Edge y un servidor local de Python. Los resultados no permiten atribuir todas las diferencias exclusivamente a las modificaciones del código.

La auditoría de las correcciones no sustituye el TC13 ni la validación final de QA.

### Coordinación e integración

El equipo organiza las tareas mediante GitHub Projects y utiliza ramas independientes y Pull Requests para integrar los cambios. Las revisiones técnicas se documentan en el SPEC del Coordinador/DevOps.

- [x] Correcciones de la Actividad Obligatoria N.º 4 y backport hacia `develop` (#132).
- [x] Lighthouse baseline (TC11).
- [x] Integración de Fetch y APIs (#137).
- [x] Lighthouse post-fetch (TC12).
- [x] Integración de AOS (#136).
- [x] Incorporación de las correcciones de Lighthouse a la rama del Coordinador (#143), con aprobación de otro integrante.
- [x] Validación preliminar del testing avanzado.
- [ ] Lighthouse post-library (TC13).
- [ ] Revisión formal e integración del PR del Tester QA.
- [ ] Completar el requisito de revisiones de PR de la rúbrica.
- [ ] Integración del PR del Coordinador (#138) y validación final del conjunto.
- [ ] Preparación de `release/segundo-parcial`, configuración de GitHub Pages y entrega.

Se documentaron seis instancias de revisión asistidas por IA: cinco sobre dos PR distintos y una revisión preliminar de la rama de QA. Las revalidaciones no se contabilizan como PR independientes. El PR #142 se cerró sin merge y fue reemplazado por el #143 para respetar el flujo de integración acordado con el equipo.

### Documentación y seguimiento

- [SPECs del Segundo Parcial](docs/03-specs/segundo-parcial/)
- [SPEC del Coordinador/DevOps](docs/03-specs/segundo-parcial/spec-coord-devops-segundo-parcial.md)
- [SPEC de Fetch](docs/03-specs/segundo-parcial/spec-dev-async-fetch.md)
- [SPEC de AOS](docs/03-specs/segundo-parcial/spec-dev-libreria-externa.md)
- [Documentación de la librería AOS](docs/06-librerias/libreria-doc.md)
- [Auditoría Lighthouse post-correcciones](docs/04-testing/lighthouse-post-correcciones.md)
- [Testing JavaScript](js/test/testing-doc.md)
- [Issue del Coordinador #133](https://github.com/dantebiondi666-prog/tienda-online/issues/133)
- [PR del Coordinador #138](https://github.com/dantebiondi666-prog/tienda-online/pull/138)
- [PR de Fetch #137](https://github.com/dantebiondi666-prog/tienda-online/pull/137)
- [PR de AOS #136](https://github.com/dantebiondi666-prog/tienda-online/pull/136)
- [PR de correcciones Lighthouse #143](https://github.com/dantebiondi666-prog/tienda-online/pull/143)
- [Issue de QA #141](https://github.com/dantebiondi666-prog/tienda-online/issues/141)
- [Rama del Tester QA (TC11, TC12 y suites pendientes de integración)](https://github.com/dantebiondi666-prog/tienda-online/tree/feature/tester-qa-js-testing-suite)
- [GitHub Projects - Kanban](https://github.com/users/dantebiondi666-prog/projects/3)
- [Changelog del proyecto](changelog.md)

**Estado al 27/11/2026:** Fetch y AOS integrados en `develop`; correcciones de Lighthouse incorporadas a la rama del Coordinador. Testing avanzado validado preliminarmente, pendiente de integración definitiva. La release del Segundo Parcial aún no está publicada.

## Cómo ejecutar el proyecto y los tests

Como el proyecto utiliza módulos ES6, los archivos no se pueden abrir con doble clic (`file://`): hay que servirlos desde un servidor local.

```bash
npm install
npx --yes http-server . -p 8080 -c-1
```

- Sitio: `http://localhost:8080/`
- Tests de Jasmine en el navegador: `http://localhost:8080/js/test/test-runner.html` (runner disponible para las suites compatibles; en la revisión preliminar se verificó que incluye `models.spec.js` y `storage.spec.js`).
- Tests en la terminal: `npm test` (en PowerShell, `npm.cmd test` si la ejecución de scripts está bloqueada).
- Tests con medición de cobertura (`c8`): `npm run cobertura` (o `npm.cmd run cobertura` en PowerShell; el reporte HTML queda en `coverage/index.html`).

## Roles de la Actividad Obligatoria N.º 4

| Integrante | Rol |
|---|---|
| Lucas Ivan Fischer | Coordinador / DevOps + Tester QA |
| Dante Biondi | Desarrollador JS Eventos + DOM |
| Juan Martin Britos | Desarrollador JS POO (lógica de negocio) |
| Sebastian Viel | Desarrollador JS Local y Session Storage |

## Roles del Segundo Parcial

| Integrante | Rol |
|---|---|
| Juan Martin Britos | Coordinador / DevOps |
| Dante Biondi | Desarrollador JS Asíncrono - Fetch & APIs |
| Lucas Ivan Fischer | Desarrollador JS Librerías Externas |
| Sebastian Viel | Tester QA / JS |