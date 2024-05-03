import * as React from "react"
import Logo from './Logo'
import Nav from './Nav'
import { AlignJustify } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const MobileNavigation = () => {
    return(
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className='cursor-pointer'/>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle className='mx-auto my-10'>
                    <Logo />
                </SheetTitle>
                <SheetDescription>
                    <Nav 
                        containerStyles='flex flex-col gap-y-6 items-center'
                        linkStyles='uppercase text-1xl font-semibold'
                        underLineStyle=''
                    />
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavigation;