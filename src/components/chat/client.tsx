'use client'

import { useChat } from "ai/react"
import { useEffect } from "react"
import { Message } from "./message"
import style from './index.module.scss'
import { View } from "./view"

export const Client = () => {

    let { messages } = useChat({
        api: "",
        initialMessages: [
            { id: "0", role: "system", content: "Hello"},
            { id: "1", role: "assistant", content: "Hello"},
            { id: "2", role: "user", content: "Hello"},
            { id: "3", role: "assistant", content: "Hello"},
            { id: "4", role: "user", content: "Hello"},
            { id: "5", role: "assistant", content: "Hello"},
            { id: "6", role: "user", content: "Hello"},
            { id: "7", role: "assistant", content: "Hello"},
            { id: "8", role: "user", content: "Hello"},
            { id: "9", role: "assistant", content: "Hello"},
            { id: "10", role: "user", content: "Hello"},
            { id: "11", role: "assistant", content: "Hello"},
            { id: "12", role: "user", content: "Hello"},
            { id: "13", role: "assistant", content: "Hello"},
            { id: "14", role: "user", content: "Hello"}
        ]
    })
    
    //  return <div className={style.container}>
    //      {messages.map((msg, index) => {
    //          return <Message {...msg} />
    //      })}
    //  </div>


    return <View msg={messages} />
}