import React, { useContext } from 'react'

import { AuthContext } from '../../../utils/AuthContext'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent/index'
import Sidebar from '../../molecules/Sidebar'
import BigChartAndStats from '../../organisms/BigChartAndStats'
import SmallChartsCombined from '../../organisms/SmallChartsCombined'
import { Navigate } from 'react-router-dom'
import UserTable from "../../molecules/UserTable"

const AdminLayout = () => {
  const { isLoggedIn, logout } = useContext(AuthContext)

  return (
    <>
      {isLoggedIn ? (
        <div className='adminLayout'>
          <button onClick={logout}>Logout</button>
          <Sidebar />
          <AdminHeaderComponent />
          <BigChartAndStats />
          <SmallChartsCombined />
          <UserTable></UserTable>
        </div>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  )
}

export default AdminLayout
