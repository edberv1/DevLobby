import React,  { useState } from 'react';
import './Signuup.css'


import personn_icon from '../Assets/personn.png'
import emaill_icon from '../Assets/emaill.png'
import passwordd_icon from '../Assets/passwordd.png'

const Signuup = () => {


  const [action,setAction] = useState("Sign Up");

  return (
    <div className='contanier'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={personn_icon} alt="" />
                <input type="text"  placeholder='emri'/>
            </div>
            <div className="input">
                <img src={personn_icon} alt="" />
                <input type="textt"  placeholder='mbiemri'/>
            </div>
            <div className="input">
                <img src={emaill_icon} alt="" />
                <input type="emaill"  placeholder='email'/>
            </div>
            <div className="input">
                <img src={passwordd_icon} alt="" />
                <input type="passwordd" placeholder='password' />
            </div>
        </div>
        <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
        <div className="submit-conatiner">
            <div className={"submit"} onClick={()=>{setAction("Sign Up")}}>SignUp</div> 
        </div>
    </div>
  )
}

export default Signuup
