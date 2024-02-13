import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../molecules/Navbar'
import ModalBasic from '../../molecules/ModalBasic'

const ClientLayout = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <div>
        <button
          onClick={() => {
            setModalOpen(true)
          }}
        >
          Open modal
        </button>
        <Navbar />
        {modalOpen && (
          <ModalBasic
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            title={'Hello Wolrd'}
          >
            Hello World bla bla bla Hello World bla bla bla Hello World bla bla
            bla Hello World bla bla bla Hello World bla bla bla Hello World bla
            bla bla Hello World bla bla bla Hello World bla bla bla
          </ModalBasic>
        )}
        <Outlet />
      </div>
    </>
  )
}

export default ClientLayout
