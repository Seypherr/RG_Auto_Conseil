import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { rgMedia } from '../data/rgMedia';

function ShieldIcon() {
  return (
    <svg className="service-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="service-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="service-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

const trustIcons = [ShieldIcon, ClockIcon, LockIcon];

export default function AboutPage() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        biographyLabel: 'Biography',
        biographyTitle: 'Gaetan Roblin',
        biographyIntro:
          'Independent automotive expert focused on pre-purchase advice, inspection and decision clarity for private and professional clients.',
        biographyCopy:
          'RG Auto Conseil is built around a simple promise: understand the need first, analyse every relevant detail, then deliver guidance that is reliable, transparent and useful.',
        biographyFacts: [
          { label: 'Positioning', value: 'Independent advisor' },
          { label: 'Area', value: 'PACA region' },
          { label: 'Clients', value: 'Private and professional' },
        ],
        biographyBadge: 'Expert automotive guidance',
        biographyNote: 'Portrait block ready to host Gaetan photo',
        headerLabel: 'Expertise & ethics',
        headerTitle: ['Trust &', 'transparency.'],
        headerCopy:
          'Buying or validating a vehicle should leave no grey areas. Discover a more rigorous, more readable and more reassuring way to move forward.',
        headerSideLabel: 'Approach index',
        headerSideValue: '04',
        headerMetricLabel: 'Confidence marker',
        headerMetricValue: 'Independent review',
        trustCards: [
          {
            title: 'Clear origin reading',
            copy: 'Each project starts with a realistic reading of the vehicle history, the context of sale and the elements that deserve verification first.',
          },
          {
            title: 'Expert protocols',
            copy: 'The method combines listing analysis, visual checks, technical reading and focused questioning so the decision is based on facts, not assumptions.',
          },
          {
            title: 'Secure decisions',
            copy: 'The goal is to reduce uncertainty, surface the real risk level and help the client make a calm decision with a clear understanding of the tradeoffs.',
          },
        ],
        studiesLabel: 'Field archive',
        studiesTitle: 'Concrete cases, visible reading.',
        studiesKicker: 'Real support and equipment integration',
        caseStudies: [
          {
            status: 'Final presentation',
            title: 'Porsche follow-up',
            copy: 'A premium exterior presentation used to illustrate sourcing quality, condition reading and the level of finish expected at delivery.',
            image: rgMedia.porscheExterior,
            metaPrimaryLabel: 'Focus',
            metaPrimaryValue: 'Condition clarity',
            metaSecondaryLabel: 'Outcome',
            metaSecondaryValue: 'Premium presentation',
          },
          {
            status: 'Before / after integration',
            title: 'Camera and display upgrade',
            copy: 'A real before-and-after support example showing how an equipment optimisation becomes immediately readable for the client.',
            image: rgMedia.fordCameraDisplay,
            metaPrimaryLabel: 'Focus',
            metaPrimaryValue: 'Useful optimisation',
            metaSecondaryLabel: 'Outcome',
            metaSecondaryValue: 'Safer daily use',
          },
        ],
        faqLabel: 'Frequently asked questions',
        faqTitle: 'Clarifying the process.',
        faqItems: [
          {
            question: 'How do you assess a vehicle before purchase?',
            answer:
              'The review starts with the project context, then moves into listing analysis, history checks, condition reading and the points that require deeper verification before any decision.',
          },
          {
            question: 'Is the advice tied to the sale price?',
            answer:
              'No. The goal is to protect the client decision with independent advice, not to increase a commission based on the final transaction.',
          },
          {
            question: 'Can you also help after the purchase decision?',
            answer:
              'Yes. Depending on the project, the support can extend to negotiation, equipment fitting, optimisation or the coordination needed to bring the vehicle to its intended use.',
          },
          {
            question: 'Who is this service for?',
            answer:
              'RG Auto Conseil supports both private and professional clients looking for a more secure, more readable and more premium automotive decision process.',
          },
        ],
        ctaTitle: 'Ready to start with a clearer automotive decision?',
        ctaButton: 'Request contact',
        ctaNote: 'Average reply time: within 24h',
      }
    : {
        biographyLabel: 'Biographie',
        biographyTitle: 'Gaetan Roblin',
        biographyIntro:
          'Expert automobile independant, oriente conseil avant achat, inspection et clarte de decision pour les particuliers comme pour les professionnels.',
        biographyCopy:
          'RG Auto Conseil repose sur une promesse simple : comprendre le besoin d abord, analyser chaque detail utile, puis apporter un conseil fiable, transparent et vraiment exploitable.',
        biographyFacts: [
          { label: 'Positionnement', value: 'Conseiller independant' },
          { label: 'Zone', value: 'Region PACA' },
          { label: 'Clients', value: 'Particuliers et professionnels' },
        ],
        biographyBadge: 'Conseil automobile expert',
        biographyNote: 'Bloc portrait pret a accueillir la photo de Gaetan',
        headerLabel: 'Expertise & ethique',
        headerTitle: ['Confiance &', 'transparence.'],
        headerCopy:
          'Acheter ou valider un vehicule ne doit laisser aucune zone floue. Decouvrez une approche plus rigoureuse, plus lisible et plus rassurante pour avancer.',
        headerSideLabel: 'Indice approche',
        headerSideValue: '04',
        headerMetricLabel: 'Repere confiance',
        headerMetricValue: 'Conseil independant',
        trustCards: [
          {
            title: 'Lecture claire de l origine',
            copy: 'Chaque projet commence par une lecture realiste de l historique, du contexte de vente et des points a verifier en priorite.',
          },
          {
            title: 'Protocoles experts',
            copy: 'La methode combine analyse d annonce, controle visuel, lecture technique et questions ciblees pour fonder la decision sur des faits.',
          },
          {
            title: 'Decisions securisees',
            copy: 'L objectif est de reduire l incertitude, de faire ressortir le vrai niveau de risque et d aider le client a decider avec calme.',
          },
        ],
        studiesLabel: 'Archives terrain',
        studiesTitle: 'Des cas concrets, une lecture visible.',
        studiesKicker: 'Accompagnement reel et integrations d equipements',
        caseStudies: [
          {
            status: 'Presentation finale',
            title: 'Suivi Porsche',
            copy: 'Une presentation exterieure premium qui illustre la qualite de sourcing, la lecture d etat et le niveau de finition attendu a la livraison.',
            image: rgMedia.porscheExterior,
            metaPrimaryLabel: 'Focus',
            metaPrimaryValue: 'Lecture d etat',
            metaSecondaryLabel: 'Resultat',
            metaSecondaryValue: 'Presentation premium',
          },
          {
            status: 'Avant / apres integration',
            title: 'Upgrade camera et ecran',
            copy: 'Un exemple reel d accompagnement avant/apres qui montre comment une optimisation d equipement devient immediatement lisible pour le client.',
            image: rgMedia.fordCameraDisplay,
            metaPrimaryLabel: 'Focus',
            metaPrimaryValue: 'Optimisation utile',
            metaSecondaryLabel: 'Resultat',
            metaSecondaryValue: 'Usage quotidien plus sur',
          },
        ],
        faqLabel: 'Questions frequentes',
        faqTitle: 'Clarifier le processus.',
        faqItems: [
          {
            question: 'Comment evaluez-vous un vehicule avant achat ?',
            answer:
              'L analyse commence par le contexte du projet, puis passe par la lecture de l annonce, de l historique, de l etat general et des points qui meritent une verification plus poussee avant toute decision.',
          },
          {
            question: 'Le conseil depend-il du prix final de vente ?',
            answer:
              'Non. Le but est de proteger la decision du client avec un avis independant, pas d augmenter une remuneration liee au montant de la transaction.',
          },
          {
            question: 'Pouvez-vous aussi intervenir apres la decision d achat ?',
            answer:
              'Oui. Selon le projet, l accompagnement peut se prolonger sur la negociation, le montage d equipements, l optimisation ou la coordination utile a la bonne mise en service du vehicule.',
          },
          {
            question: 'A qui s adresse ce service ?',
            answer:
              'RG Auto Conseil accompagne les particuliers comme les professionnels qui veulent un processus de decision automobile plus sur, plus lisible et plus premium.',
          },
        ],
        ctaTitle: 'Pret a avancer avec une decision automobile plus claire ?',
        ctaButton: 'Demander un contact',
        ctaNote: 'Delai moyen de reponse : sous 24h',
      };

  return (
    <div className="route-page route-page--about">
      <section className="content-section about-editorial-header">
        <div className="content-shell about-editorial-grid">
          <div className="about-editorial-side about-editorial-side--left gs-fade">
            <span className="label">{content.headerSideLabel}</span>
            <strong>{content.headerSideValue}</strong>
          </div>

          <div className="about-editorial-center gs-scroll-heading">
            <div className="hide-overflow">
              <SectionLabel className="gs-scroll-text-up">{content.headerLabel}</SectionLabel>
            </div>
            {content.headerTitle.map((line, index) => (
              <div className="hide-overflow" key={line} style={{ display: 'block', marginTop: index === 0 ? '1.25rem' : 0 }}>
                <span className="editorial-title gs-scroll-title-up">{line}</span>
              </div>
            ))}
            <p className="editorial-copy editorial-copy--wide gs-scroll-fade-up">{content.headerCopy}</p>
          </div>

          <div className="about-editorial-side about-editorial-side--right gs-fade">
            <span className="label">{content.headerMetricLabel}</span>
            <strong>{content.headerMetricValue}</strong>
          </div>
        </div>
      </section>

      <section className="content-section about-biography-section">
        <div className="content-shell about-biography-grid">
          <article className="about-biography-visual gs-scroll-card">
            <img alt="Gaetan Roblin - visuel biographie" className="about-biography-image" src={rgMedia.brandSignature} />
            <div className="about-biography-image-mask" />
            <div className="about-biography-image-copy">
              <span className="label">{content.biographyBadge}</span>
              <strong>{content.biographyTitle}</strong>
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
        <div className="content-shell about-trust-grid">
          {content.trustCards.map((card, index) => {
            const Icon = trustIcons[index];

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

      <section className="content-section about-faq-section">
        <div className="content-shell about-faq-shell">
          <div className="about-faq-heading gs-scroll-fade-up">
            <SectionLabel>{content.faqLabel}</SectionLabel>
            <h2 className="section-heading about-faq-title">{content.faqTitle}</h2>
          </div>

          <div className="about-faq-list">
            {content.faqItems.map((item) => (
              <details className="about-faq-item gs-scroll-card" key={item.question}>
                <summary>
                  <span>{item.question}</span>
                  <span className="about-faq-plus">+</span>
                </summary>
                <div className="about-faq-answer">{item.answer}</div>
              </details>
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
