import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { useTheme } from './hooks/useTheme';

/**
 * App.tsx
 * Root of the webapp, here we define: 
 * 1. The option to change theme (using the state for this)
 * 2. Add the header and footer components
 * 3. Manage roots to different pages.
 */
export function App() {
  // Theme state and toggler managed by the custom useTheme hook
  const { nightMode, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        nightMode ? 'bg-[#10131a] text-zinc-100' : 'bg-[#f7f9f9] text-zinc-900'
      }`}
    >
      {/* Header: Header bar to move between routes*/}
      <Header
        nightMode={nightMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area: shows the page depending on the URL */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <Routes>
          {/* Landing / Home route */}
          <Route path="/" element={<AboutPage nightMode={nightMode} />} />

          {/* Alias /about route redirects cleanly to "/" */}
          <Route path="/about" element={<Navigate to="/" replace />} />

          {/* Education & Academic Experience */}
          <Route path="/education" element={<EducationPage nightMode={nightMode} />} />

          {/* Technical Skills Catalog */}
          <Route path="/skills" element={<SkillsPage nightMode={nightMode} />} />

          {/* Projects Showcase */}
          <Route path="/projects" element={<ProjectsPage nightMode={nightMode} />} />

          {/* Contact Information & Reach-out Form */}
          <Route path="/contact" element={<ContactPage nightMode={nightMode} />} />

          {/* Catch-all fallback: redirects any unrecognized URL path back to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer: Bottom navigation, copyright notice, CV download, and social links */}
      <Footer nightMode={nightMode} />
    </div>
  );
}

export default App;
