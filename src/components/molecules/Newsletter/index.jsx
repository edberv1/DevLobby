import React, { useState } from "react";
import "./Newsletter.scss";
import NewsPaperImage from "../../../assets/images/newspaperimage-removebg.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <br />
      <div className="newsletter">
        <div className="newsletter-image">
          <img src={NewsPaperImage} alt="Newspaper" />
        </div>
        <div className="newsletter-content">
          <h2>
            Subscribe to our newsletter to get updates to our latest collections
          </h2>
          <p>
            Get 20% off on your first order just by subscribing to our
            newsletter
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          <small>
            You will be able to unsubscribe at any time.
            <br />
            Read our privacy policy <a href="/privacy-policy">here</a>.
          </small>
        </div>
      </div>
      <h1 style={{ color: "#282828" }}>blla</h1>
    </>
  );
};

export default Newsletter;
