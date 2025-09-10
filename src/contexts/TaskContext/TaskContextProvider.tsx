import { useEffect, useReducer, useRef } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer"
import { TimeWorkerManager } from "../../workers/TimeWorkersManager"
import { TaskActionTypes } from "./taskActions"
import { loadBeep } from "../../utils/loadBeep"
import type { TaskStateModel } from "../../components/models/TaskStateModels"

type TaskContextProviderPros = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderPros) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
        const storageState = localStorage.getItem("state")

        if(!storageState) return initialTaskState

        const parsedStorageState = JSON.parse(storageState) as TaskStateModel

        return  {
            ...parsedStorageState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: '00:00',
          };
    })
    let playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)
    
    const worker = TimeWorkerManager.getInstance()

    worker.onmessage(e => {
        const countDownSeconds = e.data

        if(countDownSeconds <= 0){
            if(playBeepRef.current) {
                playBeepRef.current()
            }
            dispatch({
                type: TaskActionTypes.COMPLETE_TASK
            })
            worker.terminate()
        } else {
            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: {secondsRemaining: countDownSeconds}
            })
        }
    })

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state))
        if (!state.activeTask) {
            worker.terminate()
            document.title = `Chronos Pomodoro`
        }

        if(state.activeTask) {
            document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`
        }

        worker.postMessage(state)
    }, [worker, state])

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep()
        } else {
            playBeepRef.current = null
        }
    }, [state.activeTask])

    return (
        <TaskContext.Provider value={{state, dispatch}}>
           {children}
        </TaskContext.Provider>
    )
}