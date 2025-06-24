import React from "react";
import data from "../data/projects.json";
import ProjectCard from "./project-card.jsx";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Projects = ({ showAll = false }) => {
  const navigate = useNavigate();
  const projectsToShow = showAll ? data : data.slice(0, 6);

  return (
    <div className="p-6 space-y-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsToShow.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/projects")}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;
