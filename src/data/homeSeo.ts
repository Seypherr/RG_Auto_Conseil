import { SITE_NAME, SITE_URL } from './seoShared';

export function getHomeSeo(language: string, image: unknown) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish
      ? "Independent automotive advice in Provence-Alpes-Cote d'Azur"
      : "Conseil automobile independant en Provence-Alpes-Cote d'Azur",
    description: isEnglish
      ? "RG Auto Conseil helps clients secure a vehicle purchase, inspect a used car and improve a vehicle with clear, independent guidance in Provence-Alpes-Cote d'Azur."
      : "RG Auto Conseil accompagne l'achat de vehicule, l'inspection avant achat et l'amelioration discrete de voiture avec un conseil automobile independant en Provence-Alpes-Cote d'Azur.",
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
          : "Page d'accueil de conseil automobile dediee a l'achat, a l'inspection avant achat et a l'amelioration discrete de vehicule.",
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}
