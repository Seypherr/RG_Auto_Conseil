import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { rgMedia } from '../data/rgMedia';

export default function GalleryPage() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Missions and before / after',
        title: ['Real missions,', 'visible changes,', 'added value.'],
        intro:
          'The gallery is now organised by real mission types so each vehicle is tied to a clear intervention and a readable before / after result.',
        heroCardLabel: 'Gallery logic',
        heroCardTitle: 'A more useful way to read the work.',
        heroCardCopy:
          'Each mission combines the vehicle, the work carried out and the visible result. The goal is not just to show images, but to explain the value created.',
        missionsLabel: 'Mission grid',
        missionsTitle: 'Vehicles sorted by actual mission.',
        missions: [
          {
            id: '01',
            label: 'Modernisation',
            vehicle: 'Porsche 911',
            mission: 'Infotainment refresh and usability improvement.',
            outcome: 'A cleaner, more current interface that improves comfort without breaking the original spirit.',
            beforeLabel: 'Before modernisation',
            afterLabel: 'After interface update',
            beforeImage: rgMedia.porscheConsoleLegacy,
            afterImage: rgMedia.porscheConsole,
          },
          {
            id: '02',
            label: 'Integration',
            vehicle: 'Ford Transit',
            mission: 'Screen and reversing camera integration for daily use.',
            outcome: 'A more reassuring and more practical utility vehicle for real field usage.',
            beforeLabel: 'Before camera setup',
            afterLabel: 'After camera integration',
            beforeImage: rgMedia.fordDisplayBase,
            afterImage: rgMedia.fordCameraDisplay,
          },
          {
            id: '03',
            label: 'Validation',
            vehicle: 'Porsche 911',
            mission: 'Inspection, detail reading and final premium presentation.',
            outcome: 'A mission that moves from close-up verification to a fully validated and desirable presentation.',
            beforeLabel: 'Before final validation',
            afterLabel: 'After final presentation',
            beforeImage: rgMedia.porscheConsoleMap,
            afterImage: rgMedia.porscheExterior,
          },
          {
            id: '04',
            label: 'Mission vehicle',
            vehicle: 'Ford Transit atelier',
            mission: 'Field vehicle setup and operational presentation.',
            outcome: 'A clearer professional image for interventions and appointments on site.',
            beforeLabel: 'Before mission prep',
            afterLabel: 'After operational setup',
            beforeImage: rgMedia.vanRear,
            afterImage: rgMedia.vanExterior,
          },
        ],
      }
    : {
        label: 'Missions et avant / apres',
        title: ['Des missions reelles,', 'des changements visibles,', 'de la valeur ajoutee.'],
        intro:
          'La galerie est maintenant triee par types de missions reelles pour relier chaque vehicule a une intervention claire et a un avant / apres lisible.',
        heroCardLabel: 'Logique galerie',
        heroCardTitle: 'Une lecture du travail plus utile.',
        heroCardCopy:
          'Chaque mission associe le vehicule, le travail realise et le resultat visible. Le but n est pas seulement de montrer des images, mais d expliquer la valeur creee.',
        missionsLabel: 'Grille missions',
        missionsTitle: 'Les vehicules tries par mission effectuee.',
        missions: [
          {
            id: '01',
            label: 'Modernisation',
            vehicle: 'Porsche 911',
            mission: 'Rafraichissement infotainment et amelioration d usage.',
            outcome: 'Une interface plus propre et plus actuelle qui ameliore le confort sans casser l esprit d origine.',
            beforeLabel: 'Avant modernisation',
            afterLabel: 'Apres mise a jour interface',
            beforeImage: rgMedia.porscheConsoleLegacy,
            afterImage: rgMedia.porscheConsole,
          },
          {
            id: '02',
            label: 'Integration',
            vehicle: 'Ford Transit',
            mission: 'Integration ecran et camera de recul pour l usage quotidien.',
            outcome: 'Un utilitaire plus rassurant et plus pratique pour un usage terrain reel.',
            beforeLabel: 'Avant ajout camera',
            afterLabel: 'Apres integration camera',
            beforeImage: rgMedia.fordDisplayBase,
            afterImage: rgMedia.fordCameraDisplay,
          },
          {
            id: '03',
            label: 'Validation',
            vehicle: 'Porsche 911',
            mission: 'Inspection, lecture detail et presentation finale premium.',
            outcome: 'Une mission qui part du controle rapproche pour aboutir a une presentation validee et plus desirable.',
            beforeLabel: 'Avant validation finale',
            afterLabel: 'Apres presentation finale',
            beforeImage: rgMedia.porscheConsoleMap,
            afterImage: rgMedia.porscheExterior,
          },
          {
            id: '04',
            label: 'Vehicule mission',
            vehicle: 'Ford Transit atelier',
            mission: 'Preparation vehicule terrain et presentation operationnelle.',
            outcome: 'Une image professionnelle plus claire pour les interventions et rendez-vous sur site.',
            beforeLabel: 'Avant preparation mission',
            afterLabel: 'Apres mise en configuration',
            beforeImage: rgMedia.vanRear,
            afterImage: rgMedia.vanExterior,
          },
        ],
      };

  return (
    <div className="route-page route-page--gallery">
      <section className="content-section gallery-mission-hero">
        <div aria-hidden="true" className="gallery-page-glow gallery-page-glow--one" />
        <div aria-hidden="true" className="gallery-page-glow gallery-page-glow--two" />

        <div className="content-shell gallery-mission-hero-shell">
          <div className="gallery-mission-copy gs-scroll-heading">
            <div className="hide-overflow">
              <SectionLabel className="gs-scroll-text-up">{content.label}</SectionLabel>
            </div>
            {content.title.map((line, index) => (
              <div className="hide-overflow" key={line} style={{ display: 'block', marginTop: index === 0 ? '1rem' : 0 }}>
                <span className="editorial-title gs-scroll-title-up">{line}</span>
              </div>
            ))}
            <p className="editorial-copy editorial-copy--wide gs-scroll-fade-up">{content.intro}</p>
          </div>

          <article className="gallery-mission-highlight gs-scroll-card">
            <img alt={content.heroCardTitle} className="gallery-mission-highlight-image" src={rgMedia.porscheInteriorWide} />
            <div className="gallery-mission-highlight-mask" />
            <div className="gallery-mission-highlight-copy">
              <span className="label">{content.heroCardLabel}</span>
              <h2>{content.heroCardTitle}</h2>
              <p>{content.heroCardCopy}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section gallery-missions-section">
        <div className="content-shell">
          <div className="gallery-missions-header gs-scroll-fade-up">
            <SectionLabel>{content.missionsLabel}</SectionLabel>
            <h2 className="section-heading gallery-missions-title">{content.missionsTitle}</h2>
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
                  <h3>{mission.mission}</h3>
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
        </div>
      </section>
    </div>
  );
}
