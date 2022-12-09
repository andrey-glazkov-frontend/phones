import { Outlet } from 'react-router-dom'
import './App.css'
import { Aside } from './components/Aside/Aside'
import { UsersContextProvider } from './contexts/userContext/userContextProvider'

function App() {
  return (
    <UsersContextProvider>
      <div className="container root-container py-5">
        <Aside />
        <div>
          <Outlet />
        </div>
      </div>
    </UsersContextProvider>
  )
}

export default App
