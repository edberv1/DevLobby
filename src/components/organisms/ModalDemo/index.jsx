import React, { useState } from 'react'
import ModalBasic from '../../molecules/ModalBasic'
// import ModalConfirm from '../../molecules/ModalConfirm'
import ModalDelete from '../../molecules/ModalDelete'

const ModalDemo = () => {
  const [basicModalOpen, setBasicModalOpen] = useState(false)
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => {
          setBasicModalOpen(true)
        }}
      >
        Open basic modal
      </button>
      <button
        onClick={() => {
          setConfirmModalOpen(true)
        }}
      >
        Open Confirm modal
      </button>

      <ModalBasic
        modalOpen={basicModalOpen}
        setModalOpen={setBasicModalOpen}
        title={'Hello Wolrd'}
      >
        Hello World bla bla bla Hello World bla bla bla Hello World bla bla bla
        Hello World bla bla bla Hello World bla bla bla Hello World bla bla bla
        Hello World bla bla bla Hello World bla bla bla
      </ModalBasic>

      <ModalDelete
        modalOpen={confirmModalOpen}
        setModalOpen={setConfirmModalOpen}
        confirmHandler={() => {
          alert('Confirmed')
        }}
      >
        Hello World bla bla bla Hello World bla bla bla Hello World bla bla bla
        Hello World bla bla bla Hello World bla bla bla Hello World bla bla bla
        Hello World bla bla bla Hello World bla bla bla
      </ModalDelete>
    </div>
  )
}

export default ModalDemo
