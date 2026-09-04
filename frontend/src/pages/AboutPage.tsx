import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  GraduationCap,
  CircuitBoard,
  FileDown
} from 'lucide-react';
import { PROFILE, PROJECTS, EDUCATION, AREAS_OF_FOCUS } from '../data/portfolioData';
import { GithubIcon } from '../components/Icons';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * Props for AboutPage component:
 * - nightMode: boolean indicating dark mode state for dynamic border and background styles.
 */
interface AboutPageProps {
  nightMode: boolean;
}

/**
 * AboutPage Component
 *
 * The landing / overview page of the portfolio:
 * 1. Hero Introduction: Personal welcome, student bio, quick navigation, and direct CV download button.
 * 2. Areas of Focus: Interactive cards highlighting computer engineering and hardware interests.
 * 3. Featured Projects: Previews top projects with direct navigation to the full catalog.
 * 4. Education Snapshot: Summary card with university credentials.
 * 
 * Note: Uses useScrollToTop hook instead of useLocation for automatic smooth scroll restoration.
 */
export const AboutPage = ({ nightMode }: AboutPageProps) => {
  // Automatically scroll to the top of the window when this page mounts
  useScrollToTop();

  // React Router hook for programmatic navigation on button click
  const navigate = useNavigate();

  // Extract up to 2 featured projects for the preview section
  const featuredProjects = PROJECTS.slice(0, 2);
  const displayName = PROFILE.name || "Jorge Cummins";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="space-y-16 pb-16"
    >
      {/* -------------------------------------------------------------------- */}
      {/* 1. Hero / Introduction Section */}
      {/* -------------------------------------------------------------------- */}
      <section className="pt-6 sm:pt-10 space-y-6 max-w-3xl">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span>{PROFILE.role || "Computer Engineering Student"}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15] text-inherit">
          Hi, I&apos;m {displayName}.
        </h1>

        {/* Profile bio summary or friendly fallback */}
        <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
          {PROFILE.about ? (
            PROFILE.about
          ) : (
            <span className="italic text-zinc-500">
              Welcome to my portfolio. Still a work in progress, let the chef cook
            </span>
          )}
        </p>

        {/* Action Buttons: Quick page navigation + direct CV PDF download */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Direct CV Download Button */}
          <a
            href="/cv.pdf"
            download="Jorge_Cummins_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white transition-all shadow-sm cursor-pointer"
            title="Download CV as PDF"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          {/* Navigate to Education */}
          <button
            onClick={() => navigate('/education')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              nightMode 
                ? 'border-zinc-800 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-800 hover:border-teal-500/40' 
                : 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100 hover:border-teal-600'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-teal-500" />
            <span>Education</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
          </button>

          {/* Navigate to Skills */}
          <button
            onClick={() => navigate('/skills')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              nightMode 
                ? 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-white' 
                : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            <span>Skills</span>
          </button>

          {/* Navigate to Projects */}
          <button
            onClick={() => navigate('/projects')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              nightMode 
                ? 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-white' 
                : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            <span>Projects</span>
          </button>

          {/* Navigate to Contact */}
          <button
            onClick={() => navigate('/contact')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              nightMode 
                ? 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-white' 
                : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            <span>Contact</span>
          </button>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. Areas of Focus Section */}
      {/* -------------------------------------------------------------------- */}
      <section className="space-y-4">
        <div
          className="border-b pb-2 flex items-center justify-between"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
            Areas of Focus
          </h2>
          <span className="text-xs text-zinc-500">About my work</span>
        </div>

        {AREAS_OF_FOCUS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AREAS_OF_FOCUS.map((area) => (
              <div 
                key={area.id}
                className="p-5 rounded-xl border space-y-2.5 transition-all hover:border-teal-500/30"
                style={{
                  backgroundColor: nightMode ? '#161b24' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-teal-500/10 text-teal-400 mb-3 border border-teal-500/20">
                  <CircuitBoard className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-zinc-100">{area.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="p-6 rounded-xl border text-center space-y-2"
            style={{
              backgroundColor: nightMode ? 'rgba(22, 27, 36, 0.5)' : 'rgba(243, 244, 246, 0.5)',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
            }}
          >
            <p className="text-xs text-zinc-400">
               Here are my areas of interest.
            </p>
          </div>
        )}
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 3. Featured Projects Preview */}
      {/* -------------------------------------------------------------------- */}
      <section className="space-y-4">
        <div
          className="border-b pb-2 flex items-center justify-between"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="text-xs text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>All Projects ({PROJECTS.length})</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-xl border flex flex-col justify-between space-y-4 transition-all hover:border-teal-500/30 shadow-xs"
                style={{
                  backgroundColor: nightMode ? '#161b24' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-teal-400 font-medium">{project.category}</span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-teal-300 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="font-semibold text-base text-inherit">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                          <span className="text-teal-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Technology pill tags */}
                <div
                  className="pt-3 border-t flex flex-wrap gap-1.5"
                  style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-teal-950/40 text-teal-200 border border-teal-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="p-6 rounded-xl border text-center space-y-2"
            style={{
              backgroundColor: nightMode ? 'rgba(22, 27, 36, 0.5)' : 'rgba(243, 244, 246, 0.5)',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
            }}
          >
            <p className="text-xs text-zinc-400">
              Here are my projects.
            </p>
          </div>
        )}
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4. Education Summary Card */}
      {/* -------------------------------------------------------------------- */}
      {EDUCATION.degree && (
        <section
          className="p-5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            backgroundColor: nightMode ? 'rgba(22, 27, 36, 0.7)' : 'rgba(243, 244, 246, 0.7)',
            borderColor: nightMode ? 'rgba(45, 212, 191, 0.15)' : 'rgba(13, 148, 136, 0.15)'
          }}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-teal-400" />
              <h3 className="font-semibold text-sm text-zinc-100">{EDUCATION.degree}</h3>
            </div>
            <p className="text-xs text-zinc-400">
              {EDUCATION.institution || 'Universidad de Shile'} {EDUCATION.graduationYear ? `• ${EDUCATION.graduationYear}` : ''} {EDUCATION.gpa ? `• GPA: ${EDUCATION.gpa}` : ''}
            </p>
          </div>

          <Link
            to="/education"
            className="text-xs text-teal-400 hover:underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View Education</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      )}
    </motion.div>
  );
};
