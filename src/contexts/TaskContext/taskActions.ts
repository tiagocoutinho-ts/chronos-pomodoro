import type { TaskModel } from "../../components/models/TaskModel"

export enum TaskActionTypes {
    START_TASK = "START_TASK",
    INTERRUPT_TASK = "INTERRUPT_TASK",
    RESET_STATE = "RESET_STATE"
}

export type TaskActionWithPayLoad = 
  |  {
    type: TaskActionTypes.START_TASK, 
    payload: TaskModel
} | {
    type: TaskActionTypes.INTERRUPT_TASK,
    payload: TaskModel,
}

export type TaskActionWithoutPayLoad = {
    type: TaskActionTypes.RESET_STATE
}

export type taskActionsModel = 
    | TaskActionWithPayLoad
    | TaskActionWithoutPayLoad
