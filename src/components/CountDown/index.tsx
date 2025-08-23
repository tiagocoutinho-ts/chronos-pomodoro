import { useTaskContext } from "../../contexts/TaskContext"
import style from "./styles.module.css"

export default function CountDown() {
    const TaskContext = useTaskContext().state.formattedSecondsRemaining
    return <nav className={style.container}>{TaskContext}</nav>
}