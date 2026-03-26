import { Suspense, lazy, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../Photo_rg_auto_conseil/Photo_Hero.webp';
import DeferredSection from './DeferredSection';
import { ArrowRightIcon, BriefcaseIcon, DocumentIcon, SearchIcon, TruckIcon } from './IconSet';
import { useSite } from '../context/SiteContext';
import { servicesPageContent } from '../data/servicesPageContent';
import { getLocaleContent } from '../utils/getLocaleContent';

const iconMap = {
  search: SearchIcon,
  document: DocumentIcon,
  briefcase: BriefcaseIcon,
  truck: TruckIcon,
};

const MobileHomeAboutSection = lazy(() => import('./MobileHomeAboutSection'));
const MobileHomeGallerySection = lazy(() => import('./MobileHomeGallerySection'));

export default function MobileHomePage() {
  const { language } = useSite();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const servicesScrollerRef = useRef(null);
  const servicesPage = getLocaleContent(servicesPageContent, language);

  const heroTitleLines =
    language === 'fr'
      ? ['Un conseil', 'clair, de la', 'première', 'question', 'à l’action.']
      : ['Clear advice,', 'from the', 'first question', 'to action.'];

  const heroCopy =
    language === 'fr'
      ? 'RG Auto Conseil vous aide à acheter, inspecter, rechercher ou améliorer un véhicule avec une lecture simple, professionnelle et rassurante.'
      : 'RG Auto Conseil helps you buy, inspect, source or improve a vehicle with clear, professional and reassuring guidance.';

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

  function handleServiceDotClick(index) {
    const container = servicesScrollerRef.current;
    const targetCard = container?.children?.[index];

    if (!container || !targetCard) {
      return;
    }

    targetCard.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

    setActiveServiceIndex(index);
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
          <p className="mobile-home-description">{heroCopy}</p>

          <a className="mobile-home-cta" href="#services">
            <span>{servicesPage.heroPrimaryCta}</span>
            <ArrowRightIcon />
          </a>
        </div>

        <article className="mobile-home-visual">
          <img
            alt={servicesPage.heroCardTitle}
            className="mobile-home-visual-image"
            decoding="async"
            fetchpriority="high"
            height="1200"
            src={heroImage}
            width="1600"
          />
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

        <div className="mobile-service-scroller" onScroll={handleServicesScroll} ref={servicesScrollerRef}>
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

        <div className="mobile-dots" aria-label={language === 'fr' ? 'Navigation des services' : 'Service navigation'}>
          {servicesPage.services.map((service, index) => (
            <button
              aria-label={`${language === 'fr' ? 'Voir le service' : 'View service'} ${service.index}`}
              aria-pressed={index === activeServiceIndex}
              className={`mobile-dot${index === activeServiceIndex ? ' is-active' : ''}`}
              key={service.index}
              onClick={() => handleServiceDotClick(index)}
              type="button"
            />
          ))}
        </div>
      </section>

      <DeferredSection minHeight={620} rootMargin="180px 0px">
        <Suspense fallback={<div aria-hidden="true" style={{ minHeight: 620 }} />}>
          <MobileHomeAboutSection language={language} />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight={520} rootMargin="180px 0px">
        <Suspense fallback={<div aria-hidden="true" style={{ minHeight: 520 }} />}>
          <MobileHomeGallerySection language={language} />
        </Suspense>
      </DeferredSection>
    </div>
  );
}
