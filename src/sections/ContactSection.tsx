import { useRef, useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import FormSubmissionState, { buildSubmissionReference } from '../components/FormSubmissionState';
import { useSite } from '../context/SiteContext';
import { CONTACT_DETAILS } from '../data/siteConfig';
import { contactSectionContent } from '../data/contactContent';
import { scrollToAnchor } from '../utils/anchorNavigation';
import { getLocaleContent } from '../utils/getLocaleContent';
import { FORMSPREE_ENDPOINT, submitToFormspree } from '../utils/formspree';

export default function ContactSection() {
  const { language } = useSite();
  const [submission, setSubmission] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const content = getLocaleContent(contactSectionContent, language);
  const formRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const reference = buildSubmissionReference('quote');
    const formData = new FormData(form);

    formData.set('_subject', "RG Auto Conseil - Demande depuis l'accueil");
    formData.set('reference', reference);
    formData.set('requestType', 'quote');
    formData.set('sourcePage', 'home-contact-section');
    formData.set('language', language);

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await submitToFormspree(formData);
      setSubmission({
        kind: 'quote',
        reference,
      });
      form.reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : content.formMessages.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function returnToContactForm() {
    setSubmission(null);

    window.requestAnimationFrame(() => {
      scrollToAnchor('contact', 'smooth');
      window.setTimeout(() => {
        const firstField = formRef.current?.querySelector('input, textarea, select');
        firstField?.focus();
      }, 420);
    });
  }

  function handleDismissSubmission() {
    returnToContactForm();
  }

  function handleResetSubmission() {
    returnToContactForm();
  }

  return (
    <>
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
              <form
                action={FORMSPREE_ENDPOINT}
                className="contact-form contact-form--featured"
                method="POST"
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <div className="form-grid">
                  <label>
                    <span className="sr-only">{content.placeholders.name}</span>
                    <input autoComplete="name" className="apple-input" name="name" placeholder={content.placeholders.name} required type="text" />
                  </label>
                  <label>
                    <span className="sr-only">{content.placeholders.email}</span>
                    <input
                      autoComplete="email"
                      className="apple-input"
                      inputMode="email"
                      name="email"
                      placeholder={content.placeholders.email}
                      required
                      type="email"
                    />
                  </label>
                </div>

                <div className="form-grid">
                  <label>
                    <span className="sr-only">{content.placeholders.phone}</span>
                    <input autoComplete="tel" className="apple-input" inputMode="tel" name="phone" placeholder={content.placeholders.phone} type="tel" />
                  </label>
                  <label>
                    <span className="sr-only">{content.placeholders.project}</span>
                    <input className="apple-input" name="project" placeholder={content.placeholders.project} type="text" />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span className="sr-only">{content.placeholders.details}</span>
                    <textarea className="apple-input" name="details" placeholder={content.placeholders.details} required rows="4" />
                  </label>
                </div>

                <div className="form-submit">
                  <button className="submit-button" disabled={isSubmitting} type="submit">
                    {isSubmitting ? content.formMessages.sending : content.placeholders.submit}
                  </button>
                </div>

                {submitError ? (
                  <p aria-live="polite" className="form-error" role="status">
                    {submitError}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>

      {submission ? (
        <FormSubmissionState
          kind={submission.kind}
          onDismiss={handleDismissSubmission}
          onReset={handleResetSubmission}
          reference={submission.reference}
        />
      ) : null}
    </>
  );
}
