import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Experience } from '@/typings';



type Props = {
  experiences:Experience[];
};

function WorkExperience({experiences}: Props) {
  return (
    <motion.div className="flex justify-center items-center h-screen overflow-y-hidden max-w-full relative">
      <h3 className="absolute top-10 sm:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {experiences.map((experience)=>(
          <SwiperSlide key={experience._id}>
            <ExperienceCard experience={experience} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default WorkExperience