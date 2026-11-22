# Especificación técnica — Coordinador / DevOps + Tester QA

**Proyecto:** Remer Us (`tienda-online`)  
**Materia:** Programación Web I  
**Entrega:** Actividad Obligatoria N.º 4  
**Rol:** Coordinador / DevOps + Tester QA  
**Responsable:** Lucas Ivan Fischer (`@LucasFUces`)  
**Ramas de trabajo:** `feature/coord-devops-cuarta-entrega` (coordinación) y `feature/tester-qa-specs` (testing; su spec es `spec-tester-qa.md`)  
**Rama base:** `develop`

---

## Objetivo

Coordinar el desarrollo e integración de la Actividad Obligatoria N.º 4, que transforma el simulador basado en `prompt()` y `alert()` en una aplicación web interactiva con manipulación del DOM y eventos, Programación Orientada a Objetos, almacenamiento persistente y testing automatizado, manteniendo el branch model, la trazabilidad de Issues y Pull Requests, la documentación y el proceso de revisión requerido para la entrega.

La Actividad Obligatoria N.º 3 fue revisada por el docente en la PR #93. Sus observaciones fueron resueltas mediante las PRs de corrección #96 y #97 hacia `release/tercera-entrega`, y las Issues #94 y #95 documentan las observaciones RC9 y RC10 que deben resolverse durante esta entrega. La release de AO3 fue mergeada a `master` y su backport hacia `develop` se realizó mediante la PR #98.

---

## 1. ¿Qué se va a hacer?

Como Coordinador / DevOps se realizarán las siguientes tareas:

**Correcciones de la Actividad Obligatoria N.º 3**

- Resolver las observaciones del docente mediante ramas `fix/` hacia `release/tercera-entrega` y registrarlas en `### Fixed` del `changelog.md`.
- Una vez aprobada la release y mergeada a `master`, realizar el backport `backport/release-tercera-entrega` → `develop` con aprobación de otro integrante.
- Crear el tag y la GitHub Release `v1.1-tercera-entrega`.

**Coordinación de la Actividad Obligatoria N.º 4**

- Coordinar la integración de todas las ramas `feature/` en `develop`.
- Verificar que cada integrante trabaje en una rama propia creada desde `develop` y que su `spec-*.md` se commitee antes que el código.
- Revisar y aprobar todas las PRs antes de integrarlas a `develop`, con un mínimo de cuatro instancias de code review asistidas con GitHub Copilot Agent Mode y los `CHANGES_REQUESTED` documentados.
- Administrar las Issues mediante un tablero Kanban en GitHub Projects.
- Mantener `changelog.md` actualizado con las contribuciones de cada miembro, usando como título de cada entrada el título exacto de la PR.
- Actualizar `README.md` con la información de la cuarta entrega y los enlaces a la nueva documentación.
- Coordinar reuniones de equipo y resolución de conflictos.
- Crear `release/cuarta-entrega` desde `develop` y mantener GitHub Pages publicado desde esa rama.
- Limpiar las ramas innecesarias: solo deben quedar `master`, `develop` y `release/cuarta-entrega`.
- Publicar la PR de release en Slack y subir los enlaces al campus.
- Luego de la aprobación y el merge a `master`, crear el tag y la GitHub Release `v1.2-cuarta-entrega`.

**Testing y QA** (documentado en `spec-tester-qa.md`)

- Refactorizar `js/test/script.spec.js`, crear `js/test/models.spec.js` y `js/test/storage.spec.js`, actualizar `js/test/testing-doc.md` y reportar los bugs encontrados como Issues asignadas al rol correspondiente.

---

## 2. ¿Por qué se hace?

La Actividad Obligatoria N.º 4 depende de cuatro piezas que deben integrarse sobre una base común: las clases del dominio, la capa de storage, el controlador de eventos y DOM, y los tests. Cada una depende de la anterior, por lo que el orden de integración y la trazabilidad son críticos.

El rol de Coordinador / DevOps permite:

- asegurar que cada tarea se desarrolle en la rama correspondiente y con su spec previa;
- detectar inconsistencias entre clases, storage, interfaz y tests antes de integrar los cambios a `develop`;
- mantener un registro verificable de Issues, PRs, revisiones y versiones;
- evitar que lleguen a `release/cuarta-entrega` llamadas a `prompt()` o `alert()`, documentación desactualizada o funcionalidades sin interfaz;
- preparar una versión estable y publicable mediante GitHub Pages.

### Aprendizajes de la auditoría de AO3

La revisión de la PR #93 deja decisiones concretas para esta entrega:

- **Títulos del changelog:** cada entrada debe reproducir el título exacto de la PR en GitHub.
- **Base visual completa:** la auditoría (RC9) señaló que el flujo del carrito no tenía una base visual en `index.html`. La Issue #94 planifica ese trabajo y en AO4 los cuatro flujos deben funcionar desde la interfaz.
- **Bloque DOM heredado:** la Issue #95 (RC10) documenta el bloque `<script>` inline del modal en `index.html`, que debe eliminarse o reubicarse en `js/script.js` antes de cerrar la entrega.
- **Cuarta review:** en AO3 solo se acreditaron revisiones sobre 3 PRs. En AO4 se planifican al menos cuatro instancias de review, incluyendo la revisión de las correcciones posteriores a un `CHANGES_REQUESTED`.
- **Rotación de roles (RC11):** Fischer ejerce la Coordinación en AO4 y Britos en el Segundo Parcial.

---

# BEFORE — Plan previo a la coordinación

## 3. Plan de coordinación

La integración prevista sigue las dependencias entre los roles.

### 3.1 Desarrollador JS POO — lógica de negocio

Responsable: Juan Martín Britos (`@juanmartinbritos7-cmd`)  
Rama prevista: `feature/dev-poo-logica-negocio`

Debe crear las clases del dominio en `js/models/` a partir de los diagramas de actividades y de `index.html`, con constructores, encapsulamiento, validaciones internas, JSDoc y métodos `toJSON()` / `fromJSON()`. También debe entregar el diagrama de clases (`.puml` y `.png`) y su documentación en `docs/05-diagramas/02-diagrama-de-clases/`.

### 3.2 Desarrollador JS Local y Session Storage

Responsable: Sebastián Viel (`@Zikoloogo`)  
Rama prevista: `feature/dev-storage`

Debe crear `js/utils/storage.js` con las operaciones `guardar`, `obtener`, `actualizar`, `eliminar`, `listar` y `limpiar`, manejo de errores (storage lleno y datos corruptos) y serialización automática de JSON, junto con `docs/06-storage/storage-doc.md`.

### 3.3 Desarrollador JS Eventos + DOM

Responsable: Dante Biondi (`@dantebiondi666-prog`)  
Rama prevista: `feature/dev-eventos-dom`

