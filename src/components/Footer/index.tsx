import style from "./styles.module.css"

export default function Footer() {
    return (
    <footer className={style.footer}>
        <a href="">Entenda como funciona a técnica pomodoro</a>
        <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
    </footer>
    )
}