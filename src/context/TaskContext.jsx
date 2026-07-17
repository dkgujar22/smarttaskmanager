import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { supabase } from "../SupabaseClient";

const TaskContext=createContext();
const initialState={
    tasks:[],
    setbutton:false,
    loading:false

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
                ...state,tasks:action.payload
            };
        case "TOGGLE_TASK":
            return {
                ...state,tasks:state.tasks.map((task)=>(task.id===action.payload?{...task, done:!task.done}:task
                ))
            }
        case "DELETE_TASK":
            return {
                ...state,tasks:state.tasks.filter((task)=>
                task.id!==action.payload
            )
            }
        case "EDIT_ROW":
            return {
                ...state,tasks:action.payload
            }    
        case "HANDLE_BTN":
            return {...state,setbutton:!state.setbutton};    
        case "LOADING":
            return {...state,loading:!state.loading};    
        default:
            return state         

    }

}

export const TaskProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);
    const [task,setTask]=useState('');
    const [editid,setEditid]=useState('');
    const [priority,setPriority]=useState('');

    
   useEffect(()=>{
        const fetchItem=async()=>{
        const {data,error}=await supabase.from('tasklists').select('*').order('id', {ascending:true});

        if(error){
            alert(error.message)
        }
        else{

            dispatch({
                type:"LOADING"
            })
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

        const {error}=await supabase.from('tasklists').update({done:!taskdone}).eq('id', taskid);

       
        dispatch({
            type:"TOGGLE_TASK",
            payload:taskid
        })

    }
   
    const getEditItem=(taskid)=>{
       const getitem=state.tasks.filter((task)=>task.id===taskid);
       setEditid(getitem[0].id);
       setTask(getitem[0].taskname);
       setPriority(getitem[0].priority);



       dispatch({
        type:"HANDLE_BTN"
       })

     
    }
     const handletableEdit=async(taskid,taskname,priority)=>{

        console.log(taskname,priority);
        
        const {error:updateError}=await supabase.from('tasklists').update({taskname,priority}).eq('id',taskid).select();
        if(updateError){
            alert(updateError.message);
        }
        const {data,error:fetchError}=await supabase.from('tasklists').select("*").order('id', {ascending:true});
        dispatch({
            type:"EDIT_ROW",
            payload:data
        })
        

        // setTask('')
        // setPriority('')

    }
      
   

    return(
        <TaskContext.Provider value={{state,dispatch,addItem,deleteTask,ToggleComplete,getEditItem,handletableEdit,task,setTask,priority,setPriority,editid}}>
            {children}
        </TaskContext.Provider>
    )


}

export const useTask=()=>useContext(TaskContext);