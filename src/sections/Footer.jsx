import AnchorLink from '../components/AnchorLink';
import BarcodeMark from '../components/BarcodeMark';
import { FacebookIcon, InstagramIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';

export default function Footer() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        copy:
          'Independent automotive advice designed to reassure non-expert clients, secure a purchase and guide clean vehicle improvements.',
        navigation: 'Navigation',
        links: [
          { label: 'Home', to: '/#top' },
          { label: 'Services', to: '/services#services-overview' },
          { label: 'About', to: '/about#about-biography' },
          { label: 'Gallery', to: '/gallery#gallery-overview' },
          { label: 'Contact', to: '/contact#contact-direct' },
        ],
        directContact: 'Direct contact',
        legal: 'Legal',
        legalLinks: [
          { label: 'Legal notice', to: '/legal-notice' },
          { label: 'Privacy policy', to: '/privacy-policy' },
        ],
        socialLinks: [
          { label: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
          { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
        ],
        rights: '© 2026 RG Auto Conseil. All rights reserved.',
        creator: 'Created by Ethan Porcaro',
      }
    : {
        copy:
          'Conseil automobile indépendant pensé pour rassurer des clients non-experts, sécuriser un achat et guider des améliorations propres du véhicule.',
        navigation: 'Navigation',
        links: [
          { label: 'Accueil', to: '/#top' },
          { label: 'Services', to: '/services#services-overview' },
          { label: 'À propos', to: '/about#about-biography' },
          { label: 'Galerie', to: '/gallery#gallery-overview' },
          { label: 'Contact', to: '/contact#contact-direct' },
        ],
        directContact: 'Contact direct',
        legal: 'Légal',
        legalLinks: [
          { label: 'Mentions légales', to: '/legal-notice' },
          { label: 'Politique de confidentialité', to: '/privacy-policy' },
        ],
        socialLinks: [
          { label: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
          { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
        ],
        rights: '© 2026 RG Auto Conseil. Tous droits réservés.',
        creator: 'Création par Ethan Porcaro',
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
          <div className="footer-column footer-column--brand">
            <div className="footer-brand">RG Auto Conseil.</div>
            <p className="footer-copy">{content.copy}</p>
          </div>

          <div className="footer-column">
            <span className="footer-heading">{content.navigation}</span>
            {content.links.map((item) => (
              <AnchorLink key={item.to} to={item.to}>
                {item.label}
              </AnchorLink>
            ))}
          </div>

          <div className="footer-column">
            <span className="footer-heading">{content.directContact}</span>
            <a href="mailto:contact@rgautoconseil.fr">contact@rgautoconseil.fr</a>
            <a href="tel:0663990720">06 63 99 07 20</a>
            <div className="footer-socials">
              {content.socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    aria-label={social.label}
                    className="footer-social-link"
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                    title={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-heading">{content.legal}</span>
            {content.legalLinks.map((item) => (
              <AnchorLink key={item.to} to={item.to}>
                {item.label}
              </AnchorLink>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-meta">
            <div className="footer-legal">{content.rights}</div>
            <div className="footer-credit">{content.creator}</div>
          </div>
          <div className="footer-sys">
            <BarcodeMark code="SYS-END" compact variant="barcode" />
            <span className="footer-sys-label">SYS-END</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
