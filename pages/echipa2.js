import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Article from '../components/Article'

import image from "../components/thumbnail.jpg"

const mockdata = [
  {
    title: "ASII",
    description: "Lorem ipsum dolor sit amet",
    image: "../components/thumbnail.jpg",
  },
  {
    title: "Test titlu",
    description: "Lorem ipsum dolor sit amet",
    image: "../components/thumbnail.jpg",
  },
  {
    title: "Alt titlu",
    description: "Lorem ipsum dolor sit amet",
    image: "../components/thumbnail.jpg",
  },
  {
    title: "Ultimul titlu",
    description: "Lorem ipsum dolor sit amet",
    image: "../components/thumbnail.jpg",
  },
  {
    title: "Ultimul titlu",
    description: "Lorem ipsum dolor sit amet",
    image: "../components/thumbnail.jpg",
  },
  {
    title: "Ultimul titlu",
    description: "Lorem ipsum dolor sit amet",
    image: "../components/thumbnail.jpg",
  },
  {
    title: "Ultimul titlu",
    description: "Lorem ipsum dolor sit amet",
    image: "../components/thumbnail.jpg",
  },
  {
    title: "Ultimul titlu",
    description: "Lorem ipsum dolor sit amet",
    image: "../components/thumbnail.jpg",
  },
  {
    title: "Ultimul titlu",
    description: "Lorem ipsum dolor sit amet",
    image: "../components/thumbnail.jpg",
  },
]

const echipa2 = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className='text-7xl text-red-500'>
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

      <div className='grid grid-cols-4'>
      {
        mockdata.map((data, index) => <Article key={index} title={data.title} description={data.description} image={data.image} />)
      }
      </div>
    </div>
  )
}

export default echipa2
