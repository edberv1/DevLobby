import React from 'react'

import ModalDemo from '../../organisms/ModalDemo'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent/index'
import Sidebar from '../../molecules/Sidebar'
import BigChartAndStats from '../../organisms/BigChartAndStats'
import SmallChartsCombined from '../../organisms/SmallChartsCombined'



const AdminLayout = () => {
  return (
    <div className='adminLayout'>
      <Sidebar/>
      <ModalDemo />
      <AdminHeaderComponent />
      <BigChartAndStats />
      <SmallChartsCombined />
    </div>
  )
}

export default AdminLayout
