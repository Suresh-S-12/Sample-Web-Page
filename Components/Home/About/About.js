import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  return (
    
    <div>
      <h1>Life is hard</h1>
      <button onClick={()=>navigate(-1)} className="back">Back</button>
    </div>
    
    
  )
}

export default About