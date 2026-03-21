import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { aboutPageContent } from '../data/siteContent';
import { rgMedia } from '../data/rgMedia';
import { getLocaleContent } from '../utils/getLocaleContent';

function ValueIcon() {
  return (
    <svg className="service-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const valueIcons = [ValueIcon, ValueIcon, ValueIcon, ValueIcon];
const caseStudyImages = [rgMedia.porscheExterior, rgMedia.fordCameraDisplay];

export default function AboutPage() {
  const { language } = useSite();
  const content = getLocaleContent(aboutPageContent, language);

  return (
    <div className="route-page route-page--about">
      <section className="content-section about-biography-section" id="about-biography">
        <div className="content-shell about-biography-grid">
          <article className="about-biography-visual gs-scroll-card">
            <img alt="Gaëtan Roblin" className="about-biography-image" src={rgMedia.aboutPortrait} />
            <div className="about-biography-image-mask" />
            <div className="about-biography-image-copy">
              <span className="label">{content.biographyBadge}</span>
            </div>
          </article>

          <div className="about-biography-copy gs-scroll-heading">
            <div className="about-biography-copy-main">
              <div className="hide-overflow">
                <SectionLabel className="gs-scroll-text-up">{content.biographyLabel}</SectionLabel>
              </div>
              <div className="hide-overflow">
                <span className="section-heading about-biography-title gs-scroll-title-up">{content.biographyTitle}</span>
              </div>
              <p className="section-copy about-biography-intro gs-scroll-fade-up">{content.biographyIntro}</p>
              <p className="section-copy mobile-secondary gs-scroll-fade-up">{content.biographyCopy}</p>
            </div>

            <div className="about-biography-facts">
              {content.biographyFacts.map((fact) => (
                <article className="about-biography-fact gs-scroll-card" key={fact.label}>
                  <span className="label">{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section about-trust-section" id="about-values">
        <div className="content-shell">
          <div className="about-faq-heading gs-scroll-heading" style={{ marginBottom: '2rem' }}>
            <div className="hide-overflow">
              <SectionLabel className="gs-scroll-text-up">{content.valuesLabel}</SectionLabel>
            </div>
            <div className="hide-overflow">
              <span className="section-heading about-faq-title gs-scroll-title-up">{content.valuesTitle}</span>
            </div>
          </div>

          <div className="about-trust-grid">
            {content.values.map((card, index) => {
              const Icon = valueIcons[index];

              return (
                <article className="about-trust-card gs-scroll-card" key={card.title}>
                  <div className="about-trust-icon">
                    <Icon />
                  </div>
                  <h2>{card.title}</h2>
                  <p>{card.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section about-case-section" id="about-approach">
        <div className="content-shell">
          <div className="about-case-header">
            <div className="gs-scroll-heading">
              <div className="hide-overflow">
                <SectionLabel className="gs-scroll-text-up">{content.studiesLabel}</SectionLabel>
              </div>
              <div className="hide-overflow">
                <span className="section-heading about-case-title gs-scroll-title-up">{content.studiesTitle}</span>
              </div>
            </div>
            <p className="about-case-kicker mobile-secondary gs-scroll-fade-up">{content.studiesKicker}</p>
          </div>

          <div className="about-case-grid">
            {content.caseStudies.map((study, index) => (
              <article className="about-case-card gs-scroll-card" key={study.title}>
                <div className="about-case-media">
                  <img alt={study.title} src={caseStudyImages[index]} />
                  <span className="about-case-status">{study.status}</span>
                  <div className="about-case-media-copy">
                    <h3>{study.title}</h3>
                    <p>{study.copy}</p>
                  </div>
                </div>

                <div className="about-case-meta">
                  <div>
                    <span className="label">{study.metaPrimaryLabel}</span>
                    <strong>{study.metaPrimaryValue}</strong>
                  </div>
                  <div>
                    <span className="label">{study.metaSecondaryLabel}</span>
                    <strong>{study.metaSecondaryValue}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section about-cta-section" id="about-contact">
        <div className="content-shell about-cta-shell">
          <Link className="btn-pill" to="/contact">
            {content.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
