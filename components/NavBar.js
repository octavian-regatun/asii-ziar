import {FaBars} from 'react-icons/fa'

function ActivateList() {
    console.log("It works")
}

export default function NavBar() {
    return (
        <section>
        <nav>
            <a href="" className="logo"><img src="https://ziar.asii.ro/wp-content/uploads/2017/11/cropped-23899336_1290842091062673_548336396_n.png"></img></a>
            <ul className="linksNavBar" >
                <li>
                    <a href="">Acasa</a>
                </li>
                <li>
                    <a href="">Articole</a>
                </li>
                <li>
                    <a href="">Istoric</a>
                </li>
                <li>
                    <a href="">Ziarul Tiparit</a>
                </li>
                <li>
                    <a href="">Echipa Ziarului</a>
                </li>
            </ul>

            <button className='barsButton' onClick = {ActivateList}><FaBars/></button>
       </nav>

       </section>
    )
}