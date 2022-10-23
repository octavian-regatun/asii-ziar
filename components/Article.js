import React from 'react'
import Image from 'next/image'

import image from './thumbnail.jpg'

export default function Article() {
  const text = 'Hello'

  return (
    <div className='flex flex-col bg-gray-200 p-4 m-3 rounded-md'>
      <Image src={image} alt='' className="w-2/6 rounded-md"/>
      <h1 className='text-2xl my-2 text-gray-900 font-semibold'>{text}</h1>
      <span className='text-base text-gray-600'>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. 
      </span>
      <button>Read Article</button>
    </div>
  )
}
