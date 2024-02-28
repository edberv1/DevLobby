import React, { useContext } from 'react'

import { AuthContext } from '../../../utils/AuthContext'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent/index'
import Sidebar from '../../molecules/Sidebar'
import BigChartAndStats from '../../organisms/BigChartAndStats'
import SmallChartsCombined from '../../organisms/SmallChartsCombined'
import { Navigate } from 'react-router-dom'

const AdminLayout = () => {
  const { token, isLoggedIn, login, logout } = useContext(AuthContext)

  return (
    <>
      {token === 'test' ? (
        <div className='adminLayout'>
          <Sidebar />
          <AdminHeaderComponent />
          <BigChartAndStats />
          <SmallChartsCombined />
        </div>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  )
}

export default AdminLayout
