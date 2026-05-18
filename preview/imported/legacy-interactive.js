/* ──────────────────────────────────────────────────────────
   Legacy interactive handlers — ported from the source
   index.html so the imported Alert Panel + Message Strip
   stories work as live prototypes inside the storybook.
   These are exposed on `window` so the inline onclick=""
   attributes in the embedded HTML can find them.
   ────────────────────────────────────────────────────────── */
(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Alert Panel: collapse / expand the entire panel */
  window.togglePanel = function togglePanel(btn) {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    var list = btn.nextElementSibling;
    var chevron = btn.querySelector('.alert-panel__header-chevron');
    var EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
    var DURATION = '380ms';

    if (prefersReducedMotion) {
      list.classList.toggle('hidden', expanded);
      if (chevron) chevron.classList.toggle('is-open', !expanded);
      return;
    }

    if (expanded) {
      var startH = list.scrollHeight;
      list.style.height = startH + 'px';
      list.style.opacity = '1';
      list.style.overflow = 'hidden';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          list.style.transition = 'height ' + DURATION + ' ' + EASING + ', opacity 260ms ease';
          list.style.height = '0px';
          list.style.opacity = '0';
        });
      });
      list.addEventListener('transitionend', function done(e) {
        if (e.propertyName !== 'height') return;
        list.classList.add('hidden');
        list.style.cssText = '';
        list.removeEventListener('transitionend', done);
      });
    } else {
      list.classList.remove('hidden');
      var targetH = list.scrollHeight;
      list.style.height = '0px';
      list.style.opacity = '0';
      list.style.overflow = 'hidden';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          list.style.transition = 'height ' + DURATION + ' ' + EASING + ', opacity 300ms ease';
          list.style.height = targetH + 'px';
          list.style.opacity = '1';
        });
      });
      list.addEventListener('transitionend', function done(e) {
        if (e.propertyName !== 'height') return;
        list.style.cssText = '';
        list.removeEventListener('transitionend', done);
      });
    }
    if (chevron) chevron.classList.toggle('is-open', !expanded);
  };

  /* Alert Card: dismiss */
  window.dismissCard = function dismissCard(btn) {
    var card = btn.closest('.alert-card');
    var panel = card.closest('.alert-panel');
    if (card.classList.contains('is-dismissing')) return;
    if (prefersReducedMotion) {
      card.remove();
      window.updateCount(panel);
      return;
    }
    card.classList.add('is-dismissing');
    setTimeout(function () {
      var h = card.offsetHeight;
      card.style.height = h + 'px';
      void card.offsetHeight;
      card.classList.add('is-collapsing');
      setTimeout(function () {
        card.remove();
        window.updateCount(panel);
      }, 270);
    }, 210);
  };

  window.updateCount = function updateCount(panel) {
    if (!panel) return;
    var remaining = panel.querySelectorAll('.alert-card').length;
    var titleEl = panel.querySelector('.alert-panel__header-title');
    if (titleEl) titleEl.textContent = 'Alerts (' + remaining + ')';
  };

  /* Alert Card: read more */
  window.toggleReadMore = function toggleReadMore(btn) {
    var body = btn.previousElementSibling;
    var isCollapsed = body.classList.contains('is-collapsed');
    var titleEl = btn.closest('.alert-card').querySelector('.alert-card__title');
    var title = titleEl ? titleEl.textContent : '';
    btn.setAttribute('aria-label', isCollapsed
      ? 'Read less about ' + title
      : 'Read more about ' + title);
    btn.classList.toggle('expanded', isCollapsed);
    btn.childNodes[0].textContent = isCollapsed ? 'Read Less ' : 'Read More ';

    if (prefersReducedMotion) {
      body.classList.toggle('is-collapsed', !isCollapsed);
      return;
    }
    if (isCollapsed) {
      body.classList.remove('is-collapsed');
      var fullH = body.scrollHeight + 'px';
      body.style.maxHeight = '80px';
      body.style.overflow = 'hidden';
      body.style.transition = 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)';
      requestAnimationFrame(function () { body.style.maxHeight = fullH; });
      body.addEventListener('transitionend', function cleanup() {
        body.style.maxHeight = body.style.overflow = body.style.transition = '';
        body.removeEventListener('transitionend', cleanup);
      }, { once: true });
    } else {
      body.style.maxHeight = body.scrollHeight + 'px';
      body.style.overflow = 'hidden';
      body.style.transition = 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)';
      requestAnimationFrame(function () { body.style.maxHeight = '80px'; });
      body.addEventListener('transitionend', function cleanup() {
        body.classList.add('is-collapsed');
        body.style.maxHeight = body.style.overflow = body.style.transition = '';
        body.removeEventListener('transitionend', cleanup);
      }, { once: true });
    }
  };

  /* Message Strip: dismiss */
  window.dismissStrip = function dismissStrip(btn) {
    var item = btn.closest('.sce-strip-item');
    if (!item) return;
    item.style.transition = 'opacity 0.2s ease';
    item.style.opacity = '0';
    setTimeout(function () { item.remove(); }, 220);
  };

  /* SCE Alert: dismiss (used by Alert.tsx demo) */
  window.dismissAlert = function dismissAlert(btn) {
    var alert = btn.closest('.sce-alert');
    if (!alert) return;
    alert.style.transition = 'opacity 0.2s ease';
    alert.style.opacity = '0';
    setTimeout(function () { alert.remove(); }, 220);
  };
})();
