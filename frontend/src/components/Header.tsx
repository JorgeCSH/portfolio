interface HeaderProps {
  currentView?: 'main' | 'contact';
  onNavigate?: (hash: string) => void;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Header = ({ currentView = 'main', onNavigate }: HeaderProps) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <header className="fixed left-0 top-0 z-[1000] w-full bg-[#242424] text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-stretch justify-between px-4 sm:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center text-lg sm:text-2xl font-bold text-white no-underline hover:text-[#646cff] transition-colors"
          title="Return to Greeting"
        >
          My Portfolio
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex h-full items-center m-0 p-0 list-none">
            {navItems.map(({ label, href }) => {
              const isContactItem = href === '#contact';
              const isActive = isContactItem && currentView === 'contact';

              return (
                <li key={href} className="h-full">
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`flex h-full items-center px-3 sm:px-5 text-sm sm:text-base font-medium no-underline transition-colors duration-200 hover:bg-[#646cff] ${
                      isActive ? 'text-white' : 'text-gray-200'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
