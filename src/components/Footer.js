import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <>
      <footer className='w-full border-t-2 border-solid px-5 border-dark dark:border-light text-dark dark:text-light font-medium text-lg md:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:gap-2 lg:py-6'>
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div>
            Build with <FontAwesomeIcon icon={faHeart} className='text-red-500 dark:text-primaryDark px-1 ' />
            <Link href={`/`} className='underline underline-offset-2'> Vivekumar08</Link>
          </div>
          <Link href={`/contact`} className='underline underline-offset-2'> Contact with Me</Link>
        </Layout>
      </footer>
    </>
  )
}

export default Footer