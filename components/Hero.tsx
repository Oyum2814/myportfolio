import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

export default function Hero({}: Props) {
  const [text,counter] = useTypewriter({
    words:["Developer","Designer who likes coffee","Creator"],
    loop:true,
    delaySpeed:2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            width={2} height={2}
            className="relative rounded-full h-32 w-32 mx-auto object-cover" alt="Profile" />
        <div className="z-20">
          <h2 className="pb-2 text-sm uppercase text-gray-500 tracking-[15px]">Web Developer</h2>
          <h1 className="text-5xl tracking-wide">
              <span className="px-4 w-auto ">{text}</span>
              <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>   
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>   
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>   
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>   
            </Link>
          
          </div>
        </div>
       
    </div>
  )
}
