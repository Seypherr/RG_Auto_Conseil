import { Suspense, lazy, useRef } from 'react';
import Seo from '../components/Seo';
import { useSite } from '../context/SiteContext';
import { getHomeSeo } from '../data/homeSeo';
import HeroSection from '../sections/HeroSection';
import useHomeSectionSnap from '../hooks/useHomeSectionSnap';
import useIsMobileView from '../hooks/useIsMobileView';
import MobileHomePage from '../components/MobileHomePage';

const heroImage = '/media/hero-accueil-rg-auto-conseil.webp';
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
        <Suspense fallback={null}>
          <AboutSection />
        </Suspense>
      </div>
      <div className="home-snap-section" ref={registerSection(2)}>
        <Suspense fallback={null}>
          <ServicesSection />
        </Suspense>
      </div>
      <div className="home-snap-section" ref={registerSection(3)}>
        <Suspense fallback={null}>
          <ProcessSection />
        </Suspense>
      </div>
      <div className="home-snap-section" ref={registerSection(4)}>
        <Suspense fallback={null}>
          <ReviewsSection />
        </Suspense>
      </div>
      <div className="home-snap-section" ref={registerSection(5)}>
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </div>
    </div>
  );
}
