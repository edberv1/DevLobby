import React from 'react';
import { Link } from 'react-router-dom';

function LearnMoreButton() {
  return (
    <Link to="/learn-more">
      <button className="LearnMore-button">
        Restin' and Testin' <span className="learn-more"> - Learn More →</span>
      </button>
    </Link>
  );
}

export default LearnMoreButton;
