import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';

export default function ProcessSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Why trust us',
        title: 'A reassuring, independent and human approach',
        copy:
          'Our support is designed to make each automotive decision easier to understand, calmer to live through and more secure in the end.',
        action: 'Talk about your project',
        steps: [
          {
            step: '01',
            title: 'Independent',
            copy: 'No hidden interest, no pressure and no forced direction. The advice is there to protect your decision.',
          },
          {
            step: '02',
            title: 'Tailored',
            copy: 'Every project is read according to your use, your priorities and the real level of support you need.',
          },
          {
            step: '03',
            title: 'Aesthetic and technical',
            copy: 'A double reading to preserve the identity of the vehicle while improving what truly makes sense.',
          },
          {
            step: '04',
            title: 'Human support',
            copy: 'A clear, calm and accessible exchange for clients who want to move forward without feeling overwhelmed.',
          },
        ],
      }
    : {
        label: 'Pourquoi nous faire confiance',
        title: 'Une approche rassurante, independante et humaine',
        copy:
          'Notre accompagnement est pense pour rendre chaque decision automobile plus lisible, plus sereine et plus sure au final.',
        action: 'Parler de votre projet',
        steps: [
          {
            step: '01',
            title: 'Independant',
            copy: 'Aucun interet cache, aucune pression et aucune orientation forcee. Le conseil est la pour proteger votre decision.',
          },
          {
            step: '02',
            title: 'Sur mesure',
            copy: 'Chaque projet est lu selon votre usage, vos priorites et le niveau d accompagnement dont vous avez vraiment besoin.',
          },
          {
            step: '03',
            title: 'Esthetique et technique',
            copy: 'Une double lecture pour respecter l ADN du vehicule tout en ameliorant ce qui a vraiment du sens.',
          },
          {
            step: '04',
            title: 'Accompagnement humain',
            copy: 'Un echange clair, calme et accessible pour les clients qui veulent avancer sans se sentir perdus.',
          },
        ],
      };

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

        <div className="home-section-action home-section-action--left">
          <Link className="btn-pill" to="/contact">
            {content.action}
          </Link>
        </div>
      </div>
    </section>
  );
}
