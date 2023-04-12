import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile.png"
import TypewriterComponent from 'typewriter-effect'
import { introdata } from './utils/Content'
import { Buttons7 } from '@/components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vivek Kumar | Home</title>
        <meta name="description" content="Vivekumar08" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center text-dark w-full'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <Image src={profilePic} alt='Vivekumar' className='rounded-full w-2/5 aspect '></Image>
            <div className="w-1/2">
              <div className='flex items-center  self-center'>
                <div className='w-full mx-auto py-2 flex flex-col items-center justify-left text-center'>
                  <h2 className="mb-1 px-2 md:p-0 text-4xl font-bold">{"Hi, I'm Vivek Kumar"}</h2>
                  <h1 className={`flex py-2 w-full justify-center text-dark font-semibold text-3xl`}>
                    I am&nbsp;
                    <TypewriterComponent
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                          introdata.animated.fourth,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 100,
                        delay: 200,
                      }}
                    />
                  </h1>
                  <p >
                    A highly skilled software developer with over 3 years of experience in HTML, CSS, JavaScript, TypeScript and Python. I
                    have knowledge of popular frameworks such as React, Angular, and Vue.js and experience with REST APIs and MVC
                    frameworks. Effective team player with excellent analytical skills, and training potential. Problem-solving and communication
                    skills.
                  </p>
                  <div className='flex md:justify-start items-center self-start gap-12 p-4 w-2/3 pb-5 mt-2 '>
                    <Buttons7 title={"Resume"} href="/Assets/Rezume.pdf" />
                    <Buttons7 title={"Contact"} to="/contact" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
