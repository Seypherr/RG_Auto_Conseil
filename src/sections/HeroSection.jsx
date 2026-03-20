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
      }
    : {
        title: ['Achetez et ameliorez', 'votre voiture', 'en toute serenite'],
        description:
          'Un accompagnement independant pour securiser votre achat et moderniser votre vehicule sans le denaturer.',
        imageAlt: 'Vehicule presente dans un univers automobile sobre et premium',
        heroLines: ['ROULER', 'SEREINEMENT.'],
        goalLabel: 'Objectif principal',
        goalValue: 'Donner confiance',
        areaLabel: 'Zone d intervention',
        areaValue: 'PACA',
        audienceLabel: 'Clients cibles',
        audienceValue: 'Particuliers non experts',
        budgetLabel: 'Approche',
        budgetValue: 'Conseil independant',
        callLabel: 'Etre accompagne',
      };

  return (
    <header className="hero-section">
      <aside className="hero-left">
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

        <div className="gs-fade">
          <BarcodeMark code={isEnglish ? 'INDEPENDENT SUPPORT' : 'ACCOMPAGNEMENT INDEPENDANT'} variant="barcode" />
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
      </main>

      <aside className="hero-right">
        <div className="rating-block gs-fade">
          <div className="stars">{isEnglish ? 'PEACE' : 'SERENITE'}</div>
          <span className="label">{content.goalLabel}</span>
          <span className="data-value">{content.goalValue}</span>
        </div>

        <div className="spec-list gs-fade">
          <div className="spec-item">
            <span className="label">{content.areaLabel}</span>
            <span className="data-value">{content.areaValue}</span>
          </div>
          <div className="spec-item">
            <span className="label">{content.audienceLabel}</span>
            <span className="data-value">{content.audienceValue}</span>
          </div>
          <div className="spec-item">
            <span className="label">{content.budgetLabel}</span>
            <span className="data-value">{content.budgetValue}</span>
          </div>
        </div>

        <Link className="action-link gs-fade" to="/contact">
          {content.callLabel}
          <ArrowRightIcon />
        </Link>
      </aside>
    </header>
  );
}
