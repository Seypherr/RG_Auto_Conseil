import { ArrowRightIcon } from './IconSet';
import MobileHomeAboutSection from './MobileHomeAboutSection';
import MobileHomeGallerySection from './MobileHomeGallerySection';
import MobileHomeServicesSection from './MobileHomeServicesSection';
import { useSite } from '../context/SiteContext';

const heroImage = new URL('../../Photo_rg_auto_conseil/Photo_Hero.webp?width=960', import.meta.url).toString();

export default function MobileHomePage() {
  const { language } = useSite();
  const heroImageAlt =
    language === 'fr'
      ? 'RG Auto Conseil, conseil automobile indépendant avec véhicule premium dans un univers sobre'
      : 'RG Auto Conseil, independent automotive advice with a premium vehicle in a refined setting';

  const heroTitleLines =
    language === 'fr'
      ? ['Un conseil', 'clair, de la', 'première', 'question', "à l'action."]
      : ['Clear advice,', 'from the', 'first question', 'to action.'];

  const heroCopy =
    language === 'fr'
      ? 'RG Auto Conseil vous aide à acheter, inspecter, rechercher ou améliorer un véhicule avec une lecture simple, professionnelle et rassurante.'
      : 'RG Auto Conseil helps you buy, inspect, source or improve a vehicle with clear, professional and reassuring guidance.';

  return (
    <div className="mobile-home-page">
      <section className="mobile-home-hero" id="top">
        <div className="mobile-home-copy mobile-home-copy--plain">
          <h1 className="mobile-home-title">
            {heroTitleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="mobile-home-description">{heroCopy}</p>

          <a className="mobile-home-cta" href="#services">
            <span>{language === 'fr' ? 'Découvrir les services' : 'Explore services'}</span>
            <ArrowRightIcon />
          </a>
        </div>

        <article className="mobile-home-visual">
          <img
            alt={heroImageAlt}
            className="mobile-home-visual-image"
            decoding="async"
            fetchpriority="high"
            height="1200"
            sizes="92vw"
            src={heroImage}
            width="1600"
          />
          <div aria-hidden="true" className="mobile-home-visual-mask" />
          <div className="mobile-home-visual-copy">
            <span className="mobile-home-visual-label">{language === 'fr' ? 'Vision service' : 'Service vision'}</span>
            <h2>{language === 'fr' ? 'Conseil automobile indépendant' : 'Independent automotive guidance'}</h2>
          </div>
        </article>
      </section>

      <MobileHomeServicesSection language={language} />
      <MobileHomeAboutSection language={language} />
      <MobileHomeGallerySection language={language} />
    </div>
  );
}
