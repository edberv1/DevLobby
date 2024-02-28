import React from 'react';
import { Link } from 'react-router-dom';
import './PlayArenaLetsgoButton.scss';

function PlayArenaLetsgoButton({ selectedCard }) {
  return (
    <div className="letsgo-button-container">
      {selectedCard !== null ? (
        <Link
          to={selectedCard === 0 ? '/playcodearena/theoretical' : '/playcodearena/practical'}
          className="letsgo-button active"
        >
          Enter Arena →
        </Link>
      ) : (
        <button className="letsgo-button" disabled>
          Select a Card
        </button>
      )}
    </div>
  );
}

export default PlayArenaLetsgoButton;
