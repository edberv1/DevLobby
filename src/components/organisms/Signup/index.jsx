import React, { useState } from "react";
import "./Signup.scss";
import SignupImage from "../../../assets/images/Signup-image.png";
import DevLobbyLogoIcon from "../../../assets/images/icon.png";
import { AuthService } from "../../../services/AuthService";
import Navbar from "../../molecules/Navbar";
import Animation from "../../../assets/images/boygirlanimation.mp4";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const data = { username, email, password };

    try {
      const response = await AuthService.signup(data);
      if (typeof response === "string" && response.startsWith("Failed to")) {
        setError(
          "Sorry, we could not connect with the server. Please try again in a few minutes."
        );
      } else if (response.error) {
        setError(response.error);
      } else {
        setIsSignupSuccess(true);
      }
    } catch (error) {
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        {/* Conditionally render the form or success message */}
        {isSignupSuccess ? (
          <div className="success-message">
            You have successfully created an account.🥂
            <br />
            <video src={Animation} autoPlay loop muted></video>
          </div>
        ) : (
          <>
            <div className="signup-form">
              <h2>Sign Up</h2>
              <img src={DevLobbyLogoIcon} alt="DevLobby Logo" />
              <p>See your growth and get consulting support!</p>
              {error && <div className="error-message">{error}</div>}
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
          </>
        )}
      </div>
    </>
  );
};

export default SignUp;
