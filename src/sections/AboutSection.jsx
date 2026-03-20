import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';

export default function AboutSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'About',
        title: 'Gaëtan Roblin',
        paragraphs: [
          'RG Auto Conseil is built around Gaëtan Roblin’s support: pre-purchase advice, inspection, listing analysis, vehicle sourcing and accessory fitting with a clear, independent point of view.',
          'The positioning is that of an automotive expert and independent advisor able to reassure, explain and structure the decision process for private and professional clients alike.',
        ],
        stats: [
          { value: 'PACA', label: 'Service area' },
          { value: '15–40', accent: 'k€', label: 'Average budget' },
          { value: 'Private', accent: ' & pro', label: 'Clients' },
        ],
        action: 'Explore expertise',
      }
    : {
        label: 'À propos',
        title: 'Gaëtan Roblin',
        paragraphs: [
          'RG Auto Conseil présente l’accompagnement de Gaëtan Roblin autour du conseil avant achat, de l’inspection, de l’analyse d’annonce, de la recherche automobile et du montage d’accessoires avec un regard clair et indépendant.',
          'Le positionnement retenu est celui d’un expert automobile et conseiller indépendant capable de rassurer, d’expliquer et de structurer la décision pour des particuliers comme pour des professionnels.',
        ],
        stats: [
          { value: 'PACA', label: "Zone d’intervention" },
          { value: '15–40', accent: 'k€', label: 'Budget moyen' },
          { value: 'Part.', accent: ' & pros', label: 'Clients' },
        ],
        action: 'Découvrir l’expertise',
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
              <span className="stat-value">
                {stat.value}
                {stat.accent ? <span>{stat.accent}</span> : null}
              </span>
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
