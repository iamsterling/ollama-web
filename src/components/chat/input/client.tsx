'use client'
import { useChat } from "ai/react";
import { View } from "./view"
import { useEffect } from "react";

export const Client = () => {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "http://ai:11434/api/generate"
    });
    


    return <View
        handle={{ submit: handleSubmit, change: handleInputChange }}
        value={input}
    />
}