import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import './LayoutAdmin.scss'

const AdminLayout = () => {
  return (
    <div className='adminLayout'>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
