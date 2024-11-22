import React from "react";

interface LabelProps {
  htmlFor: string;
  text: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text, className }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-left font-bold mb-2 ${className}`}>
      {text}
    </label>
  );
};

export default Label;
