'use client'

import React from 'react'
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { motion } from 'framer-motion'
import {titleVariants, desVariants, tagVariants } from '@/utils/animations'

export default function Footer() {
    return (
        <div className='bg-tertiary'>
            <div className='container h-auto xl:px-16 lg:grid lg:grid-cols-2 py-14'>
                <div className='lg:grid lg:grid-cols-3 gap-4'>
                    <motion.div 
                        initial="initial"
                        whileInView={"animate"}
                        variants={titleVariants}
                    >
                        <h2 className='uppercase font-bold py-4'>company</h2>
                        <div className='flex flex-col'>
                            <Link href='/' className='hover:underline py-1'>About Us</Link>
                            <Link href='/' className='hover:underline py-1'>Press</Link>
                            <Link href='/' className='hover:underline py-1'>Careers</Link>
                            <Link href='/' className='hover:underline py-1'>Contact</Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView={"animate"}
                        variants={desVariants}
                    >
                        <h2 className='uppercase font-bold py-4'>Development</h2>
                        <div className='flex flex-col'>
                            <Link href='/' className='hover:underline py-1'>Documentation</Link>
                            <Link href='/' className='hover:underline py-1'>References</Link>
                            <Link href='/' className='hover:underline py-1'>Changelog</Link>
                            <Link href='/' className='hover:underline py-1'>Status</Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView={"animate"}
                        variants={tagVariants}
                    >
                        <h2 className='uppercase font-bold py-4'>Connect</h2>
                        <div className='flex flex-col'>
                            <Link href='/' className='hover:underline py-1'>Instagram</Link>
                            <Link href='/' className='hover:underline py-1'>Twitter</Link>
                            <Link href='/' className='hover:underline py-1'>LinkedIn</Link>
                            <Link href='/' className='hover:underline py-1'>Facebook</Link>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        initial="initial"
                        whileInView={"animate"}
                        variants={titleVariants}
                    >
                        <h2 className='uppercase font-bold py-4'>Stay updated</h2>
                        <div className='flex relative lg:max-w-sm'>
                            <Input placeholder='Email address' className='rounded-3xl py-6 px-6'/> 
                            <Button className='text-white bg-black rounded-3xl absolute right-1 top-1 hover:border-2 hover:bg-white hover:border-black hover:text-black'>
                                Subscribe
                            </Button>
                        </div>
                        <p className='pt-3 text-sm text-gray-500 dark:text-gray-300'>
                            By Subscribing to our newsletter, you agree to receive emails from us. Your
                            personal data will be stored and processed in accordance with our privacy policy
                            and you can unsubscribe at any time.
                        </p>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial="initial"
                whileInView={"animate"}
                variants={desVariants}
                className='bg-black text-white container xl:px-16 py-5 dark:bg-primary'
            >
                <div className='lg:flex lg:justify-between lg:items-center text-center'>
                    <p>&copy; 2024 Interior. All Rights Reserved</p>
                    <div className='flex gap-6 lg:justify-end justify-center lg:pt-0 pt-4'>
                        <Link href='/' className='hover:underline'>Terms</Link>
                        <Link href='/' className='hover:underline'>Privacy</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
