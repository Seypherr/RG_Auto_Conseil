import { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import FormSubmissionState, { buildSubmissionReference } from '../components/FormSubmissionState';
import { useSite } from '../context/SiteContext';
import { CONTACT_DETAILS } from '../data/siteConfig';
import { contactSectionContent } from '../data/siteContent';
import { getLocaleContent } from '../utils/getLocaleContent';

export default function ContactSection() {
  const { language } = useSite();
  const [submission, setSubmission] = useState(null);
  const content = getLocaleContent(contactSectionContent, language);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmission({
      kind: 'quote',
      reference: buildSubmissionReference('quote'),
    });
  }

  if (submission) {
    return <FormSubmissionState kind={submission.kind} onReset={() => setSubmission(null)} reference={submission.reference} />;
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
                <a className="contact-detail-link" href={CONTACT_DETAILS.emailHref}>
                  {CONTACT_DETAILS.email}
                </a>
              </div>
              <div>
                <div className="contact-detail-label">{content.phoneLabel}</div>
                <a className="contact-detail-link" href={CONTACT_DETAILS.phoneHref}>
                  {CONTACT_DETAILS.phoneDisplay}
                </a>
              </div>
              <div>
                <div className="contact-detail-label">{content.areaLabel}</div>
                <span className="contact-detail-text">{CONTACT_DETAILS.serviceArea[language === 'en' ? 'en' : 'fr']}</span>
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
