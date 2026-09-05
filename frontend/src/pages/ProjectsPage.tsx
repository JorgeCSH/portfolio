import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * ProjectsPage Component
 *
 * Full showcase of portfolio projects with clean category filtering and search.
 * Designed without card hell: open typography, divider lines, and warm amber accents.
 */
export const ProjectsPage = () => {
  useScrollToTop();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map((p) => p.category).filter(Boolean)));
    return ['All', ...cats];
  }, []);

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCat = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesQuery = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="space-y-12 pb-16"
    >
      {/* -------------------------------------------------------------------- */}
      {/* Page Header */}
      {/* -------------------------------------------------------------------- */}
      <div className="border-b border-zinc-800/80 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
            index // software & computing projects
          </span>
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
            Projects
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl pt-1">
            What I have done with my life :(
          </p>
        </div>

        {/* Search Input Box */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-9 pr-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-400 transition-colors font-mono"
          />
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Category Filter Tabs: Clean Text Tabs (No Pill Boxes) */}
      {/* -------------------------------------------------------------------- */}
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-6 border-b border-zinc-800/60 pb-3 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'text-indigo-400 font-semibold border-b-2 border-indigo-400 pb-1 -mb-[13px]'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* Projects Showcase: Divider-based Editorial Stream */}
      {/* -------------------------------------------------------------------- */}
      {filteredProjects.length > 0 ? (
        <div className="divide-y divide-zinc-800/80">
          {filteredProjects.map((project: Project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.04 }}
              className="py-8 first:pt-2 last:pb-2 space-y-4"
            >
              {/* Top row: Category tag & External Links */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-medium">
                    {project.category}
                  </span>
                  <span className="text-zinc-600">/</span>
                  <h2 className="font-semibold text-xl sm:text-2xl text-zinc-100 hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h2>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-indigo-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-indigo-400 transition-colors"
                      aria-label="Source Code"
                    >
                      github ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Project Highlights / Key Features */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
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
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-zinc-500 text-xs font-mono">
          {PROJECTS.length === 0
            ? 'No projects added yet in PROJECTS array.'
            : 'No projects match your filter query.'}
        </div>
      )}
    </motion.div>
  );
};

