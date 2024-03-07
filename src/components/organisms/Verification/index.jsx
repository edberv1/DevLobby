import React from 'react'
import './Verification.scss'
import { Link, useParams } from 'react-router-dom'

const Verification = () => {
  return (
    <div className='verification'>
      <div className='container'>
        <div id='success'>Verification successful ✅</div>
        <div className='text2'>You are now a member of our community 💖</div>
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
