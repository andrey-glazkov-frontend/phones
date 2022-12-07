import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { UserDetail } from './components/UserDetail/UserDetail'

const Myrouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'users/:userId',
        element: <UserDetail />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={Myrouter} />
  </React.StrictMode>,
)
