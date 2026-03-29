import { useEffect } from 'react';
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

export default function FormSubmissionState({ kind = 'quote', reference, onDismiss, onReset }) {
  const { language } = useSite();
  const shared = getLocaleContent(formSubmissionContent, language);
  const content = shared[kind] || shared.quote;
  const safeReference = reference || buildSubmissionReference(kind);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div aria-labelledby="submission-dialog-title" aria-modal="true" className="submission-modal" role="dialog">
      <button aria-label={shared.close} className="submission-modal-backdrop" onClick={onDismiss} type="button" />

      <div className="submission-modal-panel">
        <div aria-hidden="true" className="submission-modal-grid-lines">
          <div className="submission-modal-grid-line" />
          <div className="submission-modal-grid-line" />
        </div>

        <div aria-hidden="true" className="submission-modal-orb submission-modal-orb--center" />
        <div aria-hidden="true" className="submission-modal-orb submission-modal-orb--corner" />

        <button aria-label={shared.close} className="submission-modal-close" onClick={onDismiss} type="button">
          <span />
          <span />
        </button>

        <div className="submission-modal-content">
          <div className="submission-check-container submission-reveal">
            <svg className="submission-check-svg" viewBox="0 0 100 100">
              <circle className="submission-check-circle" cx="50" cy="50" r="48" />
              <path className="submission-check-mark" d="M30 52 L45 65 L70 35" />
            </svg>
          </div>

          <span className="label submission-reveal submission-delay-1">{content.label}</span>

          <h2 className="submission-title submission-reveal submission-delay-2" id="submission-dialog-title">
            {content.title}
          </h2>

          <p className="submission-description submission-reveal submission-delay-3">{content.description}</p>

          <div className="submission-actions submission-reveal submission-delay-4">
            <div className="submission-reference">{safeReference}</div>
            <div className="submission-action-row">
              <button className="submission-dismiss-button" onClick={onDismiss} type="button">
                {shared.close}
              </button>
              {onReset ? (
                <button className="submission-reset" onClick={onReset} type="button">
                  {shared.reset}
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="submission-bottom submission-reveal submission-delay-5">
          <div className="submission-bottom-line" />
          <div className="submission-bottom-copy">{BRAND.name.replace(/\.$/, '')} © 2026</div>
          <div className="submission-bottom-line" />
        </div>
      </div>
    </div>
  );
}
