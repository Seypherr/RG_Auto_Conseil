import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import ReviewCard from '../components/ReviewCard';
import { useSite } from '../context/SiteContext';

export default function ReviewsSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Testimonials',
        heading: ['They', 'trusted us.'],
        cards: [
          {
            kicker: 'Availability',
            copy: 'The website can already host future testimonials while maintaining a premium presentation from day one.',
            name: 'Published reviews',
            detail: 'To be added as client feedback is collected',
            initials: '01',
          },
          {
            kicker: 'Trust',
            copy: 'The current content focuses on clarity, reassurance and direct contact so visitors immediately understand the value of the support.',
            name: 'Brand goal',
            detail: 'Build confidence before the first call',
            initials: '02',
            avatarClassName: 'review-avatar--stone',
            offsetClassName: 'review-card--mid',
          },
          {
            kicker: 'Premium',
            copy: 'The tone remains serious, modern and carefully crafted, in line with a service positioned as independent and high-touch.',
            name: 'Positioning',
            detail: 'Independent automotive advisor',
            initials: '03',
            avatarClassName: 'review-avatar--zinc',
            offsetClassName: 'review-card--low',
          },
        ],
        action: 'Open gallery',
      }
    : {
        label: 'Témoignages',
        heading: ['Ils nous ont', 'fait confiance.'],
        cards: [
          {
            kicker: 'Disponibilité',
            copy: 'Le site peut déjà accueillir les futurs témoignages tout en gardant une présentation premium dès maintenant.',
            name: 'Avis publiés',
            detail: 'À compléter au fil des retours clients',
            initials: '01',
          },
          {
            kicker: 'Confiance',
            copy: 'Le contenu actuel met l’accent sur la clarté, la réassurance et le contact direct pour que l’intérêt du service soit compris dès la première visite.',
            name: 'Objectif du site',
            detail: 'Donner confiance avant le premier appel',
            initials: '02',
            avatarClassName: 'review-avatar--stone',
            offsetClassName: 'review-card--mid',
          },
          {
            kicker: 'Premium',
            copy: 'Le ton reste sérieux, moderne et soigné, au service d’un accompagnement positionné comme indépendant et haut de gamme.',
            name: 'Positionnement',
            detail: 'Conseiller automobile indépendant',
            initials: '03',
            avatarClassName: 'review-avatar--zinc',
            offsetClassName: 'review-card--low',
          },
        ],
        action: 'Voir la galerie',
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
            <SectionLabel className="gs-scroll-text-up">{content.label}</SectionLabel>
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
            <ReviewCard key={card.name} quoted={false} {...card} />
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
