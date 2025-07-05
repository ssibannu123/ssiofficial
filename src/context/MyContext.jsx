'use client'
import { createContext, useState } from "react";
const MyContext = createContext()




const MyContextProvider = ({ children }) => {

    const [currentClickedCourseDetails, setCurrentClickedCourseDetails] = useState(null)

    const [currentProjectCatagSectionIndex, setCurrentProjectCatagSectionIndex]= useState(0)






    return (
        <MyContext.Provider value={{
            currentClickedCourseDetails, setCurrentClickedCourseDetails,
            currentProjectCatagSectionIndex, setCurrentProjectCatagSectionIndex
        }} >

            { children }
        </MyContext.Provider >
    )
}






export {
    MyContext,
    MyContextProvider
}