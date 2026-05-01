---
name: growdrive-landing
description: Workflow específico del proyecto Growdrive landing page en /Users/alvarobaena/growdrive/landingpage (no genérico, solo este repo). Use cuando el usuario esté trabajando dentro de esa ruta, mencione "growdrive", "divided-page", archivos como "03-problem.html" / "_shell.html" / "build.mjs", los tokens propios del proyecto (--ink #0B2A34, --green #07D577), la bandera del dev layout inspector (scripts/dev-flag.js) o el draft React growdrive/app-*.jsx. NO disparar para landing pages genéricas, refactors de CSS sin contexto, ni preguntas sobre BEM/Lato/Feather Icons fuera de este repo.
---

# Growdrive landing — workflow

> **Alcance**: solo aplica a `/Users/alvarobaena/growdrive/landingpage/`. Si el cwd o el archivo no está bajo esa ruta, este skill no aplica.

## Estructura del repo
- **Autoritativo**: `divided-page/` (HTML/CSS estático que se publica como `index.html`).
- **Referencia diseño**: `growdrive/app-*.jsx` (draft React 1:1 del Figma) y `growdrive.fig` (binario Kiwi, no parseable — usar el draft React para verificar fidelidad).
- **Tokens en `divided-page/styles/main.css :root`**: `--ink #0B2A34`, `--green #07D577`, `--red #FF5252`, `--gray-1 #C9C9C9`, `--container 1380px`, `--container-narrow 1174px`, `--pad-x 40px`. Fuente Lato 400/700/900 cargada desde Google Fonts en cada `<head>`.

## Editar secciones
1. Las 10 secciones viven en `divided-page/sections/0X-*.html`. Cada una es HTML completo previsualizable, con su contenido entre `<!-- #section:start -->` / `<!-- #section:end -->`.
2. Tras editar cualquier `0X-*.html`, **ejecutar `node build.mjs`** desde `divided-page/` para regenerar `index.html`.
3. Preview standalone: `http://localhost:8000/divided-page/sections/0X-*.html`. Página completa: `http://localhost:8000/divided-page/index.html`.

## Convenciones del proyecto
- BEM (`.bloque__elemento--modificador`) — ejemplo real: `.problem__card-ic`, `.site-header__brand`.
- Iconos: SVG inline Feather, `stroke="currentColor"` para heredar color del padre.
- **Trampa conocida**: `replace_all` sobre `stroke="..."` o `fill="..."` afecta SVGs no relacionados (ya nos pasó con la polyline del stat-card de `03-problem.html`). Usar `Edit` puntual.
- Inline styles solo si hay 1 propiedad — con 2+ extraer a clase (ya hicimos esto para `.problem__note`, `.site-header__logo`).
- **Nunca** editar `divided-page/index.html` (es output del build).
- Antes de afirmar "esto coincide con el Figma" cotejar contra `growdrive/app-*.jsx` y mostrar tabla token-por-token.

## Dev layout inspector
`divided-page/scripts/dev-flag.js` se autoinstala (1 line `<script defer>` en cada `<head>`). Inyecta `styles/dev.css` y monta una bandera flotante con 4 toggles que activan clases `body.dev-*`: Containers (outline magenta), Secciones (tinta cada `<section>` y `<header>`), Espaciado (resalta `--pad-x`), Cajas (outline a todo). Persiste en `localStorage['gd:dev-layout']`. Sin atajos de teclado (chocan con Firefox/Mac); el modo "compactar" colapsa al puntito magenta y restaura con click.

## Comunicación
Español. Pensar y describir layouts geométricamente (containers, gaps, ejes, anclajes, % vs px). Cotejos contra Figma siempre como tabla token-por-token, no en prosa.
