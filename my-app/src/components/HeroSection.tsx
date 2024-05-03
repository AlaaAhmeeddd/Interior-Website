"use client"

import React from 'react'
import { Button } from './ui/button'
import { TbArrowUpRight } from 'react-icons/tb'
import Image from "next/image"
import {titleVariants, desVariants, tagVariants } from '@/utils/animations'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <div className='container py-12 xl:py-17 h-auto mx-auto text-center xl:px-20 lg:text-left lg:flex lg:justify-between'>
            <div className='lg:w-1/2 xl:py-10 lg:py-8'>
                <motion.p
                    initial="initial"
                    animate="animate"
                    variants={titleVariants}
                    className='tracking-widest uppercase'
                >
                    Offer for the best Interior
                </motion.p>
                <motion.h1 
                    initial="initial"
                    animate="animate"
                    variants={desVariants}
                    className='h1'
                >
                    Make your home a <br/>
                    piece of art
                </motion.h1>
                <motion.p 
                    initial="initial"
                    animate="animate"
                    variants={tagVariants}
                    className='pb-6 text-muted-foreground xl:pb-10'
                >
                    Change your view with the best interior design. We provide the best interior design for
                    your Home. Make evert moment beautiful with the best interior design. Change your view 
                    with the best interior design. We provide the best interior design for
                    your Home. Make evert moment beautiful with the best interior design
                </motion.p>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={tagVariants}
                >
                    <Button className='inline-flex justify-center rounded-full px-10 gap-2 shadow-lg text-white
                        hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2'>
                        Book now <TbArrowUpRight/>
                    </Button>
                </motion.div>
            </div>
            <div>
                <Image src='/images/hall.png' width={500} height={450} alt=''
                className='lg:block hidden xl:h-[450] xl:w-[500] lg:h-[300] lg:w-[400] ml-4'/>
            </div>
        </div>
    )
}

export default HeroSection