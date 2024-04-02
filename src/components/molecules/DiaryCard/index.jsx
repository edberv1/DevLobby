import React, { useState } from 'react'
import ImgZoomModal from '../../atoms/ImgZoomModal'
import './DiaryCard.scss'
import ProfileGirl from '../../../assets/images/profile_picture_demo.png'

const DiaryCard = ({
  fullname,
  username,
  text,
  dateOfCreation,
  upvoteCount,
  media
}) => {
  const [imgModalOpen, setImgModalOpen] = useState(false)

  return (
    <>
      <div className='diaryCard'>
        <div className='left'>
          <img src={ProfileGirl} alt='Profile' className='profile-img' />
        </div>
        <div className='middle'>
          <div className='cardHeader'>
            <div className='headerInfo'>
              <div className='fullname'>{fullname}</div>
              <div className='username'>{'@' + username}</div>
              <div className='dateOfCreation'>{'12m'}</div>
            </div>
          </div>
          <div className='cardBody'>
            <div className='text'>{text}</div>
            {media && (
              <div className='imageContainer'>
                <img
                  onClick={() => setImgModalOpen(true)}
                  src={media}
                  alt='Diary media'
                />
              </div>
            )}
          </div>
          <div className='cardFooter'>
            <div
              onClick={() => {
                console.log('UPVOTE!')
              }}
              className='upvoteContainer'
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='heart'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
              </svg>
              <span className='count'>{upvoteCount}</span>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='optionsBtn'>
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
              <path d='M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
              <path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
              <path d='M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
            </svg>
          </div>
        </div>
      </div>

      {media && (
        <ImgZoomModal
          modalOpen={imgModalOpen}
          setModalOpen={setImgModalOpen}
          media={media}
        />
      )}
    </>
  )
}

export default DiaryCard
