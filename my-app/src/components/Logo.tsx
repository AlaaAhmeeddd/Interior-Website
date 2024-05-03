import * as React from "react"
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../public/images/logo.png'

const Logo = () => {
    return(
        <Link href='/'>
            <Image src={logo} alt='' width={150} height={55} />
        </Link>
    )
}

export default Logo;