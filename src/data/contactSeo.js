import { CONTACT_DETAILS } from './siteConfig';
import { buildBreadcrumbSchema, SITE_URL } from './seoShared';

export function getContactSeo(language) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish ? 'Contact RG Auto Conseil, request automotive advice' : 'Contact RG Auto Conseil, demande de conseil automobile',
    description: isEnglish
      ? 'Contact RG Auto Conseil for purchase advice, vehicle inspection, sourcing or discreet automotive improvement in the PACA region.'
      : 'Contactez RG Auto Conseil pour un conseil avant achat, une inspection de véhicule, une recherche ciblée ou une amélioration discrète en région PACA.',
    path: '/contact',
    type: 'website',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        url: `${SITE_URL}/contact`,
        name: isEnglish ? 'Contact page' : 'Page contact',
        mainEntity: {
          '@type': 'ContactPoint',
          email: CONTACT_DETAILS.email,
          telephone: CONTACT_DETAILS.phoneDisplay,
          areaServed: CONTACT_DETAILS.serviceArea[isEnglish ? 'en' : 'fr'],
          availableLanguage: isEnglish ? ['English', 'French'] : ['Français', 'English'],
        },
      },
    ],
  };
}
