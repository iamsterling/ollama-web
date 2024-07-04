'use client'

import { View } from "./view"
import { Context } from './context'
import { useContext, useEffect } from "react"
import { CgClose, CgMenuLeft } from "react-icons/cg"

export const Client = () => {

    const { isActive, setIsActive, isFullScreen } = useContext(Context)

    const handle = {
        menu() {
            setIsActive(!isActive)
        }
    }


    useEffect(() => {
        if (window.matchMedia("(max-width: 1200px)").matches) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }, [])



    return <View state={isActive}
        action={{ menu: handle.menu}}
        icon={{ menu: !isActive ? <CgMenuLeft /> : <CgClose />}}
    />
}