import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Home/Home.css'
function Home({state, dispatch}) {
  const navigate = useNavigate();
  return (
    <div>
      
      <h1>Home</h1>
      <button >GO to Home</button>
      <div className="logged_in">
        
        
        {state.userData.isLogged && (
        <div>
        <h2>Hurray!!You are successfully logged in🤩🤩</h2>
        <h2>username : {state.userData.name}</h2>
        <h2>Email : {state.userData.email}</h2>
        <h2>{state.productList.name}</h2>
        <button className="logout_button" onClick={()=>navigate('/Products')}>Product</button>
        <button onClick={()=>{  dispatch({type:'logout'}); navigate('/Login')}}  className="logout_button">Logout</button>
        </div>
        
            
      )}
       

        
      </div>
      <button onClick={()=>navigate('/About')} >ABout</button>
      <button onClick={()=>navigate('Parent')} >Parent</button>
    </div>
  )
}

export default Home