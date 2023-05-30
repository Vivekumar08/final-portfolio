import Education from '@/components/Education'
import Experiences from '@/components/Experiences'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const Experience = () => {
    return (
        <>
            <Head>
                <title>Vivek Kumar | Experience</title>
                <meta name="description" content="Vivekumar08/Contact" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-6">
                    <div className="my-6 text-dark dark:text-light">
                        <h2 className="font-bold text-8xl mb-8 w-full text-center md:text-6xl xs:text-4xl md:mb-6">
                            Experience
                        </h2>
                        <Experiences />
                    </div>
                    <div className="my-6 text-dark dark:text-light">
                        <h2 className="font-bold text-8xl mb-8 w-full text-center md:text-6xl xs:text-4xl md:mb-6">
                            Education
                        </h2>
                        <Education />
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Experience