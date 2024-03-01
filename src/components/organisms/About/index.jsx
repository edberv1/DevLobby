import React from 'react';
import './About.scss';

const About = () => {
  const teamMembers = [
    { id: 1, name: 'Abedin Telaku', position: 'Web Developer', gender: 'male' },
    { id: 2, name: 'Agnit Misini', position: 'Web Developer', gender: 'male' },
    { id: 3, name: 'Leonat Krasniqi', position: 'Lead Team', gender: 'male' },
    { id: 4, name: 'Edber Vuçitërna', position: 'Web Developer', gender: 'male' },
    { id: 5, name: 'Lisa Ramizi', position: 'Web Developer', gender: 'female' },
    { id: 6, name: 'Nol Ahmedi', position: 'Web Developer', gender: 'male' },
    { id: 7, name: 'Orges Isufi', position: 'Web Developer', gender: 'male' },
    { id: 8, name: 'Rrezon Curraj', position: 'Web Developer', gender: 'male' },
    { id: 9, name: 'Saimir Bunjaku', position: 'Web Developer', gender: 'male' },
    { id: 10, name: 'Shpat Spahiu', position: 'Web Developer', gender: 'male' },
  ];

  const teamLeader = teamMembers.find(member => member.position === 'Lead Team');
  const otherMembers = teamMembers.filter(member => member.id !== (teamLeader ? teamLeader.id : null));

  return (
    <div className="about">
      <div className="company-info">
        <h2>About Us</h2>
        <p>
Founded with the vision of fostering a community where developers, creators, and dreamers can converge, Dev Lobby is more than just a platform; it's a sanctuary designed to nurture your professional aspirations while catering to your personal quest for fun and relaxation. Here, we celebrate the spirit of innovation and the joy of escapism in equal measure.</p>
      </div>
      <h1>Meet the Team</h1>
      <div className="team-members team-leader-only">
        {teamLeader && (
          <div key={teamLeader.id} className="team-member-card">
            <div className={`avatar ${teamLeader.gender}`}></div>
            <div className="member-info">
              <h3>{teamLeader.name}</h3>
              <p>{teamLeader.position}</p>
            </div>
          </div>
        )}
      </div>
      <div className="team-members">
        {otherMembers.map(member => (
          <div key={member.id} className="team-member-card">
            <div className={`avatar ${member.gender}`}></div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;