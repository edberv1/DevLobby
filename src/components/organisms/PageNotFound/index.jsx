import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.scss'

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <div className='container'>
        <div id='errCode'>404 not found :(</div>
        <div className='text2'>The page you're looking for doesn't exist.</div>
      </div>
      <div className='guide'>
        <div className='homeBtn'>
          <Link to='/'>Go back home</Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
