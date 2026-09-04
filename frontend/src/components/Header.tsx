import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Layers, GraduationCap, Wrench, Mail, Sun, Moon, Menu, X, FileDown } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

/**
 * Navigation item structure for primary routes
 */
interface NavItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * Props for Header component:
 * - nightMode: boolean indicating dark mode state
 * - onToggleTheme: function to toggle between light and dark themes
 */
interface HeaderProps {
  nightMode: boolean;
  onToggleTheme: () => void;
}

/**
 * Navigation items for the header bar ("/" is used as the "about" page)
 */
const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'About me', icon: User },
  { path: '/education', label: 'Education', icon: GraduationCap },
  { path: '/skills', label: 'Skills', icon: Wrench },
  { path: '/projects', label: 'Projects', icon: Layers },
  { path: '/contact', label: 'Contact', icon: Mail },
];

/**
 * Header Component
 */
export const Header = ({ nightMode, onToggleTheme }: HeaderProps) => {
  // Mobile drawer open/close state
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors"
      style={{
        backgroundColor: nightMode ? 'rgba(16, 19, 26, 0.88)' : 'rgba(255, 255, 255, 0.90)',
        borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo Link to Home ("/") */}
        <Link 
          to="/"
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          {/* Custom Teal/Emerald Gradient Monogram */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-inherit">
                WELCOME TO MY PORTFOLIO
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Tabs using NavLink  */}
        <nav
          className="hidden md:flex items-center gap-1 p-1 rounded-lg border"
          style={{
            borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            backgroundColor: nightMode ? 'rgba(22, 27, 36, 0.7)' : 'rgba(243, 244, 246, 0.8)'
          }}
        >
          {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none ${
                  isActive 
                    ? (nightMode ? 'text-teal-300 font-semibold' : 'text-teal-900 font-semibold')
                    : (nightMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900')
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Sliding active tab indicator animated with Framer Motion layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-md shadow-xs"
                      style={{
                        backgroundColor: nightMode ? 'rgba(20, 184, 166, 0.16)' : '#ffffff',
                        border: nightMode ? '1px solid rgba(45, 212, 191, 0.3)' : '1px solid rgba(20, 184, 166, 0.25)'
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-teal-500" />
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Controls: CV Download, Theme Toggle, and Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {/* Download CV PDF button */}
          <a
            href="/cv.pdf"
            download="Jorge_Cummins_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white transition-all shadow-xs cursor-pointer"
            title="Download CV as PDF"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Get my resume</span>
          </a>

          {/* Theme switcher button (Dark / Light) */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-md border border-transparent hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle theme"
          >
            {nightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-md text-zinc-400 hover:text-zinc-200 cursor-pointer focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Responsive) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b px-4 py-3 space-y-1 overflow-hidden"
            style={{
              backgroundColor: nightMode ? '#161b24' : '#ffffff',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
            }}
          >
            {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-xs text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-400 font-semibold'
                      : 'text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200'
                  }`
                }
              >
                <Icon className="w-4 h-4 text-teal-500" />
                <span>{label}</span>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
