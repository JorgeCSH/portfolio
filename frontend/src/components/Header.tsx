import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Layers, 
  GraduationCap, 
  Wrench, 
  Mail, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText 
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export type ViewKey = 'about' | 'education' | 'skills' | 'projects' | 'contact';

interface HeaderProps {
  currentView: ViewKey;
  onSelectView: (view: ViewKey) => void;
  nightMode: boolean;
  onToggleTheme: () => void;
}

const NAV_ITEMS: { key: ViewKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'about', label: 'About me', icon: User },
  { key: 'education', label: 'Education', icon: GraduationCap },
  { key: 'skills', label: 'Skills', icon: Wrench },
  { key: 'projects', label: 'Projects', icon: Layers },
  { key: 'contact', label: 'Contact', icon: Mail },
];

export const Header = ({ currentView, onSelectView, nightMode, onToggleTheme }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (key: ViewKey) => {
    onSelectView(key);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors"
      style={{
        backgroundColor: nightMode ? 'rgba(11, 15, 23, 0.85)' : 'rgba(255, 255, 255, 0.88)',
        borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Name */}
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('about');
          }}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-semibold text-xs bg-neutral-800 text-neutral-100 border border-neutral-700/60 shadow-xs">
            JC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-inherit">{PROFILE.name || "Jorge Cummins"}</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 hidden sm:inline">
                {PROFILE.role || "Computer Engineering Student"}
              </span>
            </div>
            {PROFILE.institution && (
              <p className="text-[11px] text-neutral-500">
                {PROFILE.institution}
              </p>
            )}
          </div>
        </a>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-lg border"
          style={{
            borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.6)' : 'rgba(243, 244, 246, 0.8)'
          }}
        >
          {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
            const isActive = currentView === key;
            return (
              <a
                key={key}
                href={`#${key}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectView(key);
                }}
                className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none ${
                  isActive 
                    ? (nightMode ? 'text-white' : 'text-neutral-900 font-semibold')
                    : (nightMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-600 hover:text-neutral-900')
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-md shadow-xs"
                    style={{
                      backgroundColor: nightMode ? 'rgba(30, 41, 59, 0.9)' : '#ffffff',
                      border: nightMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)'
                    }}
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-neutral-400" />
                  {label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Resume & Theme Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-neutral-700/60 bg-neutral-800/40 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-400" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-md border border-transparent hover:border-neutral-700/60 text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle theme"
          >
            {nightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-md text-neutral-400 hover:text-neutral-200 cursor-pointer focus:outline-none"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b px-4 py-3 space-y-1"
            style={{
              backgroundColor: nightMode ? '#0f1724' : '#ffffff',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
            }}
          >
            {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(key);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-xs text-left transition-colors cursor-pointer ${
                  currentView === key
                    ? 'bg-blue-500/10 text-blue-500 font-semibold'
                    : 'text-neutral-400 hover:bg-neutral-800/40 hover:text-neutral-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
