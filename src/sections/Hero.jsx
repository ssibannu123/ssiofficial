'use client'
import { GsapContext } from '@/context/GsapContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { heroSectionBgImg } from '../utilities/filesAndLink.js'

const Hero = () => {


  let { bgHeroImgRef,
    HeroContentContainerRef,
    HeroContentRef
  } = useContext(GsapContext)











  return (
    <div
      id='home'
      className="h-screen w-screen overflow-hidden relative flex items-center justify-center text-center">



<div className="h-full w-full absolute top-0 right-0 backdrop-blur-[2px] backdrop-brightness-90"></div>

      {/* Background Image → lower z-index */}
      <div ref={bgHeroImgRef} className="h-full w-full absolute opacity-0 top-0 right-0 -z-10 ">
        <Image
          src={heroSectionBgImg}
          alt="bg hero section image"
          height={600}
          width={2000}
          className="h-full w-full object-cover"
        />
      </div>

      {/* <div className=" absolute  top-0 right-0 z-10 backdrop-blur-2xl"></div> */}


      {/* Text content → higher z-index */}
      <div ref={HeroContentContainerRef} className="h-max w-[90%] md:w-[70%] lg:w-[70%] opacity-0 px-5 rounded-2xl  border-2 border-zinc-200 text-zinc-100 z-10 mt-20 text-shadow-2xs backdrop-blur-xl py-10 text-center">
        <div ref={HeroContentRef} className="w-full opacity-0 ">
          <h1 className=' w-full text-3xl md:text-4xl  font-bold mb-0 text-center'>Syed Software Institute</h1>
          <h1 className=' w-[100%] text-sm md:text-sm  font-bold mb-5'>Empowering Bannu’s Talent with IT Skills</h1>
          <p className='mt-5 text-sm'>Located in the heart of Bannu on Railway Road, Syed Software Institute delivers hands‑on, industry‑aligned training in full‑stack development, mobile & web applications, graphic design, animation and digital marketing. With modern computer labs, expert instructors and a vibrant community of over 1000+ learners, SSI ensures every student masters real‑world tools, best practices and certification‑ready projects that employers demand. Join us to transform your passion into professional skills—and lead Bannu’s tech revolution.</p>
          <Link href="#contact" scroll={true}>
            <button
              className='mt-10 bg-[#f28c28] px-7 hover:px-10 hover:bg-[#f28c28] hover:scale-105 transition-all duration-200 h-max w-max p-2  rounded-sm text-[#ffffff]'>Contact</button>
          </Link>
        </div>
      </div>





    </div>

  )
}

export default Hero