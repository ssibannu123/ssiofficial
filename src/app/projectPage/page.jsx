'use client'
import { MyContext } from '@/context/MyContext'
import projectData from '@/utilities/projectsData'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {



    let {
        currentProjectCatagSectionIndex
    } = useContext(MyContext)






    return (
        <div className='h-[100vh] w-screen  pt-10  overflow-x-hidden p-5 md:p-10 lg:p-20 flex flex-col  '>



            <h1 className='w-full h-max text-blue-800 text-4xl font-bold text-center mb-10 '>{projectData[currentProjectCatagSectionIndex].name=="web"?"Websites":projectData[currentProjectCatagSectionIndex].name=="uiux"?"UI/UX":projectData[currentProjectCatagSectionIndex].name=="tumbnail"?"TUMBNAIL":null}</h1>


            <div className="h-full w-full flex flex-wrap gap-2 justify-center items-center  mb-20">

                {
                    projectData[currentProjectCatagSectionIndex].data.map((eachProject, index) => {
                        return (
                            <div
                                key={index}
                                className={`h-max   overflow-hidden mt-0 rounded-lg flex justify-center items-center relative  `}>
                                <Image
                                    src={eachProject}
                                    height={400}
                                    width={400}
                                    alt='tumnail img '
                                    className='object-cover rounded-lg border-2 border-zinc-300'
                                />
                                {/* <i className="ri-close-circle-line     absolute top-4 right-4 text-xl text-zinc-200"></i> */}
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default page