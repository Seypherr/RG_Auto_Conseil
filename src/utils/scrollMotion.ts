export async function scrollWindowToTop() {
  if (typeof window === 'undefined') {
    return;
  }

  const startY = window.scrollY || window.pageYOffset || 0;

  if (startY <= 4) {
    window.scrollTo(0, 0);
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  await new Promise<void>((resolve) => {
    const startTime = window.performance.now();
    const maxDuration = 950;

    function checkPosition() {
      const elapsed = window.performance.now() - startTime;
      const currentY = window.scrollY || window.pageYOffset || 0;

      if (currentY <= 4 || elapsed >= maxDuration) {
        window.scrollTo(0, 0);
        resolve();
        return;
      }

      window.requestAnimationFrame(checkPosition);
    }

    window.requestAnimationFrame(checkPosition);
  });
}
