import React from "react";
import Projects from "../components/projects.jsx";

const FullProjects = () => {
  return (
    <main className="flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <section id="all-projects" className="scroll-mt-20 min-h-screen px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Projects showAll={true} />
        </div>
      </section>
    </main>
  );
};

export default FullProjects;
