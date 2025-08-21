import { TimerIcon } from "lucide-react"
import style from "./styles.module.css"

export default function Logo() {
    return <h1 className={style.logo}>
        <a href="#">
            <TimerIcon/>
            <span>Chronos</span>
        </a>
    </h1>
}