// src/components/Header.jsx
import React, { useEffect, useRef } from "react";
import angelLogoTiny from "../assets/angel-logo.svg";
import resume from "../assets/Angelica Suti Whiharto - Resume.pdf";
import { Download, Menu } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const { theme } = useTheme();
  const headerSvgRef = useRef(null);

  const applyThemeToSVG = () => {
    const g = headerSvgRef.current?.contentDocument?.querySelector("g");
    if (g) {
      g.setAttribute("fill", theme === "dark" ? "#FFFFFF" : "#000000");
    }
  };

  useEffect(() => {
    applyThemeToSVG();
  }, [theme]);

  useEffect(() => {
    const svgObject = headerSvgRef.current;
    if (!svgObject) return;

    const handleLoad = () => applyThemeToSVG();
    svgObject.addEventListener("load", handleLoad);

    if (svgObject.contentDocument?.readyState === "complete") {
      applyThemeToSVG();
    }

    return () => {
      svgObject.removeEventListener("load", handleLoad);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="top-0 z-50 w-full border-b bg-white/90 dark:bg-black/90 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <object
            data={angelLogoTiny}
            type="image/svg+xml"
            className="h-6"
            ref={headerSvgRef}
          />
          <span>Angel's</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium">
          {["about", "skills", "projects", "contacts"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {section === "about"
                ? "About Me"
                : section === "projects"
                  ? "Project"
                  : section === "contacts"
                    ? "Contact Me"
                    : "Skills"}
            </button>
          ))}
        </nav>

        {/* Resume Download Button */}
        <div className="hidden md:flex">
          <a href={resume} download>
            <Button variant="outline" className="gap-2">
              Resume <Download size={16} />
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-3/4 sm:w-1/2 bg-white dark:bg-black text-black dark:text-white shadow-lg px-6 py-8 space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center gap-2 font-bold text-lg">
                <object
                  data={angelLogoTiny}
                  type="image/svg+xml"
                  className="h-6"
                  ref={headerSvgRef}
                />
                <span>Angel's</span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4 text-base font-medium">
                {["about", "skills", "project", "contact"].map((section) => (
                  <SheetClose asChild key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-left transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {section === "about"
                        ? "About Me"
                        : section === "project"
                          ? "Project"
                          : section === "contact"
                            ? "Contact Me"
                            : "Skills"}
                    </button>
                  </SheetClose>
                ))}
              </nav>

              {/* Resume Button */}
              <a href={resume} download className="block w-full">
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2 border border-black dark:border-white"
                  >
                    Resume <Download size={16} />
                  </Button>
                </SheetClose>
              </a>
            </SheetContent>

          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
