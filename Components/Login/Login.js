import React, { useState } from 'react';
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom';

function Login({state,dispatch}) {
  const [name, setName]= useState('');
  const [email,setEmail]=useState('');
  const navigate =useNavigate();

  const handleLogin=()=>{
    const payload={
      name:name,
      email:email
    };
    dispatch({
      type:'login',
      payload:payload
    });
  

    navigate('/');

  };

  const isLoginButtonDisabled =(name,email)=>{
     return !name || !email
    
  }
  return (
    <div className='login_page_container'>
      <header className="login">
        Enter You credentials🙈...
      </header>
      <div className="login_container">
        
          <label htmlFor="username">Name: </label>
          <input type="text" id='username' onChange={(e)=>setName(e.target.value)} value={name}
          className="name_container" required />
          
          <br />
          <label htmlFor="email">Email :   </label>
          <input type="text" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}
          className="email_container" required />
          
          <br />
          <button onClick={handleLogin }  className="login_button" disabled={isLoginButtonDisabled(name,email)} >Login</button> 
      </div>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  )
}

export default Login