import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Send, CheckCircle2, FileDown } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * Props for the ContactPage component:
 * - nightMode: boolean indicating dark mode state for styling card borders and backgrounds.
 */
interface ContactPageProps {
  nightMode: boolean;
}

/**
 * ContactPage Component
 *
 * Provides personal reach-out channels and a messaging form:
 * 1. Contact Information Card: Student profile summary, email with click-to-copy, location, CV download, and social links.
 * 2. Send Message Form: Controlled form fields (Name, Email, Message) with validation and a simulated async submit handler.
 * 3. Success Feedback Alert: Confirms to the user when their message was submitted successfully.
 * 
 * Note: Uses useScrollToTop hook instead of useLocation for automatic smooth scroll restoration.
 */
export const ContactPage = ({ nightMode }: ContactPageProps) => {
  // Smoothly scroll to the top of the window on mount
  useScrollToTop();

  // Temporary state showing a green checkmark when the email is copied to clipboard
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Controlled form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form submission loading and completion states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /**
   * Copies student email to the system clipboard and displays a 2-second confirmation checkmark
   */
  const handleCopyEmail = () => {
    if (!PROFILE.email) return;
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  /**
   * Handles message form submission:
   * Prevents standard HTML form reload, simulates an asynchronous network request,
   * resets the form inputs, and displays the success notification banner.
   */
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
      className="space-y-8 pb-16"
    >
      {/* -------------------------------------------------------------------- */}
      {/* Page Header */}
      {/* -------------------------------------------------------------------- */}
      <div
        className="border-b pb-4 space-y-1.5"
        style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-inherit">
          Contact
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl">
          Feel free to reach out regarding engineering internships, undergraduate research, or questions about my projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* ------------------------------------------------------------------ */}
        {/* 1. Contact Information Card */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="md:col-span-5 p-6 rounded-xl border space-y-6 shadow-xs"
          style={{
            backgroundColor: nightMode ? '#161b24' : '#ffffff',
            borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* Identity summary */}
          <div className="space-y-1">
            <h2 className="font-semibold text-base text-inherit">
              {PROFILE.name || "Jorge Cummins"}
            </h2>
            <p className="text-xs text-zinc-400">
              {PROFILE.role || "Computer Engineering Student"} {PROFILE.institution ? `• ${PROFILE.institution}` : ''}
            </p>
          </div>

          <div className="space-y-3 text-xs">
            {/* Email with copy-to-clipboard action */}
            {PROFILE.email ? (
              <div
                className="p-3 rounded-lg border flex items-center justify-between"
                style={{
                  backgroundColor: nightMode ? 'rgba(20, 184, 166, 0.05)' : 'rgba(240, 253, 250, 0.6)',
                  borderColor: nightMode ? 'rgba(45, 212, 191, 0.15)' : 'rgba(13, 148, 136, 0.15)'
                }}
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-400" />
                  <div>
                    <span className="text-[10px] text-zinc-500 block">Email</span>
                    <a href={`mailto:${PROFILE.email}`} className="text-zinc-200 hover:text-teal-300">
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded text-zinc-400 hover:text-white cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ) : (
              <p className="text-xs text-zinc-500 italic">
                Add your email in <code>PROFILE.email</code> inside <code>src/data/portfolioData.ts</code>.
              </p>
            )}

            {/* Geographical Location */}
            {PROFILE.location && (
              <div
                className="p-3 rounded-lg border flex items-center gap-2.5"
                style={{
                  backgroundColor: nightMode ? 'rgba(22, 27, 36, 0.5)' : 'rgba(243, 244, 246, 0.6)',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                <MapPin className="w-4 h-4 text-teal-400" />
                <div>
                  <span className="text-[10px] text-zinc-500 block">Location</span>
                  <span className="text-zinc-200">{PROFILE.location}</span>
                </div>
              </div>
            )}

            {/* CV Download button */}
            <a
              href="/cv.pdf"
              download="Jorge_Cummins_CV.pdf"
              className="p-3 rounded-lg border flex items-center justify-between text-zinc-300 hover:text-white transition-colors cursor-pointer group"
              style={{
                backgroundColor: nightMode ? 'rgba(20, 184, 166, 0.08)' : 'rgba(240, 253, 250, 0.8)',
                borderColor: nightMode ? 'rgba(45, 212, 191, 0.2)' : 'rgba(13, 148, 136, 0.2)'
              }}
              title="Download CV (PDF)"
            >
              <div className="flex items-center gap-2.5">
                <FileDown className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="font-medium block text-zinc-200">Curriculum Vitae (PDF)</span>
                  <span className="text-[10px] text-zinc-500">Click to download Jorge_Cummins_CV.pdf</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-teal-400 group-hover:underline">Download</span>
            </a>
          </div>

          {/* External Social Profiles buttons */}
          {(PROFILE.github || PROFILE.linkedin) && (
            <div
              className="pt-2 border-t flex items-center gap-3"
              style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
            >
              {PROFILE.github && (
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {PROFILE.linkedin && (
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 2. Interactive Message Form */}
        {/* ------------------------------------------------------------------ */}
        <div
          className="md:col-span-7 p-6 sm:p-8 rounded-xl border space-y-4 shadow-xs"
          style={{
            backgroundColor: nightMode ? '#161b24' : '#ffffff',
            borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
          }}
        >
          <h2 className="font-semibold text-base text-inherit">Send a Message</h2>

          {/* Success banner shown after form submission */}
          {submitted && (
            <div className="p-3.5 rounded-lg border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Thank you! Your message has been sent.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-zinc-400 font-medium block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First and last name"
                  className="w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-teal-500 transition-colors"
                  style={{
                    backgroundColor: nightMode ? '#10131a' : '#ffffff',
                    borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    color: 'inherit'
                  }}
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-zinc-400 font-medium block">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-teal-500 transition-colors"
                  style={{
                    backgroundColor: nightMode ? '#10131a' : '#ffffff',
                    borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    color: 'inherit'
                  }}
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <label className="text-zinc-400 font-medium block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note or question..."
                className="w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-teal-500 transition-colors resize-y"
                style={{
                  backgroundColor: nightMode ? '#10131a' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  color: 'inherit'
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
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
