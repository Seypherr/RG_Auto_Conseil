import { useState } from 'react';
import { FacebookIcon, InstagramIcon } from '../components/IconSet';
import SectionLabel from '../components/SectionLabel';
import FormSubmissionState, { buildSubmissionReference } from '../components/FormSubmissionState';
import { useSite } from '../context/SiteContext';
import { CONTACT_DETAILS, MAP_LINKS, SOCIAL_LINKS } from '../data/siteConfig';
import { contactPageContent } from '../data/siteContent';
import useIsMobileView from '../hooks/useIsMobileView';
import { getLocaleContent } from '../utils/getLocaleContent';

const socialIconMap = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

export default function ContactPage() {
  const { language } = useSite();
  const isMobile = useIsMobileView();
  const [submission, setSubmission] = useState(null);
  const content = getLocaleContent(contactPageContent, language);

  const infoCards = [
    { label: content.infoLabels.phone, value: CONTACT_DETAILS.phoneDisplay, href: CONTACT_DETAILS.phoneHref },
    { label: content.infoLabels.email, value: CONTACT_DETAILS.email, href: CONTACT_DETAILS.emailHref },
    { label: content.infoLabels.serviceArea, value: CONTACT_DETAILS.serviceArea[language === 'en' ? 'en' : 'fr'] },
    { label: content.infoLabels.hours, value: CONTACT_DETAILS.hours[language === 'en' ? 'en' : 'fr'] },
  ];

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
                <span className="editorial-title contact-direct-title gs-scroll-title-up">{content.title}</span>
              </div>
            </div>
          )}

          <div className="contact-direct-grid">
            <div className="contact-direct-left">
              <div className="contact-direct-info-grid">
                {infoCards.map((card) => (
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
                  <a className="contact-direct-map-link" href={MAP_LINKS.direct} rel="noreferrer" target="_blank">
                    {content.mapCta}
                  </a>
                </div>
                <iframe className="contact-direct-map" loading="lazy" src={MAP_LINKS.embed} title="Google Maps" />
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
                      {SOCIAL_LINKS.map((social) => {
                        const Icon = socialIconMap[social.name];
                        const isDisabled = !social.href;

                        if (isDisabled) {
                          return (
                            <span aria-disabled="true" className="social-icon-link is-disabled" key={social.name} title={social.name}>
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
