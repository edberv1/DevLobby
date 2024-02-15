import React from 'react'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent/index'
import Sidebar from '../../molecules/Sidebar'
import BigChartAndStats from '../../organisms/BigChartAndStats'


const AdminLayout = () => {
  return (
    <div className='adminLayout'>
      <div>AdminLayout</div>
      <AdminHeaderComponent />
      <BigChartAndStats />
    </div>
  )
}

export default AdminLayout
