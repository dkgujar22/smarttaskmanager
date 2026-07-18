import React, { useState } from 'react'
import { useTask } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';

const TaskInput = () => {
    
    

    const {state}=useTheme();

    const {state:taskstate,addItem,dispatch,task,setTask,priority,setPriority,handletableEdit,editid}=useTask();
   
    const handleAdd=async()=>{

        console.log(taskstate);
        await addItem(task,priority);
        setTask('');
        setPriority('');
    
        // dispatch({
        //     type:"ADD_TASK",
        //     payload:{
        //         task:task,
        //         priority:priority
            
        //     }
        // })
    }
    const handleEdit=()=>{
        handletableEdit(editid,task,priority);
        dispatch({
            type:"HANDLE_BTN"
        })
          setTask('')
        setPriority('')





    }

   
    


  return (
    <div className='container'>

        <h1>Smart Task Manager </h1>
        <div className="row">
            <input type="text"
            placeholder='Enter the Task'
            value={task}
            className='px-2 py-2 mb-2'
            onChange={(e)=>setTask(e.target.value)} />
        
            <input type="text"
            placeholder='Enter priority'
            value={priority}
            className='px-2 py-2 mb-2'
            onChange={(e)=>setPriority(e.target.value)}/>
            
        
        </div>
        {taskstate.setbutton?<button type="button" className="btn btn-primary" onClick={handleEdit}>Edit Task</button>:<button type="button" className="btn btn-primary" onClick={handleAdd}>Add Task</button>}
        
        

        {/* <button onClick={handletheme}>show theme</button> */}
      
    </div>
  )
}

export default TaskInput
