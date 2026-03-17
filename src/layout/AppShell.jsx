import { useEffect, useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from '../sections/NavBar';
import Footer from '../sections/Footer';
import { useSite } from '../context/SiteContext';

gsap.registerPlugin(ScrollTrigger);

export default function AppShell() {
  const appRef = useRef(null);
  const location = useLocation();
  const { language } = useSite();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      intro
        .fromTo(
          '.app-frame',
          { borderColor: 'rgba(255,255,255,0)' },
          { borderColor: 'rgba(255,255,255,0.12)', duration: 1.5 },
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
    }, appRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [language, location.pathname]);

  return (
    <div className="page-shell">
      <div className="app-frame" id="top" ref={appRef}>
        <div className="app-orb app-orb--nav" aria-hidden="true" />
        <div className="grid-lines" aria-hidden="true">
          <div className="app-orb app-orb--grid" />
          <div className="app-orb app-orb--grid" />
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
        </div>

        <NavBar />
        <main className="page-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
