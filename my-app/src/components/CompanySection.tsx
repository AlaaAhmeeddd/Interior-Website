'use client'
import React from 'react'
import Budge from './Budge'
import {titleVariants, desVariants, tagVariants } from '@/utils/animations'
import { motion } from 'framer-motion'

const CompanySection = () => {
    return (
        <div className='bg-primary dark:bg-tertiary py-24'>
            <dl className='mx-auto text-white px-6 lg:px-12 grid grid-col-1 gap-x-6 gap-y-16 text-center lg:grid-cols-3'>
                <motion.div 
                    initial="initial"
                    whileInView={"animate"}
                    variants={titleVariants}
                    className='flex flex-col gap-y-4'>
                    <dt className='leading-7'>
                        Transaction every 24 hours
                    </dt>
                    <dd className='order-first font-semibold text-3xl tracking-tight sm:text-4xl'>
                        <Budge endCountNum={44} endCountText=' Million' containerStyle=''/>
                    </dd>
                </motion.div>
                <motion.div 
                    initial="initial"
                    whileInView={"animate"}
                    variants={desVariants}
                    className='flex flex-col gap-y-4'>
                    <dt className='leading-7'>
                        Assets under running
                    </dt>
                    <dd className='order-first font-semibold text-3xl tracking-tight sm:text-4xl'>
                        <Budge endCountNum={119} endCountText=' Trillion' containerStyle=''/>
                    </dd>
                </motion.div>
                <motion.div 
                    initial="initial"
                    whileInView={"animate"}
                    variants={tagVariants}
                    className='flex flex-col gap-y-4'>
                    <dt className='leading-7'>
                        New user annually
                    </dt>
                    <dd className='order-first font-semibold text-3xl tracking-tight sm:text-4xl'>
                        <Budge endCountNum={45000} endCountText=' +' containerStyle=''/>
                    </dd>
                </motion.div>
            </dl>
        </div>
    )
}

export default CompanySection