import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#242424] text-white py-8 mt-auto w-full">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="m-0 text-sm">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-white hover:text-[#646cff] transition-colors">Twitter</a>
          <a href="#" className="text-white hover:text-[#646cff] transition-colors">GitHub</a>
          <a href="#" className="text-white hover:text-[#646cff] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
