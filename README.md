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

Las incorporaciones correspondientes al Segundo Parcial se encuentran en proceso de integración y validación.

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

## Arquitectura del código (Actividad Obligatoria N.º 4)

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
- Objetivo del entregable actual (Actividad Obligatoria N.º 4): transformar el simulador basado en `prompt()` y `alert()` en una aplicación web interactiva, aplicando manipulación del DOM y eventos, programación orientada a objetos con clases en `js/models/`, almacenamiento persistente con una capa de abstracción en `js/utils/storage.js` y testing automatizado por módulo con Jasmine.
- Mockup Actividad N°1: [docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png](docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png) — [versión online en Figma](https://www.figma.com/board/boi5W7q2aUFtEtuo8al7dY/E-commerce-dise%C3%B1o-inicial?node-id=11-29&t=T4j3hsvIoAFLkWTN-1)
- Mockup Actividad N°2 (con sistema de diseño aplicado): [docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png](docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png) — [versión online en Figma](https://www.figma.com/board/boi5W7q2aUFtEtuo8al7dY/E-commerce-dise%C3%B1o-inicial?node-id=11-29&t=T4j3hsvIoAFLkWTN-1)
- Mockup Primer Parcial (Bootstrap): [docs/01-mockup/primer-parcial/disenio-bootstrap.png](docs/01-mockup/primer-parcial/disenio-bootstrap.png) — [versión online en FigJam](https://www.figma.com/board/boi5W7q2aUFtEtuo8al7dY/E-commerce-dise%C3%B1o-inicial?node-id=0-1)
- - Mockup Actividad Obligatoria N.º 4 (resumen de compra y estados vacío, éxito y error): [Ver diseño](docs/01-mockup/actividad-obligatoria-4/resumen-compra-estados.png).
- - Mockup Actividad Obligatoria N.º 4 (carrusel de productos destacados): [Ver diseño](docs/01-mockup/actividad-obligatoria-4/carrusel-destacados.png).
- - Mockup Actividad Obligatoria N.º 4 (carrito y sus controles): [Ver diseño](docs/01-mockup/actividad-obligatoria-4/carrito-controles.png).
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

Evolucionar la aplicación desarrollada en la Actividad
Obligatoria N.º 4 mediante programación asíncrona,
consumo de datos utilizando Fetch, integración de una
librería externa y ampliación del testing automatizado.

### Funcionalidades planificadas

- Carga asíncrona del catálogo mediante Fetch API.
- Consumo de productos desde una fuente JSON.
- Procesamiento de datos mediante map(), filter() y reduce().
- Estados de carga, éxito y error.
- Validación y normalización de productos.
- Integración de AOS mediante CDN.
- Animaciones en el catálogo, carrito y resumen de compra.
- Respeto de la preferencia de movimiento reducido.
- Degradación segura ante fallos de la librería externa.
- Ampliación de las pruebas automatizadas con Jasmine.
- Auditorías comparativas mediante Lighthouse.
- Revisiones de código asistidas por inteligencia artificial.

### Arquitectura prevista para el Segundo Parcial

```text
api/
└── productos.json

js/
├── script.js
├── api/
│   └── apiService.js
├── models/
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
    └── library.spec.js
```

### Coordinación e integración

El proyecto utiliza GitHub Projects para organizar
las tareas mediante un tablero Kanban.

Cada funcionalidad se desarrolla en una rama
independiente y se integra mediante Pull Requests
revisadas por el Coordinador/DevOps con asistencia
de inteligencia artificial.

El orden previsto de integración es:

1. Correcciones de la Actividad Obligatoria N.º 4.
2. Backport hacia develop.
3. Auditoría Lighthouse baseline.
4. Integración de Fetch y APIs.
5. Auditoría Lighthouse post-fetch.
6. Integración de la librería externa AOS.
7. Auditoría Lighthouse post-library.
8. Validación final de testing y cobertura.
9. Preparación de release/segundo-parcial.
10. Publicación y entrega del Segundo Parcial.

### Documentación y seguimiento

- [SPECs del Segundo Parcial](docs/03-specs/segundo-parcial/)
- [SPEC del Coordinador/DevOps](docs/03-specs/segundo-parcial/spec-coord-devops-segundo-parcial.md)
- [Issue del Coordinador/DevOps #133](https://github.com/dantebiondi666-prog/tienda-online/issues/133)
- [PR de Fetch y APIs #137](https://github.com/dantebiondi666-prog/tienda-online/pull/137)
- [PR de integración de AOS #136](https://github.com/dantebiondi666-prog/tienda-online/pull/136)
- [GitHub Projects - Kanban](https://github.com/users/dantebiondi666-prog/projects/3)
- [Changelog del proyecto](changelog.md)

Estado: Segundo Parcial en desarrollo, revisión e integración.
## Cómo ejecutar el proyecto y los tests

Como el proyecto utiliza módulos ES6, los archivos no se pueden abrir con doble clic (`file://`): hay que servirlos desde un servidor local.

```bash
npm install
npx --yes http-server . -p 8080 -c-1
```

- Sitio: `http://localhost:8080/`
- Tests de Jasmine en el navegador: `http://localhost:8080/js/test/test-runner.html`
- Tests en la terminal: `npm test`
- Tests con medición de cobertura (`c8`): `npm run cobertura` (el reporte HTML queda en `coverage/index.html`)

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