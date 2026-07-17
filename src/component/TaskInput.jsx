import React, { useState } from 'react'
import { useTask } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';

const TaskInput = () => {
    
    

    const {state}=useTheme();

    const {state:taskstate,addItem,dispatch,task,setTask,priority,setPriority}=useTask();
   
    const handleAdd=async()=>{
        console.log(taskstate);
        await addItem(task,priority);
    
        // dispatch({
        //     type:"ADD_TASK",
        //     payload:{
        //         task:task,
        //         priority:priority
            
        //     }
        // })
    }

   
    


  return (
    <div >

        <h1>Smart Task Manager </h1>
        <input type="text"
        placeholder='Enter the Task'
        value={task}
        onChange={(e)=>setTask(e.target.value)} />
        
        <input type="text"
        placeholder='Enter priority'
        value={priority}
        
        onChange={(e)=>setPriority(e.target.value)}/>

        <button onClick={handleAdd}>ADD</button>

        {/* <button onClick={handletheme}>show theme</button> */}
      
    </div>
  )
}

export default TaskInput
