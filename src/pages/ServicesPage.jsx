import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import SectionLabel from '../components/SectionLabel';
import { SearchIcon, DocumentIcon, BriefcaseIcon, TruckIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';

export default function ServicesPage() {
  const { isEnglish } = useSite();

  const hero = isEnglish
    ? {
        label: 'Services',
        titleLines: ['Service', 'details'],
        copy:
          'A clear breakdown of every support offer, including pre-purchase advice, inspection, listing analysis, sourcing and complementary services.',
        actions: [{ label: 'Request a quote', to: '/contact' }],
      }
    : {
        label: 'Services',
        titleLines: ['Prestations', 'détaillées'],
        copy:
          'Une lecture claire de chaque accompagnement, du conseil avant achat à la recherche de véhicule, avec les services complémentaires et la logique de devis.',
        actions: [{ label: 'Demander un devis', to: '/contact' }],
      };

  const highlights = isEnglish
    ? [
        {
          title: 'Pre-purchase advice',
          copy: 'An independent first reading to validate the project, the targeted vehicle and the buying logic before moving forward.',
          icon: <SearchIcon />,
        },
        {
          title: 'Inspection before purchase',
          copy: 'A structured inspection to identify watch points, mechanical concerns or inconsistencies before signing.',
          icon: <DocumentIcon />,
        },
        {
          title: 'Listing analysis',
          copy: 'A quick and rigorous review of a listing to challenge the presentation, the pricing and the coherence of the offer.',
          icon: <BriefcaseIcon />,
        },
        {
          title: 'Vehicle sourcing',
          copy: 'A targeted search based on your criteria when the right car is not yet identified or when time must be saved.',
          icon: <TruckIcon />,
        },
      ]
    : [
        {
          title: 'Conseil avant achat',
          copy: 'Un premier regard indépendant pour valider le projet, le véhicule ciblé et la logique d’achat avant d’aller plus loin.',
          icon: <SearchIcon />,
        },
        {
          title: 'Inspection avant achat',
          copy: 'Une inspection structurée pour identifier les points de vigilance, anomalies ou incohérences avant signature.',
          icon: <DocumentIcon />,
        },
        {
          title: 'Analyse d’annonce',
          copy: 'Une lecture rapide et rigoureuse de l’annonce pour challenger la présentation, le prix et la cohérence globale de l’offre.',
          icon: <BriefcaseIcon />,
        },
        {
          title: 'Recherche de véhicule',
          copy: 'Une recherche ciblée à partir de vos critères quand la bonne auto n’est pas encore identifiée ou quand il faut gagner du temps.',
          icon: <TruckIcon />,
        },
      ];

  const groups = isEnglish
    ? [
        {
          title: 'Core services',
          items: ['Pre-purchase advice', 'Inspection before purchase', 'Listing analysis', 'Vehicle sourcing'],
        },
        {
          title: 'Complementary services',
          items: ['Negotiation support', 'Equipment fitting', 'Vehicle optimisation'],
        },
        {
          title: 'Quote logic',
          items: ['Starting point from €149', 'Support up to €799', 'Custom quote for accessories or specific projects'],
        },
      ]
    : [
        {
          title: 'Prestations cœur',
          items: ['Conseil avant achat', 'Inspection avant achat', 'Analyse d’annonce', 'Recherche de véhicule'],
        },
        {
          title: 'Services complémentaires',
          items: ['Négociation', 'Montage d’équipements', 'Optimisation du véhicule'],
        },
        {
          title: 'Logique de devis',
          items: ['Premier niveau à partir de 149 €', 'Accompagnement jusqu’à 799 €', 'Devis sur mesure pour accessoires ou besoins spécifiques'],
        },
      ];

  const pricing = isEnglish
    ? [
        {
          title: 'Targeted mission',
          copy: 'For a focused need or an initial review, pricing starts from €149.',
        },
        {
          title: 'Extended support',
          copy: 'Depending on the mission depth, support can go up to €799 for a more complete intervention.',
        },
        {
          title: 'Tailored quote',
          copy: 'Accessory fitting, optimisation and custom requests follow a quote-based logic adapted to the project.',
        },
      ]
    : [
        {
          title: 'Mission ciblée',
          copy: 'Pour un besoin ponctuel ou une première lecture, la tarification démarre à partir de 149 €.',
        },
        {
          title: 'Accompagnement renforcé',
          copy: 'Selon la profondeur de la mission, l’accompagnement peut aller jusqu’à 799 € pour une intervention plus complète.',
        },
        {
          title: 'Devis sur mesure',
          copy: 'Les montages d’équipements, optimisations et demandes spécifiques suivent une logique de devis adaptée au projet.',
        },
      ];

  return (
    <div className="route-page">
      <PageHero {...hero} />

      <section className="content-section">
        <div className="content-shell services-shell">
          <div className="services-intro gs-scroll-fade-up">
            <SectionLabel>{isEnglish ? 'Highlights' : 'Prestations'}</SectionLabel>
            <h2 className="section-heading" style={{ marginTop: '1rem' }}>
              {isEnglish ? 'The most requested interventions.' : 'Les interventions les plus demandées.'}
            </h2>
          </div>

          <div className="services-grid">
            {highlights.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="content-section process-section">
        <div className="content-shell page-grid page-grid--three">
          {groups.map((group) => (
            <article className="surface-card gs-scroll-card detail-panel" key={group.title}>
              <div className="process-step">{group.title}</div>
              <ul className="detail-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="content-shell">
          <div className="services-intro gs-scroll-fade-up">
            <SectionLabel>{isEnglish ? 'Pricing' : 'Tarifs & devis'}</SectionLabel>
            <h2 className="section-heading" style={{ marginTop: '1rem' }}>
              {isEnglish ? 'A clear framework before custom scope.' : 'Un cadre clair avant le sur-mesure.'}
            </h2>
          </div>

          <div className="page-grid page-grid--three">
            {pricing.map((item) => (
              <article className="surface-card gs-scroll-card detail-panel" key={item.title}>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
