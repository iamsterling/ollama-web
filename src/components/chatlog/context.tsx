'use client'

import React, { PropsWithChildren, createContext, useState } from "react"

export const Context = createContext<{
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    isFullScreen: boolean,
    setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>
}
>({
    isActive: false,
    setIsActive: () => {},
    isFullScreen: false,
    setIsFullScreen: () => {}
})



export const Provider = ({ children }: PropsWithChildren) => {
    const [ isActive, setIsActive ] = useState<boolean>(false)
    const [ isFullScreen, setIsFullScreen ] = useState<boolean>(false)


    return <Context.Provider value={{ 
        isActive, setIsActive, 
        isFullScreen, setIsFullScreen 
    }}>
        { children }
    </Context.Provider>
}