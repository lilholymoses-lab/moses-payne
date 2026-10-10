(function () {
  var root = document.documentElement;
  var KEY = 'gob-theme';
  function current() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function render(btn) {
    if (!btn) return;
    var dark = current() === 'dark';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    var moon = btn.querySelector('.icon-moon');
    var sun = btn.querySelector('.icon-sun');
    if (moon) moon.style.display = dark ? 'none' : '';
    if (sun) sun.style.display = dark ? '' : 'none';
  }
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    render(btn);
    if (btn) {
      btn.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem(KEY, next); } catch (e) {}
        render(btn);
      });
    }
  });
})();
