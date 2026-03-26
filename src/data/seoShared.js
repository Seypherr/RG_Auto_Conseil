import { CONTACT_DETAILS, SOCIAL_LINKS } from './siteConfig';

export const SITE_URL = 'https://rgautoconseil.fr';
export const SITE_NAME = 'RG Auto Conseil';

export function getLocaleBranch(content, language) {
  return content[language === 'en' ? 'en' : 'fr'];
}

export function buildAbsoluteUrl(path) {
  return new URL(path, SITE_URL).toString();
}

export function buildOrganizationSchema(language) {
  const areaServed = CONTACT_DETAILS.serviceArea[language === 'en' ? 'en' : 'fr'];

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_DETAILS.email,
    telephone: CONTACT_DETAILS.phoneDisplay,
    areaServed,
    serviceArea: areaServed,
    foundingLocation: areaServed,
    sameAs: SOCIAL_LINKS.filter((item) => item.href).map((item) => item.href),
    description:
      language === 'en'
        ? 'Independent automotive advisory service specialising in vehicle purchase support, pre-purchase inspection and discreet vehicle enhancement.'
        : "Conseil automobile indépendant spécialisé dans l'achat de véhicule, l’inspection avant achat et l’amélioration discrète de véhicules.",
  };
}

export function buildBreadcrumbSchema(language, items) {
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
