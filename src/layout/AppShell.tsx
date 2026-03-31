import { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../sections/NavBar';
import Footer from '../sections/Footer';
import { useSite } from '../context/SiteContext';
import useIsMobileView from '../hooks/useIsMobileView';
import { scrollToAnchor } from '../utils/anchorNavigation';

export default function AppShell() {
  const location = useLocation();
  const { language } = useSite();
  const isMobile = useIsMobileView();
  const shouldRunHomeIntro = location.pathname === '/' && !isMobile;

  useLayoutEffect(() => {
    document.body.classList.add('app-ready');

    return () => {
      document.body.classList.remove('app-ready');
    };
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return undefined;
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

  return (
    <div className="page-shell">
      <div className={`app-frame${shouldRunHomeIntro ? ' app-frame--home-intro' : ''}`} id="top">
        <a className="skip-link" href="#main-content">
          {language === 'en' ? 'Skip to content' : 'Aller au contenu'}
        </a>
        <div aria-hidden="true" className="app-orb app-orb--nav" />
        <div aria-hidden="true" className="grid-lines">
          <div className="app-orb app-orb--grid" />
          <div className="app-orb app-orb--grid" />
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
        </div>

        <NavBar />
        <main className="page-content" id="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
