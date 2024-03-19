import React from 'react';
import { FaChartPie, FaLightbulb, FaTicketAlt } from 'react-icons/fa'
import { IoIosPeople, IoMdSettings } from 'react-icons/io'
import { MdArticle, MdOutlineSupportAgent } from 'react-icons/md'
import Logo from "../../../assets/images/icon.png";

export const SidebarData = [

  {
    title: '',
    path: '/admin',
    icon: <img src={Logo} alt="Logo" />,
    cName: 'sidebar-text'
  },
  {
    title: 'Overview',
    path: '/admin',
    icon: <FaChartPie />,
    cName: 'sidebar-text'
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: <IoIosPeople />,
    cName: 'sidebar-text'
  },
  {
    title: 'Settings',
    path: '/admin/settings',
    icon: <IoMdSettings />,
    cName: 'sidebar-text'
  }

];