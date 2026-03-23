import AnchorLink from '../components/AnchorLink';
import { useSite } from '../context/SiteContext';

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
  const items = navItems[language];

  return (
    <nav className="top-nav">
      <AnchorLink className="nav-brand gs-reveal" to="/">
        RG Auto Conseil.
      </AnchorLink>

      <div className="nav-links gs-reveal">
        {items.map((item) => (
          <AnchorLink activeClassName="is-active" key={item.to} to={item.to}>
            {item.label}
          </AnchorLink>
        ))}
      </div>

      <div className="nav-actions gs-reveal">
        <div aria-label="Sélecteur de langue" className="language-switch" role="group">
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
