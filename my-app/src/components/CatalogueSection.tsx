'use client'
import React from 'react'
import Image from 'next/image'
import { TbArrowNarrowRight } from 'react-icons/tb'

export default function CatalogueSection(){
    const items = [
        {
            id:'01',
            category: 'BEDROOM SETUP',
            title: 'Cossy Bedroom Setup',
            image: '/images/badroom.jpg',
            description: 'family drawing room with a clean and comfortable design for your family.',
        },
        {
            id:'02',
            category: 'KITCHEN SETUP',
            title: 'Neat & Clean Kitchen',
            image: '/images/kitchen1.jpg',
            description: 'family drawing room with a clean and comfortable design for your family.',
        },
        {
            id:'03',
            category: 'DRAWING SETUP',
            title: 'Drawing Room',
            image: '/images/drowing.jpg',
            description: 'family drawing room with a clean and comfortable design for your family.',
        },
        {
            id:'04',
            category: 'LIVING SETUP',
            title: 'Clean Family Room',
            image: '/images/living.jpg',
            description: 'family drawing room with a clean and comfortable design for your family.',
        },
    ]

    return(
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-0 divide-gray-300 lg:divide-x'>
            {
                items.map((item)=>(
                    <div key={item.id} className='relative group overflow-hidden'>
                        <div>
                            <Image 
                            src={item.image} 
                            alt='' 
                            width={380} 
                            height={100} 
                            className='w-full'/>
                        </div>
                        <div className='absolute top-0 p-7 bg-white bg-opacity-60 text-black backdrop-blur m-6'>
                            <div className='flex justify-between pb-4'>
                                <p className='text-sm'>{item.category}</p>
                                <span className='text-sm'>{item.id}</span>
                            </div>
                            <a href='' className='font-semibold text-xl'>{item.title}</a>
                            <div>
                                <p className='py-4'>{item.description}</p>
                                <a href="" className='flex items-center gap-2 font-medium'>See Details <TbArrowNarrowRight /></a>
                            </div>
                        </div>
                        <div className='bg-tertiary inset-0 absolute h-full p-8 
                        translate-y-0 group-hover:translate-y-full duration-150
                        md:flex flex-col justify-end items-center font-medium hidden'>
                            <p className="transform rotate-[270deg] mb-20">{item.category}</p>
                            <p>{item.id}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}