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
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "landing", icon: <Home size={20} />, label: "Home" },
  { id: "about", icon: <UserRound size={20} />, label: "About" },
  { id: "skills", icon: <Code2 size={20} />, label: "Skills" },
  { id: "educations", icon: <GraduationCap size={20} />, label: "Educations" },
  { id: "experiences", icon: <Briefcase size={20} />, label: "Experiences" },
  { id: "projects", icon: <FolderGit2 size={20} />, label: "Projects" },
  { id: "others", icon: <Sparkles size={20} />, label: "Others" },
  { id: "contacts", icon: <Mail size={20} />, label: "Contact" },
];

const externalLinks = [
  {
    href: "https://github.com/hwasyui",
    icon: <Github size={20} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/angelicawhiharto",
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/angelstwhr",
    icon: <Instagram size={20} />,
    label: "Instagram",
  },
];

const Navigate = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Angelica Suti Whiharto - Resume.pdf";
  link.download = "Angelica Suti Whiharto - Resume.pdf";
  link.click();
};


  if (!mounted) return null;

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40
                 max-w-[50vw] w-auto px-2
                 overflow-x-auto flex gap-x-1 sm:gap-x-2 items-center
                 rounded-full border shadow-md backdrop-blur-md
                 bg-white/95 dark:bg-zinc-900/90
                 border-zinc-400 dark:border-zinc-700
                 scrollbar-thin scrollbar-thumb-zinc-400 dark:scrollbar-thumb-zinc-600"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {navItems.map(({ id, icon, label }) => (
        <Button
          key={id}
          variant="ghost"
          size="icon"
          className="hover:bg-zinc-200 dark:hover:bg-zinc-700"
          title={label}
          onClick={() => handleNavClick(id)}
        >
          {icon}
        </Button>
      ))}

      <span className="mx-1 h-6 w-[1px] bg-zinc-400 dark:bg-zinc-600 shrink-0" />

      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-zinc-200 dark:hover:bg-zinc-700"
        title="Download Resume"
        onClick={downloadResume}
      >
        <FileDown size={20} />
      </Button>

      {externalLinks.map(({ href, icon, label }, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className="hover:bg-zinc-200 dark:hover:bg-zinc-700"
          title={label}
          onClick={() => window.open(href, "_blank")}
        >
          {icon}
        </Button>
      ))}

      <span className="mx-1 h-6 w-[1px] bg-zinc-400 dark:bg-zinc-600 shrink-0" />

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
