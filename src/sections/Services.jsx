'use client';
import { GsapContext } from '@/context/GsapContext';
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const Services = () => {

    let scrollToContainer = useRef()

    let {
        servicesHeadingRef,
        servicesCardParentElementRef
    } = useContext(GsapContext)

    const servicesDataArray = [
        {
            imgUrl: "https://img.freepik.com/premium-vector/modern-workplace-working-computer-with-video-player-screen-online-video-watch-movies-educational-materials-web-courses-concepts-flat-illustration_401949-388.jpg",
            name: "Basic Computer Course",
            desc: "An Ideal course for beginners to build a strong foundation in computer usage and essential applications.",
            duration: 2,
            price: 6000
        },
        {
            imgUrl: "https://www.shutterstock.com/image-illustration/c-code-on-dark-background-600nw-1896170293.jpg",
            name: "C++ Programming Language",
            desc: "A complete guide to learning programming fundamentals using the powerful C++ language.",
            duration: 3,
            price: 6000
        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPp6UXszHVeIGbbfhV3sVP_cgfXqr2ZC1BWQ&s",
            name: "Game Development",
            desc: "Learn to create 2D and 3D games from scratch using industry standard game engines.",
            duration: 3,
            price: 15000
        },
        {
            imgUrl: "https://www.sculpteo.com/blog/wp-content/uploads/2018/08/studio.jpg",
            name: "3D Modeling in Blender",
            desc: "Master the art of 3D modeling, rendering, and animation for games, videos, and more.",
            duration: 3,
            price: 12000
        },
        {
            imgUrl: "https://www.tiaedu.com/images/packages/1000x600_package_autocad_power_user.png",
            name: "AutoCAD",
            desc: "Professional design and drafting course for engineers, architects, and designers.",
            duration: 3,
            price: 15000
        },
        {
            imgUrl: "https://i0.wp.com/simulationit.com/wp-content/uploads/2023/05/Sign-Up-today-1.png?fit=600%2C400&ssl=1",
            name: "Graphic Designing",
            desc: "Explore creative tools like Photoshop and Illustrator to design logos, posters, and social media content.",
            duration: 3,
            price: 9000
        },
        {
            imgUrl: "https://i.ytimg.com/vi/_1LmirXDC-E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCp-iIcR-PxvS7fjREnyCc1XxKWZA",
            name: "Web Development",
            desc: "Build professional and responsive websites using modern front-end and back-end technologies.",
            duration: 3,
            price: 15000
        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGS8kRYPVlCX2F9zt7dofvlqZPChb2aN5I0BUXNRfK48T0BUyfqciBtNThaPyXoyMqVc&usqp=CAU",
            name: "MS Office (Advanced)",
            desc: "Learn advanced features of Microsoft Word, Excel, and PowerPoint for office and business use.",
            duration: 2,
            price: 6000
        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhzRFx5o85BFBcRpR16uELkVMcC4BsgnANR4eXCfs9ckzNGFi9QNaT8mH9ScoAcdhiks&usqp=CAU",
            name: "Video Editing",
            desc: "Professional video editing course to help you create engaging content for YouTube and social media.",
            duration: 2,
            price: 5000
        },
        {
            imgUrl: "https://www.typingmaster.com/image/lockup_1.png",
            name: "Typing Master Course",
            desc: "Improve your typing speed and accuracy with structured and effective practice sessions.",
            duration: 2,
            price: 5000
        },
        //     {
        //         imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIcaqiLpUZTYmtoN6rkJJdO-PyvcliOyrOybdaMQfThhUbjdJZsAyMnMzLOck6KEYm6I&usqp=CAU",
        //         name: "Freelancing & Earning Online",
        //         desc: "Understand how to start your freelancing journey on platforms like Fiverr, Upwork, and Freelancer.",
        //         duration: 1,
        //         price: 0
        //     },
        //     {
        //         imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIcaqiLpUZTYmtoN6rkJJdO-PyvcliOyrOybdaMQfThhUbjdJZsAyMnMzLOck6KEYm6I&usqp=CAU",
        //         name: "English Language",
        //         desc: "Improve your English speaking, listening, reading, and writing skills for academic, professional, and daily communication.",
        //         duration: 3,
        //         price: 12000
        //     }
    ];








    useEffect(() => {

        let element = scrollToContainer.current;

        if (!element) {
            return;
        }

        const onWheel = (e) => {

            let elementStart = element.scrollLeft == 0;    // when container is at start and not scroll yet
            let elementEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth;

            if ((e.deltaY < 0 && elementStart) || (e.deltaY > 0 && elementEnd)) {
                return;
            }

            e.preventDefault()
            // console.log(element.scrollLeft, e.deltaY, element.clientWidth, element.scrollWidth)
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
            className='mt-20 relative pt-20'>

            <div ref={servicesHeadingRef} className="h-max w-full opacity-0 text-4xl font-bold px-10 text-center">
                <span className='text-orange-600'>Our</span> Services
            </div>





            {/* upper container */}
            <div
                ref={scrollToContainer}
                className="h-max w-full relative   overflow-x-auto lg:overflow-x-hidden  md:mt-5 flex justify-center items-center px-5">




                {/* The container which hold the card */}
                <div
                    ref={servicesCardParentElementRef}
                    className={` h-max w-full    transition-all  duration-500 flex flex-row gap-1 items-center pt-20 `}>
                    {
                        servicesDataArray.map((eachService, index) => {
                            return (
                                // card container
                                <div key={index}
                                    className={`h-max w-60  opacity-0 translate-y-10 transition-all duration-500 shrink-0 border-2 border-zinc-200 p-2 rounded-lg`}>
                                    <div className="h-40 overflow-hidden rounded-lg flex items-center justify-center ">
                                        <Image
                                            src={eachService.imgUrl}
                                            alt='Service Image'
                                            height={300}
                                            width={400}
                                            className='rounded-lg object-center hover:rotate-1 transition-all duration-500 hover:scale-105 '
                                        />
                                    </div>
                                    <h2 className='text-xl font-bold mt-5   px-2 '>{eachService.name}</h2>
                                    <p className='text-sm  mt-2 px-2'>{eachService.price} ruppees</p>
                                    <p className='text-sm  mt-2 px-2'>{eachService.duration} months</p>
                                    <p className='text-sm  mt-2 px-2 '>{eachService.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </div>
    )
}

export default Services



