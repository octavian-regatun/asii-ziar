import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Articol1 from '../components/Articol1'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useState } from 'react';
import imagine1 from "../components/imagine1.jpg";
import Image from "next/image";



const Echipa2 = () => {

  const [data, setData] = useState([])


  const mockdata =[
    {
      
      title: "Despre ASII",
      descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
      imagine: "/components/imagine1.jpg"
  
  },
  {
    title: "Ziarul De ASII",
    descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
    imagine: "/components/imagine1.jpg"
  },
  {
      
    title: "Eveniment",
    descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
    imagine: "/components/imagine1.jpg"

},
{
  title: "Eveniment",
  descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
  imagine: "/components/imagine1.jpg"
},
{
      
  title: "Proiect",
  descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
  imagine: "/components/imagine1.jpg"
},
{
  title: "Proiect",
descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
imagine: "/components/imagine1.jpg"
},
{
  
  title: "Proiect",
descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
imagine: "/components/imagine1.jpg"

},
{
  title: "Proiect",
descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
imagine: "/components/imagine1.jpg"
},
{
  title: "Proiect",
  descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
  imagine: "/components/imagine1.jpg"
  },
  {
    title: "Proiect",
    descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
    imagine: "/components/imagine1.jpg"
    },
  ];


useEffect(() => {
AOS.init();
setData(mockdata)

}, [])

  const handleType = (count) => {
    // access word count number
    console.log(count)}
  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }






  return (
    <div>
    <div className="text-5xl mt-5 mb-5 ml-5 text-white font-bold bg-red-600 w-2/6 rounded-2xl p-2 text-center ">
<Typewriter
            words={['Ziarul de ASII', 'Sectiunea Articole']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
            className=""
          />
        
          </div>
          <div className='grid grid-cols-4' data-aos="zoom-in">
        {
         data ? data.map(({imagine, title, descriere, key}) => (<Articol1 key ={key} imagine={imagine1} title={title} descriere={descriere} />)) : <div>nothing</div>
        }

          </div>
    </div>
  )
}

export default Echipa2