import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import devLobbylogo from '../../assets/images/devlobby-logo-cut.png'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className='navbar-logo'>
          <img src={devLobbylogo} alt='DevLoby Logo' />
        </div>
        {/* Hamburger menu icon */}
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
        {/* Navbar links */}
        <ul className={`navbar-links ${isMenuOpen ? 'menu-open' : ''}`}>
          <li onClick={closeMenu}>
            <Link to='/'>Home</Link>
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
          <div>
            <button className='butonat-nav'>Log in</button>
            <button className='butonat-nav'>Sign up</button>
          </div>
        </ul>
        {/* Buttons */}
        <div className='butonat-client'>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
