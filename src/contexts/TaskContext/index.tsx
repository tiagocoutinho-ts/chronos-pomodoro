import { createContext, useContext } from "react";
import type { TaskStateModel } from "../../components/models/TaskStateModels";

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: "29:00",
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15
    }
}

type TaskContextProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const initialContextValue = {
    state: initialState,
    setState: () => {}
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)

type TaskContextProviderPros = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderPros) {
    return (
        <TaskContext.Provider value={initialContextValue}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTaskContext() {
    return useContext(TaskContext)
}