import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MobilePageHero from '../components/MobilePageHero';
import SectionLabel from '../components/SectionLabel';
import Seo from '../components/Seo';
import { useSite } from '../context/SiteContext';
import { galleryPageContent } from '../data/galleryPageContent';
import { getGallerySeo } from '../data/gallerySeo';
import { rgMedia } from '../data/rgMedia';
import useIsMobileView from '../hooks/useIsMobileView';
import '../styles/gallery-page.css';
import { getLocaleContent } from '../utils/getLocaleContent';

const missionImages = [
  { beforeImage: rgMedia.porscheConsoleLegacy, afterImage: rgMedia.porscheConsole },
  { beforeImage: rgMedia.fordDisplayBase, afterImage: rgMedia.fordCameraDisplay },
  { beforeImage: rgMedia.porscheInteriorWide, afterImage: rgMedia.porscheExterior },
  { beforeImage: rgMedia.dashcamExterior, afterImage: rgMedia.dashcamInterior },
];

export default function GalleryPage() {
  const { language } = useSite();
  const isMobile = useIsMobileView();
  const [activeMissionIndex, setActiveMissionIndex] = useState(0);
  const mobileMissionScrollerRef = useRef<HTMLDivElement | null>(null);
  const content = getLocaleContent(galleryPageContent, language);

  const galleryHeroImageAlt =
    language === 'fr'
      ? "RG Auto Conseil, intérieur de véhicule illustrant un projet automobile premium et un conseil avant achat"
      : 'RG Auto Conseil, vehicle interior highlighting a premium automotive project';

  const beforeImageAlts =
    language === 'fr'
      ? [
          "RG Auto Conseil, système d'origine avant montage CarPlay sur véhicule",
          "RG Auto Conseil, écran d'origine avant installation de caméra de recul",
          "RG Auto Conseil, véhicule repéré avant conseil automobile et avant achat",
          "RG Auto Conseil, véhicule vu de l'extérieur avant mise en valeur de l'installation dashcam invisible",
        ]
      : [
          'RG Auto Conseil, original system before CarPlay retrofit',
          'RG Auto Conseil, original screen before rear camera installation',
          'RG Auto Conseil, spotted vehicle before pre-purchase advice',
          'RG Auto Conseil, vehicle exterior before the invisible dashcam installation is revealed',
        ];

  const afterImageAlts =
    language === 'fr'
      ? [
          'RG Auto Conseil, interface CarPlay installée après intervention',
          'RG Auto Conseil, affichage caméra de recul après installation',
          "RG Auto Conseil, décision d'achat sécurisée après conseil automobile",
          'RG Auto Conseil, dashcam invisible présentée en vue intérieure après installation',
        ]
      : [
          'RG Auto Conseil, CarPlay interface installed after the upgrade',
          'RG Auto Conseil, rear camera display after installation',
          'RG Auto Conseil, secured purchase decision after automotive advice',
          'RG Auto Conseil, invisible dashcam shown from the interior after installation',
        ];

  const mobileMissionSummaries =
    language === 'fr'
      ? [
          'Une installation CarPlay plus moderne, plus fluide et plus agréable au quotidien.',
          'Une caméra de recul qui apporte plus de confort et de sérénité à chaque manoeuvre.',
          "Un accompagnement avant achat pour vérifier les bons points avant de s'engager.",
          'Une dashcam invisible intégrée proprement pour renforcer la sécurité et la tranquillité à bord.',
        ]
      : [
          'A more modern CarPlay setup with a smoother and clearer daily experience.',
          'A rear camera installation that brings more confidence to every manoeuvre.',
          'Guidance before purchase to review the right points before committing.',
          'A neatly integrated invisible dashcam installation that improves safety and day-to-day peace of mind.',
        ];

  function handleMissionScroll(event: Event) {
    const container = event.currentTarget as HTMLDivElement;
    const cards = Array.from(container.children) as HTMLElement[];

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

  function handleMissionDotClick(index: number) {
    const container = mobileMissionScrollerRef.current;
    const targetCard = container?.children?.[index] as HTMLElement | undefined;

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
              imageAlt={galleryHeroImageAlt}
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
              {content.title.map((line: string, index: number) => (
                <div className="hide-overflow" key={line} style={{ display: 'block', marginTop: index === 0 ? '1rem' : 0 }}>
                  <span className="editorial-title gallery-hero-title gs-scroll-title-up">{line}</span>
                </div>
              ))}
              <p className="editorial-copy editorial-copy--wide gs-scroll-fade-up">{content.intro}</p>
            </div>

            <article className="gallery-mission-highlight gs-scroll-card">
              <img
                alt={galleryHeroImageAlt}
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
                {content.missions.map((mission: (typeof content.missions)[number], index: number) => {
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
                            alt={beforeImageAlts[index] ?? `RG Auto Conseil - ${mission.vehicle} - ${mission.beforeLabel}`}
                            decoding="async"
                            height="900"
                            loading={index === 0 ? 'eager' : 'lazy'}
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
                            alt={afterImageAlts[index] ?? `RG Auto Conseil - ${mission.vehicle} - ${mission.afterLabel}`}
                            decoding="async"
                            height="900"
                            loading={index === 0 ? 'eager' : 'lazy'}
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

              <div
                aria-label={language === 'fr' ? 'Navigation des réalisations' : 'Projects navigation'}
                className="mobile-dots mobile-gallery-dots"
                role="group"
              >
                {content.missions.map((mission: (typeof content.missions)[number], index: number) => (
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
              {content.missions.map((mission: (typeof content.missions)[number], index: number) => (
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
                        alt={beforeImageAlts[index] ?? `RG Auto Conseil - ${mission.vehicle} - ${mission.beforeLabel}`}
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
                        alt={afterImageAlts[index] ?? `RG Auto Conseil - ${mission.vehicle} - ${mission.afterLabel}`}
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
