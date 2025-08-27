import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import style from "./styles.module.css"

export default function CountDown() {
    const {state} = useTaskContext()
    return <nav className={style.container}>{state.formattedSecondsRemaining}</nav>
}