import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, score, time, place, info }) => {
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
                className="flex flex-col gap-2"
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {type} &nbsp; @{place}
                </h3>
                <span className="capitalize font-medium text-dark/75 xs:text-sm">
                    {time} | {score}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    );
};

const Education = () => {
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
                md:w-[2px] md:left-[30px] xs:left-[20px]"
            />
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details
                    type={"B. Tech [IT & MI]"}
                    score={"CGPA: 9.02"}
                    time={"Nov 2020 – Aug 2024"}
                    place={"Cluster Innovation Centre, University of Delhi "}
                    info={
                        "Strong analytical skills through Mathematics and application skills of Information Technology (IT)."
                    }
                />
                <Details
                    type={"12th"}
                    score={"Percentage: 84.8"}
                    time={"Jun 2022 – Sept 2022"}
                    place={"Kendriya Vidyalaya, Bulanshahr"}
                    info={
                        "Throughout my schooling, I studied Physics, Chemistry, Mathematics, and Computer Science as my core subjects. These subjects allowed me to develop a strong foundation in the sciences and mathematics, as well as gain proficiency in computer programming and problem-solving skills."
                    }
                />
                <Details
                    type={"10th"}
                    score={"Percentage: 79.6"}
                    time={"Mar 2021 – Apr 2021"}
                    place={"Kendriya Vidyalaya, Bulanshahr"}
                    info={
                        "During this period, I studied a comprehensive curriculum that included subjects such as English, Hindi, Mathematics, Social Science, and Science. These subjects provided me with a well-rounded education, allowing me to develop skills in language, mathematics, and social studies, as well as gain a deep understanding of scientific principles."
                    }
                />
            </ul>
        </div>
    );
};

export default Education;
