import '../styles/legal-page.css';
import LegalContentPage from '../components/LegalContentPage';
import Seo from '../components/Seo';
import { useSite } from '../context/SiteContext';
import { LEGAL_IDENTITY } from '../data/legalIdentity';
import { getPrivacySeo } from '../data/privacySeo';
import { CONTACT_DETAILS } from '../data/siteConfig';

export default function PrivacyPage() {
  const { isEnglish } = useSite();
  const language = isEnglish ? 'en' : 'fr';

  const hero = isEnglish
    ? {
        label: 'Privacy',
        titleLines: ['Privacy', 'policy'],
        copy: 'How RG Auto Conseil handles personal data collected through the website and contact requests.',
      }
    : {
        label: 'Confidentialite',
        titleLines: ['Politique de', 'confidentialite'],
        copy: 'La maniere dont RG Auto Conseil traite les donnees personnelles collectees via le site et les demandes de contact.',
      };

  const sections = isEnglish
    ? [
        {
          label: 'Controller',
          title: 'Data controller',
          list: [
            'The data controller is RG Auto Conseil.',
            `Legal identity: ${LEGAL_IDENTITY.publisherName[language]}`,
            `Legal form: ${LEGAL_IDENTITY.legalForm[language]}`,
            `Registered office: ${LEGAL_IDENTITY.registeredOffice[language]}`,
            `SIREN / SIRET: ${LEGAL_IDENTITY.sirenOrSiret[language]}`,
            `VAT number: ${LEGAL_IDENTITY.vatNumber[language]}`,
            `Contact email: ${CONTACT_DETAILS.email}`,
            `Contact phone number: ${CONTACT_DETAILS.phoneDisplay}`,
          ],
        },
        {
          label: 'Collection',
          title: 'Data collected',
          paragraphs: [
            'When you use the website forms, the following data may be collected: name, email address, phone number, request type, vehicle information and the content of your message.',
            'Technical data may also be processed to ensure the website works properly and remains secure, including IP address, technical logs and the language preference stored locally on your device.',
            'When the embedded Google Maps module is displayed, Google may also collect browsing data under its own privacy policy.',
          ],
        },
        {
          label: 'Purposes',
          title: 'Purposes and legal bases',
          paragraphs: [
            'Personal data is processed in order to respond to contact requests, qualify the need expressed by the visitor and organise a pre-contractual relationship related to RG Auto Conseil services.',
            'The legal bases relied upon are pre-contractual measures taken at your request, the legitimate interest of the website operator for website security and day-to-day operation, and consent whenever a tracker requires prior consent.',
          ],
        },
        {
          label: 'Recipients',
          title: 'Recipients of the data',
          paragraphs: [
            'Data is intended only for persons authorised within RG Auto Conseil and, where strictly necessary, for technical service providers involved in hosting, maintenance or message routing.',
            'At the date of this policy, no online payment service, customer account area, newsletter service, live chat service or advertising pixel has been identified on the website.',
          ],
          list: ['Internal recipient: RG Auto Conseil', `Hosting provider: ${LEGAL_IDENTITY.hostLegalEntity[language]}`, 'Integrated mapping service: Google Maps'],
        },
        {
          label: 'Retention',
          title: 'Retention periods',
          paragraphs: [
            'Data submitted through contact forms is kept for the time necessary to process the request, then may be archived for up to three years from the last contact when the request does not result in a contractual relationship.',
            'The language preference stored locally remains on the device until it is changed by the user or deleted through the browser settings.',
            `Technical logs, where applicable, are kept for the period strictly necessary for security and service continuity, subject to the retention rules applied by the hosting provider ${LEGAL_IDENTITY.hostName[language]}.`,
          ],
        },
        {
          label: 'Cookies',
          title: 'Cookies and trackers',
          paragraphs: [
            'The website currently uses a functional local storage mechanism to remember the selected language.',
            'The integrated Google Maps module may place cookies or collect browsing data when displayed. If a consent banner is implemented on the website, it must allow you to accept or refuse any tracker requiring prior consent.',
            'No audience measurement tool or marketing tracker has been identified in the current website version.',
          ],
        },
        {
          label: 'Transfers',
          title: 'Transfers outside the European Union',
          paragraphs: [
            'The use of Google Maps may involve processing outside the European Union. Where this happens, the provider is responsible for implementing the safeguards required by applicable regulations.',
            'No other transfer outside the European Union has been identified in the current website version, subject to the hosting configuration and tools actually used in production.',
          ],
        },
        {
          label: 'Security',
          title: 'Data security',
          paragraphs: [
            'RG Auto Conseil implements appropriate technical and organisational measures to limit unauthorised access, loss, alteration or disclosure of personal data.',
            'These measures must remain consistent with the actual production hosting setup, maintenance procedures and messaging tools used when the website goes live.',
          ],
        },
        {
          label: 'Rights',
          title: 'Your rights',
          paragraphs: [
            'You may request access to your personal data, rectification, erasure, restriction of processing and opposition where applicable, in accordance with the applicable rules.',
            'Where processing is based on consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before the withdrawal.',
          ],
        },
        {
          label: 'Contact',
          title: 'How to exercise your rights',
          paragraphs: [
            `To exercise your rights or ask a question about the processing of your personal data, you can write to ${CONTACT_DETAILS.email}.`,
            'If, after contacting RG Auto Conseil, you believe that your rights are not being respected, you may lodge a complaint with the CNIL.',
            'This policy may be updated at any time to reflect legal, technical or operational changes affecting the website.',
          ],
        },
      ]
    : [
        {
          label: 'Responsable',
          title: 'Responsable du traitement',
          list: [
            'Le responsable du traitement est RG Auto Conseil.',
            `Identite juridique : ${LEGAL_IDENTITY.publisherName[language]}`,
            `Forme juridique : ${LEGAL_IDENTITY.legalForm[language]}`,
            `Siege social : ${LEGAL_IDENTITY.registeredOffice[language]}`,
            `SIREN / SIRET : ${LEGAL_IDENTITY.sirenOrSiret[language]}`,
            `TVA intracommunautaire : ${LEGAL_IDENTITY.vatNumber[language]}`,
            `Adresse email de contact : ${CONTACT_DETAILS.email}`,
            `Telephone : ${CONTACT_DETAILS.phoneDisplay}`,
          ],
        },
        {
          label: 'Collecte',
          title: 'Donnees collectees',
          paragraphs: [
            'Lorsque vous utilisez les formulaires du site, les donnees suivantes peuvent etre collectees : nom, adresse email, numero de telephone, type de demande, informations sur le vehicule concerne et contenu libre du message.',
            "Des donnees techniques peuvent egalement etre traitees afin d'assurer le bon fonctionnement et la securite du site, notamment l'adresse IP, les journaux techniques et la preference de langue stockee localement sur votre terminal.",
            "Lors de l'affichage du module Google Maps integre, Google peut egalement collecter des donnees de navigation selon sa propre politique de confidentialite.",
          ],
        },
        {
          label: 'Finalites',
          title: 'Finalites et bases legales',
          paragraphs: [
            'Les donnees personnelles sont traitees afin de repondre aux demandes de contact, qualifier le besoin exprime par le visiteur et organiser une relation precontractuelle liee aux prestations de RG Auto Conseil.',
            "Les bases legales utilisees sont les mesures precontractuelles prises a votre demande, l'interet legitime de l'exploitant pour la securite et le bon fonctionnement du site, et le consentement lorsque l'utilisation d'un traceur y est soumise.",
          ],
        },
        {
          label: 'Destinataires',
          title: 'Destinataires des donnees',
          paragraphs: [
            "Les donnees sont destinees uniquement aux personnes habilitees au sein de RG Auto Conseil et, lorsque cela est strictement necessaire, aux prestataires techniques intervenant dans l'hebergement, la maintenance ou l'acheminement des messages.",
            "A la date de redaction de cette politique, aucun service de paiement en ligne, espace client, newsletter, chat en direct ou pixel publicitaire n'a ete identifie sur le site.",
          ],
          list: ['Destinataire interne : RG Auto Conseil', `Prestataire d'hebergement : ${LEGAL_IDENTITY.hostLegalEntity[language]}`, 'Service de cartographie integre : Google Maps'],
        },
        {
          label: 'Conservation',
          title: 'Durees de conservation',
          paragraphs: [
            "Les donnees transmises via les formulaires de contact sont conservees pendant le temps necessaire au traitement de la demande, puis peuvent etre archivees pendant une duree maximale de trois ans a compter du dernier contact lorsque la demande n'aboutit pas a une relation contractuelle.",
            "La preference de langue stockee localement est conservee sur le terminal jusqu'a sa modification par l'utilisateur ou sa suppression via les reglages du navigateur.",
            `Les journaux techniques, lorsqu'ils existent, sont conserves pendant la duree strictement necessaire a la securite et a la continuite du service, sous reserve des regles appliquees par l'hebergeur ${LEGAL_IDENTITY.hostName[language]}.`,
          ],
        },
        {
          label: 'Cookies',
          title: 'Cookies et traceurs',
          paragraphs: [
            'Le site utilise actuellement un stockage local a finalite fonctionnelle afin de memoriser la langue selectionnee.',
            "Le module Google Maps integre est susceptible de deposer des cookies ou de collecter des donnees de navigation lors de son affichage. Si un bandeau de gestion du consentement est mis en place sur le site, il doit permettre d'accepter ou de refuser les traceurs soumis a consentement prealable.",
            "Aucun outil de mesure d'audience ni traceur marketing n'a ete identifie dans la version actuelle du site.",
          ],
        },
        {
          label: 'Transferts',
          title: 'Transferts hors Union europeenne',
          paragraphs: [
            "L'utilisation de Google Maps peut impliquer des traitements en dehors de l'Union europeenne. Le cas echeant, il appartient au prestataire concerne de mettre en oeuvre les garanties prevues par la reglementation applicable.",
            "Aucun autre transfert hors Union europeenne n'a ete identifie dans la version actuelle du site, sous reserve de la configuration d'hebergement et des outils effectivement utilises en production.",
          ],
        },
        {
          label: 'Securite',
          title: 'Securite des donnees',
          paragraphs: [
            "RG Auto Conseil met en oeuvre des mesures techniques et organisationnelles adaptees afin de limiter les risques d'acces non autorise, de perte, d'alteration ou de divulgation des donnees personnelles.",
            "Ces mesures doivent rester coherentes avec la configuration reelle d'hebergement, de maintenance et d'acheminement des messages utilisee au moment de la mise en ligne.",
          ],
        },
        {
          label: 'Droits',
          title: 'Vos droits',
          paragraphs: [
            "Vous disposez, dans les conditions prevues par la reglementation applicable, d'un droit d'acces, de rectification, d'effacement, de limitation du traitement et d'opposition lorsque celui-ci est applicable.",
            'Lorsque le traitement repose sur votre consentement, vous pouvez le retirer a tout moment sans remettre en cause la licéité du traitement effectue avant ce retrait.',
          ],
        },
        {
          label: 'Exercice',
          title: 'Exercer vos droits',
          paragraphs: [
            `Pour exercer vos droits ou poser une question sur le traitement de vos donnees personnelles, vous pouvez ecrire a ${CONTACT_DETAILS.email}.`,
            'Si, apres avoir contacte RG Auto Conseil, vous estimez que vos droits ne sont pas respectes, vous pouvez adresser une reclamation a la CNIL.',
            "La presente politique peut etre mise a jour a tout moment afin de tenir compte d'evolutions legales, techniques ou operationnelles affectant le site.",
          ],
        },
      ];

  return (
    <>
      <Seo {...getPrivacySeo(language)} lang={language} />
      <LegalContentPage hero={hero} sectionId="privacy-content" sections={sections} />
    </>
  );
}
