import { Avatar } from '@/components/avatar'
import style from './index.module.scss'

export const Message = ({...msg}: any) => {

    return <div className={style.container} data-role={msg.role} key={`${msg.role}-${msg.id}`}>
        { msg.role === "assistant" && <Avatar src="ollama.png" size="md" />}
        <div className={style.content}>
            {msg.content}
        </div>
    </div>
}