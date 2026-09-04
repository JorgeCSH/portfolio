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
        {/* Creator */}
        <div>
          <span>Jorge Cummins 2026</span>
        </div>

        {/*  Quick useful shit stuff */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <Link
            to="/contact"
            className="hover:underline transition-colors cursor-pointer "
          >
            Contact
          </Link>
          <a 
            href="/cv.pdf"
            download="Jorge_Cummins_CV.pdf"
            className="hover:underline transition-colors cursor-pointer "
            title="Download CV (PDF)"
          >
            <span>My resume</span>
          </a>
        </div>

        {/* Footer stuff*/}
        <div className="flex items-center gap-3 text-zinc-400">
          {PROFILE.github && (
            <a
              href={PROFILE.github}
              rel="noreferrer"
              className="hover:text-teal-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon/>
            </a>
          )}
          {PROFILE.linkedin && (
            <a
              href={PROFILE.linkedin}
              rel="noreferrer"
              className="hover:text-teal-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon/>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
