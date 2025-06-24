import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Github, FileText } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col h-full border rounded-xl p-6 space-y-4 shadow-md bg-white dark:bg-zinc-900 dark:border-zinc-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:hover:shadow-zinc-800">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-lg border dark:border-zinc-700"
      />

      <h3 className="text-xl font-bold text-zinc-800 dark:text-white">
        {project.title}
      </h3>

      <p className="text-sm text-zinc-600 dark:text-zinc-300">{project.description}</p>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((tech, index) => (
          <Badge
            key={index}
            variant="outline"
            className="text-xs dark:border-zinc-600 dark:text-white"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-1 pt-3">
        {project.url && (
          <Button variant="outline" size="sm" asChild className="gap-2 dark:border-zinc-600">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Globe size={16} /> Live
            </a>
          </Button>
        )}
        {project.gitrepo && (
          <Button variant="outline" size="sm" asChild className="gap-2 dark:border-zinc-600">
            <a href={project.gitrepo} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
          </Button>
        )}
        {project.doc && (
          <Button variant="outline" size="sm" asChild className="gap-2 dark:border-zinc-600">
            <a href={project.doc} target="_blank" rel="noopener noreferrer">
              <FileText size={16} /> Docs
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
