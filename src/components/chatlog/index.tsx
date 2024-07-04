import { PropsWithChildren, Suspense } from 'react'
import { Client } from './client'
import { View } from './view'

export const Chatlog = ({ children }: PropsWithChildren) => {

    return <Suspense fallback={<View />}>
        <Client />
    </Suspense>

}