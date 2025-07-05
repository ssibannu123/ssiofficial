'use client';
import { GsapContext } from '@/context/GsapContext';
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { tumbnail1 } from '@/utilities/filesAndLink';
import "./Project.css"
import projectData from '@/utilities/projectsData';
import { MyContext } from '@/context/MyContext';
import { useRouter } from 'next/navigation';








const Projects = () => {

    let scrollToContainer = useRef()

    let {
        projectsHeadingRef,
        ProjectCardParentElementRef,
    } = useContext(GsapContext)

    let {
        setCurrentProjectCatagSectionIndex
    } = useContext(MyContext)

    let router = useRouter()
    let [tumbnailSectionView, setTumbnailSectionView] = useState(false)
    let [uiUxSectionView, setUiUxSectionView] = useState(false)
    let [webSectionView, setWebSectionView] = useState(false)
    let [threeDSectionView, setThreeDSectionView] = useState(false)




    let projectArray = [
        {
            type: "video",
            url: "https://res.cloudinary.com/dop329ono/video/upload/v1750147212/project2_himuqg.mp4"
        },
        {
            type: "video",
            url: "https://res.cloudinary.com/dop329ono/video/upload/v1750147127/project1_yl6htk.mp4"
        },
    ]





    useEffect(() => {

        let element = scrollToContainer.current;

        if (!element) {
            return;
        }

        const onWheel = (e) => {
            e.preventDefault()
            element.scrollLeft += e.deltaY;
        }

        element.addEventListener("wheel", onWheel)
        return () => {
            element.removeEventListener("wheel", onWheel)
        }
    }, [])















    useEffect(() => {
        console.log(tumbnailSectionView)
    }, [tumbnailSectionView])







    function handleSectionBoxClick(sectionName) {
        if (sectionName == "tumbnail") {
            setTumbnailSectionView(prev => !prev)
        } else if (sectionName == "uiux") {
            setUiUxSectionView(prev => !prev)
        } else if (sectionName == "web") {
            setWebSectionView(prev => !prev)
        } else if (sectionName == "3d") {
            setThreeDSectionView(prev => !prev)
        }
    }








    return (
        <div
            id='projects'
            className='mt-20 md:mt-20 relative py-10 pb-20 hover:border-2 hover:border-zinc-200 mx-2 bg-zinc-50 rounded-lg shadow-md shadow-zinc-300 '>





            <div
                ref={projectsHeadingRef}
                className="h-max w-full text-3xl  md:text-4xl font-bold px-10 text-center mb-0 opacity-0 dark:text-zinc-950">
                <span className='text-[#F28C28]'>Our</span> Achievements
            </div>







            {/* upper container */}
            <div
                // ref={scrollToContainer}

                className="h-max  w-fulloverflow-hidden  flex   px-5 mt-10">




                {/* lower container */}
                <div
                    ref={ProjectCardParentElementRef}
                    className="h-max w-full  flex flex-wrap gap-2 gap-y-4 mt-10 justify-center items-center">



                    {/* loop on array */}
                    {

                        projectData.map((eachSection, index) => {



                            return (


                                <div
                                    key={index}
                                    onClick={() => { setCurrentProjectCatagSectionIndex(index); router.push("projectPage") }}
                                    className={`projectBox       h-max w-80 opacity-0    gap-x-2 gap-y-2 flex  justify-center items-center  p-2 transform origin-center transition-transform duration-1000 border-2 border-zinc-200 rounded-lg `}>



                                    {/* map on child arrays inside parent array looping */}
                                    {
                                        eachSection.data.map((eachProject, indexChild) => {

                                            // to make sure that on screen of home, more that 4 not rendered and there is not limitation on projectPage projects
                                            if (indexChild >= 4) {
                                                console.log(indexChild)
                                                return;
                                            }

                                            return (
                                                <div
                                                    key={indexChild}
                                                    className={` w-[48%]  overflow-hidden mt-0 rounded-lg flex justify-center items-center `}>
                                                    <Image
                                                        src={eachProject}
                                                        height={100}
                                                        width={150}
                                                        alt='tumnail img '
                                                        className=' object-cover rounded-lg border-2 border-zinc-300'
                                                    />
                                                </div>
                                            )
                                        })
                                    }



<h1>{eachSection.name=="web"?"Websites":eachSection.name=="uiux"?"UI/UX":eachSection.name=="tumbnail"?"TUMBNAIL":null}</h1>



                                </div>


                            )
                        })

                    }







                </div>

                {/* The container which hold the card */}
                {/* <div
                    ref={servicesCardParentElementRef}
                    className={`h-max  w-full    transition-all  duration-500 flex flex-row justify-start md:justify-center gap-1 items-center pr-10 `}>
                   
                   

                   
                   
                   
                   
                     {
                        projectArray.map((eachProject, index) => {
                            return (
                                // card container
                                <div key={index}
                                    className={` h-max pb-10   translate-y-10 transition-all duration-500 shrink-0 border-2 border-zinc-200 p-2 rounded-lg`}>
                                    {
                                        eachProject.type == "video" ?
                                            <video  className='max-h-[500px] max-w-96' controls width="640" height="400">
                                                <source src={eachProject.url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            :
                                            <Image
                                                src={eachProject.url}
                                                height={300}
                                                width={300}
                                                alt='project img'
                                                className='object-center'
                                            />
                                    }
                                </div>
                            )
                        })
                    } 
                </div> */}
            </div>



        </div>
    )
}

export default Projects



