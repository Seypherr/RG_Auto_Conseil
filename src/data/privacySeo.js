import { buildBreadcrumbSchema } from './seoShared';

export function getPrivacySeo(language) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish ? 'Privacy policy' : 'Politique de confidentialité',
    description: isEnglish
      ? 'Privacy policy describing how RG Auto Conseil processes personal data.'
      : 'Politique de confidentialité expliquant le traitement des données personnelles par RG Auto Conseil.',
    path: '/privacy-policy',
    type: 'website',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: isEnglish ? 'Privacy policy' : 'Politique de confidentialité', path: '/privacy-policy' },
      ]),
    ],
  };
}
