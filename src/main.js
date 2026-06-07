import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Smooth scroll ── */
const lenis = new Lenis({
  duration: 1.1,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
lenis.on('scroll', ScrollTrigger.update);

/* ──────────────────────────────────────
   1. VÍDEO HERO — autoplay, som, ended
────────────────────────────────────── */
const heroVideo       = document.getElementById('hero-video');
const heroVideoWrap   = document.querySelector('.hero-video-wrap');
const soundBtn        = document.getElementById('hero-sound-btn');
const heroPlayOverlay = document.getElementById('hero-play-overlay');
const heroContent     = document.querySelector('.hero-content');
const heroScrollHint  = document.querySelector('.hero-scroll-hint');

function showHeroContent() {
  heroContent.classList.add('content--visible');
  heroScrollHint.classList.add('content--visible');
}

function hideHeroContent() {
  heroContent.classList.remove('content--visible');
  heroScrollHint.classList.remove('content--visible');
}

if (heroVideo) {
  soundBtn.classList.add('is-muted');
  let unmuted = false;

  function showPlayOverlay() {
    heroPlayOverlay.classList.add('overlay--visible');
    heroPlayOverlay.removeAttribute('aria-hidden');
  }

  function hidePlayOverlay() {
    heroPlayOverlay.classList.remove('overlay--visible');
    heroPlayOverlay.setAttribute('aria-hidden', 'true');
  }

  // Ao terminar: mostra play overlay + conteúdo, esconde botão de som
  heroVideo.addEventListener('ended', () => {
    showPlayOverlay();
    soundBtn.style.display = 'none';
    showHeroContent();
  });

  // Clique no overlay de play (aparece ao pausar OU ao terminar)
  heroPlayOverlay.addEventListener('click', () => {
    hidePlayOverlay();
    soundBtn.style.display = '';
    if (heroVideo.ended) heroVideo.currentTime = 0;
    hideHeroContent();
    heroVideo.play();
  });

  // Clique no vídeo — primeira vez desmuta; depois pausa/retoma
  heroVideoWrap.addEventListener('click', () => {
    if (heroVideo.ended) return; // overlay cobre o wrap quando ended

    if (!unmuted) {
      unmuted = true;
      heroVideo.muted = false;
      heroVideo.play().then(() => {
        soundBtn.classList.remove('is-muted');
        soundBtn.setAttribute('aria-label', 'Silenciar');
      }).catch(() => {
        heroVideo.muted = true;
        soundBtn.classList.add('is-muted');
      });
      return;
    }

    // Overlay visível (paused): clique no wrap não chega aqui (pointer-events do overlay bloqueia)
    // Só chega quando vídeo está tocando → pausa
    heroVideo.pause();
    showPlayOverlay();
    showHeroContent();
  });

  // Botão de mute manual
  soundBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    unmuted = true;
    heroVideo.muted = !heroVideo.muted;
    soundBtn.classList.toggle('is-muted', heroVideo.muted);
    soundBtn.setAttribute('aria-label', heroVideo.muted ? 'Ativar som' : 'Silenciar');
  });
}

/* ──────────────────────────────────────
   2. ANIMAÇÃO DE ENTRADA
────────────────────────────────────── */
const entryOverlay = document.getElementById('entry-overlay');
const header       = document.getElementById('site-header');

// Duração total do splash: 0.3 + 1.0 (icon) + 0.8 (brand) + 0.9s hold = ~3.2s
setTimeout(() => {
  entryOverlay.classList.add('entry--exit');

  setTimeout(() => {
    entryOverlay.style.display = 'none';
    header.classList.add('header--visible');
  }, 800);
}, 3000);

/* ──────────────────────────────────────
   3. HEADER — scroll + mobile menu
────────────────────────────────────── */
const mobileBtn = document.getElementById('mobile-btn');
const nav       = document.getElementById('header-nav');

lenis.on('scroll', ({ scroll }) => {
  header.classList.toggle('header--scrolled', scroll > 60);
});

mobileBtn.addEventListener('click', () => {
  const open = mobileBtn.classList.toggle('open');
  nav.classList.toggle('nav--open', open);
  mobileBtn.setAttribute('aria-expanded', open);
});

// Fechar menu ao clicar em link
nav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileBtn.classList.remove('open');
    nav.classList.remove('nav--open');
  });
});

// Scroll suave nos links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: -80 });
  });
});

/* ──────────────────────────────────────
   5. SCROLL REVEAL — IntersectionObserver
────────────────────────────────────── */
const revealEls = document.querySelectorAll(
  '.section-eyebrow, .section-title, .section-body, ' +
  '.identity-actions, .identity-manifesto, ' +
  '.maisperto-text, .maisperto-video, .instagram-cta, ' +
  '.agenda-card, .location-address, .location-tip, .btn-primary, ' +
  '.location-map'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  // Stagger suave para elementos consecutivos
  if (i % 4 === 1) el.classList.add('reveal-delay-1');
  if (i % 4 === 2) el.classList.add('reveal-delay-2');
  if (i % 4 === 3) el.classList.add('reveal-delay-3');
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => observer.observe(el));
