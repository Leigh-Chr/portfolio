import { gsap, ScrollTrigger } from '@utils/gsap';

let ctx: gsap.Context | null = null;

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function animateHero(): void {
  const heroes = document.querySelectorAll<HTMLElement>('[data-gsap="hero"]');
  heroes.forEach((hero) => {
    const children = Array.from(hero.children) as HTMLElement[];
    if (children.length === 0) return;

    gsap.set(children, { opacity: 0, y: 30 });
    const tl = gsap.timeline();
    children.forEach((child, i) => {
      tl.to(
        child,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        },
        i * 0.12
      );
    });
  });
}

function animateScrollReveal(): void {
  const reveals = document.querySelectorAll<HTMLElement>('[data-gsap="reveal"]');
  reveals.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 30 });
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

function animateStagger(): void {
  const containers = document.querySelectorAll<HTMLElement>('[data-gsap="stagger"]');
  containers.forEach((container) => {
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    gsap.set(children, { opacity: 0, y: 30 });
    gsap.to(children, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.7)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

function animateTimeline(): void {
  const items = document.querySelectorAll<HTMLElement>('[data-gsap="timeline-item"]');
  items.forEach((item) => {
    const dot = item.querySelector('.timeline-dot-lg');
    const card = item.querySelector('.card-glow');

    if (dot) gsap.set(dot, { scale: 0 });
    if (card) gsap.set(card, { opacity: 0, x: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    if (dot) {
      tl.to(dot, {
        scale: 1,
        duration: 0.4,
        ease: 'back.out(2)',
      });
    }

    if (card) {
      tl.to(
        card,
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        },
        dot ? '-=0.2' : 0
      );
    }
  });
}

function animateTimelineLine(): void {
  const lines = document.querySelectorAll<HTMLElement>('[data-gsap="timeline-line"]');
  lines.forEach((line) => {
    gsap.set(line, { scaleY: 0 });
    gsap.to(line, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: line.parentElement,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });
  });
}

function animateCTA(): void {
  const ctas = document.querySelectorAll<HTMLElement>('[data-gsap="cta"]');
  ctas.forEach((cta) => {
    gsap.set(cta, { opacity: 0, y: 30 });
    gsap.to(cta, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: cta,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

function animateMemphisShapes(): void {
  const shapes = document.querySelectorAll<HTMLElement>('.memphis-shape-fg');
  shapes.forEach((shape) => {
    const targetOpacity = parseFloat(shape.style.opacity) || 0.1;
    gsap.set(shape, { opacity: 0 });
    gsap.to(shape, {
      opacity: targetOpacity,
      duration: 0.7,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: shape,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

function initAnimations(): void {
  if (prefersReducedMotion()) return;

  ctx = gsap.context(() => {
    const animations = [
      animateHero,
      animateScrollReveal,
      animateStagger,
      animateTimeline,
      animateTimelineLine,
      animateCTA,
      animateMemphisShapes,
    ];

    for (const anim of animations) {
      try {
        anim();
      } catch (e) {
        console.warn(`[GSAP] Animation "${anim.name}" failed:`, e);
      }
    }

    // Recalculate ScrollTrigger positions after content-visibility rendering
    ScrollTrigger.refresh();
  });
}

document.addEventListener('astro:page-load', () => {
  initAnimations();
});

document.addEventListener('astro:after-swap', () => {
  ctx?.revert();
  ctx = null;
});
