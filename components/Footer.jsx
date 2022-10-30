
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Footer = () =>{
    return (
        <>
        <div className="flex flex-col bg-gray-50">

            <div className="line-container bg-gray-50">
                <div className="line"></div>
            </div>
            <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">

                <div className="p-5 mr-50">
                    <img src="https://ziar.asii.ro/wp-content/uploads/2017/11/cropped-23899336_1290842091062673_548336396_n.png"></img>
                </div>
                <div className="p-5 mr-30">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Social</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <div>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon><a href="https://www.facebook.com/fii.asii/">Facebook</a>
                            </div>

                            
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <div>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> <a href="https://www.instagram.com/instaasii/?next=%2F">Instagram</a>
                            </div>
                           
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <div>
                         <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon><a href="https://twitter.com/fii_asii">Twitter</a>
                         </div>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <div>
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon><a href="https://www.linkedin.com/company/asii-asociatia-studentilor-informaticieni-ieseni">Linkedin</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Proiecte</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <a href="https://www.instagram.com/fiipractic/?next=%2F">Fii Practic</a>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                          <a href="https://www.instagram.com/fiicode/?next=%2F">Fii Code</a>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <a href="https://www.instagram.com/fiiitist/?next=%2F">Fii IT-ist</a>
                        </li>

                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Evenimente</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <a href="https://caritate.asii.ro/">Bal Caritate</a> 
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <a href="https://ziar.asii.ro/2022/05/26/balul-bobocilor-fii-2022/">Balul Bobocilor</a>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                           <a href="https://lanparty.asii.ro/">Lan Party</a>
                        </li>

                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <a href="https://www.facebook.com/infobachelp/">Info Bac Help</a>
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Parteneri</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                           <a href="https://ziar.asii.ro/2021/12/11/parteneri-fii-it-ist/">Parteneri Fii IT-ist</a>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                          <a href="https://ziar.asii.ro/2021/04/09/partenerii-fii-practic/">Parteneri Fii Practic</a>
                        </li>
                       
                    </ul>
                </div>
            </div>

        </div>
        <div className="flex flex-col justify-center items-center text-center  p-1 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					Drepturi de autor © 2022 Ziarul de ASII 
				</h1>
			</div>
        </>
    );
}

export default Footer;