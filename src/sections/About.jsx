'use client'
import { GsapContext } from '@/context/GsapContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const About = () => {


  let {
    aboutheadingRef,
    aboutImgRef,
    aboutContentRef
  } = useContext(GsapContext)


  return (
    <div
      id='about'
      className='h-max w-full p-5 lg:p-20 mt-20'>


      <div className="text-center">
        <h1 ref={aboutheadingRef} className='text-4xl font-bold mb-2 md:mb-5 opacity-0'>About <span className='text-orange-600'>Us</span></h1>
      </div>


      <div className=" flex flex-col lg:flex-row gap-5 lg:gap-20 mt-10  justify-between items-center lg:items-start">


        <div ref={aboutImgRef} className="lg:w-1/2 opacity-0 lg:p-5">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJ77kdQWUax_AKgqLYUQhdvx-KiiUojVhcQ&s"
            alt='about image'
            width={600}
            height={600}
            className='object-cover rounded-lg hover:scale-105 hover:rotate-1 transition-all duration-500'
          />
        </div>



        <div ref={aboutContentRef} className="h-full lg:w-1/2 translate-x-[1000px] lg:mt-10 text-center lg:text-start">
          <p className=''>Syed Software Institute (SSI), situated on Railway Road in the heart of Bannu, is your premier gateway to the world of technology. Since our doors opened, we’ve grown into a vibrant learning community of over 1000+ students—each driven to master the skills today’s employers demand.
            At SSI, we believe in learning by doing: our modern computer labs are equipped with the latest software, and every course—whether it’s full‑stack web development, mobile app programming, graphic design, animation or digital marketing—is structured around real‑world projects. Our expert instructors bring years of industry experience into the classroom, guiding you step‑by‑step from fundamentals to advanced techniques.</p>
        </div>
      </div>


    </div>
  )
}

export default About