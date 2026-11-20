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

El informe se validó manualmente contra los archivos reales. Se detectaron dos errores del agente:

1. **No detectó el desvío del changelog.** El informe indicó que el título de la entrada de `changelog.md` coincidía con el de la PR #102. Al revisar el diff (`git diff origin/develop...HEAD -- changelog.md`) se verificó que la entrada terminaba con un punto final que el título de la PR no tiene y que la línea `PR:` estaba sin la indentación de dos espacios que usan las demás entradas. Por ese motivo la decisión sugerida (`APPROVE`) no se aceptó.
2. **Propuso un requisito inexistente.** El hallazgo 1 pedía una sección «Consigna» y ítems de checklist. Al leer `.github/PULL_REQUEST_TEMPLATE/feature-template.md` se comprobó que la plantilla solo incluye datos del estudiante, rama de trabajo, Issue relacionada, especificación técnica y requerimientos de `plan.md`, y que la descripción de la PR cumplía todos esos campos. El hallazgo se descartó.

El hallazgo 2 (módulos ES6) se aceptó como nota no bloqueante: es una decisión de infraestructura de testing y no un incumplimiento del Desarrollador POO. Quedó a cargo del Tester QA, que declaró `"type": "module"` en `package.json`, convirtió `js/test/node-setup.js` y cargó los specs como módulos en `test-runner.html`.

**CHANGES_REQUESTED:**

**[ELEGIR UNA VARIANTE Y BORRAR LA OTRA]**

*Variante A (la review se publicó en GitHub):* Sí. Se publicó una review con estado `Changes requested` y un comentario inline en `changelog.md` (RC1): el título de la entrada debía reproducir el título exacto de la PR, sin el punto final, y la línea `PR:` debía ir indentada con dos espacios, manteniendo los enlaces a la PR #102 y a la Issue #101. Se agregó una nota no bloqueante sobre la estrategia de módulos ES6.

*Variante B (no se publicó la review previa):* Sí. El hallazgo del changelog (título con punto final y línea `PR:` sin indentar) se comunicó al desarrollador por el canal del equipo y se corrigió antes de aprobar. La aprobación en GitHub dejó registrado el hallazgo y su verificación.

**Resultado final:**

`APPROVED`.

El Desarrollador POO corrigió el changelog en el commit `8aaf7eb`. Se verificó en el diff que el título coincide exactamente con el de la PR (sin punto final) y que la línea `PR:` quedó indentada; las líneas en blanco adicionales se consideraron un detalle estético no bloqueante. La PR #102 fue aprobada y mergeada a `develop`.

**Merge commit:** `df2ff50`.

### Code Review 2

**PR:** *(completar)*  
**Rol:** Desarrollador JS Storage  
*(completar con la misma estructura)*

### Code Review 3

**PR:** *(completar)*  
**Rol:** Desarrollador JS Eventos + DOM  
*(completar con la misma estructura)*

### Code Review 4

**PR:** *(completar)*  
**Tipo:** Revisión de correcciones posteriores a un `CHANGES_REQUESTED`  
*(completar con la misma estructura)*

---

## 11. Resumen final de Code Reviews

| Review | PR | Rol | Resultado inicial | CHANGES_REQUESTED | Resultado final |
|---|---|---|---|---|---|
| 1 | *(completar)* | POO | *(completar)* | *(completar)* | *(completar)* |
| 2 | *(completar)* | Storage | *(completar)* | *(completar)* | *(completar)* |
| 3 | *(completar)* | Eventos + DOM | *(completar)* | *(completar)* | *(completar)* |
| 4 | *(completar)* | *(completar)* | *(completar)* | *(completar)* | *(completar)* |

---

## 12. Obstáculos encontrados y resolución

*(completar al cierre de la entrega)*