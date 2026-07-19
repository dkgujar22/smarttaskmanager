import React from 'react'
import { useTask } from '../context/TaskContext'
import { useTheme } from '../context/ThemeContext';

const TaskList = () => {
    const {state,dispatch,deleteTask,ToggleComplete,getEditItem}=useTask();
    const {state:themestate}=useTheme();
  return (
    <div  className={` p-4  ${themestate.mode ? 'bg-dark text-light' : 'bg-white text-dark'}  ${themestate.layout && 'row gy-2 ' }`}>

      {state.loading?<h1 style={{marginTop:"100px"}}>loading...</h1>:
       <>
        {state.tasks.map((task)=>(
            <ul key={task.id} className={` list-group ${themestate.layout && 'col-md-3 justify-content-center'}`}>

              {/* <div className="row align-item-center">
                
                <div className="col-md-6 p-2 ">
                  <div className="container">
                    <p className='text-start fs-4'  style={{fontSize:themestate.uipref}}>{task.taskname} {task.priority} {task.time}</p>
                  </div>
                </div>

                <div className="col-md-6 p-2">
                   <div className="btn-group" role="group" aria-label="Basic example">
                     <button type="button" onClick={()=>ToggleComplete(task.id,task.done)} className="btn btn-success w-100">{task.done?'Completed':'Toggle Complete'}</button>
                     <button type="button" onClick={()=>deleteTask(task.id)}  className="btn btn-danger">Delete</button>
                     <button type="button" onClick={()=>getEditItem(task.id)} className="btn btn-warning">Edit</button>
                   </div>
              </div>
              </div> */}
              <li class="list-group-item">
                <div className={`${!themestate.layout && 'row g-2'}`}>
                  <div className={`${!themestate.layout &&  'col-md-6'}`}>
                    <div className="container">
                      <p className='text-start'  style={{fontSize:themestate.uipref}}>{task.taskname} | {task.priority} | {task.time}</p>
                    </div>
                         
                  </div>
                  <div className={`${!themestate.layout &&  'col-md-6'}`}>
                    <div className="container">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" style={{width:"150px"}} onClick={()=>ToggleComplete(task.id,task.done)} className="btn btn-success">{task.done?'Completed':'Toggle Complete'}</button>
                <button type="button" onClick={()=>deleteTask(task.id)}  className="btn btn-danger">Delete</button>
                <button type="button" onClick={()=>getEditItem(task.id)} className="btn btn-warning">Edit</button>
              </div>
                    </div>

                  </div>
                </div>
              </li>


              {/* <span className='border border-2 border-danger'  style={{fontSize:themestate.uipref}}>{task.taskname} {task.priority} {task.time}</span>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={()=>ToggleComplete(task.id,task.done)} className="btn btn-success">{task.done?'Completed':'Toggle Complete'}</button>
                <button type="button" onClick={()=>deleteTask(task.id)}  className="btn btn-danger">Delete</button>
                <button type="button" onClick={()=>getEditItem(task.id)} className="btn btn-warning">Edit</button>
              </div> */}

  
            </ul>
            
          ))}
       </>}
         
      
    </div>
  )
}

export default TaskList
