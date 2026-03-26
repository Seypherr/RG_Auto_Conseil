import { SITE_NAME, SITE_URL } from './seoShared';

export function getHomeSeo(language, image) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish
      ? 'Independent automotive advice, vehicle purchase support and inspection'
      : 'Conseil automobile indépendant, achat et inspection de véhicule',
    description: isEnglish
      ? 'RG Auto Conseil helps private clients secure a vehicle purchase, inspect a used car and improve a premium vehicle with clear, independent advice.'
      : "RG Auto Conseil accompagne l'achat sécurisé de véhicule, l’inspection avant achat et l’amélioration discrète de véhicules avec un conseil automobile indépendant.",
    path: '/',
    image,
    type: 'website',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: isEnglish ? 'en' : 'fr',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#home`,
        url: SITE_URL,
        name: isEnglish ? 'Home' : 'Accueil',
        description: isEnglish
          ? 'Independent automotive advice homepage for vehicle purchase, inspection and improvement.'
          : "Page d’accueil de conseil automobile pour l'achat, l’inspection et l’amélioration de véhicule.",
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}
