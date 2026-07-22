
import './App.css'
import { TaskProvider } from './context/TaskContext'
import TaskInput from './component/TaskInput'
import TaskList from './component/TaskList'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Setting from './component/Setting'



const Layout=()=>{
  const {state}=useTheme();
  return(
    <div className={`container-fluid text-center ${state.mode?'bg-dark text-white':'bg-white text-dark'}`} style={{margin:"0px"}}>
          <Setting/>
          <TaskInput/>
          <TaskList/>

        </div>

  )
}

function App() {
  

  return (
     <>

     {/* <h1>Task management system</h1> */}
     <TaskProvider>
      <ThemeProvider>
        
           <Layout/>
      </ThemeProvider>
     </TaskProvider>
     </>
  )
}

export default App
