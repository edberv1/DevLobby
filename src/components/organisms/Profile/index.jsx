import React from 'react';
import './Profile.scss';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <header className="profile-header">
        <img src="https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg" alt="Profile" className="profile-image" />
        <h1 className="profile-name">Sara</h1>
        <p className="profile-username">@Sara</p>
        <p className="profile-description">A student of CSE Department at UBT</p>
        <div className="profile-social-links">
          <button className="social-link"><i className="fab fa-twitter"></i></button>
          <button className="social-link"><i className="fab fa-linkedin-in"></i></button>
          <button className="social-link"><i className="fab fa-github"></i></button>
        </div>
      </header>
      <div className="body">
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
    </div>
  );
};

export default ProfileCard;
