import { Link } from "react-router"
import style from "./styles.module.css"

export default function Footer() {
    return (
    <footer className={style.footer}>
        <Link to="/about-pomodoro/">Entenda como funciona a técnica pomodoro</Link>
        <Link to="/">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</Link>
    </footer>
    )
}