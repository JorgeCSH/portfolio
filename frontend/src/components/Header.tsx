import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#242424] text-white py-4 w-full fixed top-0 left-0 z-[1000] shadow-md">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8">
        <h1 className="m-0 text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="list-none flex gap-8 m-0 p-0">
            <li><a href="#home" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#646cff]">Home</a></li>
            <li><a href="#about" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#646cff]">About</a></li>
            <li><a href="#projects" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#646cff]">Projects</a></li>
            <li><a href="#contact" className="text-white no-underline font-medium transition-colors duration-300 hover:text-[#646cff]">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
