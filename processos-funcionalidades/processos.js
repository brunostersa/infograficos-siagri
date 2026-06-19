/* processos.js — Processos & Funcionalidades */
(function () {
  var MOBILE_BP = 640;

  function isMobile() {
    return window.matchMedia('(max-width: ' + MOBILE_BP + 'px)').matches;
  }

  function getAccordionPanel(item) {
    var sib = item.nextElementSibling;
    return (sib && sib.classList.contains('pf-accordion-panel')) ? sib : null;
  }

  /* ── Desktop: atualiza painel direito ── */
  function activateDesktop(item, items, panel) {
    items.forEach(function (el) { el.classList.remove('pf-item--active'); });
    item.classList.add('pf-item--active');

    var features = JSON.parse(item.dataset.features || '[]');
    panel.innerHTML = '';
    features.forEach(function (text, i) {
      var li = document.createElement('li');
      li.className = 'pf-feature';
      li.style.animationDelay = (i * 0.06) + 's';
      li.textContent = text;
      panel.appendChild(li);
    });
  }

  /* ── Mobile: accordion ── */
  function openAccordion(item, items) {
    // fecha todos
    items.forEach(function (el) {
      el.classList.remove('pf-item--active');
      var p = getAccordionPanel(el);
      if (p) p.classList.remove('open');
    });
    // abre o clicado
    item.classList.add('pf-item--active');
    var p = getAccordionPanel(item);
    if (p) p.classList.add('open');
  }

  function closeAccordion(item) {
    item.classList.remove('pf-item--active');
    var p = getAccordionPanel(item);
    if (p) p.classList.remove('open');
  }

  /* ── Injeta painéis accordion em cada <li> ── */
  function injectAccordionPanels(items) {
    items.forEach(function (item) {
      if (getAccordionPanel(item)) return; // já existe
      var features = JSON.parse(item.dataset.features || '[]');
      var panel = document.createElement('div');
      panel.className = 'pf-accordion-panel';
      var ul = document.createElement('ul');
      ul.className = 'pf-features';
      ul.setAttribute('role', 'list');
      features.forEach(function (text) {
        var li = document.createElement('li');
        li.className = 'pf-feature';
        li.textContent = text;
        ul.appendChild(li);
      });
      panel.appendChild(ul);
      item.insertAdjacentElement('afterend', panel);
    });
  }

  function init(section) {
    var items = Array.from(section.querySelectorAll('.pf-list > .pf-item'));
    var panel = section.querySelector('.pf-col--right .pf-features');
    if (!items.length || !panel) return;

    injectAccordionPanels(items);

    items.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        if (!isMobile()) activateDesktop(item, items, panel);
      });

      item.addEventListener('click', function () {
        if (isMobile()) {
          var alreadyOpen = item.classList.contains('pf-item--active');
          if (alreadyOpen) {
            closeAccordion(item);
          } else {
            openAccordion(item, items);
          }
        } else {
          activateDesktop(item, items, panel);
        }
      });

      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          var next = items[items.indexOf(item) + 1];
          if (next) { next.focus(); if (!isMobile()) activateDesktop(next, items, panel); }
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          var prev = items[items.indexOf(item) - 1];
          if (prev) { prev.focus(); if (!isMobile()) activateDesktop(prev, items, panel); }
        }
      });
    });

    // estado inicial: primeiro item ativo nos dois modos
    activateDesktop(items[0], items, panel);   // desktop: painel direito
    var firstAcc = getAccordionPanel(items[0]); // mobile: accordion aberto
    if (firstAcc) firstAcc.classList.add('open');
  }

  document.querySelectorAll('.pf-section').forEach(init);
})();
