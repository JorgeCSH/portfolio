import { useState } from 'react';
import { Search } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

interface SkillsProps {
  nightMode: boolean;
}

export const Skills = ({ nightMode }: SkillsProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = SKILL_GROUPS.map(group => {
    const matched = group.skills.filter(skill =>
      skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...group,
      skills: matched
    };
  }).filter(group => group.skills.length > 0);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="border-b pb-4 space-y-1.5"
        style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-inherit">
          Technical Skills
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Programming languages, hardware tools, embedded platforms, and systems toolchains.
        </p>
      </div>

      {/* Search Input */}
      {SKILL_GROUPS.length > 0 && (
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter skills or tools..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border text-xs focus:outline-none focus:border-neutral-500 transition-colors"
            style={{
              backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.6)' : '#ffffff',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              color: 'inherit'
            }}
          />
        </div>
      )}

      {/* Skills Groups Grid */}
      {filteredGroups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-xl border space-y-4"
              style={{
                backgroundColor: nightMode ? '#101726' : '#ffffff',
                borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
              }}
            >
              <h2 className="font-semibold text-base text-inherit border-b pb-2"
                style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
              >
                {group.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                    style={{
                      backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(243, 244, 246, 0.9)',
                      borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      color: nightMode ? '#e2e8f0' : '#1e293b'
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
        <div 
          className="p-8 rounded-xl border text-center space-y-2"
          style={{
            backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.2)' : 'rgba(243, 244, 246, 0.4)',
            borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
          }}
        >
          <p className="text-xs text-neutral-400">
            {SKILL_GROUPS.length === 0
              ? 'No technical skills added yet. Define your skill groups in SKILL_GROUPS in src/data/portfolioData.ts.'
              : 'No skills matched your search filter.'}
          </p>
        </div>
      )}
    </div>
  );
};
