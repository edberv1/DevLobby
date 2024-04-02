import React, { useState } from 'react'
import './DiaryForm.scss'
import ProfileGirl from '../../../assets/images/profile_picture_demo.png'

const DiaryFrom = () => {
  const [text, setText] = useState('')

  const handleInputBlur = e => {
    if (text.length) {
      return e.target.focus()
    }
  }

  const handlePost = () => {
    console.log(text)
    setText('')
  }

  return (
    <div className='diaryForm'>
      <img src={ProfileGirl} alt='Profile' className='profile-img' />

      <div className='inputContainer'>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          name='postContent'
          placeholder="What's going on today dev?"
          onBlur={handleInputBlur}
        />

        <div className='actionContainer'>
          <div className='addPhotoBtn'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M15 8h.01' />
              <path d='M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z' />
              <path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5' />
              <path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3' />
            </svg>
          </div>

          <div onClick={handlePost} className='postBtn'>
            Post
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiaryFrom
