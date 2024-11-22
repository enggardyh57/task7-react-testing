import { useState } from "react";
import NavbarOrganism from "../fragments/Navbar/NavbarAppend";

const NavbarPage = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActive = (link: string): void => {
    setActiveLink(link);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return <NavbarOrganism activeLink={activeLink} isMenuOpen={isMenuOpen} handleSetActive={handleSetActive} toggleMenu={toggleMenu} />;
};

export default NavbarPage;
