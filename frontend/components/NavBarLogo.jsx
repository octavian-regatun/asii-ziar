import Image from "next/image";
import Link from "next/link";

export default function NavBarLogo() {
  return (
    <Link href="/">
      <a className="navbar-logo relative w-64">
        <Image
          layout="fill"
          className="navbar-img"
          src="/logo.png"
          alt="logo"
        />
      </a>
    </Link>
  );
}
