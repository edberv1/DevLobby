import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditTable() {
    const { id } = useParams();
    const [value, setValue] = useState({
        challengeName: '',
        challengeDescription: '',
        challengeDifficulty: '',
        theoretical: '',
        estimatedTime: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/challenge/${id}`)
            .then((response) => {
                setValue(response.data.challenge);
                console.log(response.data.challenge);
            })
            .catch((err) => console.log(err));
    }, [id]);
         

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log(value);
        axios.put(`http://localhost:8080/api/challenge/${id}`, value)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value: inputValue } = e.target;
        setValue(prevState => ({
            ...prevState,
            [name]: inputValue
        }));
    };

    return (
        <div>
            <div className='challenge-form-container'>
                <h1>Update Challenge Info</h1>
                <form onSubmit={handleUpdate}>
                    <label>Challenge Name</label>
                    <input type="text" name="challengeName" value={value.challengeName} onChange={handleInputChange}></input>
                    <label>Challenge Description</label>
                    <textarea cols={90} rows={7} name="challengeDescription" value={value.challengeDescription} onChange={handleInputChange}></textarea>
                    <label>Challenge Difficulty</label>
                    <select name="challengeDifficulty" value={value.challengeDifficulty} onChange={handleInputChange}>
                        <option value="">Select Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                    <label>Theoretical</label>
                    <select name="theoretical" value={value.theoretical} onChange={handleInputChange}>
                        <option value="">Select if Theoretical</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </select>
                    <label>Estimated Time</label>
                    <input type="text" name="estimatedTime" value={value.estimatedTime} onChange={handleInputChange}></input>
                    <button type="submit">Update Challenge</button>
                </form>
            </div>
        </div>
    );
}

export default EditTable;
