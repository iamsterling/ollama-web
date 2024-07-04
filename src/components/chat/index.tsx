import { ReactNode, Suspense } from "react"
import { View } from "./view"
import { Client } from "./client"

import style from './index.module.scss'


interface MessagesProps {
    className: any
}

export const Chat = ({ className }: MessagesProps ) => {

    return <section className={className}>
        <Suspense fallback={
            <View msg={[
                { id: "0", role: "assistant", content: "" }
            ]}/>
        }>
            <Client />
        </Suspense>
    </section>
}