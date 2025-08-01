import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AddTaskPage from './pages/AddTaskPage.tsx'
import EditTaskPage from './pages/EditTaskPage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/addTask",
    element: <AddTaskPage/> 
  },
  {
    path: "/edit",
    element: <EditTaskPage/>,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = { router }/>
  </StrictMode>,
)
