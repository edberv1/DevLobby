import React from 'react'
import { Outlet } from 'react-router-dom'
import LandingLayout from './organisms/LandingLayout'

const ClientLayout = () => {
  return (
    <>
      <div>
        <LandingLayout />
        <div className='organism-container'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ClientLayout
