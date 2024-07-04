import { Suspense } from "react"
import { View } from "./view"

export const Prompt = () => {



    return <Suspense fallback={<></>}>
        <View />
    </Suspense>
}