import { CONTACT_DETAILS, SOCIAL_LINKS } from './siteConfig';
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

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_DETAILS.email,
    telephone: CONTACT_DETAILS.phoneDisplay,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: areaServed,
    },
    serviceType: isEnglish
      ? ['Pre-purchase advice', 'Vehicle inspection', 'Vehicle sourcing', 'Discreet vehicle enhancement']
      : ['Conseil avant achat', 'Inspection avant achat', 'Recherche de véhicule', 'Amélioration discrète de véhicule'],
    sameAs: SOCIAL_LINKS.filter((item) => item.href).map((item) => item.href),
    availableLanguage: isEnglish ? ['English', 'French'] : ['Français', 'English'],
    description: isEnglish
      ? 'Independent automotive advisory service specialising in vehicle purchase support, pre-purchase inspection and discreet vehicle enhancement.'
      : "Conseil automobile indépendant spécialisé dans l'achat de véhicule, l'inspection avant achat et l'amélioration discrète de véhicules.",
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
