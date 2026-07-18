import React from 'react'
import { useTask } from '../context/TaskContext'
import { useTheme } from '../context/ThemeContext';

const TaskList = () => {
    const {state,dispatch,deleteTask,ToggleComplete,getEditItem}=useTask();
    const {state:themestate}=useTheme();
  return (
    <div className={` p-4 ${themestate.mode ? 'bg-dark text-light' : 'bg-white text-dark'}  ${themestate.layout && 'row'}`}>



      {state.loading?<h1 className='mt-5'>loading...</h1>:
       <>
        {state.tasks.map((task)=>(
            <div key={task.id} className={` ${themestate.layout && 'col-md-3'}`}>

              <div className="row">
                <div className="col-md-6">
                  <span style={{fontSize:themestate.uipref,maxWidth:'400px'}}>{task.taskname} {task.priority} {task.time}</span>
                </div>
                <div className="col-md-6">
                   <button className='btn btn-success' onClick={()=>ToggleComplete(task.id,task.done)}>
                    {task.done?'completed':'Toggle Complete'}</button>
                <button className='btn btn-danger' onClick={()=>deleteTask(task.id)}>Delete</button> 
                <button className='btn btn-warning' onClick={()=>getEditItem(task.id)}>Edit</button>  
                </div>
              </div>

              {/* <div className='container'>
                  <span  style={{fontSize:themestate.uipref}}>{task.taskname} {task.priority} {task.time}</span>
                 <button className='btn btn-success' onClick={()=>ToggleComplete(task.id,task.done)}>
                    {task.done?'completed':'Toggle Complete'}</button>
                <button className='btn btn-danger' onClick={()=>deleteTask(task.id)}>Delete</button> 
                <button className='btn btn-warning' onClick={()=>getEditItem(task.id)}>Edit</button>  
              </div> */}

                 
                    
                

                
             
               
            </div>
            
          ))}
       </>}
         
      
    </div>
  )
}

export default TaskList
