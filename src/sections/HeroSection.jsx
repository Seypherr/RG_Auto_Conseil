import { Link } from 'react-router-dom';
import BarcodeMark from '../components/BarcodeMark';
import { ArrowRightIcon } from '../components/IconSet';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { heroSectionContent } from '../data/homeContent';
import { getLocaleContent } from '../utils/getLocaleContent';

export default function HeroSection() {
  const { language } = useSite();
  const content = getLocaleContent(heroSectionContent, language);

  return (
    <header className="hero-section">
      <aside className="hero-left">
        <div className="hero-left-stack">
          <div className="mission-block">
            <div className="hide-overflow">
              <SectionLabel className="gs-text-up home-accent-label hero-eyebrow">{content.eyebrow}</SectionLabel>
            </div>
            <div className="hide-overflow">
              <h2 className="mission-title gs-text-up">
                {content.title[0]}
                <br />
                {content.title[1]}
                <br />
                {content.title[2]}
              </h2>
            </div>
            <div className="hide-overflow">
              <p className="mission-desc gs-text-up">{content.description}</p>
            </div>
          </div>
        </div>

        <div className="hero-left-foot gs-fade">
          <div className="hero-barcode-anchor">
            <BarcodeMark code={content.barcodeLabel} variant="barcode" />
          </div>
        </div>
      </aside>

      <main className="hero-center">
        <div aria-hidden="true" className="ambient-glow gs-glow" />

        <div className="hero-image-wrapper gs-img-scale">
          <div aria-hidden="true" className="hero-image-overlay" />
          <img
            alt={content.imageAlt}
            className="hero-image"
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000"
          />
        </div>

        <div aria-hidden="true" className="intersect-frame gs-frame" />

        <h1 className="hero-display-text">
          {content.heroLines.map((line) => (
            <div className="hide-overflow" key={line}>
              <span className="gs-title-up" style={{ display: 'block' }}>
                {line}
              </span>
            </div>
          ))}
        </h1>

        <a
          aria-label={language === 'en' ? 'Scroll to the next section' : 'Descendre vers la section suivante'}
          className="hero-scroll-indicator gs-fade"
          href="#mission"
        >
          <span className="hero-scroll-indicator-ring">
            <ArrowRightIcon />
          </span>
        </a>
      </main>

      <aside className="hero-right">
        <div className="rating-block gs-fade">
          <div className="stars">{content.serenityLabel}</div>
        </div>

        <div className="spec-list gs-fade">
          <div className="spec-item">
            <span className="label home-accent-label">{content.areaLabel}</span>
            <span className="data-value">{content.areaValue}</span>
          </div>
          <div className="spec-item">
            <span className="label home-accent-label">{content.audienceLabel}</span>
            <span className="data-value">{content.audienceValue}</span>
          </div>
          <div className="spec-item">
            <span className="label home-accent-label">{content.approachLabel}</span>
            <span className="data-value">{content.approachValue}</span>
          </div>
        </div>

        <Link className="action-link action-link--hero gs-fade" to="/contact">
          {content.callLabel}
          <ArrowRightIcon />
        </Link>
      </aside>
    </header>
  );
}
