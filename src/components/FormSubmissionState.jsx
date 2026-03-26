import { Link } from 'react-router-dom';
import BarcodeMark from './BarcodeMark';
import { useSite } from '../context/SiteContext';
import { BRAND } from '../data/siteConfig';
import { formSubmissionContent } from '../data/contactContent';
import { getLocaleContent } from '../utils/getLocaleContent';

const referencePrefixes = {
  contact: 'CONTACT',
  quote: 'PROJET',
  support: 'SUIVI',
};

export function buildSubmissionReference(kind) {
  const now = new Date();
  const prefix = referencePrefixes[kind] || 'RG84';
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${prefix} · RG84-${year}-${month}${day}-${hours}${minutes}`;
}

export default function FormSubmissionState({ kind = 'quote', reference, onReset }) {
  const { language } = useSite();
  const shared = getLocaleContent(formSubmissionContent, language);
  const content = shared[kind] || shared.quote;
  const safeReference = reference || buildSubmissionReference(kind);

  return (
    <section className="content-section submission-success-section">
      <div className="content-shell submission-shell">
        <div className="submission-frame">
          <div className="submission-grid-lines" aria-hidden="true">
            <div className="submission-grid-line" />
            <div className="submission-grid-line" />
          </div>

          <div className="submission-orb submission-orb--center" aria-hidden="true" />
          <div className="submission-orb submission-orb--corner" aria-hidden="true" />

          <div className="submission-content">
            <div className="submission-check-container submission-reveal">
              <svg className="submission-check-svg" viewBox="0 0 100 100">
                <circle className="submission-check-circle" cx="50" cy="50" r="48" />
                <path className="submission-check-mark" d="M30 52 L45 65 L70 35" />
              </svg>
            </div>

            <span className="label submission-reveal submission-delay-1">{content.label}</span>

            <h1 className="submission-title submission-reveal submission-delay-2">{content.title}</h1>

            <p className="submission-description submission-reveal submission-delay-3">{content.description}</p>

            <div className="submission-actions submission-reveal submission-delay-4">
              <div className="submission-reference">{safeReference}</div>
              <div className="submission-action-row">
                <Link className="btn-pill" to="/">
                  {shared.home}
                </Link>
                {onReset ? (
                  <button className="submission-reset" onClick={onReset} type="button">
                    {shared.reset}
                  </button>
                ) : null}
              </div>
            </div>

            <div className="submission-barcode submission-reveal submission-delay-5">
              <BarcodeMark compact />
              <div className="submission-footer-copy">{content.footer}</div>
            </div>
          </div>

          <div className="submission-bottom submission-reveal submission-delay-5">
            <div className="submission-bottom-line" />
            <div className="submission-bottom-copy">{BRAND.name.replace(/\.$/, '')} © 2026</div>
            <div className="submission-bottom-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
