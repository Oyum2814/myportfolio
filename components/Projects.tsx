import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import  {Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';

type Props = {
    projects:Project[];
}

function Projects({projects}: Props) {
    return (
        <motion.div className="h-screen flex flex-col relative text-center  md:text-left xl:flex-row max-w-[2000px] 
        xl:px-10  justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-10 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-y-hidden
            snap-x snap-mandatory z-20 ">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {projects.map((project,i)=>(
                    <SwiperSlide key={i}>
                       <ProjectCard project={project} projects={projects}/>
                    </SwiperSlide>
                    
                    ))}
                    
                </Swiper>
            </div>
            <div className="w-full absolute top-[30%] bg-[#FFFFFF]/10 left-0 h-[500px] -skew-y-12"/>
        </motion.div>
    )
}

export default Projects