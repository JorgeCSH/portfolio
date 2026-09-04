import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { GithubIcon } from '../components/Icons';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * Props for the ProjectsPage component:
 * - nightMode: boolean indicating dark mode state for styling card backgrounds and borders.
 */
interface ProjectsPageProps {
  nightMode: boolean;
}

/**
 * ProjectsPage Component
 *
 * Full interactive showcase of portfolio projects:
 * 1. Category Filter: Dynamically computes unique categories from data and provides pill buttons.
 * 2. Search Query Filter: Real-time search by title, description, or specific technology tags.
 * 3. Animated Grid: Framer Motion animated cards displaying project details, bullet highlights, tech stacks, and links.
 * 4. Empty State: Displays a dashed placeholder if no projects exist or none match the active filters.
 * 
 * Note: Uses useScrollToTop hook instead of useLocation for automatic smooth scroll restoration.
 */
export const ProjectsPage = ({ nightMode }: ProjectsPageProps) => {
  // Smoothly scroll to the top of the window on mount
  useScrollToTop();

  // Active category filter ('All' by default)
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Text string for live keyword search
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories dynamically from existing projects using useMemo to avoid recomputing on every render
  const categories = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map((p) => p.category).filter(Boolean)));
    return ['All', ...cats];
  }, []);

  // Filter projects by both the selected category and search input keyword
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
      className="space-y-8 pb-16"
    >
      {/* -------------------------------------------------------------------- */}
      {/* Page Header */}
      {/* -------------------------------------------------------------------- */}
      <div
        className="border-b pb-4 space-y-1.5"
        style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-inherit">
          Projects
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl">
          What I have done with my life :(
        </p>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Filter and Search Bar */}
      {/* -------------------------------------------------------------------- */}
      {PROJECTS.length > 0 && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Category Filter Pills */}
          {categories.length > 1 && (
            <div
              className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg border text-xs"
              style={{
                backgroundColor: nightMode ? '#161b24' : '#ffffff',
                borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? (nightMode ? 'bg-teal-600 text-white shadow-xs' : 'bg-teal-600 text-white shadow-xs')
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Search Input Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border text-xs focus:outline-none focus:border-teal-500 transition-colors"
              style={{
                backgroundColor: nightMode ? '#161b24' : '#ffffff',
                borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                color: 'inherit'
              }}
            />
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* Projects Grid with Framer Motion entry animations */}
      {/* -------------------------------------------------------------------- */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="p-6 rounded-xl border flex flex-col justify-between space-y-4 hover:border-teal-500/40 transition-all shadow-xs"
              style={{
                backgroundColor: nightMode ? '#161b24' : '#ffffff',
                borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="space-y-3">
                {/* Category tag & External Links (Live Demo + GitHub) */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-teal-400 font-medium">{project.category}</span>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-teal-300 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-teal-300 transition-colors"
                        aria-label="Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h2 className="font-semibold text-lg text-inherit">
                  {project.title}
                </h2>

                {/* Project Description */}
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Highlights / Key Features */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="text-teal-500 mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies Badges */}
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
            </motion.div>
          ))}
        </div>
      ) : (
        /* Empty / No Matches State */
        <div
          className="text-center py-12 border rounded-xl border-dashed"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
        >
          <p className="text-xs text-zinc-400">
            {PROJECTS.length === 0
              ? 'No projects added yet. Populate the PROJECTS array in src/data/portfolioData.ts to list your work.'
              : 'No projects match your filter query.'}
          </p>
        </div>
      )}
    </motion.div>
  );
};
