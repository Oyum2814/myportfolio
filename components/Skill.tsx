import React from 'react'
import {motion} from 'framer-motion'
import {Skill} from '../typings'
import { urlFor } from '@/sanity';
type Props = {
    skill:Skill;
    directionLeft?:boolean;
}

function Skill({skill,directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer mx-auto">
        <motion.img 
        initial={{
            opacity:0,
        }}
        transition={{duration:0.5}}
        whileInView={{opacity:1}}
        className="rounded-full border border-neutral-300 object-cover w-16 h-16 xl:h-24 xl:w-24
        filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white w-16 h-16 xl:h-24 xl:w-24 rounded-full">
            <div className="flex items-center justify-center h-full">
                <p className="text-xl font-bold text-black opacity-100">
                    {skill?.progress}%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill