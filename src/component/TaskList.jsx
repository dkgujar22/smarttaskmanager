import React from 'react'
import { useTask } from '../context/TaskContext'
import { useTheme } from '../context/ThemeContext';

const TaskList = () => {
    const {state,dispatch,deleteTask,ToggleComplete,getEditItem}=useTask();
    const {state:themestate}=useTheme();
  return (
    <div className={` p-4 ${themestate.mode ? 'bg-dark text-light' : 'bg-white text-dark'}  ${themestate.layout && 'row'}`}>
          {state.tasks.map((task)=>(
            <div key={task.id} className={` ${themestate.layout && 'col-md-3'}`}>
                <h4  style={{fontSize:themestate.uipref}}>{task.taskname} {task.priority} {task.time}

                 <button onClick={()=>ToggleComplete(task.id,task.done)}>
                    {task.done?'completed':'Toggle Complete'}</button>
                <button onClick={()=>deleteTask(task.id)}>Delete</button> 
                <button onClick={()=>getEditItem(task.id)}>Edit</button>   
                    
                </h4>

                
             
               
            </div>
            
          ))}
    </div>
  )
}

export default TaskList
