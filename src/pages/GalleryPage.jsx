import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { rgMedia } from '../data/rgMedia';

export default function GalleryPage() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Gallery',
        title: ['Projects carried out', 'with precision', 'and restraint.'],
        intro: 'Discover projects completed with high standards and precision.',
        heroCardLabel: 'Before / after',
        heroCardTitle: 'Visible proof, discreet execution.',
        heroCardCopy: 'Each transformation is designed to enhance the vehicle without altering its identity.',
        missionsLabel: 'Projects',
        missionsTitle: 'A visual reading of the work carried out.',
        contactCta: 'Contact us',
        missions: [
          {
            id: '01',
            label: 'Vehicle',
            vehicle: 'Porsche 911',
            mission: 'Clean modernisation and interface update.',
            outcome: 'Client goal: improve comfort and readability without changing the original spirit.',
            beforeLabel: 'Before intervention',
            afterLabel: 'After intervention',
            beforeImage: rgMedia.porscheConsoleLegacy,
            afterImage: rgMedia.porscheConsole,
          },
          {
            id: '02',
            label: 'Vehicle',
            vehicle: 'Ford Transit',
            mission: 'Screen and reversing camera integration.',
            outcome: 'Client goal: make daily use easier, clearer and more reassuring.',
            beforeLabel: 'Before integration',
            afterLabel: 'After integration',
            beforeImage: rgMedia.fordDisplayBase,
            afterImage: rgMedia.fordCameraDisplay,
          },
          {
            id: '03',
            label: 'Vehicle',
            vehicle: 'Porsche 911',
            mission: 'Final presentation and controlled validation.',
            outcome: 'Client goal: confirm condition and reveal the full value of the vehicle.',
            beforeLabel: 'Before validation',
            afterLabel: 'After validation',
            beforeImage: rgMedia.porscheConsoleMap,
            afterImage: rgMedia.porscheExterior,
          },
          {
            id: '04',
            label: 'Vehicle',
            vehicle: 'Service van',
            mission: 'Operational setup and field presentation.',
            outcome: 'Client goal: reflect a cleaner and more reassuring professional image.',
            beforeLabel: 'Before setup',
            afterLabel: 'After setup',
            beforeImage: rgMedia.vanRear,
            afterImage: rgMedia.vanExterior,
          },
        ],
      }
    : {
        label: 'Galerie',
        title: ['Des projets réalisés', 'avec exigence', 'et précision.'],
        intro: 'Découvrez des projets réalisés avec exigence et précision.',
        heroCardLabel: 'Avant / après',
        heroCardTitle: 'Une preuve visuelle, une exécution maîtrisée.',
        heroCardCopy: 'Chaque transformation est pensée pour sublimer le véhicule sans en altérer l’identité.',
        missionsLabel: 'Projets',
        missionsTitle: 'Une lecture visuelle du travail réalisé.',
        contactCta: 'Nous contacter',
        missions: [
          {
            id: '01',
            label: 'Véhicule',
            vehicle: 'Porsche 911',
            mission: 'Modernisation propre et mise à jour interface.',
            outcome: 'Objectif client : gagner en confort et en lisibilité sans casser l’esprit d’origine.',
            beforeLabel: 'Avant intervention',
            afterLabel: 'Après intervention',
            beforeImage: rgMedia.porscheConsoleLegacy,
            afterImage: rgMedia.porscheConsole,
          },
          {
            id: '02',
            label: 'Véhicule',
            vehicle: 'Ford Transit',
            mission: 'Intégration écran et caméra de recul.',
            outcome: 'Objectif client : rendre l’usage quotidien plus simple, plus clair et plus rassurant.',
            beforeLabel: 'Avant intégration',
            afterLabel: 'Après intégration',
            beforeImage: rgMedia.fordDisplayBase,
            afterImage: rgMedia.fordCameraDisplay,
          },
          {
            id: '03',
            label: 'Véhicule',
            vehicle: 'Porsche 911',
            mission: 'Présentation finale et validation maîtrisée.',
            outcome: 'Objectif client : confirmer l’état du véhicule et faire ressortir toute sa valeur.',
            beforeLabel: 'Avant validation',
            afterLabel: 'Après validation',
            beforeImage: rgMedia.porscheConsoleMap,
            afterImage: rgMedia.porscheExterior,
          },
          {
            id: '04',
            label: 'Véhicule',
            vehicle: 'Véhicule d’intervention',
            mission: 'Mise en configuration et présentation terrain.',
            outcome: 'Objectif client : refléter une image professionnelle plus propre et plus rassurante.',
            beforeLabel: 'Avant préparation',
            afterLabel: 'Après préparation',
            beforeImage: rgMedia.vanRear,
            afterImage: rgMedia.vanExterior,
          },
        ],
      };

  return (
    <div className="route-page route-page--gallery">
      <section className="content-section gallery-mission-hero" id="gallery-overview">
        <div aria-hidden="true" className="gallery-page-glow gallery-page-glow--one" />
        <div aria-hidden="true" className="gallery-page-glow gallery-page-glow--two" />

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
      </section>

      <section className="content-section gallery-missions-section" id="gallery-projects">
        <div className="content-shell">
          <div className="gallery-missions-header gs-scroll-fade-up">
            <SectionLabel>{content.missionsLabel}</SectionLabel>
            <h2 className="section-heading gallery-missions-title gallery-missions-title--balanced">{content.missionsTitle}</h2>
          </div>

          <div className="gallery-missions-grid">
            {content.missions.map((mission, index) => (
              <article className={`gallery-mission-card gs-scroll-card gallery-mission-card--${(index % 3) + 1}`} key={mission.id}>
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
                    <img alt={mission.beforeLabel} src={mission.beforeImage} />
                    <span>{mission.beforeLabel}</span>
                  </div>
                  <div className="gallery-mission-pane">
                    <img alt={mission.afterLabel} src={mission.afterImage} />
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
