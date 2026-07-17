import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { supabase } from "../SupabaseClient";

const TaskContext=createContext();
const initialState={
    tasks:[]
}
const newdate=new Date();
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TASK":

            // return {
            //     tasks:[...state.tasks,
            //         {id:Date.now(),
            //          taskname:action.payload.task,
            //          date:new Date(),
            //          priority:action.payload.priority,done:false}]
            // }
            return {
                tasks:action.payload
            };
        case "TOGGLE_TASK":
            return {
                tasks:state.tasks.map((task)=>(task.id===action.payload?{...task, done:!task.done}:task
                ))
            }
        case "DELETE_TASK":
            return {
                tasks:state.tasks.filter((task)=>
                task.id!==action.payload
            )
            }
        default:
            return state         

    }

}

export const TaskProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);
    const [task,setTask]=useState('');
    const [priority,setPriority]=useState('');
    
   useEffect(()=>{
        const fetchItem=async()=>{
        const {data,error}=await supabase.from('tasklists').select('*').order('id', {ascending:true});

        if(error){
            alert(error.message)
        }
        else{
            dispatch({
            type:"ADD_TASK",
            payload:data
            
        })
        console.log("Data fetched from Supabase:", data); 
        console.log(state);

        } 
    }
    fetchItem()

     },[])


    const addItem=async(taskname,priority)=>{
        const {data,error}=await supabase.from('tasklists').insert([{taskname,priority,time:new Date().toISOString(),done:false}])

        if(error){
            alert(error.message);
        }
        else{
            dispatch({
            type:"ADD_TASK",
            payload:data
        })
        }
    }

    const deleteTask=async(taskid)=>{
        
        const  {data,error}=await supabase.from('tasklists').delete().eq('id', taskid);
       
        dispatch({
            type:"DELETE_TASK",
            payload:taskid
        })
    }
    const ToggleComplete=async(taskid,taskdone)=>{

        const {data,error}=await supabase.from('tasklists').update({done:!taskdone}).eq('id', taskid);
        dispatch({
            type:"TOGGLE_TASK",
            payload:taskid
        })

    }
    // const getEditItem=async(taskid,taskname,priority)=>{

    //     const {data,error}=await supabase.from('tasklists').update({taskname,priority}).id('id',taskid);

    // }
    const getEditItem=async(taskid)=>{

       const getitem=state.tasks.filter((task)=>task.id===taskid);
       console.log(getitem); 
       setTask(getitem[0].taskname);
       setPriority(getitem[0].priority);
    }
      
   

    return(
        <TaskContext.Provider value={{state,dispatch,addItem,deleteTask,ToggleComplete,getEditItem,task,setTask,priority,setPriority}}>
            {children}
        </TaskContext.Provider>
    )


}

export const useTask=()=>useContext(TaskContext);