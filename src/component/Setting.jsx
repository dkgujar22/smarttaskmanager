import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa';

const Setting = () => {
    const {state,dispatch}=useTheme();
    // const [fontsize,setFontSize]=useState(15);
  return (
    <div>
      <button className='mb-2' onClick={()=>dispatch({
        type:"SET_MODE"
      })}> {state.mode? <FaSun /> : <FaMoon />}
    </button>
   <br />
     <button onClick={()=>dispatch({
        type:"SET_LAYOUT"
     })}>{state.layout?"list":"grid"}</button>



     <select  onChange={(e) => dispatch({ type: "SET_FONT", payload: e.target.value })} class="form-select w-25 d-block mx-auto mt-2" aria-label="Default select example">
        <option selected>select font size</option>
        <option value="10px">10px</option>
        <option value="20px">20px</option>
        <option value="30px">30px</option>
     </select>
    </div>

    
  )
}

export default Setting
