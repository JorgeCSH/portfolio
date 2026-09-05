import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * ContactPage Component
 *
 * Direct communication channels and message reach-out form.
 * Designed with open typography and warm amber accents, avoiding nested card hell.
 */
export const ContactPage = () => {
  useScrollToTop();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    if (!PROFILE.email) return;
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 600);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="space-y-12 pb-16"
    >
      {/* -------------------------------------------------------------------- */}
      {/* Page Header */}
      {/* -------------------------------------------------------------------- */}
      <div className="border-b border-zinc-800/80 pb-6">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
            reach out // communication
          </span>
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
            Contact
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl pt-1">
            Feel free to reach out regarding software engineering internships, full-stack opportunities, or questions about my projects.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* ------------------------------------------------------------------ */}
        {/* 1. Contact Information (Open Layout, No Nested Cards) */}
        {/* ------------------------------------------------------------------ */}
        <div className="md:col-span-5 space-y-8">
          <div className="space-y-1">
            <h2 className="font-semibold text-lg text-zinc-100">
              {PROFILE.name || "Jorge Cummins"}
            </h2>
            <p className="text-xs font-mono text-zinc-400">
              {PROFILE.role || "Software & Computer Engineering Student"}
              {PROFILE.institution ? ` • ${PROFILE.institution}` : ''}
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Email with copy-to-clipboard action */}
            {PROFILE.email ? (
              <div className="border-b border-zinc-800/80 pb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">email</span>
                    <a href={`mailto:${PROFILE.email}`} className="text-zinc-200 hover:text-indigo-400 transition-colors">
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-indigo-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ) : (
              <p className="text-xs text-zinc-500 italic">
                Add your email in PROFILE.email inside src/data/portfolioData.ts.
              </p>
            )}

            {/* Geographical Location */}
            {PROFILE.location && (
              <div className="border-b border-zinc-800/80 pb-3 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">location</span>
                  <span className="text-zinc-200">{PROFILE.location}</span>
                </div>
              </div>
            )}

            {/* CV Download shortcut link */}
            <div className="border-b border-zinc-800/80 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">resume / cv</span>
                <span className="text-zinc-200">Jorge_Cummins_CV.pdf</span>
              </div>
              <a
                href="/cv.pdf"
                download="Jorge_Cummins_CV.pdf"
                className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 transition-colors"
                title="Download CV as PDF"
              >
                <span>download</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          {(PROFILE.github || PROFILE.linkedin) && (
            <div className="flex items-center gap-4 text-xs font-mono">
              {PROFILE.github && (
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-indigo-400 inline-flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>github</span>
                </a>
              )}

              {PROFILE.linkedin && (
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-indigo-400 inline-flex items-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>linkedin</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 2. Interactive Message Form (Open Layout) */}
        {/* ------------------------------------------------------------------ */}
        <div className="md:col-span-7 space-y-6">
          <h2 className="font-semibold text-lg text-zinc-100">Send a Message</h2>

          {submitted && (
            <div className="p-3.5 rounded-md border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Thank you! Your message has been sent.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-zinc-400 font-mono text-[11px] block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First and last name"
                  className="w-full px-3 py-2 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-zinc-400 font-mono text-[11px] block">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3 py-2 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-400 font-mono text-[11px] block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note or question..."
                className="w-full px-3 py-2 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-400 transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-md text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

