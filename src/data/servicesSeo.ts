import { servicesPageContent } from './servicesPageContent';
import { buildAbsoluteUrl, buildBreadcrumbSchema, getLocaleBranch } from './seoShared';

export function getServicesSeo(language: string, image: unknown) {
  const isEnglish = language === 'en';
  const content = getLocaleBranch(servicesPageContent, language);

  return {
    title: isEnglish
      ? 'Vehicle inspection, purchase support and automotive equipment services'
      : "Inspection avant achat, aide a l'achat et montage d'equipements auto",
    description: isEnglish
      ? 'Explore RG Auto Conseil services: pre-purchase advice, used car inspection, listing analysis, vehicle sourcing, seller negotiation, CarPlay, rear camera and discreet upgrades.'
      : "Decouvrez les services RG Auto Conseil : conseil avant achat, inspection de voiture d'occasion, analyse d'annonce, recherche de vehicule, negotiation, CarPlay, camera de recul et amelioration discrete.",
    path: '/services',
    image,
    type: 'website',
    structuredData: [
      buildBreadcrumbSchema(language, [
        { name: isEnglish ? 'Home' : 'Accueil', path: '/' },
        { name: 'Services', path: '/services' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: isEnglish ? 'Automotive services' : 'Services automobiles',
        image: buildAbsoluteUrl(image),
        itemListElement: content.services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.title,
          description: service.copy,
          url: buildAbsoluteUrl(`/services#service-${service.index}`),
        })),
      },
    ],
  };
}
