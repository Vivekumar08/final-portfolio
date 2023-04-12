import Link from 'next/link'
import React from 'react'


const Logo = () => {
    return (
        <div className=' flex items-center justify-center font-monsieur'>
            <Link href={'/'} className='px-2 h-20 w-full font-black animate-text flex items-center justify-center text-2xl md:text-5xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500'
            >
                Vivek Kumar
            </Link>
        </div>
    )
}

export default Logo