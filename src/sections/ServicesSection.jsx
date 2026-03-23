import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import ServiceCard from '../components/ServiceCard';
import { SearchIcon, DocumentIcon, BriefcaseIcon, TruckIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';
import { servicesSectionContent } from '../data/homeContent';
import { getLocaleContent } from '../utils/getLocaleContent';

export default function ServicesSection() {
  const { language } = useSite();
  const content = getLocaleContent(servicesSectionContent, language);
  const icons = [<SearchIcon key="search" />, <DocumentIcon key="document" />, <BriefcaseIcon key="briefcase" />, <TruckIcon key="truck" />];

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
          {content.items.map((service, index) => (
            <ServiceCard copy={service.copy} icon={icons[index]} key={service.title} title={service.title} />
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
