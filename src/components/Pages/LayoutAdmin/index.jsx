import React, { useContext } from 'react'
import { AuthContext } from '../../../utils/AuthContext'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { DarkModeContext } from '../../../utils/DarkModeContext' // Import DarkModeContext
import './LayoutAdmin.scss'
import SearchBar from '../../molecules/SearchBar'
import Logo from '../../../assets/images/icon.png'
import { FaChartPie, FaUsers, FaMoon, FaSun } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { TbDoorExit } from 'react-icons/tb'

const AdminLayout = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext) // Use DarkModeContext
  const { token, logout, isLoggedIn } = useContext(AuthContext)
  return (
    <>
      {token ? (
        <div className='adminLayout'>
          <div className='container'>
            <div className={isDarkMode ? 'header header-dark' : 'header'}>
              <div className='left'>
                <div className='title'>DevLobby Admin Dashboard</div>
              </div>

              <div className='right'>
                <div className='search'>
                  <SearchBar />
                </div>
              </div>
            </div>
            <div class={isDarkMode ? 'sidebar sidebar-dark' : 'sidebar'}>
              <div className='top'>
                <Link to='/'>
                  <div class='logo'>
                    <img src={Logo} width={140} alt='' />
                  </div>
                </Link>

                <div class='links'>
                  <ul className={isDarkMode ? '' : 'light-mode'}>
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

              <div className='bottom'>
                <div onClick={logout} class='logout-button'>
                  <TbDoorExit />
                  Logout
                </div>
                <div>
                  <button
                    onClick={toggleDarkMode}
                    className={
                      !isDarkMode
                        ? 'darkmode-button'
                        : 'darkmode-button darkmode-light'
                    }
                  >
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                  </button>
                </div>
              </div>
            </div>

            <div className='main'>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to='/adminLogin' />
      )}
    </>
  )
}

export default AdminLayout
