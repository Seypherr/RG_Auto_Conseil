import SectionLabel from '../components/SectionLabel';
import { useSite } from '../context/SiteContext';
import { aboutSectionContent } from '../data/homeContent';
import { getLocaleContent } from '../utils/getLocaleContent';

export default function AboutSection() {
  const { language } = useSite();
  const content = getLocaleContent(aboutSectionContent, language);

  return (
    <section className="content-section about-section" id="mission">
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ top: '33%', right: 0, width: '18rem', height: '18rem', background: 'rgba(255,255,255,0.1)' }}
      />
      <div
        aria-hidden="true"
        className="section-orb"
        style={{ bottom: '25%', left: '25%', width: '16rem', height: '16rem', background: 'rgba(255,255,255,0.05)' }}
      />

      <div className="content-shell about-shell gs-scroll-fade-up">
        <SectionLabel className="about-label home-accent-label">{content.label}</SectionLabel>
        <h2 className="section-heading" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          {content.title}
        </h2>

        <div className="about-copy section-copy">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
