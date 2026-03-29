import PageHero from './PageHero';
import SectionLabel from './SectionLabel';

function LegalSection({ section }) {
  return (
    <article className="surface-card gs-scroll-card legal-panel">
      <SectionLabel>{section.label}</SectionLabel>
      <h2 className="legal-heading">{section.title}</h2>

      <div className="legal-copy">
        {section.paragraphs?.map((paragraph) => (
          <p className="process-copy" key={paragraph}>
            {paragraph}
          </p>
        ))}

        {section.list?.length ? (
          <ul className="legal-list">
            {section.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export default function LegalContentPage({ hero, sectionId, sections }) {
  return (
    <div className="route-page">
      <PageHero {...hero} />

      <section className="content-section" id={sectionId}>
        <div className="content-shell legal-stack">
          {sections.map((section) => (
            <LegalSection key={section.title} section={section} />
          ))}
        </div>
      </section>
    </div>
  );
}
