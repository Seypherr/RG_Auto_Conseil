import MobileValueCarousel from './MobileValueCarousel';
import { aboutPageContent } from '../data/aboutPageContent';
import { rgMedia } from '../data/rgMedia';
import { getLocaleContent } from '../utils/getLocaleContent';

export default function MobileHomeAboutSection({ language }) {
  const content = getLocaleContent(aboutPageContent, language);
  const aboutTitle =
    language === 'fr'
      ? ['L’expertise au', 'service de', 'la passion.']
      : ['Expertise in', 'service of', 'automotive passion.'];

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
          alt={content.biographyBadge}
          decoding="async"
          height="960"
          loading="lazy"
          src={rgMedia.aboutPortrait}
          width="1280"
        />
      </article>

      <MobileValueCarousel
        ariaLabel={language === 'fr' ? 'Navigation des qualités' : 'Qualities navigation'}
        getButtonLabel={(fact) => `${language === 'fr' ? 'Voir' : 'View'} ${fact.label}`}
        getItemKey={(fact) => fact.label}
        items={content.biographyFacts}
        renderItem={(fact) => <strong>{fact.value}</strong>}
      />
    </section>
  );
}
