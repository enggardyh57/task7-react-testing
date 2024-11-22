import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectList from "../fragments/Project/ProjectList";
import Heading from "../fragments/Project/Heading";

const Project: React.FC = () => {
  const navigate = useNavigate();

  const handleSeeDetails = (projectId: string) => {
    navigate(`/project-detail/${projectId}`);
  };

  const projects = [
    {
      id: "creople-edu",
      imageSrc: "/1.png",
      imageAlt: "Project 1",
      title: "Creople Edu  (Creative People Education)",
      description: "Creople Edu is an online learning platform that offers a variety of hard and soft skills courses, complete with video materials, and awards certificates upon successful course completion.",
    },
    {
      id: "cumu",
      imageSrc: "/2.png",
      imageAlt: "Project 2",
      title: "Cumu (Curhat Untukmu)",
      description: "Cumu is a counseling service application that offers various services such as video calls, hanging out together, and conversations with experts in their fields who have excellent communication skills.",
    },
    {
      id: "gala-nexus",
      imageSrc: "/3.png",
      imageAlt: "Project 3",
      title: "Gala Nexus (Concert Ticket App)",
      description: "Gala Nexus is an online concert ticket booking application that simplifies the ticket purchasing process, featuring a search function and easy payment options for users.",
    },
  ];

  return (
    <div className="projectsection bg-seccondary py-20" id="projects">
      <div className="project max-w-4xl mx-auto">
        <Heading level={2} className="text-3xl text-center sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
          Projects
        </Heading>
        <Heading level={3} className="text-xl text-center sm:text-xl md:text-2xl mb-4 opacity-70 text-primary">
          Case Study
        </Heading>
        <ProjectList projects={projects} onSeeDetails={handleSeeDetails} />
      </div>
    </div>
  );
};

export default Project;
