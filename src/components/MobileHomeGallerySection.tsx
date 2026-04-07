import { Link } from 'react-router-dom';
import { galleryPageContent } from '../data/galleryPageContent';
import { rgMedia } from '../data/rgMedia';
import { getLocaleContent } from '../utils/getLocaleContent';

const galleryImages = [rgMedia.porscheExterior, rgMedia.vanExterior];

type MobileHomeGallerySectionProps = {
  language: 'fr' | 'en';
};

export default function MobileHomeGallerySection({ language }: MobileHomeGallerySectionProps) {
  const content = getLocaleContent(galleryPageContent, language);
  const mobileGalleryAlts =
    language === 'fr'
      ? [
          'RG Auto Conseil, montage Apple CarPlay avant apres sur systeme multimedia automobile',
          'RG Auto Conseil, installation de camera de recul avant apres sur vehicule',
        ]
      : [
          'RG Auto Conseil, CarPlay retrofit before and after on an in-car multimedia system',
          'RG Auto Conseil, rear camera installation before and after on a vehicle',
        ];

  return (
    <section className="mobile-home-band mobile-home-band--surface mobile-home-band--plain mobile-home-band--gallery-left" id="galerie">
      <div className="mobile-home-band-head">
        <span className="mobile-home-band-line" />
        <span className="mobile-home-band-label">{language === 'fr' ? 'Réalisations' : 'Projects'}</span>
      </div>
      <h2 className="mobile-home-section-title">{language === 'fr' ? 'Galerie' : 'Gallery'}</h2>

      <div className="mobile-gallery-stack">
        {content.missions.slice(0, 2).map((mission, index) => (
          <article className="mobile-gallery-card" key={mission.id}>
            <img
              alt={mobileGalleryAlts[index] ?? `RG Auto Conseil - ${mission.label} - ${mission.vehicle}`}
              decoding="async"
              height="900"
              loading="lazy"
              src={galleryImages[index]}
              width="1200"
            />
            <div className="mobile-gallery-card-copy">
              <span>{mission.label}</span>
              <h3>{mission.vehicle}</h3>
            </div>
          </article>
        ))}
      </div>

      <Link className="mobile-gallery-button" to="/gallery">
        <span>{language === 'fr' ? 'Voir plus' : 'See more'}</span>
      </Link>
    </section>
  );
}
