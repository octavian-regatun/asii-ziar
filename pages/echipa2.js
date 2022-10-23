import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Articol1 from '../components/Articol1'


const echipa2 = () => {

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
          <div className='grid grid-cols-3'>
          <Articol1 />
          <Articol1 />
          <Articol1 />
          <Articol1 />
          <Articol1 />
          <Articol1 />
          <Articol1 />
          <Articol1 />
          <Articol1 />
          <Articol1 />
          <Articol1 />
          <Articol1 />

          </div>
    </div>
  )
}

export default echipa2