import '../styles/legal-page.css';
import LegalContentPage from '../components/LegalContentPage';
import Seo from '../components/Seo';
import { useSite } from '../context/SiteContext';
import { LEGAL_IDENTITY } from '../data/legalIdentity';
import { getLegalSeo } from '../data/legalSeo';
import { CONTACT_DETAILS } from '../data/siteConfig';

export default function LegalPage() {
  const { isEnglish } = useSite();
  const language = isEnglish ? 'en' : 'fr';

  const hero = isEnglish
    ? {
        label: 'Legal',
        titleLines: ['Legal', 'notice'],
        copy: 'The legal information governing the publication and operation of the RG Auto Conseil website.',
      }
    : {
        label: 'Informations',
        titleLines: ['Mentions', 'légales'],
        copy: "Les informations juridiques applicables à l'édition et à l'exploitation du site RG Auto Conseil.",
      };

  const sections = isEnglish
    ? [
        {
          label: 'Go-live',
          title: 'Information to complete before publishing',
          paragraphs: [
            'Replace every placeholder below with the exact legal information of the publisher before the final publication of the website.',
          ],
          list: [
            'Publisher identity or company name',
            'Legal form and registered office',
            'SIREN / SIRET and registration details',
            'VAT number if applicable',
            'Publication director',
            'Hosting provider details',
          ],
        },
        {
          label: 'Publisher',
          title: 'Website publisher',
          list: [
            `Website name: ${LEGAL_IDENTITY.siteName}`,
            `Website URL: ${LEGAL_IDENTITY.siteUrl}`,
            `Publisher legal identity: ${LEGAL_IDENTITY.publisherName[language]}`,
            `Legal form: ${LEGAL_IDENTITY.legalForm[language]}`,
            `Share capital: ${LEGAL_IDENTITY.shareCapital[language]}`,
            `Registered office: ${LEGAL_IDENTITY.registeredOffice[language]}`,
            `SIREN / SIRET: ${LEGAL_IDENTITY.sirenOrSiret[language]}`,
            `VAT number: ${LEGAL_IDENTITY.vatNumber[language]}`,
            `RCS / RM and city: ${LEGAL_IDENTITY.tradeRegister[language]}`,
          ],
        },
        {
          label: 'Publication',
          title: 'Publication director and contact',
          list: [
            `Publication director: ${LEGAL_IDENTITY.publicationDirector[language]}`,
            `Contact email: ${CONTACT_DETAILS.email}`,
            `Contact phone: ${CONTACT_DETAILS.phoneDisplay}`,
          ],
        },
        {
          label: 'Hosting',
          title: 'Hosting provider',
          list: [
            `Hosting provider name: ${LEGAL_IDENTITY.hostName[language]}`,
            `Hosting provider address: ${LEGAL_IDENTITY.hostAddress[language]}`,
            `Hosting provider contact details: ${LEGAL_IDENTITY.hostContact[language]}`,
          ],
        },
        {
          label: 'Property',
          title: 'Intellectual property',
          paragraphs: [
            'All texts, visuals, photographs, graphics, logos, videos, source code and, more broadly, all content published on the website are protected by intellectual property law.',
            'Any reproduction, representation, adaptation or use, in whole or in part, without prior written authorisation is prohibited except where permitted by law.',
          ],
        },
        {
          label: 'Liability',
          title: 'Liability',
          paragraphs: [
            'RG Auto Conseil endeavours to provide accurate and up-to-date information. However, the publisher cannot guarantee the completeness or constant updating of every item of content.',
            'Users remain solely responsible for the use they make of the information available on the website.',
          ],
        },
        {
          label: 'Links',
          title: 'Hyperlinks',
          paragraphs: [
            'The website may contain links to third-party websites. RG Auto Conseil does not control those websites and cannot be held liable for their content or availability.',
            'Any deep link to the website remains subject to the legal rules applicable in France.',
          ],
        },
        {
          label: 'Privacy',
          title: 'Personal data and cookies',
          paragraphs: [
            'The rules relating to the collection and processing of personal data are detailed in the privacy policy.',
            'Information concerning cookies and similar technologies is also available in that policy.',
          ],
        },
      ]
    : [
        {
          label: 'Pré-publication',
          title: 'Champs à renseigner avant mise en ligne',
          paragraphs: [
            "Avant la publication définitive du site, remplacez tous les champs ci-dessous par les informations juridiques exactes de l'éditeur et de l'hébergeur.",
          ],
          list: [
            "Identité complète de l'éditeur ou raison sociale",
            'Forme juridique et adresse du siège',
            'SIREN / SIRET et immatriculation',
            'Numéro de TVA intracommunautaire si applicable',
            'Nom du directeur de la publication',
            "Coordonnées complètes de l'hébergeur",
          ],
        },
        {
          label: 'Éditeur',
          title: 'Éditeur du site',
          list: [
            `Nom du site : ${LEGAL_IDENTITY.siteName}`,
            `URL du site : ${LEGAL_IDENTITY.siteUrl}`,
            `Identité de l'éditeur : ${LEGAL_IDENTITY.publisherName[language]}`,
            `Forme juridique : ${LEGAL_IDENTITY.legalForm[language]}`,
            `Capital social : ${LEGAL_IDENTITY.shareCapital[language]}`,
            `Adresse du siège : ${LEGAL_IDENTITY.registeredOffice[language]}`,
            `SIREN / SIRET : ${LEGAL_IDENTITY.sirenOrSiret[language]}`,
            `TVA intracommunautaire : ${LEGAL_IDENTITY.vatNumber[language]}`,
            `RCS / RM et ville : ${LEGAL_IDENTITY.tradeRegister[language]}`,
          ],
        },
        {
          label: 'Publication',
          title: 'Directeur de la publication et contact',
          list: [
            `Directeur de la publication : ${LEGAL_IDENTITY.publicationDirector[language]}`,
            `Adresse email : ${CONTACT_DETAILS.email}`,
            `Téléphone : ${CONTACT_DETAILS.phoneDisplay}`,
          ],
        },
        {
          label: 'Hébergement',
          title: 'Hébergeur',
          list: [
            `Nom de l'hébergeur : ${LEGAL_IDENTITY.hostName[language]}`,
            `Adresse de l'hébergeur : ${LEGAL_IDENTITY.hostAddress[language]}`,
            `Téléphone ou contact de l'hébergeur : ${LEGAL_IDENTITY.hostContact[language]}`,
          ],
        },
        {
          label: 'Propriété',
          title: 'Propriété intellectuelle',
          paragraphs: [
            "L'ensemble des textes, visuels, photographies, graphismes, logos, vidéos, code source et plus généralement tout élément présent sur le site est protégé par le droit de la propriété intellectuelle.",
            'Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite sauf disposition légale contraire.',
          ],
        },
        {
          label: 'Responsabilité',
          title: 'Responsabilité',
          paragraphs: [
            "RG Auto Conseil s'efforce de mettre à disposition des informations exactes et à jour. Toutefois, l'éditeur ne peut garantir l'exhaustivité ou l'actualisation permanente de tous les contenus.",
            "L'utilisateur demeure seul responsable de l'usage qu'il fait des informations disponibles sur le site.",
          ],
        },
        {
          label: 'Liens',
          title: 'Liens hypertextes',
          paragraphs: [
            'Le site peut contenir des liens vers des sites tiers. RG Auto Conseil ne contrôle pas ces sites et ne saurait être responsable de leur contenu ou de leur disponibilité.',
            'Tout lien profond vers le site reste soumis aux règles légales applicables en France.',
          ],
        },
        {
          label: 'Données',
          title: 'Données personnelles et cookies',
          paragraphs: [
            'Les modalités relatives à la collecte et au traitement des données personnelles sont détaillées dans la politique de confidentialité.',
            'Les informations relatives aux cookies et autres traceurs y sont également précisées.',
          ],
        },
      ];

  return (
    <>
      <Seo {...getLegalSeo(language)} lang={language} />
      <LegalContentPage hero={hero} sectionId="legal-content" sections={sections} />
    </>
  );
}
