import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, text, className, onClick }) => {
  return (
    <button type={type} className={`px-6 py-3 rounded-full font-bold ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
