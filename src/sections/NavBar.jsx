import { Link, NavLink } from 'react-router-dom';
import { useSite } from '../context/SiteContext';

const navItems = {
  fr: [
    { label: 'Accueil', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Expertise', to: '/about' },
    { label: 'Galerie', to: '/gallery' },
  ],
  en: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Expertise', to: '/about' },
    { label: 'Gallery', to: '/gallery' },
  ],
};

export default function NavBar() {
  const { language, setLanguage, isEnglish } = useSite();
  const items = navItems[language];

  return (
    <nav className="top-nav">
      <Link className="nav-brand gs-reveal" to="/">
        RG Auto Conseil.
      </Link>

      <div className="nav-links gs-reveal">
        {items.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            key={item.to}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="nav-actions gs-reveal">
        <div aria-label={isEnglish ? 'Language switcher' : 'Sélecteur de langue'} className="language-switch" role="group">
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

        <Link className="btn-pill" to="/contact">
          {isEnglish ? 'Contact' : 'Contact'}
        </Link>
      </div>
    </nav>
  );
}
