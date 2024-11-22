import React from "react";
import Image from "./Image";
import Heading from "../../fragments/Project/Heading";
import Button from "./Button";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  onSeeDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, imageAlt, title, description, onSeeDetails }) => {
  return (
    <div className="flex flex-col md:flex-row md:rounded-xl w-full gap-6 bg-primary rounded-none justify-center items-center p-6">
      <div className="image p-8">
        <Image src={imageSrc} alt={imageAlt} className="max-w-full h-auto" />
      </div>
      <div className="content text-center md:text-left">
        <Heading level={3} className="text-xl sm:text-xl md:text-2xl mb-4 font-bold">
          {title}
        </Heading>
        <p>{description}</p>
        <Button text="See Details" onClick={onSeeDetails} className="bg-seccondary text-white my-4 hover:bg-click" />
      </div>
    </div>
  );
};

export default ProjectCard;
