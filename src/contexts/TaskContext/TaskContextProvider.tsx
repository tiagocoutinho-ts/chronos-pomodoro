import { useEffect, useReducer, useRef } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer"
import { TimeWorkerManager } from "../../workers/TimeWorkersManager"
import { TaskActionTypes } from "./taskActions"
import { loadBeep } from "../../utils/loadBeep"

type TaskContextProviderPros = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderPros) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState)
    let playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)
    
    const worker = TimeWorkerManager.getInstance()

    worker.onmessage(e => {
        const countDownSeconds = e.data
        console.log(countDownSeconds)

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
        if (!state.activeTask) {
            worker.terminate()
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