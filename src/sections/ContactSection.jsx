import { useState } from 'react';
import { useSite } from '../context/SiteContext';
import SectionLabel from '../components/SectionLabel';
import FormSubmissionState, { buildSubmissionReference } from '../components/FormSubmissionState';

export default function ContactSection() {
  const { isEnglish } = useSite();
  const [submission, setSubmission] = useState(null);

  const content = isEnglish
    ? {
        label: 'Contact',
        title: 'An automotive project? Let us talk about it simply.',
        copy:
          'Describe your need and we will get back to you quickly with a clear, reassuring and tailored approach.',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        areaLabel: 'Service area',
        areaValue: 'PACA region',
        placeholders: {
          name: 'Name',
          email: 'Email',
          phone: 'Phone',
          project: 'Project',
          details: 'Tell us about your need...',
          submit: 'Send my request',
        },
      }
    : {
        label: 'Contact',
        title: 'Un projet automobile ? Discutons-en simplement.',
        copy:
          'Décrivez votre besoin, nous vous recontacterons rapidement avec une approche claire et adaptée.',
        emailLabel: 'Email',
        phoneLabel: 'Téléphone',
        areaLabel: 'Zone d’intervention',
        areaValue: 'Région PACA',
        placeholders: {
          name: 'Nom',
          email: 'Email',
          phone: 'Téléphone',
          project: 'Projet',
          details: 'Décrivez votre besoin...',
          submit: 'Envoyer ma demande',
        },
      };

  function handleSubmit(event) {
    event.preventDefault();
    setSubmission({
      kind: 'quote',
      reference: buildSubmissionReference('quote'),
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
            <SectionLabel className="home-accent-label">{content.label}</SectionLabel>
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

          <div className="contact-form-column contact-form-column--featured gs-scroll-contact-form">
            <form className="contact-form contact-form--featured" onSubmit={handleSubmit}>
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
