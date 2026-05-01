# Growdrive — Landing page

Landing page de Growdrive (outbound predecible: agendar reuniones calificadas en automático). El repo contiene **dos implementaciones paralelas** de la misma página y los archivos fuente de diseño.

---

## Estructura

```
landingpage/
├── divided-page/          # Implementación HTML/CSS estática (autoritativa)
│   ├── sections/          # 10 partials (cada uno se puede previsualizar solo)
│   ├── styles/            # main.css (producción) + dev.css (debug)
│   ├── scripts/           # dev-flag.js (panel de debug)
│   ├── build.mjs          # Concatenador de partials → index.html
│   └── index.html         # Generado por build.mjs (no editar a mano)
│
├── growdrive/             # Draft en React (referencia 1:1 del Figma)
│   ├── app.jsx            # Entrada
│   ├── app-top.jsx        # Header, Hero, Problem, Pipeline
│   ├── app-mid.jsx        # Features, Process, Market
│   ├── app-bot.jsx        # CTA, Why, Final
│   ├── icons.jsx          # Set de iconos Feather inline
│   └── assets/            # Imágenes raster (mockups, fotos, ilustraciones)
│
├── growdrive.fig          # Fuente original Figma (binario Kiwi)
├── growdrive.sketch       # Versión Sketch
├── growdrive.pdf          # Export PDF para revisión
└── README.md              # Este archivo
```

> **¿Qué uso para qué?**
> - Trabajo de estilo / landing real → `divided-page/`.
> - Consultar el diseño aprobado → `growdrive/` (React) o `growdrive.fig`.

---

## Quick start

### Servir localmente

Cualquier servidor estático sirve. Ejemplo:

```bash
cd landingpage
python3 -m http.server 8000
```

Abrir:
- **Página completa**: <http://localhost:8000/divided-page/index.html>
- **Sección individual**: <http://localhost:8000/divided-page/sections/03-problem.html>

### Editar una sección

Cada sección vive en `divided-page/sections/0X-*.html` como **HTML completo previsualizable**. Edita el archivo, refresca el navegador.

### Re-construir `index.html`

Solo necesario antes de hacer commit / publicar la página unificada:

```bash
cd divided-page
node build.mjs
```

El script lee cada `0X-*.html`, extrae el contenido entre los marcadores `<!-- #section:start -->` y `<!-- #section:end -->`, y los inyecta en `_shell.html` reemplazando `<!-- #content -->`. El resultado se escribe a `divided-page/index.html`.

---

## Sistema de partials

Cada archivo `sections/0X-*.html` cumple dos roles:

1. **Preview standalone** — abrible directo en el navegador. Tiene su propio `<head>`, fuentes, link a `main.css`, y `body.preview` aplica un padding + outline tenue para visualizar bordes.
2. **Fuente para el build** — todo lo que esté entre `#section:start` y `#section:end` se concatena en `index.html`.

```html
<body class="preview">
<!-- #section:start -->
  <!-- ← este bloque va a index.html -->
<!-- #section:end -->
</body>
```

Si añades un partial nuevo, nómbralo `11-*.html` (numeración define el orden) y respeta los marcadores.

---

## Dev layout inspector

Panel flotante con toggles para visualizar containers, secciones, espaciado y todas las cajas. Activo en cualquier página que cargue `scripts/dev-flag.js` (todos los previews + `index.html`).

| Toggle | Qué pinta |
|---|---|
| **Containers** | Outline magenta sobre `.container` y `.container-narrow` con label de la clase |
| **Secciones** | Tinta cada `<section>` y `<header>` con un color distinto + label de su clase |
| **Espaciado** | Resalta los `--pad-x` (40px) del container; outline punteado a `.card` (amarillo) y `.btn` (cian) |
| **Cajas (todo)** | Outline 1px a todos los elementos. Hover lo intensifica |

**Persistencia**: estado guardado en `localStorage` bajo la clave `gd:dev-layout`. Persiste entre páginas y recargas.

**Compactar / restaurar**: dentro del panel hay un botón "Compactar a punto" que reduce la bandera al puntito magenta (54% opacidad). Para volver a expandirla basta hacer click sobre el punto. Sin atajos de teclado — los combos `⌥+L`, `⌘+⌥+L` y `Ctrl+Shift+L` chocan con Firefox/Mac, así que opté por una solución 100% mouse.

**Quitar de producción**: borrar `<script defer src=".../dev-flag.js">` de `_shell.html` y de cada `0X-*.html`. El CSS se inyecta por JS, no hace falta tocar nada más.

---

## Design tokens

Definidos en `divided-page/styles/main.css` bajo `:root`. Resumen:

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#0B2A34` | Fondo principal (header, secciones oscuras) |
| `--green` | `#07D577` | Verde marca (CTAs, acentos) |
| `--green-2` | `#07CD72` | Verde texto resaltado (h1, h2 acentos) |
| `--gray-1` | `#C9C9C9` | Texto secundario sobre oscuro |
| `--red` | `#FF5252` | Iconos negativos (problemas) |
| `--container` | `1380px` | Ancho máximo estándar |
| `--container-narrow` | `1174px` | Ancho máximo angosto |
| `--pad-x` | `40px` | Padding lateral del container |

**Tipografía**: Lato (400 / 700 / 900). Cargada desde Google Fonts en cada `<head>`.

**Header**: altura 83px, sticky, fondo `--ink`. Logo 40px, nav 14px / `--gray-1` con gap 36px, CTA verde 15px.

---

## Convenciones

- **No editar `divided-page/index.html`**. Es output del build.
- **Usar variables CSS** (`var(--green)`) en lugar de hex literal cuando exista el token.
- **Iconos**: Feather Icons inline. Tamaños declarados en `width/height` y stroke en `currentColor` para que herede del padre.
- **Partials**: cada `0X-*.html` debe quedar funcional al abrirse standalone (no asumir DOM de otras secciones).

---

## Git

Repositorio: <git@github.com:elgrowdealvaro/landingpage.git>

Clave SSH dedicada (no la default):

```bash
GIT_SSH_COMMAND="ssh -i ~/.ssh/growdrive -o IdentitiesOnly=yes" \
  git clone git@github.com:elgrowdealvaro/landingpage.git
```

Para operaciones rutinarias añade ese `GIT_SSH_COMMAND` a tu shell o a un alias.
