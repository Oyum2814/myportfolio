import { motion } from 'framer-motion'
import React from 'react'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col items-center w-[90%] flex-shrink-0 snap-center bg-neutral-900  p-10 space-y-5 justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="Profile Picture"
        className="rounded-full h-24 w-24"/>
        <div className="space-y-2">
            <h4 className="font-light text-3xl  text-center">CEO of Facebook</h4>
            <p className="font-bold text-2xl text-center uppercase">Facebook</p>
            <div className="flex space-x-4 justify-center py-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="stack"
                className="h-10 w-10 rounded-full "
                />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="stack"
                className="h-10 w-10 rounded-full "
                />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="stack"
                className="h-10 w-10 rounded-full "
                />
            </div>
            <div className="text-md font-light uppercase py-4 text-center">Started ... - Ended on.</div>
            <ul className="list-disc text-lg ml-5">
                <li>Point 1 </li>
                <li>point 2</li>
                <li>point 3</li>
                <li>point 4</li>
                <li>point 5</li>
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard