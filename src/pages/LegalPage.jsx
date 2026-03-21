import PageHero from '../components/PageHero';
import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';

export default function LegalPage() {
  const { isEnglish } = useSite();

  const hero = isEnglish
    ? {
        label: 'Legal notice',
        titleLines: ['Legal', 'notice'],
        copy: 'The legal information currently available for RG Auto Conseil, presented in a clean and readable layout.',
      }
    : {
        label: 'Mentions légales',
        titleLines: ['Mentions', 'légales'],
        copy: 'Les informations légales actuellement disponibles pour RG Auto Conseil, dans une mise en page claire et lisible.',
      };

  const sections = isEnglish
    ? [
        {
          title: 'Publisher',
          body: [
            'RG Auto Conseil',
            'Independent automotive advisory business represented by Gaëtan Roblin.',
            'Email: contact@rgautoconseil.fr',
            'Phone: 06 63 99 07 20',
            'Website: rgautoconseil.fr',
          ],
        },
        {
          title: 'Business scope',
          body: [
            'Pre-purchase advice, vehicle inspection, listing analysis, sourcing support, negotiation assistance, equipment fitting and vehicle optimisation.',
            'Main service area: PACA region.',
          ],
        },
        {
          title: 'Hosting',
          body: ['Hosting provider information was not provided in the source questionnaire and should be completed once available.'],
        },
        {
          title: 'Intellectual property',
          body: [
            'The site structure, visual identity and editorial content remain protected by applicable intellectual property rules.',
            'Any reproduction or reuse should be authorised beforehand.',
          ],
        },
      ]
    : [
        {
          title: 'Éditeur',
          body: [
            'RG Auto Conseil',
            'Activité de conseil automobile indépendant représentée par Gaëtan Roblin.',
            'Email : contact@rgautoconseil.fr',
            'Téléphone : 06 63 99 07 20',
            'Site : rgautoconseil.fr',
          ],
        },
        {
          title: 'Champ d’activité',
          body: [
            'Conseil avant achat, inspection de véhicule, analyse d’annonce, aide à la recherche, négociation, montage d’équipements et optimisation.',
            'Zone principale d’intervention : région PACA.',
          ],
        },
        {
          title: 'Hébergement',
          body: ['Les informations d’hébergement n’ont pas été fournies dans le questionnaire source et devront être complétées dès qu’elles seront disponibles.'],
        },
        {
          title: 'Propriété intellectuelle',
          body: [
            'La structure du site, l’identité visuelle et les contenus éditoriaux restent protégés par les règles applicables en matière de propriété intellectuelle.',
            'Toute reproduction ou réutilisation doit faire l’objet d’une autorisation préalable.',
          ],
        },
      ];

  return (
    <div className="route-page">
      <PageHero {...hero} />

      <section className="content-section" id="legal-content">
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
