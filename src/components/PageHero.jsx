import { Link } from 'react-router-dom';
import SectionLabel from './SectionLabel';

export default function PageHero({ label, titleLines, copy, actions = [] }) {
  return (
    <section className="content-section page-hero-section route-page">
      <div className="section-orb" aria-hidden="true" style={{ top: '4rem', right: '12%', width: '24rem', height: '24rem', background: 'rgba(255,255,255,0.08)' }} />
      <div className="section-orb" aria-hidden="true" style={{ bottom: '-3rem', left: '10%', width: '20rem', height: '20rem', background: 'rgba(194,133,81,0.08)' }} />

      <div className="content-shell page-hero gs-scroll-heading">
        <div className="hide-overflow">
          <SectionLabel className="gs-scroll-text-up">{label}</SectionLabel>
        </div>

        {titleLines.map((line, index) => (
          <div className="hide-overflow" key={line} style={{ display: 'block', marginTop: index === 0 ? '1rem' : 0 }}>
            <span className="page-hero-title gs-scroll-title-up">{line}</span>
          </div>
        ))}

        <div className="page-hero-copy-wrap gs-scroll-fade-up">
          <p className="page-hero-copy">{copy}</p>
        </div>

        {actions.length > 0 ? (
          <div className="page-hero-actions gs-scroll-fade-up">
            {actions.map((action) =>
              action.external ? (
                <a className="btn-pill" href={action.to} key={action.label} rel="noreferrer" target="_blank">
                  {action.label}
                </a>
              ) : (
                <Link className="btn-pill" key={action.label} to={action.to}>
                  {action.label}
                </Link>
              ),
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
