import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import devLobbylogo from '../../../assets/images/devlobby-logo-cut.png'
import { AuthContext } from '../../../utils/AuthContext'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const { isLoggedIn, logout } = useContext(AuthContext)

  useEffect(() => {
    const handleOutsideClick = event => {
      if (showDropdown && !event.target.closest('.user-greeting')) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [showDropdown])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setShowDropdown(false)
  }

  const handleLogout = () => {
    logout()
    closeMenu()
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link to='/'>
        <div className='navbar-logo'>
          <img src={devLobbylogo} alt='DevLobby Logo' onClick={closeMenu} />
        </div>
      </Link>
      <div
        className='hamburger-menu'
        onClick={toggleMenu}
        role='button'
        tabIndex='0'
      >
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'menu-open' : ''}`}>
        <li onClick={closeMenu}>
          <Link to='/' className='home'>
            Home
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to='/playcodearena' className='playcodearena'>
            PlayCode Arena
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to='/chat'>Chat</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to='/blog'>Blog</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to='/about'>About</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to='/contactus'>Contact Us</Link>
        </li>
        {!isLoggedIn && (
          <div
            className={`buttons-container ${isMenuOpen ? 'menu-active' : ''}`}
          >
            <button className='butonat-nav login' onClick={closeMenu}>
              <Link to='/login'>Log in</Link>
            </button>
            <button className='butonat-nav signup' onClick={closeMenu}>
              <Link to='/signup'>Sign Up</Link>
            </button>
          </div>
        )}
        {isLoggedIn && (
          <li className='navbar-logout' onClick={handleLogout}>
            Sign Out
          </li>
        )}
      </ul>
      <div className='butonat-client'>
        {!isLoggedIn && (
          <>
            <button className='login' onClick={closeMenu}>
              <Link to='/login'>Log in</Link>
            </button>
            <button className='signup' onClick={closeMenu}>
              <Link to='/signup'>Sign Up</Link>
            </button>
          </>
        )}
        {isLoggedIn && (
          <div className='user-greeting'>
            <button onClick={toggleDropdown} className='profile'>
              <i className='fas fa-user-circle fa-2x'></i>
            </button>
            {showDropdown && (
              <div
                className={`dropdown-menu ${
                  showDropdown ? 'dropdown-menu-active' : ''
                }`}
              >
                <Link to='/profile' onClick={closeMenu}>
                  Profile
                </Link>
                <Link to='/settings' onClick={closeMenu}>
                  Settings
                </Link>
                <button onClick={handleLogout}>Log out</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
