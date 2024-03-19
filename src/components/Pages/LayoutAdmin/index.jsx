import React, { useContext } from 'react'
import { AuthContext } from '../../../utils/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
import { DarkModeContext } from '../../../utils/DarkModeContext' // Import DarkModeContext
import Sidebar from '../../molecules/Sidebar'
import './LayoutAdmin.scss'
import SearchBar from '../../molecules/SearchBar'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent'

const AdminLayout = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const { isDarkMode } = useContext(DarkModeContext) // Use DarkModeContext

  return (
    <>
      {isLoggedIn ? (
        <div className={isDarkMode ? 'adminLayout dark-mode' : 'adminLayout'}>
          <div className='container'>
            <div className='header'>
              <div className='left'></div>

              <div className='right'>
                <div className='search'>
                  <SearchBar />
                </div>
              </div>
            </div>
            <div class='sidebar'>
              <div class='logo'>
                <h1>Logo</h1>
              </div>

              <div class='links'>
                <ul>
                  <li>
                    <a href=''>Overview</a>
                  </li>
                  <li>
                    <a href=''>Users</a>
                  </li>
                  <li>
                    <a href=''>Settings</a>
                  </li>
                </ul>
              </div>

              <div class='logoutBtn'>
                <button>Logout</button>
              </div>
            </div>

            <div className='main'>
              <div className='heading'>
                <AdminHeaderComponent />
              </div>
              <Outlet />
            </div>
          </div>

          {/* <Sidebar /> */}
        </div>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  )
}

export default AdminLayout
