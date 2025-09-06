import type { TaskStateModel } from "../components/models/TaskStateModels"

let instance: TimeWorkerManager | null = null

export class TimeWorkerManager {
    private worker: Worker

    private constructor() {
        this.worker = new Worker(new URL("./timerWorker.js", import.meta.url))
    }

    static getInstance() {
        if(!instance){
            instance = new TimeWorkerManager()
        }

        return instance
    }

    postMessage(message: TaskStateModel ) {
        this.worker.postMessage(message)
    }

    onmessage(callback: (event: MessageEvent) => void) {
        this.worker.onmessage = callback
    }

    terminate() {
        this.worker.terminate()
        instance = null
    }
}