import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * SkillsPage Component
 *
 * Displays categorized technical skills with live search filtering.
 * Clean, minimal catalog without card hell.
 */
export const SkillsPage = () => {
  useScrollToTop();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = SKILL_GROUPS.map((group) => {
    const matched = group.skills.filter(
      (skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...group,
      skills: matched
    };
  }).filter((group) => group.skills.length > 0);

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
            catalog // technologies & tools
          </span>
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
            Technical Skills
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl pt-1">
            What I think I know
          </p>
        </div>

        {/* Live Search Input (Minimalist) */}
        {SKILL_GROUPS.length > 0 && (
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full pl-9 pr-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-400 transition-colors font-mono"
            />
          </div>
        )}
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Skills Groups: Open Categorized Layout */}
      {/* -------------------------------------------------------------------- */}
      {filteredGroups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold border-b border-zinc-800/80 pb-2">
                // {group.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-xs font-mono bg-zinc-900/70 text-zinc-300 border border-zinc-800/80 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-zinc-500 text-xs font-mono">
          {SKILL_GROUPS.length === 0
            ? 'No technical skills added yet in SKILL_GROUPS.'
            : 'No skills matched your search filter.'}
        </div>
      )}
    </motion.div>
  );
};

