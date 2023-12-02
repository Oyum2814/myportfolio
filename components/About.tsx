import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity';
type Props = {
    pageInfo:PageInfo;
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 space-y-8 justify-center items-center">
        <h3 className="absolute top-10 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img 
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        viewport={{once:true}}
        src={urlFor(pageInfo?.profilePic).url()}
        className="mt-20 md:mt-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover
        sm:w-[150px] sm:h-[150px]  
        md:rounded-lg md:w-64 md:h-95
        xl:h-[498px] xl:w-[280px]"
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-2xl md:text-3xl font-semibold">
                Who am I?
            </h4>
            <p className="text-sm max-w-xl">
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}