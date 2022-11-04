import { useEffect, useState } from "react";
import navbarData from "../assets/data/navbar.json";
import NavBarDesktopButtons from "./NavBarDesktopButtons";
import NavBarLogo from "./NavBarLogo";
import NavBarMobileButtons from "./NavBarMobileButtons";

export default function NavBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <>
      <nav className="navbar h-16">
        <NavBarLogo />

        <NavBarDesktopButtons data={navbarData} />
        {width <= 1024 && <NavBarMobileButtons data={navbarData} />}
      </nav>
    </>
  );
}
