import React, { useReducer, useState } from 'react'

import { useNavigate } from 'react-router-dom';
const reducer =(state,action)=>{
  switch (action.type){
    case 'increment':
      return Number(action.payload)+Number(state);
    case 'decrement':
      return Number(state)-Number(action.payload);
    case 'multiply':
      return Number(action.payload)*Number(state);
    case 'divide':
    return Number(state)/Number(action.payload);
    
  }
  

  
}

function Counter() {
  const [count,setCount] =useReducer(reducer,0);
  const [change,setChange] =useState(0)

  


  const navigate =useNavigate();
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <input type="number" value={change} onChange={(e)=>setChange(e.target.value)} />
        <h1>{count}</h1>
      </div>
      <button onClick={()=>setCount({type:'increment', payload:change })} >Add by</button>
      
      <button onClick={()=>setCount({type:'decrement' ,payload:change})}>Subtract by</button>
      <button onClick={()=>setCount({type:'multiply' ,payload:change})}>Multiply by</button>
      <button onClick={()=>setCount({type:'divide' ,payload:change})}>Divide by</button>
    </div>
  )
}

export default Counter