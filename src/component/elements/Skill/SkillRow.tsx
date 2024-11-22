import ProgressBar from "./ProgressBar";

interface SkillRowProps {
  name: string;
  level: number;
  color: string;
}

const SkillRow: React.FC<SkillRowProps> = ({ name, level, color }) => {
  return (
    <div className="skill">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-bold">{name}</span>
      </div>
      <ProgressBar level={level} color={color} />
    </div>
  );
};

export default SkillRow;
