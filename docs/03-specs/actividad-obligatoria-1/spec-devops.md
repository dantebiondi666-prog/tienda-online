# Especificación técnica - Coordinador / DevOps

## Objetivo

Configurar la estructura inicial del repositorio y establecer el flujo de trabajo con Git y GitHub que utilizará el equipo durante la Actividad Obligatoria N°1.

## 1. ¿Qué se va a hacer?

- Configurar las ramas principales `master` y `develop`.
- Configurar las reglas de protección de las ramas.
- Preparar la estructura inicial del repositorio.
- Crear el archivo `plan.md` con los requerimientos funcionales del proyecto utilizando GitHub Copilot en modo agente.
- Configurar las plantillas para Pull Requests.
- Administrar y revisar las Pull Requests del equipo.
- Preparar la rama `release/actividad-obligatoria-1`.
- Publicar la entrega mediante GitHub Pages.

## 2. ¿Por qué?

Para establecer un flujo de trabajo colaborativo organizado, mantener protegidas las ramas principales y permitir que cada integrante realice sus cambios mediante ramas `feature` y Pull Requests revisadas antes de incorporarlas a `develop`.

## 3. Criterios de aceptación

### Criterios de aceptación de esta PR inicial

- [x] La rama `master` existe en el repositorio remoto.
- [x] La rama `develop` existe en el repositorio remoto.
- [x] Las ramas `master` y `develop` poseen reglas de protección.
- [x] La estructura inicial del proyecto se encuentra creada.
- [x] Existe un archivo `plan.md` con los requerimientos, criterios de aceptación y alcance del proyecto.
- [x] Existen plantillas para las Pull Requests.
- [x] El archivo `changelog.md` registra la contribución correspondiente.
- [x] Existe una o más Issues vinculadas a las tareas de esta PR.

### Criterios correspondientes a la etapa final del rol

- [ ] Las Pull Requests del equipo fueron revisadas antes del merge.
- [ ] Se realizaron las revisiones asistidas con IA requeridas.
- [ ] Se crea la rama `release/actividad-obligatoria-1` desde `develop`.
- [ ] La entrega se encuentra publicada mediante GitHub Pages.

## 4. Uso de IA en esta tarea

- **Modelo utilizado:** ChatGPT
- **Qué se le pidió (resumen):** Redactar la especificación técnica correspondiente al rol Coordinador/DevOps, tomando como contexto la consigna de la Actividad Obligatoria N°1, `plan.md` y el template `spec-[rol].md` definido para el equipo.
- **Qué se aceptó del resultado y qué se corrigió manualmente:** Se utilizó la estructura y los criterios propuestos como base. Luego se revisaron y ajustaron manualmente las tareas, criterios de aceptación y referencias para que coincidieran con el flujo de trabajo real del repositorio.
- **Prompt documentado en:** `docs/02-prompts/prompts-X.md`