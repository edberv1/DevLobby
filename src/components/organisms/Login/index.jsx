import React, { useState } from 'react'
import { AuthService } from '../../../services/AuthService'
import './Login.scss'


import  Logo from '../../../assets/images/logo.png'
import LoginImage from '../../../assets/images/Login-image.png'



const Login = () => {
  return (
    <div className="login-container">
        <div className="login-form">
        <h2>Login</h2>
        <img src={Logo} alt="Logo" />
        <p>See your growth and get consulting support!</p>
        <div className="divider">
            <hr />
            Login with Email <hr />
        </div>
        <form>
            <input type="email" placeholder="Email" required />
            <input
            type="password"
            placeholder="Password"
            minLength="8"
            required
            />

            <button type="submit" className="login-btn">
                Login
            </button>
        </form>
        <div className="login-redirect">
            Not registred yet?<a href="/login">Create an Account</a>
        </div>
            <footer>©2024 Nexus. All rights reserved.</footer>
        </div>
        <div className="login-image-section">
            <img src={LoginImage} alt="DevLobby  Login" />
        </div>
    </div>
  );
};

export default Login
