import React from 'react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
]; 

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-[#242424] py-8 text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-8 md:flex-row text-gray-500 ">
        <p className="m-0 text-sm"> 2026 My Portfolio. </p>
        <nav aria-label="Social media" className="text-sm items-center"> 
          <ul className="items-center flex gap-6"> 
            {socialLinks.map(({ label, href }) => (
              <li key={label}> 
                <a href={href} target="_blank" rel="noopener noreferrer" className="underline transition-colors duration-0 hover:text-[#646cff]" > {label} </a> 
              </li> 
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
