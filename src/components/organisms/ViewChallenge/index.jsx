import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './ViewChallenge.scss'

function ViewChallenge() {
    const {id} = useParams();
    const [challenge, setChallenge] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/challenge/${id}`)
        .then((response) => {
            setChallenge(response.data.challenge)
        })
        .catch((err)=>console.log(err))
    }, [])
  return (
    <div className='view-challenge'>
        <h1>Name: {challenge.challengeName}</h1>
        <p>Description: {challenge.challengeDescription}</p>
        <p>Difficulty: {challenge.challengeDifficulty}</p>
        <p>Theoretical: {challenge.theoretical}</p>
        <Link to='/'>Back</Link>
    </div>
  )
}

export default ViewChallenge