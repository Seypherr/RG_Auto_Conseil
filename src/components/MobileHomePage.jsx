import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../Photo_rg_auto_conseil/Photo_Hero.webp';
import {
  ArrowRightIcon,
  BriefcaseIcon,
  DocumentIcon,
  SearchIcon,
  StarIcon,
  TruckIcon,
} from './IconSet';
import FormSubmissionState, { buildSubmissionReference } from './FormSubmissionState';
import { useSite } from '../context/SiteContext';
import { CONTACT_DETAILS } from '../data/siteConfig';
import { aboutPageContent, contactSectionContent, galleryPageContent, servicesPageContent } from '../data/siteContent';
import {
  aboutSectionContent,
  processSectionContent,
  reviewsSectionContent,
  servicesSectionContent,
} from '../data/homeContent';
import { rgMedia } from '../data/rgMedia';
import { getLocaleContent } from '../utils/getLocaleContent';

const serviceIcons = [SearchIcon, DocumentIcon, BriefcaseIcon, TruckIcon];
const galleryImages = [rgMedia.porscheExterior, rgMedia.fordCameraDisplay, rgMedia.porscheConsole, rgMedia.vanExterior];

function MobileRating({ rating }) {
  return (
    <div className="mobile-review-stars" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}

export default function MobileHomePage() {
  const { language } = useSite();
  const [submission, setSubmission] = useState(null);
  const value = getLocaleContent(aboutSectionContent, language);
  const servicesPage = getLocaleContent(servicesPageContent, language);
  const services = getLocaleContent(servicesSectionContent, language);
  const process = getLocaleContent(processSectionContent, language);
  const reviews = getLocaleContent(reviewsSectionContent, language);
  const aboutPage = getLocaleContent(aboutPageContent, language);
  const gallery = getLocaleContent(galleryPageContent, language);
  const contact = getLocaleContent(contactSectionContent, language);
  const heroTitleLines =
    language === 'fr'
      ? ['Un conseil', 'clair, de la', 'première', 'question', 'à l’action.']
      : ['Clear advice,', 'from the', 'first question', 'to action.'];

  const infoCards = [
    { label: contact.emailLabel, value: CONTACT_DETAILS.email, href: CONTACT_DETAILS.emailHref },
    { label: contact.phoneLabel, value: CONTACT_DETAILS.phoneDisplay, href: CONTACT_DETAILS.phoneHref },
    { label: contact.areaLabel, value: CONTACT_DETAILS.serviceArea[language === 'en' ? 'en' : 'fr'] },
  ];

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
    <div className="mobile-home-page">
      <section className="mobile-home-hero" id="top">
        <div className="mobile-home-copy">
          <span className="mobile-home-label">{servicesPage.heroLabel}</span>
          <h1 className="mobile-home-title">
            {heroTitleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="mobile-home-description">{servicesPage.heroIntro}</p>

          <a className="mobile-home-cta" href="#services">
            <span>{servicesPage.heroPrimaryCta}</span>
            <ArrowRightIcon />
          </a>
        </div>

        <article className="mobile-home-visual">
          <img alt={servicesPage.heroCardTitle} className="mobile-home-visual-image" src={rgMedia.mercedesServices || heroImage} />
          <div aria-hidden="true" className="mobile-home-visual-mask" />
          <div className="mobile-home-visual-copy">
            <span className="mobile-home-visual-label">{servicesPage.heroCardLabel}</span>
            <h2>{servicesPage.heroCardTitle}</h2>
          </div>
        </article>
      </section>

      <section className="mobile-home-band" id="mission">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{value.label}</span>
        </div>
        <h2 className="mobile-home-section-title">{value.title}</h2>
        <div className="mobile-home-copy-stack">
          {value.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mobile-home-band mobile-home-band--surface" id="services">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{services.label}</span>
        </div>
        <h2 className="mobile-home-section-title">{services.title}</h2>

        <div className="mobile-service-scroller">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article className="mobile-service-card" key={service.title}>
                <div className="mobile-service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            );
          })}
        </div>

        <div className="mobile-dots" aria-hidden="true">
          {services.items.map((item, index) => (
            <span className={`mobile-dot${index === 0 ? ' is-active' : ''}`} key={item.title} />
          ))}
        </div>
      </section>

      <section className="mobile-home-band" id="process">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{process.label}</span>
        </div>
        <h2 className="mobile-home-section-title">{process.title}</h2>
        <p className="mobile-home-band-intro">{process.copy}</p>

        <div className="mobile-process-stack">
          {process.steps.map((step) => (
            <article className="mobile-process-card" key={step.step}>
              <span className="mobile-process-index">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-home-band mobile-home-band--about" id="about-preview">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{aboutPage.biographyLabel}</span>
        </div>
        <h2 className="mobile-home-section-title">{aboutPage.biographyTitle}</h2>

        <article className="mobile-about-portrait">
          <img alt={aboutPage.biographyBadge} src={rgMedia.aboutPortrait} />
        </article>

        <div className="mobile-home-copy-stack">
          <p>{aboutPage.biographyIntro}</p>
          <p>{aboutPage.biographyCopy}</p>
        </div>

        <div className="mobile-chip-grid">
          {aboutPage.biographyFacts.map((fact) => (
            <span className="mobile-home-chip" key={fact.label}>
              {fact.value}
            </span>
          ))}
        </div>
      </section>

      <section className="mobile-home-band mobile-home-band--surface" id="reviews">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{reviews.label}</span>
        </div>
        <h2 className="mobile-home-section-title">
          {reviews.heading[0]}
          <br />
          {reviews.heading[1]}
        </h2>

        <div className="mobile-review-stack">
          {reviews.cards.map((card) => (
            <article className="mobile-review-card" key={card.name}>
              <MobileRating rating={card.rating} />
              <strong>{card.title}</strong>
              <p>{card.copy}</p>
              <div className="mobile-review-meta">
                <span>{card.name}</span>
                <small>{card.detail}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-home-band" id="gallery-preview">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{gallery.label}</span>
        </div>
        <h2 className="mobile-home-section-title">{gallery.missionsTitle}</h2>

        <div className="mobile-gallery-stack">
          {gallery.missions.slice(0, 2).map((mission, index) => (
            <article className="mobile-gallery-card" key={mission.id}>
              <img alt={mission.vehicle} src={galleryImages[index]} />
              <div className="mobile-gallery-card-copy">
                <span>{mission.label}</span>
                <h3>{mission.vehicle}</h3>
                <p>{mission.mission}</p>
              </div>
            </article>
          ))}
        </div>

        <Link className="mobile-inline-button" to="/gallery">
          <span>{reviews.action}</span>
          <ArrowRightIcon />
        </Link>
      </section>

      <section className="mobile-home-band mobile-home-band--contact" id="contact">
        <div className="mobile-home-band-head">
          <span className="mobile-home-band-line" />
          <span className="mobile-home-band-label">{contact.label}</span>
        </div>
        <h2 className="mobile-home-section-title">{contact.title}</h2>
        <p className="mobile-home-band-intro">{contact.copy}</p>

        <form className="mobile-home-form" onSubmit={handleSubmit}>
          <label>
            <span>{contact.placeholders.name}</span>
            <input placeholder={contact.placeholders.name} type="text" />
          </label>
          <label>
            <span>{contact.placeholders.email}</span>
            <input placeholder={contact.placeholders.email} type="email" />
          </label>
          <label>
            <span>{contact.placeholders.phone}</span>
            <input placeholder={contact.placeholders.phone} type="tel" />
          </label>
          <label>
            <span>{contact.placeholders.project}</span>
            <textarea placeholder={contact.placeholders.details} rows="4" />
          </label>
          <button className="mobile-form-submit" type="submit">
            <span>{contact.placeholders.submit}</span>
            <ArrowRightIcon />
          </button>
        </form>

        <div className="mobile-contact-links">
          {infoCards.map((card) => (
            <article className="mobile-contact-card" key={card.label}>
              <span>{card.label}</span>
              {card.href ? (
                <a href={card.href}>{card.value}</a>
              ) : (
                <strong>{card.value}</strong>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
