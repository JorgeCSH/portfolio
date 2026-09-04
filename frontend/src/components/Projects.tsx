import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  nightMode: boolean;
}

export const Projects = ({ nightMode }: ProjectsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories dynamically from existing projects
  const categories = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map(p => p.category).filter(Boolean)));
    return ['All', ...cats];
  }, []);

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCat = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesQuery = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="border-b pb-4 space-y-1.5"
        style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-inherit">
          Projects
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          A selection of projects in embedded systems, computer architecture, and software development.
        </p>
      </div>

      {/* Filter and Search Bar */}
      {PROJECTS.length > 0 && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Category Filter Pills */}
          {categories.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg border text-xs"
              style={{
                backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.5)' : 'rgba(243, 244, 246, 0.8)',
                borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
              }}
            >
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? (nightMode ? 'bg-neutral-800 text-white shadow-xs' : 'bg-white text-neutral-900 shadow-xs')
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border text-xs focus:outline-none focus:border-neutral-500 transition-colors"
              style={{
                backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.6)' : '#ffffff',
                borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                color: 'inherit'
              }}
            />
          </div>
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="p-6 rounded-xl border flex flex-col justify-between space-y-4 hover:border-neutral-600 transition-all shadow-xs"
              style={{
                backgroundColor: nightMode ? '#101726' : '#ffffff',
                borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400 font-medium">{project.category}</span>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-neutral-200"
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
                        className="text-neutral-400 hover:text-neutral-200"
                        aria-label="Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h2 className="font-semibold text-lg text-inherit">
                  {project.title}
                </h2>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-neutral-300 flex items-start gap-2">
                        <span className="text-neutral-500 mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t flex flex-wrap gap-1.5"
                style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
              >
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-800/60 text-neutral-300 border border-neutral-700/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-xl border-dashed"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
        >
          <p className="text-xs text-neutral-400">
            {PROJECTS.length === 0
              ? 'No projects added yet. Populate the PROJECTS array in src/data/portfolioData.ts to list your work.'
              : 'No projects match your filter query.'}
          </p>
        </div>
      )}
    </div>
  );
};
