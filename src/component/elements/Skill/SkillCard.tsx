import Icon from "./Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SkillCardProps {
  icon: IconProp;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`card w-56 h-56 rounded-lg shadow-xl flex flex-col justify-center items-center cursor-pointer duration-100 border ${
        isActive ? "bg-seccondary text-white border-none" : "bg-primary text-secondary border-black"
      }`}
    >
      <Icon
        icon={icon}
        className={`mb-4 transition-all duration-300 ${isActive ? "text-white" : "text-secondary"}`}
        size="3x" 
      />
      <p className={`text-lg font-semibold text-center transition-all duration-300 ${isActive ? "text-white" : "text-secondary"}`}>{title}</p>
    </div>
  );
};

export default SkillCard;
