import React from 'react'
// import ButtonGeneral from '../atoms/ButtonGeneral'

const ModalBasic = ({ children, title, modalOpen, setModalOpen }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='header'>
          <div className='title'>{title}</div>
          <div className='closeBtn'>
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
          <button>Hello</button>
          <button>Hello</button>
          {/* <ButtonGeneral onClick={() => {}}>Close</ButtonGeneral> */}
          {/* <ButtonGeneral onClick={() => {}}>Accept</ButtonGeneral> */}
        </div>
      </div>
    </div>
  )
}

export default ModalBasic
