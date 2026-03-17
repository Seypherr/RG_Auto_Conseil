import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import ServiceCard from '../components/ServiceCard';
import { SearchIcon, DocumentIcon, BriefcaseIcon, TruckIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';

export default function ServicesSection() {
  const { isEnglish } = useSite();

  const services = isEnglish
    ? [
        {
          title: 'Pre-purchase advice',
          copy: 'Clarify the project before any commitment, with an outside point of view on the target vehicle and the coherence of the purchase.',
          icon: <SearchIcon />,
        },
        {
          title: 'Inspection & checking',
          copy: 'Check the vehicle before purchase, identify watch points and frame the discussion around the actual condition of the car.',
          icon: <DocumentIcon />,
        },
        {
          title: 'Listing analysis & sourcing',
          copy: 'Filter listings, detect weak signals quickly and search for a more suitable vehicle when the right opportunity is not yet on the table.',
          icon: <BriefcaseIcon />,
        },
        {
          title: 'Accessories & optimisation',
          copy: 'Support for equipment fitting, improvement work and project-specific requests with tailored pricing when needed.',
          icon: <TruckIcon />,
        },
      ]
    : [
        {
          title: 'Conseil avant achat',
          copy: 'Clarifier le projet avant tout engagement, avec un regard extérieur sur le véhicule visé et la cohérence globale de l’achat.',
          icon: <SearchIcon />,
        },
        {
          title: 'Inspection & contrôle',
          copy: 'Inspecter le véhicule avant achat, identifier les points de vigilance et cadrer l’échange autour de l’état réel de l’auto.',
          icon: <DocumentIcon />,
        },
        {
          title: 'Analyse d’annonce & recherche',
          copy: 'Filtrer les annonces, détecter rapidement les signaux faibles et rechercher une meilleure piste quand le bon véhicule n’est pas encore trouvé.',
          icon: <BriefcaseIcon />,
        },
        {
          title: 'Accessoires & optimisation',
          copy: 'Accompagnement sur le montage d’équipements, les améliorations et les demandes spécifiques avec une logique de devis si nécessaire.',
          icon: <TruckIcon />,
        },
      ];

  return (
    <section className="content-section" id="services">
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ top: '5rem', right: '2.5rem', width: '24rem', height: '24rem', background: 'rgba(255,255,255,0.06)' }}
      />
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ bottom: '5rem', left: '2.5rem', width: '20rem', height: '20rem', background: 'rgba(255,255,255,0.04)' }}
      />
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ top: '33%', left: '-5rem', width: '16rem', height: '16rem', background: 'rgba(255,255,255,0.2)' }}
      />

      <div className="content-shell services-shell">
        <div className="services-intro gs-scroll-fade-up">
          <SectionLabel>{isEnglish ? 'Services' : 'Services'}</SectionLabel>
          <h2 className="section-heading" style={{ marginTop: '1rem' }}>
            {isEnglish ? 'Core support, clearly structured.' : 'Les prestations clés, clairement structurées.'}
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="home-section-action">
          <Link className="btn-pill" to="/services">
            {isEnglish ? 'View service details' : 'Voir le détail des prestations'}
          </Link>
        </div>
      </div>
    </section>
  );
}
