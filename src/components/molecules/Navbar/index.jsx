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
    <>
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
          {/* Your existing navbar links */}
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
          {/* Conditionally render user info and sign out if logged in */}
          <div className="butonat-nav">
            {isLoggedIn ? (
              <li onClick={handleLogout}>{username} | Sign Out</li>
            ) : (
              <>
                <li>
                  <button className="butonat-nav login" onClick={closeMenu}>
                    <Link to="/login">Log in</Link>
                  </button>
                </li>
                <li>
                  <button className="butonat-nav signup" onClick={closeMenu}>
                    <Link to="/signup">Sign Up</Link>
                  </button>
                </li>
              </>
            )}
          </div>
        </ul>

        {/* Conditionally render login/signup buttons or user info in the client buttons section */}
        <div className="butonat-client">
          {isLoggedIn ? (
            <>
              <span className="navbar-username" style={{ color: "white" }}>
                {username}
              </span>
              <button
                onClick={handleLogout}
                className="navbar-logout"
                style={{
                  backgroundColor: "#0070ec",
                  color: "white",
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button className="login" onClick={closeMenu}>
                <Link to="/login">Log in</Link>
              </button>
              <button className="signup" onClick={closeMenu}>
                <Link to="/signup">Sign Up</Link>
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
