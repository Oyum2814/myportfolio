import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import ExperienceCard from './ExperienceCard'
import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa'
import { Experience } from '@/typings';
import type SwiperCore from 'swiper';

type Props = {
  experiences:Experience[];
};

function WorkExperience({experiences}: Props) {
  const [eof,setEof] = useState(false);
  const swiperRef = useRef<SwiperCore>();
  return (
    <motion.div className="flex justify-center items-center h-screen overflow-y-hidden max-w-full relative">
      <h3 className="absolute top-10 sm:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {experiences.map((experience)=>(
          <SwiperSlide key={experience._id}>
            <ExperienceCard experience={experience}/>
          </SwiperSlide>
        ))}
        {eof
        ?(
          <div
          onClick={() => {
            swiperRef.current?.slidePrev();
            if(swiperRef.current?.activeIndex === 0)
            {
              setEof(false);
            }
          }}
          className="absolute right-0 top-[50%] px-2 lg:px-4 animate-bounce text-2xl lg:text-3xl z-40">
            <FaAngleDoubleLeft color="white" />
          </div>
        ):
        (
          <div
          onClick={() => {
            swiperRef.current?.slideNext();
            if(swiperRef.current?.activeIndex == experiences.length-1)
            {
              setEof(true);
            }
          }}
          className="absolute right-0 top-[50%] px-2 lg:px-4 animate-bounce text-2xl lg:text-3xl z-40">
            <FaAngleDoubleRight color="white" />
          </div>
        )
        }
        
        
      </Swiper>
    </motion.div>
    // <motion.div
    // initial={{opacity:0}}
    // whileInView={{opacity:1}}
    // transition={{duration:1.5}}
    // className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full 
    // px-10 justify-evenly mx-auto items-center">
    //     <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
    //       Experience
    //     </h3>

    //     <div className="mt-20 md:mt-32 w-full flex space overflow-x-scroll py-10 snap-x snap-mandatory
    //     space-x-5">
    //       <ExperienceCard />
    //       <ExperienceCard />
    //       <ExperienceCard />
    //       <ExperienceCard />
    //     </div>
    // </motion.div>
  )
}

export default WorkExperience