import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './molecules/Navbar'
import ClientHeaderSection from './molecules/ClientHeaderSection'
import Sidebar from './molecules/Sidebar'
import Cards from './organisms/Cards'
import NotificationBar from './atoms/NotificationBar'
import Login from '../components/organisms/Login'
import DashboardCard from './molecules/DashboardCard'

const ClientLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='organism-container'>
          <Outlet />
        </div>
        <Cards />
      </div>
    </>
  )
}

export default ClientLayout
