// Define o tema antes do primeiro paint (evita flash). Arquivo externo de
// mesma origem para respeitar a CSP (script-src 'self'), sem script inline.
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersLight =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (prefersLight ? 'light' : 'dark');
    document.documentElement.dataset.theme = theme;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'light' ? '#f4f1ea' : '#101012');
    }
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
