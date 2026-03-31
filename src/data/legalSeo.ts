import { buildBreadcrumbSchema } from './seoShared';

const heroImage = new URL('../../Photo_rg_auto_conseil/Photo_Hero.webp?width=1200', import.meta.url).toString();

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
