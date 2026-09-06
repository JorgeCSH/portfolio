import { useState } from 'react';

// =========================================================================
// WHERE TO WRITE: Put your personal contact info and social links here
// =========================================================================
const contactConfig = {
  // Replace with your real email address
  email: 'your.email@example.com',

  // Replace with your actual social media profiles
  socials: [
    {
      name: 'GitHub',
      handle: 'JorgeCSH',
      url: 'https://github.com/JorgeCSH', // WHERE TO WRITE: your GitHub link
      description: 'Check out my code repositories and open-source work.',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/your-profile',
      url: 'https://linkedin.com/in/', // WHERE TO WRITE: your LinkedIn link
      description: 'Connect with me professionally or message me for opportunities.',
      icon: 'linkedin',
    },
    {
      name: 'Twitter / X',
      handle: '@your-handle',
      url: 'https://twitter.com/', // WHERE TO WRITE: your Twitter/X link (or replace with another)
      description: 'Follow my tech thoughts, project updates, and discussions.',
      icon: 'twitter',
    },
    {
      name: 'Other Platform',
      handle: 'Add another link',
      url: '#', // WHERE TO WRITE: Add any other platform (e.g. YouTube, Discord, Blog)
      description: '/* Add your additional social media or contact link here */',
      icon: 'link',
    },
  ],
};

interface ContactProps {
  onBackToHome?: () => void;
}

export const Contact = ({ onBackToHome }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare mailto link with form values
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Message from ${formData.name || 'Portfolio Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contactConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-12 px-6 max-w-[1280px] mx-auto w-full flex-grow flex flex-col justify-center">
      {/* Back button */}
      {onBackToHome && (
        <div className="mb-8">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Portfolio (Home)</span>
          </button>
        </div>
      )}

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Contact <span className="text-[#646cff]">Me</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Have an opportunity, question, or just want to say hi? Reach out via
          email or connect with me through my social profiles.
        </p>
      </div>

      {/* Two Column Layout: Left Email / Right Social Media */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Write Me an Email                                            */}
        {/* ========================================================================= */}
        <div className="bg-[#242424] border border-[#38383e] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-[#38383e] flex items-center justify-center text-[#646cff]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Write Me an Email</h2>
                <p className="text-xs text-gray-400">
                  Send a message directly to my inbox
                </p>
              </div>
            </div>

            {/* Direct Email Address Box */}
            <div className="mb-6 p-4 rounded-xl bg-[#18181b] border border-[#38383e] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-gray-400 block mb-0.5">
                  Direct Email Address:
                </span>
                <span className="text-sm sm:text-base font-mono text-[#a5b4fc] font-medium break-all">
                  {contactConfig.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#242424] hover:bg-[#2e2e2e] border border-[#38383e] text-gray-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400">✓</span> Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#646cff] hover:bg-[#535bf2] text-white transition-colors no-underline"
                >
                  Mailto
                </a>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181b] border border-[#38383e] text-white placeholder-gray-500 focus:outline-none focus:border-[#646cff] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181b] border border-[#38383e] text-white placeholder-gray-500 focus:outline-none focus:border-[#646cff] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181b] border border-[#38383e] text-white placeholder-gray-500 focus:outline-none focus:border-[#646cff] transition-colors text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181b] border border-[#38383e] text-white placeholder-gray-500 focus:outline-none focus:border-[#646cff] transition-colors text-sm resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-[#646cff] hover:bg-[#535bf2] text-white font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#646cff]/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span>Send Email</span>
              </button>
            </form>

            {submitted && (
              <div className="mt-4 p-3 rounded-lg bg-emerald-950/40 border border-emerald-600/40 text-emerald-300 text-xs text-center">
                Opening your email client with your message drafted. If it didn't
                open, use the direct email box above!
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-[#38383e] text-xs text-gray-500">
            {/* Instruction comment for the user */}
            💡 Where to edit: Replace <code className="text-[#a5b4fc]">contactConfig.email</code> in <code className="text-[#a5b4fc]">src/components/Contact.tsx</code> with your own email address.
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: List of Media (LinkedIn, GitHub, etc.)                     */}
        {/* ========================================================================= */}
        <div className="bg-[#242424] border border-[#38383e] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-[#38383e] flex items-center justify-center text-[#646cff]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">My Media & Profiles</h2>
                <p className="text-xs text-gray-400">
                  Find me across the web and social networks
                </p>
              </div>
            </div>

            {/* Media List Cards */}
            <div className="space-y-4">
              {contactConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-[#18181b] border border-[#38383e] hover:border-[#646cff] transition-all duration-200 no-underline"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-[#242424] border border-[#38383e] group-hover:border-[#646cff] flex items-center justify-center text-gray-300 group-hover:text-[#646cff] transition-colors flex-shrink-0">
                    {social.icon === 'github' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                    )}

                    {social.icon === 'linkedin' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    )}

                    {social.icon === 'twitter' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}

                    {social.icon === 'link' && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-white group-hover:text-[#646cff] transition-colors">
                        {social.name}
                      </h3>
                      <span className="text-xs text-gray-500 group-hover:text-[#646cff] transition-colors flex items-center gap-1">
                        Visit ↗
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#a5b4fc] block mb-1">
                      {social.handle}
                    </span>
                    <p className="text-xs text-gray-400">
                      {social.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#38383e] text-xs text-gray-500">
            {/* Instruction comment for the user */}
            💡 Where to edit: Update the <code className="text-[#a5b4fc]">contactConfig.socials</code> array in <code className="text-[#a5b4fc]">src/components/Contact.tsx</code> with your profiles.
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactPage = Contact;
export default Contact;
