import React from 'react'
import './DiaryForm.scss'
import ProfileGirl from '../../../assets/images/profile_picture_demo.png'

const DiaryFrom = () => {
  return (
    <div className='diaryForm'>
      <img src={ProfileGirl} alt='Profile' className='profile-img' />

      <div className='inputContainer'>
        {/* <textarea /> */}
        {/*     textarea {
      border: none;
      background-color: transparent;
      resize: none;
      outline: none;
    }
    textarea {
      color: white;
      padding: 1rem;
      width: 90%;
      background-color: #28343e;
      border-radius: 12px;
      margin-bottom: 2rem;
    } */}
      </div>
    </div>
  )
}

export default DiaryFrom
