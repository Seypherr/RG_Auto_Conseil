import { useEffect, useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from '../sections/NavBar';
import Footer from '../sections/Footer';
import { useSite } from '../context/SiteContext';
import { scrollToAnchor } from '../utils/anchorNavigation';
import {
  applyStaticPageState,
  runHomeIntroAnimation,
  setupCardAnimations,
  setupContactFormAnimations,
  setupFadeUpAnimations,
  setupHeadingAnimations,
  setupHeroParallax,
} from '../utils/appAnimations';

gsap.registerPlugin(ScrollTrigger);

export default function AppShell() {
  const appRef = useRef(null);
  const location = useLocation();
  const { language } = useSite();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));
    let attempts = 0;
    let timeoutId;

    const tryScroll = () => {
      attempts += 1;

      const didScroll = scrollToAnchor(targetId, attempts === 1 ? 'auto' : 'smooth');

      if (!didScroll && attempts < 12) {
        timeoutId = window.setTimeout(tryScroll, 120);
      }
    };

    const frame = window.requestAnimationFrame(tryScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.hash]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isHomePage = location.pathname === '/';
      const lineColor = getComputedStyle(document.documentElement).getPropertyValue('--line-color').trim() || 'rgba(255,255,255,0.12)';

      if (!isHomePage) {
        applyStaticPageState(lineColor);
      }

      if (isHomePage) {
        runHomeIntroAnimation(lineColor);
      }

      setupHeroParallax(ScrollTrigger);
      setupFadeUpAnimations(ScrollTrigger);
      setupHeadingAnimations(ScrollTrigger);
      setupCardAnimations(ScrollTrigger);
      setupContactFormAnimations(ScrollTrigger);
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
