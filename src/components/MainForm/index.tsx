import { PlayCircleIcon } from "lucide-react"
import DefaultButton from "../DefaultButton"
import Cycles from "../Cycles"
import DefaultInput from "../DefaultInput"
import style from "./styles.module.css"

export default function MainForm() {
    return (
        <form className='form' action="">
            <div className="formRow">
                <DefaultInput labelText='task' id="meuInput" type="number" />
            </div>

            <div className="formRow">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="formRow">
                <Cycles/>
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </div>
        </form>
    )
}