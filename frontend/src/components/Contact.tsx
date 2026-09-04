import { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  nightMode: boolean;
}

export const Contact = ({ nightMode }: ContactProps) => {
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
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="border-b pb-4 space-y-1.5"
        style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-inherit">
          Contact
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Feel free to reach out regarding engineering internships, undergraduate research, or questions about my projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="md:col-span-5 p-6 rounded-xl border space-y-6"
          style={{
            backgroundColor: nightMode ? '#101726' : '#ffffff',
            borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="space-y-1">
            <h2 className="font-semibold text-base text-inherit">
              {PROFILE.name || "Your Name"}
            </h2>
            <p className="text-xs text-neutral-400">
              {PROFILE.role || "Computer Engineering Student"} {PROFILE.institution ? `• ${PROFILE.institution}` : ''}
            </p>
          </div>

          <div className="space-y-3 text-xs">
            {/* Email with copy */}
            {PROFILE.email ? (
              <div className="p-3 rounded-lg border flex items-center justify-between"
                style={{
                  backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.5)' : 'rgba(243, 244, 246, 0.6)',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <div>
                    <span className="text-[10px] text-neutral-500 block">Email</span>
                    <a href={`mailto:${PROFILE.email}`} className="text-neutral-200 hover:text-blue-400">
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded text-neutral-400 hover:text-white cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ) : (
              <p className="text-xs text-neutral-500 italic">
                Add your email in <code>PROFILE.email</code> inside <code>src/data/portfolioData.ts</code>.
              </p>
            )}

            {/* Location */}
            {PROFILE.location && (
              <div className="p-3 rounded-lg border flex items-center gap-2.5"
                style={{
                  backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.5)' : 'rgba(243, 244, 246, 0.6)',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                <MapPin className="w-4 h-4 text-neutral-400" />
                <div>
                  <span className="text-[10px] text-neutral-500 block">Location</span>
                  <span className="text-neutral-200">{PROFILE.location}</span>
                </div>
              </div>
            )}
          </div>

          {/* Social Links */}
          {(PROFILE.github || PROFILE.linkedin) && (
            <div className="pt-2 border-t flex items-center gap-3"
              style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
            >
              {PROFILE.github && (
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium border border-neutral-700/60 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
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
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium border border-neutral-700/60 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Message Form */}
        <div className="md:col-span-7 p-6 sm:p-8 rounded-xl border space-y-4"
          style={{
            backgroundColor: nightMode ? '#101726' : '#ffffff',
            borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
          }}
        >
          <h2 className="font-semibold text-base text-inherit">Send a Message</h2>

          {submitted && (
            <div className="p-3.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you! Your message has been sent.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-neutral-400 font-medium block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First and last name"
                  className="w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                  style={{
                    backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.6)' : '#ffffff',
                    borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    color: 'inherit'
                  }}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-medium block">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                  style={{
                    backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.6)' : '#ffffff',
                    borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    color: 'inherit'
                  }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-neutral-400 font-medium block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note or question..."
                className="w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-neutral-500 transition-colors resize-y"
                style={{
                  backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.6)' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  color: 'inherit'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-900 hover:bg-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
