import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, textVariant } from "../../utils/motion";
import Layout from "@/components/Layout";

import profilePic from "../../public/images/Vivek.png";
import Image from "next/image";
import Skills from "@/components/Skills";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      // console.log(latest);
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Vivek Kumar | About</title>
        <meta name="description" content="Vivekumar08 / About" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center text-dark dark:text-light">
        <Layout className="pt-6 lg:pt-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="w-full mx-auto py-2 mb-6 sm:mb-4 flex flex-col items-center justify-center text-center overflow-hidden">
              <motion.h1
                variants={textVariant(1.1)}
                className={`${styles.heroHeading} inline-block text-dark dark:text-light lg:!text-5xl sm:!text-4xl xs:!text-3xl font-bold capitalize text-6xl`}
              >
                Having a strong drive
              </motion.h1>
              <motion.div
                variants={textVariant(1.2)}
                className="flex flex-row justify-center items-center capitalize"
              >
                <h1
                  className={`${styles.heroHeading} inline-block text-dark dark:text-light lg:text-xl sm:text-lg  font-bold capitalize text-4xl`}
                >
                  {" "}
                  & enthusiasm to give direction and meaning to one{"'s"} life.
                </h1>
              </motion.div>
            </div>
          </motion.div>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2 ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium text-justify">
                As a seasoned software developer with expertise in multiple
                programming languages including Python, JavaScript, HTML5, and
                CSS3, I have developed a deep understanding of what it takes to
                build powerful and responsive websites. With years of experience
                using the MERN stack and tailwind CSS, I am confident in my
                ability to design, develop and maintain websites that meet the
                needs of businesses of all sizes.
              </p>
              <p className="my-4 font-medium text-justify">
                Throughout my career, I have worked with some of the most
                widely-used frameworks in web development, including React,
                Next, Vue, Angular, Bootstrap, and jQuery. This experience has
                given me a solid understanding of how to use these frameworks to
                create robust and scalable web applications that are both
                user-friendly and visually appealing.
              </p>
              <p className="my-4 font-medium text-justify">
                In addition to my technical skills, I have also developed
                excellent communication and problem-solving skills that allow me
                to work effectively with clients, project managers, and other
                stakeholders. I am always willing to go the extra mile to ensure
                that projects are delivered on time and within budget, and I
                take pride in my ability to work well under pressure.
              </p>
              <p className="my-4 font-medium text-justify">
                Overall, I am confident that my skills and experience make me an
                excellent candidate for any software development role. I am
                passionate about my work and I am committed to delivering
                exceptional results for every project I work on.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Vivekumar"
                className="w-full h-auto rounded-2xl"
                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  {" "}
                  <AnimatedNumber value={50} /> +
                </span>

                <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm text-dark/75 dark:text-light/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  <AnimatedNumber value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm text-dark/75 dark:text-light/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col  items-end xl:items-center  justify-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  <AnimatedNumber value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm text-dark/75 dark:text-light/75">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default About;
