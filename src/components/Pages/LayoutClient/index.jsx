import React from 'react'
import { Outlet } from 'react-router-dom'
import LandingLayout from '../LayoutLanding'

const ClientLayout = () => {
  const isLoggedIn = false
  return (
    <>
      <div className='clientLayout'>
        <div>
          {!isLoggedIn ? <LandingLayout /> : ''}
          <div className='organism-container'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientLayout
