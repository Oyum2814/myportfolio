import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    directionLeft?:boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer mx-auto">
        <motion.img 
        initial={{
            opacity:0,
        }}
        transition={{duration:1}}
        whileInView={{opacity:1}}
        className="rounded-full border border-neutral-300 object-cover w-16 h-16 xl:h-24 xl:w-24
        filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white w-16 h-16 xl:h-24 xl:w-24 rounded-full">
            <div className="flex items-center justify-center h-full">
                <p className="text-xl font-bold text-black opacity-100">
                    100%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill