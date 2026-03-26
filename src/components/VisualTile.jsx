export default function VisualTile({
  eyebrow,
  title,
  description,
  image,
  variant = 'image',
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}) {
  if (variant === 'beforeAfter') {
    return (
      <article className="visual-tile visual-tile--wide gs-scroll-card">
        <div className="visual-before-after">
          <div className="visual-split">
            <img alt={beforeLabel} className="visual-media" decoding="async" loading="lazy" src={beforeImage} />
            <span className="visual-chip">{beforeLabel}</span>
          </div>
          <div className="visual-split">
            <img alt={afterLabel} className="visual-media" decoding="async" loading="lazy" src={afterImage} />
            <span className="visual-chip">{afterLabel}</span>
          </div>
        </div>
        <div className="visual-copy">
          <span className="label">{eyebrow}</span>
          <h3 className="visual-title">{title}</h3>
          <p className="visual-description">{description}</p>
        </div>
      </article>
    );
  }

  if (variant === 'placeholder') {
    return (
      <article className="visual-tile visual-tile--placeholder gs-scroll-card">
        <div className="visual-placeholder">
          <span className="visual-placeholder-badge">{eyebrow}</span>
          <h3 className="visual-title">{title}</h3>
          <p className="visual-description">{description}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="visual-tile gs-scroll-card">
      <div className="visual-media-wrap">
        <img alt={title} className="visual-media" decoding="async" loading="lazy" src={image} />
      </div>
      <div className="visual-copy">
        <span className="label">{eyebrow}</span>
        <h3 className="visual-title">{title}</h3>
        <p className="visual-description">{description}</p>
      </div>
    </article>
  );
}
