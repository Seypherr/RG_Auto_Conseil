import { galleryPageContent } from './galleryPageContent';
import { buildBreadcrumbSchema, getLocaleBranch, SITE_URL } from './seoShared';

export function getGallerySeo(language: string, image: unknown) {
  const isEnglish = language === 'en';
  const content = getLocaleBranch(galleryPageContent, language);

  return {
    title: isEnglish ? 'Automotive gallery, before and after vehicle projects' : 'Galerie automobile, réalisations et avant/après',
    description: isEnglish
      ? 'Browse automotive projects completed by RG Auto Conseil, including before/after examples, purchase support and discreet vehicle upgrades.'
      : "Parcourez les réalisations RG Auto Conseil avec des exemples avant/après, des projets d'achat et des améliorations de véhicule.",
    path: '/gallery',
    image,
    type: 'article',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: isEnglish ? 'Gallery' : 'Galerie', path: '/gallery' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: isEnglish ? 'Project gallery' : 'Galerie de réalisations',
        url: `${SITE_URL}/gallery`,
        hasPart: content.missions.map((mission) => ({
          '@type': 'CreativeWork',
          name: mission.mission,
          description: mission.outcome,
        })),
      },
    ],
  };
}
