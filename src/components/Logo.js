import Link from 'next/link'
import React from 'react'


const Logo = () => {
    return (
        <div className='min-w-[350px] lg:min-w-[0px] lg:mx-12 lg:w-full flex items-center justify-center lg:justify-end font-monsieur'>
            <Link href={'/'} className='px-2 lg:px-0  h-20 w-fit font-black animate-text flex items-center justify-center text-5xl dark:font-semibold lg:text-4xl  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500'>
                Vivek Kumar
            </Link>
        </div>
    )
}

export default Logo