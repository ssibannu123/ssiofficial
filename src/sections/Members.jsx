'use client';
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import sirg from '../../public/sirg.jpeg'
import wahabSir from '../../public/wahabSir.jpeg'
import munibSir from '../../public/munibSir.jpeg'
import { GsapContext } from '@/context/GsapContext';
import asadSir from '../../public/asadSir.jpeg'
import ibrahim from '../../public/ibrahim.jpeg'





const Members = () => {

    let scrollToContainer = useRef()

    let {
        membersheadingRef,
        membersCardParentElementRef
    } = useContext(GsapContext)


    const membersDataArray = [
        {
            imgUrl: munibSir,
            name: "Syed Munib (Ceo)",
            desc: "We privide the best ever web dev course in syed software house."
        },
        {
            imgUrl: sirg,
            name: "Azam Sir",
            desc: "We privide the best ever web dev course in syed software house."
        },
        {
            imgUrl: wahabSir,
            name: "Wahab Sir",
            desc: "We privide the best ever web dev course in syed software house."
        },
        {
            imgUrl: asadSir,
            name:"Muhammed Asad",
            desc:"Passionate Unity developer creating fun and engaging 2D/3D games for mobile and PC platforms."
        },
        {
            imgUrl: ibrahim,
            name:"Muhammed Ibrahim",
            desc:"MERN and Next.js developer creating azaming modern responsive webapps."
        }
    ]















    // useEffect(() => {

    //     let element = scrollToContainer.current;

    //     if (!element) {
    //         return;  
    //     }

    //     const onWheel = (e) => {
    //         e.preventDefault()
    //         element.scrollLeft += e.deltaY;
    //     }

    //     element.addEventListener("wheel", onWheel)
    //     return () => {
    //         element.removeEventListener("wheel", onWheel)
    //     }
    // }, [])

















    return (
        <div
            id='members'
            className='mt-10 relative pt-20'>

            <div
                ref={membersheadingRef}
                className="h-max w-full opacity-0 text-4xl font-bold px-10 text-center">
                <span className='text-orange-600'>Our</span> Members
            </div>








            {/* upper container */}
            <div
                ref={scrollToContainer}
                className="h-max w-full relative  p-10 overflow-x-hidden mt-0 flex justify- items-center ">




                {/* The container which hold the card */}
                <div
                    ref={membersCardParentElementRef}
                    className={` transition-all duration-500 h-max translate-y-10 w-full justify-center flex flex-row flex-wrap gap-1 items-center`}>
                    {
                        membersDataArray.map((eachService, index) => {
                            return (
                                // card container
                                <div 
                                key={index}
                                    className={`h-max w-60 opacity-0 cursor-pointer transition-all duration-500 shrink-0 border-2 border-zinc-200 p-3 rounded-lg `}>
                                    <div className="h-60 overflow-hidden rounded-lg hover:rotate-1 transition-all duration-500    ">
                                        <Image
                                            src={eachService.imgUrl}
                                            alt='Service Image'
                                            height={300}
                                            width={400}
                                            className='rounded-lg '
                                        />
                                    </div>
                                    <h2 className='text-xl font-bold mt-5 text-center  px-2'>{eachService.name}</h2>
                                    <p className='text-sm text-center mt-2 px-2'>{eachService.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </div>
    )
}

export default Members