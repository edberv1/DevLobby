import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.scss'

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <h1>Page not found.</h1>
      <div className='goBackBtn'>
        <Link to='/'>Go back home</Link>
      </div>
    </div>
  )
}

export default PageNotFound
