import Link from "next/link";
import PropTypes from "prop-types";

export default function NavBarDesktopButtons(props) {
  const { data } = props;

  return (
    <ul className="navbar-links">
      {data.map((item, index) => (
        <li key={`navbar-item-${index}`} className="navbar-link">
          <Link href={item.href}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

NavBarDesktopButtons.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};
