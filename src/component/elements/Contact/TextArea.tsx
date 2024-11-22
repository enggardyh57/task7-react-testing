import React from "react";

interface TextAreaProps {
  id: string;
  placeholder: string;
  rows?: number;
  className?: string;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ id, placeholder, rows = 4, className, required }) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
    ></textarea>
  );
};

export default TextArea;
