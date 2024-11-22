import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  href?: string; 
  to?: string; 
  text: string;
}

const Button: React.FC<ButtonProps> = ({ href, to, text }) => {
 
  if (to) {
    return (
      <Link to={to}>
        <button className="bg-seccondary text-white px-5 py-3 rounded-full my-4 hover:bg-click font-bold">{text}</button>
      </Link>
    );
  }

 
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="bg-seccondary text-white px-5 py-3 rounded-full my-4 hover:bg-click font-bold">{text}</button>
    </a>
  );
};

export default Button;
