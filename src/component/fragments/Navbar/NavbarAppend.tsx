import DesktopMenuMolecule from "../../elements/Navbar/DesktopMenu";
import MobileMenuMolecule from "../../elements/Navbar/MobileMenu";
import IconNav from "../../elements/Navbar/IconNav";

interface NavbarAppendProps {
  activeLink: string;
  isMenuOpen: boolean;
  handleSetActive: (link: string) => void;
  toggleMenu: () => void;
}

const NavbarAppend = ({ activeLink, isMenuOpen, handleSetActive, toggleMenu }: NavbarAppendProps) => {
  return (
    <div className="Navbar w-full bg-primary shadow-2xl fixed z-10">
      <div className="container mx-auto px-12 py-4 flex justify-between items-center">
       
        <div className="logo text-3xl text-seccondary">Portofolio</div>

      
        <DesktopMenuMolecule activeLink={activeLink} handleSetActive={handleSetActive} />

       
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <IconNav type={isMenuOpen ? "close" : "menu"} />
        </div>
      </div>

     
      <MobileMenuMolecule isMenuOpen={isMenuOpen} activeLink={activeLink} handleSetActive={handleSetActive} />
    </div>
  );
};

export default NavbarAppend;
