import React, { useState } from 'react';
import './PlayArenaCards.scss';
import theoryImage from '../../../assets/images/Theory-png.png';
import practiceImage from '../../../assets/images/Practice-png.png';
import SelectButton from '../../atoms/SelectButton';
import PlayArenaLetsgoButton from '../../atoms/PlayArenaLetsgoButton';
import ChallengeArea from '../../organisms/ChallengeArea';

function PlayArenaCards() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  return (
    <>
    
    <div className="play-arena-cards-container">
      <div className="play-arena-cards">
        <div className={`card ${selectedCard === 0 ? 'selected' : ''}`}>
          <div className="content">
            <h2>Theoretical Questions</h2>
            <p>Test your theory knowledge and expertise with a variety of theoretical questions. Explore concepts, principles, and frameworks to expand your understanding.</p>
          </div>
          <div className="image" style={{ backgroundImage: `url(${theoryImage})` }}></div>
          <SelectButton onClick={() => handleCardSelect(0)} selected={selectedCard === 0} />
        </div>
        <div className={`card ${selectedCard === 1 ? 'selected' : ''}`}>
          <div className="content">
            <h2>Coding Questions</h2>
            <p>Practice your coding skills with challenging coding questions. Solve problems, write algorithms, and improve your programming proficiency.</p>
          </div>
          <div className="image" style={{ backgroundImage: `url(${practiceImage})` }}></div>
          <SelectButton onClick={() => handleCardSelect(1)} selected={selectedCard === 1} />
          
        </div>
      </div>
      
      {selectedCard === 1 && <ChallengeArea />}
    </div>
    
    </>
  );
}

export default PlayArenaCards;
