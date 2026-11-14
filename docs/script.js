(function () {
  'use strict';

  var root = document.documentElement;
  var themeButton = document.getElementById('theme-toggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function paintTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
      themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'dark' ? '#07131F' : '#F3EEE2');
    }
  }

  paintTheme(root.getAttribute('data-theme') || 'light');

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      paintTheme(next);
      try {
        localStorage.setItem('showcase-theme', next);
      } catch (e) {}
    });
  }

  var reveals = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  var stopsDialog = document.getElementById('detail-dialog');
  var openStops = document.getElementById('open-detail');

  if (stopsDialog && openStops) {
    var closeStops = stopsDialog.querySelectorAll('[data-close]');

    openStops.addEventListener('click', function () {
      if (typeof stopsDialog.showModal === 'function') {
        stopsDialog.showModal();
      } else {
        stopsDialog.setAttribute('open', '');
      }
    });

    closeStops.forEach(function (button) {
      button.addEventListener('click', function () {
        stopsDialog.close();
      });
    });

    stopsDialog.addEventListener('click', function (event) {
      if (event.target === stopsDialog) {
        stopsDialog.close();
      }
    });
  }

  var stage = document.getElementById('bubble-stage');
  var bubble = document.getElementById('prop-bubble');
  var hideButton = document.getElementById('bubble-hide');
  var restoreButton = document.getElementById('bubble-restore');
  var bubbleHint = document.getElementById('bubble-hint');
  var bubbleDrain = bubble ? bubble.querySelector('.prop-bubble__drain') : null;
  var bubbleMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (stage && bubble && hideButton && restoreButton) {
    var posX = 0;
    var posY = 0;
    var startX = 0;
    var startY = 0;
    var startPosX = 0;
    var startPosY = 0;
    var dragging = false;
    var hidden = false;
    var paintFrame = 0;
    var limits = null;

    function measureLimits() {
      var baseLeft = bubble.offsetLeft;
      var baseTop = bubble.offsetTop;
      limits = {
        minX: -baseLeft,
        maxX: stage.clientWidth - bubble.offsetWidth - baseLeft,
        minY: -baseTop,
        maxY: stage.clientHeight - bubble.offsetHeight - baseTop
      };
    }

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function restartDrain() {
      if (!bubbleDrain || bubbleMotion.matches) return;
      bubbleDrain.style.animation = 'none';
      void bubbleDrain.offsetWidth;
      bubbleDrain.style.animation = '';
    }

    function paint() {
      paintFrame = 0;
      bubble.style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0)';
      if (bubbleHint) {
        bubbleHint.style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0) rotate(-6deg)';
      }
    }

    function moveTo(x, y) {
      if (!limits) measureLimits();
      posX = clamp(x, limits.minX, limits.maxX);
      posY = clamp(y, limits.minY, limits.maxY);
      if (!paintFrame) paintFrame = window.requestAnimationFrame(paint);
    }

    function flushPaint() {
      if (paintFrame) {
        window.cancelAnimationFrame(paintFrame);
        paintFrame = 0;
      }
      paint();
    }

    function overlapsHideTarget() {
      var b = bubble.getBoundingClientRect();
      var t = hideButton.getBoundingClientRect();
      var cx = b.left + b.width / 2;
      var cy = b.top + b.height / 2;
      return cx > t.left - 18 && cx < t.right + 18 && cy > t.top - 18 && cy < t.bottom + 18;
    }

    function hideBubble(shouldFocus) {
      hidden = true;
      bubble.classList.remove('is-returning');
      if (paintFrame) {
        window.cancelAnimationFrame(paintFrame);
        paintFrame = 0;
      }
      bubble.hidden = true;
      if (bubbleHint) bubbleHint.hidden = true;
      restoreButton.hidden = false;
      if (shouldFocus) restoreButton.focus();
    }

    function showBubble() {
      hidden = false;
      posX = 0;
      posY = 0;
      limits = null;
      if (paintFrame) {
        window.cancelAnimationFrame(paintFrame);
        paintFrame = 0;
      }
      paint();
      bubble.hidden = false;
      restoreButton.hidden = true;
      if (bubbleHint) bubbleHint.hidden = false;
      if (!bubbleMotion.matches) {
        bubble.classList.remove('is-returning');
        void bubble.offsetWidth;
        bubble.classList.add('is-returning');
      }
      restartDrain();
      bubble.focus();
    }

    bubble.addEventListener('animationend', function (event) {
      if (event.animationName === 'bubble-home') bubble.classList.remove('is-returning');
    });

    bubble.addEventListener('pointerdown', function (event) {
      if (hidden || (event.button !== undefined && event.button !== 0)) return;
      event.preventDefault();
      bubble.classList.remove('is-returning');
      measureLimits();
      dragging = true;
      startX = event.clientX;
      startY = event.clientY;
      startPosX = posX;
      startPosY = posY;
      stage.classList.add('is-dragging');
      if (bubble.setPointerCapture) {
        try {
          bubble.setPointerCapture(event.pointerId);
        } catch (error) {}
      }
      document.body.style.userSelect = 'none';
    });

    bubble.addEventListener('pointermove', function (event) {
      if (!dragging) return;
      event.preventDefault();
      moveTo(startPosX + event.clientX - startX, startPosY + event.clientY - startY);
    });

    function endDrag(event) {
      if (!dragging) return;
      dragging = false;
      stage.classList.remove('is-dragging');
      document.body.style.userSelect = '';
      flushPaint();

      if (event && bubble.hasPointerCapture && bubble.hasPointerCapture(event.pointerId)) {
        bubble.releasePointerCapture(event.pointerId);
      }

      if (overlapsHideTarget()) {
        hideBubble(true);
      } else {
        restartDrain();
      }
    }

    bubble.addEventListener('pointerup', endDrag);
    bubble.addEventListener('pointercancel', endDrag);
    bubble.addEventListener('lostpointercapture', function () {
      if (dragging) endDrag(null);
    });

    window.addEventListener('resize', function () {
      limits = null;
      if (hidden || dragging) return;
      measureLimits();
      posX = clamp(posX, limits.minX, limits.maxX);
      posY = clamp(posY, limits.minY, limits.maxY);
      flushPaint();
    });

    hideButton.addEventListener('click', function () {
      if (!hidden) hideBubble(true);
    });

    restoreButton.addEventListener('click', showBubble);
  }
})();
