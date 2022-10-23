import React from 'react'
import { Typewriter } from 'react-simple-typewriter'



const echipa2 = () => {

  const handleType = (count) => {
    // access word count number
    console.log(count)}
  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
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
  )
}

export default echipa2