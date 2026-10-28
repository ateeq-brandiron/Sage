import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

// Prevent the browser from restoring scroll position on back/forward —
// React controls scroll position entirely.
if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

export function ScrollToTop() {
  // `key` changes on every navigation event, including browser back/forward
  // to the same pathname, ensuring this always fires.
  const { pathname, hash, key } = useLocation();

  // useLayoutEffect fires synchronously after DOM mutations and BEFORE
  // the browser paints — this prevents the old scroll position from
  // ever being visible on the new page.
  useLayoutEffect(() => {
    // If the URL targets an anchor, scroll to that element instead of top.
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Force both window and document element to top — covers all browsers.
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash, key]);

  return null;
}
