import Link from "next/link";

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
