import React from 'react'

import ModalDemo from '../../organisms/ModalDemo'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent/index'
import Sidebar from '../../molecules/Sidebar'
import BigChartAndStats from '../../organisms/BigChartAndStats'



const AdminLayout = () => {
  return (
    <div className='adminLayout'>
      <Sidebar/>
      <ModalDemo />
      <AdminHeaderComponent />
      <BigChartAndStats />
    </div>
  )
}

export default AdminLayout
