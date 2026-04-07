import { CONTACT_DETAILS } from './siteConfig';
import { buildBreadcrumbSchema, SITE_URL } from './seoShared';

const heroImage = '/media/hero-accueil-rg-auto-conseil.webp';

export function getContactSeo(language: string) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish ? 'Contact RG Auto Conseil, request automotive advice' : 'Contact RG Auto Conseil, demande de conseil automobile',
    description: isEnglish
      ? "Contact RG Auto Conseil for pre-purchase advice, used car inspection, vehicle sourcing, CarPlay, rear camera or dashcam projects in Provence-Alpes-Cote d'Azur."
      : "Contactez RG Auto Conseil pour un conseil avant achat, une inspection de voiture d'occasion, une recherche de vehicule, un projet CarPlay, camera de recul ou dashcam en Provence-Alpes-Cote d'Azur.",
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
          contactType: isEnglish ? 'customer support' : 'service client',
          email: CONTACT_DETAILS.email,
          telephone: CONTACT_DETAILS.phoneDisplay,
          areaServed: CONTACT_DETAILS.serviceArea[isEnglish ? 'en' : 'fr'],
          availableLanguage: isEnglish ? ['English', 'French'] : ['Francais', 'English'],
        },
      },
    ],
  };
}
