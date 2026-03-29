import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import ReviewCard from '../components/ReviewCard';
import { useSite } from '../context/SiteContext';
import { reviewsSectionContent } from '../data/homeContent';
import { getLocaleContent } from '../utils/getLocaleContent';

export default function ReviewsSection() {
  const { language } = useSite();
  const content = getLocaleContent(reviewsSectionContent, language);

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
            <ReviewCard key={`${card.name}-${card.title}`} quoted={false} showStars starsLabel={`${card.rating} stars`} {...card} />
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
