import { Link } from 'react-router-dom';
import BarcodeMark from '../components/BarcodeMark';
import { ArrowRightIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';

export default function HeroSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        title: ['Buy and improve', 'your car', 'with peace of mind'],
        description:
          'Independent support to secure your purchase and modernise your vehicle without changing its identity.',
        imageAlt: 'Vehicle presented in a discreet premium automotive setting',
        heroLines: ['DRIVE', 'WITH PEACE.'],
        goalLabel: 'Main objective',
        goalValue: 'Build confidence',
        areaLabel: 'Service area',
        areaValue: 'PACA',
        audienceLabel: 'Target clients',
        audienceValue: 'Private buyers',
        budgetLabel: 'Approach',
        budgetValue: 'Independent advice',
        callLabel: 'Get support',
        barcodeLabel: 'INDEPENDENT SUPPORT',
        serenityLabel: 'PEACE',
      }
    : {
        title: ['Achetez et améliorez', 'votre voiture', 'en toute sérénité'],
        description:
          'Un suivi indépendant pour sécuriser votre achat et moderniser votre véhicule sans le dénaturer.',
        imageAlt: 'Véhicule présenté dans un univers automobile sobre et premium',
        heroLines: ['ROULER', 'SEREINEMENT.'],
        goalLabel: 'Objectif principal',
        goalValue: 'Donner confiance',
        areaLabel: 'Zone d’intervention',
        areaValue: 'PACA',
        audienceLabel: 'Clients cibles',
        audienceValue: 'Particuliers non-experts',
        budgetLabel: 'Approche',
        budgetValue: 'Conseil indépendant',
        callLabel: 'Être suivi',
        barcodeLabel: 'SUIVI INDÉPENDANT',
        serenityLabel: 'SÉRÉNITÉ',
      };

  return (
    <header className="hero-section">
      <aside className="hero-left">
        <div className="hero-left-stack">
          <div className="mission-block">
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
          aria-label={isEnglish ? 'Scroll to the next section' : 'Descendre vers la section suivante'}
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
          <span className="label">{content.goalLabel}</span>
          <span className="data-value">{content.goalValue}</span>
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
            <span className="label home-accent-label">{content.budgetLabel}</span>
            <span className="data-value">{content.budgetValue}</span>
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
