import { buildBreadcrumbSchema } from './seoShared';

const heroImage = new URL('../../Photo_rg_auto_conseil/Photo_Hero.webp', import.meta.url).toString();

export function getPrivacySeo(language: string) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish ? 'Privacy policy' : 'Politique de confidentialité',
    description: isEnglish
      ? 'Privacy policy describing how RG Auto Conseil processes personal data.'
      : 'Politique de confidentialité expliquant le traitement des données personnelles par RG Auto Conseil.',
    path: '/privacy-policy',
    image: heroImage,
    type: 'website',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: isEnglish ? 'Privacy policy' : 'Politique de confidentialité', path: '/privacy-policy' },
      ]),
    ],
  };
}
