import { useEffect, useState } from 'react';

export default function MobileValueCarousel({
  items,
  ariaLabel,
  getButtonLabel,
  getItemKey,
  renderItem,
  intervalMs = 2600,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  useEffect(() => {
    if (!items.length || typeof window === 'undefined') {
      return undefined;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      return undefined;
    }

    let intervalId;

    const start = () => {
      if (intervalId) {
        return;
      }

      intervalId = window.setInterval(() => {
        if (document.hidden) {
          return;
        }

        setActiveIndex((current) => (current + 1) % items.length);
      }, intervalMs);
    };

    const stop = () => {
      if (!intervalId) {
        return;
      }

      window.clearInterval(intervalId);
      intervalId = undefined;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    start();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [items, intervalMs]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="mobile-value-carousel" aria-live="polite">
      <div className="mobile-value-carousel-window">
        <div className="mobile-value-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {items.map((item, index) => (
            <article className="mobile-value-card" key={getItemKey(item, index)}>
              {renderItem(item, index)}
            </article>
          ))}
        </div>
      </div>

      <div className="mobile-dots mobile-value-dots" aria-label={ariaLabel}>
        {items.map((item, index) => (
          <button
            aria-label={getButtonLabel(item, index)}
            aria-pressed={index === activeIndex}
            className={`mobile-dot${index === activeIndex ? ' is-active' : ''}`}
            key={getItemKey(item, index)}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
