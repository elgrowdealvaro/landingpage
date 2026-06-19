/* ============================================================
   Dev layout inspector — self-installing flag
   Inyecta dev.css + panel flotante en cualquier página que
   incluya este script. Resuelve la ruta de dev.css a partir
   de la ubicación del propio script.
   Uso (en cualquier <head>):
     <script defer src="../scripts/dev-flag.js"></script>
   ============================================================ */
(function () {
  // Solo en desarrollo: localhost, 127.0.0.1 o archivo abierto directo (file://).
  // En producción (growdrive.app, *.github.io) el panel no se monta.
  var h = location.hostname;
  var isDev = h === 'localhost' || h === '127.0.0.1' || h === '0.0.0.0' || h === '' || /\.local$/.test(h);
  if (!isDev) return;

  if (window.__devFlagInstalled) return;
  window.__devFlagInstalled = true;

  var script = document.currentScript;
  if (!script) {
    var tags = document.getElementsByTagName('script');
    script = tags[tags.length - 1];
  }
  // .../scripts/dev-flag.js  →  .../styles/dev.css
  var cssHref = script.src.replace(/\/scripts\/[^/]+$/, '/styles/dev.css');

  function injectCss() {
    if (document.querySelector('link[data-dev-flag]')) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssHref;
    link.setAttribute('data-dev-flag', '');
    document.head.appendChild(link);
  }

  function buildPanel() {
    var wrap = document.createElement('div');
    wrap.id = 'dev-flag';
    wrap.className = 'dev-flag';
    wrap.setAttribute('aria-label', 'Layout inspector');
    wrap.innerHTML =
      '<button id="dev-flag-toggle" class="dev-flag__toggle" aria-expanded="false" aria-controls="dev-flag-panel" title="Click para abrir / minimizar">' +
        '<span class="dev-flag__dot" aria-hidden="true"></span>' +
        '<span class="dev-flag__label">layout</span>' +
      '</button>' +
      '<div id="dev-flag-panel" class="dev-flag__panel" hidden>' +
        '<span class="dev-flag__hint">Visual debug</span>' +
        '<label><input type="checkbox" data-dev="container"> Containers</label>' +
        '<label><input type="checkbox" data-dev="sections"> Secciones</label>' +
        '<label><input type="checkbox" data-dev="spacing"> Espaciado</label>' +
        '<label><input type="checkbox" data-dev="boxes"> Cajas (todo)</label>' +
        '<hr>' +
        '<button type="button" id="dev-flag-collapse" class="dev-flag__minilink">Compactar a punto</button>' +
        '<span class="dev-flag__hint">Click sobre el punto para volver</span>' +
      '</div>';
    document.body.appendChild(wrap);
    return wrap;
  }

  function wire(flag) {
    var KEY = 'gd:dev-layout';
    var state = {};
    try { state = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (_) {}

    var btn = flag.querySelector('#dev-flag-toggle');
    var panel = flag.querySelector('#dev-flag-panel');
    var collapseBtn = flag.querySelector('#dev-flag-collapse');

    function persist() { localStorage.setItem(KEY, JSON.stringify(state)); }
    function setCollapsed(on) {
      flag.classList.toggle('is-collapsed', !!on);
      if (on) panel.hidden = true;
      btn.setAttribute('aria-expanded', String(!panel.hidden));
      state.__collapsed = !!on;
      persist();
    }

    // restore: capas
    flag.querySelectorAll('input[data-dev]').forEach(function (input) {
      var key = input.dataset.dev;
      var cls = 'dev-' + key;
      if (state[key]) { input.checked = true; document.body.classList.add(cls); }
      input.addEventListener('change', function () {
        document.body.classList.toggle(cls, input.checked);
        state[key] = input.checked;
        persist();
      });
    });

    // restore: collapsed
    if (state.__collapsed) setCollapsed(true);

    // toggle del panel: si está colapsada, expandir; si no, abrir/cerrar el panel
    btn.addEventListener('click', function () {
      if (flag.classList.contains('is-collapsed')) {
        setCollapsed(false);
        panel.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        return;
      }
      var isOpen = !panel.hidden;
      panel.hidden = isOpen;
      btn.setAttribute('aria-expanded', String(!isOpen));
    });

    collapseBtn.addEventListener('click', function () { setCollapsed(true); });
  }

  function init() {
    injectCss();
    var flag = buildPanel();
    wire(flag);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
