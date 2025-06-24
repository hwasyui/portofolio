import React, { useEffect, useState } from "react";
import {
  Home,
  UserRound,
  Code2,
  FolderGit2,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  Instagram,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const navItems = [
  { id: "landing", icon: <Home size={20} />, label: "Home" },
  { id: "about", icon: <UserRound size={20} />, label: "About" },
  { id: "skills", icon: <Code2 size={20} />, label: "Skills" },
  { id: "projects", icon: <FolderGit2 size={20} />, label: "Projects" },
  { id: "contact", icon: <Mail size={20} />, label: "Contact" },
];

const externalLinks = [
  {
    href: "https://github.com/yourusername",
    icon: <Github size={20} />,
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: <Linkedin size={20} />,
  },
  {
    href: "https://instagram.com/yourusername",
    icon: <Instagram size={20} />,
  },
];

const Navigate = () => {
  const { theme, setTheme } = useTheme();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!showNav) return null;

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-fit w-full px-4
                 flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-2
                 rounded-full border shadow-md backdrop-blur-md
                 bg-white/95 dark:bg-zinc-900/90
                 border-zinc-400 dark:border-zinc-700"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Internal Navigation */}
      {navItems.map(({ id, icon }) => (
        <Button
          key={id}
          variant="ghost"
          size="icon"
          onClick={() => scrollTo(id)}
          className="hover:bg-zinc-200 dark:hover:bg-zinc-700"
        >
          {icon}
        </Button>
      ))}

      {/* Divider */}
      <span className="mx-1 h-6 w-[1px] bg-zinc-400 dark:bg-zinc-600" />

      {/* Resume Download */}
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="hover:bg-zinc-200 dark:hover:bg-zinc-700"
      >
        <a
          href="/Angelica Suti Whiharto - Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          title="Download Resume"
        >
          <FileDown size={20} />
        </a>
      </Button>

      {/* External Links */}
      {externalLinks.map(({ href, icon }, index) => (
        <Button
          key={index}
          asChild
          variant="ghost"
          size="icon"
          className="hover:bg-zinc-200 dark:hover:bg-zinc-700"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        </Button>
      ))}

      {/* Divider */}
      <span className="mx-1 h-6 w-[1px] bg-zinc-400 dark:bg-zinc-600" />

      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="hover:bg-zinc-200 dark:hover:bg-zinc-700"
        title="Toggle Theme"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    </motion.div>
  );
};

export default Navigate;
