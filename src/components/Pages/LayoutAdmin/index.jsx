import React from 'react'

import ModalDemo from '../../organisms/ModalDemo'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent/index'
import Sidebar from '../../molecules/Sidebar/index'

const AdminLayout = () => {
  return (
    <div className='adminLayout'>
      <Sidebar/>
      <ModalDemo />
      <AdminHeaderComponent />
    </div>
  )
}

export default AdminLayout
