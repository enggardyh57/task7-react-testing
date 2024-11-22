import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={`px-5 py-3 rounded-full font-bold ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
