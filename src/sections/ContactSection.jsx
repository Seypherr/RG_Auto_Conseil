import { useSite } from '../context/SiteContext';
import SectionLabel from '../components/SectionLabel';

export default function ContactSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Contact / quote',
        title: 'Talk about your project.',
        copy:
          'For pre-purchase advice, inspection, sourcing, listing analysis or accessory fitting, the goal is to answer with a clear, serious and reassuring framework.',
        emailLabel: 'Business email',
        phoneLabel: 'Phone',
        areaLabel: 'Service area',
        areaValue: 'PACA region',
        placeholders: {
          name: 'Full name',
          email: 'Email address',
          phone: 'Phone',
          project: 'Vehicle or requested service',
          details: 'Describe your need, budget or target vehicle...',
          submit: 'Request a quote',
        },
      }
    : {
        label: 'Contact / devis',
        title: 'Parler de votre projet.',
        copy:
          'Pour un conseil avant achat, une inspection, une recherche, une analyse d’annonce ou un montage d’accessoires, l’objectif est de répondre avec un cadre clair, sérieux et rassurant.',
        emailLabel: 'Email professionnel',
        phoneLabel: 'Téléphone',
        areaLabel: "Zone d’intervention",
        areaValue: 'Région PACA',
        placeholders: {
          name: 'Nom complet',
          email: 'Adresse email',
          phone: 'Téléphone',
          project: 'Véhicule ou prestation recherchée',
          details: 'Décrivez votre besoin, votre budget ou le véhicule visé...',
          submit: 'Demander un devis',
        },
      };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="content-section" id="contact">
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ top: 0, left: '33%', width: '31rem', height: '31rem', background: 'rgba(255,255,255,0.05)' }}
      />
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ right: '25%', bottom: 0, width: '18rem', height: '18rem', background: 'rgba(255,255,255,0.08)' }}
      />

      <div className="content-shell contact-shell">
        <div className="contact-layout">
          <div className="contact-copy-column gs-scroll-fade-up">
            <SectionLabel>{content.label}</SectionLabel>
            <h2 className="section-heading" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              {content.title}
            </h2>
            <p className="section-copy" style={{ marginBottom: '3rem' }}>
              {content.copy}
            </p>

            <div className="contact-details">
              <div>
                <div className="contact-detail-label">{content.emailLabel}</div>
                <a className="contact-detail-link" href="mailto:contact@rgautoconseil.fr">
                  contact@rgautoconseil.fr
                </a>
              </div>
              <div>
                <div className="contact-detail-label">{content.phoneLabel}</div>
                <a className="contact-detail-link" href="tel:0663990720">
                  06 63 99 07 20
                </a>
              </div>
              <div>
                <div className="contact-detail-label">{content.areaLabel}</div>
                <span className="contact-detail-text">{content.areaValue}</span>
              </div>
            </div>
          </div>

          <div className="contact-form-column gs-scroll-fade-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  <span className="sr-only">{content.placeholders.name}</span>
                  <input className="apple-input" placeholder={content.placeholders.name} type="text" />
                </label>
                <label>
                  <span className="sr-only">{content.placeholders.email}</span>
                  <input className="apple-input" placeholder={content.placeholders.email} type="email" />
                </label>
              </div>

              <div className="form-grid">
                <label>
                  <span className="sr-only">{content.placeholders.phone}</span>
                  <input className="apple-input" placeholder={content.placeholders.phone} type="tel" />
                </label>
                <label>
                  <span className="sr-only">{content.placeholders.project}</span>
                  <input className="apple-input" placeholder={content.placeholders.project} type="text" />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span className="sr-only">{content.placeholders.details}</span>
                  <textarea className="apple-input" placeholder={content.placeholders.details} rows="4" />
                </label>
              </div>

              <div className="form-submit">
                <button className="submit-button" type="submit">
                  {content.placeholders.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
