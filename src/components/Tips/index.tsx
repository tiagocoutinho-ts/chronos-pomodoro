import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
    const {state} = useTaskContext()
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle) 

    const tipsForWhenActiveTask = {
        workTime: <span>Próximo ciclo é de <strong>{state.config.workTime}min</strong></span>,
        shortBreakTime: (<span>Próximo ciclo é de <strong>{state.config.shortBreakTime}min</strong></span>),
        longBreakTime: <span>Próximo ciclo é de <strong>descanso longo</strong></span>
    }

    const tipsForNoActiveTask = {
        workTime: <span>Próximo ciclo é de <strong>{state.config.workTime}min</strong></span>,
        shortBreakTime: (<span>Próximo ciclo é de <strong>{state.config.shortBreakTime}min</strong></span>),
        longBreakTime: <span>Próximo ciclo é de <strong>descanso longo</strong></span>
    }

    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    )
}