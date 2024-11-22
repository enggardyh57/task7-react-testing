interface ProgressBarProps {
  level: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level, color }) => {
  return (
    <div className="relative w-full h-2 bg-black rounded-full">
      <div className={`absolute top-0 left-0 h-2 rounded-full ${color}`} style={{ width: `${level}%` }}></div>
    </div>
  );
};

export default ProgressBar;
