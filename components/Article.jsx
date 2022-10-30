import React from 'react'
import Image from 'next/image'

import image from "../components/thumbnail.jpg"

export default function Article(props) {
  return (
    <div className='flex flex-col bg-gray-200 p-2 m-3 rounded-md border border-gray-400 shadow-md'>
      <Image src={image} alt='' className='w-2/6 rounded-md' />
      <h1 className='text-2xl my-2 text-gray-900 font-semibold'>{props.title}</h1>
      <span className='text-base text-gray-600'>
        {props.description}
      </span>
      <div>
        <button className='text-lg bg-red-500 text-white rounded-sm px-5 py-1'>
          Read Article
        </button>
      </div>
    </div>
  )
}
