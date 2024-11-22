import React from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  className?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, className, required }) => {
  return <input id={id} type={type} placeholder={placeholder} required={required} className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`} />;
};

export default Input;
