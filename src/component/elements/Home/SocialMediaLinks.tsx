import React from "react";
import Icon from "./Icon";
import { faLinkedin, faGithub, faInstagram, faMedium } from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks: React.FC = () => (
  <div className="social-media flex justify-center md:justify-start gap-4">
    <p className="text-lg md:text-xl font-bold">Follow me:</p>
    <a href="https://id.linkedin.com/in/enggar-dyah-bintang" target="_blank" rel="noopener noreferrer">
      <Icon icon={faLinkedin} />
    </a>
    <a href="https://github.com/enggardyh57" target="_blank" rel="noopener noreferrer">
      <Icon icon={faGithub} />
    </a>
    <a href="https://medium.com/@enggardyah57" target="_blank" rel="noopener noreferrer">
      <Icon icon={faMedium} />
    </a>
    <a href="https://instagram.com/enggardyah_" target="_blank" rel="noopener noreferrer">
      <Icon icon={faInstagram} />
    </a>
  </div>
);

export default SocialMediaLinks;
