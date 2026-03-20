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
        heroTitle: ['A brighter', 'service entry,', 'built to guide.'],
        heroIntro:
          'A more editorial service page designed to make browsing easier, surface the right offer faster and prepare the future detailed service pages.',
        heroFacts: [
          { label: 'Reading', value: 'Clear & progressive' },
          { label: 'Format', value: '4 cards first' },
          { label: 'Direction', value: 'Detailed pages next' },
        ],
        heroNote: 'Thought to stay light on mobile and clearer on first pass.',
        heroCardLabel: 'Service spotlight',
        heroCardTitle: 'A more inviting route into the catalogue.',
        heroCardCopy:
          'The hero now behaves like a visual launcher: a strong first impression, a readable promise and direct access to the core services below.',
        heroFlowLabel: 'User path',
        heroFlowTitle: 'A smoother sequence from need to service.',
        heroFlowSteps: ['Need', 'Filter', 'Review', 'Contact'],
        heroPreviewLabel: 'Quick selection',
        heroPreviewTitle: 'A few core offers, visible immediately.',
        servicesLabel: 'Service proposals',
        servicesTitle: 'The core services to present clearly.',
        servicesIntro:
          'Each block below is intentionally short: the title states the need, the copy explains the promise, and the design prepares the structure for future redirects.',
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
            title: 'Vehicle pre-purchase advice',
            copy: 'Clarify the project, frame the right buying logic and move forward with a more objective automotive decision.',
            audiences: ['private'],
          },
          {
            index: '02',
            icon: 'document',
            title: 'Pre-purchase vehicle inspection',
            copy: 'Check the real condition of a vehicle before commitment and surface the points that deserve closer attention.',
            audiences: ['private', 'pro'],
          },
          {
            index: '03',
            icon: 'briefcase',
            title: 'Automotive listing analysis',
            copy: 'Read a listing more critically, detect weak signals and quickly assess whether the opportunity deserves deeper review.',
            audiences: ['pro'],
          },
          {
            index: '04',
            icon: 'briefcase',
            title: 'Negotiation with the seller',
            copy: 'Defend the buyer interest with a calmer, more structured and more realistic negotiation approach.',
            audiences: ['private', 'pro'],
          },
          {
            index: '05',
            icon: 'truck',
            title: 'Vehicle sourcing',
            copy: 'Search more efficiently and focus only on vehicles that truly match the expected brief and usage.',
            audiences: ['private', 'pro'],
          },
          {
            index: '06',
            icon: 'document',
            title: 'Equipment installation',
            copy: 'Support relevant equipment fitting to improve usability, comfort or daily practicality without unnecessary excess.',
            audiences: ['pro'],
          },
          {
            index: '07',
            icon: 'search',
            title: 'Vehicle optimisation / improvement',
            copy: 'Identify the upgrades that make sense to improve presentation, value perception and overall coherence.',
            audiences: ['private'],
          },
        ],
        showMore: 'See more',
        showLess: 'See less',
      }
    : {
        heroLabel: 'Services',
        heroTitle: ['Une entree', 'service plus claire,', 'faite pour guider.'],
        heroIntro:
          'Une page services plus editoriale, pensee pour rendre la navigation plus fluide, faire ressortir la bonne prestation plus vite et preparer les futures pages detaillees.',
        heroFacts: [
          { label: 'Lecture', value: 'Claire et progressive' },
          { label: 'Format', value: '4 cartes au depart' },
          { label: 'Direction', value: 'Pages detaillees ensuite' },
        ],
        heroNote: 'Pensee pour rester legere sur mobile et plus lisible des le premier regard.',
        heroCardLabel: 'Mise en avant',
        heroCardTitle: 'Une entree plus desireuse dans le catalogue.',
        heroCardCopy:
          'Le haut de page agit maintenant comme un vrai lanceur visuel : une premiere impression forte, une promesse lisible et un acces direct aux services essentiels.',
        heroFlowLabel: 'Parcours utilisateur',
        heroFlowTitle: 'Une lecture plus fluide du besoin au service.',
        heroFlowSteps: ['Besoin', 'Tri', 'Lecture', 'Contact'],
        heroPreviewLabel: 'Selection rapide',
        heroPreviewTitle: 'Quelques prestations cles visibles tout de suite.',
        servicesLabel: 'Propositions de service',
        servicesTitle: 'Les prestations cles a presenter clairement.',
        servicesIntro:
          'Chaque bloc ci-dessous reste volontairement court : le titre pose le besoin, le texte resume la promesse, et le design prepare la structure pour les futures redirections.',
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
            title: 'Conseil avant achat de vehicule',
            copy: 'Clarifier le projet, poser la bonne logique d achat et avancer avec une decision automobile plus objective.',
            audiences: ['private'],
          },
          {
            index: '02',
            icon: 'document',
            title: 'Inspection d un vehicule avant achat',
            copy: 'Controler l etat reel d un vehicule avant engagement et faire ressortir les points qui meritent une lecture plus poussee.',
            audiences: ['private', 'pro'],
          },
          {
            index: '03',
            icon: 'briefcase',
            title: 'Analyse d annonce automobile',
            copy: 'Lire une annonce avec plus de recul, detecter les signaux faibles et savoir rapidement si l opportunite merite une vraie analyse.',
            audiences: ['pro'],
          },
          {
            index: '04',
            icon: 'briefcase',
            title: 'Negociation avec le vendeur',
            copy: 'Defendre l interet de l acheteur avec une negociation plus calme, plus structuree et plus realiste.',
            audiences: ['private', 'pro'],
          },
          {
            index: '05',
            icon: 'truck',
            title: 'Recherche de vehicule',
            copy: 'Chercher plus efficacement et concentrer le travail sur les vehicules reellement alignes avec le besoin et l usage.',
            audiences: ['private', 'pro'],
          },
          {
            index: '06',
            icon: 'document',
            title: 'Montage d equipements',
            copy: 'Accompagner les montages utiles pour ameliorer l usage, le confort ou la praticite quotidienne sans ajout superflu.',
            audiences: ['pro'],
          },
          {
            index: '07',
            icon: 'search',
            title: 'Optimisation / amelioration du vehicule',
            copy: 'Identifier les evolutions pertinentes pour ameliorer la presentation, la perception de valeur et la coherence d ensemble.',
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
                    <div className="services-orbit-preview-item" key={service.index}>
                      <span>{service.index}</span>
                      <strong>{service.title}</strong>
                    </div>
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
