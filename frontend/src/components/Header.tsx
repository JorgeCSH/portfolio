import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * Navigation item structure for middle header routes (no icons)
 */
interface NavItem {
  path: string;
  label: string;
}

/**
 * Navigation items for the middle section of the header
 */
const NAV_ITEMS: NavItem[] = [
  { path: '/education', label: 'education' },
  { path: '/skills', label: 'skills' },
  { path: '/projects', label: 'projects' },
  { path: '/contact', label: 'contact' },
];

/**
 * Header Component
 *
 * Layout:
 * | Welcome to my portfolio | (space) | education | skills | projects | contact | (space) | get my resume |
 *
 * Features:
 * - Solid colored full rectangle for each selected section with Framer Motion spring animation.
 * - Subtle divider bars (|) between parts and items.
 * - Clean text navigation without icons.
 */
export const Header = () => {
  // Mobile drawer open/close state
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 sm:gap-4">
        {/* Left Section: | Welcome to my portfolio | */}
        <div className="flex items-center gap-2">
          <span className="hidden md:inline-block text-zinc-700/80 select-none text-xs font-light">|</span>
          <Link 
            to="/"
            className="font-semibold text-sm tracking-tight text-zinc-100 hover:text-indigo-400 transition-colors focus:outline-none shrink-0 px-2 py-1"
          >
            Welcome to my portfolio
          </Link>
          <span className="hidden md:inline-block text-zinc-700/80 select-none text-xs font-light">|</span>
        </div>

        {/* Middle Section: | education | skills | projects | contact | with full solid colored rectangle for active item */}
        <nav className="hidden md:flex items-center">
          <span className="text-zinc-700/80 select-none px-2 text-xs font-light">|</span>
          {NAV_ITEMS.map(({ path, label }) => (
            <div key={path} className="flex items-center">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer focus:outline-none ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Full solid rectangle colored for the selected section */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavRect"
                        className="absolute inset-0 rounded-md bg-indigo-600 shadow-sm"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </>
                )}
              </NavLink>
              <span className="text-zinc-700/80 select-none px-2 text-xs font-light">|</span>
            </div>
          ))}
        </nav>

        {/* Right Section: | get my resume | */}
        <div className="flex items-center gap-2">
          <span className="hidden md:inline-block text-zinc-700/80 select-none text-xs font-light">|</span>
          <a
            href="/cv.pdf"
            download="Jorge_Cummins_CV.pdf"
            className="hidden md:inline-flex items-center text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors px-2 py-1"
            title="Download resume (PDF)"
          >
            get my resume
          </a>
          <span className="hidden md:inline-block text-zinc-700/80 select-none text-xs font-light">|</span>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-zinc-100 cursor-pointer focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-800 bg-[#0c0c0e] px-4 py-4 space-y-3 overflow-hidden text-sm"
          >
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 font-semibold text-zinc-100 hover:text-indigo-400 transition-colors"
            >
              Welcome to my portfolio
            </Link>

            <div className="pt-2 border-t border-zinc-800/80 space-y-1">
              {NAV_ITEMS.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-3.5 py-2 rounded-md text-xs font-medium transition-colors ${
                      isActive 
                        ? 'bg-indigo-600 text-white font-semibold shadow-sm' 
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 border-t border-zinc-800/80">
              <a
                href="/cv.pdf"
                download="Jorge_Cummins_CV.pdf"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-zinc-400 hover:text-indigo-400 font-medium transition-colors text-xs"
              >
                get my resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


