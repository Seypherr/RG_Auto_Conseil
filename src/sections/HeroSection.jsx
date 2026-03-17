import { Link } from 'react-router-dom';
import BarcodeMark from '../components/BarcodeMark';
import { ArrowRightIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';

export default function HeroSection() {
  const { isEnglish } = useSite();

  const content = isEnglish
    ? {
        title: ['Pre-purchase', 'expertise', '& accessories'],
        description:
          'RG Auto Conseil supports private and professional clients across the PACA region to secure a vehicle purchase, review a listing or carry out accessory fitting with a serious and premium approach.',
        imageAlt: 'Vehicle inspected as part of a pre-purchase expertise mission',
        heroLines: ['BUY', 'WITH CONFIDENCE.'],
        goalLabel: 'Main objective',
        goalValue: 'Build trust',
        areaLabel: 'Service area',
        areaValue: 'PACA',
        audienceLabel: 'Target clients',
        audienceValue: 'Private & professional',
        budgetLabel: 'Average budget',
        budgetValue: '€15,000 to €40,000',
        callLabel: 'Call now',
      }
    : {
        title: ['Expertise', 'avant achat', '& accessoires'],
        description:
          'RG Auto Conseil accompagne particuliers et professionnels en région PACA pour sécuriser l’achat d’un véhicule, analyser une annonce ou réaliser un montage d’accessoires avec une approche sérieuse et premium.',
        imageAlt: 'Véhicule contrôlé dans le cadre d’une expertise avant achat',
        heroLines: ['ACHETER', 'EN CONFIANCE.'],
        goalLabel: 'Objectif principal',
        goalValue: 'Donner confiance',
        areaLabel: "Zone d’intervention",
        areaValue: 'PACA',
        audienceLabel: 'Clients ciblés',
        audienceValue: 'Particuliers & pros',
        budgetLabel: 'Budget moyen',
        budgetValue: '15 000 € à 40 000 €',
        callLabel: 'Appeler maintenant',
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
          <BarcodeMark />
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
          <div className="stars">{isEnglish ? 'TRUST' : 'CONFIANCE'}</div>
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
