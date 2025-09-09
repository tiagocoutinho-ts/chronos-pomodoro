import './styles/theme.css'
import './styles/global.css'

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { MessagesContainer } from './components/MessagesContainer'
import { MainRouter } from './routers/MainRouter'

function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter/>
      </MessagesContainer>
    </TaskContextProvider>
  )
}

export default App