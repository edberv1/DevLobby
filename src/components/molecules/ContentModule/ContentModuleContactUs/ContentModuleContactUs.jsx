import React from "react";
import "./ContentModuleContactUs.scss";
import ContactUsRobot from "../../../../assets/images/ContactUsRobot-removebg.png";
import { Link } from "react-router-dom";

const ContentModuleContactUs = () => {
  return (
    <div className="content-module-chat">
      <div className="content-image">
        <img src={ContactUsRobot} alt="Contact Us Robot" />
      </div>
      <div className="content-info">
        <h1>
          Communicate with all the devs. that chose
          <span className="devLobby">DevLobby</span> as their safe space
        </h1>
        <p>
          Your time here is valuable. Our comfort approach is designed to make
          you feel full with a crowded space of developers. With cutting-edge
          technology and an expert team, we ensure your peace of mind in the
          digital era.
        </p>
        {/* Use Link component for client-side routing */}
        <Link to="/contactus" className="btn-contact">
          Start a Conversation
        </Link>
        <br /> <br />
        <p>Make yourself at home, dev.</p>
      </div>
    </div>
  );
};

export default ContentModuleContactUs;
