// src/components/Header.jsx
import React from "react";
import angelLogo from '../assets/angel-logo.svg';
import "../css/header.css";
import resume from '../assets/Angelica Suti Whiharto - Resume.pdf'

const Header = () => {
  return (
    <header className="header shadow-sm border-b border-none bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 items-center h-16">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 font-bold">
          <img src={angelLogo} alt="Logo" className="h-6" />
          <span>Angel's Portofolio</span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex justify-center space-x-6 font-semibold">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact Me</a>
        </nav>

        {/* Right: Resume Button */}
        <div className="flex justify-end">
          <a
            href={resume}
            download
            className="text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition flex items-center gap-2"
          >
            Resume
            <span>⬇</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
