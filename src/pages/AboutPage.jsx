import { Link } from 'react-router-dom';
import MobilePageHero from '../components/MobilePageHero';
import Seo from '../components/Seo';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { aboutPageContent } from '../data/aboutPageContent';
import { getAboutSeo } from '../data/aboutSeo';
import { rgMedia } from '../data/rgMedia';
import useIsMobileView from '../hooks/useIsMobileView';
import { getLocaleContent } from '../utils/getLocaleContent';

function ValueIcon() {
  return (
    <svg className="service-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const valueIcons = [ValueIcon, ValueIcon, ValueIcon];
const caseStudyImages = [rgMedia.porscheExterior, rgMedia.fordCameraDisplay];

export default function AboutPage() {
  const { language } = useSite();
  const isMobile = useIsMobileView();
  const content = getLocaleContent(aboutPageContent, language);

  return (
    <div className="route-page route-page--about">
      <Seo {...getAboutSeo(language, rgMedia.aboutPortrait)} lang={language} />

      <section className="content-section about-biography-section" id="about-biography">
        {isMobile ? (
          <div className="content-shell">
            <MobilePageHero
              cardLabel="Portrait"
              cardTitle={content.biographyBadge}
              chips={content.biographyFacts.map((fact) => fact.value)}
              copy={`${content.biographyIntro} ${content.biographyCopy}`}
              imageAlt={content.biographyBadge}
              imageSrc={rgMedia.aboutPortrait}
              label={content.biographyLabel}
              primaryCta={content.ctaButton}
              primaryHref="/contact"
              title={content.biographyTitle}
            />
          </div>
        ) : (
          <div className="content-shell about-hero-shell">
            <div className="about-hero-copy gs-scroll-heading">
              <div className="about-hero-philosophy">
                <SectionLabel className="gs-scroll-text-up">{content.biographyLabel}</SectionLabel>
              </div>

              <div className="about-hero-main">
                <h1 className="sr-only">{content.biographyTitle}</h1>
                <div className="hide-overflow">
                  <span className="section-heading about-biography-title gs-scroll-title-up">{content.biographyTitle}</span>
                </div>

                <div className="about-hero-texts">
                  <p className="section-copy about-biography-intro gs-scroll-fade-up">{content.biographyIntro}</p>
                  <p className="section-copy mobile-secondary gs-scroll-fade-up">{content.biographyCopy}</p>
                </div>
              </div>

              <div className="about-hero-facts">
                {content.biographyFacts.map((fact) => (
                  <article className="about-biography-fact gs-scroll-card" key={fact.label}>
                    <span className="label">{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </article>
                ))}
              </div>
            </div>

            <article className="about-biography-visual gs-scroll-card">
              <img
                alt="Gaëtan Roblin"
                className="about-biography-image"
                decoding="async"
                fetchpriority="high"
                height="1600"
                src={rgMedia.aboutPortrait}
                width="1280"
              />
              <div className="about-biography-image-mask" />
              <div className="about-biography-frame" />
              <div className="about-biography-image-copy">
                <div className="about-biography-image-line" />
                <div>
                  <strong>{content.biographyBadge}</strong>
                  <small>{language === 'en' ? 'Founder' : 'Fondateur'}</small>
                </div>
              </div>
            </article>
          </div>
        )}
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
            {content.caseStudies.map((study, index) => {
              const cardContent = (
                <>
                  <div className="about-case-media">
                    <img alt={study.title} decoding="async" height="900" loading="lazy" src={caseStudyImages[index]} width="1200" />
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
                    <div className="about-case-meta-action">
                      <span className="label">{study.metaSecondaryLabel}</span>
                      {isMobile ? (
                        <span className="btn-pill about-case-link about-case-link--static">{study.linkLabel}</span>
                      ) : (
                        <Link className="btn-pill about-case-link" to={study.href}>
                          {study.linkLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                </>
              );

              if (isMobile) {
                return (
                  <Link className="about-case-card about-case-card--mobile gs-scroll-card" key={study.title} to={study.href}>
                    {cardContent}
                  </Link>
                );
              }

              return (
                <article className="about-case-card gs-scroll-card" key={study.title}>
                  {cardContent}
                </article>
              );
            })}
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
