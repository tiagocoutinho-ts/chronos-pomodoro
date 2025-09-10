import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import styles from "./style.module.css"

export default function Cycles(){
    const { state } = useTaskContext()

    const cycleStep = Array.from({length: state.currentCycle })

    const cycleDescriptionMap = {
        workTime: "foco",
        shortBreakTime: "descanso curto",
        longBreakTime: "descanso longo"
    }
    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle)

                    return (
                        <span 
                        key={nextCycle}
                        className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
                        aria-label={`Ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                        title={`Ciclo de ${cycleDescriptionMap[nextCycleType]}`}></span>
                    )
                })}
            </div>
        </div>
    )
}