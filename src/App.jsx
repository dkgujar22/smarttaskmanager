import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TaskProvider } from './context/TaskContext'
import TaskInput from './component/TaskInput'
import TaskList from './component/TaskList'
import { ThemeProvider } from './context/ThemeContext'
import Setting from './component/Setting'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     {/* <h1>Task management system</h1> */}
     <TaskProvider>
      <ThemeProvider>
          <Setting/>
          <TaskInput/>
          <TaskList/>
      </ThemeProvider>
     </TaskProvider>
     </>
  )
}

export default App
