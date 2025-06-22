// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import angelLogoTiny from '../assets/angel-logo.svg';
import "../css/header.css";
import resume from '../assets/Angelica Suti Whiharto - Resume.pdf';
import { Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const headerSvgRef = useRef(null);

  const applyThemeToSVG2 = () => {
    const g = headerSvgRef.current?.contentDocument?.querySelector("g");
    console.log(g)
    if (g) {
      g.setAttribute("fill", theme === "dark" ? "#FFFFFF" : "#000000");
    }
  };

  useEffect(() => {
    applyThemeToSVG2();
  }, [theme]);

  useEffect(() => {
    const svgObject = headerSvgRef.current;
    if (!svgObject) return;

    const handleLoad = () => {
      applyThemeToSVG2();
    };

    svgObject.addEventListener("load", handleLoad);

    if (svgObject.contentDocument?.readyState === "complete") {
      applyThemeToSVG2();
    }

    return () => {
      svgObject.removeEventListener("load", handleLoad);
    };
  }, []);

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
    <header className="header border-b border-none bg-white dark:bg-black text-black dark:text-white sticky top-0 z-50 transition-colors duration-500 shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold">
          <object
            data={angelLogoTiny}
            type="image/svg+xml"
            className="h-6"
            ref={headerSvgRef}
          />
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
            className="text-black dark:text-white bg-white dark:bg-black border border-black dark:border-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105"
          >
            Resume
            <Download size={18} className="text-current" />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            className="hamburger flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu fixed top-0 left-0 w-1/2 h-full bg-white dark:bg-black bg-opacity-95 z-40 shadow-lg p-6 text-black dark:text-white transition">
          <div className="flex items-center gap-2 font-bold mb-6">
            <object
              data={angelLogoTiny}
              type="image/svg+xml"
              className="h-6"
              ref={headerSvgRef}
            />
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
              className="text-black dark:text-white bg-white dark:bg-black border border-black dark:border-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Resume
              <Download size={18} className="text-current" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