Debe transformar `js/script.js` en el controlador principal (solo eventos y DOM), eliminar todos los `prompt()` y `alert()`, implementar los cuatro flujos desde la interfaz (incluida la base visual del carrito, Issue #94) y resolver el bloque DOM heredado (Issue #95).

### 3.4 Coordinador / DevOps + Tester QA

Ramas: `feature/coord-devops-cuarta-entrega` y `feature/tester-qa-specs`  
Responsable: Lucas Ivan Fischer (`@LucasFUces`)

La rama de coordinación se utiliza para README, changelog, GitHub Pages, releases y tags. La rama de testing agrega `js/test/models.spec.js`, `js/test/storage.spec.js`, las actualizaciones de `js/test/script.spec.js` y de `js/test/testing-doc.md`.

### 3.5 Orden de integración hacia `develop`

1. `backport/release-tercera-entrega` (PR #98), previo a cualquier rama de AO4.
2. `feature/dev-poo-logica-negocio`, porque las demás ramas dependen de las clases.
3. `feature/dev-storage`.
4. `feature/dev-eventos-dom`.
5. `feature/tester-qa-specs`, una vez integrados los módulos que testea.
6. `feature/coord-devops-cuarta-entrega`, con README, changelog y la documentación final.
7. Creación de `release/cuarta-entrega` desde `develop` y PR hacia `master`.

### 3.6 Decisiones técnicas a acordar antes de implementar

- **Estrategia de módulos:** definir si se utilizan módulos ES6 (`type="module"`) o scripts clásicos, porque impacta en la carga de archivos desde `index.html` y `test-runner.html` y en la medición de cobertura. La decisión se registra en las specs de los roles.
- **Interfaces públicas:** los desarrolladores de POO, Storage y Eventos + DOM acuerdan qué métodos y claves se utilizan, y quedan documentados antes de integrar las ramas.

---

## 4. Criterios para revisar una Pull Request

Antes de aprobar una PR se verificará:

- que la rama tenga el formato `feature/<rol>-<descripción>` y parta del `develop` actualizado;
- que exista una Issue asociada a la tarea;
- que el `spec-*.md` del rol esté commiteado antes que el código (verificable en el historial);
- que la descripción de la PR respete `.github/PULL_REQUEST_TEMPLATE/feature-template.md`;
- que no haya cambios ajenos al objetivo de la rama;
- que el `changelog.md` registre la contribución con el título exacto de la PR y su Issue;
- que no queden llamadas a `prompt()` ni `alert()`;
- que los nombres sigan las convenciones (camelCase y PascalCase para clases) y que el código tenga JSDoc.

Criterios específicos por rol:

- **POO:** al menos 3 clases en `js/models/`; las clases no contienen manipulación del DOM ni eventos; `toJSON()` y `fromJSON()` implementados; diagrama de clases coherente con el código.
- **Storage:** operaciones CRUD completas; `try-catch` en todas las operaciones; manejo de storage lleno y de datos corruptos; estrategia `localStorage` vs `sessionStorage` documentada.
- **Eventos + DOM:** `js/script.js` sin lógica de negocio; listeners para todos los controles; validación en tiempo real con feedback visual; resultados mostrados modificando el DOM; los cuatro flujos funcionan desde la interfaz, incluido el carrito.

Cuando una PR presente incumplimientos se realizará una revisión con estado `CHANGES_REQUESTED`. Una vez resueltos los hallazgos se realizará una nueva revisión antes de aprobar el merge.

---

## 5. Code reviews planificados

Se realizarán como mínimo **cuatro instancias de revisión** asistidas con GitHub Copilot Agent Mode:

1. Revisión inicial de la PR del Desarrollador JS POO.
2. Revisión inicial de la PR del Desarrollador JS Storage.
3. Revisión inicial de la PR del Desarrollador JS Eventos + DOM.
4. Al menos una revisión de las correcciones posteriores a un `CHANGES_REQUESTED` sobre una de esas PRs.

Cada revisión registrará: número y título de la PR, rol responsable, archivos del diff utilizados como contexto, prompt exacto, requisitos evaluados, hallazgos, líneas del diff afectadas, `CHANGES_REQUESTED` realizados y decisión final del revisor humano.

---

## 6. Gestión de Issues y tablero Kanban

Cada integrante crea las Issues correspondientes a las tareas que va a realizar. Como Coordinador / DevOps se administran en el tablero Kanban de GitHub Projects (`Programación Web I - Tienda Online`) con los estados **To do**, **In progress** y **Done**.

El tablero incluye las Issues de los cuatro roles, las Issues #94 y #95 heredadas de la auditoría de AO3, y las Issues de bugs reportadas durante el testing, asignadas al rol correspondiente. Las Issues se mantienen relacionadas con sus ramas y PRs.

---

## 7. Herramientas

### Git y GitHub

Administración de ramas, Issues, PRs, code reviews, integración de cambios, changelog, tags y releases.

### GitHub Projects

Tablero Kanban de las Issues de la entrega.

### GitHub Copilot Agent Mode

Se utiliza para los code reviews porque permite contrastar el diff de cada PR contra la consigna, la spec del rol, `index.html`, los diagramas y las clases del dominio. El agente recibe como contexto, según corresponda: el diff de la PR, la consigna de AO4, la spec del rol revisado, los diagramas de actividades y de clases, los archivos de `js/models/`, `js/utils/storage.js`, `js/script.js` y la documentación de testing. Sus recomendaciones son un apoyo: la decisión de solicitar cambios, aprobar o rechazar una PR la toma manualmente el Coordinador / DevOps.

### GitHub Pages

Publicación de la versión entregable desde `release/cuarta-entrega`.

---

## 8. Criterios de aceptación

### Estado inicial (AO3)

- [x] Observaciones RC1 a RC8 de la auditoría de AO3 resueltas mediante las PRs #96 y #97 hacia `release/tercera-entrega`.
- [x] Observaciones RC9 y RC10 documentadas mediante las Issues #94 y #95.
- [x] Correcciones registradas en `### Fixed` del `changelog.md`.
- [x] `release/tercera-entrega` mergeada a `master` mediante la PR #93.
- [x] `spec-devops.md` commiteado antes que cualquier otra tarea de coordinación de AO4.
- [x] Backport hacia `develop` mediante la PR #98 aprobado por otro integrante y mergeado.
- [ ] Tag y GitHub Release `v1.1-tercera-entrega` creados.
- [ ] Aviso con `:pr-merged:` publicado en el hilo de Slack de AO3.

### Coordinación

- [ ] Issues de AO4 administradas mediante GitHub Projects.
- [ ] Cada rama feature creada desde `develop` actualizado y con su spec commiteada antes del código.
- [ ] Todas las PRs de los demás integrantes revisadas y aprobadas antes del merge a `develop`.
- [ ] Al menos cuatro instancias de code review asistidas con Copilot Agent Mode documentadas, con sus `CHANGES_REQUESTED`.
- [ ] Todas las features integradas en `develop` en el orden planificado.
- [ ] Interfaces entre POO, Storage y Eventos + DOM acordadas y documentadas.
- [ ] Observaciones de las Issues #94 y #95 resueltas.

### Documentación

- [ ] `changelog.md` actualizado con las contribuciones de cada miembro y el título exacto de cada PR.
- [ ] `README.md` actualizado con la información de la cuarta entrega y los enlaces a la nueva documentación.
- [ ] `docs/` con el diagrama de clases, `storage-doc.md` y las cinco specs de AO4.

### Release

- [ ] `release/cuarta-entrega` creada desde `develop`.
- [ ] GitHub Pages publicado desde `release/cuarta-entrega`.
- [ ] Antes de la entrega solo permanecen `master`, `develop` y `release/cuarta-entrega`.
- [ ] PR `release/cuarta-entrega` → `master` con el título `[GRUPO N°3][Cuarta Entrega] Entrega de la actividad` y el template de release.
- [ ] PR publicada en Slack y enlaces subidos al campus (PR y GitHub Pages).
- [ ] Luego del LGTM y el merge a `master`, creados el tag y la GitHub Release `v1.2-cuarta-entrega`.

---

## 9. Uso de IA en esta tarea

### Herramienta prevista

GitHub Copilot en modo Agente desde Visual Studio Code.

### Uso previsto

Asistir en los code reviews de las PRs de los demás integrantes, aportando como contexto el diff, la consigna, las specs y los archivos del dominio, el storage y el controlador.

### Validación humana

Los resultados generados por IA se revisan manualmente. Copilot puede sugerir cumplimientos, incumplimientos, posibles bugs, problemas de documentación y `CHANGES_REQUESTED`, y la decisión final la toma el Coordinador / DevOps luego de verificar el diff.

---

# AT CLOSE — Evidencia de cierre

> Esta sección se completa al finalizar las tareas de coordinación. No representa resultados ejecutados todavía.

## 10. Prompts exactos utilizados en Code Reviews

### Code Review 1

**PR:** #102 — `[AO4] Desarrollador JavaScript POO: implementar lógica de negocio orientada a objetos`  
**Rol:** Desarrollador JS POO (Lógica de Negocio)  
**Issue:** #101  
**Rama:** `feature/dev-poo-logica-negocio` → `develop`

**Archivos y contexto utilizados:**

- `ACTIVIDAD_OBLIGATORIA_N_4.pdf` (consigna);
- `docs/03-specs/actividad-obligatoria-4/spec-dev-poo.md`;
- `.github/PULL_REQUEST_TEMPLATE/feature-template.md`;
- `index.html`;
- `js/script.js` (lógica de negocio de AO3);
- los cuatro diagramas `.puml` de `docs/05-diagramas/01-diagrama-de-actividades/`;
- diff completo de la PR contra `origin/develop`, historial de commits y archivos de `js/models/`, `docs/05-diagramas/02-diagrama-de-clases/` y `changelog.md`.

**Verificaciones propias previas a la revisión con IA:**

- `git log --oneline origin/develop..HEAD`: el primer commit de la rama (`5c22053`) es `spec-dev-poo.md` y el código llega después (`83cd2de`).
- `git diff --stat origin/develop...HEAD`: 9 archivos, todos dentro del alcance del rol (spec, 4 clases, 3 archivos del diagrama y `changelog.md`).
- La rama parte de `2f199b0`, el `develop` actualizado con el backport.
- Una búsqueda de `prompt(`, `alert(`, `document.`, `window.`, `console.log` y `addEventListener` en `js/models/` no devolvió resultados.
- Las cuatro clases implementan `toJSON()` y `fromJSON()`.

**Prompt utilizado:**

```text
Actuá como revisor técnico de la PR #102:

- Rama: `feature/dev-poo-logica-negocio`
- Destino: `develop`
- Rol: Desarrollador JS POO (Lógica de Negocio)
- Issue: #101

No modifiques archivos, no hagas commits y no publiques ninguna review en GitHub. Solo devolveme el informe. Podés ejecutar comandos de lectura o verificación (por ejemplo, importar las clases con `node --input-type=module`) sin modificar nada.

Reconstruí el cambio real con el diff contra `origin/develop` y el historial de commits.

Revisá:

1. **Git y trazabilidad**
   - La rama debe partir del `develop` actualizado.
   - `spec-dev-poo.md` debe estar commiteado antes que cualquier archivo de `js/models/`.
   - No debe haber cambios ajenos al rol (por ejemplo `js/script.js`, `index.html` o tests).
   - `changelog.md` debe registrar la PR #102 y la Issue #101 usando el título exacto de la PR.

2. **Descripción de la PR**
   Compará con `.github/PULL_REQUEST_TEMPLATE/feature-template.md`. Verificá datos, rama, Issue, spec, requisitos de `plan.md`, archivos modificados y checklist (que lo marcado corresponda a lo realmente hecho).

3. **Spec**
   - BEFORE: identificación de entidades, propiedades y métodos, relaciones entre clases, decisiones de arquitectura y checklist de aceptación.
   - AT CLOSE: prompt exacto de Copilot en bloque de código, contexto usado (diagramas `.puml`, `index.html`, spec), fragmento generado, ajustes manuales y decisiones finales sobre cómo facilita el trabajo del Tester QA y del Desarrollador JS Storage.

4. **Clases de `js/models/`** (`Producto`, `Catalogo`, `ItemCarrito`, `Carrito`)
   Verificá en cada una: constructor con parámetros, encapsulamiento de propiedades, métodos de negocio, validaciones internas, JSDoc, nomenclatura (PascalCase para clases, camelCase para métodos), `toJSON()` y `fromJSON()`.
   - No debe haber manipulación del DOM, eventos, `prompt()`, `alert()` ni `console.log` innecesarios.
   - Contrastá la lógica con la que existía en `js/script.js` de la entrega anterior: filtrado por categoría, tipo, talle y estilo sin distinguir mayúsculas, validación de talle, cantidad como entero positivo, suma de cantidades para el mismo producto y talle, modificar y eliminar, subtotal, total y resumen. Indicá si se perdió alguna regla de negocio.
   - Comprobá que las clases reflejen los cuatro flujos de los diagramas de actividades y del `index.html`.

5. **Serialización**
   Probá la ida y vuelta `toJSON()` → `JSON.stringify` → `fromJSON()` en cada clase, incluyendo `ItemCarrito` dentro de `Carrito` y los atributos privados. Verificá que el resultado sea un objeto plano reutilizable por la capa de Storage.

6. **Módulos y estructura**
   Revisá la sintaxis y los nombres de `export` e `import` entre clases, las rutas y la coherencia de los archivos. Indicá si la elección de módulos ES6 puede afectar la integración con `index.html`, con `js/test/test-runner.html` y con la ejecución de Jasmine en Node.

7. **Diagrama de clases**
   Verificá en `docs/05-diagramas/02-diagrama-de-clases/`: `.puml`, `.png` y `diagrama-clases-doc.md`. El diagrama debe tener todas las clases con propiedades y métodos, relaciones (composición, agregación o asociación), multiplicidades y tipos, y ser coherente con el código. La documentación debe describir cada clase y su responsabilidad, las relaciones y las decisiones de diseño.

8. **Testabilidad**
   Evaluá si el código queda listo para que el Tester QA escriba tests de constructores, métodos de negocio, validaciones y serialización.

### Formato de respuesta

1. **Veredicto:** CUMPLE / CUMPLE PARCIALMENTE / NO CUMPLE.
2. **Checklist** con ✅ / ⚠️ / ❌: Git e historial, Template PR, Spec BEFORE, Spec AT CLOSE, Producto, Catalogo, ItemCarrito, Carrito, Serialización, Módulos, Diagrama UML, Documentación, Changelog, Testabilidad.
3. **Hallazgos que requieren cambios:** solo problemas reales. Para cada uno: severidad (BLOQUEANTE o RECOMENDACIÓN), archivo y línea o fragmento, requisito incumplido y corrección necesaria.
4. **Decisión sugerida:** solo `APPROVE` o `REQUEST_CHANGES`.

No inventes requisitos que no estén en la consigna, `plan.md`, la spec o la template.
```

**Output relevante generado por IA:**

Copilot Agent reconstruyó la PR mediante el servidor MCP de GitHub y comandos de lectura, leyó las cuatro clases, el spec, el diagrama y la documentación, y ejecutó pruebas de importación y serialización con Node configurado como ESM. Confirmó que las cuatro idas y vueltas JSON funcionan (incluidos los objetos anidados de `Carrito`), que las operaciones de negocio se comportan correctamente, que el diagrama coincide con el código y que el historial es correcto. Verificó al final que el árbol de trabajo no se modificó.

El veredicto fue `CUMPLE PARCIALMENTE` y la decisión sugerida fue `APPROVE`. Los hallazgos fueron:

1. **RECOMENDACIÓN — sección «Consigna» ausente en la descripción de la PR**, junto con ítems de checklist que la plantilla incluiría y la PR no conservaba.
2. **RECOMENDACIÓN — integración futura de módulos ES6:** `index.html` y `test-runner.html` cargan scripts clásicos y `package.json` no declara `"type": "module"`, por lo que la importación estándar desde Node falla sin habilitar ESM. Copilot lo consideró parte del alcance pendiente declarado por el desarrollador.

Además marcó como `ChangeLog ✅` que el título de la entrada coincidía con el de la PR.

**Ajustes o decisiones manuales:**

El informe se validó manualmente contra los archivos reales. Se detectaron un error del agente (punto 1) y un error de la verificación manual (punto 2):

1. **No detectó el desvío del changelog.** El informe indicó que el título de la entrada de `changelog.md` coincidía con el de la PR #102. Al revisar el diff (`git diff origin/develop...HEAD -- changelog.md`) se verificó que la entrada terminaba con un punto final que el título de la PR no tiene y que la línea `PR:` estaba sin la indentación de dos espacios que usan las demás entradas. Por ese motivo la decisión sugerida (`APPROVE`) no se aceptó.
2. **Hallazgo sobre la plantilla descartado por una verificación manual incorrecta.** El hallazgo 1 del informe de Copilot señalaba que faltaba la sección «Consigna» en la descripción de la PR. En su momento se descartó por considerar que la plantilla `.github/PULL_REQUEST_TEMPLATE/feature-template.md` no la incluía. Una verificación posterior (historial de la plantilla y lectura en `develop`) demostró que la plantilla incluye las secciones «Consigna» y «Checklist» desde el commit `3741268` del 02/11, anterior a esta review. El hallazgo era procedente como recomendación no bloqueante: el error fue de la verificación manual, no del agente.
El hallazgo 2 (módulos ES6) se aceptó como nota no bloqueante: es una decisión de infraestructura de testing y no un incumplimiento del Desarrollador POO. Quedó a cargo del Tester QA, que declaró `"type": "module"` en `package.json`, convirtió `js/test/node-setup.js` y cargó los specs como módulos en `test-runner.html`.

**CHANGES_REQUESTED:**

Sí. Se publicó una review con estado `Changes requested` y un comentario inline en `changelog.md` (RC1): el título de la entrada debía reproducir el título exacto de la PR, sin el punto final, y la línea `PR:` debía ir indentada con dos espacios, manteniendo los enlaces a la PR #102 y a la Issue #101. La review incluyó una nota no bloqueante sobre la estrategia de módulos ES6.

**Resultado final:**

`APPROVED`.

El Desarrollador POO corrigió el changelog en el commit `8aaf7eb`. Se verificó en el diff que el título coincide exactamente con el de la PR (sin punto final) y que la línea `PR:` quedó indentada; las líneas en blanco adicionales se consideraron un detalle estético no bloqueante. La PR #102 fue aprobada y mergeada a `develop`.

**Merge commit:** `df2ff50`.

### Code Review 2 — PR #109 (Desarrollador JS Storage)

**PR revisada:** #109 `[AO4] Desarrollador JS Storage: capa de abstracción en js/utils/storage.js`, rama `feature/dev-storage` hacia `develop`. Autor: @Zikoloogo. Issue #108.
**Revisor:** Lucas Ivan Fischer (@LucasFUces), Coordinador / DevOps.

**Nota sobre la evidencia:** la respuesta de Copilot de la primera ejecución no se conservó. Para documentar el review se reprodujo el mismo prompt sobre el estado de la rama previo a la corrección (`git diff 90a2116^1...6ea79a4`), ignorando el commit de corrección `17781be`. La respuesta que figura abajo es la de esa reproducción.

**Prompt utilizado:**


Actuá como revisor técnico de la PR #109:

- Rama: `feature/dev-storage`
- Destino: `develop`
- Rol: Desarrollador JS Local y Session Storage
- PR: #109, título exacto: "[AO4] Desarrollador JS Storage: capa de abstracción en js/utils/storage.js"
- Issue: #108

No modifiques archivos, no hagas commits y no publiques ninguna review en GitHub. Solo devolveme el informe. Podés ejecutar comandos de lectura o verificación sin modificar nada (por ejemplo, probar el módulo con Node simulando `localStorage` y `sessionStorage` en memoria).

Reconstruí el cambio real con el diff contra `origin/develop` y el historial de commits , La PR ya fue mergeada. Para reconstruir el cambio real, usá el estado previo a la corrección posterior a la review: git diff 90a2116^1...6ea79a4 y git log --oneline 90a2116^1..6ea79a4. Ignorá el commit 17781be.

Revisá:

1. **Git y trazabilidad**
   - `spec-dev-storage.md` debe estar commiteado antes que `js/utils/storage.js`.
   - No debe haber cambios ajenos al rol (por ejemplo `js/script.js`, `js/models/` o `js/test/`).
   - `changelog.md` debe registrar la PR #109 y la Issue #108. El título de la entrada tiene que ser IDÉNTICO, carácter por carácter, al título exacto de la PR indicado arriba. Compará los dos textos y marcá cualquier diferencia. Revisá también que el diff no borre ni modifique entradas de otros integrantes.

2. **Descripción de la PR**
   Compará solo con las secciones que la plantilla `feature-template.md` realmente contiene (datos del estudiante, rama de trabajo, Issue relacionada, especificación técnica y requerimientos de `plan.md`). No exijas secciones que la plantilla no tenga.

3. **Spec**
   - BEFORE: estrategia de almacenamiento (qué va a `localStorage` y qué a `sessionStorage`, con justificación), convención de claves, esquemas JSON y checklist de aceptación.
   - AT CLOSE: prompt exacto de Copilot en bloque de código con las clases de `js/models/` y la spec como contexto, fragmento de al menos una función CRUD con los ajustes manuales para el manejo de errores, y decisiones finales sobre la coordinación con el Desarrollador JS POO para la serialización de instancias.

4. **`js/utils/storage.js`**
   - Funciones `guardar(clave, valor, tipo)`, `obtener(clave, tipo)`, `actualizar(clave, valor, tipo)`, `eliminar(clave, tipo)`, `listar(prefijo, tipo)` y `limpiar(tipo)`, con `tipo = 'local'` por defecto y los valores `'local'` y `'session'`.
   - `try-catch` en todas las operaciones, manejo de almacenamiento lleno (cuota excedida) y de datos corruptos o mal formateados, con logs de errores informativos.
   - Serialización y deserialización automática de JSON.
   - Exportación válida como módulo ES6 y JSDoc en las funciones.
   - Sin referencias a `document`, `prompt` ni `alert`.
   - Comportamiento ante entradas inválidas (clave vacía, tipo inválido, valor no serializable) y ante la ausencia de `localStorage` o `sessionStorage`.
   - Verificá que las funciones públicas respeten el contrato del ejemplo de la consigna (`guardar` devuelve `true` o `false`, `obtener` devuelve el valor deserializado o `null`) y que `limpiar` haga lo que dice la consigna (limpiar todo el storage del tipo indicado). Indicá si la opción `soloProyecto` cambia ese comportamiento por defecto.

5. **Integración con POO**
   Probá guardar y recuperar instancias de `Producto`, `Catalogo`, `ItemCarrito` y `Carrito` mediante `toJSON()` y `fromJSON()`, incluyendo las funciones auxiliares de instancias si existen. Verificá que el resultado recuperado sea equivalente al original.

6. **Documentación**
   `docs/06-storage/storage-doc.md` debe describir qué datos se almacenan, la estructura de claves, los esquemas JSON, la diferencia entre `localStorage` y `sessionStorage` en el proyecto y ejemplos de uso, y debe coincidir con el código.

7. **Testabilidad para el Tester QA**
   Indicá si el módulo puede probarse en Node con un `localStorage` simulado y en el navegador, y qué hay que tener en cuenta para simular el error de cuota excedida.

### Formato de respuesta

1. **Veredicto:** CUMPLE / CUMPLE PARCIALMENTE / NO CUMPLE.
2. **Checklist** con ✅ / ⚠️ / ❌: Git e historial, Template PR, Spec BEFORE, Spec AT CLOSE, Funciones CRUD, Funciones auxiliares, Manejo de errores, Serialización JSON, Integración con POO, Documentación, Changelog, Testabilidad.
3. **Hallazgos que requieren cambios:** solo problemas reales. Para cada uno: severidad (BLOQUEANTE o RECOMENDACIÓN), archivo y línea o fragmento, requisito incumplido y corrección necesaria.
4. **Decisión sugerida:** solo `APPROVE` o `REQUEST_CHANGES`.

No inventes requisitos que no estén en la consigna, la spec, `plan.md` o la plantilla.
```

**Respuesta de Copilot:**

- Veredicto: CUMPLE PARCIALMENTE.
- Checklist: Git e historial ✅, Template PR ✅, Spec BEFORE ✅, Spec AT CLOSE ✅, Funciones CRUD ✅, Funciones auxiliares ✅, Manejo de errores ✅, Serialización JSON ✅, Integración con POO ✅, Documentación ✅, Changelog ⚠️, Testabilidad ✅.
- Hallazgo BLOQUEANTE (`changelog.md`, entrada de la PR #109): el título de la entrada era `[AO4] Desarrollador JavaScript Local y Session Storage: implementar capa de abstracción de storage en js/utils/storage.js`, y el título exacto de la PR es `[AO4] Desarrollador JS Storage: capa de abstracción en js/utils/storage.js`. Corrección: reemplazar el título por el exacto, carácter por carácter, sin modificar entradas de otros integrantes.
- Comportamiento verificado por Copilot: `limpiar("local")` y `limpiar("session")` limpian todas las claves del tipo indicado; `limpiar(tipo, true)` conserva las claves ajenas al proyecto y elimina solo las que empiezan con `app:`; los valores circulares y `undefined` devuelven `false`; la ida y vuelta JSON es correcta para `Producto`, `Catalogo`, `ItemCarrito` y `Carrito`; el error de cuota se simula lanzando `DOMException(..., "QuotaExceededError")` desde `setItem()`.
- Decisión sugerida: `REQUEST_CHANGES`.

**Validación manual:** el hallazgo se verificó en el diff de la rama contra `develop` (`git diff 90a2116^1...6ea79a4 -- changelog.md`): la entrada de Seba tenía el título largo y distinto al de la PR. La decisión sugerida por Copilot coincidió con la revisión manual y se aceptó.

**Review publicado en GitHub (Changes requested):**

> El módulo js/utils/storage.js, su documentación y el spec cumplen lo pedido: las seis funciones, manejo de errores, serialización JSON y la integración con las clases de js/models/. Queda un cambio bloqueante: RC1 (changelog).

**Comentario inline RC1 (`changelog.md`):**

> RC1 — Título del changelog incorrecto
>
> La entrada debe reproducir el título exacto de la PR #109: "[AO4] Desarrollador JS Storage: capa de abstracción en js/utils/storage.js". Hoy dice "Desarrollador JavaScript Local y Session Storage: implementar capa de abstracción de storage en js/utils/storage.js". Ajustar la entrada (o el título de la PR) para que ambos queden idénticos, carácter por carácter. Mantener la rama, la línea "PR:" indentada con dos espacios, el autor con su rol y la Issue #108.

**Corrección y verificación:** Seba corrigió el título de la entrada en el commit `17781be`. Se respondió en el hilo: "Corregido en 17781be: el título de la entrada coincide con el de la PR. Verificado en el diff". La verificación se hizo con `git diff origin/develop...origin/feature/dev-storage -- changelog.md`: la entrada pasó a ser idéntica al título de la PR (`[AO4] Desarrollador JS Storage: capa de abstracción en js/utils/storage.js`), con la línea `PR:` indentada y la Issue #108.

**Review de aprobación publicado en GitHub (Approved):**

> Verifiqué la corrección del RC1 (changelog) en 17781be: el título de la entrada es idéntico al de la PR #109. El módulo js/utils/storage.js, su documentación y el spec cumplen lo pedido

**Resultado:** PR mergeada en `develop` con merge commit `90a2116`.

### Code Review 3 — PR #107 (Desarrollador JS Eventos + DOM)

**PR revisada:** #107 `[AO4] Desarrollador JS Eventos + DOM: implementar interfaz interactiva`, rama `feature/dev-eventos-dom` hacia `develop`. Autor: @dantebiondi666-prog. Issue #106.
**Revisor:** Lucas Ivan Fischer (@LucasFUces), Coordinador / DevOps.

**Estado revisado:** último commit de la rama al momento de la review: `d4abfa6` (21/11 02:13). La rama todavía no integraba `develop`. Copilot leyó los archivos de la PR con `git show origin/feature/dev-eventos-dom:<ruta>`, porque la revisión se hizo desde otra rama.

**Prompt utilizado:**

```text
Actuá como revisor técnico de la PR #107:

Rama: feature/dev-eventos-dom
Destino: develop
Rol: Desarrollador JS Eventos + DOM
PR: #107, título exacto: "[AO4] Desarrollador JS Eventos + DOM: implementar interfaz interactiva"
Issue: la que figure en la descripción de la PR
No modifiques archivos, no hagas commits y no publiques ninguna review en GitHub. Solo devolveme el informe. Podés ejecutar comandos de lectura o verificación sin modificar nada.

Reconstruí el cambio real con git diff origin/develop...origin/feature/dev-eventos-dom y git log --oneline origin/develop..origin/feature/dev-eventos-dom. Si la rama todavía no integró develop, indicalo.

Estás parado en otra rama. NO leas js/script.js, index.html ni la spec del rol desde el disco: son de otra rama. Leé los archivos de la PR con git show origin/feature/dev-eventos-dom:<ruta> (por ejemplo git show origin/feature/dev-eventos-dom:js/script.js) y usá git diff origin/develop...origin/feature/dev-eventos-dom para el cambio real. Los archivos js/utils/storage.js y js/models/ sí podés leerlos del disco.

Revisá:

Git y trazabilidad

La spec del rol debe estar commiteada antes que los cambios en js/script.js e index.html.
No debe haber cambios ajenos al rol (por ejemplo js/models/, js/utils/storage.js o js/test/).
changelog.md debe registrar la PR #107 y su Issue. El título de la entrada tiene que ser IDÉNTICO, carácter por carácter, al título exacto de la PR indicado arriba. Compará los dos textos y marcá cualquier diferencia. Revisá también que el diff no borre ni modifique entradas de otros integrantes.
Descripción de la PR
Compará solo con las secciones que la plantilla feature-template.md realmente contiene (datos del estudiante, rama de trabajo, Issue relacionada, especificación técnica y requerimientos de plan.md). No exijas secciones que la plantilla no tenga.

Spec
Compará con lo que pide la consigna de AO4 para este rol: sección BEFORE y sección AT CLOSE con el prompt exacto de Copilot en bloque de código, contexto usado, ajustes manuales y decisiones finales.

js/script.js e index.html

No debe quedar ningún prompt() ni alert() en el código de la aplicación.
Los eventos deben registrarse con addEventListener y la manipulación del DOM debe usar createElement, textContent o equivalentes, sin innerHTML con datos del usuario.
La interfaz debe usar las clases de js/models/ (Catalogo, Carrito, etc.) y cubrir los cuatro flujos: consultar y filtrar catálogo, consultar producto y talle, gestionar carrito (agregar, modificar, eliminar) y resumen de compra.
Revisá que index.html cargue js/script.js como módulo (type="module") y que no haya referencias rotas.
Accesibilidad básica: cada campo de formulario con su label asociado (for/id).
Integración con Storage

Debe importar StorageUtil de js/utils/storage.js y usar StorageUtil.CLAVES.
El carrito debe guardarse con guardarInstancia después de cada alta, modificación y baja, y recuperarse al iniciar con cargarInstancia, con carrito vacío si devuelve null.
El filtro activo debe guardarse en sessionStorage con CLAVES.FILTRO_ACTIVO.
Verificá que al recargar la página el estado se restaure.
Testabilidad
Indicá qué hay que adaptar en js/test/node-setup.js, script.spec.js e integracion.spec.js para probar el controlador, ahora que js/script.js es un módulo con DOM.

Formato de respuesta
Veredicto: CUMPLE / CUMPLE PARCIALMENTE / NO CUMPLE.
Checklist con ✅ / ⚠️ / ❌: Git e historial, Template PR, Spec BEFORE, Spec AT CLOSE, Eventos, DOM, Integración con POO, Integración con Storage, Sin prompt/alert, Accesibilidad, Changelog, Testabilidad.
Hallazgos que requieren cambios: solo problemas reales. Para cada uno: severidad (BLOQUEANTE o RECOMENDACIÓN), archivo y línea o fragmento, requisito incumplido y corrección necesaria.
Decisión sugerida: solo APPROVE o REQUEST_CHANGES.
No inventes requisitos que no estén en la consigna, la spec, plan.md o la plantilla.

**Respuesta de Copilot:**

- Veredicto: CUMPLE PARCIALMENTE.
- Checklist: Git e historial ⚠️ (la rama no integra `develop`), Template PR ⚠️ (faltan los requerimientos de `plan.md`), Spec BEFORE ✅, Spec AT CLOSE ⚠️, Eventos ✅, DOM ✅, Integración con POO ✅, Integración con Storage ❌, Sin prompt/alert ✅, Accesibilidad ⚠️, Changelog ✅, Testabilidad ⚠️.
- Hallazgo BLOQUEANTE (`js/script.js`): no importa `StorageUtil`, no usa `CLAVES`, no persiste el carrito ni el filtro activo y no restaura el estado al iniciar. Corrección: importar `StorageUtil`, restaurar con `cargarInstancia(CLAVES.CARRITO_ITEMS, Carrito)` (carrito vacío si devuelve `null`), llamar a `guardarInstancia` después de agregar, modificar y eliminar, y guardar el filtro activo en `sessionStorage` con `CLAVES.FILTRO_ACTIVO`.
- Recomendaciones: asociar el campo de cantidad del carrito con su `label` mediante `for`/`id`; completar en la descripción de la PR los requerimientos de `plan.md`; adaptar `node-setup.js`, `script.spec.js` e `integracion.spec.js` al controlador con DOM. Copilot también recomendó documentar en el AT CLOSE todas las clases adjuntadas al prompt (afirmó que solo se declaraba `Producto.js`); esa afirmación resultó incorrecta (ver validación manual).
- Decisión sugerida: `REQUEST_CHANGES`.

**Validación manual:**

- Storage: confirmado con `Select-String` sobre el `js/script.js` de la rama: no contiene `StorageUtil`, `prompt()` ni `alert()`.
- Título del changelog: confirmado idéntico al de la PR con `Select-String -SimpleMatch` sobre el `changelog.md` de la rama. El hallazgo de Copilot de que el changelog cumple fue correcto.
- Descripción de la PR: confirmado que no contiene la sección `Consigna` ni los requerimientos de `plan.md`, ambos incluidos en `feature-template.md`.
- Integración con `develop`: GitHub informó conflicto en `changelog.md` por las entradas de Storage (PR #109).
- Accesibilidad: el defecto del campo de cantidad ya estaba reportado como Issue #110.
- AT CLOSE: Copilot afirmó que solo declaraba `Producto.js` como contexto. Se verificó con `git show` y `Select-String` sobre `spec-dev-eventos-dom.md` que el spec lista los cuatro archivos de `js/models/` como contexto. El hallazgo era incorrecto (error del agente). La recomendación se había incluido en el review publicado sin verificarla, y se retiró con un comentario en la PR.

**Review publicado en GitHub (Changes requested):**

> RC1 — Falta la integración con Storage (BLOQUEANTE). js/script.js no importa StorageUtil ni persiste el carrito ni el filtro activo. Hay que: importar StorageUtil desde js/utils/storage.js; recuperar el carrito al iniciar con StorageUtil.cargarInstancia(StorageUtil.CLAVES.CARRITO_ITEMS, Carrito), usando un carrito vacío si devuelve null; llamar a StorageUtil.guardarInstancia después de cada alta, modificación y baja del carrito; guardar el filtro activo en sessionStorage con CLAVES.FILTRO_ACTIVO; verificar con F5 que el carrito se conserva.
>
> RC2 — La rama no integró develop (BLOQUEANTE). Hay que hacer git merge develop y resolver el conflicto de changelog.md conservando todas las entradas (Juan, Seba y la propia), sin dejar marcas de conflicto.
>
> Recomendaciones (no bloqueantes): asociar el campo de cantidad del carrito con su label mediante for/id (Issue #110); documentar en el AT CLOSE el contexto completo adjuntado al prompt de Copilot (Catalogo, ItemCarrito y Carrito, además de Producto).

**Comentarios adicionales publicados en la PR:**

> Recomendaciones no bloqueantes sobre la descripción de la PR, según feature-template.md: agregar los requerimientos de plan.md afectados (RF, RNF y CA) en la sección de especificación técnica; completar la sección "Consigna" (Actividad Obligatoria N.º 4).
>
> Aclaración: retiro la recomendación sobre el contexto del AT CLOSE. Verifiqué en spec-dev-eventos-dom.md que sí lista Producto, Catalogo, ItemCarrito y Carrito como archivos de contexto. No hay nada que cambiar en ese punto. Los demás hallazgos de la review siguen vigentes.

**Corrección y verificación:** pendiente de la corrección de Dante (ver Code Review 4).

### Code Review 4 — PR #111 (corrección del Issue #103, Desarrollador JS POO)

**PR revisada:** #111 `[Fix AO4] Eliminar función normalizarTexto sin uso en Producto.js`, rama `fix/producto-eliminar-normalizar-texto` hacia `develop`. Autor: @juanmartinbritos7-cmd. Issue #103.
**Revisor:** Lucas Ivan Fischer (@LucasFUces), Coordinador / DevOps.

**Contexto:** el Issue #103 fue reportado por el Tester QA al medir la cobertura de `js/models/`: la función `normalizarTexto` de `Producto.js` estaba definida pero no se usaba ni se exportaba (líneas 6 a 12 sin cubrir). Este review cubre la revisión inicial de la corrección y la re-revisión posterior al `CHANGES_REQUESTED`, que es la cuarta instancia planificada en la sección 12.

**Prompt utilizado:**

```text
Actuá como revisor técnico de la PR #111:

- Rama: `fix/producto-eliminar-normalizar-texto`
- Destino: `develop`
- Rol: Desarrollador JavaScript POO
- PR: #111, título exacto: "[Fix AO4] Eliminar función normalizarTexto sin uso en Producto.js"
- Issue: la que figure en la descripción de la PR (el cambio responde al Issue #103)

No modifiques archivos, no hagas commits y no publiques ninguna review en GitHub. Solo devolveme el informe. Podés ejecutar comandos de lectura o verificación sin modificar nada.

Reconstruí el cambio real con `git diff origin/develop...origin/fix/producto-eliminar-normalizar-texto` y `git log --oneline origin/develop..origin/fix/producto-eliminar-normalizar-texto`. Estás parado en otra rama: leé los archivos de la PR con `git show origin/fix/producto-eliminar-normalizar-texto:<ruta>`.

Contexto: el Issue #103 reportó que `js/models/Producto.js` definía una función `normalizarTexto` que no se usaba ni se exportaba. La PR la elimina.

Revisá:

1. **Git y trazabilidad**
   - La rama parte del `develop` actualizado.
   - No debe haber cambios ajenos al objetivo.
   - `changelog.md` debe registrar la PR y la Issue usando el título exacto de la PR (formato de las entradas existentes). Indicá si la PR modifica `changelog.md`.
   - Indicá si el commit referencia la Issue.

2. **Descripción de la PR**
   Compará solo con las secciones que `.github/PULL_REQUEST_TEMPLATE/feature-template.md` realmente contiene. Leé esa plantilla antes de marcar algo como faltante.

3. **El cambio**
   - Verificá que la función eliminada no se use en ninguna otra parte de `js/models/Producto.js`, ni se importe desde otro archivo (`git grep`).
   - Verificá que no se perdió ninguna regla de negocio y que `Producto.js` sigue exportando lo mismo.
   - Verificá que `Catalogo.js` sigue funcionando (tiene su propia función `normalizarTexto`).

4. **Pruebas**
   Indicá si el cambio afecta a las suites existentes en `js/test/` y si existen pruebas que cubran `Producto`.

### Formato de respuesta

1. **Veredicto:** CUMPLE / CUMPLE PARCIALMENTE / NO CUMPLE.
2. **Checklist** con ✅ / ⚠️ / ❌: Git e historial, Template PR, Alcance del cambio, Referencias rotas, Changelog, Pruebas.
3. **Hallazgos que requieren cambios:** solo problemas reales. Para cada uno: severidad (BLOQUEANTE o RECOMENDACIÓN), archivo y línea o fragmento, requisito incumplido y corrección necesaria.
4. **Decisión sugerida:** solo `APPROVE` o `REQUEST_CHANGES`.

No inventes requisitos que no estén en la consigna, `plan.md` o la plantilla.
```

**Respuesta de Copilot:**

- Veredicto: NO CUMPLE.
- Checklist: Git e historial ✅, Template PR ✅, Alcance del cambio ✅, Referencias rotas ✅, **Changelog ❌**, Pruebas ⚠️.
- Hallazgo BLOQUEANTE (`changelog.md`): el diff no modifica `changelog.md`; faltan el registro de la PR #111 y de la Issue #103. Corrección: agregar una entrada con el título exacto de la PR.
- Observaciones de Copilot: el commit `11e397a` no menciona #103 en su mensaje (la descripción sí vincula la Issue con `Closes #103`); `Producto.js` conserva constructor, getters, `verificarTalleDisponible()`, `toJSON()`, `fromJSON()` y ambas exportaciones; `Catalogo.js` mantiene su propia `normalizarTexto()`.
- Decisión sugerida: `REQUEST_CHANGES`.

**Validación manual:**

- Diff: la rama modifica un solo archivo, `js/models/Producto.js`, con 13 líneas eliminadas (la función y su JSDoc). Confirmado con `git diff` y `git diff --stat`.
- Referencias: `git grep -n "normalizarTexto"` sobre la rama muestra referencias solo en `Catalogo.js` y `js/script.js`, que definen su propia función. No hay referencias rotas.
- Prueba de integración: se hizo un merge de prueba de la rama sobre `feature/tester-qa-specs` (con `--no-commit`, luego `--abort`). Resultado: 149 specs, 0 fallos. La cobertura de `js/models/` pasó a 100 % de líneas, ramas y funciones (`Producto.js` subió de 95,33 % a 100 %).
- Changelog: el hallazgo de Copilot coincidió con la verificación manual.
- Descripción de la PR: se agregaron dos recomendaciones no marcadas por Copilot, porque la descripción no usa los ítems del checklist de la plantilla y los requerimientos de `plan.md` no incluyen códigos RF/RNF/CA.

**Review publicado en GitHub (Changes requested):**

> RC1 — Falta la entrada en changelog.md (BLOQUEANTE). El diff solo modifica js/models/Producto.js. Hay que registrar la PR en changelog.md, en [Unreleased], bajo "### Fixed", con el título exacto de la PR, la línea PR: indentada con dos espacios (enlace a la PR #111, autor y rol) y la Issue #103, igual que las demás entradas.
>
> Recomendaciones (no bloqueantes): completar "Requerimientos afectados" con los códigos RF/RNF/CA de plan.md y usar los ítems del checklist de feature-template.md.

**Corrección y verificación:** Juan Britos subió el commit `eaaeb72` (22/11, 18:51) que agrega la entrada en `changelog.md`. Verifiqué con `git diff origin/develop...origin/fix/producto-eliminar-normalizar-texto` que el changelog solo suma 8 líneas nuevas: entrada bajo `### Fixed`, título exacto de la PR, `PR:` con enlace a #111 e `Issue:` con enlace a #103 indentados con 2 espacios, sin borrar ninguna entrada existente. El diff de código sigue limitado a eliminar `normalizarTexto` de `Producto.js` (2 archivos, +8 −13). El título también se verificó con `Select-String`; el resultado inicial negativo se debió a los acentos de la terminal y se confirmó con coincidencias parciales.

**Review de aprobación publicado en GitHub (Approved):**

> Verifiqué la corrección del changelog: la entrada está bajo ### Fixed, con el título de la PR, PR: #111 e Issue: #103, con la indentación de 2 espacios, y no se borró ninguna entrada existente. El diff de código solo elimina la función normalizarTexto sin uso en Producto.js. Probé el merge localmente con develop: 149 specs, 0 fallos. Aprobado.

**Resultado:** PR #111 aprobada y mergeada en `develop` con merge commit `9ba30b5` (22/11, 19:17).

---

## 11. Resumen final de Code Reviews

| Review | PR | Rol | Resultado inicial | CHANGES_REQUESTED | Resultado final |
|---|---|---|---|---|---|
| 1 | #102 | POO | Copilot sugirió APPROVE; la verificación manual solicitó cambios | RC1: título del changelog con punto final y línea `PR:` sin indentar (corregido en `8aaf7eb`) | Aprobada y mergeada en `develop` |
| 2 | #109 | Storage | Copilot sugirió REQUEST_CHANGES, coincidente con la verificación manual | RC1: título del changelog distinto al de la PR (corregido en `17781be`) | Aprobada y mergeada en `develop` (merge commit `90a2116`) |
| 3 | #107 | Eventos + DOM | Copilot sugirió REQUEST_CHANGES, coincidente con la verificación manual | RC1: falta integrar `StorageUtil`; RC2: la rama no incluye `develop` | Pendiente de la corrección de Dante |
| 4 | #111 | POO (corrección de la Issue #103) | Cambios solicitados: falta la entrada en `changelog.md` | RC1: entrada de changelog faltante (corregido en `eaaeb72`) | Aprobada y mergeada en `develop` (merge commit `9ba30b5`) |

---

## 12. Obstáculos encontrados y resolución

1. **Cantidad de PRs revisables.** La consigna pide un mínimo de cuatro code reviews, pero en un grupo de cuatro el Coordinador cuenta con tres PRs de otros roles. Se planificó la cuarta instancia como la revisión de las correcciones posteriores a un `CHANGES_REQUESTED`, que es la que registró la auditoría de AO3 como faltante.
2. **Errores en los Code Reviews.** En el Code Review 1, Copilot sugirió `APPROVE` sin detectar un desvío del changelog (error del agente, corregido con la verificación manual del diff). Además, la verificación manual descartó por error el hallazgo sobre la sección «Consigna» de la plantilla, que sí existía; se detectó y se documentó la corrección durante el Code Review 3. En el Code Review 3, Copilot afirmó que el AT CLOSE de la PR #107 declaraba solo `Producto.js` como contexto, lo cual resultó incorrecto al verificar el archivo; esa recomendación se publicó antes de verificarla y se retiró con un comentario en la PR.
3. **Módulos ES6 y entorno de testing.** Las clases de `js/models/` usan módulos ES6, lo que obligó a declarar `"type": "module"` en `package.json`, convertir `js/test/node-setup.js` y cargar los specs con `<script type="module">`. Como los módulos no se pueden abrir con `file://`, el runner se ejecuta desde un servidor local.
4. **Permisos del repositorio.** El repositorio y el tablero pertenecen a otro integrante, por lo que el cambio de estado de las tarjetas, la configuración de GitHub Pages y el acceso al canal de Slack se coordinaron con él.
5. **Dependencias entre roles y plazos.** Las ramas de Storage y de Eventos + DOM no estaban disponibles a un día de la entrega. Se definió un calendario con horarios límite y un orden de prioridades (sin `prompt()` ni `alert()` y con los cuatro flujos funcionando), y se coordinó la ayuda entre roles.

## 13. Correcciones de la Actividad Obligatoria N.º 3 y backport

### 13.1 Correcciones de la auditoría (PR #93)

| Observación | Resolución | PR o Issue |
|---|---|---|
| RC1 a RC3: títulos exactos de PR en el `changelog.md` | Rama `fix/rc-changelog-ao3` hacia `release/tercera-entrega`; registrada en `### Fixed` | PR #96 (merge `5c695e5`) |
| RC4 a RC8: pruebas de integración de los orquestadores con mocks de `prompt()` y `alert()` y cobertura formal con `c8` | Rama `fix/rc-testing-integracion-cobertura` hacia `release/tercera-entrega`; registrada en `### Fixed` | PR #97 (merge `2f72fa9`) |
| RC9: base visual del carrito para la integración con JavaScript | Plan de continuidad para la cuarta entrega | Issue #94 |
| RC10: bloque DOM y eventos inline heredado en `index.html` | Documentado para resolverlo antes de la integración | Issue #95 |
| RC11: rotación histórica de roles | Coordinación de AO4 a cargo de Lucas Fischer | — |

Flujo aplicado a cada corrección, según la consigna: rama `fix/` creada desde `release/tercera-entrega` (`git checkout release/tercera-entrega`, `git pull`, `git checkout -b fix/...`), corrección aplicada, PR hacia `release/tercera-entrega` y merge directo (rama sin protección), registro en `### Fixed` del `changelog.md` y respuesta en cada hilo del docente de la PR #93.

La release de AO3 se mergeó a `master` mediante la PR #93 (merge `15abc69`).

### 13.2 Backport hacia `develop`

Una vez mergeada la release a `master` se realizó el backport:

```bash
git checkout master
git pull
git checkout -b backport/release-tercera-entrega
git push origin backport/release-tercera-entrega
```

Antes de crear la rama se comprobó con `git log --oneline origin/master..origin/develop` que `develop` no tenía commits propios ausentes en `master`, por lo que el backport no iba a presentar conflictos. Se creó la PR #98 (`backport/release-tercera-entrega` → `develop`), que requirió la aprobación de otro integrante (la rama `develop` está protegida), y se mergeó con un merge commit (`2f199b0`). La rama del backport se eliminó una vez integrada.

### 13.3 Versionado

Se creó el tag y la GitHub Release `v1.1-tercera-entrega` sobre `master`, con el extracto del `changelog.md` correspondiente a la Actividad Obligatoria N.º 3.

### 13.4 Pendiente

- Aviso con `:pr-merged:` en el hilo de Slack de la PR #93 (pendiente de acceso al canal).