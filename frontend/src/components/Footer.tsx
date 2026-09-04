import { PROFILE } from '../data/portfolioData';
import type { ViewKey } from './Header';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  nightMode: boolean;
  onSelectView: (view: ViewKey) => void;
}

export const Footer = ({ nightMode, onSelectView }: FooterProps) => {
  return (
    <footer className="border-t transition-colors py-10"
      style={{
        backgroundColor: nightMode ? '#0b0f17' : '#f8fafc',
        borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div>
          <span>© {new Date().getFullYear()} {PROFILE.name || 'Jorge Cummins'}. All rights reserved.</span>
        </div>

        {/* Quick Nav Links in exact order */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onSelectView('about');
            }}
            className="hover:text-neutral-300 cursor-pointer"
          >
            About me
          </a>
          <a
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              onSelectView('education');
            }}
            className="hover:text-neutral-300 cursor-pointer"
          >
            Education
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              onSelectView('skills');
            }}
            className="hover:text-neutral-300 cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onSelectView('projects');
            }}
            className="hover:text-neutral-300 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onSelectView('contact');
            }}
            className="hover:text-neutral-300 cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-neutral-400">
          {PROFILE.github && (
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-200 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {PROFILE.linkedin && (
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-200 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
