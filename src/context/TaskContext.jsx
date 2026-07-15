import { createContext, useContext, useReducer } from "react";

const TaskContext=createContext();
const initialState={
    tasks:[]
}
const newdate=new Date();
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TASK":
            return {
                tasks:[...state.tasks,
                    {id:Date.now(),
                     taskname:action.payload.task,
                     date:new Date(),
                     priority:action.payload.priority,done:false}]
            }
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

    return(
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
        </TaskContext.Provider>
    )


}

export const useTask=()=>useContext(TaskContext);