import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import style from "./styles.module.css"
import { useState, useEffect } from "react"
import { RouterLink } from "../RouterLink"

type AvailableThemes = "dark" | "light"

export default function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem("theme") as AvailableThemes || "dark"
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault()
        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    return <nav className={style.menu}>
        <RouterLink className={style.menuLink} href="/" aria-label="Ir para a Home" title="Ir para a Home">
            <HouseIcon />
        </RouterLink>
        <RouterLink className={style.menuLink} href="/history/" aria-label="Ver histórico" title="Ver histórico">
            <HistoryIcon />
        </RouterLink>
        <RouterLink className={style.menuLink} href="/settings/" aria-label="Configurações" title="Configurações">
            <SettingsIcon />
        </RouterLink>
        <RouterLink className={style.menuLink} href="#" aria-label="Mudar Tema" title="Mudar Tema"
            onClick={handleThemeChange}>
            {nextThemeIcon[theme]}
        </RouterLink>
    </nav>
}