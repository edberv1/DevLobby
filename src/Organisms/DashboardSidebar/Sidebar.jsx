import React from "react";
import "./sidebar.scss";
import { FaChartPie, FaLightbulb, FaTicketAlt } from "react-icons/fa";
import { IoIosPeople, IoMdSettings } from "react-icons/io";
import { MdArticle, MdOutlineSupportAgent } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img src="Logo.png" alt="Logo" />
        </span>
      </div>

      <div className="center">
        <ul>
          <li>
            <FaChartPie className="icon" />
            <span>Overview</span>
          </li>

          <li>
            <FaLightbulb className="icon" />
            <span>Recent</span>
          </li>
          <li>
            <FaTicketAlt className="icon" />
            <span>Tickets</span>
          </li>
          <li>
            <IoIosPeople className="icon" />
            <span>Contacts</span>
          </li>
          <li>
            <MdOutlineSupportAgent className="icon" />
            <span>Agents</span>
          </li>
          <li>
            <MdArticle className="icon" />
            <span>Articles</span>
          </li>
          <li>
            <IoMdSettings className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <button>Dark Mode</button>
    </div>
  );
};

export default Sidebar;
