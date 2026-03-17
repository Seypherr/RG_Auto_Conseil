import { StarIcon } from './IconSet';

export default function ReviewCard({
  copy,
  name,
  detail,
  initials,
  avatarClassName = '',
  offsetClassName = '',
  kicker = '',
  quoted = true,
  starsLabel = '5 stars',
}) {
  return (
    <article className={`review-card ${offsetClassName}`.trim()}>
      <div>
        {kicker ? (
          <div className="review-kicker">{kicker}</div>
        ) : (
          <div aria-label={starsLabel} className="review-stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
        )}
        <p className={`review-copy${quoted ? '' : ' review-copy--plain'}`}>{quoted ? `"${copy}"` : copy}</p>
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
