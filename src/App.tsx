import Container from './components/Container'
import CountDown from './components/CountDown'
import Logo from './components/Logo'
import Menu from './components/Menu'
import './styles/theme.css'
import DefaultInput from './components/DefaultInput'
import Cycles from './components/Cycles'
import DefaultButton from './components/DefaultButton'
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <Container>
      <Logo/>
    </Container>

    <Container>
      <Menu/> 
    </Container>

    <Container>
      <CountDown/> 
    </Container>

    <Container>
      <form className='form' action="">
        <div className="formRow">
            <DefaultInput labelText='task' id="meuInput" type="number"/>  
        </div>  

      <div className="formRow">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>  

        <div className="formRow">
            <Cycles/>
        </div>  

        <div className="formRow">
           <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
           {/* <DefaultButton icon={<StopCircleIcon/>} color='red'/> */}
        </div>
      </form> 
    </Container>

    <Container>
      <Footer/> 
    </Container>
    </>
  ) 
}

export default App