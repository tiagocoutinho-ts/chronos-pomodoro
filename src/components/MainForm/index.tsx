import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import DefaultButton from "../DefaultButton"
import Cycles from "../Cycles"
import DefaultInput from "../DefaultInput"
import { useRef } from "react"
import type { TaskModel } from "../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import formatSecondsToMinutes from "../../utils/formatSecondsToMinutes"

export default function MainForm() {
    const taskNameInput = useRef<HTMLInputElement>(null)
    const {state, setState} = useTaskContext()

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle) 

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
            duration: state.config[nextCycleType],
            type: nextCycleType
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        setState(prevState => {
            return {
                ...prevState,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: "00:00",
                tasks: prevState.tasks.map(task => {
                    if(prevState.activeTask && prevState.activeTask.id === task.id) {
                        return {...task, interruptDate: Date.now()}
                    }
                    return task
                })
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
                    disabled={!!state.activeTask}
                />
            </div>

            <div className="formRow">
                <p>Próximo intervalo em <strong>{state.formattedSecondsRemaining}</strong>min</p>
            </div>

            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}

            <div className="formRow">
                {!state.activeTask && (
                <DefaultButton 
                    icon={<PlayCircleIcon />}
                    key={"submit"}
                    color="green"
                    type="submit" 
                    aria-label="Iniciar nova tarefa"
                    title="Iniciar nova tarefa"/>
            
                )}
                {!!state.activeTask && (
                <DefaultButton 
                    icon={<StopCircleIcon />}
                    key={"button"}
                    color='red'
                    type="button"
                    onClick={(e) => handleInterruptTask(e)}
                    aria-label="Interromper tarefa atual" 
                    title="Interromper tarefa atual"/>
                )}
            </div>
        </form>
    )
}