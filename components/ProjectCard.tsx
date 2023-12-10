import { urlFor } from '@/sanity';
import { Project } from '@/typings';
import React from 'react'
import Image from 'next/image'

type Props = {
    project:Project;
    projects:Project[];
}

function ProjectCard({project,projects}: Props) {
  return (
    <div className="flex flex-col w-full  items-center justify-start  h-full ">
        <Image
        className="mt-10 md:mt-0 h-[120px] md:h-[200px] xl:h-[300px] w-auto flex-shrink-0" 
        src={urlFor(project?.image).url()}
        loading="lazy"
        alt="project asset"
        height={60}
        width={80}
         />
        <div className="px-0 md:px-10 max-w-6xl flex flex-col justify-center items-center">
            <h2 className="text-xl py-4 sm:text-3xl font-semibold text-center mx-auto w-full uppercase underline cursor-pointer">
                <a  href={`${project?.linkToBuild}`} className="decoration-none" target="#" rel="noreferrer">
                    {project?.title}
                </a>
            </h2>
            <div className="flex items-center space-x-2 justify-center cursor-pointer">
                {project?.technologies.map((technology)=>(
                    <img 
                    title = {technology?.title}
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