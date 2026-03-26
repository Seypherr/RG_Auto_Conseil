import { useSyncExternalStore } from 'react';

const MOBILE_BREAKPOINT = 900;
const MEDIA_QUERY = `(max-width: ${MOBILE_BREAKPOINT}px)`;

let mediaQueryList;
const subscribers = new Set();
let unsubscribeMediaQuery;

function getMediaQueryList() {
  if (typeof window === 'undefined') {
    return null;
  }

  mediaQueryList ??= window.matchMedia(MEDIA_QUERY);
  return mediaQueryList;
}

function getSnapshot() {
  return getMediaQueryList()?.matches ?? false;
}

function subscribe(callback) {
  const mediaQuery = getMediaQueryList();
  if (!mediaQuery) {
    return () => {};
  }

  subscribers.add(callback);

  if (subscribers.size === 1) {
    const notify = () => {
      subscribers.forEach((subscriber) => subscriber());
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', notify);
      unsubscribeMediaQuery = () => mediaQuery.removeEventListener('change', notify);
    } else {
      mediaQuery.addListener(notify);
      unsubscribeMediaQuery = () => mediaQuery.removeListener(notify);
    }
  }

  return () => {
    subscribers.delete(callback);

    if (subscribers.size === 0) {
      unsubscribeMediaQuery?.();
      unsubscribeMediaQuery = undefined;
    }
  };
}

export default function useIsMobileView() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
