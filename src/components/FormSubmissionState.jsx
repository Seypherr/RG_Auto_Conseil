import { Link } from 'react-router-dom';
import BarcodeMark from './BarcodeMark';
import { useSite } from '../context/SiteContext';

const copyByKind = {
  fr: {
    contact: {
      label: 'Message enregistré',
      title: 'Votre demande a bien été reçue.',
      description:
        'Nous avons bien reçu votre message. Un retour vous sera adressé rapidement avec une approche claire, simple et adaptée.',
      footer: 'Authentification de message sécurisée',
    },
    quote: {
      label: 'Demande envoyée',
      title: 'Votre projet est en cours de lecture.',
      description:
        'Nous avons bien reçu les informations de votre projet. Un retour vous sera adressé rapidement pour faire le point avec clarté et sérénité.',
      footer: 'Authentification de demande sécurisée',
    },
    support: {
      label: 'Suivi enregistré',
      title: 'Votre projet peut maintenant avancer.',
      description:
        'Nous avons bien reçu votre besoin. Nous reviendrons vers vous rapidement pour cadrer la suite avec une lecture simple et rassurante.',
      footer: 'Authentification de suivi sécurisée',
    },
    home: 'Retour à l’accueil',
    reset: 'Envoyer une autre demande',
    rights: 'RG Auto Conseil © 2026',
  },
  en: {
    contact: {
      label: 'Message received',
      title: 'Your request has been recorded.',
      description:
        'We have received your message. A reply will be sent quickly with a clear, simple and tailored approach.',
      footer: 'Secure message authentication',
    },
    quote: {
      label: 'Request sent',
      title: 'Your project is now under review.',
      description:
        'We have received the details of your project. A reply will be sent quickly to clarify the next step with calm and clarity.',
      footer: 'Secure request authentication',
    },
    support: {
      label: 'Support request received',
      title: 'Your project can now move forward.',
      description:
        'We have received your need. We will get back to you quickly to structure the next step in a clear and reassuring way.',
      footer: 'Secure follow-up authentication',
    },
    home: 'Back to home',
    reset: 'Send another request',
    rights: 'RG Auto Conseil © 2026',
  },
};

export function buildSubmissionReference(kind) {
  const now = new Date();
  const prefixMap = {
    contact: 'CONTACT',
    quote: 'PROJET',
    support: 'SUIVI',
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
