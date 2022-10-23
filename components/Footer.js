const Footer = () =>{
    return (
        <div className="flex flex-col bg-gray-50">

            <div className="line-container bg-gray-50">
                <div className="line"></div>
            </div>
            <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">

                <div className="p-5 mr-96">
                    <ul>
                        <p className="text-gray-800 font-bold text-3xl pb-6">
                            ASII<span className="text-blue-600"> ZIAR</span>
                        </p>

                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Social</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <a href="https://www.facebook.com/fii.asii/">Facebook</a>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">

                            <a href="https://www.instagram.com/instaasii/?next=%2F">Instagram</a>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                         <a href="https://twitter.com/fii_asii">Twitter</a>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <a href="https://www.linkedin.com/company/asii-asociatia-studentilor-informaticieni-ieseni">Linkedin</a>
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
                        <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Contact
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Support Portals
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            List Of Charges
                        </li>

                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Videos
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Contact
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Support Portals
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            List Of Charges
                        </li>

                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Videos
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Footer;