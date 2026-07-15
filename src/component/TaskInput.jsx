import React, { useState } from 'react'
import { useTask } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';

const TaskInput = () => {
    
    const [task,setTask]=useState('');
    const [priority,setPriority]=useState('');

    const {state}=useTheme();

   const {dispatch}=useTask();
    const handleAdd=()=>{
        console.log(state);
    

        dispatch({
            type:"ADD_TASK",
            payload:{
                task:task,
                priority:priority
            
            }
        })
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
