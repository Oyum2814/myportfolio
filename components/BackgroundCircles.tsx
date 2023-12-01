import React from 'react';
import {motion} from "framer-motion";
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.8,0.4,0.8,0.1,1.0],
    }}
    transition={{
        duration:2.5
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-neutral-900 opacity-30 dark:border-gray-200 rounded-full h-[200px] w-[200px] mt-[240px] animate-ping"/>
        <div className="absolute border border-neutral-900 opacity-10 dark:border-gray-200 rounded-full h-[300px] w-[300px] mt-[240px] "/>
        <div className="absolute border border-neutral-900 opacity-10 dark:border-gray-200 rounded-full h-[500px] w-[500px] mt-[240px] "/>
        <div className="absolute border border-neutral-900 opacity-50 dark:border-gray-200 rounded-full h-[600px] w-[600px] mt-[240px]"/>
        <div className="absolute border border-neutral-900 opacity-10 dark:border-gray-200 rounded-full h-[800px] w-[800px] mt-[240px]"/>
    </motion.div>
  )
}

export default BackgroundCircles