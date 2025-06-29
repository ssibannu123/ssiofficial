'use client';
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { GsapContext } from '@/context/GsapContext';
import membersDataArray from '@/utilities/memberData';




const Members = () => {

    let scrollToContainer = useRef()

    let {
        membersheadingRef,
        membersCardParentElementRef
    } = useContext(GsapContext)































    return (
        <div
            id='members'
            className='mt-10 relative py-10 pb-20 bg-zinc-50 hover:border-2  hover:border-gray-200 shadow-md shadow-zinc-300 m-2 rounded-lg'>

            <div
                ref={membersheadingRef}
                className="h-max w-full opacity-0 text-4xl font-bold px-10 text-center">
                <span className='text-orange-600'>Our</span> Members
            </div>








            {/* upper container */}
            <div
                ref={scrollToContainer}
                className="h-max w-full relative   p-10 overflow-x-hidden mt-0 flex justify- items-center ">




                {/* The container which hold the card */}
                <div
                    ref={membersCardParentElementRef}
                    className={` transition-all duration-500 h-max translate-y-10 w-full justify-center flex flex-row flex-wrap gap-1  items-center`}>
                    {
                        membersDataArray.map((eachService, index) => {
                            return (
                                // card container
                                <div
                                    key={index}
                                    className={`h-max w-60 hover:w-64 opacity-0 cursor-pointer transition-all duration-500 shrink-0 border-2 border-zinc-200 p-3 rounded-lg flex flex-col justify-center items-center `}>
                                    <div className="h-60 overflow-hidden rounded-lg  transition-all duration-500    ">
                                        <Image
                                            src={eachService.imgUrl}
                                            alt='Service Image'
                                            height={300}
                                            width={400}
                                            className='rounded-lg '
                                        />
                                    </div>
                                    <div className="w-56 flex flex-col items-center justify-center">
                                        <h2 className='text-xl font-bold mt-5 text-center  px-2'>{eachService.name}</h2>
                                        <p className='h-20 text-sm text-center mt-2 px-2'>{eachService.desc}</p>
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

export default Members