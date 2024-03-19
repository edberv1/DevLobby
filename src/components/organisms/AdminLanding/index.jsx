import React from 'react'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent'
import BigChartAndStats from '../BigChartAndStats'
import SmallChartsCombined from '../SmallChartsCombined'
import DashboardCardAndTaskManager from '../DashboardCardAndTaskManager'

const AdminLanding = () => {
  return (
    <div className='adminLanding'>
      {/* <AdminHeaderComponent /> */}
      <BigChartAndStats />
      <SmallChartsCombined />
      <DashboardCardAndTaskManager />
    </div>
  )
}

export default AdminLanding
