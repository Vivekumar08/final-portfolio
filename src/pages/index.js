import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion';
import profilePic from "../../public/images/Vivek.png";
import TypewriterComponent from 'typewriter-effect'
import { Buttons7 } from '@/components/Button'
import { staggerContainer, textVariant } from '../../utils/motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivek Kumar | Home</title>
        <meta name="description" content="Vivekumar08" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full flex items-center text-dark min-h-screen dark:text-light '>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-[75%] '>
              <Image src={profilePic} alt='Vivekumar' className='rounded-full w-[85%] lg:inline-block lg:w-full md:inline-block md:w-full' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className='w-1/2 lg:w-full flex items-center self-center'>
              <motion.div className='w-full mx-auto py-2 flex flex-col items-center justify-left text-center overflow-hidden sm:py-0'
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}>
                <motion.h1 variants={textVariant(1.0)} className="mb-1 px-2 md:p-0 text-5xl xl:text-4xl  md:text-5xl sm:text-3xl  font-bold">{"Hi, I'm Vivek Kumar"}</motion.h1>
                <motion.h2 variants={textVariant(1.2)} className={`flex py-2 w-full justify-center text-dark font-semibold text-3xl dark:text-light md:text-2xl `}>
                  <TypewriterComponent
                    options={{
                      strings: [
                        "Programmer",
                        "Software Developer",
                        "Full Stack Developer",
                        "Data Scientist",
                        "Data Analyst",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 80,
                      delay: 150,
                    }}
                  />
                </motion.h2>
                <p className='felx text-base font-medium md:text-sm'>
                  A highly skilled software developer with over 3 years of experience in HTML, CSS, JavaScript, TypeScript and Python. I
                  have knowledge of popular frameworks such as React, Angular, and Vue.js and experience with REST APIs and MVC
                  frameworks. Effective team player with excellent analytical skills, and training potential. Problem-solving and communication
                  skills.
                </p>
                <div className='flex xl:w-full items-center self-start gap-12 p-4 w-[75%] pb-5 mt-2 '>
                  <Buttons7 title={"Resume"} href="/Assets/UpdatedResume.pdf" />
                  <Buttons7 title={"Contact"} to="/contact" />
                </div>
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
