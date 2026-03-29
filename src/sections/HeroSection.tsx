import { Link } from 'react-router-dom';
import BarcodeMark from '../components/BarcodeMark';
import { ArrowRightIcon } from '../components/IconSet';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { heroSectionContent } from '../data/homeContent';
import { getLocaleContent } from '../utils/getLocaleContent';

const heroImage = new URL('../../Photo_rg_auto_conseil/Photo_Hero.webp', import.meta.url).toString();

export default function HeroSection() {
  const { language } = useSite();
  const content = getLocaleContent(heroSectionContent, language);
  const seoHeading =
    language === 'en'
      ? 'Independent automotive advice for vehicle purchase, inspection and discreet vehicle improvement'
      : "Conseil automobile indépendant pour l'achat, l'inspection et l'amélioration discrète de véhicule";
  const scrollHint = language === 'en' ? 'Scroll' : 'Découvrir';

  return (
    <header className="hero-section">
      <aside className="hero-left">
        <div className="hero-left-stack">
          <div className="mission-block">
            <div className="hide-overflow">
              <SectionLabel className="gs-text-up home-accent-label hero-eyebrow">{content.eyebrow}</SectionLabel>
            </div>
            <h1 className="sr-only">{seoHeading}</h1>
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
            <BarcodeMark code={content.barcodeLabel} />
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
            decoding="async"
            fetchpriority="high"
            height="1200"
            src={heroImage}
            width="1600"
          />
        </div>

        <div aria-hidden="true" className="intersect-frame gs-frame" />

        <div aria-hidden="true" className="hero-display-text">
          {content.heroLines.map((line, index) => (
            <div className="hide-overflow" key={line}>
              <span className={`gs-title-up hero-display-line hero-display-line--${index + 1}`}>{line}</span>
            </div>
          ))}
        </div>

        <a
          aria-label={language === 'en' ? 'Scroll to the next section' : 'Descendre vers la section suivante'}
          className="hero-scroll-indicator gs-fade"
          href="#mission"
        >
          <span className="hero-scroll-indicator-label">{scrollHint}</span>
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
