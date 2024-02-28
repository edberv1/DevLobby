import React, { useState } from "react";
import { AuthService } from "../../../services/AuthService";
import "./Login.scss";
import Logo from "../../../assets/images/logo.png";
import LoginImage from "../../../assets/images/Login-image.png";
import Navbar from "../../molecules/Navbar";
import { useNavigate } from "react-router-dom"; // For navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To redirect after login

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await AuthService.login(data);
      if (response.error) {
        setError(response.error);
      } else {
        console.log("Login was successful", response);
        localStorage.setItem("token", response.token); // Save the token
        // Split the email at the '@', take the first part as the username, and capitalize the first letter
        const username = email.split("@")[0];
        const capitalizedUsername =
          username.charAt(0).toUpperCase() + username.slice(1);
        localStorage.setItem("username", capitalizedUsername);
        setError(""); // Clear any existing errors
        navigate("/"); // Redirect to home page or another page
      }
    } catch (error) {
      setError("Failed to login. Please try again.");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <img src={Logo} alt="Logo" />
          <p>See your growth and get consulting support!</p>
          <div className="divider">Login with Email</div>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              minLength="8"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <div className="login-redirect">
            Not registered yet?<a href="/signup"> Create an Account</a>
          </div>
        </div>
        <div className="login-image-section">
          <img src={LoginImage} alt="Login" />
        </div>
      </div>
    </>
  );
};

export default Login;
