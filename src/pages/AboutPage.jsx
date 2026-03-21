import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { rgMedia } from '../data/rgMedia';

function ValueIcon() {
  return (
    <svg className="service-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const valueIcons = [ValueIcon, ValueIcon, ValueIcon, ValueIcon];

export default function AboutPage() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        biographyLabel: 'About',
        biographyTitle: 'An independent approach focused on your needs',
        biographyIntro:
          'Passionate about cars, I created RG Auto Conseil to help people make the right decisions without being overwhelmed by the complexity of the market.',
        biographyCopy:
          'My goal is simple: bring an expert, honest and tailored perspective to every automotive project, whether it is about buying, checking or improving a vehicle intelligently.',
        biographyFacts: [
          { label: 'Positioning', value: 'Independent advisor' },
          { label: 'Tone', value: 'Simple and reassuring' },
          { label: 'Goal', value: 'Build confidence' },
        ],
        biographyBadge: 'Gaëtan Roblin',
        valuesLabel: 'Values',
        valuesTitle: 'The principles behind every project.',
        values: [
          { title: 'Transparency', copy: 'Clear explanations, no unnecessary jargon and no hidden intention.' },
          { title: 'High standards', copy: 'A rigorous reading of each situation to avoid shortcuts and weak decisions.' },
          { title: 'Attention to detail', copy: 'A careful approach that respects the identity of the vehicle and the real need of the client.' },
        ],
        studiesLabel: 'Approach',
        studiesTitle: 'Expertise made visible through real work.',
        studiesKicker: '',
        caseStudies: [
          {
            status: 'Purchase support',
            title: 'A clearer decision process',
            copy: 'The role of RG Auto Conseil is to understand the need, read the relevant details and make the next step easier to understand.',
            image: rgMedia.porscheExterior,
            metaPrimaryLabel: 'Method',
            metaPrimaryValue: 'Independent reading',
            metaSecondaryLabel: 'Result',
            metaSecondaryValue: 'More confidence',
          },
          {
            status: 'Vehicle improvement',
            title: 'A respectful modernisation',
            copy: 'Each enhancement is designed to improve use or presentation without drifting toward an aggressive or tuning-oriented image.',
            image: rgMedia.fordCameraDisplay,
            metaPrimaryLabel: 'Focus',
            metaPrimaryValue: 'Useful improvement',
            metaSecondaryLabel: 'Result',
            metaSecondaryValue: 'Discreet premium finish',
          },
        ],
        ctaButton: 'Get in touch',
      }
    : {
        biographyLabel: 'À propos',
        biographyTitle: 'Une approche indépendante, centrée sur vos besoins',
        biographyIntro:
          'Passionné d’automobile, j’ai créé RG Auto Conseil pour suivre ceux qui souhaitent faire les bons choix sans subir la complexité du marché.',
        biographyCopy:
          'Mon objectif : vous apporter un regard expert, honnête et sur mesure, que ce soit pour acheter, vérifier ou améliorer un véhicule intelligemment.',
        biographyFacts: [
          { label: 'Positionnement', value: 'Conseiller indépendant' },
          { label: 'Ton', value: 'Simple et rassurant' },
          { label: 'Objectif', value: 'Donner confiance' },
        ],
        biographyBadge: 'Gaëtan Roblin',
        valuesLabel: 'Valeurs',
        valuesTitle: 'Les principes qui guident chaque projet.',
        values: [
          { title: 'Transparence', copy: 'Des explications claires, pas de jargon inutile et aucune intention cachée.' },
          { title: 'Exigence', copy: 'Une lecture rigoureuse de chaque situation pour éviter les raccourcis et les mauvaises décisions.' },
          { title: 'Sens du détail', copy: 'Une approche soignée qui respecte l’identité du véhicule et le vrai besoin du client.' },
        ],
        studiesLabel: 'Approche',
        studiesTitle: 'Une expertise rendue visible par le concret.',
        studiesKicker: '',
        caseStudies: [
          {
            status: 'Suivi achat',
            title: 'Un processus de décision plus clair',
            copy: 'Le rôle de RG Auto Conseil est de comprendre le besoin, lire les détails utiles et rendre la suite plus simple à comprendre.',
            image: rgMedia.porscheExterior,
            metaPrimaryLabel: 'Méthode',
            metaPrimaryValue: 'Lecture indépendante',
            metaSecondaryLabel: 'Résultat',
            metaSecondaryValue: 'Plus de confiance',
          },
          {
            status: 'Amélioration véhicule',
            title: 'Une modernisation respectueuse',
            copy: 'Chaque évolution est pensée pour améliorer l’usage ou la présentation sans glisser vers une image agressive ou tuning.',
            image: rgMedia.fordCameraDisplay,
            metaPrimaryLabel: 'Focus',
            metaPrimaryValue: 'Amélioration utile',
            metaSecondaryLabel: 'Résultat',
            metaSecondaryValue: 'Finition premium discrète',
          },
        ],
        ctaButton: 'Prendre contact',
      };

  return (
    <div className="route-page route-page--about">
      <section className="content-section about-biography-section" id="about-biography">
        <div className="content-shell about-biography-grid">
          <article className="about-biography-visual gs-scroll-card">
            <img alt="Gaëtan Roblin" className="about-biography-image" src={rgMedia.aboutPortrait} />
            <div className="about-biography-image-mask" />
            <div className="about-biography-image-copy">
              <span className="label">{content.biographyBadge}</span>
            </div>
          </article>

          <div className="about-biography-copy gs-scroll-heading">
            <div className="about-biography-copy-main">
              <div className="hide-overflow">
                <SectionLabel className="gs-scroll-text-up">{content.biographyLabel}</SectionLabel>
              </div>
              <div className="hide-overflow">
                <span className="section-heading about-biography-title gs-scroll-title-up">{content.biographyTitle}</span>
              </div>
              <p className="section-copy about-biography-intro gs-scroll-fade-up">{content.biographyIntro}</p>
              <p className="section-copy mobile-secondary gs-scroll-fade-up">{content.biographyCopy}</p>
            </div>

            <div className="about-biography-facts">
              {content.biographyFacts.map((fact) => (
                <article className="about-biography-fact gs-scroll-card" key={fact.label}>
                  <span className="label">{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section about-trust-section" id="about-values">
        <div className="content-shell">
          <div className="about-faq-heading gs-scroll-heading" style={{ marginBottom: '2rem' }}>
            <div className="hide-overflow">
              <SectionLabel className="gs-scroll-text-up">{content.valuesLabel}</SectionLabel>
            </div>
            <div className="hide-overflow">
              <span className="section-heading about-faq-title gs-scroll-title-up">{content.valuesTitle}</span>
            </div>
          </div>

          <div className="about-trust-grid">
            {content.values.map((card, index) => {
              const Icon = valueIcons[index];

              return (
                <article className="about-trust-card gs-scroll-card" key={card.title}>
                  <div className="about-trust-icon">
                    <Icon />
                  </div>
                  <h2>{card.title}</h2>
                  <p>{card.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section about-case-section" id="about-approach">
        <div className="content-shell">
          <div className="about-case-header">
            <div className="gs-scroll-heading">
              <div className="hide-overflow">
                <SectionLabel className="gs-scroll-text-up">{content.studiesLabel}</SectionLabel>
              </div>
              <div className="hide-overflow">
                <span className="section-heading about-case-title gs-scroll-title-up">{content.studiesTitle}</span>
              </div>
            </div>
            <p className="about-case-kicker mobile-secondary gs-scroll-fade-up">{content.studiesKicker}</p>
          </div>

          <div className="about-case-grid">
            {content.caseStudies.map((study) => (
              <article className="about-case-card gs-scroll-card" key={study.title}>
                <div className="about-case-media">
                  <img alt={study.title} src={study.image} />
                  <span className="about-case-status">{study.status}</span>
                  <div className="about-case-media-copy">
                    <h3>{study.title}</h3>
                    <p>{study.copy}</p>
                  </div>
                </div>

                <div className="about-case-meta">
                  <div>
                    <span className="label">{study.metaPrimaryLabel}</span>
                    <strong>{study.metaPrimaryValue}</strong>
                  </div>
                  <div>
                    <span className="label">{study.metaSecondaryLabel}</span>
                    <strong>{study.metaSecondaryValue}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section about-cta-section" id="about-contact">
        <div className="content-shell about-cta-shell">
          <Link className="btn-pill" to="/contact">
            {content.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
