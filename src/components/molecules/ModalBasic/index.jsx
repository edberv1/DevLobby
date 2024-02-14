import React, { useEffect } from 'react'
import './ModalBasic.scss'
import BackDrop from '../../atoms/BackDrop'

const ModalBasic = ({ children, title, modalOpen, setModalOpen }) => {
  // prevent screen from scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'unset')
  })

  // close if ESC pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return
      setModalOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <>
      {modalOpen && (
        <div className='modalBasic'>
          <BackDrop setModalOpen={setModalOpen} />
          <div className={`modalContainer`}>
            <div className='header'>
              <div className='title'>{title}</div>
              <div
                onClick={() => {
                  setModalOpen(false)
                }}
                className='closeBtn'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className=''
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M18 6l-12 12' />
                  <path d='M6 6l12 12' />
                </svg>
              </div>
            </div>
            <div className='body'>{children}</div>
            <div className='footer'>
              <button onClick={() => setModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalBasic
