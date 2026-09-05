import { Link } from 'react-router-dom';
import { PROFILE } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

/**
 * Footer Component
 * Completely dark-themed, clean border and warm accents.
 */
export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        {/* Creator */}
        <div>
          <span>Jorge Cummins 2026</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs">
          <Link
            to="/contact"
            className="hover:text-indigo-400 hover:underline transition-colors cursor-pointer"
          >
            contact
          </Link>
          <a 
            href="/cv.pdf"
            download="Jorge_Cummins_CV.pdf"
            className="hover:text-indigo-400 hover:underline transition-colors cursor-pointer"
            title="Download CV (PDF)"
          >
            <span>get my resume</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-zinc-500">
          {PROFILE.github && (
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {PROFILE.linkedin && (
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

