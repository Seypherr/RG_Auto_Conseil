export function parseAnchorTarget(to) {
  const [rawPathname = '/', rawHash = ''] = `${to ?? '/'}`.split('#');
  const pathname = rawPathname || '/';
  const hash = rawHash ? `#${rawHash}` : '';
  const targetId = rawHash ? decodeURIComponent(rawHash) : '';

  return { pathname, hash, targetId };
}

export function scrollToAnchor(targetId, behavior = 'smooth') {
  if (!targetId) {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const target = document.getElementById(targetId);

  if (!target) {
    return false;
  }

  const offset = 24;
  const top = window.scrollY + target.getBoundingClientRect().top - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  });

  return true;
}
