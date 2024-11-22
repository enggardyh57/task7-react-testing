import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface IconNavProps {
  type: "menu" | "close";
}

const IconNav = ({ type }: IconNavProps) => {
  return type === "menu" ? <MenuIcon className="text-3xl text-seccondary" /> : <CloseIcon className="text-3xl text-seccondary" />;
};

export default IconNav;
