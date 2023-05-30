import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../utils/motion";
import styles from "@/styles";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import portfolio from "../../public/Projects/Portfolio.png";
import drc from "../../public/Projects/drc.png";
import cg from "../../public/Projects/cg.png";
import convoke from "../../public/Projects/convoke.png";
import conference from "../../public/Projects/conference.png";
import imageComp from "../../public/Projects/ImageCompress.png";
import qaa from "../../public/Projects/QAA.png";
import ai_img from "../../public/Projects/me.png";
import simulator from "../../public/Projects/SimulatorX.png";
import tictactoe from "../../public/Projects/TicTacToe.png";
import quiz from "../../public/Projects/quizstart.png";
import url_shortner from "../../public/Projects/url_shortner.png";

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light 
      rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]
      " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border border-dark rounded-xl"
          priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light lg:text-justify">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className=" group">
            <FontAwesomeIcon
              className={` group-hover:bg-black group-hover:text-light dark:group-hover:bg-light dark:group-hover:text-dark rounded-full w-10 h-10 
              sm:px-4 sm:text-base
              `}
              icon={faGithub}
            />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const NormProjects = ({ title, summary, img, tech, github }) => {
  const paragraphRef = useRef(null);
  // const [show, setShow] = useState(false);
  return (
    <div class="w-full flex flex-col items-center rounded-2xl p-1 shadow-inner dark:shadow-light shadow-dark dark:bg-dark bg-light ">
      <Image
        class="w-full h-[250px] object-fill block shadow-xl rounded-2xl p-2"
        src={img}
        alt={title}
        priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
      <div class="px-6 py-4">
        <div className="flex w-full items-center ">
          <h2 class="font-bold text-2xl w-full mb-2 flex justify-start">
            {title}
          </h2>
          <Link
            href={github}
            target="_blank"
            className="flex justify-end mb-2 group"
          >
            <FontAwesomeIcon
              className={` group-hover:bg-black rounded-full group-hover:text-light dark:group-hover:bg-light dark:group-hover:text-dark w-8 h-8`}
              icon={faGithub}
            />
          </Link>
        </div>
        <p ref={paragraphRef} class={`text-dark/75 text-base text-justify  dark:text-light/70`}>
          {summary}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        {tech &&
          tech.map((techn, i) => {
            return (
              <span
                key={i}
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{techn}
              </span>
            );
          })}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Vivek Kumar | Projects</title>
        <meta name="description" content="Vivekumar08/Contact" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center jsutify-center text-dark dark:text-light">
        <Layout className="pt-12 lg:pt-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-12"
          >
            <div className="w-full mx-auto py-2 mb-6 sm:mb-4 flex flex-col items-center justify-center text-center overflow-hidden">
              <motion.h1
                variants={textVariant(1.1)}
                className={`${styles.heroHeading} inline-block text-dark dark:text-light lg:!text-5xl sm:!text-4xl xs:!text-3xl font-bold capitalize text-6xl `}
              >
                Imagination as the Catalyst:
              </motion.h1>
              <motion.div
                variants={textVariant(1.2)}
                className="flex flex-row justify-center items-center capitalize"
              >
                <h1
                  className={`${styles.heroHeading} inline-block text-dark dark:text-light lg:text-xl sm:text-lg  font-bold capitalize text-4xl`}
                >
                  {" "}
                  Igniting Innovation and Discovery
                </h1>
              </motion.div>
            </div>
          </motion.div>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {/* Featured Projects */}
            <div className="col-span-12">
              <FeaturedProjects
                type={"Featured Project"}
                title={"Vivek Kumar's Portfolio"}
                summary={
                  "This portfolio website, built with Next.js and styled using Tailwind CSS, boasts a modern design with seamless navigation and fast performance. It showcases my work dynamically, integrates media effortlessly, and prioritizes accessibility. The codebase ensures maintainability, and positive user feedback validates its effectiveness in showcasing my skills."
                }
                img={portfolio}
                link={"/"}
                github={"https://github.com/Vivekumar08/final-portfolio/"}
              />
            </div>
            {/* normal Projects */}
            <div className="col-span-6 md:col-span-12">
              <NormProjects
                title={"QuickAccessApp"}
                summary={
                  "A versatile website that offers a range of convenient features. Experience its TODO list, Calculator, Calendar, Music player, and Weather functionality, including humidity predictions for any city."
                }
                tech={[
                  "HTML",
                  "CSS",
                  "Redux",
                  "Reactjs",
                  "MongoDB",
                  "NodeJs",
                  "ExpressJs",
                ]}
                img={qaa}
                github={"https://github.com/Vivekumar08/Quick-Access-App"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"Convoke 5.0"}
                summary={
                  "The dynamic and captivating world of our Tech Fest through this static single-page website. Immerse yourself in an interactive user interface enhanced with engaging animations like spring and slide-in effects. Discover a seamless blend of information and visual appeal as you explore the event details, participate in exciting activities, and witness the vibrant atmosphere of our Tech Fest. Get ready to be amazed and inspired!"
                }
                tech={[
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Redux",
                  "Reactjs",
                  "Framer Motion",
                ]}
                img={convoke}
                github={"https://github.com/Vivekumar08/"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"DRC Website"}
                summary={
                  "Designed and developed dynamic, responsive websites ensuring an improved website interface for seamless user experience. I have extensively worked with REST APIs, leveraging their capabilities to retrieve and display data from databases, ensuring efficient data management. Additionally, I have utilized MVC (Model-View-Controller) frameworks to build robust and scalable backends, enabling the development of highly functional web applications."
                }
                tech={[
                  "HTML",
                  "CSS",
                  "Tailwind",
                  "Redux",
                  "Reactjs",
                  "MongoDB",
                  "NodeJs",
                  "ExpressJs",
                ]}
                img={drc}
                github={"https://drc-du.netlify.app/"}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"National Seminar"}
                summary={
                  " Designed and developed a website for the National Seminar on Innovation in Higher Education through the Public-Private Partnership Model. The website features a single-page layout that is easy to navigate, ensuring a seamless user experience. It provides engaging and informative content, incorporating multimedia elements to enhance the presentation of information. The website aims to create an immersive and interactive platform for participants, fostering knowledge sharing and collaboration."
                }
                tech={[
                  "HTML",
                  "CSS",
                  "Tailwind",
                  "Redux",
                  "Reactjs",
                  "Framer Motion",
                ]}
                img={conference}
                github={"https://github.com/Vivekumar08/cic-conference"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"Image recognition"}
                summary={
                  "A hybrid CNN-KNN model for Facial Expression Recognition (FER). Leveraging Convolutional Neural Network (CNN) for feature extraction, the model combines it with a k-Nearest Neighbour (KNN) classifier. Through optimization of the Fully Connected layer and KNN distance function, the proposed hybrid model achieves enhanced accuracy on the FER-13 dataset. This advancement in deep learning algorithms presents a valuable contribution to applications in healthcare, marketing, and counselling."
                }
                tech={[
                  "Python",
                  "Keras",
                  "Tensorflow",
                  "Scipy",
                  "Scikit-learn",
                  "Seaborn",
                  "Matplotlib",
                  "Numpy",
                  "Pandas",
                  "Data Cleaning",
                  "Feature Extraction",
                ]}
                img={ai_img}
                github={"https://github.com/Vivekumar08/CNN_KNN"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"Image Compression"}
                summary={
                  "Image compression is a crucial technique to reduce image size while maintaining quality. By converting pixel values into a matrix, performing Singular Value Decomposition (SVD), and reassembling the matrix into an image, we can effectively compress images. The amalgamation of red, green, and blue colors represented by tiny pixels on screens tricks our brains into perceiving distinct colors from a distance."
                }
                tech={["MATLAB", "SVD"]}
                img={imageComp}
                github={"https://github.com/Vivekumar08/"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"SimulatorX"}
                summary={
                  "Web simulation of a potentiometer and generator, designed to bridge the gap between practical laboratory experiments and online learning. It allows students to virtually interact with and understand the functionality of potentiometers and generators. Through realistic simulations, users can experiment, observe, and analyze the effects of different settings and variables, ensuring a comprehensive learning experience from the comfort of their own homes. Break free from the limitations of physical labs and explore the world of electrical circuits with this immersive online simulation."
                }
                tech={["HTML", "CSS", "JQuery", "JavaScript", "Bootstrap"]}
                img={simulator}
                github={"https://github.com/Vivekumar08/SimulatorX"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"TIC TAC TOE"}
                summary={
                  "The classic game of tic-tac-toe to a whole new level! With its intuitive interface and engaging gameplay, This offers an exciting multiplayer experience on grids of various sizes. Challenge your friends or random opponents in intense battles on a 3x3 grid, and for the ultimate challenge, test your strategic skills on larger grids like 5x5"
                }
                tech={["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery"]}
                img={tictactoe}
                github={"https://github.com/Vivekumar08/Tic_Tac_Toe"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"CG Programs"}
                summary={
                  "Embark on a visually stunning journey through the realm of Computer Graphics with my collection of programs created using OpenGL and Tkinter. Witness extraordinary results as you explore programs like Bresenham Line and Ellipse Drawing, showcasing the power and creativity of these technologies. Experience the magic of transforming algorithms into captivating visuals, and unleash your imagination in this captivating world of Computer Graphics."
                }
                tech={[
                  "Python","Matplotlib","OpenGL","numpy","pandas","GUI",
                ]}
                img={cg}
                github={"https://github.com/Vivekumar08/Computer_Graphics_using_python"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"Quizstar"}
                summary={
                  "Immerse yourself in a stellar experience as you test your knowledge about planets, celestial bodies, and space exploration. Engage in an interactive interface that presents intriguing questions and multiple-choice options, providing an entertaining and educational journey through the cosmos. Challenge yourself or compete with friends to achieve the highest score and become a true space aficionado. Expand your horizons and embark on an exciting adventure into the wonders of the Solar System and Space."
                }
                tech={[
                  "python",
                  "GUI",
                  "Tkinter",
                  "Pandas",
                ]}
                img={quiz}
                github={"https://github.com/Vivekumar08/Quizstar"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <NormProjects
                title={"URL Shortner"}
                summary={
                  "This custom-built application takes long and complex URLs and generates shortened, easy-to-share links. With its intuitive interface, users can quickly input their desired URL and obtain a shortened version in just a few clicks. This efficient solution enhances convenience and promotes effective link sharing across various platforms, making it an essential tool for optimizing online communication and improving user experience."
                }
                tech={[
                  "Python",
                  "API",
                  "Tkinter",
                  "GUI",
                ]}
                img={url_shortner}
                github={"https://github.com/Vivekumar08/Url-shortner"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
