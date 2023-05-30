import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-12 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp; @{company}
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experiences = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div ref={ref} className="w-[75%] mx-auto my-16 py-6 relative lg:w-[90%] md:w-full">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        "/>
      <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
          position={"Web Developer"}
          company={"Cluster Innovation Centre, DU"}
          time={"Feb 2023 – Mar 2023"}
          address={"New Delhi, Delhi, India"}
          work={
            "Designed and Developed for National Seminar on Innovation in Higher Education through Public - Private - Partnership Model. Easy to navigate, despite being a single page. Engaging and informative with multimedia elements"
          }
        />
        <Details
          position={"Full Stack Developer"}
          company={"Daulatram College, DU"}
          time={"Jun 2022 – Sept 2022"}
          address={" New Delhi, Delhi, India"}
          work={
            "Designed and developed dynamic and responsive websites using MERN Stack with improved website Interface. Worked with REST APIs to retrieve and display data from databases. Worked with MVC frameworks to develop robust and scalable backends."
          }
        />
        <Details
          position={"Full Stack Developer"}
          company={"Cluster Innovation Centre, DU"}
          time={"Mar 2021 – Apr 2021"}
          address={" New Delhi, Delhi, India"}
          work={
            "Created a Web Application named Quick Access App. Consists of 5 features i.e TO-DO list, Calculator, Calendar, Music player, Weather, and prediction of the humidity in a city. Technologies used: HTML, CSS, Reactjs, MongoDB, NodeJs, and ExpressJs."
          }
        />
      </ul>
    </div>
  );
};

export default Experiences;
