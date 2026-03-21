import { useEffect, useRef } from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ProcessSection from '../sections/ProcessSection';
import ReviewsSection from '../sections/ReviewsSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    document.documentElement.classList.add('home-snap-enabled');
    document.body.classList.add('home-snap-enabled');

    return () => {
      document.documentElement.classList.remove('home-snap-enabled');
      document.body.classList.remove('home-snap-enabled');
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isAnimating = false;
    let unlockTimeoutId;

    const clampIndex = (index) => Math.min(sectionRefs.current.length - 1, Math.max(0, index));

    const getSectionTop = (element) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const centeredOffset = Math.max((viewportHeight - rect.height) / 2, 0);

      return window.scrollY + rect.top - centeredOffset;
    };

    const getClosestSectionIndex = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionRefs.current.forEach((section, index) => {
        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const scrollToSection = (index) => {
      const target = sectionRefs.current[clampIndex(index)];

      if (!target) {
        return;
      }

      isAnimating = true;
      window.clearTimeout(unlockTimeoutId);

      window.scrollTo({
        top: Math.max(0, getSectionTop(target)),
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
      });

      unlockTimeoutId = window.setTimeout(() => {
        isAnimating = false;
      }, reducedMotion.matches ? 80 : 720);
    };

    const handleWheel = (event) => {
      if (mediaQuery.matches || reducedMotion.matches) {
        return;
      }

      if (Math.abs(event.deltaY) < 10 || isAnimating) {
        return;
      }

      const activeIndex = getClosestSectionIndex();
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = clampIndex(activeIndex + direction);

      if (nextIndex === activeIndex) {
        return;
      }

      event.preventDefault();
      scrollToSection(nextIndex);
    };

    const handleResize = () => {
      if (mediaQuery.matches) {
        isAnimating = false;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(unlockTimeoutId);
    };
  }, []);

  const registerSection = (index) => (element) => {
    sectionRefs.current[index] = element;
  };

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
