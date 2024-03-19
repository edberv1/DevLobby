import React, { useContext } from 'react'
import { AuthContext } from '../../../utils/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
import { DarkModeContext } from '../../../utils/DarkModeContext' // Import DarkModeContext
import Sidebar from '../../molecules/Sidebar'
import './LayoutAdmin.scss'

const AdminLayout = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const { isDarkMode } = useContext(DarkModeContext) // Use DarkModeContext

  return (
    <>
      {isLoggedIn ? (
        <div className={isDarkMode ? 'adminLayout dark-mode' : 'adminLayout'}>
          {/* <Sidebar /> */}
          <Outlet />
        </div>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  )
}

export default AdminLayout
