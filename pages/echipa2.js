import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Articol1 from '../components/Articol1'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useState } from 'react';
import imagine1 from "../components/imagine1.jpg";
import Image from "next/image";



const echipa2 = () => {

  const [data, setData] = useState([])


  const mockdata =[
    {
      
      title: "Despre ASII",
      descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
      imagine: "https://www.collegedata.com/hs-fs/collegedata/images/article/what_will_college_life_be_like.jpg"
  
  },
  {
    title: "Despre ASII",
    descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
    imagine: "https://www.bgosoftware.com/blog/wp-content/uploads/2015/10/Featured_photo_BLOG_Humans.jpg"
  },
  {
      
    title: "Despre ASII",
    descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
    imagine: "https://www.collegedata.com/hs-fs/collegedata/images/article/what_will_college_life_be_like.jpg"

},
{
  title: "Despre ASII",
  descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
  imagine: "https://www.bgosoftware.com/blog/wp-content/uploads/2015/10/Featured_photo_BLOG_Humans.jpg"
},
{
      
  title: "Despre ASII",
  descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
  imagine: "https://www.collegedata.com/hs-fs/collegedata/images/article/what_will_college_life_be_like.jpg"

},
{
title: "Despre ASII",
descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
imagine: "https://www.bgosoftware.com/blog/wp-content/uploads/2015/10/Featured_photo_BLOG_Humans.jpg"
},
{
  
title: "Despre ASII",
descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
imagine: "https://www.collegedata.com/hs-fs/collegedata/images/article/what_will_college_life_be_like.jpg"

},
{
title: "Despre ASII",
descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
imagine: "https://www.bgosoftware.com/blog/wp-content/uploads/2015/10/Featured_photo_BLOG_Humans.jpg"
},
{
  title: "Despre ASII",
  descriere: "sdljha ldhas dhsald aslkh dashflkashflkas flkhassdf lkhafls khasflkhasflkh",
  imagine: "https://www.bgosoftware.com/blog/wp-content/uploads/2015/10/Featured_photo_BLOG_Humans.jpg"
  }
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
    <div className="text-5xl mt-5 mb-5 ml-5 text-white font-bold bg-red-500 w-2/6 rounded-2xl p-2 text-center ">
<Typewriter
            words={['Ziarul de ASII']}
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
          <div className='grid grid-cols-3' data-aos="zoom-in">
        {
         data ? data.map(({imagine, title, descriere}) => (<Articol1 imagine={imagine1} title={title} descriere={descriere} />)) : <div>nothing</div>
        }

          </div>
    </div>
  )
}

export default echipa2