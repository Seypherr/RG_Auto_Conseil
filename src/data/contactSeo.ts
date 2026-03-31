import { CONTACT_DETAILS } from './siteConfig';
import { buildBreadcrumbSchema, SITE_URL } from './seoShared';

const heroImage = new URL('../../Photo_rg_auto_conseil/Photo_Hero.webp?width=1200', import.meta.url).toString();

export function getContactSeo(language: string) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish ? 'Contact RG Auto Conseil, request automotive advice' : 'Contact RG Auto Conseil, demande de conseil automobile',
    description: isEnglish
      ? "Contact RG Auto Conseil for purchase advice, vehicle inspection, sourcing or discreet automotive improvement in Provence-Alpes-Cote d'Azur."
      : "Contactez RG Auto Conseil pour un conseil avant achat, une inspection de vehicule, une recherche ciblee ou une amelioration discrete en Provence-Alpes-Cote d'Azur.",
    path: '/contact',
    image: heroImage,
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
          availableLanguage: isEnglish ? ['English', 'French'] : ['Francais', 'English'],
        },
      },
    ],
  };
}
