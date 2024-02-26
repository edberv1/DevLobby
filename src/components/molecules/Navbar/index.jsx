import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import devLobbylogo from "../../../assets/images/devlobby-logo-cut.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <Link to="/">
          <div className="navbar-logo">
            <img src={devLobbylogo} alt="DevLoby Logo" onClick={closeMenu} />
          </div>
        </Link>
        {/* Hamburger menu icon */}
        <div
          className="hamburger-menu"
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {/* Navbar links */}
        <ul className={`navbar-links ${isMenuOpen ? "menu-open" : ""}`}>
          <li onClick={closeMenu}>
            <Link to="/" className="home">
              Home
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/playcodearena" className="playcodearena">
              PlayCode Arena
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/chat">Chat</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <div>
            <button className="butonat-nav login" onClick={closeMenu}>
              <Link to="/login">Log in</Link>
            </button>
            <button className="butonat-nav signup" onClick={closeMenu}>
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </ul>
        {/* Buttons */}
        <div className="butonat-client">
          <button className="login">
            <Link to="/login">Log in</Link>
          </button>
          <button className="signup" onClick={closeMenu}>
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
