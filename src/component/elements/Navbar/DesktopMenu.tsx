interface DesktopMenuProps {
  activeLink: string;
  handleSetActive: (link: string) => void;
}

const DesktopMenu = ({ activeLink, handleSetActive }: DesktopMenuProps) => {

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
     
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

     
      window.history.pushState(
        {}, 
        "", 
        `#${sectionId}`
      );
    }
  };

  const menuItems = [
    { link: "Home", sectionId: "home" },
    { link: "Skills", sectionId: "skills" },
    { link: "Projects", sectionId: "projects" },
    { link: "Contact", sectionId: "contact" },
  ];

  return (
    <ul className="hidden md:flex gap-12 font-bold">
      {menuItems.map(({ link, sectionId }) => (
        <li
          key={link}
          onClick={(e) => {
            e.preventDefault(); 
            handleSetActive(link);
            handleScrollToSection(sectionId);
          }}
          className={`cursor-pointer ${activeLink === link ? "text-seccondary font-bold" : ""}`}
        >
          {link}
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
