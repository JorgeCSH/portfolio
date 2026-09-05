import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROFILE, PROJECTS, EDUCATION, AREAS_OF_FOCUS } from '../data/portfolioData';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * AboutPage Component
 *
 * Clean editorial overview of Jorge's profile and software engineering focus.
 * Designed with high typographic clarity, modern electric indigo accents, and zero "card hell".
 */
export const AboutPage = () => {
  useScrollToTop();

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
      {/* 1. Introduction Hero Section */}
      <section className="pt-4 sm:pt-8 space-y-6 max-w-3xl">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
            portfolio // {PROFILE.role || "Software & Computer Engineering Student"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15] text-zinc-100">
            Hi, I&apos;m {displayName}.
          </h1>
        </div>

        {/* Profile bio summary */}
        <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
          {PROFILE.about ? (
            PROFILE.about
          ) : (
            <span className="italic text-zinc-500">
              Welcome to my portfolio. Still a work in progress, let the chef cook.
            </span>
          )}
        </p>

        {/* Action Links: Lightweight navigation links without bulky button boxes */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm font-medium">
          <Link
            to="/education"
            className="text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            education →
          </Link>

          <Link
            to="/skills"
            className="text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            skills →
          </Link>

          <Link
            to="/projects"
            className="text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            projects →
          </Link>

          <Link
            to="/contact"
            className="text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            contact →
          </Link>

          <a
            href="/cv.pdf"
            download="Jorge_Cummins_CV.pdf"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
            title="Download resume (PDF)"
          >
            get resume (pdf) ↓
          </a>
        </div>
      </section>

      {/* 2. Areas of Focus Section (Open Editorial Layout) */}
      <section className="space-y-6">
        <div className="border-b border-zinc-800/80 pb-2 flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
            // areas of focus
          </h2>
          <span className="text-xs text-zinc-500 font-mono">software & computing domains</span>
        </div>

        {AREAS_OF_FOCUS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AREAS_OF_FOCUS.map((area, idx) => (
              <div key={area.id} className="space-y-2.5 group">
                <div className="text-xs font-mono text-indigo-400 font-semibold tracking-wider">
                  // 0{idx + 1}
                </div>
                <h3 className="font-semibold text-base text-zinc-100 group-hover:text-indigo-400 transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-zinc-500 italic">
            Add focus areas in src/data/portfolioData.ts.
          </p>
        )}
      </section>

      {/* 3. Featured Projects (Divider-based Editorial List) */}
      <section className="space-y-6">
        <div className="border-b border-zinc-800/80 pb-2 flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
            // featured projects
          </h2>
          <Link
            to="/projects"
            className="text-xs font-mono text-zinc-400 hover:text-indigo-400 transition-colors cursor-pointer"
          >
            view all ({PROJECTS.length}) →
          </Link>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="divide-y divide-zinc-800/80">
            {featuredProjects.map((project) => (
              <div key={project.id} className="py-6 first:pt-1 last:pb-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xs font-mono text-indigo-400 font-medium">
                      {project.category}
                    </span>
                    <span className="text-zinc-600">/</span>
                    <h3 className="font-semibold text-lg text-zinc-100 hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-indigo-400 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      github →
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-900/80 text-zinc-300 border border-zinc-800/80 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-zinc-500 italic">No projects listed yet.</p>
        )}
      </section>

      {/* 4. Education Snapshot */}
      {EDUCATION.degree && (
        <section className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <span className="text-zinc-500 font-mono uppercase text-[10px] block">academic background</span>
            <div className="text-zinc-200">
              <span className="font-semibold">{EDUCATION.degree}</span>
              <span className="text-zinc-400"> — {EDUCATION.institution || 'Universidad de Chile'}</span>
              {EDUCATION.graduationYear && <span className="text-zinc-500 font-mono"> ({EDUCATION.graduationYear})</span>}
            </div>
          </div>

          <Link
            to="/education"
            className="text-xs text-indigo-400 hover:underline cursor-pointer shrink-0 font-medium"
          >
            view education →
          </Link>
        </section>
      )}
    </motion.div>
  );
};

