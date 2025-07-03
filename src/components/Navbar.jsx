'use client';
import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { GsapContext } from '@/context/GsapContext';
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap';
import { logo } from '@/utilities/filesAndLink';






const Navbar = () => {

    let { logoRef, navRef } = useContext(GsapContext)
    const [isHeroSection, setIsHeroSection] = useState(true)
    let [smallScreen, setSmallScreen] = useState(false)
    let [smallScreenNavDisplay, setSmallScreenNavDisplay] = useState(false)
    let navArray = ["Home", "About", "Projects", "Services", "Members", "Contact"]
    let smallScreenSideNavbarRef = useRef()










    // detect the screen width for the first time and also it detect that is the user is on hero section or slide to another section to change the color of the nav icons
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









    // detect the screen width change and set the screen with in state
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

















    function handleMenuIconClick() {
        let willShowScreen = !smallScreenNavDisplay;
        setSmallScreenNavDisplay(willShowScreen)


        gsap.to(smallScreenSideNavbarRef.current, {
            x: willShowScreen ? 0 : -200,
            duration: 1
        })
    }




    function handleCrosssIconClick() {
        let willShowNav = !smallScreenNavDisplay;
        setSmallScreenNavDisplay(willShowNav)


        gsap.to(smallScreenSideNavbarRef.current, {
            x: -200,
            duration: 1
        })
    }












    return (
        <div className="h-max w-full fixed top-0 right-0 z-50">
            <div className={`h-24 w-full px-2 md:px-5    ${isHeroSection ? "text-zinc-100" : "text-zinc-800"} overflow-hidden flex flex-row justify-between `}>



                {/* logo */}
                <div ref={logoRef} className=" h-20 md:h-28 w-32 mt-2  md:mt-0 md:w-40 flex items-center -translate-x-56">
                    <Image
                        src={logo}
                        alt='logo of ssib'
                        height={120}
                        width={120}
                        className='object-cover'
                    />
                </div>


                <div className="h-full w-max flex  justify-center items-center ">
                    {
                        smallScreen ?

                            // menu icon
                            <div
                                ref={navRef}
                                onClick={handleMenuIconClick}
                                className="h-max w-max text-3xl font-semibold mr-5 opacity-0 cursor-pointer ">
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
                                                className="text-sm md:text-sm dark:text-zinc-100 hover:font-bold transition-all duration-1000">
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
                    <div
                        ref={smallScreenSideNavbarRef}
                        className={`h-[100vh]  w-1/2   fixed top-0 right-0 translate-x-0 backdrop-blur-2xl  transition-all duration-1000`}>
                        <div className="h-full w-full relative pt-20 flex flex-col text-center ml-auto px-10   text-zinc-800">
                            {
                                navArray.map((eachNav, index) => {
                                    return (
                                        <Link
                                            onClick={() => { setSmallScreenNavDisplay(false) }}
                                            href={`#${eachNav.toLowerCase()}`}
                                            scroll={true}
                                            key={index}
                                            style={isHeroSection ? { color: "white" } : { color: "black" }}
                                            className="   text-lg font-bold mt-5 cursor-pointer select-none">
                                            {eachNav}
                                        </Link>
                                    )
                                })
                            }

                            <i
                                style={isHeroSection ? { color: "white" } : { color: "black" }}
                                onClick={handleCrosssIconClick}
                                className="ri-close-circle-line     absolute top-10 right-5 text-2xl "></i>
                        </div>
                    </div>


                    :

                    null
            }

        </div>
    )
}

export default Navbar