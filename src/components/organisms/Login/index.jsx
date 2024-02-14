import React, { useState } from 'react'
import { AuthService } from '../../../services/AuthService'
import './Login.scss'
import  Logo from '../../../assets/images/logo.png'
import LoginImage from '../../../assets/images/Login-image.png'
import Navbar from "../../molecules/Navbar";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState("");
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);



    const handleLogin = async (e) => {
        e.preventDefault();

        const data = (email, password);

        try{
            const response = await AuthService.login(data);
            if(response.error) {
                setError(response.error);
            }else {
                setIsLoginSuccess(true);
            }
        } catch (error) {
            setError("Failed to login, Please try again.");
        }
    };


    
  return (
    <>
        <Navbar />
        <div className="login-container">
            <div className="login-form">
            <h2>Login</h2>
            <img src={Logo} alt="Logo" />
            <p>See your growth and get consulting support!</p>
            <div className="divider">
                <hr />
                Login with Email <hr />
            </div>
            <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              minLength="8"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
    </>
  );
};

export default Login
