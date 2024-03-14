import React, { useContext } from 'react'
import { AuthContext } from '../../../utils/AuthContext'
import { DarkModeContext } from '../../../utils/DarkModeContext' // Import DarkModeContext
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent/index'
import Sidebar from '../../molecules/Sidebar'
import BigChartAndStats from '../../organisms/BigChartAndStats'
import SmallChartsCombined from '../../organisms/SmallChartsCombined'
import { Navigate } from 'react-router-dom'
import UserTable from '../../molecules/UserTable'
import DashboardCardAndTaskManager from '../../organisms/DashboardCardAndTaskManager'
import './LayoutAdmin.scss'

const AdminLayout = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const { isDarkMode } = useContext(DarkModeContext) // Use DarkModeContext

  return (
    <>
      {isLoggedIn ? (
        <div className={isDarkMode ? 'adminLayout dark-mode' : 'adminLayout'}>
          <Sidebar />
          <AdminHeaderComponent />
          <BigChartAndStats />
          <SmallChartsCombined />
          <DashboardCardAndTaskManager />
          <UserTable />
        </div>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  )
}

export default AdminLayout
