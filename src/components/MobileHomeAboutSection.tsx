import { Link } from 'react-router-dom';
import { aboutPageContent } from '../data/aboutPageContent';
import { rgMedia } from '../data/rgMedia';
import { getLocaleContent } from '../utils/getLocaleContent';

type MobileHomeAboutSectionProps = {
  language: 'fr' | 'en';
};

export default function MobileHomeAboutSection({ language }: MobileHomeAboutSectionProps) {
  const content = getLocaleContent(aboutPageContent, language);
  const aboutTitle =
    language === 'fr'
      ? ["L'expertise au", 'service de', 'la passion.']
      : ['Expertise in', 'service of', 'automotive passion.'];
  const contactPrompt =
    language === 'fr'
      ? "Un projet automobile à sécuriser ou à améliorer ? Échangeons pour trouver l'accompagnement le plus adapté à votre besoin."
      : 'Need help securing or improving an automotive project? Let’s talk and find the most relevant support for your situation.';

  return (
    <section className="mobile-home-band mobile-home-band--about mobile-home-band--plain mobile-home-band--left" id="a-propos">
      <div className="mobile-home-band-head">
        <span className="mobile-home-band-line" />
        <span className="mobile-home-band-label">{content.biographyLabel}</span>
      </div>

      <h2 className="mobile-home-section-title mobile-home-section-title--about">
        {aboutTitle[0]}
        <br />
        {aboutTitle[1]}
        <br />
        {aboutTitle[2]}
      </h2>

      <article className="mobile-about-portrait">
        <img
          alt={
            language === 'fr'
              ? 'Portrait de Gaëtan Roblin, fondateur de RG Auto Conseil et conseiller automobile indépendant'
              : 'Portrait of Gaëtan Roblin, founder of RG Auto Conseil and independent automotive advisor'
          }
          decoding="async"
          height="960"
          loading="lazy"
          src={rgMedia.aboutPortrait}
          width="1280"
        />
      </article>

      <p className="mobile-home-about-seo-copy">{contactPrompt}</p>

      <Link className="mobile-gallery-button mobile-home-about-button" to="/contact">
        <span>{content.ctaButton}</span>
      </Link>
    </section>
  );
}
