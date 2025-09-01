import { useEffect, useReducer, useState } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"

type TaskContextProviderPros = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderPros) {
    const [state, setState] = useState(initialTaskState)

    return (
        <TaskContext.Provider value={{state, setState}}>
           {children}
        </TaskContext.Provider>
    )
}
