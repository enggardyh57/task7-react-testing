interface NavbarItemProps {
  link: string;
  activeLink: string; 
  sectionId: string;
  onClick: () => void; 
}

const NavbarItem = ({ link, activeLink, sectionId, onClick }: NavbarItemProps) => {
 
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId); 
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <li
      onClick={(e) => {
        e.preventDefault();
        onClick(); 
        handleScrollToSection(sectionId); 
      }}
      className={`cursor-pointer ${activeLink === link ? "text-black font-bold" : ""}`}
    >
      <a href={`#${sectionId}`}>{link}</a> 
    </li>
  );
};

export default NavbarItem;
