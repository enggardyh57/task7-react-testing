import React from "react";
import Icon from "./Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SkillCardProps {
  icon: IconProp;
  title: string;
  isActive: boolean;
  onClick: () => void;
  "data-testid"?: string; 
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, isActive, onClick, "data-testid": testId }) => {
  return (
    <div
      onClick={onClick}
      className={`card w-56 h-56 rounded-lg shadow-xl flex flex-col justify-center items-center cursor-pointer duration-100 border ${isActive ? "active bg-seccondary text-white border-none" : "bg-primary text-secondary border-black"}`}
      data-testid={testId} 
    >
      <Icon icon={icon} className={`mb-4 transition-all duration-300 ${isActive ? "text-white" : "text-secondary"}`} size="3x" />
      <p className={`text-lg font-semibold text-center transition-all duration-300 ${isActive ? "text-white" : "text-secondary"}`}>{title}</p>
    </div>
  );
};

export default SkillCard;
