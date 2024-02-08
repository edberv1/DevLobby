import React,  { useState } from 'react';
import './Logiin.css'


import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Logiin = () => {

  const [action,setAction] = useState("Logiin");


  return (
    
      <div className='contanier'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email"  placeholder='email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='password' />
            </div>
        </div>
        <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
        <div className="submit-conatiner">
            <div className={"submit"} onClick={()=>{setAction("Logiin")}}>Login</div> 
        </div>
      </div>
    
  )
}

export default Logiin
