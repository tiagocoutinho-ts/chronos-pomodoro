import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import style from "./styles.module.css"
import { useState, useEffect } from "react"

type AvailableThemes = "dark" | "light"

export default function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem("theme") as AvailableThemes || "dark"
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>
    }
    
    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement,MouseEvent>){
        e.preventDefault()
        setTheme(prevTheme => {
            const nextTheme = prevTheme ===  "dark" ? "light" : "dark";
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme",theme)
    }, [theme])

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
            {nextThemeIcon[theme]}
        </a>
    </nav>
}