/* Framework map: five-part pattern medallions on project-1.html */
(function () {
  var map = document.querySelector('.framework-map');
  if (!map) return;
  var medals = Array.prototype.slice.call(map.querySelectorAll('.fm-medal'));
  var stages = Array.prototype.slice.call(map.querySelectorAll('.fm-stage'));
  var gloss = map.querySelector('.fm-gloss');
  var prev = map.querySelector('.fm-prev');
  var next = map.querySelector('.fm-next');
  var idx = 0;
  function show(i) {
    idx = ((i % medals.length) + medals.length) % medals.length;
    medals.forEach(function (m, j) { m.setAttribute('aria-pressed', j === idx ? 'true' : 'false'); });
    stages.forEach(function (s, j) { s.classList.toggle('active', j === idx); });
    var link = stages[idx].getAttribute('data-gloss');
    if (gloss && link) gloss.href = link;
  }
  medals.forEach(function (m, i) {
    m.addEventListener('click', function () { show(i); });
  });
  if (prev) prev.addEventListener('click', function () { show(idx - 1); });
  if (next) next.addEventListener('click', function () { show(idx + 1); });
  show(0);
})();
