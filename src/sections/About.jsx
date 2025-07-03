'use client'
import { GsapContext } from '@/context/GsapContext'
import { aboutSectionSideImg } from '@/utilities/filesAndLink'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

const About = () => {


  let {
    aboutheadingRef,
    aboutImgRef,
    aboutContentRef
  } = useContext(GsapContext)





  return (
    <div
      id='about'
      className='h-max w-full p-2 lg:p-2 mt-10 lg:pt-10 '>


      <div className=" shadow-md shadow-zinc-200 hover:border-2 bg-zinc-50 hover:border-zinc-200 rounded-lg py-10 px-5">
        {/* 
        <div className="text-center">
          <h1 ref={aboutheadingRef} className='text-4xl font-bold  md:mb-5 opacity-0'>About <span className='text-[#F28C28]'>Us</span></h1>
        </div>
 */}



        <div className=" flex flex-col-reverse xl:flex-row gap-5 lg:gap-5   justify-between items-center lg:items-start">



          <div ref={aboutImgRef} className="w-full xl:w-1/2  opacity-0 lg:p-5 mt-5 flex justify-center items-center">
            <Image
              src={aboutSectionSideImg}
              alt='about image'
              width={600}
              height={600}
              className='object-cover rounded-lg hover:scale-105 hover:rotate-1 transition-all duration-500'
            />
          </div>



          <div ref={aboutContentRef} className="h-full xl:w-1/2 translate-x-[1000px] lg:mt-10 text-center xl:text-start text-[12px] md:text-sm dark:text-zinc-900">
            <h1 className='text-3xl font-bold mb-5'>Who we are ?</h1>
            <p className=''>Syed Software Institute (SSI), situated on Railway Road in the heart of Bannu, is your premier gateway to the world of technology. Since our doors opened, we’ve grown into a vibrant learning community of over 1000+ students—each driven to master the skills today’s employers demand.
              At SSI, we believe in learning by doing: our modern computer labs are equipped with the latest software, and every course—whether it’s full‑stack web development, mobile app programming, graphic design, animation or digital marketing—is structured around real‑world projects. Our expert instructors bring years of industry experience into the classroom, guiding you step‑by‑step from fundamentals to advanced techniques.</p>
            At SSI, we believe in learning by doing: our modern computer labs are equipped with the latest software, and every course—whether it’s full‑stack web development, mobile app programming, graphic design, animation or digital marketing—is structured around real‑world projects. Our expert instructors bring years of industry experience into the classroom, guiding you step‑by‑step from fundamentals to advanced techniques.
          </div>
        </div>


      </div>

    </div>
  )
}

export default About