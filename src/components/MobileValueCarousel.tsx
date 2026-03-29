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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  useEffect(() => {
    if (!isPaused || typeof window === 'undefined') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setIsPaused(false), 5200);
    return () => window.clearTimeout(timeoutId);
  }, [isPaused]);

  useEffect(() => {
    if (!items.length || isPaused || typeof window === 'undefined') {
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
  }, [isPaused, items, intervalMs]);

  if (!items.length) {
    return null;
  }

  const advanceToNext = () => {
    setIsPaused(true);
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return (
    <div className="mobile-value-carousel" aria-live="polite">
      <div className="mobile-value-carousel-window">
        <div className="mobile-value-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {items.map((item, index) => (
            <article className="mobile-value-card" key={getItemKey(item, index)}>
              <button
                aria-label={getButtonLabel(item, index)}
                aria-pressed={index === activeIndex}
                className="mobile-value-card-button"
                onClick={advanceToNext}
                type="button"
              >
                {renderItem(item, index, index === activeIndex)}
              </button>
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
            onClick={() => {
              setIsPaused(true);
              setActiveIndex(index);
            }}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
