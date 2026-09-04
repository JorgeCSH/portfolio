import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * Props for the SkillsPage component:
 * - nightMode: boolean indicating dark mode state for styling container and badge colors.
 */
interface SkillsPageProps {
  nightMode: boolean;
}

/**
 * SkillsPage Component
 *
 * Displays categorized technical skill sets (programming languages, hardware, tools):
 * 1. Search Bar: Live interactive filtering allowing the user to search by skill name or category.
 * 2. Grouped Cards: Skill groups rendered in cards with individual styled pills for each skill.
 * 3. Empty States: Handles both empty initial data and zero matching search results gracefully.
 * 
 * Note: Uses useScrollToTop hook instead of useLocation for automatic smooth scroll restoration.
 */
export const SkillsPage = ({ nightMode }: SkillsPageProps) => {
  // Smoothly scroll to the top of the window on mount
  useScrollToTop();

  // Local state holding the current text query from the search input
  const [searchQuery, setSearchQuery] = useState('');

  // Filter skills and groups dynamically based on the search query (case-insensitive)
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
          Technical Skills
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl">
          What I think I know
        </p>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Live Search Filter Input */}
      {/* -------------------------------------------------------------------- */}
      {SKILL_GROUPS.length > 0 && (
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter skills or tools..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border text-xs focus:outline-none focus:border-teal-500 transition-colors"
            style={{
              backgroundColor: nightMode ? '#161b24' : '#ffffff',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              color: 'inherit'
            }}
          />
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* Skills Groups Grid */}
      {/* -------------------------------------------------------------------- */}
      {filteredGroups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-xl border space-y-4 shadow-xs"
              style={{
                backgroundColor: nightMode ? '#161b24' : '#ffffff',
                borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Group category title */}
              <h2
                className="font-semibold text-base text-inherit border-b pb-2"
                style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
              >
                {group.title}
              </h2>

              {/* Badges for each skill in this group */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all"
                    style={{
                      backgroundColor: nightMode ? 'rgba(20, 184, 166, 0.08)' : 'rgba(240, 253, 250, 0.9)',
                      borderColor: nightMode ? 'rgba(45, 212, 191, 0.2)' : 'rgba(13, 148, 136, 0.25)',
                      color: nightMode ? '#e2e8f0' : '#115e59'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty / No Results Message */
        <div 
          className="p-8 rounded-xl border text-center space-y-2"
          style={{
            backgroundColor: nightMode ? 'rgba(22, 27, 36, 0.5)' : 'rgba(243, 244, 246, 0.5)',
            borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
          }}
        >
          <p className="text-xs text-zinc-400">
            {SKILL_GROUPS.length === 0
              ? 'No technical skills added yet. Define your skill groups in SKILL_GROUPS in src/data/portfolioData.ts.'
              : 'No skills matched your search filter.'}
          </p>
        </div>
      )}
    </motion.div>
  );
};
