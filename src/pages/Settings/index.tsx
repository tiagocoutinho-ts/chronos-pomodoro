import { SaveIcon } from "lucide-react";
import Container from "../../components/Container";
import DefaultInput from "../../components/DefaultInput";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";
import DefaultButton from "../../components/DefaultButton";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export default function Settings() {
    
    const { state, dispatch } = useTaskContext()
    
    const workTimeInput = useRef<HTMLInputElement>(null)
    const shortBreakTimeInput = useRef<HTMLInputElement>(null)
    const longBreakTimeInput = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        document.title = "Configurações - Chornos Pomodoro"
    }, [])
    
    function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        showMessage.dismiss()

        const formErrors = []

        const workTime = Number(workTimeInput.current?.value)
        const shortBreakTime = Number(shortBreakTimeInput.current?.value)
        const longBreakTime = Number(longBreakTimeInput.current?.value)

        if(isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            formErrors.push("Digite apenas números para todos os campos")
        }
        
        if(workTime < 1 || workTime > 99) {
            formErrors.push("Digite valores entre 1 e 99 para foco")
        }

        if(shortBreakTime < 1 || shortBreakTime > 30) {
            formErrors.push("Digite valores entre 1 e 30 para descanso curto")
        }

        if(longBreakTime < 1 || longBreakTime > 60) {
            formErrors.push("Digite valores entre 1 e 60 para descanso longo")
        }

        if(formErrors.length > 0) {
            formErrors.forEach(error => {
                showMessage.error(error)
            })
            return
        }

        dispatch({ 
            type: TaskActionTypes.CHANGE_SETTINGS, 
            payload: {
                workTime,
                shortBreakTime,
                longBreakTime
        }})

        showMessage.success("Configurações salvas")
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>
            <Container><p style={{ textAlign: "center"}}>
                Modifique as configurações para tempo de foco, descanso curto e descanso longo
                </p></Container>
            <Container>
                <form onSubmit={handleSaveSettings} action="" className="form">
                    <div className="formRow">
                        <DefaultInput 
                        id="workTime" 
                        placeholder="" 
                        labelText="Foco"
                        type="number"
                        defaultValue={state.config.workTime} 
                        ref={workTimeInput}/>
                    </div>

                    <div className="formRow">
                        <DefaultInput 
                        id="shortBreakTime" 
                        placeholder="" 
                        labelText="Descanso curto"
                        type="number"
                        defaultValue={state.config.shortBreakTime}
                        ref={shortBreakTimeInput}/>
                    </div>

                    <div className="formRow">
                        <DefaultInput 
                        id="longBreakTime" 
                        placeholder="" 
                        labelText="Descanso longo"
                        type="number"
                        defaultValue={state.config.longBreakTime} 
                        ref={longBreakTimeInput}/>
                    </div>

                    <div className="formRow">
                        <DefaultButton 
                        icon={<SaveIcon/>} 
                        aria-label="Salvar configurações"
                        title="Salvar configurações"/>
                    </div>
                </form>
            </Container>
        </MainTemplate>
    )
}