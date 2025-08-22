import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react"
import style from "./styles.module.css"
import { useState } from "react"

type AvailableThemes = "dark" | "light"

export default function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>("dark")
    
    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement,MouseEvent>){
        e.preventDefault()
        setTheme(prevTheme => {
            const nextTheme = prevTheme ===  "dark" ? "light" : "dark";
            return nextTheme
        })
    }

    return <nav className={style.menu}>
        <a className={style.menuLink} href="#" aria-label="Ir para a Home" title="Ir para a Home">
            <HouseIcon/>
        </a>
        <a className={style.menuLink} href="#" aria-label="Ver histórico" title="Ver histórico">
            <HistoryIcon/>
        </a>
        <a className={style.menuLink} href="#" aria-label="Configurações" title="Configurações">
            <SettingsIcon/>
        </a>
        <a className={style.menuLink} href="#" aria-label="Mudar Tema" title="Mudar Tema"
            onClick={handleThemeChange}>
            <SunIcon/>
        </a>
    </nav>
}