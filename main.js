// ============================================================
// THE VINYL ROOM — main.js
// Shared across all pages
// ============================================================

// === NAV SCROLL BEHAVIOR ===
const navEl = document.querySelector('nav');
if (navEl) {
  window.addEventListener('scroll', () => {
    navEl.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });
}

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// === REVEAL ON SCROLL (Intersection Observer) ===
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => revealObserver.observe(el));
}

// ============================================================
// === NEEDLE DROP — Mobile Nav Menu ===
// Record button spins up → screen goes dark → coral scan line
// drops top to bottom → links materialize as line passes each one
// ============================================================

const menuBtn   = document.getElementById('nav-menu-btn');
const overlay   = document.getElementById('nav-overlay');
const scanLine  = overlay?.querySelector('.nav-scan-line');
const overlayLinks = overlay ? Array.from(overlay.querySelectorAll('.nav-overlay-link')) : [];

// Auto-mark active link based on current page
if (overlayLinks.length) {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  overlayLinks.forEach(link => {
    if (link.getAttribute('href') === currentFile) {
      link.classList.add('is-active');
    }
  });
}

function openMenu() {
  if (!menuBtn || !overlay) return;

  menuBtn.setAttribute('aria-expanded', 'true');
  document.body.classList.add('nav-is-open');

  // Phase 1: record button spins up (0 → 720deg, 0.5s)
  menuBtn.classList.add('is-spinning');

  setTimeout(() => {
    menuBtn.classList.remove('is-spinning');
    menuBtn.classList.add('is-open');

    // Phase 2: overlay fades in dark
    overlay.removeAttribute('hidden');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add('is-open');
      });
    });

    // Phase 3: scan line drops (80ms after overlay appears)
    setTimeout(() => {
      overlay.classList.add('is-scanning');

      // Phase 4: stagger links as the line passes each position
      // Scan animation is 0.8s — distribute links evenly across it
      const scanMs = 800;
      overlayLinks.forEach((link, i) => {
        const delay = Math.round((scanMs / (overlayLinks.length + 1)) * (i + 1));
        setTimeout(() => {
          link.style.transitionDuration = '0.28s';
          link.classList.add('is-revealed');
        }, delay);
      });

    }, 80);

  }, 500); // matches record-open-spin duration
}

function closeMenu() {
  if (!menuBtn || !overlay) return;

  menuBtn.setAttribute('aria-expanded', 'false');

  // Record spins out
  menuBtn.classList.remove('is-open');
  menuBtn.classList.add('is-closing');

  // Links fade out fast
  overlayLinks.forEach(link => {
    link.style.transitionDuration = '0.12s';
    link.classList.remove('is-revealed');
  });

  setTimeout(() => {
    overlay.classList.remove('is-open', 'is-scanning');
    menuBtn.classList.remove('is-closing');
    document.body.classList.remove('nav-is-open');
    // Hide after transition
    setTimeout(() => overlay.setAttribute('hidden', ''), 350);
  }, 280);
}

if (menuBtn && overlay) {
  menuBtn.addEventListener('click', () => {
    overlay.hasAttribute('hidden') || !overlay.classList.contains('is-open')
      ? openMenu()
      : closeMenu();
  });

  // Navigate via overlay — preload page while links fade, then navigate
  overlayLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');

      // Fade links out
      overlayLinks.forEach(l => {
        l.style.transitionDuration = '0.15s';
        l.classList.remove('is-revealed');
      });

      // Fetch target page in background + enforce minimum visual hold
      const preload  = fetch(href).catch(() => {});
      const minHold  = new Promise(r => setTimeout(r, 250));
      const maxWait  = new Promise(r => setTimeout(r, 2000));

      // Navigate when page is ready (or after 2s max) — overlay stays dark as bridge
      Promise.race([Promise.all([preload, minHold]), maxWait])
        .then(() => { window.location.href = href; });
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeMenu();
  });
}

// === BFCACHE RESET ===
// When the browser restores this page from back/forward cache, the nav overlay
// may still be open (or mid-animation). Hard-reset all nav state immediately.
window.addEventListener('pageshow', e => {
  if (!e.persisted) return;
  document.body.classList.remove('nav-is-open');
  if (overlay) {
    overlay.classList.remove('is-open', 'is-scanning');
    overlay.setAttribute('hidden', '');
  }
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.classList.remove('is-open', 'is-spinning', 'is-closing');
  }
  overlayLinks.forEach(link => link.classList.remove('is-revealed'));
});
