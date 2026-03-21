import { useState } from 'react';
import { FacebookIcon, InstagramIcon } from '../components/IconSet';
import SectionLabel from '../components/SectionLabel';
import FormSubmissionState, { buildSubmissionReference } from '../components/FormSubmissionState';
import { useSite } from '../context/SiteContext';

export default function ContactPage() {
  const { isEnglish } = useSite();
  const [submission, setSubmission] = useState(null);

  const content = isEnglish
    ? {
        label: 'Contact',
        title: "Let's talk about your car",
        infoCards: [
          { label: 'Phone', value: '06 63 99 07 20', href: 'tel:0663990720' },
          { label: 'Email', value: 'contact@rgautoconseil.fr', href: 'mailto:contact@rgautoconseil.fr' },
          { label: 'Service area', value: 'PACA region' },
          { label: 'Hours', value: 'By appointment' },
        ],
        socialsLabel: 'Social media',
        socials: [
          { name: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
          { name: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
        ],
        formLabel: 'Contact form',
        formTitle: 'A simple conversion, designed to stay clear.',
        mapLabel: 'Coverage area',
        mapValue: 'PACA · By appointment',
        mapCta: 'Open in Maps',
        placeholders: {
          name: 'Name',
          email: 'Email',
          phone: 'Phone',
          type: 'Request type',
          vehicle: 'Project',
          details: 'Describe your project...',
          submit: 'Send my request',
        },
        types: [
          { value: 'contact', label: 'First contact' },
          { value: 'quote', label: 'Quote request' },
          { value: 'support', label: 'Support request' },
        ],
      }
    : {
        label: 'Contact',
        title: 'Parlons de votre voiture',
        infoCards: [
          { label: 'Téléphone', value: '06 63 99 07 20', href: 'tel:0663990720' },
          { label: 'Email', value: 'contact@rgautoconseil.fr', href: 'mailto:contact@rgautoconseil.fr' },
          { label: 'Zone d’intervention', value: 'Région PACA' },
          { label: 'Horaires', value: 'Sur rendez-vous' },
        ],
        socialsLabel: 'Réseaux sociaux',
        socials: [
          { name: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
          { name: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
        ],
        formLabel: 'Formulaire',
        formTitle: 'Une conversion simple, pensée pour rester claire.',
        mapLabel: 'Zone couverte',
        mapValue: 'PACA · Sur rendez-vous',
        mapCta: 'Ouvrir dans Maps',
        placeholders: {
          name: 'Nom',
          email: 'Email',
          phone: 'Téléphone',
          type: 'Type de demande',
          vehicle: 'Projet',
          details: 'Décrivez votre projet...',
          submit: 'Envoyer ma demande',
        },
        types: [
          { value: 'contact', label: 'Prise de contact' },
          { value: 'quote', label: 'Demande de devis' },
          { value: 'support', label: 'Besoin de suivi' },
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
    return <FormSubmissionState kind={submission.kind} onReset={() => setSubmission(null)} reference={submission.reference} />;
  }

  return (
    <div className="route-page route-page--contact">
      <section className="content-section contact-direct-section" id="contact-direct">
        <div className="content-shell contact-direct-shell">
          <div className="contact-direct-head gs-scroll-heading">
            <div className="hide-overflow">
              <SectionLabel className="gs-scroll-text-up">{content.label}</SectionLabel>
            </div>
            <div className="hide-overflow" style={{ display: 'block', marginTop: '1rem' }}>
              <span className="editorial-title contact-direct-title gs-scroll-title-up">{content.title}</span>
            </div>
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
                <div className="contact-direct-map-top">
                  <div className="contact-direct-map-copy">
                    <span className="label">{content.mapLabel}</span>
                    <strong>{content.mapValue}</strong>
                  </div>
                  <a
                    className="contact-direct-map-link"
                    href="https://maps.google.com/?q=Provence-Alpes-Cote%20d%27Azur,France"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {content.mapCta}
                  </a>
                </div>
                <iframe
                  className="contact-direct-map"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Provence-Alpes-Cote%20d%27Azur,France&z=7&output=embed"
                  title="Google Maps"
                />
              </article>
            </div>

            <div className="contact-direct-form-wrap gs-scroll-fade-up" id="contact-form">
              <SectionLabel>{content.formLabel}</SectionLabel>
              <h2 className="section-heading contact-form-title" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
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
                    <textarea className="apple-input" placeholder={content.placeholders.details} rows="4" />
                  </label>
                </div>

                <div className="contact-form-footer">
                  <div className="contact-form-socials">
                    <span className="label">{content.socialsLabel}</span>
                    <div className="social-icon-row">
                      {content.socials.map((social) => {
                        const Icon = social.icon;

                        return (
                          <a
                            aria-label={social.name}
                            className="social-icon-link"
                            href={social.href}
                            key={social.name}
                            rel="noreferrer"
                            target="_blank"
                            title={social.name}
                          >
                            <Icon />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-submit">
                    <button className="submit-button" type="submit">
                      {content.placeholders.submit}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
