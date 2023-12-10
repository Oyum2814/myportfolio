import { urlFor } from '@/sanity';
import { Experience } from '@/typings';
import { motion } from 'framer-motion'
import React from 'react'
type Props = {
  experience:Experience ;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col items-center w-full flex-shrink-0 snap-center bg-neutral-900 h-full  p-10 space-y-3 justify-center ">
        <div className="flex md:flex-col w-full justify-center items-center">
          <img src={urlFor(experience?.companyImage).url()}
          alt="Profile Picture - Om Mukherjee"
          className="rounded-full w-[20vw] h-[20vw] p-2
          md:h-32 md:w-32"/>
          <div className="w-[50vw] md:w-full flex flex-col justify-center items-center">
            <p className="font-bold text-lg md:text-2xl text-center uppercase ">{experience?.company}</p>
            <h4 className="font-light text-xl md:text-xl  text-center">{experience?.jobTitle}</h4>
          </div>
        </div>
        
        <div className="space-y-2">
            <div className="flex space-x-4 justify-center py-2">
                {experience.technologies.map((technology,i)=>(
                    <img key={i} src={urlFor(technology.image).url()} alt="stack"
                    className="h-8 w-8  rounded-full "
                    />
                ))}
            </div>
            <div className="text-md md:text-sm font-light uppercase py-4 text-center">
              {new Date(experience.dateStarted).toDateString()} -{" "} 
              {experience.isCurrentlyWorkingHere
              ?"Present"
              :new Date(experience.dateEnded).toDateString()}
            </div>
            <ul className="list-disc text-sm md:text-lg ml-5">
              {experience.points.map((point,i)=>(
                <li key={i} >{point}</li>
              ))}
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard