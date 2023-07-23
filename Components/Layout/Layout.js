import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../Layout/Layout.css'

function Layout() {
  const navigate =useNavigate();
  return (
    <div className='layout_container'>
      <div className="header">
        <div className="header_left">
          
        </div>
        <div className="header_right">
           <p className='nav_bar' onClick={()=>navigate('/')} >Home</p>
           <p className='nav_bar' onClick={()=>navigate('/About')}>About us</p>
           <p className='nav_bar'onClick={()=>navigate('/Parent')}>parent</p>
           <p className='nav_bar'onClick={()=>navigate('/Counter')}>Counter</p>
           <p className='nav_bar'onClick={()=>navigate('/Login')}>Login</p>
           
        </div>  
      </div>
      <div className="content__space">
        <Outlet /> 
      </div>
    </div>
  )
}

export default Layout