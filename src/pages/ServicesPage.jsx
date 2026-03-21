import { useEffect, useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import { ArrowRightIcon, BriefcaseIcon, DocumentIcon, SearchIcon, TruckIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';
import { rgMedia } from '../data/rgMedia';

const iconMap = {
  search: SearchIcon,
  document: DocumentIcon,
  briefcase: BriefcaseIcon,
  truck: TruckIcon,
};

export default function ServicesPage() {
  const { isEnglish } = useSite();
  const [audienceFilter, setAudienceFilter] = useState('all');
  const [showAllServices, setShowAllServices] = useState(false);

  const content = isEnglish
    ? {
        heroLabel: 'Services',
        heroTitle: ['Clear support,', 'useful guidance,', 'and a calmer', 'decision process.'],
        heroIntro:
          'Every project is unique. We clarify the need, narrow the options and guide the right next step with method and transparency.',
        heroPrimaryCta: 'Explore services',
        heroCardLabel: 'Quick overview',
        heroCardTitle: 'A clear entry point to find the right service.',
        heroCardCopy:
          'This first screen gives a strong visual cue, a readable promise and a simple path toward the most relevant service.',
        heroFlowLabel: 'How we work',
        heroFlowTitle: 'Four steps to move from uncertainty to a clear decision.',
        heroFlowSteps: ['Understand', 'Analyse', 'Advise', 'Support'],
        heroPreviewLabel: 'Core services',
        heroPreviewTitle: 'Go directly to the right service.',
        servicesLabel: 'Detailed services',
        servicesTitle: ['Guidance that adapts', 'to each automotive project.'],
        servicesIntro:
          'Each service is presented in a simple and reassuring way so non-expert clients can quickly understand its value.',
        filterLabel: 'Filter by profile',
        filters: [
          { value: 'all', label: 'All' },
          { value: 'private', label: 'Private' },
          { value: 'pro', label: 'Professional' },
        ],
        services: [
          {
            index: '01',
            icon: 'search',
            title: 'Pre-purchase vehicle advice',
            copy: 'We help you read your needs clearly, compare the right options and move toward a more confident buying decision.',
            audiences: ['private', 'pro'],
          },
          {
            index: '02',
            icon: 'document',
            title: 'Pre-purchase vehicle inspection',
            copy: 'A complete inspection before purchase to avoid unpleasant surprises and better understand the real condition of the vehicle.',
            audiences: ['private', 'pro'],
          },
          {
            index: '03',
            icon: 'briefcase',
            title: 'Automotive listing analysis',
            copy: 'We review the ad in detail to identify inconsistencies, clarify the vehicle profile and detect obvious warning signs early.',
            audiences: ['private', 'pro'],
          },
          {
            index: '04',
            icon: 'truck',
            title: 'Negotiation with the seller',
            copy: 'We structure the exchange, defend your position and help secure a more coherent purchase price.',
            audiences: ['private', 'pro'],
          },
          {
            index: '05',
            icon: 'search',
            title: 'Vehicle sourcing',
            copy: 'We search for the right vehicle according to your criteria, your budget and the way you intend to use it.',
            audiences: ['private', 'pro'],
          },
          {
            index: '06',
            icon: 'truck',
            title: 'Equipment installation',
            copy: 'We help define the right equipment to add so the vehicle gains practical value without losing its coherence.',
            audiences: ['private'],
          },
          {
            index: '07',
            icon: 'briefcase',
            title: 'Vehicle optimisation / improvement',
            copy: 'We guide aesthetic or functional improvements designed to modernise the vehicle cleanly and enhance its overall value.',
            audiences: ['private'],
          },
        ],
        showMore: 'See more',
        showLess: 'See less',
      }
    : {
        heroLabel: 'Services',
        heroTitle: ['Un suivi', 'clair et utile,', 'pensé pour', 'rassurer.'],
        heroIntro:
          'Chaque projet est unique. Nous clarifions le besoin, cadrons les options et guidons la bonne suite avec méthode et transparence.',
        heroPrimaryCta: 'Découvrir les services',
        heroCardLabel: 'Vue d’ensemble',
        heroCardTitle: 'Un point d’entrée clair pour trouver le bon service.',
        heroCardCopy:
          'Ce premier écran pose une promesse lisible, une preuve visuelle forte et un accès simple vers le bon service.',
        heroFlowLabel: 'Manière de travailler',
        heroFlowTitle: 'Quatre étapes pour passer du doute à une décision claire.',
        heroFlowSteps: ['Comprendre', 'Analyser', 'Conseiller', 'Suivre'],
        heroPreviewLabel: 'Services clés',
        heroPreviewTitle: 'Aller directement vers le bon service.',
        servicesLabel: 'Services détaillés',
        servicesTitle: ['Un suivi qui s’adapte', 'à chaque projet automobile.'],
        servicesIntro:
          'Chaque service est présenté de façon simple et rassurante pour permettre à des clients non-experts de comprendre rapidement son intérêt.',
        filterLabel: 'Filtrer par profil',
        filters: [
          { value: 'all', label: 'Tous' },
          { value: 'private', label: 'Particuliers' },
          { value: 'pro', label: 'Professionnels' },
        ],
        services: [
          {
            index: '01',
            icon: 'search',
            title: 'Conseil avant achat de véhicule',
            copy: 'Nous vous aidons à clarifier votre besoin, comparer les bonnes options et avancer vers une décision d’achat plus sereine.',
            audiences: ['private', 'pro'],
          },
          {
            index: '02',
            icon: 'document',
            title: 'Inspection d’un véhicule avant achat',
            copy: 'Vérification complète avant achat pour éviter les mauvaises surprises et mieux lire l’état réel du véhicule.',
            audiences: ['private', 'pro'],
          },
          {
            index: '03',
            icon: 'briefcase',
            title: 'Analyse d’annonce automobile',
            copy: 'Nous analysons l’annonce en détail pour repérer les incohérences, clarifier le profil du véhicule et identifier les premiers signaux d’alerte.',
            audiences: ['private', 'pro'],
          },
          {
            index: '04',
            icon: 'truck',
            title: 'Négociation avec le vendeur',
            copy: 'Nous structurons l’échange, défendons votre position et aidons à obtenir un prix plus cohérent avec le véhicule.',
            audiences: ['private', 'pro'],
          },
          {
            index: '05',
            icon: 'search',
            title: 'Recherche de véhicule',
            copy: 'Nous recherchons pour vous le véhicule adapté selon vos critères, votre budget et votre usage.',
            audiences: ['private', 'pro'],
          },
          {
            index: '06',
            icon: 'truck',
            title: 'Montage d’équipements',
            copy: 'Nous vous aidons à définir les bons équipements à ajouter pour gagner en usage sans rompre la cohérence du véhicule.',
            audiences: ['private'],
          },
          {
            index: '07',
            icon: 'briefcase',
            title: 'Optimisation / amélioration du véhicule',
            copy: 'Nous guidons les évolutions esthétiques ou fonctionnelles pensées pour moderniser proprement le véhicule et renforcer sa valeur globale.',
            audiences: ['private'],
          },
        ],
        showMore: 'Voir plus',
        showLess: 'Voir moins',
      };

  useEffect(() => {
    setShowAllServices(false);
  }, [audienceFilter]);

  const filteredServices =
    audienceFilter === 'all'
      ? content.services
      : content.services.filter((service) => service.audiences.includes(audienceFilter));
  const visibleServices = showAllServices ? filteredServices : filteredServices.slice(0, 4);
  const hasMoreServices = filteredServices.length > 4;
  const hiddenServicesCount = Math.max(filteredServices.length - 4, 0);
  const previewServices = content.services.slice(0, 3);

  return (
    <div className="route-page route-page--services">
      <section className="content-section services-lumen-hero" id="services-overview">
        <div aria-hidden="true" className="services-page-glow services-page-glow--one" />
        <div aria-hidden="true" className="services-page-glow services-page-glow--two" />
        <div aria-hidden="true" className="services-page-glow services-page-glow--three" />

        <div className="content-shell services-orbit-shell">
          <div className="services-orbit-copy gs-scroll-heading">
            <div className="hide-overflow">
              <SectionLabel className="gs-scroll-text-up">{content.heroLabel}</SectionLabel>
            </div>
            {content.heroTitle.map((line, index) => (
              <div className="hide-overflow" key={line} style={{ display: 'block', marginTop: index === 0 ? '1rem' : 0 }}>
                <span className="editorial-title gs-scroll-title-up services-orbit-title">{line}</span>
              </div>
            ))}
            <p className="editorial-copy editorial-copy--wide gs-scroll-fade-up">{content.heroIntro}</p>

            <div className="services-orbit-actions gs-scroll-fade-up">
              <div className="services-orbit-cta-group">
                <a className="btn-pill services-orbit-button" href="#services-grid">
                  {content.heroPrimaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="services-orbit-stage">
            <article className="services-orbit-spotlight gs-scroll-card">
              <div className="services-orbit-spotlight-media">
                <img alt="RG Auto Conseil services" className="services-orbit-image" src={rgMedia.porscheExterior} />
                <div className="services-orbit-image-glow" />
              </div>
              <div className="services-orbit-spotlight-copy">
                <span className="label">{content.heroCardLabel}</span>
                <h2>{content.heroCardTitle}</h2>
                <p>{content.heroCardCopy}</p>
              </div>
            </article>

            <div className="services-orbit-stack">
              <article className="services-orbit-mini gs-scroll-card">
                <span className="label">{content.heroFlowLabel}</span>
                <h3 className="services-orbit-mini-title services-orbit-mini-title--flow">{content.heroFlowTitle}</h3>
                <div className="services-orbit-steps">
                  {content.heroFlowSteps.map((step) => (
                    <span className="services-orbit-step" key={step}>
                      {step}
                    </span>
                  ))}
                </div>
              </article>

              <article className="services-orbit-mini services-orbit-mini--preview gs-scroll-card">
                <span className="label">{content.heroPreviewLabel}</span>
                <h3 className="services-orbit-mini-title services-orbit-mini-title--preview">{content.heroPreviewTitle}</h3>
                <div className="services-orbit-preview-list">
                  {previewServices.map((service) => (
                    <a className="services-orbit-preview-item" href={`#service-${service.index}`} key={service.index}>
                      <span>{service.index}</span>
                      <strong>{service.title}</strong>
                    </a>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section services-summary-section" id="services-details">
        <div className="content-shell services-summary-shell">
          <div className="services-summary-head gs-scroll-fade-up">
            <SectionLabel>{content.servicesLabel}</SectionLabel>
            <h2 className="section-heading services-summary-title">
              {content.servicesTitle.map((line) => (
                <span className="services-summary-title-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="section-copy services-summary-copy">{content.servicesIntro}</p>

            <div className="services-filter-wrap">
              <span className="label services-filter-label">{content.filterLabel}</span>
              <div className="services-filter-group" role="tablist">
                {content.filters.map((filter) => (
                  <button
                    aria-pressed={audienceFilter === filter.value}
                    className={`services-filter-pill${audienceFilter === filter.value ? ' is-active' : ''}`}
                    key={filter.value}
                    onClick={() => setAudienceFilter(filter.value)}
                    type="button"
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="services-summary-grid" id="services-grid">
            {visibleServices.map((service, index) => {
              const Icon = iconMap[service.icon];
              const shouldCenterLastCard = showAllServices && visibleServices.length % 2 === 1 && index === visibleServices.length - 1;

              return (
                <article
                  className={`services-summary-card gs-scroll-card services-summary-card--${(index % 3) + 1}${shouldCenterLastCard ? ' services-summary-card--centered' : ''}`}
                  id={`service-${service.index}`}
                  key={service.title}
                >
                  <div className="services-summary-top">
                    <span className="services-summary-index">{service.index}</span>
                    <div className="services-summary-icon">
                      <Icon />
                    </div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className="services-summary-soon">
                    <span>{isEnglish ? 'Dedicated page soon' : 'Page dédiée bientôt'}</span>
                  </div>
                </article>
              );
            })}
          </div>

          {hasMoreServices ? (
            <div className="services-summary-more gs-scroll-fade-up">
              <button className="services-summary-more-button" onClick={() => setShowAllServices((value) => !value)} type="button">
                <span>{showAllServices ? content.showLess : content.showMore}</span>
                {!showAllServices ? <span className="services-summary-more-meta">{`+${hiddenServicesCount}`}</span> : null}
                <span className={`services-summary-more-icon${showAllServices ? ' is-open' : ''}`}>
                  <ArrowRightIcon />
                </span>
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
