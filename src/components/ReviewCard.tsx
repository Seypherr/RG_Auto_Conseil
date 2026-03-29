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
}) {
  const starCount = Math.max(0, Math.min(5, Number(rating) || 0));

  return (
    <article className={`review-card ${offsetClassName}`.trim()}>
      <div>
        {showStars ? (
          <div aria-label={starsLabel} className="review-stars">
            {Array.from({ length: starCount }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
        ) : null}
        {kicker ? <div className="review-kicker">{kicker}</div> : null}
        {title ? <h3 className="review-title">{title}</h3> : null}
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
