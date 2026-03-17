import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';

export default function PrivacyPage() {
  const { isEnglish } = useSite();

  const hero = isEnglish
    ? {
        label: 'Privacy policy',
        titleLines: ['Privacy', 'policy'],
        copy: 'A simple privacy framework adapted to the current site and to the contact flows exposed online.',
      }
    : {
        label: 'Confidentialité',
        titleLines: ['Politique', 'de confidentialité'],
        copy: 'Un cadre de confidentialité simple, adapté au site actuel et aux flux de prise de contact proposés en ligne.',
      };

  const sections = isEnglish
    ? [
        {
          title: 'Collected data',
          body: [
            'The contact forms may collect identity, phone number, email address and project details supplied voluntarily by the visitor.',
            'This information is limited to what is necessary to answer contact, quote or support requests.',
          ],
        },
        {
          title: 'Use of data',
          body: [
            'Data is intended to qualify requests, respond to prospects and organise support around RG Auto Conseil services.',
            'No other commercial use is stated at this stage.',
          ],
        },
        {
          title: 'Retention and security',
          body: [
            'The intention is to keep personal data only for the time required to handle the request and the associated follow-up.',
            'Appropriate technical and organisational measures should be maintained to protect the exchanged information.',
          ],
        },
        {
          title: 'Rights',
          body: [
            'Visitors can request access, correction or deletion of their personal data by contacting contact@rgautoconseil.fr.',
            'A more detailed compliance notice can be added later if the business scope evolves.',
          ],
        },
      ]
    : [
        {
          title: 'Données collectées',
          body: [
            'Les formulaires de contact peuvent collecter l’identité, le numéro de téléphone, l’adresse email et les détails du projet fournis volontairement par le visiteur.',
            'Ces informations restent limitées à ce qui est nécessaire pour répondre à une prise de contact, une demande de devis ou un accompagnement.',
          ],
        },
        {
          title: 'Utilisation des données',
          body: [
            'Les données sont destinées à qualifier les demandes, répondre aux prospects et organiser l’accompagnement autour des services de RG Auto Conseil.',
            'Aucun autre usage commercial n’est précisé à ce stade.',
          ],
        },
        {
          title: 'Conservation et sécurité',
          body: [
            'L’objectif est de conserver les données personnelles uniquement pendant la durée nécessaire au traitement de la demande et au suivi associé.',
            'Des mesures techniques et organisationnelles adaptées doivent être maintenues pour protéger les informations échangées.',
          ],
        },
        {
          title: 'Droits',
          body: [
            'Les visiteurs peuvent demander l’accès, la rectification ou la suppression de leurs données personnelles en écrivant à contact@rgautoconseil.fr.',
            'Une notice de conformité plus détaillée pourra être ajoutée ensuite si le périmètre du site évolue.',
          ],
        },
      ];

  return (
    <div className="route-page">
      <PageHero {...hero} />

      <section className="content-section">
        <div className="content-shell legal-stack">
          {sections.map((section) => (
            <article className="surface-card gs-scroll-card legal-panel" key={section.title}>
              <SectionLabel>{section.title}</SectionLabel>
              <div className="legal-copy">
                {section.body.map((line) => (
                  <p className="process-copy" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
