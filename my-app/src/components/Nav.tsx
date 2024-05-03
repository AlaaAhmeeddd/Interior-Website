"use client"
import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion'
import {usePathname} from 'next/navigation'

const links = [
    {path: '/' , name: 'home'},
    {path: '/about' , name: 'about'},
    {path: '/gallery' , name: 'gallery'},
    {path: '/projects' , name: 'projects'},
    {path: '/contact' , name: 'contact'},
]

type classType={
    containerStyles: string,
    linkStyles: string,
    underLineStyle: string
}
const Nav = ({containerStyles , linkStyles , underLineStyle}: classType) => {
    const path = usePathname()
    return(
        <ul className={`${containerStyles}`}>
            {
                links.map((link,index)=>(
                    <li key={index} className='hover:text-primary transition-all'>
                        <Link href={link.path} className={`${linkStyles}`}>
                            {path === link.path && (
                                <motion.span
                                initial={{y: '-100%'}}
                                animate={{y: 0}}
                                transition={{type: 'tween'}}
                                layoutId='underline'
                                className={`${underLineStyle}`}
                                />
                            )}
                            {link.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Nav;