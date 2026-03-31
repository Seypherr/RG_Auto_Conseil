import { useRef, useState } from 'react';
import '../styles/contact-page.css';
import { FacebookIcon, InstagramIcon } from '../components/IconSet';
import Seo from '../components/Seo';
import SectionLabel from '../components/SectionLabel';
import FormSubmissionState, { buildSubmissionReference } from '../components/FormSubmissionState';
import { useSite } from '../context/SiteContext';
import { CONTACT_DETAILS, MAP_LINKS, SOCIAL_LINKS } from '../data/siteConfig';
import { contactPageContent } from '../data/contactContent';
import { getContactSeo } from '../data/contactSeo';
import useIsMobileView from '../hooks/useIsMobileView';
import { scrollToAnchor } from '../utils/anchorNavigation';
import { getLocaleContent } from '../utils/getLocaleContent';
import { FORMSPREE_ENDPOINT, submitToFormspree } from '../utils/formspree';

const socialIconMap = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

export default function ContactPage() {
  const { language } = useSite();
  const isMobile = useIsMobileView();
  const [submission, setSubmission] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const content = getLocaleContent(contactPageContent, language);
  const formRef = useRef(null);

  const infoCards = [
    { label: content.infoLabels.phone, value: CONTACT_DETAILS.phoneDisplay, href: CONTACT_DETAILS.phoneHref },
    { label: content.infoLabels.email, value: CONTACT_DETAILS.email, href: CONTACT_DETAILS.emailHref },
    { label: content.infoLabels.serviceArea, value: CONTACT_DETAILS.serviceArea[language === 'en' ? 'en' : 'fr'] },
    { label: content.infoLabels.hours, value: CONTACT_DETAILS.hours[language === 'en' ? 'en' : 'fr'] },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const kind = formData.get('requestType') || 'contact';
    const reference = buildSubmissionReference(kind);

    formData.set('_subject', 'RG Auto Conseil - Demande depuis la page contact');
    formData.set('reference', reference);
    formData.set('sourcePage', 'contact-page');
    formData.set('language', language);

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await submitToFormspree(formData);
      setSubmission({
        kind,
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
      scrollToAnchor('contact-form', 'smooth');
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

  const infoGrid = (
    <div className={`contact-direct-info-grid${isMobile ? ' contact-direct-info-grid--minimal' : ''}`}>
      {infoCards.map((card) => (
        <article className={`contact-direct-info-card gs-scroll-card${isMobile ? ' contact-direct-info-card--minimal' : ''}`} key={card.label}>
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
  );

  const mapCard = (
    <article className={`contact-direct-map-card gs-scroll-card${isMobile ? ' contact-direct-map-card--mobile' : ''}`}>
      <div className="contact-direct-map-top">
        <div className="contact-direct-map-copy">
          <span className="label">{content.mapLabel}</span>
          <strong>{content.mapValue}</strong>
        </div>
        <a className="contact-direct-map-link" href={MAP_LINKS.direct} rel="noopener noreferrer" target="_blank">
          {content.mapCta}
        </a>
      </div>
      {!isMobile ? <iframe className="contact-direct-map" height="480" loading="lazy" src={MAP_LINKS.embed} title="Google Maps" width="640" /> : null}
    </article>
  );

  const formWrap = (
    <div className={`contact-direct-form-wrap gs-scroll-fade-up${isMobile ? ' contact-direct-form-wrap--mobile' : ''}`} id="contact-form">
      <SectionLabel>{content.formLabel}</SectionLabel>
      <h2 className="section-heading contact-form-title" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        {content.formTitle}
      </h2>

      <form
        action={FORMSPREE_ENDPOINT}
        className="contact-form contact-form--page contact-form--direct"
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
            <input className="apple-input" name="vehicle" placeholder={content.placeholders.vehicle} type="text" />
          </label>
        </div>

        <div className="form-row">
          <label>
            <span className="sr-only">{content.placeholders.details}</span>
            <textarea className="apple-input" name="details" placeholder={content.placeholders.details} required rows="4" />
          </label>
        </div>

        <div className="contact-form-footer">
          <div className="contact-form-socials">
            <span className="label">{content.socialsLabel}</span>
            <div className="social-icon-row">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIconMap[social.name];
                const isDisabled = !social.href;

                if (isDisabled) {
                  return (
                    <span className="social-icon-link is-disabled" key={social.name} title={social.name}>
                      <Icon />
                    </span>
                  );
                }

                return (
                  <a
                    aria-label={social.name}
                    className="social-icon-link"
                    href={social.href}
                    key={social.name}
                    rel="noopener noreferrer"
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
            <button className="submit-button" disabled={isSubmitting} type="submit">
              {isSubmitting ? content.formMessages.sending : content.placeholders.submit}
            </button>
          </div>
        </div>

        {submitError ? (
          <p aria-live="polite" className="form-error" role="status">
            {submitError}
          </p>
        ) : null}
      </form>
    </div>
  );

  return (
    <>
      <div className="route-page route-page--contact">
        <Seo {...getContactSeo(language)} lang={language} />
        <section className="content-section contact-direct-section" id="contact-direct">
          <div className="content-shell contact-direct-shell">
            {isMobile ? (
              <div className="contact-mobile-intro">
                <span className="mobile-page-eyebrow">{content.label}</span>
                <h1 className="mobile-page-title">
                  <span>{content.title}</span>
                </h1>
                <p className="mobile-page-copy">{content.formTitle}</p>
              </div>
            ) : (
              <div className="contact-direct-head gs-scroll-heading">
                <div className="hide-overflow">
                  <SectionLabel className="gs-scroll-text-up">{content.label}</SectionLabel>
                </div>
                <div className="hide-overflow" style={{ display: 'block', marginTop: '1rem' }}>
                  <h1 className="sr-only">{content.title}</h1>
                  <span className="editorial-title contact-direct-title gs-scroll-title-up">{content.title}</span>
                </div>
              </div>
            )}

            <div className="contact-direct-grid">
              {isMobile ? (
                <>
                  {formWrap}
                  <div className="contact-direct-left contact-direct-left--mobile">
                    {mapCard}
                    {infoGrid}
                  </div>
                </>
              ) : (
                <>
                  <div className="contact-direct-left">
                    {infoGrid}
                    {mapCard}
                  </div>
                  {formWrap}
                </>
              )}
            </div>
          </div>
        </section>
      </div>

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
