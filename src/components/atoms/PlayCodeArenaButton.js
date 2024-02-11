import React from 'react';
import { Link } from 'react-router-dom';

function PlayCodeArenaButton() {
  return (
      <Link to="/playcodearena" className="btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        PlayCode Arena
      </Link>
  );
}

export default PlayCodeArenaButton;
