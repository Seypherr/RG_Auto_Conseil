import { buildAbsoluteUrl, SITE_NAME, SITE_URL } from './seoShared';

export function getHomeSeo(language: string, image: unknown) {
  const isEnglish = language === 'en';

  return {
    title: isEnglish
      ? "Independent automotive advice and pre-purchase inspection in Provence-Alpes-Cote d'Azur"
      : "Conseil automobile independant et inspection avant achat en Provence-Alpes-Cote d'Azur",
    description: isEnglish
      ? "RG Auto Conseil helps clients secure a used car purchase, inspect a vehicle, source the right model and improve equipment with independent guidance in Provence-Alpes-Cote d'Azur."
      : "RG Auto Conseil accompagne l'achat de voiture d'occasion, l'inspection avant achat, la recherche de vehicule et l'amelioration d'equipements avec un conseil automobile independant en Provence-Alpes-Cote d'Azur.",
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
          ? 'Independent automotive advice homepage focused on used car purchase support, pre-purchase inspection and vehicle improvement.'
          : "Page d'accueil de conseil automobile dediee a l'achat de voiture d'occasion, a l'inspection avant achat et a l'amelioration de vehicule.",
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: buildAbsoluteUrl(image),
      },
    ],
  };
}
