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
        heroTitle: ['Clear support,', 'clean reading,', 'useful guidance.'],
        heroIntro:
          'Every project is unique. Our role is to guide you with method, transparency and expertise.',
        heroFacts: [
          { label: 'Positioning', value: 'Independent advisor' },
          { label: 'Tone', value: 'Clear and reassuring' },
          { label: 'Goal', value: 'Protect the decision' },
        ],
        heroNote: 'Built to stay readable on mobile and premium on first contact.',
        heroCardLabel: 'Service focus',
        heroCardTitle: 'Support designed to simplify complex decisions.',
        heroCardCopy:
          'The page explains each service clearly so visitors understand what is done, why it matters and when it becomes relevant.',
        heroFlowLabel: 'How we work',
        heroFlowTitle: 'A simple path from need to action.',
        heroFlowSteps: ['Understand', 'Analyse', 'Advise', 'Support'],
        heroPreviewLabel: 'Core services',
        heroPreviewTitle: 'The main needs visible right away.',
        servicesLabel: 'Detailed services',
        servicesTitle: 'Guidance that adapts to each automotive project.',
        servicesIntro:
          'Each service is presented in a simple and reassuring way so non-expert clients can quickly understand the benefit.',
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
            title: 'Purchase support',
            copy: 'We help you make the right choice by analysing your needs, the market and the available opportunities.',
            audiences: ['private', 'pro'],
          },
          {
            index: '02',
            icon: 'document',
            title: 'Vehicle inspection',
            copy: 'A complete pre-purchase verification designed to avoid unpleasant surprises and clarify the true condition of the vehicle.',
            audiences: ['private', 'pro'],
          },
          {
            index: '03',
            icon: 'briefcase',
            title: 'Tailored sourcing',
            copy: 'We find the right vehicle for you according to your criteria, your budget and the way you intend to use it.',
            audiences: ['private', 'pro'],
          },
          {
            index: '04',
            icon: 'truck',
            title: 'Modernisation advice',
            copy: 'Aesthetic and functional improvements designed to modernise the vehicle without taking away its identity.',
            audiences: ['private'],
          },
          {
            index: '05',
            icon: 'briefcase',
            title: 'Follow-up and support',
            copy: 'We stay present at every stage, from the first reflection to the final decision and the next concrete actions.',
            audiences: ['private', 'pro'],
          },
        ],
        showMore: 'See more',
        showLess: 'See less',
      }
    : {
        heroLabel: 'Services',
        heroTitle: ['Un accompagnement', 'clair,', 'utile et rassurant.'],
        heroIntro:
          'Chaque projet est unique. Notre role est de vous guider avec methode, transparence et expertise.',
        heroFacts: [
          { label: 'Positionnement', value: 'Conseiller independant' },
          { label: 'Ton', value: 'Clair et rassurant' },
          { label: 'Objectif', value: 'Proteger la decision' },
        ],
        heroNote: 'Pensee pour rester lisible sur mobile et premium au premier regard.',
        heroCardLabel: 'Mise en avant',
        heroCardTitle: 'Un accompagnement pense pour simplifier les decisions complexes.',
        heroCardCopy:
          'La page explique clairement chaque service pour que le visiteur comprenne ce qui est fait, pourquoi cela compte et a quel moment cela devient utile.',
        heroFlowLabel: 'Maniere de travailler',
        heroFlowTitle: 'Un parcours simple du besoin a l action.',
        heroFlowSteps: ['Comprendre', 'Analyser', 'Conseiller', 'Accompagner'],
        heroPreviewLabel: 'Services cles',
        heroPreviewTitle: 'Les besoins essentiels visibles tout de suite.',
        servicesLabel: 'Services detailles',
        servicesTitle: 'Un accompagnement qui s adapte a chaque projet automobile.',
        servicesIntro:
          'Chaque service est presente de facon simple et rassurante pour permettre a des clients non experts de comprendre rapidement l interet de l accompagnement.',
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
            title: 'Accompagnement a l achat',
            copy: 'Nous vous aidons a faire le bon choix, en analysant vos besoins, le marche et les opportunites disponibles.',
            audiences: ['private', 'pro'],
          },
          {
            index: '02',
            icon: 'document',
            title: 'Inspection de vehicule',
            copy: 'Verification complete avant achat pour eviter les mauvaises surprises et mieux lire l etat reel du vehicule.',
            audiences: ['private', 'pro'],
          },
          {
            index: '03',
            icon: 'briefcase',
            title: 'Recherche personnalisee',
            copy: 'Nous trouvons pour vous le vehicule ideal selon vos criteres, votre budget et votre usage.',
            audiences: ['private', 'pro'],
          },
          {
            index: '04',
            icon: 'truck',
            title: 'Conseil en modernisation',
            copy: 'Des ameliorations esthetiques et fonctionnelles pensees pour moderniser proprement sans denaturer le vehicule.',
            audiences: ['private'],
          },
          {
            index: '05',
            icon: 'briefcase',
            title: 'Suivi et accompagnement',
            copy: 'Nous restons presents a chaque etape, de la reflexion jusqu a la finalisation du projet.',
            audiences: ['private', 'pro'],
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
      <section className="content-section services-lumen-hero">
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
              <a className="btn-pill services-orbit-button" href="#services-grid">
                {isEnglish ? 'Browse services' : 'Parcourir les services'}
              </a>
              <p className="services-orbit-note">{content.heroNote}</p>
            </div>

            <div className="services-orbit-facts gs-scroll-fade-up">
              {content.heroFacts.map((fact) => (
                <article className="services-orbit-fact" key={fact.label}>
                  <span className="label">{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
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
                <h3>{content.heroFlowTitle}</h3>
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
                <h3>{content.heroPreviewTitle}</h3>
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

      <section className="content-section services-summary-section">
        <div className="content-shell services-summary-shell">
          <div className="services-summary-head gs-scroll-fade-up">
            <SectionLabel>{content.servicesLabel}</SectionLabel>
            <h2 className="section-heading services-summary-title">{content.servicesTitle}</h2>
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
                    <span>{isEnglish ? 'Dedicated page soon' : 'Page dediee bientot'}</span>
                  </div>
                </article>
              );
            })}
          </div>

          {hasMoreServices ? (
            <div className="services-summary-more gs-scroll-fade-up">
              <button className="services-summary-more-button" onClick={() => setShowAllServices((value) => !value)} type="button">
                <span>{showAllServices ? content.showLess : content.showMore}</span>
                <span className="services-summary-more-meta">{showAllServices ? null : `+${hiddenServicesCount}`}</span>
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
