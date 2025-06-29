'use client';
import { GsapContext } from '@/context/GsapContext';
import { MyContext } from '@/context/MyContext';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import servicesDataArray from '@/utilities/servicesData';

const Services = () => {

    let router = useRouter()
    let scrollToContainer = useRef()

    let {
        servicesHeadingRef,
        servicesCardParentElementRef
    } = useContext(GsapContext)

    let {
        setCurrentClickedCourseDetails
    } = useContext(MyContext)

  







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










    function handleApplyBtnClick(serviceData) {
        setCurrentClickedCourseDetails(serviceData)
        router.push("/courseApply")
    }









    return (
        <div
            id='services'
            className='mt-10 relative py-10 pb-20 bg-zinc-50 hover:border-2 px-2 md:px-10 hover:border-gray-200 shadow-md shadow-zinc-300 m-2 rounded-lg'>

            <div ref={servicesHeadingRef} className="h-max w-full opacity-0 text-4xl font-bold px-10 text-center">
                <span className='text-orange-600'>Our</span> Services
            </div>





            {/* upper container */}
            <div
                ref={scrollToContainer}
                className="h-max w-full relative   overflow-x-auto lg:overflow-x-hidden  md:mt-5 flex justify-center items-center lg:px-5">




                {/* The container which hold the card */}
                <div
                    ref={servicesCardParentElementRef}
                    className={` h-max w-full    transition-all  duration-500 flex flex-row gap-2 items-center mt-20 `}>
                    {
                        servicesDataArray.map((eachService, index) => {
                            return (
                                // card container
                                <div key={index}
                                    className={`h-max w-64 hover:w-64 hover:mx-5 scale-110  bg-zinc-50 border-2 border-zinc-200  opacity-0 translate-y-10 transition-all duration-500 shrink-0  p-2 rounded-lg flex flex-col justify-center items-center `}>
                                    <div className="h-40 overflow-hidden  flex items-center justify-center ">
                                        <Image
                                            src={eachService.imgUrl}
                                            alt='Service Image'
                                            height={300}
                                            width={400}
                                            className=' object-center hover:rotate-1 transition-all duration-500 hover:scale-105 h-full w-full '
                                        />
                                    </div>
                                    <div className='w-60 flex justify-center flex-col items-center'>
                                        <h2 className='w-full text-xl font-bold mt-2   px-2 '>{eachService.name}</h2>
                                        <p className='w-full text-sm leading-4 text-zinc-500  mt-2 px-2 '>{eachService.desc}</p>
                                        <p className='w-full text-sm leading-3.5 text-zinc-500  mt-2 px-2'>{eachService.price} ruppees</p>
                                        <p className='w-full text-sm leading-3.5 text-zinc-500  mt-2 px-2'>{eachService.duration} months</p>
                                        <button onClick={() => { handleApplyBtnClick(eachService) }} className='bg-[#f47506] hover:bg-amber-500 h-8 w-[95%] rounded-sm text-zinc-100 mx-full mt-5 cursor-pointer'>Apply</button>

                                    </div>
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



