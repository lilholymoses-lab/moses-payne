(function () {
  var root = document.documentElement;
  var KEY = 'gob-theme';
  function current() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function setTheme(next) {
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
    render();
  }
  function render() {
    var dark = current() === 'dark';
    var btns = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', dark ? 'true' : 'false');
      var moon = btns[i].querySelector('.icon-moon');
      var sun = btns[i].querySelector('.icon-sun');
      if (moon) moon.style.display = dark ? 'none' : '';
      if (sun) sun.style.display = dark ? '' : 'none';
    }
  }
  function onScroll() {
    var header = document.querySelector('.site-header');
    var floatBtn = document.querySelector('.theme-toggle-float');
    if (!header) return;
    var y = window.scrollY || window.pageYOffset || 0;
    var scrollingDown = y > (onScroll.last || 0);
    onScroll.last = y;
    var hide = scrollingDown && y > 140;
    if (header.classList.contains('hidden') !== hide) {
      header.classList.toggle('hidden', hide);
    }
    if (floatBtn) floatBtn.classList.toggle('visible', hide);
  }
  document.addEventListener('DOMContentLoaded', function () {
    render();
    var btns = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        setTheme(current() === 'dark' ? 'light' : 'dark');
      });
    }
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () { onScroll(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
    onScroll();
  });
})();
