import React from 'react';
import { Link } from 'react-router-dom';

const PlayCodeArena = () => {
  return (
    <div>
      <Link to="/polls">
        Polls Page
      </Link>
      <h1>PlayCode Arena Page</h1>
      <p>Welcome to the PlayCode Arena page!</p>
    </div>
  );
}

export default PlayCodeArena;