import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, type ViewKey } from './components/Header';
import { Footer } from './components/Footer';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

const VALID_VIEWS: ViewKey[] = ['about', 'education', 'skills', 'projects', 'contact'];

const getViewFromHash = (): ViewKey => {
  if (typeof window === 'undefined') return 'about';
  const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  return VALID_VIEWS.includes(rawHash as ViewKey) ? (rawHash as ViewKey) : 'about';
};

export function App() {
  const [nightMode, setNightMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [currentView, setCurrentView] = useState<ViewKey>(getViewFromHash);

  useEffect(() => {
    localStorage.setItem('portfolio_theme', nightMode ? 'dark' : 'light');
    if (nightMode) {
      document.documentElement.classList.remove('light-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.body.classList.add('light-mode');
    }
  }, [nightMode]);

  // View selection with browser history integration
  const handleSelectView = useCallback((view: ViewKey, pushHistory = true) => {
    setCurrentView((prev) => {
      if (prev === view) return prev;
      if (pushHistory) {
        window.history.pushState({ view }, '', `#${view}`);
      }
      return view;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Listen for browser back/forward and trackpad gestures (popstate & hashchange)
  useEffect(() => {
    // Ensure initial hash is in sync with history
    const initialView = getViewFromHash();
    if (!window.location.hash) {
      window.history.replaceState({ view: initialView }, '', `#${initialView}`);
    }

    const handleHistoryChange = () => {
      const nextView = getViewFromHash();
      setCurrentView(nextView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleHistoryChange);
    window.addEventListener('hashchange', handleHistoryChange);

    return () => {
      window.removeEventListener('popstate', handleHistoryChange);
      window.removeEventListener('hashchange', handleHistoryChange);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      nightMode ? 'bg-[#0b0f17] text-neutral-100' : 'bg-[#fafafa] text-neutral-900'
    }`}>
      {/* Sticky Top Navigation */}
      <Header
        currentView={currentView}
        onSelectView={(view) => handleSelectView(view, true)}
        nightMode={nightMode}
        onToggleTheme={() => setNightMode(!nightMode)}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {currentView === 'about' && (
              <AboutMe onNavigate={(view) => handleSelectView(view, true)} nightMode={nightMode} />
            )}
            {currentView === 'education' && (
              <Education nightMode={nightMode} />
            )}
            {currentView === 'skills' && (
              <Skills nightMode={nightMode} />
            )}
            {currentView === 'projects' && (
              <Projects nightMode={nightMode} />
            )}
            {currentView === 'contact' && (
              <Contact nightMode={nightMode} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer nightMode={nightMode} onSelectView={(view) => handleSelectView(view, true)} />
    </div>
  );
}

export default App;
