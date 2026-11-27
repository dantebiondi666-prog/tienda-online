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

Fetch, AOS y el testing avanzado de QA ya se integraron en `develop` mediante los PR #137, #136 y #144. La rama del Coordinador/DevOps incorpora además las correcciones de Lighthouse del PR #143 y se encuentra validada localmente. Su integración definitiva mediante el PR #138 y la publicación del Segundo Parcial siguen pendientes.

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
- Sitio de la entrega anterior (GitHub Pages; rama de referencia `release/cuarta-entrega`): https://dantebiondi666-prog.github.io/tienda-online/

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

Estructura de los archivos principales en la rama del Coordinador/DevOps, después de incorporar Fetch, AOS, las correcciones de Lighthouse y el testing avanzado del PR #144:

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
    ├── library.spec.js
    ├── testing-doc.md
    └── test-runner.html
```

Las suites `library.spec.js`, las ampliaciones de `api.spec.js` y las pruebas de integración de `script.spec.js` se incorporaron mediante el PR #144. La rama del Coordinador fue sincronizada con `develop` y validada posteriormente.

### Testing y cobertura

| Indicador | Antes de QA | Simulación preliminar de QA | Rama del Coordinador después de integrar QA |
|---|---:|---:|---:|
| Pruebas ejecutadas | 167 | 230 | 235 |
| Fallos | 0 | 0 | 0 |
| Sentencias | 95,41% | 98,35% | 98,91% |
| Ramas | 94,16% | 97,10% | 97,36% |
| Funciones | 97,91% | 100% | 100% |
| Líneas | 95,41% | 98,35% | 98,91% |

La simulación preliminar combinó `develop` (`3d41731`) con la rama de QA (`3b165d3`) en un worktree independiente. Se conserva como antecedente.

La validación posterior a la integración de QA en `feature/coord-devops-segundo-parcial` obtuvo 235 pruebas sin fallos (`npm test`, seed 96464; `npm run cobertura`, seed 91573). La cobertura de líneas de `script.js` fue 97,04%; `apiService.js` y `animaciones.js` alcanzaron el 100%. Los resultados corresponden a la rama del Coordinador, no a una release publicada.

### Auditorías Lighthouse

| Categoría | Baseline (TC11) | Post-fetch (TC12) | Post-library (TC13) | Correcciones locales | Integración local combinada | Umbral |
|---|---:|---:|---:|---:|---:|---:|
| Performance | 93 | 96 | 97 | 97 | 98 | 95 |
| Accessibility | 100 | 100 | 100 | 100 | 100 | 95 |
| Best Practices | 96 | 96 | 96 | 100 | 100 | 95 |
| SEO | 91 | 91 | 91 | 100 | 100 | 95 |

Las tres auditorías requeridas están documentadas. No se detectaron regresiones en las puntuaciones tras incorporar Fetch y AOS. Las correcciones del PR #143 permitieron alcanzar el umbral de 95 puntos en las cuatro categorías en la auditoría local; la integración combinada también superó ese mínimo.

Las auditorías de QA utilizaron Microsoft Edge y un servidor local de Python; las del Coordinador utilizaron Google Chrome y `http-server`. Las diferencias entre mediciones no pueden atribuirse exclusivamente a los cambios de código. La auditoría de integración combinada se realizó antes del merge definitivo de los aportes y no sustituye la comprobación del sitio publicado.

Evidencia: [Lighthouse de integración local](docs/04-testing/capturas/lighthouse-correcciones/lighthouse-integracion-final.png).

### Coordinación e integración

El equipo organiza las tareas mediante GitHub Projects y utiliza ramas independientes y Pull Requests para integrar los cambios. Las revisiones técnicas se documentan en el SPEC del Coordinador/DevOps.

- [x] Correcciones de la Actividad Obligatoria N.º 4 y backport hacia `develop` (#132).
- [x] Lighthouse baseline (TC11).
- [x] Integración de Fetch y APIs (#137).
- [x] Lighthouse post-fetch (TC12).
- [x] Integración de AOS (#136).
- [x] Incorporación de las correcciones de Lighthouse a la rama del Coordinador (#143), con aprobación de otro integrante.
- [x] Lighthouse post-library (TC13).
- [x] Revisión formal, revalidación e integración de QA (#144).
- [x] Sincronización de la rama del Coordinador con `develop` y validación automatizada posterior.
- [x] Auditoría Lighthouse de la integración local combinada.
- [ ] Completar el requisito de cuatro PR distintos revisados según la rúbrica.
- [ ] Integración del PR del Coordinador (#138) hacia `develop`.
- [ ] Preparación de `release/segundo-parcial`, configuración de GitHub Pages y entrega.
- [ ] Verificación del sitio publicado.

Se documentaron siete instancias de revisión asistidas por IA sobre tres PR distintos de compañeros (#137, #136 y #144), con seis Request Changes aceptados. El PR #138 recibió además una revisión asistida por IA de Dante; su tratamiento se registra separadamente en el SPEC. El cómputo de una autorrevisión como cuarto PR de la rúbrica requiere confirmación. Las revalidaciones no se contabilizan como PR independientes. El PR #142 se cerró sin merge y fue reemplazado por el #143 para respetar el flujo de integración acordado.

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
- [PR del Tester QA #144](https://github.com/dantebiondi666-prog/tienda-online/pull/144)
- [SPEC del Tester QA](docs/03-specs/segundo-parcial/spec-tester-qa-segundo-parcial.md)
- [TC11 — Lighthouse baseline](docs/04-testing/test-case-11-lighthouse-baseline.md)
- [TC12 — Lighthouse post-fetch](docs/04-testing/test-case-12-lighthouse-post-fetch.md)
- [TC13 — Lighthouse post-library](docs/04-testing/test-case-13-lighthouse-post-library.md)
- [GitHub Projects - Kanban](https://github.com/users/dantebiondi666-prog/projects/3)
- [Changelog del proyecto](changelog.md)

**Estado al 27/11/2026:** Fetch, AOS y QA integrados en `develop`; correcciones de Lighthouse incorporadas a la rama del Coordinador, sincronizada y validada con 235 pruebas sin fallos. El PR #138 está en revisión. La release del Segundo Parcial, la actualización de GitHub Pages y la entrega siguen pendientes.

## Cómo ejecutar el proyecto y los tests

Como el proyecto utiliza módulos ES6, los archivos no se pueden abrir con doble clic (`file://`): hay que servirlos desde un servidor local.

```bash
npm install
npx --yes http-server . -p 8080 -c-1
```

- Sitio: `http://localhost:8080/`
- Tests de Jasmine en el navegador: `http://localhost:8080/js/test/test-runner.html` (runner para `models.spec.js` y `storage.spec.js`; `script.spec.js`, `api.spec.js` y `library.spec.js` se ejecutan en Node.js según la documentación de QA).
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
