import { useEffect } from 'react';

/**
 * Custom hook to smoothly scroll to the top of the browser window.
 * 
 * Each page component calls this hook on mount, ensuring that when the user
 * navigates between pages (e.g. from Education to Projects), the new page
 * always opens smoothly at the very top.
 * 
 * Note: This replaces useLocation-based scroll effects without introducing router dependencies.
 */
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
}
