import '../styles/legal-page.css';
import LegalContentPage from '../components/LegalContentPage';
import Seo from '../components/Seo';
import { useSite } from '../context/SiteContext';
import { LEGAL_IDENTITY } from '../data/legalIdentity';
import { getLegalSeo } from '../data/legalSeo';

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
        titleLines: ['Mentions', 'legales'],
        copy: "Les informations juridiques applicables a l'edition et a l'exploitation du site RG Auto Conseil.",
      };

  const sections = isEnglish
    ? [
        {
          label: 'Publisher',
          title: 'Website publisher',
          list: [
            `Website name: ${LEGAL_IDENTITY.siteName}`,
            `Website URL: ${LEGAL_IDENTITY.siteUrl}`,
            `Publisher legal identity: ${LEGAL_IDENTITY.publisherName[language]}`,
            `Legal form: ${LEGAL_IDENTITY.legalForm[language]}`,
            `Registered office: ${LEGAL_IDENTITY.registeredOffice[language]}`,
            `SIREN / SIRET: ${LEGAL_IDENTITY.sirenOrSiret[language]}`,
            `VAT number: ${LEGAL_IDENTITY.vatNumber[language]}`,
          ],
        },
        {
          label: 'Publication',
          title: 'Publication director and contact',
          list: [
            `Publication director: ${LEGAL_IDENTITY.publicationDirector[language]}`,
            `Contact email: ${LEGAL_IDENTITY.publicationDirectorEmail[language]}`,
            `Contact phone: ${LEGAL_IDENTITY.publicationDirectorPhone[language]}`,
          ],
        },
        {
          label: 'Hosting',
          title: 'Hosting provider',
          list: [
            `Hosting provider: ${LEGAL_IDENTITY.hostLegalEntity[language]}`,
            `Hosting brand: ${LEGAL_IDENTITY.hostName[language]}`,
            `Hosting provider address: ${LEGAL_IDENTITY.hostAddress[language]}`,
            `Hosting provider phone: ${LEGAL_IDENTITY.hostContact[language]}`,
            `Hosting provider email: ${LEGAL_IDENTITY.hostEmail[language]}`,
            `Registered office: ${LEGAL_IDENTITY.hostRegisteredOffice[language]}`,
            `Commercial registration number: ${LEGAL_IDENTITY.hostRegistrationNumber[language]}`,
            `VAT number: ${LEGAL_IDENTITY.hostVatNumber[language]}`,
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
          label: 'Editeur',
          title: 'Editeur du site',
          list: [
            `Nom du site : ${LEGAL_IDENTITY.siteName}`,
            `URL du site : ${LEGAL_IDENTITY.siteUrl}`,
            `Identite de l'editeur : ${LEGAL_IDENTITY.publisherName[language]}`,
            `Forme juridique : ${LEGAL_IDENTITY.legalForm[language]}`,
            `Adresse du siege : ${LEGAL_IDENTITY.registeredOffice[language]}`,
            `SIREN / SIRET : ${LEGAL_IDENTITY.sirenOrSiret[language]}`,
            `TVA intracommunautaire : ${LEGAL_IDENTITY.vatNumber[language]}`,
          ],
        },
        {
          label: 'Publication',
          title: 'Directeur de la publication et contact',
          list: [
            `Directeur de la publication : ${LEGAL_IDENTITY.publicationDirector[language]}`,
            `Adresse email : ${LEGAL_IDENTITY.publicationDirectorEmail[language]}`,
            `Telephone : ${LEGAL_IDENTITY.publicationDirectorPhone[language]}`,
          ],
        },
        {
          label: 'Hebergement',
          title: 'Hebergeur',
          list: [
            `Hebergeur : ${LEGAL_IDENTITY.hostLegalEntity[language]}`,
            `Marque commerciale : ${LEGAL_IDENTITY.hostName[language]}`,
            `Adresse de l'hebergeur : ${LEGAL_IDENTITY.hostAddress[language]}`,
            `Telephone de l'hebergeur : ${LEGAL_IDENTITY.hostContact[language]}`,
            `Email de l'hebergeur : ${LEGAL_IDENTITY.hostEmail[language]}`,
            `Siege social : ${LEGAL_IDENTITY.hostRegisteredOffice[language]}`,
            `Numero d'organisation : ${LEGAL_IDENTITY.hostRegistrationNumber[language]}`,
            `Numero de TVA : ${LEGAL_IDENTITY.hostVatNumber[language]}`,
          ],
        },
        {
          label: 'Propriete',
          title: 'Propriete intellectuelle',
          paragraphs: [
            "L'ensemble des textes, visuels, photographies, graphismes, logos, videos, code source et plus generalement tout element present sur le site est protege par le droit de la propriete intellectuelle.",
            "Toute reproduction, representation, adaptation ou exploitation, totale ou partielle, sans autorisation ecrite prealable, est interdite sauf disposition legale contraire.",
          ],
        },
        {
          label: 'Responsabilite',
          title: 'Responsabilite',
          paragraphs: [
            "RG Auto Conseil s'efforce de mettre a disposition des informations exactes et a jour. Toutefois, l'editeur ne peut garantir l'exhaustivite ou l'actualisation permanente de tous les contenus.",
            "L'utilisateur demeure seul responsable de l'usage qu'il fait des informations disponibles sur le site.",
          ],
        },
        {
          label: 'Liens',
          title: 'Liens hypertextes',
          paragraphs: [
            'Le site peut contenir des liens vers des sites tiers. RG Auto Conseil ne controle pas ces sites et ne saurait etre responsable de leur contenu ou de leur disponibilite.',
            'Tout lien profond vers le site reste soumis aux regles legales applicables en France.',
          ],
        },
        {
          label: 'Donnees',
          title: 'Donnees personnelles et cookies',
          paragraphs: [
            'Les modalites relatives a la collecte et au traitement des donnees personnelles sont detaillees dans la politique de confidentialite.',
            'Les informations relatives aux cookies et autres traceurs y sont egalement precisees.',
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
