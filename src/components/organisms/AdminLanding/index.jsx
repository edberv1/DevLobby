import React from 'react'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent'
import BigChartAndStats from '../BigChartAndStats'
import SmallChartsCombined from '../SmallChartsCombined'
import DashboardCardAndTaskManager from '../DashboardCardAndTaskManager'

const AdminLanding = () => {
  return (
    <div className='adminLanding'>
      <div className='heading'>
        <AdminHeaderComponent />
      </div>
      <BigChartAndStats />
      <SmallChartsCombined />
      <DashboardCardAndTaskManager />
    </div>
  )
}

export default AdminLanding
