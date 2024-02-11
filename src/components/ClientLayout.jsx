import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './molecules/Navbar'
import ClientHeaderSection from './molecules/ClientHeaderSection'
import Sidebar from './molecules/Sidebar'
import Cards from './organisms/Cards'
import NotificationBar from './atoms/NotificationBar'
import Login from '../components/organisms/Login'

const ClientLayout = () => {
  return (
    <>
      <Login />
      <div>
        <NotificationBar />
        <Navbar />
        <ClientHeaderSection />
        <Outlet />
        {/* <Sidebar /> */}
        <Cards />
      </div>
    </>
  )
}

export default ClientLayout
