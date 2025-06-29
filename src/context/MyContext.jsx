'use client'
import { createContext, useState } from "react";
const MyContext = createContext()




const MyContextProvider = ({ children }) => {

    const [currentClickedCourseDetails, setCurrentClickedCourseDetails] = useState(null)

    return (
        <MyContext.Provider value={{
            currentClickedCourseDetails, setCurrentClickedCourseDetails
        }} >
            { children }
        </MyContext.Provider >
    )
}






export {
    MyContext,
    MyContextProvider
}