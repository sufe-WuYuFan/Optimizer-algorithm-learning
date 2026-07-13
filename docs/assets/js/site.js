(function () {
  'use strict';

  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));

  function syncThemeControl() {
    if (!themeToggle) return;
    const isDark = root.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? '切换到浅色主题' : '切换到深色主题');
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    try {
      localStorage.setItem('wy-theme', theme);
    } catch (error) {
      // The selected theme still applies when browser storage is unavailable.
    }
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#121718' : '#f7f6f2');
    syncThemeControl();
  }

  syncThemeControl();

  themeToggle?.addEventListener('click', function () {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  function closeNav() {
    nav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }

  navToggle?.addEventListener('click', function () {
    const willOpen = !nav?.classList.contains('is-open');
    nav?.classList.toggle('is-open', willOpen);
    navToggle.setAttribute('aria-expanded', String(willOpen));
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeNav();
  });

  const sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(function (entries) {
      const visible = entries
        .filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];

      if (!visible) return;
      navLinks.forEach(function (link) {
        const isActive = link.getAttribute('href') === '#' + visible.target.id;
        link.classList.toggle('is-active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }, {
      rootMargin: '-25% 0px -62% 0px',
      threshold: [0, 0.2, 0.6]
    });

    sections.forEach(function (section) { observer.observe(section); });
  }

  document.querySelectorAll('img[data-fallback]').forEach(function (image) {
    function useFallback() {
      const fallbackUrl = new URL(image.dataset.fallback, document.baseURI).href;
      if (image.src === fallbackUrl) return;
      image.src = fallbackUrl;
    }

    image.addEventListener('error', useFallback);
    if (image.complete && image.naturalWidth === 0) useFallback();
  });

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
}());
