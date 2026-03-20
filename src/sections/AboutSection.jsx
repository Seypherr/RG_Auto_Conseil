import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';

export default function AboutSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Value',
        title: 'An expert eye, designed for your peace of mind',
        paragraphs: [
          'Buying or modifying a vehicle can quickly become complex.',
          'We support you at every stage to avoid mistakes, secure your investment and help you make the right decisions with confidence.',
        ],
        stats: [
          { value: 'Independent', label: 'Clear position' },
          { value: 'Tailored', label: 'Support style' },
          { value: 'Human', label: 'Relationship' },
        ],
        action: 'Discover the approach',
      }
    : {
        label: 'Valeur',
        title: 'Un regard expert, au service de votre tranquillite',
        paragraphs: [
          'Acheter ou modifier un vehicule peut vite devenir complexe.',
          'Nous vous accompagnons a chaque etape pour eviter les erreurs, securiser votre investissement et faire les bons choix.',
        ],
        stats: [
          { value: 'Independant', label: 'Positionnement' },
          { value: 'Sur mesure', label: 'Accompagnement' },
          { value: 'Humain', label: 'Relation client' },
        ],
        action: 'Decouvrir l approche',
      };

  return (
    <section className="content-section about-section" id="mission">
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ top: '33%', right: 0, width: '18rem', height: '18rem', background: 'rgba(255,255,255,0.1)' }}
      />
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ bottom: '25%', left: '25%', width: '16rem', height: '16rem', background: 'rgba(255,255,255,0.05)' }}
      />

      <div className="content-shell about-shell gs-scroll-fade-up">
        <SectionLabel className="about-label home-accent-label">{content.label}</SectionLabel>
        <h2 className="section-heading" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          {content.title}
        </h2>

        <div className="about-copy section-copy">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about-stats">
          {content.stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="home-section-action">
          <Link className="btn-pill" to="/about">
            {content.action}
          </Link>
        </div>
      </div>
    </section>
  );
}
