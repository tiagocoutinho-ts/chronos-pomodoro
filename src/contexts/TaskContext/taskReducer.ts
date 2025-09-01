import type { TaskStateModel } from "../../components/models/TaskStateModels";
import { TaskActionModel, TaskActionTypes } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
    switch(action.type) {
        case TaskActionTypes.START_TASK: {
            return state;
        }

        case TaskActionTypes.INTERRUPT_TASK: {
            return state
        }

        case TaskActionTypes.RESET_STATE: {
            return state;
        }
    }

    return state
}