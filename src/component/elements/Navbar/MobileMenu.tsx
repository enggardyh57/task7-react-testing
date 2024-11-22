import NavbarItem from "./NavbarItem";

interface MobileMenuProps {
  isMenuOpen: boolean;
  activeLink: string;
  handleSetActive: (link: string) => void;
}

const MobileMenu = ({ isMenuOpen, activeLink, handleSetActive }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  const menuItems = [
    { link: "Home", sectionId: "home" },
    { link: "Skills", sectionId: "skills" },
    { link: "Projects", sectionId: "projects" },
    { link: "Contact", sectionId: "contact" },
  ];

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

     
      window.history.pushState({}, "", `#${sectionId}`);
    }
  };

  return (
    <ul className="flex flex-col gap-4 bg-click text-primary p-4 md:hidden font-bold border">
      {menuItems.map(({ link, sectionId }) => (
        <NavbarItem
          key={link}
          link={link}
          activeLink={activeLink}
          sectionId={sectionId}
          onClick={() => {
            handleSetActive(link);
            handleScrollToSection(sectionId); 
          }}
        />
      ))}
    </ul>
  );
};

export default MobileMenu;
