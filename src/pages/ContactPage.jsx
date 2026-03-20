import { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import FormSubmissionState, { buildSubmissionReference } from '../components/FormSubmissionState';
import { useSite } from '../context/SiteContext';

export default function ContactPage() {
  const { isEnglish } = useSite();
  const [submission, setSubmission] = useState(null);

  const content = isEnglish
    ? {
        label: 'Contact / quote',
        title: 'Direct contact, colour map, clean form.',
        copy:
          'The page is now reduced to the useful contact block only: quick access information on one side, the coloured map in context, and the lower contact form kept as the main action.',
        infoCards: [
          { label: 'Phone', value: '06 63 99 07 20', href: 'tel:0663990720' },
          { label: 'Email', value: 'contact@rgautoconseil.fr', href: 'mailto:contact@rgautoconseil.fr' },
          { label: 'Service area', value: 'PACA region' },
          { label: 'Hours', value: 'By appointment' },
        ],
        socialsLabel: 'Social media',
        socials: [
          { name: 'Instagram', status: 'Channel to connect' },
          { name: 'Facebook', status: 'Channel to connect' },
        ],
        formLabel: 'Contact form',
        formTitle: 'Request a quote or book support.',
        placeholders: {
          name: 'Full name',
          email: 'Email address',
          phone: 'Phone',
          type: 'Request type',
          vehicle: 'Vehicle or project',
          details: 'Describe your need, the target vehicle or the expected service...',
          submit: 'Send request',
        },
        types: [
          { value: 'contact', label: 'First contact' },
          { value: 'quote', label: 'Quote request' },
          { value: 'support', label: 'Support booking' },
        ],
      }
    : {
        label: 'Contact / devis',
        title: 'Contact direct, map en couleur, formulaire propre.',
        copy:
          'La page est désormais réduite au bloc de contact utile : les informations d’accès d’un côté, la carte en couleur dans le bon contexte, et la partie basse du formulaire conservée comme action principale.',
        infoCards: [
          { label: 'Téléphone', value: '06 63 99 07 20', href: 'tel:0663990720' },
          { label: 'Email', value: 'contact@rgautoconseil.fr', href: 'mailto:contact@rgautoconseil.fr' },
          { label: 'Zone d’intervention', value: 'Région PACA' },
          { label: 'Horaires', value: 'Sur rendez-vous' },
        ],
        socialsLabel: 'Réseaux sociaux',
        socials: [
          { name: 'Instagram', status: 'Canal à connecter' },
          { name: 'Facebook', status: 'Canal à connecter' },
        ],
        formLabel: 'Formulaire de contact',
        formTitle: 'Demander un devis ou réserver un accompagnement.',
        placeholders: {
          name: 'Nom complet',
          email: 'Adresse email',
          phone: 'Téléphone',
          type: 'Type de demande',
          vehicle: 'Véhicule ou projet',
          details: 'Décrivez votre besoin, le véhicule visé ou la prestation attendue...',
          submit: 'Envoyer la demande',
        },
        types: [
          { value: 'contact', label: 'Prise de contact' },
          { value: 'quote', label: 'Demande de devis' },
          { value: 'support', label: 'Réservation d’accompagnement' },
        ],
      };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const kind = formData.get('requestType') || 'contact';

    setSubmission({
      kind,
      reference: buildSubmissionReference(kind),
    });
  }

  if (submission) {
    return (
      <FormSubmissionState
        kind={submission.kind}
        onReset={() => setSubmission(null)}
        reference={submission.reference}
      />
    );
  }

  return (
    <div className="route-page route-page--contact">
      <section className="content-section contact-direct-section">
        <div className="content-shell contact-direct-shell">
          <div className="contact-direct-head gs-scroll-heading">
            <div className="hide-overflow">
              <SectionLabel className="gs-scroll-text-up">{content.label}</SectionLabel>
            </div>
            <div className="hide-overflow" style={{ display: 'block', marginTop: '1rem' }}>
              <span className="editorial-title gs-scroll-title-up">{content.title}</span>
            </div>
            <p className="editorial-copy editorial-copy--wide gs-scroll-fade-up">{content.copy}</p>
          </div>

          <div className="contact-direct-grid">
            <div className="contact-direct-left">
              <div className="contact-direct-info-grid">
                {content.infoCards.map((card) => (
                  <article className="contact-direct-info-card gs-scroll-card" key={card.label}>
                    <span className="label">{card.label}</span>
                    {card.href ? (
                      <a className="contact-detail-link" href={card.href}>
                        {card.value}
                      </a>
                    ) : (
                      <strong>{card.value}</strong>
                    )}
                  </article>
                ))}
              </div>

              <article className="contact-direct-map-card gs-scroll-card">
                <iframe
                  className="contact-direct-map"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Provence-Alpes-Cote%20d%27Azur,France&z=7&output=embed"
                  title="Google Maps"
                />
              </article>

              <article className="contact-direct-socials gs-scroll-card mobile-secondary">
                <span className="label">{content.socialsLabel}</span>
                <div className="social-grid">
                  {content.socials.map((social) => (
                    <div className="social-pill social-pill--contact" key={social.name}>
                      <span>{social.name}</span>
                      <small>{social.status}</small>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="contact-direct-form-wrap gs-scroll-fade-up">
              <SectionLabel>{content.formLabel}</SectionLabel>
              <h2 className="section-heading" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                {content.formTitle}
              </h2>

              <form className="contact-form contact-form--page contact-form--direct" onSubmit={handleSubmit}>
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
                    <span className="sr-only">{content.placeholders.type}</span>
                    <select className="apple-input apple-select" defaultValue="contact" name="requestType">
                      {content.types.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span className="sr-only">{content.placeholders.vehicle}</span>
                    <input className="apple-input" placeholder={content.placeholders.vehicle} type="text" />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span className="sr-only">{content.placeholders.details}</span>
                    <textarea className="apple-input" placeholder={content.placeholders.details} rows="6" />
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
    </div>
  );
}
