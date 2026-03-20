import { Link } from 'react-router-dom';
import BarcodeMark from './BarcodeMark';
import { useSite } from '../context/SiteContext';

const copyByKind = {
  fr: {
    contact: {
      label: 'Message enregistré',
      title: 'Votre message est bien arrivé.',
      description:
        'Nous avons bien reçu votre demande. Un retour vous sera adressé sous 24 heures pour qualifier votre besoin avec clarté et discrétion.',
      footer: 'Authentification de message sécurisée',
    },
    quote: {
      label: 'Demande de devis enregistrée',
      title: 'Votre projet passe en étude.',
      description:
        'Nous avons bien reçu les informations de votre projet. Un retour vous sera adressé sous 24 heures avec le bon niveau de conseil ou de devis.',
      footer: 'Authentification de devis sécurisée',
    },
    support: {
      label: 'Accompagnement enregistré',
      title: 'Votre quête commence ici.',
      description:
        'Nous avons bien reçu votre demande d’accompagnement. Un consultant analysera votre projet et vous recontactera sous 24 heures pour initier la suite en toute discrétion.',
      footer: 'Authentification de mandat sécurisée',
    },
    home: 'Retour à l’accueil',
    reset: 'Envoyer une autre demande',
    rights: 'RG Auto Conseil © 2026',
  },
  en: {
    contact: {
      label: 'Message recorded',
      title: 'Your message is safely in.',
      description:
        'We have received your request. A reply will be sent within 24 hours to qualify your need with clarity and discretion.',
      footer: 'Secure message authentication',
    },
    quote: {
      label: 'Quote request recorded',
      title: 'Your project is now under review.',
      description:
        'We have received your project details. A reply will be sent within 24 hours with the right level of advice or quotation.',
      footer: 'Secure quote authentication',
    },
    support: {
      label: 'Support request recorded',
      title: 'Your search starts here.',
      description:
        'We have received your support request. A dedicated consultant will review your project and contact you within 24 hours to begin discreetly.',
      footer: 'Secure mandate authentication',
    },
    home: 'Back to home',
    reset: 'Submit another request',
    rights: 'RG Auto Conseil © 2026',
  },
};

export function buildSubmissionReference(kind) {
  const now = new Date();
  const prefixMap = {
    contact: 'CONTACT',
    quote: 'DEVIS',
    support: 'MANDAT',
  };
  const prefix = prefixMap[kind] || 'RG84';
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${prefix} · RG84-${year}-${month}${day}-${hours}${minutes}`;
}

export default function FormSubmissionState({ kind = 'quote', reference, onReset }) {
  const { language } = useSite();
  const locale = language === 'en' ? 'en' : 'fr';
  const shared = copyByKind[locale];
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
            <div className="submission-bottom-copy">{shared.rights}</div>
            <div className="submission-bottom-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
