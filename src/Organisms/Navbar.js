import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="navbar-logo">DevLobby</div>
        {/* Hamburger menu icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {/* Navbar links */}
        <ul className={`navbar-links ${isMenuOpen ? "menu-open" : ""}`}>
          <li>
            <Link to="/" className="home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/cards">Our Cards</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <div>
            <button className="butonat-nav">Log in</button>
            <button className="butonat-nav">Sign up</button>
          </div>
        </ul>
        {/* Buttons */}
        <div className="butonat-client">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
