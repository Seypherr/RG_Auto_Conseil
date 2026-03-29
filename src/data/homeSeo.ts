import { SITE_NAME, SITE_URL } from './seoShared';

export function getHomeSeo(language: string, image: unknown) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish
      ? 'Independent automotive advice in Provence-Alpes-Côte d’Azur'
      : "Conseil automobile indépendant en Provence-Alpes-Côte d'Azur",
    description: isEnglish
      ? 'RG Auto Conseil helps clients secure a vehicle purchase, inspect a used car and improve a vehicle with clear, independent guidance in Provence-Alpes-Côte d’Azur.'
      : "RG Auto Conseil accompagne l'achat de véhicule, l'inspection avant achat et l'amélioration discrète de voiture avec un conseil automobile indépendant en Provence-Alpes-Côte d'Azur.",
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
          ? 'Independent automotive advice homepage focused on vehicle purchase, pre-purchase inspection and discreet improvement.'
          : "Page d'accueil de conseil automobile dédiée à l'achat, à l'inspection avant achat et à l'amélioration discrète de véhicule.",
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}
