import { url } from 'inspector'
import style from './avatar.module.scss'
import React from 'react'

interface AvatarProps {
    src: string,
    size: "sm" | "md" | "lg"
}

export const Avatar = ({ src, size}: AvatarProps) => {


    return <div className={style.avatar} data-size={size}
        style={{ '--img': `url(${src})` } as React.CSSProperties}
    >

    </div>
}