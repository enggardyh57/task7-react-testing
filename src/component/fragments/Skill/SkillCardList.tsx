import SkillCard from "../../elements/Skill/SkillCard";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SkillCardListProps {
  cards: { icon: IconProp; title: string }[];
  activeCard: number | null;
  handleCardClick: (index: number) => void;
}

const SkillCardList: React.FC<SkillCardListProps> = ({ cards, activeCard, handleCardClick }) => {
  return (
    <div className="card-container flex flex-wrap gap-8 justify-center items-center mt-12 px-4">
      {cards.map((card, index) => (
        <SkillCard key={index} icon={card.icon} title={card.title} isActive={activeCard === index} onClick={() => handleCardClick(index)} />
      ))}
    </div>
  );
};

export default SkillCardList;
