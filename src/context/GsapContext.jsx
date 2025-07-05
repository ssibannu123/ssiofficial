'use client';
import { createContext, useEffect, useRef } from "react";
const GsapContext = createContext()
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger)

const GsapContextProvider = ({ children }) => {

    let durationVariable = 0.5;



    let logoRef = useRef()
    let navRef = useRef()
    let bgHeroImgRef = useRef()
    let HeroContentContainerRef = useRef()
    let HeroContentRef = useRef()

    let aboutheadingRef = useRef()
    let aboutImgRef = useRef()
    let aboutContentRef = useRef()

    let projectsHeadingRef=useRef()
    let ProjectCardParentElementRef=useRef()

    let servicesHeadingRef = useRef()
    let servicesCardParentElementRef = useRef()

    let membersheadingRef = useRef()
    let membersCardParentElementRef = useRef()

    let contactHeadingRef = useRef()
    let contactCardParentElementRef = useRef()




    // Hero section and navbar annimation 
    useEffect(() => {
        try {


            let gsapTimeline = gsap.timeline()


            gsapTimeline.to(bgHeroImgRef.current,
                {
                    opacity: 1,
                    duration: durationVariable
                }
            )

            gsapTimeline.to(logoRef.current,
                {
                    x: 1,
                    duration: durationVariable
                }
            )

            gsapTimeline.to(navRef.current,
                {
                    opacity: 1,
                    duration: durationVariable
                }
            )

            gsapTimeline.to(HeroContentContainerRef.current,

                {
                    opacity: 1,
                    duration: durationVariable
                }
            )

            gsapTimeline.fromTo(HeroContentRef.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: durationVariable
                }
            )

        } catch (error) {
            console.log(error)
        }


    }, [])




    // About section animation
    useEffect(() => {
        try {

            let gsapTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutheadingRef.current,
                    start: "top 80%"
                }
            })

            gsapTimeline.to(aboutheadingRef.current,
                {
                    opacity: 1,
                    duration: durationVariable,
                }
            )


            gsapTimeline.to(aboutImgRef.current,
                {
                    opacity: 1,
                    duration: durationVariable
                }
            )


            gsapTimeline.to(aboutContentRef.current,
                {
                    x: 1,
                    duration: durationVariable
                }
            )

        } catch (error) {
            console.log(error)
        }
    }, [])











    // services section animation
    useEffect(() => {
        let gsapTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: projectsHeadingRef.current,
                start: "top 80%"
            }
        })

        gsapTimeline.to(projectsHeadingRef.current,
            {
                opacity: 1,
                duration: durationVariable,
            }
        )


        gsapTimeline.to(ProjectCardParentElementRef?.current?.children,
            {
                opacity: 1,
                y: -40,
                duration: durationVariable-0.4,
                stagger: 0.1,
                ease: "power2.out"
            }
        )

    })












    // services section animation
    useEffect(() => {
        let gsapTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: servicesHeadingRef.current,
                start: "top 80%"
            }
        })

        gsapTimeline.to(servicesHeadingRef.current,
            {
                opacity: 1,
                duration: durationVariable,
            }
        )


        gsapTimeline.to(servicesCardParentElementRef?.current?.children,
            {
                opacity: 1,
                y: -40,
                duration: durationVariable-0.4,
                stagger: 0.1,
                ease: "power2.out"
            }
        )

    })









    // Members section animation
    useEffect(() => {
        let gsapTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: membersheadingRef.current,
                start: "top 70%"
            }
        })

        gsapTimeline.to(membersheadingRef.current,
            {
                opacity: 1,
                duration: durationVariable,
            }
        )


        gsapTimeline.to(membersCardParentElementRef?.current?.children,
            {
                opacity: 1,
                y: -50,
                duration: durationVariable-0.4,
                stagger: 0.2,
                ease: "power2.out"
            }
        )

    })






    // contact section animation
    useEffect(() => {
        let gsapTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: contactHeadingRef.current,
                start: "top 70%"
            }
        })

        gsapTimeline.to(contactHeadingRef.current,
            {
                opacity: 1,
                duration: durationVariable,
            }
        )


        gsapTimeline.to(contactCardParentElementRef?.current?.children,
            {
                opacity: 1,
                y: -10,
                duration: durationVariable,
                stagger: 0.2,
                ease: "power2.out"
            }
        )

    })








    


    return (
        <GsapContext.Provider value={{
            logoRef,
            navRef,
            bgHeroImgRef,
            HeroContentContainerRef,
            HeroContentRef,

            aboutheadingRef,
            aboutImgRef,
            aboutContentRef,

            projectsHeadingRef, 
            ProjectCardParentElementRef,

            servicesHeadingRef,
            servicesCardParentElementRef,

            membersheadingRef,
            membersCardParentElementRef,

            contactHeadingRef,
            contactCardParentElementRef
        }}>


            {children}
        </GsapContext.Provider>
    )
}

export { GsapContextProvider, GsapContext }