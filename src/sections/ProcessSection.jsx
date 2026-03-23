import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { processSectionContent } from '../data/homeContent';
import { getLocaleContent } from '../utils/getLocaleContent';

export default function ProcessSection() {
  const { language } = useSite();
  const content = getLocaleContent(processSectionContent, language);

  return (
    <section className="content-section process-section" id="process">
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ top: '-4rem', left: '15%', width: '22rem', height: '22rem', background: 'rgba(255,255,255,0.05)' }}
      />

      <div className="content-shell process-shell">
        <div className="process-copy-wrap gs-scroll-fade-up">
          <SectionLabel className="home-accent-label">{content.label}</SectionLabel>
          <h2 className="section-heading" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            {content.title}
          </h2>
          <p className="section-copy">{content.copy}</p>
        </div>

        <div className="process-grid">
          {content.steps.map((step) => (
            <article className="surface-card process-card gs-scroll-card" key={step.step}>
              <div>
                <div className="process-step">{step.step}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-copy">{step.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="home-section-action">
          <Link className="btn-pill" to="/contact">
            {content.action}
          </Link>
        </div>
      </div>
    </section>
  );
}
