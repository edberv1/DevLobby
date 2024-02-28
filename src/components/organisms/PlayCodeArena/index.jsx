import React from 'react';
import { Link } from 'react-router-dom';
import PlayArenaCards from '../../molecules/PlayArenaCards'
import PlayArenaHeading from '../../atoms/PlayArenaHeading'

const PlayCodeArena = () => {
  return (
    <div>
      <PlayArenaHeading />
      <PlayArenaCards />
      <Link to="/polls">
        Polls Page
      </Link>
      <h1>PlayCode Arena Page</h1>
      <p>Welcome to the PlayCode Arena page!</p>
    </div>
  );
  
}

export default PlayCodeArena;
