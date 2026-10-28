import { useEffect } from 'react';
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

  useEffect(() => {
    // If the URL targets an anchor on the same page, scroll to that element
    // instead of forcing the page to the top.
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // All other navigations: jump to top instantly.
    // window.scrollTo is synchronous and universally reliable.
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
}
