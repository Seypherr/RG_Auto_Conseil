import { useEffect, useRef, useState } from 'react';

export default function DeferredSection({ children, minHeight = 640, rootMargin = '240px 0px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || isVisible) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const node = placeholderRef.current;
    if (!node) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  if (isVisible) {
    return children;
  }

  return <div aria-hidden="true" ref={placeholderRef} style={{ minHeight }} />;
}
