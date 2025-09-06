import { createContext } from "react"
import type { TaskStateModel } from "../../components/models/TaskStateModels"
import { initialTaskState } from "./initialTaskState"
import type { taskActionsModel } from "./taskActions"

type TaskContextProps = {
    state: TaskStateModel,
    dispatch: React.Dispatch<taskActionsModel>
}

const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {}
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)