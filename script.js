/* Small, dependency-free enhancements. Site content remains available without JavaScript. */
(() => {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');

  const closeNav = () => {
    if (!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNav(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1100) closeNav(); });
  }

  const toast = document.querySelector('.toast');
  let toastTimeout;
  const announce = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 3400);
  };

  const shareButton = document.querySelector('.share-button');
  if (shareButton) shareButton.addEventListener('click', async () => {
    const data = {
      title: 'Professor Chrysi Laspidou at Slush 2026 · University of Thessaly',
      text: 'Meet Professor Chrysi Laspidou and University of Thessaly research spin-offs at Slush 2026.',
      url: window.location.href.split('#')[0]
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(data.url);
        announce('Page link copied.');
      } else {
        const selection = window.prompt('Copy this page address:', data.url);
        if (selection !== null) announce('Link ready to share.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') announce('Sharing is unavailable on this device.');
    }
  });
})();
