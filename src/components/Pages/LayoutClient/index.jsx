import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../molecules/Navbar'
import ModalDemo from '../../organisms/ModalDemo'

const ClientLayout = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <div>
        <Navbar />
        <ModalDemo />
        <Outlet />
      </div>
    </>
  )
}

export default ClientLayout
