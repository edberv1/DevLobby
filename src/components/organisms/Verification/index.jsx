import React from 'react'
import './Verification.scss'
import { Link } from 'react-router-dom'

const Verification = () => {
  return (
    <div className='verification'>
      <div className='container'>
        <div id='success'>You've got mail 📫</div>
        <div className='text2'>
          Verification link sent to your email for your fresh account!
        </div>
        <div className='text1'>
         After that, you can log in 👇
        </div>
        <div className='guide'>
          <Link to='/login'>
            <div className='homeBtn'>Click to login</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Verification
