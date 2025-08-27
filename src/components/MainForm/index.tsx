import { PlayCircleIcon } from "lucide-react"
import DefaultButton from "../DefaultButton"
import Cycles from "../Cycles"
import DefaultInput from "../DefaultInput"
import { useRef } from "react"
import type { TaskModel } from "../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"

export default function MainForm() {
    const taskNameInput = useRef<HTMLInputElement>(null)
    const {state, setState} = useTaskContext()

    const nextCycle = getNextCycle(state.currentCycle); 

    function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (taskNameInput.current === null) return
        
        const taskName = taskNameInput.current.value.trim()
        
        if (!taskName) {
            alert("Digite o nome da tarefa")
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: 1,
            type: "workTime"
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining: secondsRemaining,
                formattedSecondsRemaining: "00:00",
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    return (
        <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className="formRow">
                <DefaultInput
                    labelText='task'
                    id="meuInput"
                    type="text"
                    ref={taskNameInput}
                />
            </div>

            <div className="formRow">
                <p>Próximo intervalo em <strong>{30}</strong>min</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </div>
        </form>
    )
}