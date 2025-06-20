import Navbar from '@/components/Navbar'
import { GsapContextProvider } from '@/context/GsapContext.jsx'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Members from '@/sections/Members'
import Projects from '@/sections/Projects'
import Services from '@/sections/Services'
import React from 'react'


const page = () => {
  return (
    <div className='w-[98.6vw] m-auto overflow-x-hidden scroll-smooth '>

      <GsapContextProvider>





        <Navbar />



        <Hero />



        <About />

        <Projects/>


        <Services />


        <Members />



        <Contact />



        <Footer />





      </GsapContextProvider>


    </div>
  )
}

export default page