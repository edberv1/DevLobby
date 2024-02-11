import React from 'react';
import { Link } from 'react-router-dom';
import LearnMoreButton from "../atoms/LearnMoreButtonPage"
import HeaderBanner from "../atoms/HeaderBanner"
import PlayCodeArenaButton from "../atoms/PlayCodeArenaButton"

function ClientHeaderSection() {
  return (
    <header className="header">
      <Link to="/learn-more">
        <LearnMoreButton />
      </Link>
      <HeaderBanner />
      <Link to="/code-arena">
        <PlayCodeArenaButton />
      </Link>
    </header>
  );
}

export default ClientHeaderSection;
