import { Link } from 'react-router-dom';
import { galleryPageContent } from '../data/galleryPageContent';
import { rgMedia } from '../data/rgMedia';
import { getLocaleContent } from '../utils/getLocaleContent';

const galleryImages = [rgMedia.porscheExterior, rgMedia.vanExterior];

export default function MobileHomeGallerySection({ language }) {
  const content = getLocaleContent(galleryPageContent, language);

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
              alt={mission.vehicle}
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
