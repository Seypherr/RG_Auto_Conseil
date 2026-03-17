import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';

export default function ContactPage() {
  const { isEnglish } = useSite();

  const hero = isEnglish
    ? {
        label: 'Contact / quote',
        titleLines: ['Contact', '& quote'],
        copy:
          'Phone number, form, quote request, support booking, service area, hours, map and social presence all gathered in one place.',
      }
    : {
        label: 'Contact / devis',
        titleLines: ['Contact', '& devis'],
        copy:
          'Téléphone, formulaire, demande de devis, réservation d’accompagnement, zone d’intervention, horaires, carte et réseaux sociaux réunis au même endroit.',
      };

  const actions = isEnglish
    ? [
        {
          title: 'Call directly',
          copy: 'Phone contact remains the quickest way to qualify the need and define the right level of support.',
          href: 'tel:0663990720',
          label: 'Call',
        },
        {
          title: 'Request a quote',
          copy: 'The form is ready to collect the useful details required for a clear response.',
          href: '#contact-form',
          label: 'Request a quote',
        },
        {
          title: 'Book support',
          copy: 'A dedicated flow can also start here for a tailored support request.',
          href: '#contact-form',
          label: 'Book now',
        },
      ]
    : [
        {
          title: 'Appeler directement',
          copy: 'Le téléphone reste le moyen le plus rapide pour qualifier le besoin et définir le bon niveau de service.',
          href: 'tel:0663990720',
          label: 'Appeler',
        },
        {
          title: 'Demande de devis',
          copy: 'Le formulaire récupère les détails utiles pour répondre de façon claire et rapide.',
          href: '#contact-form',
          label: 'Demander un devis',
        },
        {
          title: 'Réserver un accompagnement',
          copy: 'Une demande d’accompagnement plus personnalisée peut aussi démarrer ici.',
          href: '#contact-form',
          label: 'Réserver',
        },
      ];

  const shared = isEnglish
    ? {
        phoneLabel: 'Phone',
        phoneDisplay: '06 63 99 07 20',
        emailLabel: 'Business email',
        emailDisplay: 'contact@rgautoconseil.fr',
        areaLabel: 'Service area',
        areaValue: 'PACA region',
        hoursLabel: 'Hours',
        hoursValue: 'By appointment',
        mapLabel: 'Google Maps',
        mapEmbed: 'https://www.google.com/maps?q=Provence-Alpes-Cote%20d%27Azur,France&z=7&output=embed',
        socialsLabel: 'Social media',
        socials: [
          { name: 'Instagram', status: 'Channel to connect' },
          { name: 'Facebook', status: 'Channel to connect' },
        ],
        formTitle: 'Contact, quote or support request.',
        formLabel: 'Contact form',
        placeholders: {
          name: 'Full name',
          email: 'Email address',
          phone: 'Phone',
          type: 'Request type',
          vehicle: 'Vehicle or project',
          details: 'Describe your need, the target vehicle or the expected service...',
          submit: 'Send request',
        },
        types: ['First contact', 'Quote request', 'Support booking'],
      }
    : {
        phoneLabel: 'Téléphone',
        phoneDisplay: '06 63 99 07 20',
        emailLabel: 'Email professionnel',
        emailDisplay: 'contact@rgautoconseil.fr',
        areaLabel: 'Zone d’intervention',
        areaValue: 'Région PACA',
        hoursLabel: 'Horaires',
        hoursValue: 'Sur rendez-vous',
        mapLabel: 'Google Maps',
        mapEmbed: 'https://www.google.com/maps?q=Provence-Alpes-Cote%20d%27Azur,France&z=7&output=embed',
        socialsLabel: 'Réseaux sociaux',
        socials: [
          { name: 'Instagram', status: 'Canal à connecter' },
          { name: 'Facebook', status: 'Canal à connecter' },
        ],
        formTitle: 'Contact, devis ou accompagnement.',
        formLabel: 'Formulaire de contact',
        placeholders: {
          name: 'Nom complet',
          email: 'Adresse email',
          phone: 'Téléphone',
          type: 'Type de demande',
          vehicle: 'Véhicule ou projet',
          details: 'Décrivez votre besoin, le véhicule visé ou la prestation attendue...',
          submit: 'Envoyer la demande',
        },
        types: ['Prise de contact', 'Demande de devis', 'Réservation d’accompagnement'],
      };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="route-page">
      <PageHero {...hero} />

      <section className="content-section">
        <div className="content-shell page-grid page-grid--three">
          {actions.map((item) => (
            <article className="surface-card gs-scroll-card detail-panel" key={item.title}>
              <h3 className="process-title">{item.title}</h3>
              <p className="process-copy">{item.copy}</p>
              <a className="action-link action-link--inline" href={item.href}>
                {item.label}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section process-section">
        <div className="content-shell contact-page-grid">
          <div className="contact-page-info gs-scroll-fade-up">
            <SectionLabel>{isEnglish ? 'Useful information' : 'Informations utiles'}</SectionLabel>
            <h2 className="section-heading" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              {isEnglish ? 'Channels, map and social presence.' : 'Canaux, carte et présence sociale.'}
            </h2>

            <div className="info-stack">
              <article className="surface-card detail-panel gs-scroll-card">
                <h3 className="process-title">{shared.phoneLabel}</h3>
                <p className="process-copy">
                  <a className="contact-detail-link" href="tel:0663990720">
                    {shared.phoneDisplay}
                  </a>
                </p>
              </article>

              <article className="surface-card detail-panel gs-scroll-card">
                <h3 className="process-title">{shared.emailLabel}</h3>
                <p className="process-copy">
                  <a className="contact-detail-link" href="mailto:contact@rgautoconseil.fr">
                    {shared.emailDisplay}
                  </a>
                </p>
              </article>

              <article className="surface-card detail-panel gs-scroll-card">
                <h3 className="process-title">{shared.areaLabel}</h3>
                <p className="process-copy">{shared.areaValue}</p>
              </article>

              <article className="surface-card detail-panel gs-scroll-card">
                <h3 className="process-title">{shared.hoursLabel}</h3>
                <p className="process-copy">{shared.hoursValue}</p>
              </article>
            </div>

            <article className="surface-card detail-panel gs-scroll-card map-card">
              <h3 className="process-title">{shared.mapLabel}</h3>
              <div className="map-frame">
                <iframe className="map-embed" loading="lazy" src={shared.mapEmbed} title={shared.mapLabel} />
              </div>
            </article>

            <article className="surface-card detail-panel gs-scroll-card">
              <h3 className="process-title">{shared.socialsLabel}</h3>
              <div className="social-grid">
                {shared.socials.map((social) => (
                  <div className="social-pill" key={social.name}>
                    <span>{social.name}</span>
                    <small>{social.status}</small>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="contact-page-form gs-scroll-fade-up" id="contact-form">
            <SectionLabel>{shared.formLabel}</SectionLabel>
            <h2 className="section-heading" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              {shared.formTitle}
            </h2>

            <form className="contact-form contact-form--page" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  <span className="sr-only">{shared.placeholders.name}</span>
                  <input className="apple-input" placeholder={shared.placeholders.name} type="text" />
                </label>
                <label>
                  <span className="sr-only">{shared.placeholders.email}</span>
                  <input className="apple-input" placeholder={shared.placeholders.email} type="email" />
                </label>
              </div>

              <div className="form-grid">
                <label>
                  <span className="sr-only">{shared.placeholders.phone}</span>
                  <input className="apple-input" placeholder={shared.placeholders.phone} type="tel" />
                </label>
                <label>
                  <span className="sr-only">{shared.placeholders.type}</span>
                  <select className="apple-input apple-select" defaultValue="">
                    <option disabled value="">
                      {shared.placeholders.type}
                    </option>
                    {shared.types.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span className="sr-only">{shared.placeholders.vehicle}</span>
                  <input className="apple-input" placeholder={shared.placeholders.vehicle} type="text" />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span className="sr-only">{shared.placeholders.details}</span>
                  <textarea className="apple-input" placeholder={shared.placeholders.details} rows="5" />
                </label>
              </div>

              <div className="form-submit">
                <button className="submit-button" type="submit">
                  {shared.placeholders.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
