'use client';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image';
import { GsapContext } from '@/context/GsapContext';
import 'remixicon/fonts/remixicon.css'







const Navbar = () => {

    let { logoRef, navRef } = useContext(GsapContext)
    const [isHeroSection, setIsHeroSection] = useState(true)
    let [smallScreen, setSmallScreen] = useState(false)
    let [smallScreenNavDisplay, setSmallScreenNavDisplay] = useState(false)
    let navArray = ["Home", "About","Projects", "Services", "Members", "Contact"]


    useEffect(() => {

        // to activate the menu icon nav when screen is small
        if (window.innerWidth < 650) {
            setSmallScreen(true)
        } else {
            setSmallScreen(false)
        }



        // to change the color of nav when screen is large
        function onscroll() {
            if (window.scrollY > window.innerHeight) {
                setIsHeroSection(false)
            } else {
                setIsHeroSection(true)
            }
        }
        window.addEventListener("scroll", onscroll)


        return () => { window.removeEventListener("scroll", onscroll) }




    }, [])










    useEffect(() => {
        console.log(window.innerWidth)
        function handleResizeFunc(e) {
            console.log(window.innerWidth)
            if (window.innerWidth < 650) {
                setSmallScreen(true)
            } else {
                setSmallScreen(false)
            }
        }

        window.addEventListener("resize", handleResizeFunc)

        return () => { window.removeEventListener("resize", handleResizeFunc) }

    }, [])




















    return (
        <div className="h-max w-full fixed top-0 right-0 z-50">
            <div className={`h-24 w-full px-2 md:px-5    ${isHeroSection ? "text-zinc-100" : "text-zinc-800"} overflow-hidden flex flex-row justify-between `}>



                {/* logo */}
                <div ref={logoRef} className=" h-20 md:h-28 w-32 mt-1 md:mt-0 md:w-40 flex items-center -translate-x-56">
                    <Image
                        src={logo}
                        alt='logo of ssib'
                        height={200}
                        width={200}
                        className='object-cover'
                    />
                </div>


                <div className="h-full w-max flex  justify-center items-center ">
                    {
                        smallScreen ?

                            // menu icon
                            <div
                                ref={navRef}
                                onClick={() => { setSmallScreenNavDisplay(prev => !prev) }}
                                className="h-max w-max text-2xl font-semibold mr-5 text-zinc-950 dark:text-zinc-200 cursor-pointer ">
                                <i className="ri-menu-line"></i>
                            </div>
                            :

                            // full navbar
                            <div ref={navRef} className="h-max  w-max opacity-0 text-sm flex gap-2 md:gap-5 justify-center items-center p-3 px-6 rounded-full backdrop-blur-lg shadow-sm  border-[1px] border-zinc-200">
                                {
                                    navArray.map((eachNav, index) => {
                                        return (
                                            <Link
                                                href={`#${eachNav.toLowerCase()}`}
                                                scroll={true}
                                                key={index}
                                                className="text-sm md:text-sm dark:text-zinc-100 hover:font-bold transition-all duration-500">
                                                {eachNav}
                                            </Link>
                                        )
                                    })
                                }
                            </div>


                    }
                </div>










            </div>








            {
                smallScreenNavDisplay ?
                    <div className="h-max flex flex-col text-center ml-auto px-10 backdrop-blur-2xl py-2 text-zinc-800">
                        {
                            navArray.map((eachNav, index) => {
                                return (
                                    <Link
                                        onClick={() => { setSmallScreenNavDisplay(false) }}
                                        href={`#${eachNav.toLowerCase()}`}
                                        scroll={true}
                                        key={index}
                                        className="text-sm md:text-lg dark:text-zinc-100 cursor-pointer select-none">
                                        {eachNav}
                                        <hr></hr>
                                    </Link>
                                )
                            })
                        }
                    </div>


                    :

                    null
            }

        </div>
    )
}

export default Navbar