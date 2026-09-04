import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  GraduationCap,
  CircuitBoard
} from 'lucide-react';
import { PROFILE, PROJECTS, EDUCATION, AREAS_OF_FOCUS } from '../data/portfolioData';
import type { ViewKey } from './Header';
import { GithubIcon } from './Icons';

interface AboutMeProps {
  onNavigate: (view: ViewKey) => void;
  nightMode: boolean;
}

export const AboutMe = ({ onNavigate, nightMode }: AboutMeProps) => {
  const featuredProjects = PROJECTS.slice(0, 2);
  const displayName = PROFILE.name || "Jorge Cummins";
  const displayRole = PROFILE.role || "Computer Engineering Student";

  return (
    <div className="space-y-16 pb-16">
      {/* Hero / About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="pt-6 sm:pt-10 space-y-6 max-w-3xl"
      >
          {/*
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-800/60 text-neutral-300 border border-neutral-700/60">
          <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
          <span>{displayRole} {PROFILE.graduation ? `• ${PROFILE.graduation}` : ''}</span>
        </div>

            */}

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15] text-inherit">
          Hi, I&apos;m {displayName}.
        </h1>

        <p className="text-base sm:text-lg leading-relaxed text-neutral-400">
          {PROFILE.about ? (
            PROFILE.about
          ) : (
            <span className="italic text-neutral-500">
              {/* Welcome to my portfolio. This is still a work in progress, let the chef cook <code>src/data/portfolioData.ts</code> */}
              Welcome to my portfolio. Still a work in progress, let the chef cook
            </span>
          )}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('education')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-neutral-100 text-neutral-900 hover:bg-white transition-all shadow-xs cursor-pointer font-semibold"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Education</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate('skills')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-neutral-700/60 text-neutral-300 hover:bg-neutral-800/60 hover:text-white transition-all cursor-pointer"
          >
            <span>Skills</span>
          </button>

          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-neutral-700/60 text-neutral-300 hover:bg-neutral-800/60 hover:text-white transition-all cursor-pointer"
          >
            <span>Projects</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-neutral-700/60 text-neutral-300 hover:bg-neutral-800/60 hover:text-white transition-all cursor-pointer"
          >
            <span>Contact</span>
          </button>
        </div>
      </motion.section>

      {/* Focus Areas Section */}
      <section className="space-y-4">
        <div className="border-b pb-2 flex items-center justify-between"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
            Areas of Focus
          </h2>
          <span className="text-xs text-neutral-500">So....About me</span>
        </div>

        {AREAS_OF_FOCUS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AREAS_OF_FOCUS.map((area) => (
              <div 
                key={area.id}
                className="p-5 rounded-xl border space-y-2.5 transition-colors"
                style={{
                  backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.5)' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-400 mb-3">
                  <CircuitBoard className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-neutral-200">{area.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="p-6 rounded-xl border text-center space-y-2"
            style={{
              backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.2)' : 'rgba(243, 244, 246, 0.4)',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
            }}
          >
            <p className="text-xs text-neutral-400">
               Here are my areas of interest 
              {/*No focus areas added yet. You can add your engineering disciplines in <code>AREAS_OF_FOCUS</code> inside <code>src/data/portfolioData.ts</code>. */}
            </p>
          </div>
        )}
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-4">
        <div className="border-b pb-2 flex items-center justify-between"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
            Featured Projects
          </h2>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>All Projects ({PROJECTS.length})</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-xl border flex flex-col justify-between space-y-4 transition-all"
                style={{
                  backgroundColor: nightMode ? '#101726' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400 font-medium">{project.category}</span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-neutral-200"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="font-semibold text-base text-inherit">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                          <span className="text-neutral-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-3 border-t flex flex-wrap gap-1.5"
                  style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
                >
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-800/60 text-neutral-300 border border-neutral-700/40">
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
              backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.2)' : 'rgba(243, 244, 246, 0.4)',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
            }}
          >
            <p className="text-xs text-neutral-400">
              Here are my projects.
              {/*No projects added yet. Populate the <code>PROJECTS</code> array in <code>src/data/portfolioData.ts</code> to showcase your work here. */}
            </p>
          </div>
        )}
      </section>

      {/* Education Summary Strip */}
      {EDUCATION.degree && (
        <section className="p-5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.3)' : 'rgba(243, 244, 246, 0.6)',
            borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <h3 className="font-semibold text-sm text-neutral-200">{EDUCATION.degree}</h3>
            </div>
            <p className="text-xs text-neutral-400">
              {EDUCATION.institution || 'Universidad de Shile'} {EDUCATION.graduationYear ? `• ${EDUCATION.graduationYear}` : ''} {EDUCATION.gpa ? `• GPA: ${EDUCATION.gpa}` : ''}
            </p>
          </div>

          <button
            onClick={() => onNavigate('education')}
            className="text-xs text-blue-400 hover:underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View Education</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      )}
    </div>
  );
};
