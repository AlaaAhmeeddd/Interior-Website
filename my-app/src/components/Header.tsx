"use client"
import React , {useState ,useEffect} from "react"

import ThemeToggler from './ThemeToggler'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import MobileNavigation from '../components/MobileNavigation'

export default function Header() {
    const [yScroll , setYScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setYScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`sticky top-0 left-0 ${yScroll > 50 ? 'bg-tertiary shadow-md py-3' : 'bg-background py-5'} z-50 transition-all`}>
            <div className='container mx-auto xl:px-20'>
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="flex gap-x-8 items-center">
                        <Nav 
                            containerStyles="hidden xl:flex gap-x-8 items-center"
                            linkStyles='text-sm uppercase relative'
                            underLineStyle='absolute left-0 h-[2px] top-full w-full bg-primary'
                        />
                        <ThemeToggler />
                        <div className="xl:hidden">
                            <MobileNavigation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
