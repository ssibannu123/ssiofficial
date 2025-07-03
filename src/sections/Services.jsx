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
            className='mt-10 relative py-10 pb-20 bg-zinc-50 hover:border-2 px-2 md:px-10 hover:border-gray-200 shadow-md shadow-zinc-300 m-2 rounded-lg dark:text-zinc-950'>

            <div ref={servicesHeadingRef} className="h-max w-full opacity-0 text-3xl  md:text-4xl font-bold px-10 text-center ">
                <span className='text-[#F28C28]'>Our</span> Services
            </div>





            {/* upper container */}
            <div
                ref={scrollToContainer}
                className="h-max w-full relative   overflow-x-auto lg:overflow-x-hidden overflow-y-hidden  md:mt-5 flex justify-center items-center lg:px-5">




                {/* The container which hold the card */}
                <div
                    ref={servicesCardParentElementRef}
                    className={` h-max w-full    transition-all  duration-500 flex flex-wrap md:flex-nowrap md:flex-row justify-center md:justify-start gap-2 items-center mt-20 `}>
                    {
                        servicesDataArray.map((eachService, index) => {
                            return (
                                // card container
                                <div key={index}
                                    className={`h-max w-[48%]  opacity-0 md:w-64 hover:w-64 hover:mx-5  bg-zinc-50 border-2 border-zinc-200  translate-y-10 transition-all duration-500 shrink-0  p-2 rounded-lg flex flex-col justify-center items-center `}>
                                    <div className="h-max overflow-hidden  flex items-center justify-center ">
                                        <Image
                                            src={eachService.imgUrl}
                                            alt='Service Image'
                                            height={200}
                                            width={200}
                                            className=' object-center hover:rotate-1 transition-all duration-500 hover:scale-110 h-full w-full '
                                        />
                                    </div>
                                    <div className='w-full flex justify-center flex-col items-center'>
                                        <h2 className='w-full text-sm md:text-xl font-bold mt-2   px-2 '>{eachService.name}</h2>
                                        <p className='w-full text-[10px] md:text-sm leading-4 text-zinc-500  mt-2 px-2 '>{eachService.desc}</p>
                                        {/* <p className='w-full text-sm leading-3.5 text-zinc-500  mt-2 px-2'>{eachService.price} ruppees</p> */}
                                        <p className='w-full text-[10px] md:text-sm leading-3.5 text-zinc-500  mt-2 px-2'>{eachService.duration} months</p>
                                        <button onClick={() => { handleApplyBtnClick(eachService) }} className='bg-[#10649c] hover:bg-[#008cbf] h-8 w-[95%] rounded-sm text-zinc-100 mx-full mt-5 cursor-pointer text-[10px] md:text-sm'>Apply</button>

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



