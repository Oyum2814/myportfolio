import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
type Props = {
    projects:Project[];
}

function Projects({projects}: Props) {
    return (
        <motion.div className="h-screen flex flex-col relative text-center  md:text-left xl:flex-row max-w-[2000px] 
        xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-10 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden 
            scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white/60
            snap-x snap-mandatory z-20 ">
                {projects.map((project,i)=>(
                    <div key={i} className="w-screen flex-shrink-0 
                    flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
                        <motion.img
                        initial={{y:-300,opacity:0}}
                        transition={{duration:1.2}}
                        whileInView={{y:0,opacity:1}}
                        viewport={{once:true}}
                        className="mt-20 md:mt-0 w-[600px] h-auto" 
                        src={urlFor(project?.image).url()}
                        alt="project asset" />
                        <div className="snap-center space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-xl sm:text-3xl font-semibold text-center">
                                <span className="underline decoration-[#FFFFFF]/50">
                                    Case Study {i+1} of {projects.length} :
                                </span>{" "}
                                {project?.title}
                            </h4>
                            <p className="w-full text-sm text-center md:text-left">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#FFFFFF]/10 left-0 h-[500px] -skew-y-12"/>
        </motion.div>
    )
}

export default Projects