import { servicesPageContent } from './servicesPageContent';
import { buildAbsoluteUrl, buildBreadcrumbSchema, getLocaleBranch } from './seoShared';

export function getServicesSeo(language: string, image: unknown) {
  const isEnglish = language === 'en';
  const content = getLocaleBranch(servicesPageContent, language);

  return {
    title: isEnglish
      ? 'Automotive services, inspection and purchase support'
      : "Services de conseil automobile, inspection et aide à l'achat",
    description: isEnglish
      ? 'Explore RG Auto Conseil services: pre-purchase advice, vehicle inspection, listing analysis, sourcing, negotiation and discreet vehicle enhancement.'
      : "Découvrez les services RG Auto Conseil : conseil avant achat, inspection de véhicule, analyse d'annonce, recherche ciblée, négociation et amélioration discrète.",
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
