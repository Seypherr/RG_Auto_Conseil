import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';

export default function ProcessSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Process',
        title: 'A workflow designed to reassure.',
        copy:
          'The site first needs to inspire trust and make the offer readable. From there, each request can turn into a call, a quote or a more tailored support format.',
        action: 'Contact RG Auto Conseil',
        steps: [
          {
            step: '01',
            title: 'First exchange',
            copy: 'A first contact to understand the vehicle, the buying context and the level of support expected.',
          },
          {
            step: '02',
            title: 'Targeted analysis',
            copy: 'Advice, listing review, inspection and possible negotiation points before any commitment is made.',
          },
          {
            step: '03',
            title: 'Execution',
            copy: 'Vehicle sourcing, accessory fitting or optimisation support with a clear follow-up through the project.',
          },
        ],
      }
    : {
        label: 'Processus',
        title: 'Un accompagnement pensé pour rassurer.',
        copy:
          'Le site doit d’abord inspirer confiance et rendre l’offre lisible. Chaque demande peut ensuite déboucher sur un appel, un devis ou un accompagnement plus personnalisé.',
        action: 'Contacter RG Auto Conseil',
        steps: [
          {
            step: '01',
            title: 'Premier échange',
            copy: 'Un premier contact pour comprendre le véhicule visé, le contexte d’achat et le niveau d’accompagnement attendu.',
          },
          {
            step: '02',
            title: 'Analyse ciblée',
            copy: 'Conseil, lecture d’annonce, inspection et éventuels points de négociation avant toute prise de décision.',
          },
          {
            step: '03',
            title: 'Mise en œuvre',
            copy: 'Recherche de véhicule, montage d’équipements ou optimisation avec un suivi clair jusqu’à la finalisation du projet.',
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
          <SectionLabel>{content.label}</SectionLabel>
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
