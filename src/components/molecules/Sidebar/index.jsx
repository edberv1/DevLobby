import React, { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.scss";
import Logo from "../../../assets/images/icon.png";
import { DarkModeContext } from "../../../utils/DarkModeContext"; // Update the path according to your project structure

const Sidebar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={isDarkMode ? "sidebar dark-mode" : "sidebar light-mode"}>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <div className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
        <ul className="sidebar-menu-items" onClick={showSidebar}>
          <li className="sidebar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <img src={Logo} alt="Logo" />

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <div className="dark-mode-button-container">
            <button onClick={(event) => toggleDarkMode(event)}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
