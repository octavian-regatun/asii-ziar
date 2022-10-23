import { FaBars } from 'react-icons/fa';

function RevealList()
{
    console.log("It works");
}

export default function NavBar() {
  return (
    <nav className="navbar">
      <a href="" className="navbar-logo">
        <img
          className="navbar-img"
          src="https://ziar.asii.ro/wp-content/uploads/2017/11/cropped-23899336_1290842091062673_548336396_n.png"
        ></img>
      </a>
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="">Acasa</a>
        </li>
        <li className="navbar-link" S>
          <a href="">Articole</a>
        </li>
        <li className="navbar-link" S>
          <a href="">Istoric</a>
        </li>
        <li className="navbar-link" S>
          <a href="">Ziarul Tiparit</a>
        </li>
        <li className="navbar-link" S>
          <a href="">Echipa Ziarului</a>
        </li>
      </ul>
      <button className="navbar-list-button" onClick={RevealList}><FaBars/></button>
    </nav>
  );
}
