import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Head from 'next/head'

const Footer = () => {
  return (
    <>
      <footer className='w-full border-t-2 border-solid px-5 border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div>
            Build with <FontAwesomeIcon icon={faHeart} className='text-red-500 px-1 ' />
            <Link href={`/`} className='underline underline-offset-2'> Vivekumar08</Link>
          </div>
          <Link href={`/contact`} className='underline underline-offset-2'> Contact with Me</Link>
        </Layout>
      </footer>
    </>
  )
}

export default Footer