import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa';
import Toolbar from './Toolbar';

const Setting = () => {
    const {state,dispatch}=useTheme();
    // const [fontsize,setFontSize]=useState(15);
    const handleLayout=(e)=>{
      dispatch({
        type:"SET_LAYOUT",
        payload:e.target.value
      })
      console.log(e.target.value);
      
      

    }
  return (
    <div className='row g-2 mt-2 '>
      {/* <Toolbar/> */}
     <div className='col-md-4'>
        <div className="container">
          Mode: 
          <button className='bg-transparent border-0 fs-4' onClick={()=>dispatch({
        type:"SET_MODE"
      })}>{state.mode? <FaSun className='text-warning' /> : <FaMoon  />}
    </button>

        </div>
      </div> 
     <div className='col-md-4'>
        {/* <div className="container">
          <button onClick={()=>dispatch({
        type:"SET_LAYOUT"
     })}>{state.layout?"list":"grid"}</button>
     

        </div> */}
        <div className="container" style={{maxWidth:"200px"}}>
          
          <select onChange={handleLayout} class="form-select" aria-label="Default select example">
              {/* <option selected>Select layout</option> */}
              <option value="false">List</option>
              <option value="true">Grid</option>
          </select>
        </div>
      </div> 
     <div className='col-md-4'>
        <div className="container" style={{maxWidth:"200px"}}>
      <select  onChange={(e) => dispatch({ type: "SET_FONT", payload: e.target.value })} class="form-select" aria-label="Default select example">
        <option selected>select font size</option>
        <option value="10px">10px</option>
        <option value="20px">20px</option>
        <option value="30px">30px</option>
     </select>

        </div>
      </div> 

      
  
     



     
    </div>

    
  )
}

export default Setting
