import { Link } from 'react-router-dom';
import BarcodeMark from '../components/BarcodeMark';
import { useSite } from '../context/SiteContext';

export default function Footer() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        copy:
          'Independent automotive advice designed to reassure non-expert clients, secure a purchase and guide clean vehicle improvements.',
        navigation: 'Navigation',
        links: [
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'About', to: '/about' },
          { label: 'Gallery', to: '/gallery' },
          { label: 'Contact', to: '/contact' },
        ],
        legal: 'Legal',
        legalLinks: [
          { label: 'Legal notice', to: '/legal-notice' },
          { label: 'Privacy policy', to: '/privacy-policy' },
        ],
        rights: '© 2026 RG Auto Conseil. All rights reserved.',
      }
    : {
        copy:
          'Conseil automobile independant pense pour rassurer des clients non experts, securiser un achat et guider des ameliorations propres du vehicule.',
        navigation: 'Navigation',
        links: [
          { label: 'Accueil', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'A propos', to: '/about' },
          { label: 'Galerie', to: '/gallery' },
          { label: 'Contact', to: '/contact' },
        ],
        legal: 'Legal',
        legalLinks: [
          { label: 'Mentions legales', to: '/legal-notice' },
          { label: 'Politique de confidentialite', to: '/privacy-policy' },
        ],
        rights: '© 2026 RG Auto Conseil. Tous droits reserves.',
      };

  return (
    <footer className="site-footer">
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ bottom: 0, left: '50%', width: '38rem', height: '12rem', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.05)' }}
      />

      <div className="content-shell footer-shell">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">RG Auto Conseil.</div>
            <p className="footer-copy">{content.copy}</p>
          </div>

          <div className="footer-column">
            <span className="footer-heading">{content.navigation}</span>
            {content.links.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <span className="footer-heading">{isEnglish ? 'Direct contact' : 'Contact direct'}</span>
            <a href="mailto:contact@rgautoconseil.fr">contact@rgautoconseil.fr</a>
            <a href="tel:0663990720">06 63 99 07 20</a>
            <span className="footer-heading footer-heading--secondary">{content.legal}</span>
            {content.legalLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">{content.rights}</div>
          <div className="footer-sys">
            <BarcodeMark code="SYS-END" compact />
            <span className="footer-sys-label">SIGNATURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
