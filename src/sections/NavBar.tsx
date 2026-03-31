import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AnchorLink from '../components/AnchorLink';
import { useSite } from '../context/SiteContext';
import { BRAND_ASSETS } from '../data/siteConfig';
import useIsMobileView from '../hooks/useIsMobileView';

const navItems = {
  fr: [
    { label: 'Accueil', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'À propos', to: '/about' },
    { label: 'Galerie', to: '/gallery' },
  ],
  en: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Gallery', to: '/gallery' },
  ],
};

export default function NavBar() {
  const { language, setLanguage } = useSite();
  const location = useLocation();
  const isMobile = useIsMobileView();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = navItems[language];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMobile || !isMenuOpen) {
      document.body.style.removeProperty('overflow');
      return undefined;
    }

    document.body.style.setProperty('overflow', 'hidden');
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isMobile, isMenuOpen]);

  if (isMobile) {
    return (
      <>
        <nav aria-label={language === 'en' ? 'Primary navigation' : 'Navigation principale'} className="mobile-nav">
          <AnchorLink aria-label="RG Auto Conseil" className="mobile-nav-brand" to="/">
            <img
              alt="Logo RG Auto Conseil, conseil automobile indépendant"
              className="mobile-nav-brand-logo"
              decoding="async"
              height="64"
              loading="eager"
              src={BRAND_ASSETS.logo}
              width="300"
            />
          </AnchorLink>

          <div className="mobile-nav-actions">
            <button
              aria-label={language === 'en' ? 'Switch to French' : 'Passer en anglais'}
              className="mobile-language-button"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              type="button"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? (language === 'en' ? 'Close menu' : 'Fermer le menu') : language === 'en' ? 'Open menu' : 'Ouvrir le menu'}
              className={`mobile-menu-toggle${isMenuOpen ? ' is-open' : ''}`}
              onClick={() => setIsMenuOpen((value) => !value)}
              type="button"
            >
              <span />
              <span />
            </button>
          </div>
        </nav>

        <div className={`mobile-menu-panel${isMenuOpen ? ' is-open' : ''}`}>
          <div className="mobile-menu-shell">
            <div className="mobile-menu-links">
              {items.map((item) => (
                <AnchorLink className="mobile-menu-link" key={item.to} to={item.to}>
                  {item.label}
                </AnchorLink>
              ))}
            </div>

            <AnchorLink className="mobile-menu-cta" to="/contact">
              Contact
            </AnchorLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <nav aria-label={language === 'en' ? 'Primary navigation' : 'Navigation principale'} className="top-nav">
      <AnchorLink aria-label="RG Auto Conseil" className="nav-brand gs-reveal" to="/">
        <img
          alt="Logo RG Auto Conseil, conseil automobile indépendant"
          className="nav-brand-logo"
          decoding="async"
          height="64"
          loading="eager"
          src={BRAND_ASSETS.logo}
          width="300"
        />
      </AnchorLink>

      <div className="nav-links gs-reveal" id="site-navigation">
        {items.map((item) => (
          <AnchorLink activeClassName="is-active" key={item.to} to={item.to}>
            {item.label}
          </AnchorLink>
        ))}
      </div>

      <div className="nav-actions gs-reveal">
        <div aria-label={language === 'en' ? 'Language selector' : 'Sélecteur de langue'} className="language-switch" role="group">
          <button
            className={`language-button${language === 'fr' ? ' is-active' : ''}`}
            onClick={() => setLanguage('fr')}
            type="button"
          >
            FR
          </button>
          <button
            className={`language-button${language === 'en' ? ' is-active' : ''}`}
            onClick={() => setLanguage('en')}
            type="button"
          >
            EN
          </button>
        </div>

        <AnchorLink className="btn-pill nav-contact-button" to="/contact">
          Contact
        </AnchorLink>
      </div>
    </nav>
  );
}

