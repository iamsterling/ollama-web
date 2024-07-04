import { Suspense } from 'react'
import style from './input.module.scss'
import { Client } from './client'




interface InputProps {
    className?: any
}

export const Input = ({ className }: InputProps ) => {



    return <section className={className}>
        <Suspense fallback={<></>}>
            <Client />
        </Suspense>
    </section>
}