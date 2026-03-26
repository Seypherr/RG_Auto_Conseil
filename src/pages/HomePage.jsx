import { lazy, useRef } from 'react';
import heroImage from '../../Photo_rg_auto_conseil/Photo_Hero.webp';
import Seo from '../components/Seo';
import { useSite } from '../context/SiteContext';
import { getHomeSeo } from '../data/homeSeo';
import HeroSection from '../sections/HeroSection';
import DeferredSection from '../components/DeferredSection';
import useHomeSectionSnap from '../hooks/useHomeSectionSnap';
import useIsMobileView from '../hooks/useIsMobileView';
import MobileHomePage from '../components/MobileHomePage';

const AboutSection = lazy(() => import('../sections/AboutSection'));
const ServicesSection = lazy(() => import('../sections/ServicesSection'));
const ProcessSection = lazy(() => import('../sections/ProcessSection'));
const ReviewsSection = lazy(() => import('../sections/ReviewsSection'));
const ContactSection = lazy(() => import('../sections/ContactSection'));

export default function HomePage() {
  const { language } = useSite();
  const sectionRefs = useRef([]);
  const isMobile = useIsMobileView();
  useHomeSectionSnap(sectionRefs, !isMobile);

  const registerSection = (index) => (element) => {
    sectionRefs.current[index] = element;
  };

  if (isMobile) {
    return (
      <>
        <Seo {...getHomeSeo(language, heroImage)} lang={language} />
        <MobileHomePage />
      </>
    );
  }

  return (
    <div className="home-snap-page">
      <Seo {...getHomeSeo(language, heroImage)} lang={language} />
      <div className="home-snap-section home-snap-section--hero" ref={registerSection(0)}>
        <HeroSection />
      </div>
      <div className="home-snap-section" ref={registerSection(1)}>
        <DeferredSection minHeight={760}>
          <AboutSection />
        </DeferredSection>
      </div>
      <div className="home-snap-section" ref={registerSection(2)}>
        <DeferredSection minHeight={760}>
          <ServicesSection />
        </DeferredSection>
      </div>
      <div className="home-snap-section" ref={registerSection(3)}>
        <DeferredSection minHeight={760}>
          <ProcessSection />
        </DeferredSection>
      </div>
      <div className="home-snap-section" ref={registerSection(4)}>
        <DeferredSection minHeight={760}>
          <ReviewsSection />
        </DeferredSection>
      </div>
      <div className="home-snap-section" ref={registerSection(5)}>
        <DeferredSection minHeight={900}>
          <ContactSection />
        </DeferredSection>
      </div>
    </div>
  );
}
