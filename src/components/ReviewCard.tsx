import { useState } from 'react';
import { StarIcon } from './IconSet';

export default function ReviewCard({
  copy,
  name,
  detail,
  initials,
  title = '',
  rating = 5,
  avatarClassName = '',
  offsetClassName = '',
  kicker = '',
  quoted = true,
  showStars = false,
  starsLabel = '5 stars',
  expandLabel = 'Voir plus',
  collapseLabel = 'Voir moins',
  maxLines = 7,
}) {
  const starCount = Math.max(0, Math.min(5, Number(rating) || 0));
  const canExpand = typeof copy === 'string' && copy.length > 220;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`review-card ${offsetClassName}`.trim()}>
      <div>
        {showStars ? (
          <div aria-label={starsLabel} className="review-stars" role="img">
            {Array.from({ length: starCount }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
        ) : null}
        {kicker ? <div className="review-kicker">{kicker}</div> : null}
        {title ? <h3 className="review-title">{title}</h3> : null}
        <p
          className={`review-copy${quoted ? '' : ' review-copy--plain'}${canExpand && !isExpanded ? ' review-copy--clamped' : ''}`}
          style={canExpand && !isExpanded ? { WebkitLineClamp: String(maxLines) } : undefined}
        >
          {quoted ? `"${copy}"` : copy}
        </p>
        {canExpand ? (
          <button
            type="button"
            className="review-toggle"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((current) => !current)}
          >
            {isExpanded ? collapseLabel : expandLabel}
          </button>
        ) : null}
      </div>

      <div className="review-meta">
        <div className={`review-avatar ${avatarClassName}`.trim()}>{initials}</div>
        <div>
          <div className="review-name">{name}</div>
          <div className="review-detail">{detail}</div>
        </div>
      </div>
    </article>
  );
}
