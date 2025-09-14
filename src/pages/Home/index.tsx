import { useEffect } from "react";
import Container from "../../components/Container";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainForm";
import MainTemplate from "../../templates/MainTemplate";

export default function Home() {

    useEffect(() => {
        document.title = "Chornos Pomodoro"
    }, [])

    return (
        <MainTemplate>
            <Container>
                <CountDown/>
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    )
}