'use client'

import React from 'react'
import Image from "next/image";

const items = [
  {
    src: '/images/project2.jpg',
    title: 'Kitchen look modern and clean',
    description: 'Bedroom with a clean and comfortable design for your family. Charming with a modern design.'
  },
  {
    src: '/images/project3.jpg',
    title: 'Perfect living room for family time',
    description: 'Bedroom with a clean and comfortable design for your family. Charming with a modern design.'
  },
  {
    src: '/images/project4.png',
    title: 'Drawing room for family time',
    description: 'Bedroom with a clean and comfortable design for your family. Charming with a modern design.'
  }
]

export default function projects() {
  return (
    <div>
      <div className="bg-[url('/images/backgroundproject.jpg')] bg-cover bg-center">
        <h1 className="md:text-5xl text-4xl text-white font-semibold tracking-wider container lg:py-48 py-32 xl:px-28 ">Our Projects</h1>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8 container xl:px-28 py-14'>
        {
          items.map((item,index)=>(
            <div key={index} className='relative group overflow-hidden'>
              <Image src={item.src} alt='' width={480} height={380} className='rounded-lg w-full'/>
              <div className='md:p-12 p-4 absolute bg-white dark:bg-black dark:bg-opacity-60 w-3/4 bg-opacity-80 right-0 translate-y-0 group-hover:-translate-y-full transition-all'>
                <h1 className='font-semibold pb-2 md:text-xl'> {item.title} </h1>
                <p> {item.description} </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
