import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.scss'
import Void from '../../../assets/images/void.svg'

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <div className='container'>
        <div id='errCode'>404 not found :(</div>
        <div className='text2'>The page you're looking for doesn't exist.</div>
        <div className='guide'>
          <Link to='/'>
            <div className='homeBtn'>Go back to Lobby</div>
          </Link>
        </div>
      </div>
      <div className='imgContainer'>
        <img src={Void} alt='lost' />
      </div>
    </div>
  )
}

export default PageNotFound
