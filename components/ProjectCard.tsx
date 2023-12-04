import { urlFor } from '@/sanity';
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    project:Project;
    projects:Project[];
}

function ProjectCard({project,projects}: Props) {
  return (
    <div className="flex flex-col w-full  items-center justify-start  h-full ">
        <img
        className="mt-10 md:mt-0 h-[120px] md:h-[200px] xl:h-[300px] w-auto flex-shrink-0" 
        src={urlFor(project?.image).url()}

        alt="project asset" />
        <div className="px-0 md:px-10 max-w-6xl">
            <h4 className="text-xl py-4 sm:text-3xl font-semibold text-center uppercase">
                {project?.title}
            </h4>
            <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology)=>(
                    <img 
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="stack"
                    className="h-10 w-10 "
                    />
                ))}
            </div>
            <p className="w-full text-sm text-center md:text-left max-w-20 p-4">
                {project?.summary}
            </p>
        </div>
    </div>
  )
}

export default ProjectCard