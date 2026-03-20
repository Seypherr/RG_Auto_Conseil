import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import ReviewCard from '../components/ReviewCard';
import { useSite } from '../context/SiteContext';

export default function ReviewsSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        label: 'Testimonials',
        heading: ['Trust,', 'clarity,', 'premium care.'],
        cards: [
          {
            kicker: 'Clarity',
            copy: 'Each service is explained in a more readable way so visitors immediately understand what is done and why it matters.',
            name: 'Reading quality',
            detail: 'A clearer first impression',
            initials: '01',
          },
          {
            kicker: 'Trust',
            copy: 'The whole site is built to reassure before the first call, with direct contact, transparent wording and a high-end tone.',
            name: 'Perceived confidence',
            detail: 'A more credible path to contact',
            initials: '02',
            avatarClassName: 'review-avatar--stone',
            offsetClassName: 'review-card--mid',
          },
          {
            kicker: 'Premium',
            copy: 'Animations, layouts and copy now feel more connected from one page to the next, which strengthens the overall brand coherence.',
            name: 'Site coherence',
            detail: 'A tighter visual identity',
            initials: '03',
            avatarClassName: 'review-avatar--zinc',
            offsetClassName: 'review-card--low',
          },
        ],
        action: 'Open gallery',
        starsLabel: '5 stars',
      }
    : {
        label: 'Avis & confiance',
        heading: ['Confiance,', 'clarte,', 'soin premium.'],
        cards: [
          {
            kicker: 'Clarte',
            copy: 'Chaque service est explique de facon plus lisible pour que le visiteur comprenne immediatement ce qui est fait et pourquoi cela compte.',
            name: 'Qualite de lecture',
            detail: 'Une premiere impression plus nette',
            initials: '01',
          },
          {
            kicker: 'Confiance',
            copy: 'L ensemble du site est construit pour rassurer avant le premier appel, avec un contact direct, un discours transparent et un ton haut de gamme.',
            name: 'Confiance percue',
            detail: 'Un chemin vers le contact plus credible',
            initials: '02',
            avatarClassName: 'review-avatar--stone',
            offsetClassName: 'review-card--mid',
          },
          {
            kicker: 'Premium',
            copy: 'Les animations, les mises en page et le wording semblent desormais plus connectes d une page a l autre, ce qui renforce la coherence de marque.',
            name: 'Coherence du site',
            detail: 'Une identite visuelle plus tenue',
            initials: '03',
            avatarClassName: 'review-avatar--zinc',
            offsetClassName: 'review-card--low',
          },
        ],
        action: 'Voir la galerie',
        starsLabel: '5 etoiles',
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
