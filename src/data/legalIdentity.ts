const FR_REQUIRED = '[À COMPLÉTER AVANT MISE EN LIGNE]';
const FR_OPTIONAL = '[À COMPLÉTER OU INDIQUER "NON APPLICABLE"]';
const FR_DPO = '[À COMPLÉTER SI UN DPO OU UN CONTACT VIE PRIVÉE EST DÉSIGNÉ]';

const EN_REQUIRED = '[TO BE COMPLETED BEFORE GO-LIVE]';
const EN_OPTIONAL = '[TO BE COMPLETED OR MARKED "NOT APPLICABLE"]';
const EN_DPO = '[TO BE COMPLETED IF A DPO OR PRIVACY CONTACT IS APPOINTED]';

export const LEGAL_IDENTITY = {
  siteName: 'RG Auto Conseil',
  siteUrl: 'https://rgautoconseil.fr',
  publisherName: {
    fr: FR_REQUIRED,
    en: EN_REQUIRED,
  },
  legalForm: {
    fr: FR_REQUIRED,
    en: EN_REQUIRED,
  },
  shareCapital: {
    fr: FR_OPTIONAL,
    en: EN_OPTIONAL,
  },
  registeredOffice: {
    fr: FR_REQUIRED,
    en: EN_REQUIRED,
  },
  sirenOrSiret: {
    fr: FR_REQUIRED,
    en: EN_REQUIRED,
  },
  vatNumber: {
    fr: FR_OPTIONAL,
    en: EN_OPTIONAL,
  },
  tradeRegister: {
    fr: FR_OPTIONAL,
    en: EN_OPTIONAL,
  },
  publicationDirector: {
    fr: FR_REQUIRED,
    en: EN_REQUIRED,
  },
  hostName: {
    fr: FR_REQUIRED,
    en: EN_REQUIRED,
  },
  hostAddress: {
    fr: FR_REQUIRED,
    en: EN_REQUIRED,
  },
  hostContact: {
    fr: FR_REQUIRED,
    en: EN_REQUIRED,
  },
  privacyContact: {
    fr: FR_DPO,
    en: EN_DPO,
  },
};
