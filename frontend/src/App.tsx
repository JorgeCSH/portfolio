import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

/**
 * App.tsx
 * Root component of the portfolio application.
 * Dark mode only with clean typography, warm accents, and zero card hell.
 */
export function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#09090b] text-zinc-100">
      {/* Header: Three-section navigation bar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <Routes>
          {/* Landing / About route */}
          <Route path="/" element={<AboutPage />} />

          {/* Alias /about route redirects cleanly to "/" */}
          <Route path="/about" element={<Navigate to="/" replace />} />

          {/* Education & Academic Experience */}
          <Route path="/education" element={<EducationPage />} />

          {/* Technical Skills Catalog */}
          <Route path="/skills" element={<SkillsPage />} />

          {/* Projects Showcase */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Contact Information & Reach-out Form */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

