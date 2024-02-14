import React, { useState } from 'react'
import ModalBasic from '../../molecules/ModalBasic'
import ModalConfirm from '../../molecules/ModalConfirm'

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

      <ModalConfirm
        modalOpen={confirmModalOpen}
        setModalOpen={setConfirmModalOpen}
        title={'Hello Wolrd'}
        confirmHandler={() => {
          alert('Confirmed')
        }}
      >
        Hello World bla bla bla Hello World bla bla bla Hello World bla bla bla
        Hello World bla bla bla Hello World bla bla bla Hello World bla bla bla
        Hello World bla bla bla Hello World bla bla bla
      </ModalConfirm>
    </div>
  )
}

export default ModalDemo
