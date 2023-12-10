import React from 'react'
import Skill from './Skill'
import {motion} from 'framer-motion'
import {Skill as SkillType} from '../typings'
type Props = {
  skills:SkillType[];
}

function Skills({skills}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex flex-col relative text-center  md:text-left max-w-[2000px] 
    xl:px-6 min-h-screen justify-center mx-auto items-center space-y-4 xl:space-y-8">
        <h3 className="sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
            Hover over a skill for current proficiency
        </h3>
        <div className="grid grid-cols-4 gap-5 overflow-x-hidden ">
          {skills.map((skill)=>(
            <Skill key={skill._id} skill={skill}/>
          ))}
        </div>

        
    </motion.div>
  )
}

export default Skills