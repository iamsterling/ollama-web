import { Suspense } from "react"
import { Client } from "./client"

export const Chat = () => {


    return <Suspense fallback={<></>}>
        <Client />
    </Suspense>
}