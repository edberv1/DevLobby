import React, { useContext, useEffect, useState } from "react";
import { AuthService } from "../../../services/AuthService";
import "./Login.scss";
import Logo from "../../../assets/images/icon.png";
import LoginImage from "../../../assets/images/Signup-image.png";
import Navbar from "../../molecules/Navbar";
import { useNavigate } from "react-router-dom"; // For navigation
import { AuthContext } from "../../../utils/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To redirect after login

  const { login, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await AuthService.login(data);
      if (response === "Failed to fetch" || response.error) {
        setError(response.error);
        return;
      } else {
        setError(""); // Clear any existing errors
      }
      login(response.token);
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

          <img src={Logo} alt="Logo" className="devlobby-logo" />
          <p>See your growth and get consulting support!</p>
          <div className="divider">
            <hr />
            Log in with Email <hr />
          </div>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleLogin} className="login-input-form">
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
