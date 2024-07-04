import { Input } from "./input"
import { Message } from "./message"
import style from './view.module.scss'

interface ViewProps {
    msg: Array<{
        id: string,
        role: "function" | "data" | "system" | "assistant" | "user" | "tool",
        content: string
    }>
}

export const View = ({ msg }: ViewProps) => {



    return <section className={style.container}>
        { msg.map((msg, index) => {
            return <Message {...msg} key={Math.random()}/>
        })}
    </section>
}