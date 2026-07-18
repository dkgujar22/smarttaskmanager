import { createContext, useContext, useReducer } from "react";

const ThemeContext=createContext();

const initialState={
    mode:false,
    layout:false,
    uipref:"15px"


}

const reducer=(state,action)=>{
    switch(action.type){
        case "SET_MODE":
            return {...state,mode:!state.mode};
        case "SET_LAYOUT":
            console.log(state.layout);
            return {...state,layout:!state.layout};
        case "SET_FONT":
            return {...state,uipref:action.payload}    
        default:
            return state        

    }
}

export const ThemeProvider=({children})=>{
    
    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme=()=>useContext(ThemeContext);