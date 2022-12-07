import './App.css'
import { Aside } from './components/Aside/Aside'
import { UsersContextProvider } from './contexts/userContext/userContextProvider'

function App() {
  return (
    <UsersContextProvider>
      <div className="container root-container">
        <Aside />
      </div>
    </UsersContextProvider>
  )
}

export default App
