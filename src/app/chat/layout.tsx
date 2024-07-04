import { PropsWithChildren } from "react"
import { Prompt } from "./components/prompt"
import style from './layout.module.scss'


const Layout = ({ children }: PropsWithChildren ) => {


    return <>
        <nav>Title</nav>
        <main>
            { children }
            <Prompt />
        </main>
    </>
}

export default Layout