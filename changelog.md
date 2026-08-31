# Changelog

Este archivo se actualiza con cada Pull Request para registrar avances y correcciones.

---

## [Unreleased]


### Added
### Changed
### Fixed


---

## [Release Actividad Obligatoria N°1] - 2026-08-30

### Added
- [feature/ia-setup-sdd] Definición de la metodología Spec-Driven Development (SDD) para el proyecto: redacción de spec-ia.md, investigación y documentación de decisiones SDD en sdd-decisions.md, y creación del template spec-[rol].md para uso de todos los roles del equipo.
  
  PR: [#9](https://github.com/dantebiondi666-prog/tienda-online/pull/9) - @zikoloogo (Especialista en IA y Prompt Engineering)

  Issues:
  [#8](https://github.com/dantebiondi666-prog/tienda-online/issues/8)
  
- [feature/coordinador-setup-repo-and-pages] Estructura inicial del proyecto, creación de plan.md, changelog.md, templates para PR de release y feature, redacción de spec-devops.md y actualización de changelog.md.  
  PR: [#6](https://github.com/dantebiondi666-prog/tienda-online/pull/6) - @dantebiondi666-prog (Coordinador / DevOps)

  Issues:
  [#1](https://github.com/dantebiondi666-prog/tienda-online/issues/1)
  [#2](https://github.com/dantebiondi666-prog/tienda-online/issues/2) 
  [#3](https://github.com/dantebiondi666-prog/tienda-online/issues/3) 
  [#4](https://github.com/dantebiondi666-prog/tienda-online/issues/4) 
    [#5](https://github.com/dantebiondi666-prog/tienda-online/issues/5) 

- [feature/frontend-add-html-structure] Implementación de la estructura HTML5 inicial de la tienda online, basada en el mockup de Figma y en los requerimientos definidos en `plan.md`. Se incorporaron etiquetas semánticas, catálogo de productos, filtros, guía de talles, formulario de contacto y comentarios para futuras implementaciones de CSS y JavaScript.
  PR: [#12](https://github.com/dantebiondi666-prog/tienda-online/pull/12) - @juanmartinbritos7-cmd (Desarrollador Frontend)

  Issues:
  [#11](https://github.com/dantebiondi666-prog/tienda-online/issues/11)

- [feature/doc-ux-add-readme-and-mockup] Agrega README.md con carátula, objetivos, tecnologías y funcionalidades previstas; mockup inicial de la tienda en docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png; especificación spec-ux.md con trazabilidad a plan.md.
  PR: [#7](https://github.com/dantebiondi666-prog/tienda-online/pull/7) - @LucasFUces (Documentador / UX)

  Issues:
  [#10](https://github.com/dantebiondi666-prog/tienda-online/issues/10)

- [feature/ia-add-prompts-1-to-5] Redacción de `docs/02-prompts/comparativa-modelos.md` con comparación entre Claude Sonnet 5 Medium y GitHub Copilot Agent. Documentación completa del uso de IA en `prompts.md` y en `prompts-1.md` a `prompts-5.md`, incluyendo modelo, método de prompting, prompt exacto, resultado esperado, resultado obtenido, correcciones manuales y archivo aplicado.  
  PR: [#15](https://github.com/dantebiondi666-prog/tienda-online/pull/15) - @Zikoloogo (Especialista en IA)

  Issues:
  [#13](https://github.com/dantebiondi666-prog/tienda-online/issues/13)
  [#14](https://github.com/dantebiondi666-prog/tienda-online/issues/14)


- [release/actividad-obligatoria-1] changelog update, emprolijamiento del proyecto borrando .gitkeeps pendientes.  
  PR: [#16](https://github.com/dantebiondi666-prog/tienda-online/pull/16) - @dantebiondi666-prog (Coordinador / DevOps)



---

## Cómo usar este archivo

- Para cada PR, simplemente agregar una línea breve en la sección correspondiente a su cambio (Added, Changed, Fixed).  
- No es necesario escribir párrafos, sólo una frase corta + link a PR y responsable con rol.  
- Al hacer la entrega final, copiar todo lo que está en **[Unreleased]** a una nueva sección con la fecha y nombre de la entrega (release).  
- Mantener el orden y formato para facilitar el seguimiento.