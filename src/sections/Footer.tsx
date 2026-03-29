import AnchorLink from '../components/AnchorLink';
import BarcodeMark from '../components/BarcodeMark';
import { FacebookIcon, InstagramIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';
import { footerContent } from '../data/footerContent';
import { BRAND, CONTACT_DETAILS, SOCIAL_LINKS } from '../data/siteConfig';
import { getLocaleContent } from '../utils/getLocaleContent';

const socialIconMap = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

export default function Footer() {
  const { language } = useSite();
  const content = getLocaleContent(footerContent, language);

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
            <div className="footer-brand">{BRAND.name}</div>
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
            <a href={CONTACT_DETAILS.emailHref}>{CONTACT_DETAILS.email}</a>
            <a href={CONTACT_DETAILS.phoneHref}>{CONTACT_DETAILS.phoneDisplay}</a>
            <div className="footer-socials">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIconMap[social.name];
                const isDisabled = !social.href;

                if (isDisabled) {
                  return (
                    <span aria-disabled="true" className="footer-social-link is-disabled" key={social.name} title={social.name}>
                      <Icon />
                    </span>
                  );
                }

                return (
                  <a
                    aria-label={social.name}
                    className="footer-social-link"
                    href={social.href}
                    key={social.name}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={social.name}
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
            <div className="footer-legal">{BRAND.rights[language === 'en' ? 'en' : 'fr']}</div>
            <div className="footer-credit">{BRAND.creator[language === 'en' ? 'en' : 'fr']}</div>
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
