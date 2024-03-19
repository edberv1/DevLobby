import React, { useContext } from 'react'
import { AuthContext } from '../../../utils/AuthContext'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { DarkModeContext } from '../../../utils/DarkModeContext' // Import DarkModeContext
import Sidebar from '../../molecules/Sidebar'
import './LayoutAdmin.scss'
import SearchBar from '../../molecules/SearchBar'
import Logo from '../../../assets/images/icon.png'
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
              <Link to='/'>
                <div class='logo'>
                  <img src={Logo} width={140} alt='' />
                </div>{' '}
              </Link>

              <div class='links'>
                <ul>
                  <li>
                    <Link to='/admin'>Overview</Link>
                  </li>
                  <li>
                    <Link to='/admin/users'>Users</Link>
                  </li>
                  <li>
                    <Link to='/admin/settings'>Settings</Link>
                  </li>
                </ul>
              </div>

              <div class='logoutBtn'>
                <button>Logout</button>
              </div>
            </div>

            <div className='main'>
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
