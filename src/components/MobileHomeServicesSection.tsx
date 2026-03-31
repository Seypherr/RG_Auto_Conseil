import { useRef, useState, type UIEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BriefcaseIcon, DocumentIcon, SearchIcon, TruckIcon } from './IconSet';
import { servicesPageContent } from '../data/servicesPageContent';
import { getLocaleContent } from '../utils/getLocaleContent';

const iconMap = {
  search: SearchIcon,
  document: DocumentIcon,
  briefcase: BriefcaseIcon,
  truck: TruckIcon,
};

type MobileHomeServicesSectionProps = {
  language: 'fr' | 'en';
};

export default function MobileHomeServicesSection({ language }: MobileHomeServicesSectionProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const servicesScrollerRef = useRef<HTMLDivElement | null>(null);
  const servicesPage = getLocaleContent(servicesPageContent, language);

  function handleServicesScroll(event: UIEvent<HTMLDivElement>) {
    const container = event.currentTarget;
    const cards = Array.from(container.children) as HTMLElement[];

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

  function handleServiceDotClick(index: number) {
    const container = servicesScrollerRef.current;
    const targetCard = container?.children?.[index] as HTMLElement | undefined;

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
    <section className="mobile-home-band mobile-home-band--surface mobile-home-band--plain mobile-home-band--left" id="services">
      <div className="mobile-home-band-head">
        <span className="mobile-home-band-line" />
        <span className="mobile-home-band-label">Expertise</span>
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

      <div aria-label={language === 'fr' ? 'Navigation des services' : 'Service navigation'} className="mobile-dots" role="group">
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
  );
}
