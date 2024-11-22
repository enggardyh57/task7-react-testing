import SkillRow from "../../elements/Skill/SkillRow";

interface Skill {
  name: string;
  level: number;
}

interface SkillListProps {
  skills: Skill[];
  getSkillColor: (level: number) => string;
}

const SkillList: React.FC<SkillListProps> = ({ skills, getSkillColor }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
      {skills.map((skill, index) => (
        <SkillRow key={index} name={skill.name} level={skill.level} color={getSkillColor(skill.level)} />
      ))}
    </div>
  );
};

export default SkillList;
