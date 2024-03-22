import React from 'react'

const Message = ({ message }) => {
  return (
    <div className='msg-container'>
      <div className='icon'>#</div>
      <div className='msg'>{message}</div>
    </div>
  )
}

export default Message
