import React from 'react';

const navItems = [
  { label: 'About', href: '#about'},
  { label: 'Projects', href: '#projects'},
  { label: 'Contact', href: '#contact'},
]

const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-[1000] w-full bg-[#242424] text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-stretch justify-between px-8">
        <a  href="#home" className="flex items-center text-2xl font-bold text-white no-underline">My Portfolio</a>
        <nav arial-label="Main-navigation">
        <ul className="flex h-full">
        {navItems.map(({ label, href }) =>
              <li key={href} className="h-full">
                <a href={href} className="flex h-full items-center px-6 font-medium text-white no-underline transition-colors duration-300 hover:bg-[#646cff]">{label}</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
