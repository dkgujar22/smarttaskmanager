import React from 'react'
import { useTask } from '../context/TaskContext'
import { useTheme } from '../context/ThemeContext';

const TaskList = () => {
    const {state,dispatch}=useTask();
    const {state:themestate}=useTheme();
  return (
    <div className={` p-4 ${themestate.mode ? 'bg-dark text-light' : 'bg-light text-dark'}  ${themestate.layout && 'row'}`}>
          {state.tasks.map((task)=>(
            <div key={task.id} className={` ${themestate.layout && 'col-md-3'}`}>
                <h4  style={{fontSize:themestate.uipref}}>{task.taskname} {task.priority} {task.date.toLocaleDateString()}

                 <button onClick={()=>dispatch({
                    type:"TOGGLE_TASK",
                    payload:task.id
                })}>
                    {task.done?'completed':'Toggle Complete'}</button>
                <button onClick={()=>dispatch({
                    type:"DELETE_TASK",
                    payload:task.id
                })}>Delete</button>    
                    
                </h4>

                <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
             
               
            </div>
            
          ))}
    </div>
  )
}

export default TaskList
