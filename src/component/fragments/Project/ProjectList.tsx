import React from "react";
import ProjectCard from "../../elements/Project/ProjectCard";

interface Project {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
  onSeeDetails: (projectId: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onSeeDetails }) => {
  return (
    <div className="card-project flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} imageSrc={project.imageSrc} imageAlt={project.imageAlt} title={project.title} description={project.description} onSeeDetails={() => onSeeDetails(project.id)} />
      ))}
    </div>
  );
};

export default ProjectList;
