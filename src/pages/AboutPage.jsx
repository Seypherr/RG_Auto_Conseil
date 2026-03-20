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
        biographyBadge: 'Gaetan Roblin',
        biographyNote: 'Biography block ready for portrait',
        valuesLabel: 'Values',
        valuesTitle: 'The principles behind every project.',
        values: [
          { title: 'Transparency', copy: 'Clear explanations, no unnecessary jargon and no hidden intention.' },
          { title: 'High standards', copy: 'A rigorous reading of each situation to avoid shortcuts and weak decisions.' },
          { title: 'Human support', copy: 'A calm and accessible exchange for clients who need guidance, not pressure.' },
          { title: 'Attention to detail', copy: 'A careful approach that respects the identity of the vehicle and the real need of the client.' },
        ],
        studiesLabel: 'Approach',
        studiesTitle: 'Expertise made visible through real work.',
        studiesKicker: 'Independent advice, visual proof and discreet premium standards',
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
        ctaTitle: 'Need a calm and expert point of view for your vehicle project?',
        ctaButton: 'Contact RG Auto Conseil',
        ctaNote: 'Reply as quickly as possible',
      }
    : {
        biographyLabel: 'A propos',
        biographyTitle: 'Une approche independante, centree sur vos besoins',
        biographyIntro:
          'Passionne d automobile, j ai cree RG Auto Conseil pour accompagner ceux qui souhaitent faire les bons choix sans subir la complexite du marche.',
        biographyCopy:
          'Mon objectif : vous apporter un regard expert, honnete et sur mesure, que ce soit pour acheter, verifier ou ameliorer un vehicule intelligemment.',
        biographyFacts: [
          { label: 'Positionnement', value: 'Conseiller independant' },
          { label: 'Ton', value: 'Simple et rassurant' },
          { label: 'Objectif', value: 'Donner confiance' },
        ],
        biographyBadge: 'Gaetan Roblin',
        biographyNote: 'Bloc biographie pret pour le portrait',
        valuesLabel: 'Valeurs',
        valuesTitle: 'Les principes qui guident chaque projet.',
        values: [
          { title: 'Transparence', copy: 'Des explications claires, pas de jargon inutile et aucune intention cachee.' },
          { title: 'Exigence', copy: 'Une lecture rigoureuse de chaque situation pour eviter les raccourcis et les mauvaises decisions.' },
          { title: 'Accompagnement humain', copy: 'Un echange calme et accessible pour les clients qui ont besoin d etre guides, pas d etre brusques.' },
          { title: 'Sens du detail', copy: 'Une approche soignee qui respecte l identite du vehicule et le vrai besoin du client.' },
        ],
        studiesLabel: 'Approche',
        studiesTitle: 'Une expertise rendue visible par le concret.',
        studiesKicker: 'Conseil independant, preuve visuelle et haut de gamme discret',
        caseStudies: [
          {
            status: 'Accompagnement achat',
            title: 'Un processus de decision plus clair',
            copy: 'Le role de RG Auto Conseil est de comprendre le besoin, lire les details utiles et rendre la suite plus simple a comprendre.',
            image: rgMedia.porscheExterior,
            metaPrimaryLabel: 'Methode',
            metaPrimaryValue: 'Lecture independante',
            metaSecondaryLabel: 'Resultat',
            metaSecondaryValue: 'Plus de confiance',
          },
          {
            status: 'Amelioration vehicule',
            title: 'Une modernisation respectueuse',
            copy: 'Chaque evolution est pensee pour ameliorer l usage ou la presentation sans glisser vers une image agressive ou tuning.',
            image: rgMedia.fordCameraDisplay,
            metaPrimaryLabel: 'Focus',
            metaPrimaryValue: 'Amelioration utile',
            metaSecondaryLabel: 'Resultat',
            metaSecondaryValue: 'Finition premium discrete',
          },
        ],
        ctaTitle: 'Besoin d un regard calme et expert pour votre projet automobile ?',
        ctaButton: 'Contacter RG Auto Conseil',
        ctaNote: 'Retour des que possible',
      };

  return (
    <div className="route-page route-page--about">
      <section className="content-section about-biography-section">
        <div className="content-shell about-biography-grid">
          <article className="about-biography-visual gs-scroll-card">
            <img alt="Gaetan Roblin" className="about-biography-image" src={rgMedia.brandSignature} />
            <div className="about-biography-image-mask" />
            <div className="about-biography-image-copy">
              <span className="label">{content.biographyBadge}</span>
              <strong>{isEnglish ? 'Independent automotive advisor' : 'Conseiller automobile independant'}</strong>
              <small>{content.biographyNote}</small>
            </div>
          </article>

          <div className="about-biography-copy gs-scroll-fade-up">
            <SectionLabel>{content.biographyLabel}</SectionLabel>
            <h1 className="section-heading about-biography-title">{content.biographyTitle}</h1>
            <p className="section-copy about-biography-intro">{content.biographyIntro}</p>
            <p className="section-copy mobile-secondary">{content.biographyCopy}</p>

            <div className="about-biography-facts">
              {content.biographyFacts.map((fact) => (
                <article className="about-biography-fact" key={fact.label}>
                  <span className="label">{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section about-trust-section">
        <div className="content-shell">
          <div className="about-faq-heading gs-scroll-fade-up" style={{ marginBottom: '2rem' }}>
            <SectionLabel>{content.valuesLabel}</SectionLabel>
            <h2 className="section-heading about-faq-title">{content.valuesTitle}</h2>
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

      <section className="content-section about-case-section">
        <div className="content-shell">
          <div className="about-case-header">
            <div className="gs-scroll-fade-up">
              <SectionLabel>{content.studiesLabel}</SectionLabel>
              <h2 className="section-heading about-case-title">{content.studiesTitle}</h2>
            </div>
            <p className="about-case-kicker mobile-secondary">{content.studiesKicker}</p>
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

      <section className="content-section about-cta-section">
        <div className="content-shell about-cta-shell gs-scroll-fade-up">
          <h2>{content.ctaTitle}</h2>
          <Link className="submit-button submit-button--light" to="/contact">
            {content.ctaButton}
          </Link>
          <p>{content.ctaNote}</p>
        </div>
      </section>
    </div>
  );
}
