import React from 'react'
import ModalDemo from '../../organisms/ModalDemo'
import AdminHeaderComponent from '../../molecules/AdminHeaderComponent/index'

const AdminLayout = () => {
  return (
    <div className='adminLayout'>
      <div>AdminLayout</div>
      <ModalDemo />
      <AdminHeaderComponent />
    </div>
  )
}

export default AdminLayout
