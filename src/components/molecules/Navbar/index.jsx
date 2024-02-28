import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import devLobbylogo from "../../../assets/images/devlobby-logo-cut.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <Link to="/">
        <div className="navbar-logo">
          <img src={devLobbylogo} alt="DevLobby Logo" onClick={closeMenu} />
        </div>
      </Link>
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
      <ul className={`navbar-links ${isMenuOpen ? "menu-open" : ""}`}>
        <li onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/playcodearena">PlayCode Arena</Link>
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
        {isLoggedIn ? (
          <li className="navbar-logout" onClick={handleLogout}>
            Sign Out
          </li>
        ) : (
          <>
            <li className="butonat-nav login">
              <Link to="/login" onClick={closeMenu}>
                Log in
              </Link>
            </li>
            <li className="butonat-nav signup">
              <Link to="/signup" onClick={closeMenu}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
      <div className="butonat-client">
        {!isLoggedIn && (
          <>
            <button className="login" onClick={closeMenu}>
              <Link to="/login">Log in</Link>
            </button>
            <button className="signup" onClick={closeMenu}>
              <Link to="/signup">Sign Up</Link>
            </button>
          </>
        )}
        {isLoggedIn && (
          <div className="user-greeting">
            <button onClick={handleLogout} className="signout-btn">
              Sign Out
            </button>
            <button className="profile" onClick={closeMenu}>
              <Link to="/profile">
                <i className="fas fa-user-circle fa-2x"></i>
              </Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
