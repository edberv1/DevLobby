import React from "react";
import "../Styles/Signup.scss";
import SignupImage from "../Images/Signup-image.png";
import DevLobbyLogoIcon from "../Images/Logo/devlobby-logoIcon.png";

const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <img src={DevLobbyLogoIcon} alt="DevLobby Logo" />
          <p>See your growth and get consulting support!</p>
          <div className="divider">
            <hr />
            Sign up with Email <hr />
          </div>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input
              type="password"
              placeholder="Password"
              minLength="8"
              required
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
