import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export function App() {
  const [currentView, setCurrentView] = useState<'main' | 'contact'>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#contact' ? 'contact' : 'main';
    }
    return 'main';
  });

  const scrollToElement = useCallback((targetId: string) => {
    const cleanId = targetId.replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleNavigate = useCallback(
    (hash: string) => {
      if (hash === '#contact') {
        setCurrentView('contact');
        window.history.pushState(null, '', '#contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const wasInContact = currentView === 'contact';
        setCurrentView('main');
        window.history.pushState(null, '', hash);

        if (wasInContact) {
          // Allow DOM to update before scrolling to target section
          setTimeout(() => {
            scrollToElement(hash);
          }, 60);
        } else {
          scrollToElement(hash);
        }
      }
    },
    [currentView, scrollToElement]
  );

  // Handle browser  buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#contact') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('main');
        if (hash) {
          setTimeout(() => {
            scrollToElement(hash);
          }, 60);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [scrollToElement]);

  // Handle initial scroll on page load if hash exists
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== '#contact') {
      setTimeout(() => {
        scrollToElement(hash);
      }, 100);
    }
  }, [scrollToElement]);

  return (
    <div className="flex flex-col min-h-screen bg-[#18181b] text-white">
      {/* Fixed Header */}
      <Header currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      {currentView === 'main' ? (
        <main className="flex-grow pt-16">
          <Home onNavigate={handleNavigate} />
          <About />
          <Projects />
        </main>
      ) : (
        <main className="flex-grow pt-16 flex flex-col">
          <Contact onBackToHome={() => handleNavigate('#home')} />
        </main>
      )}

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}

export default App;
