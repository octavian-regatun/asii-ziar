import { FaBars } from "react-icons/fa";
import navbarData from "../assets/data/navbar.json";
import NavBarDesktopButtons from "./NavBarDesktopButtons";
import NavBarLogo from "./NavBarLogo";
import NavBarMobileButtons from "./NavBarMobileButtons";

export default function NavBar() {
  return (
    <>
      <nav className="navbar h-16">
        <NavBarLogo />

        <NavBarDesktopButtons data={navbarData} />
        <NavBarMobileButtons data={navbarData} />
      </nav>
    </>
  );
}
