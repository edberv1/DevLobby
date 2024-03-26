import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminChallengeTable.scss'

function AdminChallengeTable() {
    const [challenge, setChallenge] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/api/challenge/')
      .then((response) => {
        setChallenge(response.data.challenges)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleDelete = (id) => {
    console.log("The ID of Challenge which is deleted: " + id)
    axios.delete(`http://localhost:8080/api/challenge/${id}`)
      .then((response) => {
        console.log(response)
        setChallenge(challenge.filter((challenge) => challenge._id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
  }

    return(
        <div className='table-container'>
        <h1>Challenges</h1>
        <table width={{}}>
            <thead>
            <tr>
                <th>Challenge ID</th>
                <th>Challenge Name</th>
                <th>Difficulty</th>
                <th>Theoretical</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {challenge.map((challenge, index) => {
                return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{challenge.challengeName}</td>
                    <td>{challenge.challengeDifficulty}</td>
                    <td>{challenge.theoretical}</td>
                    <td>
                        <Link to={`/admin/challenges/edit/${challenge._id}`}>Edit</Link>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(challenge._id)}>Delete</button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>
        </div>
    )
}

export default AdminChallengeTable;