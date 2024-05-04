'use client'
import React from 'react'
import { Button } from './ui/button'
import { TbArrowUpRight } from 'react-icons/tb'
import {titleVariants, desVariants, tagVariants } from '@/utils/animations'
import { motion } from 'framer-motion'
import Image from "next/image"
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const imgURLs = [
    {
        id: 1,
        url: '/images/swiper1.jpg'
    },
    {
        id: 2,
        url: '/images/swiper2.jpg'
    },
    {
        id: 3,
        url: '/images/swiper3.jpg'
    },
    {
        id: 4,
        url: '/images/swiper4.jpg'
    },
    {
        id: 5,
        url: '/images/swiper5.jpg'
    },
    {
        id: 6,
        url: '/images/swiper6.jpg'
    },
    {
        id: 7,
        url: '/images/swiper7.jpg'
    },
    {
        id: 8,
        url: '/images/swiper8.jpg'
    },
]

export default function CategorySwiper() {
    return (
        <div className='lg:py-20 py-8'>
            <div className='container h-auto xl:px-28 pb-10'>
                <div>
                    <motion.h1 
                        initial="initial"
                        whileInView={"animate"}
                        variants={titleVariants}
                        className='font-semibold text-5xl py-4'>
                        Modern Classic
                    </motion.h1>
                    <motion.p  
                        initial="initial"
                        whileInView={"animate"}
                        variants={desVariants}
                        className='uppercase font-bold pb-6 text-xl'>
                        Luxury decor to create comfort in our home
                    </motion.p>
                </div>
                <motion.div 
                    initial="initial"
                    whileInView={"animate"}
                    variants={tagVariants}
                    className='grid md:grid-cols-2 grid-cols-1 gap-6 mb-8'>
                    <p>
                        With our passion for design and decor, we have created a collection of furniture and
                        accessories that will help you create a comfortable and stylish home. With our passion for design and decor,
                        we have created a collection of furniture and accessories that will help you create a comfortable and stylish home. 
                    </p>
                    <p>
                        With our passion for design and decor, we have created a collection of furniture and
                        accessories that will help you create a comfortable and stylish home. With our passion for design and decor,
                        we have created a collection of furniture and accessories that will help you create a comfortable and stylish home. 
                    </p>
                </motion.div>
                <Link href='/gallery'>
                    <Button className='inline-flex justify-center rounded-full px-10 gap-2 shadow-lg text-white
                        hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2'>
                        View Gallery <TbArrowUpRight/>
                    </Button>
                </Link>
            </div>

            {/* Swiper section */}

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    620:{
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },
                    1024:{
                        spaceBetween: 50,
                        slidesPerView: 3,
                    }
                }}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                >
                {
                    imgURLs.map((image)=>(
                        <SwiperSlide key={image.id}>
                            <Image src={image.url} alt='swiper' width={520} height={220} className='w-full'/>
                        </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
