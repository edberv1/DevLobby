import React from 'react';
import { FaChartPie, FaLightbulb, FaTicketAlt } from 'react-icons/fa'
import { IoIosPeople, IoMdSettings } from 'react-icons/io'
import { MdArticle, MdOutlineSupportAgent } from 'react-icons/md'

export const SidebarData = [
  {
    title: 'Overview',
    path: '/',
    icon: <FaChartPie />,
    cName: 'sidebar-text'
  },
  {
    title: 'Recent',
    path: '/',
    icon: <FaLightbulb />,
    cName: 'sidebar-text'
  },
  {
    title: 'Tickets',
    path: '/',
    icon: <FaTicketAlt />,
    cName: 'sidebar-text'
  },
  {
    title: 'Contacts',
    path: '/',
    icon:<IoIosPeople />,
    cName: 'sidebar-text'
  },
  {
    title: 'Agents',
    path: '/',
    icon: <MdOutlineSupportAgent />,
    cName: 'sidebar-text'
  },
  {
    title: 'Articles',
    path: '/',
    icon: <MdArticle />,
    cName: 'sidebar-text'
  },
  {
    title: 'Settings',
    path: '/',
    icon: <IoMdSettings />,
    cName: 'sidebar-text'
  }

];
