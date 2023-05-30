import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.25 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            className='flex items-center justify-center rounded-full font-semibold z-0 hover:z-30 bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 dark:text-dark dark:bg-light xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg sm:bg-circularLightSm sm:dark:bg-circularDarkSm md:bg-circularLightMd md:dark:bg-circularDarkMd
            '>
                {/* Web Dev */}
                <Skill name={"Web"} x={'0vw'} y={'0vw'} />
                <Skill name={"HTML5"} x={'12vw'} y={'-3vw'} />
                <Skill name={"JavaScript"} x={'-7vw'} y={'6vw'} />
                <Skill name={"CSS3"} x={'-2vw'} y={'-7vw'} />
                <Skill name={"Tailwind CSS"} x={'-28vw'} y={'-15vw'} />
                <Skill name={"Material"} x={'-23vw'} y={'6vw'} />
                <Skill name={"Bootstrap"} x={'-8vw'} y={'15vw'} />
                <Skill name={"ReactJs"} x={'10vw'} y={'-10vw'} />
                <Skill name={"Python"} x={'1vw'} y={'-23vw'} />
                <Skill name={"NextJs"} x={'1vw'} y={'-15vw'} />
                <Skill name={"Redux"} x={'-20vw'} y={'-9vw'} />
                <Skill name={"Vue"} x={'-9vw'} y={'-10vw'} />
                <Skill name={"AngularJs"} x={'22vw'} y={'-8vw'} />
                <Skill name={"MongoDB"} x={'-18vw'} y={'-2vw'} />
                <Skill name={"MySQL"} x={'-22vw'} y={'14vw'} />
                <Skill name={"NodeJs"} x={'8vw'} y={'11vw'} />
                <Skill name={"ExpressJs"} x={'19vw'} y={'2vw'} />
                {/* Data Analysis */}
                <Skill name={"MATLAB"} x={'30vw'} y={'-15vw'} />
                <Skill name={"R"} x={'-11vw'} y={'-18vw'} />
                <Skill name={"Excel"} x={'11vw'} y={'-18vw'} />
                <Skill name={"Tableau"} x={'18vw'} y={'-20vw'} />
                <Skill name={"Data mining"} x={'18vw'} y={'16vw'} />
                <Skill name={"Data cleaning"} x={'1vw'} y={'19vw'} />
                <Skill name={"ML & DL"} x={'33vw'} y={'1vw'} />
                <Skill name={"Statistical Anlyst."} x={'-19vw'} y={'21vw'} />
                <Skill name={"Data Visualisation"} x={'-31vw'} y={'1vw'} />
                <Skill name={"Numpy & Pandas"} x={'29vw'} y={'8vw'} />
            </div>

        </>
    )
}

export default Skills