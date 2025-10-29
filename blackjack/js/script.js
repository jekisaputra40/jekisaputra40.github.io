// script.js — burger menu slide-down & accessibility helpers (Dark Glow Edition)
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('nav-mobile');
  const navInner = document.querySelector('.nav-mobile-inner');
  const FOLD_WIDTH = 900; // breakpoint same as CSS

  function openMenu() {
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    const firstLink = mobileNav.querySelector('.nav-link');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMenu();
    else openMenu();
  });

  mobileNav.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-link')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > FOLD_WIDTH) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', function (e) {
    if (!mobileNav.classList.contains('open')) return;
    const isInside = mobileNav.contains(e.target) || burger.contains(e.target);
    if (!isInside) closeMenu();
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }
    });
  });
});
