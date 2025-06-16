// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import angelLogo from '../assets/angel-logo.svg';
import "../css/header.css";
import resume from '../assets/Angelica Suti Whiharto - Resume.pdf';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".mobile-menu") && !event.target.closest(".hamburger")) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <header className="header shadow-sm border-b border-none bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold">
          <img src={angelLogo} alt="Logo" className="h-6" />
          <span>Angel's</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center space-x-6 font-semibold">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact Me</a>
        </nav>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:flex justify-end">
          <a
            href={resume}
            download
            className="text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition flex items-center gap-2"
          >
            Resume
            <span>⬇</span>
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            className="hamburger flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu fixed top-0 left-0 w-1/2 h-full bg-white bg-opacity-95 z-40 shadow-lg p-6">
          <div className="flex items-center gap-2 font-bold mb-6">
            <img src={angelLogo} alt="Logo" className="h-6" />
            <span>Angel's</span>
          </div>
          <nav className="flex flex-col space-y-4 font-semibold">
            <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#project" onClick={() => setIsOpen(false)}>Project</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact Me</a>
            <a
              href={resume}
              download
              className="text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition flex items-center gap-2"
            >
              Resume
              <span>⬇</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;