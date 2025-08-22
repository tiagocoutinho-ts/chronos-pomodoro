import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react"
import style from "./styles.module.css"

export default function Menu() {
    return <nav className={style.menu}>
        <a className={style.menuLink} href="#">
            <HouseIcon/>
        </a>
        <a className={style.menuLink} href="#">
            <HistoryIcon/>
        </a>
        <a className={style.menuLink} href="#">
            <SettingsIcon/>
        </a>
        <a className={style.menuLink} href="#">
            <SunIcon/>
        </a>
    </nav>
}