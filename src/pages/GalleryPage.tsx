import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/gallery-page.css';
import MobilePageHero from '../components/MobilePageHero';
import Seo from '../components/Seo';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { galleryPageContent } from '../data/galleryPageContent';
import { getGallerySeo } from '../data/gallerySeo';
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
  const [activeMissionIndex, setActiveMissionIndex] = useState(0);
  const mobileMissionScrollerRef = useRef(null);
  const content = getLocaleContent(galleryPageContent, language);

  const mobileMissionSummaries =
    language === 'fr'
      ? [
          'Un achat plus lisible et plus rassurant.',
          'Un usage modernisé, simple et cohérent.',
          "Une annonce mieux comprise avant d’aller plus loin.",
          'Une sélection plus juste selon le besoin réel.',
        ]
      : [
          'A clearer and more reassuring purchase path.',
          'A modernised, simpler and more coherent daily use.',
          'A listing better understood before moving forward.',
          'A more relevant selection based on the real need.',
        ];

  function handleMissionScroll(event) {
    const container = event.currentTarget;
    const cards = Array.from(container.children);

    if (!cards.length) {
      return;
    }

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveMissionIndex(closestIndex);
  }

  function handleMissionDotClick(index) {
    const container = mobileMissionScrollerRef.current;
    const targetCard = container?.children?.[index];

    if (!container || !targetCard) {
      return;
    }

    targetCard.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

    setActiveMissionIndex(index);
  }

  return (
    <div className="route-page route-page--gallery">
      <Seo {...getGallerySeo(language, rgMedia.porscheExterior)} lang={language} />

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
              <h1 className="sr-only">{content.title.join(' ')}</h1>
              {content.title.map((line, index) => (
                <div className="hide-overflow" key={line} style={{ display: 'block', marginTop: index === 0 ? '1rem' : 0 }}>
                  <span className="editorial-title gallery-hero-title gs-scroll-title-up">{line}</span>
                </div>
              ))}
              <p className="editorial-copy editorial-copy--wide gs-scroll-fade-up">{content.intro}</p>
            </div>

            <article className="gallery-mission-highlight gs-scroll-card">
              <img
                alt={content.heroCardTitle}
                className="gallery-mission-highlight-image"
                decoding="async"
                fetchpriority="high"
                height="1100"
                src={rgMedia.porscheInteriorWide}
                width="1600"
              />
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

          {isMobile ? (
            <div className="mobile-gallery-missions">
              <div className="mobile-gallery-mission-scroller" onScroll={handleMissionScroll} ref={mobileMissionScrollerRef}>
                {content.missions.map((mission, index) => {
                  const imageSet = missionImages[index];

                  return (
                    <article className="mobile-gallery-mission-card" id={`project-${mission.id}`} key={mission.id}>
                      <div className="mobile-gallery-mission-head">
                        <div className="mobile-gallery-mission-headline">
                          <span className="mobile-gallery-mission-index">{mission.id}</span>
                          <span className="mobile-gallery-mission-tag">{mission.label}</span>
                        </div>
                      </div>

                      <div className="mobile-gallery-mission-body">
                        <h3>{mission.mission}</h3>
                        <p>{mobileMissionSummaries[index]}</p>
                      </div>

                      <div className="mobile-gallery-mission-compare">
                        <div className="mobile-gallery-mission-pane">
                          <img
                            alt={`${mission.vehicle} - ${mission.beforeLabel}`}
                            decoding="async"
                            height="900"
                            loading="eager"
                            src={imageSet.beforeImage}
                            width="1200"
                          />
                          <div className="mobile-gallery-mission-pane-copy">
                            <strong>{language === 'fr' ? 'Avant' : 'Before'}</strong>
                            <span>{mission.beforeLabel}</span>
                          </div>
                        </div>
                        <div className="mobile-gallery-mission-pane">
                          <img
                            alt={`${mission.vehicle} - ${mission.afterLabel}`}
                            decoding="async"
                            height="900"
                            loading="eager"
                            src={imageSet.afterImage}
                            width="1200"
                          />
                          <div className="mobile-gallery-mission-pane-copy">
                            <strong>{language === 'fr' ? 'Après' : 'After'}</strong>
                            <span>{mission.afterLabel}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mobile-dots mobile-gallery-dots" aria-label={language === 'fr' ? 'Navigation des réalisations' : 'Projects navigation'}>
                {content.missions.map((mission, index) => (
                  <button
                    aria-label={`${language === 'fr' ? 'Voir le projet' : 'View project'} ${mission.id}`}
                    aria-pressed={index === activeMissionIndex}
                    className={`mobile-dot${index === activeMissionIndex ? ' is-active' : ''}`}
                    key={mission.id}
                    onClick={() => handleMissionDotClick(index)}
                    type="button"
                  />
                ))}
              </div>
            </div>
          ) : (
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
                      <img
                        alt={`${mission.vehicle} - ${mission.beforeLabel}`}
                        decoding="async"
                        height="900"
                        loading="lazy"
                        src={missionImages[index].beforeImage}
                        width="1200"
                      />
                      <span>{mission.beforeLabel}</span>
                    </div>
                    <div className="gallery-mission-pane">
                      <img
                        alt={`${mission.vehicle} - ${mission.afterLabel}`}
                        decoding="async"
                        height="900"
                        loading="lazy"
                        src={missionImages[index].afterImage}
                        width="1200"
                      />
                      <span>{mission.afterLabel}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

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
