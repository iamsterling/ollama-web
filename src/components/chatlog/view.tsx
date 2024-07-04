import { CgClose, CgMenuLeft } from 'react-icons/cg'
import style from './view.module.scss'
import { HiPencilSquare } from 'react-icons/hi2'
import { Links } from './links'


interface ViewProps {
    state: any,
    action: {
        menu: any
    },
    icon: {
        menu: any
    }
}


export const View = ({ state, action, icon }: ViewProps ) => {



    return <>
        <section className={style.actions}>
            <div className={style.menu}
                onClick={() => action.menu()}>
                {icon.menu ? icon.menu : <CgMenuLeft />}
            </div>
            <div className={style.newchat}>
                <HiPencilSquare />
            </div>
        </section>

        <ul className={style.links}>
            <Links />
        </ul>
    </>

}