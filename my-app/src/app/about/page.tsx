'use client'

import React , { useRef } from 'react'
import Image from "next/image";
import {titleVariants, desVariants, tagVariants } from '@/utils/animations'
import { TbArrowUpRight } from 'react-icons/tb'
import { motion, useTransform, useScroll } from 'framer-motion'
import { Button } from '@/components/ui/button';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div>
      <div className="bg-[url('/images/whoweare.jpg')] bg-cover bg-center">
        <h1 className="font-bold md:text-5xl text-4xl text-center lg:py-48 py-32 text-black">
          Who are we?
        </h1>
      </div>
      <div className="container mx-auto py-8 xl:px-28 h-auto">
        <div className='text-center'>
          <motion.h2 
            initial="initial"
            whileInView="animate"
            variants={titleVariants}
            className="font-bold text-4xl mb-8"
          >
            We have great idea & Interior design
          </motion.h2>
          <motion.p 
            initial="initial"
            whileInView="animate"
            variants={desVariants}
            className="font-semibold"
          >
            Our Interior design company is a company that provides interior design services for homes, offices,
            apartment, and others. We provide the best interior design for you. We have a team that is experienced
            in the field of interior.
          </motion.p>
        </div>
        <div>
          <div className='py-10 mt-5'>
            <div className='flex gap-x-8'>
              <motion.div
                style={{ scale }}
                ref={ref}
                className='w-full lg:block hidden'
              >
                <Image src={'/images/gallery1123.jpg'} alt='' width={600} height={600}/>
              </motion.div>
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={titleVariants}
              >
                <p>
                  We are on international architects. We believe that today it is fundamental to totally rethink
                  archi-techural education. Confluence not only integrates new visions on society but also
                  incorporates new method and contemporary tools linked to creativity, production and
                  portfolio, the unfolding box allows portfolio sheets...<br /><br />
                  We are on international architects. We believe that today it is fundamental to totally rethink
                  archi-techural education. Confluence not only integrates new visions on society but also
                  incorporates new method and contemporary tools linked to creativity, production and
                  portfolio, the unfolding box allows portfolio sheets...<br /><br />
                  <span className='font-extrabold tracking-tight'>
                    The backpiperARCH, we share a belief in the transformational power of people united in common purpose.
                  </span>
                </p>
                <Button className='inline-flex justify-center rounded-full px-6 gap-2 shadow-lg text-white
                hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 mt-3'>
                  Read more <TbArrowUpRight/>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Team section */}
        <div className='lg:py-12'>
          <div className='py-4'>
            <motion.h1 
              initial="initial"
              whileInView="animate"
              variants={titleVariants}
              className='uppercase text-center text-4xl font-bold tracking-wider'>
              team
            </motion.h1>
          </div>
          <div className='grid lg:grid-cols-3 py-8 gap-20'>
            <motion.div 
              initial="initial"
              whileInView="animate"
              variants={titleVariants}
              className='border-2 border-primary cursor-pointer'
            >
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary transition -m-0.5
              hover:-translate-x-2 hover:-translate-y-2'>
                <Image alt='' src='/images/profile2.jpg' width={200} height={200} className='rounded-full mx-auto'/>
                <h2 className='uppercase text-xl font-semibold py-4'>Building Surveys</h2>
                <p className='text-sm'>
                  Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial="initial"
              whileInView="animate"
              variants={desVariants}
              className='border-2 border-primary cursor-pointer'
            >
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary transition -m-0.5
              hover:-translate-x-2 hover:-translate-y-2'>
                <Image alt='' src='/images/profile1.jpg' width={200} height={200} className='rounded-full mx-auto'/>
                <h2 className='uppercase text-xl font-semibold py-4'>Building Surveys</h2>
                <p className='text-sm'>
                  Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial="initial"
              whileInView="animate"
              variants={tagVariants}
              className='border-2 border-primary cursor-pointer'
            >
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary transition -m-0.5
              hover:-translate-x-2 hover:-translate-y-2'>
                <Image alt='' src='/images/profile3.jpg' width={200} height={200} className='rounded-full mx-auto'/>
                <h2 className='uppercase text-xl font-semibold py-4'>Building Surveys</h2>
                <p className='text-sm'>
                  Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
