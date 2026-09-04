import { useState, useEffect } from 'react';

/**
 * Key used to store user's theme preference in the browser's localStorage
 */
const STORAGE_KEY = 'portfolio_theme';

/**
 * Custom hook for theme management:
 * 1. Initializes theme from localStorage (defaults to dark mode).
 * 2. Persists theme changes to localStorage.
 * 3. Toggles the 'light-mode' class on <html> and <body> elements so CSS variables and styles adapt.
 * 4. Provides a toggleTheme helper function to easily switch modes.
 */
export function useTheme() {
  // Read saved theme from localStorage on initial render; default to dark (true)
  const [nightMode, setNightMode] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved !== null ? saved === 'dark' : true;
  });

  // Whenever nightMode state changes, sync with localStorage and update DOM class
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, nightMode ? 'dark' : 'light');
    if (nightMode) {
      document.documentElement.classList.remove('light-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.body.classList.add('light-mode');
    }
  }, [nightMode]);

  // Convenience function to toggle between light and dark
  const toggleTheme = () => {
    setNightMode((prev) => !prev);
  };

  return {
    nightMode,
    toggleTheme,
    setNightMode,
  };
}
