'use client'
import React from 'react'
import Image from "next/image"
import {titleVariants, desVariants, tagVariants } from '@/utils/animations'
import { motion } from 'framer-motion'

const AboutComponent = () => {
    return (
        <div className='container py-12 xl:py-17 h-auto mx-auto xl:px-28'>
            <div className='flex gap-6 items-center lg:flex-row flex-col'>
                <motion.div 
                    initial="initial"
                    whileInView="animate"
                    variants={titleVariants}
                    className='lg:w-1/2 md:block hidden'>
                    <Image src='/images/aboutfront.png' alt='' width={900} height={500}/>
                </motion.div>
                <div className='lg:w-1/2'>
                    <motion.h1
                        initial="initial"
                        whileInView="animate"
                        variants={titleVariants}
                        className='text-3xl lg:text-5xl leading-tight font-extrabold'>We are awards winning company</motion.h1>
                    <motion.p 
                        initial="initial"
                        whileInView="animate"
                        variants={desVariants}
                        className='uppercase text-gray-400 py-4 tracking-wider'>world awards</motion.p>
                    <motion.p 
                        initial="initial"
                        whileInView="animate"
                        variants={tagVariants}
                        className='pb-4'>
                        This is a company engaged in the field of interior design. We provide the best
                        interior design for your home. We have been trusted by many people to design their
                        homes. We have also received many awards from various countries for our work.
                    </motion.p>
                    <motion.p 
                        initial="initial"
                        whileInView="animate"
                        variants={tagVariants}
                        className='pb-4'>
                        This is a company engaged in the field of interior design. We provide the best
                        interior design for your home. We have been trusted by many people to design their
                        homes. We have also received many awards from various countries for our work.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent