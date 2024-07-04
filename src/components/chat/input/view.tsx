import { useChat } from 'ai/react'
import { ChangeEventHandler, FormEvent, FormEventHandler } from 'react'
import style from './view.module.scss'

interface ViewProps {
    handle?: {
        submit: FormEventHandler,
        change: ChangeEventHandler
    },
    value?: any
}

export const View = ({ handle, value }: ViewProps) => {


    return <form className={style.container}
    onSubmit={handle ? handle.submit : (e: FormEvent) => { e.preventDefault() }}>
        <input value={value}
          placeholder="Say something..."
          onChange={handle ? handle.change : () => {}}
        />
        <button />
    </form>
}