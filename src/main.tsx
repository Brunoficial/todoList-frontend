import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AddTask from './pages/AddTaskPage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/addTask",
    element: <AddTask/> 
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = { router }/>
  </StrictMode>,
)
