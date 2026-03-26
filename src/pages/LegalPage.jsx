import LegalContentPage from '../components/LegalContentPage';
import Seo from '../components/Seo';
import { useSite } from '../context/SiteContext';
import { CONTACT_DETAILS } from '../data/siteConfig';
import { getLegalSeo } from '../data/legalSeo';

const SITE_URL = 'https://rgautoconseil.fr';

export default function LegalPage() {
  const { isEnglish } = useSite();

  const hero = isEnglish
    ? {
        label: 'Legal',
        titleLines: ['Legal', 'notice'],
        copy: 'The legal information applicable to the publication and operation of the RG Auto Conseil website.',
      }
    : {
        label: 'Informations',
        titleLines: ['Mentions', 'légales'],
        copy: 'Les informations légales applicables à l’édition et à l’exploitation du site RG Auto Conseil.',
      };

  const sections = isEnglish
    ? [
        {
          label: 'Publisher',
          title: 'Website publisher',
          paragraphs: [
            'Website name: RG Auto Conseil',
            `Website URL: ${SITE_URL}`,
            'The full legal identity of the publisher must be completed before publication: legal name or company name [TO BE COMPLETED], legal form [TO BE COMPLETED], share capital if applicable [TO BE COMPLETED], registered office [TO BE COMPLETED], SIREN/SIRET [TO BE COMPLETED], VAT number [TO BE COMPLETED], RCS or RM and city [TO BE COMPLETED].',
          ],
        },
        {
          label: 'Publication',
          title: 'Publication director',
          paragraphs: [
            'Publication director: [TO BE COMPLETED]',
            `For any request relating to the website content or operation, you may contact RG Auto Conseil at ${CONTACT_DETAILS.email} or by phone on ${CONTACT_DETAILS.phoneDisplay}.`,
          ],
        },
        {
          label: 'Hosting',
          title: 'Hosting provider',
          paragraphs: [
            'Hosting provider name: [TO BE COMPLETED]',
            'Hosting provider address: [TO BE COMPLETED]',
            'Hosting provider contact details: [TO BE COMPLETED]',
          ],
        },
        {
          label: 'Contact',
          title: 'Direct contact',
          list: [
            `Email: ${CONTACT_DETAILS.email}`,
            `Phone: ${CONTACT_DETAILS.phoneDisplay}`,
            `Service area: ${CONTACT_DETAILS.serviceArea.en}`,
            `Business hours: ${CONTACT_DETAILS.hours.en}`,
          ],
        },
        {
          label: 'Copyright',
          title: 'Intellectual property',
          paragraphs: [
            'All texts, visuals, photographs, graphics, logos, videos, structure, source code and any other element appearing on the website are protected by intellectual property law and remain the exclusive property of their respective holders.',
            'Any reproduction, representation, publication, adaptation or use, in whole or in part, without prior written authorisation is prohibited, except where an exception provided by law applies.',
          ],
        },
        {
          label: 'Liability',
          title: 'Liability',
          paragraphs: [
            'RG Auto Conseil endeavours to provide accurate and up-to-date information on the website. However, the publisher cannot guarantee the completeness, accuracy or constant updating of every item of content.',
            'The user remains solely responsible for the use made of the information available on the website and for verifying that it is suitable for their personal situation.',
          ],
        },
        {
          label: 'Links',
          title: 'Hyperlinks',
          paragraphs: [
            'The website may contain links to third-party websites. RG Auto Conseil does not control those websites and cannot be held liable for their content, privacy policy or availability.',
            'Any hyperlink to the website is subject to prior written authorisation, except in the cases permitted by law.',
          ],
        },
        {
          label: 'Privacy',
          title: 'Personal data and cookies',
          paragraphs: [
            'The terms relating to the collection and processing of personal data are set out in the website privacy policy.',
            'Information regarding cookies and similar technologies is also available in that privacy policy.',
          ],
        },
      ]
    : [
        {
          label: 'Éditeur',
          title: 'Éditeur du site',
          paragraphs: [
            'Nom du site : RG Auto Conseil',
            `URL du site : ${SITE_URL}`,
            'Les informations d’identification complètes de l’éditeur doivent être complétées avant publication : dénomination ou nom complet [À COMPLÉTER], forme juridique [À COMPLÉTER], capital social si applicable [À COMPLÉTER], siège social [À COMPLÉTER], SIREN/SIRET [À COMPLÉTER], numéro de TVA intracommunautaire [À COMPLÉTER], RCS ou RM et ville [À COMPLÉTER].',
          ],
        },
        {
          label: 'Publication',
          title: 'Directeur de la publication',
          paragraphs: [
            'Directeur de la publication : [À COMPLÉTER]',
            `Pour toute question relative au contenu ou au fonctionnement du site, vous pouvez contacter RG Auto Conseil à l’adresse ${CONTACT_DETAILS.email} ou par téléphone au ${CONTACT_DETAILS.phoneDisplay}.`,
          ],
        },
        {
          label: 'Hébergement',
          title: 'Hébergement',
          paragraphs: [
            'Nom de l’hébergeur : [À COMPLÉTER]',
            'Adresse de l’hébergeur : [À COMPLÉTER]',
            'Téléphone ou contact de l’hébergeur : [À COMPLÉTER]',
          ],
        },
        {
          label: 'Contact',
          title: 'Contact direct',
          list: [
            `Email : ${CONTACT_DETAILS.email}`,
            `Téléphone : ${CONTACT_DETAILS.phoneDisplay}`,
            `Zone d’intervention : ${CONTACT_DETAILS.serviceArea.fr}`,
            `Horaires : ${CONTACT_DETAILS.hours.fr}`,
          ],
        },
        {
          label: 'Propriété',
          title: 'Propriété intellectuelle',
          paragraphs: [
            'L’ensemble des textes, visuels, photographies, graphismes, logos, vidéos, éléments de structure, code source et plus généralement tout contenu présent sur le site est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive de ses titulaires respectifs.',
            'Toute reproduction, représentation, publication, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite, sauf exception légale applicable.',
          ],
        },
        {
          label: 'Responsabilité',
          title: 'Responsabilité',
          paragraphs: [
            'RG Auto Conseil s’efforce de mettre à disposition sur le site des informations exactes et à jour. Toutefois, l’éditeur ne peut garantir l’exhaustivité, l’exactitude ou l’actualisation permanente de l’ensemble des contenus.',
            'L’utilisateur demeure seul responsable de l’usage qu’il fait des informations disponibles sur le site et de la vérification de leur adéquation à sa situation personnelle.',
          ],
        },
        {
          label: 'Liens',
          title: 'Liens hypertextes',
          paragraphs: [
            'Le site peut contenir des liens vers des sites tiers. RG Auto Conseil n’exerce aucun contrôle sur ces sites et ne saurait être responsable de leur contenu, de leur politique de confidentialité ou de leur disponibilité.',
            'Tout lien hypertexte vers le présent site est soumis à autorisation écrite préalable, sauf cas autorisé par la loi.',
          ],
        },
        {
          label: 'Données',
          title: 'Données personnelles et cookies',
          paragraphs: [
            'Les modalités relatives à la collecte et au traitement des données personnelles sont détaillées dans la politique de confidentialité du site.',
            'Les informations concernant les cookies et autres traceurs y sont également précisées.',
          ],
        },
      ];

  return (
    <>
      <Seo {...getLegalSeo(isEnglish ? 'en' : 'fr')} lang={isEnglish ? 'en' : 'fr'} />
      <LegalContentPage hero={hero} sectionId="legal-content" sections={sections} />
    </>
  );
}
