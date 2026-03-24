import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../Photo_rg_auto_conseil/Photo_Hero.webp';
import {
  ArrowRightIcon,
  BriefcaseIcon,
  DocumentIcon,
  SearchIcon,
  TruckIcon,
} from './IconSet';
import { useSite } from '../context/SiteContext';
import { aboutPageContent, galleryPageContent, servicesPageContent } from '../data/siteContent';
import { rgMedia } from '../data/rgMedia';
import { getLocaleContent } from '../utils/getLocaleContent';

const iconMap = {
  search: SearchIcon,
  document: DocumentIcon,
  briefcase: BriefcaseIcon,
  truck: TruckIcon,
};

const galleryImages = [rgMedia.porscheExterior, rgMedia.vanExterior];

export default function MobileHomePage() {
  const { language } = useSite();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const servicesPage = getLocaleContent(servicesPageContent, language);
  const aboutPage = getLocaleContent(aboutPageContent, language);
  const gallery = getLocaleContent(galleryPageContent, language);
  const heroTitleLines =
    language === 'fr'
      ? ['Un conseil', 'clair, de la', 'première', 'question', 'à l’action.']
      : ['Clear advice,', 'from the', 'first question', 'to action.'];

  const aboutTitle =
    language === 'fr'
      ? ['L’expertise au', 'service de', 'la passion.']
      : ['Expertise in', 'service of', 'automotive passion.'];

  const aboutCopy =
    language === 'fr'
      ? 'Un regard indépendant, premium et rassurant pour rendre vos projets automobiles plus lisibles.'
      : 'Independent, premium and reassuring guidance to make your automotive projects easier to understand.';

  function handleServicesScroll(event) {
    const container = event.currentTarget;
    const cards = Array.from(container.children);

    if (!cards.length) {
      return;
    }

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveServiceIndex(closestIndex);
  }

  return (
    <div className="mobile-home-page">
      <section className="mobile-home-hero" id="top">
        <div className="mobile-home-copy mobile-home-copy--plain">
          <h1 className="mobile-home-title">
            {heroTitleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="mobile-home-description">{servicesPage.heroIntro}</p>

          <a className="mobile-home-cta" href="#services">
            <span>{servicesPage.heroPrimaryCta}</span>
            <ArrowRightIcon />
          </a>
        </div>

        <article className="mobile-home-visual">
          <img alt={servicesPage.heroCardTitle} className="mobile-home-visual-image" src={heroImage} />
          <div aria-hidden="true" className="mobile-home-visual-mask" />
          <div className="mobile-home-visual-copy">
            <span className="mobile-home-visual-label">{servicesPage.heroCardLabel}</span>
            <h2>{servicesPage.heroCardTitle}</h2>
          </div>
        </article>
      </section>

      <section className="mobile-home-band mobile-home-band--surface mobile-home-band--plain mobile-home-band--left" id="services">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{language === 'fr' ? 'Expertise' : 'Expertise'}</span>
        </div>
        <h2 className="mobile-home-section-title">{language === 'fr' ? 'Nos Services' : 'Our Services'}</h2>
        <p className="mobile-home-band-intro">
          {language === 'fr'
            ? 'Un accompagnement sur-mesure pour chaque étape de votre vie automobile.'
            : 'Tailored support for every stage of your automotive life.'}
        </p>

        <div className="mobile-service-scroller" onScroll={handleServicesScroll}>
          {servicesPage.services.map((service) => {
            const Icon = iconMap[service.icon] || SearchIcon;

            return (
              <article className="mobile-service-card mobile-service-card--designed" key={service.index}>
                <div className="mobile-service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <Link className="mobile-service-link" to={`/services#service-${service.index}`}>
                  <span>{language === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
                  <ArrowRightIcon />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mobile-dots" aria-hidden="true">
          {servicesPage.services.map((service, index) => (
            <span className={`mobile-dot${index === activeServiceIndex ? ' is-active' : ''}`} key={service.index} />
          ))}
        </div>
      </section>

      <section className="mobile-home-band mobile-home-band--about mobile-home-band--plain mobile-home-band--left" id="a-propos">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{aboutPage.biographyLabel}</span>
        </div>

        <h2 className="mobile-home-section-title mobile-home-section-title--about">
          {aboutTitle[0]}
          <br />
          {aboutTitle[1]}
          <br />
          {aboutTitle[2]}
        </h2>

        <article className="mobile-about-portrait">
          <img alt={aboutPage.biographyBadge} src={rgMedia.aboutPortrait} />
        </article>

        <div className="mobile-home-copy-stack">
          <p>{aboutCopy}</p>
        </div>

        <div className="mobile-chip-grid">
          {aboutPage.biographyFacts.map((fact) => (
            <span className="mobile-home-chip" key={fact.label}>
              {fact.value}
            </span>
          ))}
        </div>
      </section>

      <section className="mobile-home-band mobile-home-band--surface mobile-home-band--plain mobile-home-band--gallery-left" id="galerie">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{language === 'fr' ? 'Réalisations' : 'Projects'}</span>
        </div>
        <h2 className="mobile-home-section-title">{language === 'fr' ? 'Galerie' : 'Gallery'}</h2>

        <div className="mobile-gallery-stack">
          {gallery.missions.slice(0, 2).map((mission, index) => (
            <article className="mobile-gallery-card" key={mission.id}>
              <img alt={mission.vehicle} src={galleryImages[index]} />
              <div className="mobile-gallery-card-copy">
                <span>{mission.label}</span>
                <h3>{mission.vehicle}</h3>
              </div>
            </article>
          ))}
        </div>

        <Link className="mobile-gallery-button" to="/gallery">
          <span>{language === 'fr' ? 'Voir plus de réalisations' : 'See more projects'}</span>
        </Link>
      </section>
    </div>
  );
}
