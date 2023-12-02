import { urlFor } from '@/sanity';
import { Experience } from '@/typings';
import { motion } from 'framer-motion'
import React from 'react'
type Props = {
  experience:Experience ;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col items-center w-[90%] flex-shrink-0 snap-center bg-neutral-900  p-10 space-y-5 justify-center">
        <img src={urlFor(experience?.companyImage).url()}
        alt="Profile Picture"
        className="rounded-full h-24 w-24"/>
        <div className="space-y-2">
            <h4 className="font-light text-3xl  text-center">{experience?.jobTitle}</h4>
            <p className="font-bold text-2xl text-center uppercase">{experience?.company}</p>
            <div className="flex space-x-4 justify-center py-2">
                {experience.technologies.map((technology,i)=>(
                    <img key={i} src={urlFor(technology.image).url()} alt="stack"
                    className="h-10 w-10 rounded-full "
                    />
                ))}
            </div>
            <div className="text-md font-light uppercase py-4 text-center">
              {new Date(experience.dateStarted).toDateString()} -{" "} 
              {experience.isCurrentlyWorkingHere
              ?"Present"
              :new Date(experience.dateEnded).toDateString()}
            </div>
            <ul className="list-disc text-lg ml-5">
              {experience.points.map((point,i)=>(
                <li key={i} >{point}</li>
              ))}
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard