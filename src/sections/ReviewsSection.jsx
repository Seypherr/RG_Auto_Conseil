import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import ReviewCard from '../components/ReviewCard';
import { useSite } from '../context/SiteContext';

export default function ReviewsSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Before / after',
        heading: ['Controlled', 'transformations,', 'visible results.'],
        cards: [
          {
            kicker: 'Vehicle',
            copy: 'Porsche 911 modernised with a clean integration designed to improve daily comfort without breaking the original spirit.',
            name: 'Intervention carried out',
            detail: 'Modernisation and interface upgrade',
            initials: '01',
          },
          {
            kicker: 'Client goal',
            copy: 'Create a more reassuring and easier to use environment while preserving a discreet and premium finish.',
            name: 'Expected result',
            detail: 'More comfort and clearer use',
            initials: '02',
            avatarClassName: 'review-avatar--stone',
            offsetClassName: 'review-card--mid',
          },
          {
            kicker: 'Method',
            copy: 'Each transformation is designed to enhance the vehicle without altering its identity or pushing it into an aggressive style.',
            name: 'Approach',
            detail: 'Respectful, useful and controlled',
            initials: '03',
            avatarClassName: 'review-avatar--zinc',
            offsetClassName: 'review-card--low',
          },
        ],
        action: 'Open the gallery',
        starsLabel: '5 stars',
      }
    : {
        label: 'Avant / après',
        heading: ['Des transformations', 'maîtrisées,', 'des résultats visibles.'],
        cards: [
          {
            kicker: 'Véhicule',
            copy: 'Porsche 911 modernisée avec une intégration propre pensée pour améliorer le confort d’usage sans casser l’esprit d’origine.',
            name: 'Intervention réalisée',
            detail: 'Modernisation et mise à jour interface',
            initials: '01',
          },
          {
            kicker: 'Objectif client',
            copy: 'Créer un environnement plus rassurant et plus simple à utiliser tout en conservant une finition sobre et premium.',
            name: 'Résultat recherché',
            detail: 'Plus de confort et une lecture plus claire',
            initials: '02',
            avatarClassName: 'review-avatar--stone',
            offsetClassName: 'review-card--mid',
          },
          {
            kicker: 'Méthode',
            copy: 'Chaque transformation est pensée pour sublimer le véhicule sans en altérer l’identité ni glisser vers une image trop démonstrative.',
            name: 'Approche',
            detail: 'Respectueuse, utile et maîtrisée',
            initials: '03',
            avatarClassName: 'review-avatar--zinc',
            offsetClassName: 'review-card--low',
          },
        ],
        action: 'Voir la galerie',
        starsLabel: '5 étoiles',
      };

  return (
    <section className="content-section reviews-section" id="reviews">
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ top: '50%', left: '50%', width: '50rem', height: '50rem', transform: 'translate(-50%, -50%)', background: 'rgba(255,255,255,0.1)' }}
      />

      <div className="content-shell reviews-shell">
        <div className="reviews-intro gs-scroll-heading" style={{ textAlign: 'center' }}>
          <div className="hide-overflow">
            <SectionLabel className="gs-scroll-text-up home-accent-label">{content.label}</SectionLabel>
          </div>
          {content.heading.map((line, index) => (
            <div className="hide-overflow" key={line} style={{ display: 'block', marginTop: index === 0 ? '1rem' : 0 }}>
              <span className="section-heading gs-scroll-title-up" style={{ display: 'block' }}>
                {line}
              </span>
            </div>
          ))}
        </div>

        <div className="reviews-grid gs-scroll-fade-up">
          {content.cards.map((card) => (
            <ReviewCard key={card.name} quoted={false} showStars starsLabel={content.starsLabel} {...card} />
          ))}
        </div>

        <div className="home-section-action">
          <Link className="btn-pill" to="/gallery">
            {content.action}
          </Link>
        </div>
      </div>
    </section>
  );
}
