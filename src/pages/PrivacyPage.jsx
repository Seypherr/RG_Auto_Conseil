import LegalContentPage from '../components/LegalContentPage';
import Seo from '../components/Seo';
import { useSite } from '../context/SiteContext';
import { CONTACT_DETAILS } from '../data/siteConfig';
import { getPrivacySeo } from '../data/privacySeo';

const SITE_URL = 'https://rgautoconseil.fr';

export default function PrivacyPage() {
  const { isEnglish } = useSite();

  const hero = isEnglish
    ? {
        label: 'Privacy',
        titleLines: ['Privacy', 'policy'],
        copy: 'How RG Auto Conseil handles personal data collected through the website and contact requests.',
      }
    : {
        label: 'Confidentialité',
        titleLines: ['Politique de', 'confidentialité'],
        copy: 'La manière dont RG Auto Conseil traite les données personnelles collectées via le site et les demandes de contact.',
      };

  const sections = isEnglish
    ? [
        {
          label: 'Introduction',
          title: 'About this policy',
          paragraphs: [
            `This privacy policy explains how RG Auto Conseil processes personal data collected through the website ${SITE_URL}.`,
            'It applies to data submitted through contact forms, data required for the technical operation of the website, and data that may be collected when third-party content is displayed.',
          ],
        },
        {
          label: 'Controller',
          title: 'Data controller',
          paragraphs: [
            'The controller for personal data processed through the website is RG Auto Conseil.',
            'Legal identity details of the business must be completed before publication: legal name [TO BE COMPLETED], legal form [TO BE COMPLETED], registered office [TO BE COMPLETED], SIREN/SIRET [TO BE COMPLETED].',
            `Contact email: ${CONTACT_DETAILS.email}`,
            `Contact phone number: ${CONTACT_DETAILS.phoneDisplay}`,
          ],
        },
        {
          label: 'Collection',
          title: 'Data collected',
          paragraphs: [
            'When you use the website forms, the following data may be collected: surname and first name or identity details entered in the form, email address, phone number, request type, vehicle information and the content of your message.',
            'Technical data may also be processed to ensure the website works properly and remains secure, including IP address, technical logs and the language preference stored locally on your device.',
            'When the integrated Google Maps module is displayed, Google may also collect browsing data under its own privacy policy.',
          ],
        },
        {
          label: 'Purposes',
          title: 'Purposes and legal bases',
          paragraphs: [
            'Personal data is processed in order to respond to contact requests, qualify the need expressed by the visitor, organise a pre-contractual relationship and, more broadly, manage commercial exchanges related to RG Auto Conseil services.',
            'The legal bases relied upon are: pre-contractual measures taken at your request when you contact RG Auto Conseil, the legitimate interest of the website operator for website security and day-to-day operation, and consent whenever a tracker requires prior consent.',
          ],
        },
        {
          label: 'Recipients',
          title: 'Recipients of the data',
          paragraphs: [
            'Data is intended only for persons authorised within RG Auto Conseil and, where strictly necessary, for technical service providers involved in hosting, maintenance or message routing.',
            'At the date of this policy, no online payment service, customer account area, newsletter service, chat service or advertising pixel has been identified on the website.',
          ],
          list: ['Internal recipient: RG Auto Conseil', 'Hosting provider: [TO BE COMPLETED]', 'Integrated mapping service: Google Maps'],
        },
        {
          label: 'Retention',
          title: 'Retention periods',
          paragraphs: [
            'Data submitted through contact forms is kept for the time necessary to process the request, then may be archived for up to three years from the last contact when the request does not result in a contractual relationship.',
            'The language preference stored locally remains on the device until it is changed by the user or deleted through the browser settings.',
            'Technical logs, where applicable, are kept for the period strictly necessary for security and service continuity, subject to the retention rules applied by the hosting provider [TO BE COMPLETED].',
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
          label: 'Rights',
          title: 'Your rights',
          paragraphs: [
            'You may request access to your personal data, rectification, erasure, restriction of processing, object to processing where applicable, and define instructions for the handling of your data after your death, in accordance with the applicable rules.',
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
          label: 'Introduction',
          title: 'À propos de cette politique',
          paragraphs: [
            `La présente politique de confidentialité explique comment RG Auto Conseil traite les données personnelles collectées via le site ${SITE_URL}.`,
            'Elle s’applique aux données transmises par les formulaires de contact, aux données nécessaires au fonctionnement technique du site et aux éventuelles données collectées lors de l’affichage de contenus tiers.',
          ],
        },
        {
          label: 'Responsable',
          title: 'Responsable du traitement',
          paragraphs: [
            'Le responsable du traitement des données personnelles collectées via le site est RG Auto Conseil.',
            'Les informations d’identification juridique de l’exploitant doivent être complétées avant publication : dénomination ou nom complet [À COMPLÉTER], forme juridique [À COMPLÉTER], siège social [À COMPLÉTER], SIREN/SIRET [À COMPLÉTER].',
            `Adresse email de contact : ${CONTACT_DETAILS.email}`,
            `Téléphone : ${CONTACT_DETAILS.phoneDisplay}`,
          ],
        },
        {
          label: 'Collecte',
          title: 'Données collectées',
          paragraphs: [
            'Lorsque vous utilisez les formulaires du site, les données suivantes peuvent être collectées : identité ou nom renseigné, adresse email, numéro de téléphone, type de demande, informations sur le véhicule concerné et contenu libre du message.',
            'Des données techniques peuvent également être traitées afin d’assurer le bon fonctionnement et la sécurité du site, notamment l’adresse IP, les journaux techniques et la préférence de langue stockée localement sur votre terminal.',
            'Lors de l’affichage du module Google Maps intégré, Google peut également collecter des données de navigation selon sa propre politique de confidentialité.',
          ],
        },
        {
          label: 'Finalités',
          title: 'Finalités et bases légales',
          paragraphs: [
            'Les données personnelles sont traitées afin de répondre aux demandes de contact, qualifier le besoin exprimé par le visiteur, organiser une relation précontractuelle et, plus largement, gérer les échanges commerciaux liés aux prestations de RG Auto Conseil.',
            'Les bases légales utilisées sont : l’exécution de mesures précontractuelles prises à votre demande lorsque vous contactez RG Auto Conseil, l’intérêt légitime de l’exploitant pour la sécurité et le bon fonctionnement du site, et le consentement lorsque l’utilisation d’un traceur y est soumise.',
          ],
        },
        {
          label: 'Destinataires',
          title: 'Destinataires des données',
          paragraphs: [
            'Les données sont destinées uniquement aux personnes habilitées au sein de RG Auto Conseil et, lorsque cela est strictement nécessaire, aux prestataires techniques intervenant dans l’hébergement, la maintenance ou l’acheminement des messages.',
            'À la date de rédaction de cette politique, aucun service de paiement en ligne, espace client, newsletter, chat en direct ou pixel publicitaire n’a été identifié sur le site.',
          ],
          list: ['Destinataire interne : RG Auto Conseil', 'Prestataire d’hébergement : [À COMPLÉTER]', 'Service de cartographie intégré : Google Maps'],
        },
        {
          label: 'Conservation',
          title: 'Durées de conservation',
          paragraphs: [
            'Les données transmises via les formulaires de contact sont conservées pendant le temps nécessaire au traitement de la demande, puis peuvent être archivées pendant une durée maximale de trois ans à compter du dernier contact lorsque la demande n’aboutit pas à une relation contractuelle.',
            'La préférence de langue stockée localement est conservée sur le terminal jusqu’à sa modification par l’utilisateur ou sa suppression via les réglages du navigateur.',
            'Les journaux techniques, lorsqu’ils existent, sont conservés pendant la durée strictement nécessaire à la sécurité et à la continuité du service, sous réserve des règles appliquées par l’hébergeur [À COMPLÉTER].',
          ],
        },
        {
          label: 'Cookies',
          title: 'Cookies et traceurs',
          paragraphs: [
            'Le site utilise actuellement un stockage local à finalité fonctionnelle afin de mémoriser la langue sélectionnée.',
            'Le module Google Maps intégré est susceptible de déposer des cookies ou de collecter des données de navigation lors de son affichage. Si un bandeau de gestion du consentement est mis en place sur le site, il doit permettre d’accepter ou de refuser les traceurs soumis à consentement préalable.',
            'Aucun outil de mesure d’audience ni traceur marketing n’a été identifié dans la version actuelle du site.',
          ],
        },
        {
          label: 'Transferts',
          title: 'Transferts hors Union européenne',
          paragraphs: [
            'L’utilisation de Google Maps peut impliquer des traitements en dehors de l’Union européenne. Le cas échéant, il appartient au prestataire concerné de mettre en œuvre les garanties prévues par la réglementation applicable.',
            'Aucun autre transfert hors Union européenne n’a été identifié dans la version actuelle du site, sous réserve de la configuration d’hébergement et des outils effectivement utilisés en production.',
          ],
        },
        {
          label: 'Droits',
          title: 'Vos droits',
          paragraphs: [
            'Vous disposez, dans les conditions prévues par la réglementation applicable, d’un droit d’accès, de rectification, d’effacement, de limitation du traitement, d’opposition lorsque celui-ci est fondé sur l’intérêt légitime, ainsi que du droit de définir des directives relatives au sort de vos données après votre décès.',
            'Lorsque le traitement repose sur votre consentement, vous pouvez le retirer à tout moment sans remettre en cause la licéité du traitement effectué avant ce retrait.',
          ],
        },
        {
          label: 'Exercice',
          title: 'Exercer vos droits',
          paragraphs: [
            `Pour exercer vos droits ou poser une question sur le traitement de vos données personnelles, vous pouvez écrire à ${CONTACT_DETAILS.email}.`,
            'Si, après avoir contacté RG Auto Conseil, vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.',
            'La présente politique peut être mise à jour à tout moment afin de tenir compte d’évolutions légales, techniques ou opérationnelles affectant le site.',
          ],
        },
      ];

  return (
    <>
      <Seo {...getPrivacySeo(isEnglish ? 'en' : 'fr')} lang={isEnglish ? 'en' : 'fr'} />
      <LegalContentPage hero={hero} sectionId="privacy-content" sections={sections} />
    </>
  );
}
