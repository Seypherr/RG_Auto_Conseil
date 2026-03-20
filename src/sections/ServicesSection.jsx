import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import ServiceCard from '../components/ServiceCard';
import { SearchIcon, DocumentIcon, BriefcaseIcon, TruckIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';

export default function ServicesSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Services',
        title: 'Our essential services',
        action: 'View all services',
        items: [
          {
            title: 'Purchase support',
            copy: 'Independent guidance to help you buy the right vehicle with more clarity and less stress.',
            icon: <SearchIcon />,
          },
          {
            title: 'Vehicle inspection',
            copy: 'A complete pre-purchase check to avoid unpleasant surprises and make the condition easier to understand.',
            icon: <DocumentIcon />,
          },
          {
            title: 'Tailored sourcing',
            copy: 'A more focused search to identify vehicles that truly match your needs, budget and usage.',
            icon: <BriefcaseIcon />,
          },
          {
            title: 'Tailored modernisation',
            copy: 'Clean aesthetic or functional improvements designed to respect the original identity of the car.',
            icon: <TruckIcon />,
          },
        ],
      }
    : {
        label: 'Services',
        title: 'Nos services essentiels',
        action: 'Voir tous les services',
        items: [
          {
            title: 'Accompagnement a l achat',
            copy: 'Un accompagnement independant pour acheter le bon vehicule avec plus de clarte et moins de stress.',
            icon: <SearchIcon />,
          },
          {
            title: 'Inspection de vehicule',
            copy: 'Une verification complete avant achat pour eviter les mauvaises surprises et mieux comprendre l etat reel du vehicule.',
            icon: <DocumentIcon />,
          },
          {
            title: 'Recherche personnalisee',
            copy: 'Une recherche plus ciblee pour identifier les vehicules vraiment adaptes a vos criteres, votre budget et votre usage.',
            icon: <BriefcaseIcon />,
          },
          {
            title: 'Modernisation sur mesure',
            copy: 'Des ameliorations esthetiques ou fonctionnelles pensees pour respecter l identite du vehicule.',
            icon: <TruckIcon />,
          },
        ],
      };

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

      <div className="content-shell services-shell">
        <div className="services-intro gs-scroll-fade-up">
          <SectionLabel className="home-accent-label">{content.label}</SectionLabel>
          <h2 className="section-heading" style={{ marginTop: '1rem' }}>
            {content.title}
          </h2>
        </div>

        <div className="services-grid">
          {content.items.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="home-section-action">
          <Link className="btn-pill" to="/services">
            {content.action}
          </Link>
        </div>
      </div>
    </section>
  );
}
