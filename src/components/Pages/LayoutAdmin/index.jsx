import React, { useContext } from 'react'
import { AuthContext } from '../../../utils/AuthContext'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { DarkModeContext } from '../../../utils/DarkModeContext' // Import DarkModeContext
import './LayoutAdmin.scss'
import SearchBar from '../../molecules/SearchBar'
import Logo from '../../../assets/images/icon.png'
import { FaChartPie, FaUsers } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { TbDoorExit } from 'react-icons/tb'

const AdminLayout = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const { isDarkMode } = useContext(DarkModeContext) // Use DarkModeContext
  const { logout } = useContext(AuthContext)
  return (
    <>
      {isLoggedIn ? (
        <div className={isDarkMode ? 'adminLayout dark-mode' : 'adminLayout'}>
          <div className='container'>
            <div className='header'>
              <div className='left'>
                <div className='title'>DevLobby Admin Dashboard</div>
              </div>

              <div className='right'>
                <div className='search'>
                  <SearchBar />
                </div>
              </div>
            </div>
            <div class='sidebar'>
              <div className='top'>
                <Link to='/'>
                  <div class='logo'>
                    <img src={Logo} width={140} alt='' />
                  </div>
                </Link>

                <div class='links'>
                  <ul>
                    <Link to='/admin'>
                      <li>
                        <FaChartPie />
                        Overview
                      </li>
                    </Link>
                    <Link to='/admin/users'>
                      <li>
                        <FaUsers />
                        Users
                      </li>
                    </Link>
                    <Link to='/admin/settings'>
                      <li>
                        <IoMdSettings />
                        Settings
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>

              <div onClick={logout} class='logout-button'>
                <TbDoorExit />
                Logout
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
