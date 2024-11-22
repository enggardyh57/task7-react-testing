import React from "react";
import Button from "./Button";
import SocialMediaLinks from "./SocialMediaLinks";

const IntroSection: React.FC = () => (
  <div className="greet flex flex-col w-full md:w-1/2 text-center md:text-left">
    <div className="content">
      <h2 className="text-3xl md:text-5xl opacity-70">Hello!</h2>
      <h1 className="text-4xl md:text-6xl font-bold my-2">I’m Enggar Dyah</h1>
      <h2 className="text-2xl md:text-4xl opacity-70">UI UX Designer</h2>

      
      <Button to="/my-resume" text="My Resume" />
    </div>

    
    <SocialMediaLinks />
  </div>
);

export default IntroSection;
