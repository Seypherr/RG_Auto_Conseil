import { CONTACT_DETAILS, SOCIAL_LINKS, BRAND_ASSETS } from './siteConfig';
import { LEGAL_IDENTITY } from './legalIdentity';
import resolveAssetUrl from '../utils/resolveAssetUrl';

export const SITE_URL = 'https://rgautoconseil.fr';
export const SITE_NAME = 'RG Auto Conseil';

export function getLocaleBranch<T>(content: { fr: T; en: T }, language: string): T {
  return content[language === 'en' ? 'en' : 'fr'];
}

export function buildAbsoluteUrl(value: unknown) {
  const resolvedValue = resolveAssetUrl(value);

  if (!resolvedValue) {
    return undefined;
  }

  return new URL(resolvedValue, SITE_URL).toString();
}

export function buildOrganizationSchema(language: string) {
  const isEnglish = language === 'en';
  const areaServed = CONTACT_DETAILS.serviceArea[isEnglish ? 'en' : 'fr'];
  const locality = LEGAL_IDENTITY.registeredOffice[isEnglish ? 'en' : 'fr'];
  const logoUrl = buildAbsoluteUrl(BRAND_ASSETS.logo);
  const geo = {
    '@type': 'GeoCoordinates',
    latitude: 43.4539,
    longitude: 6.4272,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: logoUrl,
    image: logoUrl,
    email: CONTACT_DETAILS.email,
    telephone: CONTACT_DETAILS.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      addressLocality: locality,
      addressRegion: areaServed,
      addressCountry: 'FR',
    },
    geo,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: areaServed,
    },
    serviceType: isEnglish
      ? ['Pre-purchase advice', 'Vehicle inspection', 'Vehicle sourcing', 'Discreet vehicle enhancement']
      : ['Conseil avant achat', 'Inspection avant achat', 'Recherche de vehicule', 'Amelioration discrete de vehicule'],
    sameAs: SOCIAL_LINKS.filter((item) => item.href).map((item) => item.href),
    availableLanguage: isEnglish ? ['English', 'French'] : ['Francais', 'English'],
    description: isEnglish
      ? "Independent automotive advisory service specialising in used car purchase support, pre-purchase inspection, equipment installation and discreet vehicle enhancement in Provence-Alpes-Cote d'Azur."
      : "Conseil automobile independant specialise dans l'achat de voiture d'occasion, l'inspection avant achat, le montage d'equipements et l'amelioration discrete de vehicules en Provence-Alpes-Cote d'Azur.",
  };
}

export function buildBreadcrumbSchema(language: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path),
    })),
  };
}
