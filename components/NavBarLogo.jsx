import Image from "next/image";
import Link from "next/link";

export default function NavBarLogo() {
  return (
    <Link href="/">
      <a className="navbar-logo relative w-64">
        <Image
          layout="fill"
          className="navbar-img"
          src="https://ziar.asii.ro/wp-content/uploads/2017/11/cropped-23899336_1290842091062673_548336396_n.png"
          alt="logo"
        />
      </a>
    </Link>
  );
}
