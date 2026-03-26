import { buildBreadcrumbSchema } from './seoShared';

export function getLegalSeo(language) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish ? 'Legal notice' : 'Mentions légales',
    description: isEnglish
      ? 'Legal notice for the RG Auto Conseil website.'
      : 'Mentions légales du site RG Auto Conseil.',
    path: '/legal-notice',
    type: 'website',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: isEnglish ? 'Legal notice' : 'Mentions légales', path: '/legal-notice' },
      ]),
    ],
  };
}
