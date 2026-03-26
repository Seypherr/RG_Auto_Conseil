import { aboutPageContent } from './aboutPageContent';
import { buildAbsoluteUrl, buildBreadcrumbSchema, getLocaleBranch, SITE_URL } from './seoShared';

export function getAboutSeo(language, image) {
  const isEnglish = language === 'en';
  const content = getLocaleBranch(aboutPageContent, language);

  return {
    title: isEnglish ? 'About Gaëtan Roblin, independent automotive advisor' : 'À propos de Gaëtan Roblin, conseiller automobile indépendant',
    description: isEnglish
      ? 'Learn about Gaëtan Roblin and the independent, reassuring approach behind RG Auto Conseil.'
      : 'Découvrez Gaëtan Roblin et l’approche indépendante, claire et rassurante de RG Auto Conseil.',
    path: '/about',
    image,
    type: 'profile',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: isEnglish ? 'About' : 'À propos', path: '/about' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Gaëtan Roblin',
        jobTitle: isEnglish ? 'Independent automotive advisor' : 'Conseiller automobile indépendant',
        image: buildAbsoluteUrl(image),
        worksFor: { '@id': `${SITE_URL}/#organization` },
        url: buildAbsoluteUrl('/about'),
        description: `${content.biographyIntro} ${content.biographyCopy}`,
      },
    ],
  };
}
