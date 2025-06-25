// src/components/Landing.jsx
import React, { useRef, useEffect } from "react";
import angelIcon from "../assets/angel-icon.svg";
import { useTheme } from "../context/ThemeContext";

const Landing = () => {
  const { theme } = useTheme();
  const svgRef = useRef(null);
  const outlineClass = theme === 'dark' ? 'outlined-text-dark' : 'outlined-text';

  const applyThemeToSVG = () => {
    const g = svgRef.current?.contentDocument?.querySelector("g");
    if (g) {
      g.setAttribute("fill", theme === "dark" ? "#FFFFFF" : "#000000");
    }
  };

  useEffect(() => {
    applyThemeToSVG();
  }, [theme]);

  useEffect(() => {
    const svgObject = svgRef.current;
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

  return (
    <section className=" min-h-screen mb-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20">
      <div className="text-left max-w-2xl mt-5 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-light leading-snug">
          Hello, I’m <span className="font-bold">Angelica Suti Whiharto.</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mt-3">
          <span className="font-bold">Artificial Intelligence </span>
          <span className={`font-bold ${outlineClass}`}>Engineer</span><br />
          Based In <span className="font-bold">Indonesia.</span>
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          An Informatics student from the 2023 batch with a passion for technology, problem-solving,
          and continuous learning. I enjoy turning ideas into practical digital solutions through
          programming, data, and system development.
        </p>
      </div>
      <div className="mb-10 md:mb-0">
        <object
          data={angelIcon}
          type="image/svg+xml"
          className="w-72 md:w-[480px]"
          ref={svgRef}
        />
      </div>
    </section>
  );
};

export default Landing;
