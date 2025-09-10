import { TimerIcon } from "lucide-react"
import style from "./styles.module.css"
import { RouterLink } from "../RouterLink"

export default function Logo() {
    return <h1 className={style.logo}>
        <RouterLink className={style.logoLink} href="/">
            <TimerIcon/>
            <span>Chronos</span>
        </RouterLink>
    </h1>
}