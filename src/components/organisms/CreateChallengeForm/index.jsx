import React, { useState } from 'react';
import axios from 'axios';
import './createChallenge.scss'

function CreateChallenge() {
    const [challengeName, setChallengeName] = useState('');
    const [challengeDescription, setChallengeDescription] = useState('');
    const [challengeDifficulty, setChallengeDifficulty] = useState('');
    const [theoretical, setTheoretical] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/challenge/', {
            challengeName: challengeName,
            challengeDescription: challengeDescription,
            challengeDifficulty: challengeDifficulty,
            theoretical: theoretical,
            estimatedTime: estimatedTime
        })
        .then((response) => {
            console.log(response);
            setChallengeName('');
            setChallengeDescription('');
            setChallengeDifficulty('');
            setTheoretical('');
            setEstimatedTime('');
        })
        .catch((error) => {
            console.log(error);
        });
    }    
    
    return(
        <div className='challenge-form-container'>
        <h1>Create Challenge</h1>
        <form onSubmit={handleSubmit}>
            <label>Challenge Name</label>
            <input type="text" value={challengeName} onChange={(event) => setChallengeName(event.target.value)}></input>
            <label>Challenge Description</label>
            <textarea cols={90} rows={7} value={challengeDescription} onChange={(event) => setChallengeDescription(event.target.value)}></textarea>
            <label>Challenge Difficulty</label>
            <select value={challengeDifficulty} onChange={(event) => setChallengeDifficulty(event.target.value)}>
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                <option value="Advanced">Advanced</option>
            </select>
            <label>Theoretical</label>
            <select value={theoretical} onChange={(event) => setTheoretical(event.target.value)}>
                <option value="">Select if Theoretical</option>
                <option value="True">True</option>
                <option value="False">False</option>
            </select>
            <label>Estimated Time</label>
            <input type="text" value={estimatedTime} onChange={(event) => setEstimatedTime(event.target.value)}></input>
            <button type="submit">Create Challenge</button>
        </form>
        </div>
    )
}

export default CreateChallenge;
