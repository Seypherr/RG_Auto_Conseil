import { Link } from 'react-router-dom';
import MobilePageHero from '../components/MobilePageHero';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { galleryPageContent } from '../data/siteContent';
import { rgMedia } from '../data/rgMedia';
import useIsMobileView from '../hooks/useIsMobileView';
import { getLocaleContent } from '../utils/getLocaleContent';

const missionImages = [
  { beforeImage: rgMedia.porscheConsoleLegacy, afterImage: rgMedia.porscheConsole },
  { beforeImage: rgMedia.fordDisplayBase, afterImage: rgMedia.fordCameraDisplay },
  { beforeImage: rgMedia.porscheInteriorWide, afterImage: rgMedia.porscheExterior },
  { beforeImage: rgMedia.vanRear, afterImage: rgMedia.vanExterior },
];

export default function GalleryPage() {
  const { language } = useSite();
  const isMobile = useIsMobileView();
  const content = getLocaleContent(galleryPageContent, language);

  return (
    <div className="route-page route-page--gallery">
      <section className="content-section gallery-mission-hero" id="gallery-overview">
        <div aria-hidden="true" className="gallery-page-glow gallery-page-glow--one" />
        <div aria-hidden="true" className="gallery-page-glow gallery-page-glow--two" />

        {isMobile ? (
          <div className="content-shell">
            <MobilePageHero
              cardLabel={content.heroCardLabel}
              cardTitle={content.heroCardTitle}
              copy={content.intro}
              imageAlt={content.heroCardTitle}
              imageSrc={rgMedia.porscheInteriorWide}
              label={content.label}
              primaryCta={content.contactCta}
              primaryHref="/contact"
              titleLines={content.title}
            />
          </div>
        ) : (
          <div className="content-shell gallery-mission-hero-shell">
            <div className="gallery-mission-copy gs-scroll-heading">
              <div className="hide-overflow">
                <SectionLabel className="gs-scroll-text-up">{content.label}</SectionLabel>
              </div>
              {content.title.map((line, index) => (
                <div className="hide-overflow" key={line} style={{ display: 'block', marginTop: index === 0 ? '1rem' : 0 }}>
                  <span className="editorial-title gallery-hero-title gs-scroll-title-up">{line}</span>
                </div>
              ))}
              <p className="editorial-copy editorial-copy--wide gs-scroll-fade-up">{content.intro}</p>
            </div>

            <article className="gallery-mission-highlight gs-scroll-card">
              <img alt={content.heroCardTitle} className="gallery-mission-highlight-image" src={rgMedia.porscheInteriorWide} />
              <div className="gallery-mission-highlight-mask" />
              <div className="gallery-mission-highlight-copy">
                <span className="label">{content.heroCardLabel}</span>
                <h2 className="gallery-mission-highlight-title">{content.heroCardTitle}</h2>
                <p>{content.heroCardCopy}</p>
              </div>
            </article>
          </div>
        )}
      </section>

      <section className="content-section gallery-missions-section" id="gallery-projects">
        <div className="content-shell">
          <div className="gallery-missions-header gs-scroll-fade-up">
            <SectionLabel>{content.missionsLabel}</SectionLabel>
            <h2 className="section-heading gallery-missions-title gallery-missions-title--balanced">{content.missionsTitle}</h2>
          </div>

          <div className="gallery-missions-grid">
            {content.missions.map((mission, index) => (
              <article className={`gallery-mission-card gs-scroll-card gallery-mission-card--${(index % 3) + 1}`} id={`project-${mission.id}`} key={mission.id}>
                <div className="gallery-mission-card-head">
                  <div>
                    <span className="gallery-mission-index">{mission.id}</span>
                    <span className="gallery-mission-tag">{mission.label}</span>
                  </div>
                  <strong>{mission.vehicle}</strong>
                </div>

                <div className="gallery-mission-body">
                  <h3 className="gallery-mission-body-title">{mission.mission}</h3>
                  <p>{mission.outcome}</p>
                </div>

                <div className="gallery-mission-before-after">
                  <div className="gallery-mission-pane">
                    <img alt={mission.beforeLabel} src={missionImages[index].beforeImage} />
                    <span>{mission.beforeLabel}</span>
                  </div>
                  <div className="gallery-mission-pane">
                    <img alt={mission.afterLabel} src={missionImages[index].afterImage} />
                    <span>{mission.afterLabel}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="gallery-missions-action gs-scroll-fade-up">
            <Link className="btn-pill" to="/contact">
              {content.contactCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
