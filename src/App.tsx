import './styles/theme.css'
import './styles/global.css'
import Home from './pages/Home'
import type { TaskStateModel } from './components/models/TaskStateModels'
import { TaskContextProvider } from './contexts/TaskContext'
import { useState } from 'react'

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15
  }
}

function App() {
  const [state, setState] = useState(initialState)
  return (
  <TaskContextProvider> 
    <Home/>
  </TaskContextProvider> 
  )
}

export default App