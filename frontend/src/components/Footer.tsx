import { Link } from 'react-router-dom';
import { FileDown } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

/**
 * Props for the Footer component:
 * - nightMode: boolean indicating if dark mode is active for styling borders and background.
 */
interface FooterProps {
  nightMode: boolean;
}

/**
 * Footer Component
 *
 * Site-wide footer displayed at the bottom of each view:
 * 1. Copyright information with dynamic year and student name.
 * 2. Route links to each primary portfolio page using React Router's <Link>.
 * 3. Quick CV download link.
 * 4. External social links (GitHub, LinkedIn) with security attributes.
 */
export const Footer = ({ nightMode }: FooterProps) => {
  return (
    <footer
      className="border-t transition-colors py-10"
      style={{
        backgroundColor: nightMode ? '#10131a' : '#f7f9f9',
        borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        {/* ------------------------------------------------------------------ */}
        {/* Copyright Notice */}
        {/* ------------------------------------------------------------------ */}
        <div>
          <span>© {new Date().getFullYear()} {PROFILE.name || 'Jorge Cummins'}. All rights reserved.</span>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Quick Page Links */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <Link
            to="/"
            className="hover:text-teal-400 transition-colors cursor-pointer"
          >
            About me
          </Link>
          <Link
            to="/education"
            className="hover:text-teal-400 transition-colors cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="/skills"
            className="hover:text-teal-400 transition-colors cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="hover:text-teal-400 transition-colors cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-teal-400 transition-colors cursor-pointer"
          >
            Contact
          </Link>
          <a
            href="/cv.pdf"
            download="Jorge_Cummins_CV.pdf"
            className="hover:text-teal-400 transition-colors cursor-pointer inline-flex items-center gap-1 font-medium text-teal-500/90"
            title="Download CV (PDF)"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* External Social Profiles (GitHub & LinkedIn) */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex items-center gap-3 text-zinc-400">
          {PROFILE.github && (
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 transition-colors"
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
              className="hover:text-teal-300 transition-colors"
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
