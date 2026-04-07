import { galleryPageContent } from './galleryPageContent';
import { buildAbsoluteUrl, buildBreadcrumbSchema, getLocaleBranch, SITE_URL } from './seoShared';

export function getGallerySeo(language: string, image: unknown) {
  const isEnglish = language === 'en';
  const content = getLocaleBranch(galleryPageContent, language);

  return {
    title: isEnglish ? 'CarPlay, rear camera and dashcam gallery before and after' : 'Galerie CarPlay, camera de recul et dashcam avant apres',
    description: isEnglish
      ? 'Browse RG Auto Conseil projects with before-and-after examples: CarPlay retrofit, rear camera installation, pre-purchase advice and dashcam integration.'
      : "Parcourez les realisations RG Auto Conseil : montage CarPlay, installation de camera de recul, conseil avant achat et integration de dashcam avec exemples avant apres.",
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
        name: isEnglish ? 'Project gallery' : 'Galerie de realisations',
        url: `${SITE_URL}/gallery`,
        image: buildAbsoluteUrl(image),
        hasPart: content.missions.map((mission) => ({
          '@type': 'CreativeWork',
          name: mission.mission,
          description: mission.outcome,
        })),
      },
    ],
  };
}
