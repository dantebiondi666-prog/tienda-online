# Spec — Arquitecto de Diagramas de Actividades (Actividad Obligatoria N°3)

- **Rol:** Arquitecto de Diagramas de Actividades
- **Integrante:** Lucas Ivan Fischer (LucasFUces)
- **Rama:** `feature/arq-diagramas-actividades`
- **Issue:** #86

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

### 1. Herramienta y contexto

- **Herramienta:** GitHub Copilot en modo Agente (Visual Studio Code)
- **Modelo utilizado:** [COMPLETAR: auto]
- **Archivos adjuntos como contexto:** `plan.md`, `index.html` y `docs/01-mockup/primer-parcial/disenio-bootstrap.png`

### 2. Prompt exacto utilizado

```
Actuá como Arquitecto de Diagramas de Actividades de la Actividad Obligatoria N°3. Usando como contexto el plan.md (sección 10.3 "Alcance específico de la Actividad Obligatoria N.º 3"), el index.html y el mockup adjunto, generá 4 diagramas de actividades en PlantUML, uno por cada flujo principal de la tienda Remer Us:

1. Consultar y filtrar el catálogo
2. Consultar producto y disponibilidad de talle
3. Gestionar carrito simulado
4. Generar resumen de compra

Requisitos de cada diagrama:
- Sintaxis correcta de PlantUML para diagramas de actividades, entre @startuml y @enduml.
- Inicio (start) y fin (stop) claramente marcados.
- Actividades con la sintaxis :Nombre de la actividad;
- Decisiones condicionales con if-then-else.
- Ciclos con while o repeat donde corresponda (recorrido de arrays, repetición del menú, reintento ante entradas inválidas).
- Swimlanes |Usuario| y |Sistema|, porque todos los flujos combinan entrada con prompt() y salida con alert()/console.log().
- Cada flujo debe seguir el patrón entrada → proceso → salida y ser coherente con una implementación en JavaScript puro (sin DOM ni eventos).

Guardá los archivos en docs/05-diagramas/01-diagrama-de-actividades/ con estos nombres:
- actividad-flujo-1-consultar-filtrar-catalogo.puml
- actividad-flujo-2-consultar-producto-talle.puml
- actividad-flujo-3-gestionar-carrito.puml
- actividad-flujo-4-resumen-compra.puml

Generá únicamente esos 4 archivos .puml. No generes imágenes, no modifiques ningún otro archivo del repositorio ni escribas código JavaScript.
```

### 3. Resultado generado por Copilot

Copilot creó los 4 archivos `.puml` en la carpeta indicada. La estructura se validó con un script de PowerShell (4 archivos esperados, `@startuml`/`@enduml`, `start`/`stop`, swimlanes, actividades, decisiones if-then-else y ciclos) y los 4 diagramas dieron PASS. Los `.png` se exportaron con la extensión PlantUML de VS Code.

### 4. Fragmentos generados por Copilot y ajustes manuales

El código de Copilot tenía sintaxis PlantUML correcta, pero se corrigieron a mano tres incoherencias de modelado.

**Ajuste 1 — Flujo 3: carril equivocado en la condición del menú.** Copilot dejó un cambio de carril a `|Usuario|` justo antes de `repeat while`, por lo que la condición "¿La acción es distinta de salir?" quedaba dibujada en el carril del Usuario, cuando la evalúa el Sistema. Se eliminó ese cambio de carril.

Generado por Copilot:

```
  endif
  |Usuario|
repeat while (¿La acción es distinta de salir?) is (sí)
```

Corregido:

```
  endif
repeat while (¿La acción es distinta de salir?) is (sí)
```

**Ajuste 2 — Flujo 3: elementos duplicados en el carrito.** Copilot siempre agregaba un objeto nuevo al array. Si el usuario agregaba dos veces el mismo producto y talle, quedaban dos elementos, y las operaciones de modificar y eliminar (que buscan por producto y talle) se volvían ambiguas. Además, el objeto no guardaba el precio, necesario para calcular subtotales en el flujo 4.

Generado por Copilot:

```
:Agregar un objeto producto-talle-cantidad al array del carrito;
```

Corregido:

```
if (¿Ya existe ese producto y talle en el carrito?) then (sí)
  :Sumar la cantidad al elemento existente;
else (no)
  :Agregar un objeto producto-talle-cantidad-precio al array del carrito;
endif
```

**Ajuste 3 — Flujo 4: validación de opción redundante.** Copilot modeló un ciclo que pedía "la opción de resumen" y repetía si era inválida. Esa validación corresponde al menú principal, y el `plan.md` define como entrada de este flujo el contenido del carrito. Se eliminó el ciclo de validación y el flujo conserva su decisión ("¿El carrito está vacío?") y su ciclo de recorrido del carrito.

Generado por Copilot:

```
:Seleccionar la opción de resumen mediante prompt();
|Sistema|
while (¿La opción ingresada es inválida?) is (sí)
  :Informar que la opción no es válida con alert();
  |Usuario|
  :Seleccionar nuevamente la opción de resumen mediante prompt();
  |Sistema|
endwhile (no)
```

Corregido:

```
:Elegir la opción de resumen de compra en el menú principal mediante prompt();
|Sistema|
```

### 5. Decisiones de diseño finales

- **Swimlanes en los 4 flujos:** todos combinan entradas por `prompt()` con procesamiento y salidas del sistema por `alert()`/`console.log()`. En el flujo 4 la participación del usuario es mínima, pero se mantiene la partición por coherencia entre los 4 diagramas.
- **Validación con reintento (`while`):** en los flujos 1, 2 y 3 los datos inválidos se informan y se vuelven a pedir, para que el código JavaScript valide antes de procesar.
- **Menú del carrito con `repeat`:** el flujo 3 se repite hasta que el usuario elige salir, lo que permite agregar, modificar y eliminar varias veces en una misma sesión.
- **Elementos del carrito identificados por producto y talle:** evita duplicados y hace que modificar y eliminar sean inequívocos.
- **El carrito guarda el precio:** el flujo 4 calcula subtotales como precio por cantidad.
- **Separación lógica/interfaz:** las actividades de validación, búsqueda y cálculo del Sistema se pueden implementar como funciones puras, y las de entrada y salida (`prompt()`, `alert()`) quedan aparte. Eso facilita los tests de Jasmine del Tester.
- **Coordinación con el Desarrollador JS:** los diagramas quedan disponibles en la rama `feature/arq-diagramas-actividades` como contrato de implementación, incluyendo los ajustes de los flujos 3 y 4 (el carrito suma la cantidad si el producto y talle ya existen y guarda el precio; el resumen se elige desde el menú principal).