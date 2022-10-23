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
    <div className="text-7xl text-red-500">
<Typewriter
            words={['Ziarul de ASII']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        
          </div>
          <div>
          <Articol1 />
          </div>
    </div>
  )
}

export default echipa2