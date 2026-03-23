import { useEffect, useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import { ArrowRightIcon, BriefcaseIcon, DocumentIcon, SearchIcon, TruckIcon } from '../components/IconSet';
import { useSite } from '../context/SiteContext';
import { servicesPageContent } from '../data/siteContent';
import { rgMedia } from '../data/rgMedia';
import { getLocaleContent } from '../utils/getLocaleContent';

const iconMap = {
  search: SearchIcon,
  document: DocumentIcon,
  briefcase: BriefcaseIcon,
  truck: TruckIcon,
};

export default function ServicesPage() {
  const { language } = useSite();
  const [audienceFilter, setAudienceFilter] = useState('all');
  const [showAllServices, setShowAllServices] = useState(false);
  const content = getLocaleContent(servicesPageContent, language);

  useEffect(() => {
    setShowAllServices(false);
  }, [audienceFilter]);

  const filteredServices =
    audienceFilter === 'all'
      ? content.services
      : content.services.filter((service) => service.audiences.includes(audienceFilter));
  const visibleServices = showAllServices ? filteredServices : filteredServices.slice(0, 4);
  const hasMoreServices = filteredServices.length > 4;
  const hiddenServicesCount = Math.max(filteredServices.length - 4, 0);
  return (
    <div className="route-page route-page--services">
      <section className="content-section services-lumen-hero" id="services-overview">
        <div aria-hidden="true" className="services-page-glow services-page-glow--one" />
        <div aria-hidden="true" className="services-page-glow services-page-glow--two" />
        <div aria-hidden="true" className="services-page-glow services-page-glow--three" />

        <div className="content-shell services-orbit-shell">
          <div className="services-orbit-copy gs-scroll-heading">
            <div className="hide-overflow">
              <SectionLabel className="gs-scroll-text-up">{content.heroLabel}</SectionLabel>
            </div>
            {content.heroTitle.map((line, index) => (
              <div className="hide-overflow" key={line} style={{ display: 'block', marginTop: index === 0 ? '1rem' : 0 }}>
                <span className="editorial-title gs-scroll-title-up services-orbit-title">{line}</span>
              </div>
            ))}
            <p className="editorial-copy editorial-copy--wide gs-scroll-fade-up">{content.heroIntro}</p>

            <div className="services-orbit-actions gs-scroll-fade-up">
              <div className="services-orbit-cta-group">
                <a className="btn-pill services-orbit-button" href="#services-grid">
                  {content.heroPrimaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="services-orbit-stage">
            <article className="services-orbit-spotlight gs-scroll-card">
              <div className="services-orbit-spotlight-media">
                <img alt="RG Auto Conseil services" className="services-orbit-image" src={rgMedia.porscheExterior} />
                <div className="services-orbit-image-glow" />
              </div>
              <div className="services-orbit-spotlight-copy">
                <span className="label">{content.heroCardLabel}</span>
                <h2>{content.heroCardTitle}</h2>
                {content.heroCardCopy ? <p>{content.heroCardCopy}</p> : null}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section services-summary-section" id="services-details">
        <div className="content-shell services-summary-shell">
          <div className="services-summary-head gs-scroll-fade-up">
            <SectionLabel>{content.servicesLabel}</SectionLabel>
            <h2 className="section-heading services-summary-title">
              {content.servicesTitle.map((line) => (
                <span className="services-summary-title-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="section-copy services-summary-copy">{content.servicesIntro}</p>

            <div className="services-filter-wrap">
              <span className="label services-filter-label">{content.filterLabel}</span>
              <div className="services-filter-group" role="tablist">
                {content.filters.map((filter) => (
                  <button
                    aria-pressed={audienceFilter === filter.value}
                    className={`services-filter-pill${audienceFilter === filter.value ? ' is-active' : ''}`}
                    key={filter.value}
                    onClick={() => setAudienceFilter(filter.value)}
                    type="button"
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="services-summary-grid" id="services-grid">
            {visibleServices.map((service, index) => {
              const Icon = iconMap[service.icon];
              const shouldCenterLastCard = showAllServices && visibleServices.length % 2 === 1 && index === visibleServices.length - 1;

              return (
                <article
                  className={`services-summary-card gs-scroll-card services-summary-card--${(index % 3) + 1}${shouldCenterLastCard ? ' services-summary-card--centered' : ''}`}
                  id={`service-${service.index}`}
                  key={service.title}
                >
                  <div className="services-summary-top">
                    <span className="services-summary-index">{service.index}</span>
                    <div className="services-summary-icon">
                      <Icon />
                    </div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  {content.dedicatedPageSoon ? (
                    <div className="services-summary-soon">
                      <span>{content.dedicatedPageSoon}</span>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>

          {hasMoreServices ? (
            <div className="services-summary-more gs-scroll-fade-up">
              <button className="services-summary-more-button" onClick={() => setShowAllServices((value) => !value)} type="button">
                <span>{showAllServices ? content.showLess : content.showMore}</span>
                {!showAllServices ? <span className="services-summary-more-meta">{`+${hiddenServicesCount}`}</span> : null}
                <span className={`services-summary-more-icon${showAllServices ? ' is-open' : ''}`}>
                  <ArrowRightIcon />
                </span>
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
