# Spec — Arquitecto de Diagramas de Actividades (Actividad Obligatoria N°3)

- **Rol:** Arquitecto de Diagramas de Actividades
- **Integrante:** Lucas Ivan Fischer (LucasFUces)
- **Rama:** `feature/arq-diagramas-actividades`
- **Issue:** #N

---

## BEFORE (antes de abrir Copilot o escribir cualquier .puml)

### 1. Identificación de los 4 flujos

| # | Flujo | Actores | Decisiones principales | Ciclos |
|---|-------|---------|------------------------|--------|
| 1 | Consultar y filtrar el catálogo | Usuario, Sistema | ¿El criterio ingresado es válido? ¿El producto cumple el criterio? ¿Hubo resultados? | Recorrido del array de productos; repetir la consulta si el criterio es inválido |
| 2 | Consultar producto y disponibilidad de talle | Usuario, Sistema | ¿El producto existe? ¿El talle ingresado es válido? ¿El talle está disponible? | Repetir la solicitud de datos mientras sean inválidos |
| 3 | Gestionar carrito simulado | Usuario, Sistema | ¿Qué acción eligió (agregar, modificar, eliminar, salir)? ¿Los datos son válidos? ¿El producto está en el carrito? | Menú de acciones que se repite hasta que el usuario sale |
| 4 | Generar resumen de compra | Usuario, Sistema | ¿El carrito está vacío? | Recorrido del carrito acumulando subtotales y total |

### 2. Decisión sobre swimlanes

Se usarán swimlanes `|Usuario|` y `|Sistema|` en los 4 diagramas, porque todos los flujos combinan entrada del usuario mediante `prompt()` y procesamiento y salida del sistema mediante `alert()`/`console.log()`. En el flujo 4 la participación del usuario es mínima (elige la opción del menú y recibe el resumen), pero se mantiene la partición por coherencia entre los 4 diagramas.

### 3. Criterios de aceptación

- [ ] 4 diagramas con start, stop, actividades, decisiones if-then-else y ciclos
- [ ] Swimlanes donde el flujo involucra al usuario y al sistema
- [ ] Flujo lógico coherente con la implementación planificada en `plan.md`
- [ ] Archivos `.puml` y `.png` exportados para cada diagrama

---

## AT CLOSE (se completa al finalizar la tarea)

_Pendiente: prompt exacto usado en Copilot Agent, fragmento del .puml generado con los ajustes manuales y decisiones de diseño finales._