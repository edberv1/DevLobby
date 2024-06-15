import React from 'react'
import './DevDiary.scss'
import DiaryFrom from '../../molecules/DiaryForm'
import DiaryCard from '../../molecules/DiaryCard'
import Contacts from '../../molecules/DiarySidebar'

const DevDiary = () => {
  const cards = [
    {
      fullname: 'Filan Fisteku',
      username: 'fistekuuu',
      dateOfCreation: new Date(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      upvoteCount: 12,
      media: ''
    },
    {
      fullname: 'Erdit Bobaj',
      username: 'babloku',
      dateOfCreation: new Date(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      upvoteCount: 12
    }
  ]

  return (
    <div className='devDiary'>
      <div className='diaryBody'>
        <Contacts />
        <div className='cardContainer'>
          <DiaryFrom />
          {cards.map((card, i) => {
            return (
              <DiaryCard
                key={i}
                fullname={card?.fullname}
                username={card?.username}
                dateOfCreation={card?.dateOfCreation?.toISOString()}
                text={card?.text}
                upvoteCount={card?.upvoteCount}
                media={card?.media}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DevDiary
