import styles from "./style.module.css"

export default function Cycles(){
    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>
            <div className={styles.cycleDots}>
                <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
                <span className={`${styles.cyclesDot} ${styles.longTime}`}></span>
            </div>
        </div>
    )
}