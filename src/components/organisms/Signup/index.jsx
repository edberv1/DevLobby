import React, { useState } from "react";
import "./Signup.scss";
import SignupImage from "../../../assets/images/Signup-image.png";
import DevLobbyLogoIcon from "../../../assets/images/icon.png";
import { AuthService } from "../../../services/AuthService";
import Navbar from "../../molecules/Navbar";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
    };

    try {
      const response = await AuthService.signup(data);
      console.log(response);
      // tdhenat e userit dalin nconsole
    } catch (error) {
      console.error(error);
      // me tregu errorin, (ska mujt me fetch n'server, passwordi shume weak etj...)
    }
  };
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <img src={DevLobbyLogoIcon} alt="DevLobby Logo" />
          <p>See your growth and get consulting support!</p>
          <div className="divider">
            <hr />
            Sign up with Email <hr />
          </div>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
          <div className="signin-redirect">
            Already have an Account? <a href="/login">Sign in</a>
          </div>
          <footer>©2024 Nexus. All rights reserved.</footer>
        </div>
        <div className="signup-image-section">
          <img src={SignupImage} alt="DevLobby Signup" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
