import React, { useContext } from "react";
import "./Profile.scss";
import ProfileGirl from "../../../assets/images/profile_picture_demo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../utils/AuthContext";
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const ProfileCard = () => {
  const { userData } = useContext(AuthContext); 

  return (
    <div className="profile-container">
      <div className="profile-card">
        <header className="profile-header">
          <img src={ProfileGirl} alt="Profile" className="profile-image" />
          {userData && (
            <>
              <h1 className="profile-name">{userData.name}</h1>
              <p className="profile-username">@{userData.username}</p>
              <p className="profile-description">{userData.email}</p>
            </>
          )}
          <div className="profile-social-links">
            <Link to="twitter">
              <FaTwitterSquare />
            </Link>
            <Link to="linkedin">
              <FaLinkedin />
            </Link>
            <Link to="github">
              <FaGithubSquare />
            </Link>
          </div>
        </header>
      </div>
      <div className="profile-body">
        <section className="profile-about">
          <h2>About</h2>
          <p>Expected year of Graduation: 2024</p>
          <p>Education: University for Business and Technology (UBT)</p>
        </section>
        <section className="profile-badges">
          <h2>Badges</h2>
          <div className="badges-container">
            <div className="badge">C++</div>
            <div className="badge">Java</div>
            <div className="badge">Python</div>
            <div className="badge">30 Days of Code</div>
            <div className="badge">C Language</div>
          </div>
        </section>
        <section className="profile-skills">
          <h2>Verified Skills</h2>
          <div className="skills-container">
            <div className="skill verified">Python (Basic)</div>
            <div className="skill verified">React JS</div>
          </div>
        </section>
        <section className="profile-experience">
          <h2>Work Experience</h2>
          <button className="add-experience-btn">Starlabs</button>
        </section>
      </div>
    </div>
  );
};

export default ProfileCard;