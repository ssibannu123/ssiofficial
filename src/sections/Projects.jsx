'use client';
import { GsapContext } from '@/context/GsapContext';
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
// import project1 from '@/../public/project1.mp4'
// import project2 from '@/../public/project2.mp4'
// import project3 from '@/../public/project3.mp4'

const Projects = () => {

    let scrollToContainer = useRef()

    let {
        servicesHeadingRef,
        servicesCardParentElementRef
    } = useContext(GsapContext)




    let projectArray = [
        {
            type: "video",
            url: "https://res.cloudinary.com/dop329ono/video/upload/v1750147212/project2_himuqg.mp4"
        },
        {
            type: "video",
            url: "https://res.cloudinary.com/dop329ono/video/upload/v1750147127/project1_yl6htk.mp4"
        },
        // {
        //     type:"video",
        //     url:"/project3.mp4"
        // },
        // {
        //     type:"image",
        //     url:"/project4.jpg"
        // }
    ]





    useEffect(() => {

        let element = scrollToContainer.current;

        if (!element) {
            return;
        }

        const onWheel = (e) => {
            e.preventDefault()
            element.scrollLeft += e.deltaY;
        }

        element.addEventListener("wheel", onWheel)
        return () => {
            element.removeEventListener("wheel", onWheel)
        }
    }, [])

















    return (
        <div
            id='services'
            className='mt-10 relative py-10 pb-20 hover:border-2 hover:border-zinc-200 mx-2 bg-zinc-50 rounded-lg shadow-md shadow-zinc-300 '>

            <div ref={servicesHeadingRef} className="h-max w-full  text-4xl font-bold px-10 text-center mb-0 md:mb-">
                <span className='text-orange-600'>Our</span> Projects
            </div>





            {/* upper container */}
            <div
                ref={scrollToContainer}
                id='projects'
                className="h-max overflow-y-hidden w-full    overflow-x-auto lg:overflow-x-hidden  flex   px-5">




                {/* The container which hold the card */}
                <div
                    ref={servicesCardParentElementRef}
                    className={`h-max  w-full    transition-all  duration-500 flex flex-row justify-start md:justify-center gap-1 items-center pr-10 `}>
                    {
                        projectArray.map((eachProject, index) => {
                            return (
                                // card container
                                <div key={index}
                                    className={` h-max pb-10   translate-y-10 transition-all duration-500 shrink-0 border-2 border-zinc-200 p-2 rounded-lg`}>
                                    {
                                        eachProject.type == "video" ?
                                            <video  className='max-h-[500px] max-w-96' controls width="640" height="400">
                                                <source src={eachProject.url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            :
                                            <Image
                                                src={eachProject.url}
                                                height={300}
                                                width={300}
                                                alt='project img'
                                                className='object-center'
                                            />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </div>
    )
}

export default Projects



