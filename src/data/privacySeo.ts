import { buildBreadcrumbSchema } from './seoShared';

const heroImage = '/media/hero-accueil-rg-auto-conseil.webp';

export function getPrivacySeo(language: string) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish ? 'Privacy policy' : 'Politique de confidentialite',
    description: isEnglish
      ? 'Privacy policy describing how RG Auto Conseil processes personal data.'
      : 'Politique de confidentialite expliquant le traitement des donnees personnelles par RG Auto Conseil.',
    path: '/privacy-policy',
    image: heroImage,
    type: 'website',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: isEnglish ? 'Privacy policy' : 'Politique de confidentialite', path: '/privacy-policy' },
      ]),
    ],
  };
}
