import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function NavBarMobileButtons(props) {
  const { data } = props;

  function handleMobileButton() {
    const navbarListButtons = document.getElementById(
      "responsive-navbar-links"
    );

    if (navbarListButtons.className === "none-responsive") {
      navbarListButtons.className = "responsive-navbar-links";
    } else {
      navbarListButtons.className = "none-responsive";
    }
  }

  return (
    <section className="dropDownBox">
      <ul className="none-responsive" id="responsive-navbar-links">
        {data.map((item, index) => (
          <li key={`navbar-item-${index}`} className="navbar-link">
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button className="navbar-list-button" onClick={handleMobileButton}>
        <FaBars />
      </button>
    </section>
  );
}
