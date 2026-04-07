import { buildBreadcrumbSchema } from './seoShared';

const heroImage = '/media/hero-accueil-rg-auto-conseil.webp';

export function getLegalSeo(language: string) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish ? 'Legal notice' : 'Mentions legales',
    description: isEnglish ? 'Legal notice for the RG Auto Conseil website.' : 'Mentions legales du site RG Auto Conseil.',
    path: '/legal-notice',
    image: heroImage,
    type: 'website',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: isEnglish ? 'Legal notice' : 'Mentions legales', path: '/legal-notice' },
      ]),
    ],
  };
}
