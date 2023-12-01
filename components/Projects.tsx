import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];

    return (
        <div className="h-screen flex flex-col relative text-center  md:text-left xl:flex-row max-w-[2000px] 
        xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-10 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden 
            snap-x snap-mandatory z-20 ">
                {projects.map((project,i)=>(
                    <div className="w-screen flex-shrink-0 
                    flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
                        <img
                        className="mt-20 md:mt-0 w-[100px] h-auto" 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="project" />
                        <div className="snap-center space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-xl sm:text-3xl font-semibold text-center">
                                <span className="underline decoration-[#FFFFFF]/50">
                                    Case Study {i+1} of {projects.length} :
                                </span>UPS Clone
                            </h4>
                            <p className="w-full text-sm text-center md:text-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                                Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#FFFFFF]/10 left-0 h-[500px] -skew-y-12"/>
        </div>
    )
}

export default Projects