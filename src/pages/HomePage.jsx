import { useRef } from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ProcessSection from '../sections/ProcessSection';
import ReviewsSection from '../sections/ReviewsSection';
import ContactSection from '../sections/ContactSection';
import useHomeSectionSnap from '../hooks/useHomeSectionSnap';
import useIsMobileView from '../hooks/useIsMobileView';
import MobileHomePage from '../components/MobileHomePage';

export default function HomePage() {
  const sectionRefs = useRef([]);
  const isMobile = useIsMobileView();
  useHomeSectionSnap(sectionRefs);

  const registerSection = (index) => (element) => {
    sectionRefs.current[index] = element;
  };

  if (isMobile) {
    return <MobileHomePage />;
  }

  return (
    <div className="home-snap-page">
      <div className="home-snap-section home-snap-section--hero" ref={registerSection(0)}>
        <HeroSection />
      </div>
      <div className="home-snap-section" ref={registerSection(1)}>
        <AboutSection />
      </div>
      <div className="home-snap-section" ref={registerSection(2)}>
        <ServicesSection />
      </div>
      <div className="home-snap-section" ref={registerSection(3)}>
        <ProcessSection />
      </div>
      <div className="home-snap-section" ref={registerSection(4)}>
        <ReviewsSection />
      </div>
      <div className="home-snap-section" ref={registerSection(5)}>
        <ContactSection />
      </div>
    </div>
  );
}
