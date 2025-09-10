
import style from "./styles.module.css"
import { RouterLink } from "../RouterLink"

export default function Footer() {
    return (
    <footer className={style.footer}>
        <RouterLink href="/about-pomodoro/">Entenda como funciona a técnica pomodoro</RouterLink>
        <RouterLink href="/">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</RouterLink>
    </footer>
    )
}