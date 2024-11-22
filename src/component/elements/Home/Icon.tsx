import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  icon: IconProp;
}

const Icon: React.FC<IconProps> = ({ icon }) => <FontAwesomeIcon icon={icon} size="2x" className="text-seccondary hover:text-click cursor-pointer" />;

export default Icon;
