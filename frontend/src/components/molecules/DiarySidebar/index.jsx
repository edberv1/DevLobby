import React from 'react'
import ProfileGirl from '../../../assets/images/profile_picture_demo.png'
import './DiarySidebar.scss'

const Contacts = ({ fullName, username, about }) => {
  return (
    <div className='diarySidebar'>
      <aside>
        <div className='userContainer'>
          <img src={ProfileGirl} alt='Profile' className='profile-img' />

          <div className='fullName'>Filan Fisteku {fullName}</div>
          <div className='username'>@fistekuuu {username}</div>
          <div className='about'>
            {about} A full stack developer and a secret agent. Here to solve
            your problems.
          </div>
        </div>
        <div className='friendsContainer'>Friends</div>
      </aside>
    </div>
  )
}

export default Contacts
