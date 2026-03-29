import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './IconSet';

export default function MobilePageHero({
  cardLabel,
  cardTitle,
  copy,
  imageAlt,
  imageSrc,
  label,
  primaryCta,
  primaryHref,
  title,
  titleLines,
  chips = [],
}) {
  const resolvedTitle = title ?? titleLines?.join(' ');

  return (
    <section className="mobile-page-hero">
      <div className="mobile-page-hero-copy mobile-page-hero-copy--plain">
        <span className="mobile-page-eyebrow">{label}</span>
        <h1 className="mobile-page-title">{resolvedTitle}</h1>
        {copy ? <p className="mobile-page-copy">{copy}</p> : null}

        {primaryCta && primaryHref ? (
          <Link className="mobile-page-cta" to={primaryHref}>
            <span>{primaryCta}</span>
            <ArrowRightIcon />
          </Link>
        ) : null}
      </div>

      <article className="mobile-page-visual-card">
        <img
          alt={imageAlt}
          className="mobile-page-visual-image"
          decoding="async"
          fetchpriority="high"
          height="1175"
          src={imageSrc}
          width="1000"
        />
        <div aria-hidden="true" className="mobile-page-visual-mask" />
        <div className="mobile-page-visual-copy">
          <span className="mobile-page-card-label">{cardLabel}</span>
          <h2>{cardTitle}</h2>
        </div>
      </article>

      {chips.length ? (
        <div className="mobile-page-chip-row mobile-page-chip-row--centered" role="list">
          {chips.map((chip) => (
            <span className="mobile-page-chip mobile-page-chip--centered" key={chip} role="listitem">
              {chip}
            </span>
          ))}
        </div>
      ) : null}
    </section>
  );
}
