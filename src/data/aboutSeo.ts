import { aboutPageContent } from './aboutPageContent';
import { buildAbsoluteUrl, buildBreadcrumbSchema, getLocaleBranch, SITE_URL } from './seoShared';

export function getAboutSeo(language: string, image: unknown) {
  const isEnglish = language === 'en';
  const content = getLocaleBranch(aboutPageContent, language);

  return {
    title: isEnglish ? 'About Gaetan Roblin, independent automotive advisor' : 'A propos de Gaetan Roblin, conseiller automobile independant',
    description: isEnglish
      ? 'Learn about Gaetan Roblin and the independent, reassuring approach behind RG Auto Conseil.'
      : "Decouvrez Gaetan Roblin et l'approche independante, claire et rassurante de RG Auto Conseil.",
    path: '/about',
    image,
    type: 'profile',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: isEnglish ? 'About' : 'A propos', path: '/about' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Gaetan Roblin',
        jobTitle: isEnglish ? 'Independent automotive advisor' : 'Conseiller automobile independant',
        image: buildAbsoluteUrl(image),
        worksFor: { '@id': `${SITE_URL}/#organization` },
        url: buildAbsoluteUrl('/about'),
        description: `${content.biographyIntro} ${content.biographyCopy}`,
      },
    ],
  };
}
