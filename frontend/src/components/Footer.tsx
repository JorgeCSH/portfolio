const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/JorgeCSH' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
];

export const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-[#242424] py-8 text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] border-t border-[#38383e]/50">
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 sm:px-8 md:flex-row text-gray-400">
        <p className="m-0 text-sm">© 2026 Jorge Cummins</p>

        <nav
          aria-label="Social media"
          className="text-sm md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <ul className="items-center flex gap-6 list-none m-0 p-0">
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#646cff] transition-colors duration-200 no-underline hover:underline text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('home');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors no-underline flex items-center gap-1"
        >
          <span>Back to top</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
