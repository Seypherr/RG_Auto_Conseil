import { gsap } from 'gsap';

export function applyStaticPageState(lineColor) {
  gsap.set('.app-frame', { borderColor: lineColor });
  gsap.set('.grid-line', { scaleY: 1 });
  gsap.set('.gs-reveal, .gs-fade, .gs-text-up, .gs-title-up, .gs-frame, .gs-glow', {
    clearProps: 'all',
    opacity: 1,
    y: 0,
    scale: 1,
    scaleY: 1,
  });
  gsap.set('.gs-img-scale img', { clearProps: 'all', scale: 1, opacity: 0.7 });
}

export function runHomeIntroAnimation(lineColor) {
  return gsap
    .timeline({
      defaults: { ease: 'power3.out' },
    })
    .fromTo(
      '.app-frame',
      { borderColor: 'rgba(255,255,255,0)' },
      { borderColor: lineColor, duration: 1.5 },
      0,
    )
    .fromTo(
      '.grid-line',
      { scaleY: 0 },
      { scaleY: 1, duration: 1.5, stagger: 0.1 },
      0.2,
    )
    .fromTo(
      '.gs-img-scale img',
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 0.7, duration: 2.5, ease: 'power2.out' },
      0.5,
    )
    .fromTo(
      '.gs-glow',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 3, ease: 'sine.inOut' },
      0.8,
    )
    .fromTo(
      '.gs-frame',
      { scaleY: 0, opacity: 0, transformOrigin: 'bottom' },
      { scaleY: 1, opacity: 1, duration: 1.5, ease: 'expo.out' },
      1,
    )
    .fromTo(
      '.gs-title-up',
      { y: '110%' },
      { y: '0%', duration: 1.2, stagger: 0.15, ease: 'expo.out' },
      1.2,
    )
    .fromTo(
      '.gs-text-up',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
      1.4,
    )
    .fromTo(
      '.gs-reveal, .gs-fade',
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.05 },
      1.6,
    );
}

export function setupHeroParallax(ScrollTrigger) {
  gsap.to('.hero-image', {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

export function setupFadeUpAnimations(ScrollTrigger) {
  gsap.utils.toArray('.gs-scroll-fade-up').forEach((element) => {
    gsap.fromTo(
      element,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
      },
    );
  });
}

export function setupHeadingAnimations(ScrollTrigger) {
  gsap.utils.toArray('.gs-scroll-heading').forEach((group) => {
    const textItems = group.querySelectorAll('.gs-scroll-text-up');
    const titleItems = group.querySelectorAll('.gs-scroll-title-up');
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
      },
    });

    if (textItems.length > 0) {
      timeline.fromTo(
        textItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
        },
      );
    }

    if (titleItems.length > 0) {
      timeline.fromTo(
        titleItems,
        { y: '110%' },
        {
          y: '0%',
          duration: 1.1,
          stagger: 0.12,
          ease: 'expo.out',
        },
        textItems.length > 0 ? 0.05 : 0,
      );
    }
  });
}

export function setupCardAnimations(ScrollTrigger) {
  gsap.utils.toArray('.gs-scroll-card').forEach((card, index) => {
    gsap.fromTo(
      card,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: (index % 2) * 0.08,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
      },
    );
  });
}

export function setupContactFormAnimations(ScrollTrigger) {
  gsap.utils.toArray('.gs-scroll-contact-form').forEach((element) => {
    gsap.fromTo(
      element,
      { y: 70, opacity: 0, scale: 0.96, rotateX: 6 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 82%',
        },
      },
    );
  });
}
