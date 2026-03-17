import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';

export default function AboutPage() {
  const { isEnglish } = useSite();

  const hero = isEnglish
    ? {
        label: 'About / expertise',
        titleLines: ['About', '& expertise'],
        copy:
          'A page built to introduce Gaëtan Roblin, clarify the positioning as an automotive expert and independent advisor, and explain the method behind the service.',
      }
    : {
        label: 'À propos / expertise',
        titleLines: ['À propos', '& expertise'],
        copy:
          'Une page pensée pour présenter Gaëtan Roblin, clarifier le positionnement comme expert automobile et conseiller indépendant, et expliquer la manière de travailler.',
      };

  const intro = isEnglish
    ? {
        label: 'Profile',
        title: 'Gaëtan Roblin',
        paragraphs: [
          'Gaëtan leads RG Auto Conseil with an approach focused on pre-purchase advice, vehicle inspection, listing analysis and sourcing support.',
          'The objective is simple: bring clarity, reduce uncertainty and guide the client with a serious, direct and premium level of service.',
        ],
        badge: 'Independent advisor',
        note: 'Automotive expertise, sourcing, inspection, accessories',
      }
    : {
        label: 'Présentation',
        title: 'Gaëtan Roblin',
        paragraphs: [
          'Gaëtan porte RG Auto Conseil avec une approche centrée sur le conseil avant achat, l’inspection de véhicule, l’analyse d’annonce et l’accompagnement à la recherche.',
          'L’objectif est simple : remettre de la clarté, réduire l’incertitude et guider le client avec un niveau de sérieux, de proximité et de service premium.',
        ],
        badge: 'Conseiller indépendant',
        note: 'Expertise auto, recherche, inspection, accessoires',
      };

  const methods = isEnglish
    ? [
        {
          title: 'Automotive expert / independent advisor',
          copy: 'A support posture that combines technical reading, independent judgement and the ability to explain things clearly.',
        },
        {
          title: 'Way of working',
          copy: 'Priority is given to filtering, pedagogy, vehicle inspection and direct contact to move efficiently.',
        },
        {
          title: 'Positioning',
          copy: 'Serious, trustworthy and premium without unnecessary overstatement or visual excess.',
        },
      ]
    : [
        {
          title: 'Expert automobile / conseiller indépendant',
          copy: 'Une posture d’accompagnement qui combine lecture technique, indépendance de jugement et capacité à expliquer simplement.',
        },
        {
          title: 'Manière de travailler',
          copy: 'La priorité est donnée au filtrage, à la pédagogie, à l’inspection des véhicules et au contact direct pour avancer efficacement.',
        },
        {
          title: 'Positionnement',
          copy: 'Un ton sérieux, rassurant et premium, sans sur-promesse ni mise en scène excessive.',
        },
      ];

  const values = isEnglish
    ? [
        { title: 'Seriousness', copy: 'A clear, documented and consistent approach at every stage of the project.' },
        { title: 'Trust', copy: 'The service is designed to reassure before any commitment is made.' },
        { title: 'Premium service', copy: 'A direct, polished and high-attention experience tailored to the client.' },
      ]
    : [
        { title: 'Sérieux', copy: 'Une approche claire, documentée et cohérente à chaque étape du projet.' },
        { title: 'Confiance', copy: 'Le service est pensé pour rassurer avant tout engagement.' },
        { title: 'Service premium', copy: 'Une expérience directe, soignée et attentive, adaptée au niveau d’exigence du client.' },
      ];

  return (
    <div className="route-page">
      <PageHero {...hero} />

      <section className="content-section">
        <div className="content-shell profile-layout">
          <div className="profile-visual gs-scroll-card">
            <div className="profile-placeholder">
              <span className="label">{intro.badge}</span>
              <h2 className="profile-title">{intro.title}</h2>
              <p className="profile-note">{intro.note}</p>
            </div>
          </div>

          <div className="profile-copy gs-scroll-fade-up">
            <SectionLabel>{intro.label}</SectionLabel>
            <h2 className="section-heading" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
              {intro.title}
            </h2>
            {intro.paragraphs.map((paragraph) => (
              <p className="section-copy profile-paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section process-section">
        <div className="content-shell page-grid page-grid--three">
          {methods.map((item, index) => (
            <article className="surface-card gs-scroll-card detail-panel" key={item.title}>
              <div className="process-step">{`0${index + 1}`}</div>
              <h3 className="process-title">{item.title}</h3>
              <p className="process-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="content-shell">
          <div className="services-intro gs-scroll-fade-up">
            <SectionLabel>{isEnglish ? 'Values' : 'Valeurs'}</SectionLabel>
            <h2 className="section-heading" style={{ marginTop: '1rem' }}>
              {isEnglish ? 'The foundation of the client relationship.' : 'Le socle de la relation client.'}
            </h2>
          </div>

          <div className="page-grid page-grid--three">
            {values.map((item) => (
              <article className="surface-card gs-scroll-card detail-panel" key={item.title}>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
